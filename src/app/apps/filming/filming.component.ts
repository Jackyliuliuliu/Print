import { Component, Injector, Renderer2, ElementRef, HostListener, ViewChild, NgZone, ChangeDetectorRef } from '@angular/core';
import { AdvAppBaseComponent, FilmingMode } from '../adv-app-base/adv-app-base.component';
import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';
import * as AppCommon from 'uih-appcommon';
import * as NetBase from 'uih-netbase';
import { LoadEndOperation, LoadSeriesStartOperation, SetLayoutOperation } from '../adv-app-base/adv-app-base.component.paneloperations';
import { StudyDto } from '../../../root/adv-app.server.api.service';
import { ActivatedRoute } from '@angular/router';
import { FilmingCellActionInitializeItem, MedViewerControlCell } from 'uih-medviewercontrol';
import { FilmingWorkflow } from './filming.component.workflow';
import * as FilmingAction from './filming.component.action';
import html2Canvas from 'html2canvas';
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;
import { PrinterConfig } from '../filming/filming-toolbox-printer/filming-toolbox-printer.component';
import { FilmingVisibleService } from './filming.component.service';
import { delay } from 'q';
import { ToastService } from '../heart/service/toast.service';
import { isNumber } from 'util';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DateTimeHelper } from 'uih-appcommon';
import * as AppToolkit from 'uih-apptoolkit';
import moment from 'moment';



@Component({
    selector: 'app-filming',
    templateUrl: './filming.component.html',
    styleUrls: ['./filming.component.css'],
    providers: [AppCommon.ModelContainer]
})


export class FilmingComponent extends AdvAppBaseComponent {
    viewerControlClone: Viewer.MedViewerControl = undefined;
    currentActionType: Viewer.ActionTypes = Viewer.ActionTypes.Pointer;
    currentPage: number = 0;
    uiImageNumber: number = 0;
    cellImage: string;
    layoutSize: number = 0;
    seriesInstanceUid: string;
    currentIndex: number = -1;
    previousIndex: number = -1;
    LoadSeriesInstanceUID: string = '';
    isButtonDisable: boolean = false;
    rows: number = 5;
    colums: number = 4;
    bwheeled: boolean = false;
    draggedIndex: string = '';
    droppedIndex: string = '';
    cellCollecton1: Viewer.MedViewerControlCell[] = [];
    cellCollecton2: Viewer.MedViewerControlCell[] = [];
    canvasImg: any;
    currentPrinterConfig: PrinterConfig;
    isHiddenPrintProgress: boolean = true;
    showPupup: boolean = false;
    loadPrintPercent: number = 0;
    viewerControlCloneDomWidth: number;
    viewerControlCloneDomHeight: number;
    scrollTerms: Subject<string> = new Subject<string>();
    wheelTerms: Subject<string> = new Subject<string>();
    printTerms: Subject<boolean> = new Subject<boolean>();
    eachScrollLen: number = 0;//每段滚动高度
    xpos: number = 0;
    ypos: number = 0;
    isScrolled: boolean = false;//用于防止重复触发onScroll
    updatedCellList: string[] = [];
    hasUpdated: boolean = false;
    previouSelectedCell: MedViewerControlCell[] = [];
    currentClickCell: MedViewerControlCell;
    showAiDialog: boolean = false;
    showTitle: string = '';
    showContent: string = '';
    isImageTextVisible: boolean = true;
    hasPrint: boolean = false;
    updateTextTimes: number = 0;
    printSubjectNum: number = 0;
    patientId: string;
    patientName: string;
    birthDate: string;
    institutionName: string;
    accessionNumber: string;
    sex: string;
    age: String;
    printDate: string;
    viewcontrolHeight: number = 706;//图像区域加上title
    viewcontrolTitleHeight: number = 40;//标题区域高度
    layOutList: FilmingLayoutInfo[] = [];
    isSameLayout: boolean = true;
    newPage: number = 0;
    titleModel: string = "model1";//必须设置一个初始值

    private _pages: number;
    public get pages(): number {
        return this._pages;
    }
    public set pages(value: number) {
        this._pages = value;
        let clientHeight = this.pagingBar.nativeElement.clientHeight;//可见高度、内容实际高度 + 上下内边距  
        this.pagingp.nativeElement.style.height = clientHeight * this._pages + 'px';
        if (value == 1) {
            this.pagingBar.nativeElement.style.overflowY = 'hidden';
        }
        else {
            this.pagingBar.nativeElement.style.overflowY = 'scroll';
        }
        //初始化滚动条数据
        let scrollHeight = this.pagingBar.nativeElement.scrollHeight; //可滚动内容高度
        this.eachScrollLen = (scrollHeight - clientHeight) / (this.pages);//+1是为防止滚动滑块滑倒页面底部   
    }



    @ViewChild('pagingp', { static: false }) pagingp: ElementRef
    @ViewChild('pagingBar', { static: false }) pagingBar: ElementRef;
    @ViewChild('viewerControl', { static: true }) viewerControlArea: ElementRef;
    @ViewChild('viewerControlClone', { static: false }) viewerControlCloneElement?: ElementRef;
    @ViewChild('printControl', { static: false }) printControl?: ElementRef;
    private viewControlTitle?: ElementRef;
    @ViewChild('viewControlTitle', { static: false })
    set content(content: ElementRef) {
        if (content) {
            this.viewControlTitle = content;//避免因ngif=model导致初始化时不能获取viewControlTitle.nativeElement;
            //重新set后会导致width为空，所以需要重新设值
            this.viewControlTitle.nativeElement.style.width = this.viewerControlArea.nativeElement.style.width;
        }
    };
    @ViewChild('printControlTitle', { static: false }) printControlTitle?: ElementRef;
    @ViewChild('viewControlDiv', { static: false }) viewControlDiv?: ElementRef;
    @HostListener('dblclick', ['$event']) dblClick() {
        let cell = this.viewerControl.getCell((<any>event.target).id)
        if (cell != undefined) {
            let isMax = this.viewerControl.layoutManager.isMaxmized;

            if (isMax) {
                this.isButtonDisable = true;
                cell.displayData.imageText.fontSize = 18;
                this.pagingBar.nativeElement.style.overflowY = 'hidden';
            }
            else {
                this.isButtonDisable = !this.hasPrint ? false : true;
                this.setfontSize();
                this.pagingBar.nativeElement.style.overflowY = 'scroll';
            }

            if (!isMax && this.bwheeled)//缩小时需要刷新UI，将大图的窗宽窗位状态同步到所翻的图片
            {
                setTimeout(() => {
                    this.getSelectCellsDcmImageIndex().then(pos => {
                        if (Number(pos) < this.layoutSize) {//翻转图片在当前页就切布局
                            this.onLayoutClicked({ 'row': this.rows, 'line': this.colums });
                            let cells = this.viewerControl.getCells();
                            for (let cell of cells) {
                                let i = cell.cellName.substr(5);
                                if (i == pos) {
                                    cell.isSelected = true;
                                } else {
                                    cell.isSelected = false;
                                }
                            }
                        } else {//翻转图片不在当前页就翻胶片

                            let a = Number(pos);
                            let newPage = Math.ceil((a + 1) / this.layoutSize);
                            let newPos = a % this.layoutSize;
                            this.gotoFixedPage(newPage);
                            //重定位滚动条
                            this.ypos = this.eachScrollLen * this.currentPage;
                            this.pagingBar.nativeElement.scrollTop = this.ypos;
                            let cells = this.viewerControl.getCells();
                            for (let cell of cells) {
                                let i = cell.cellName.substr(5);
                                if (Number(i) == newPos) {
                                    cell.isSelected = true;
                                } else {
                                    cell.isSelected = false;
                                }
                            }
                        }
                    });
                }, 10);
            } else {
                this.bwheeled = false;
            }
        }
    }


    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (event.key == 'a' && event.ctrlKey) {
            event.preventDefault();
            this.viewerControl.getCells().forEach(cell => {
                this.viewerControl.layoutManager.setCellSelectStatus(cell, true);
            });
        }
        if (event.keyCode == 46) {//delete
            this.deleteCells();
        }
    }


    @HostListener('click', ['$event']) filmingClick() {
        this.filmingVisibleService.setLastTime(new Date().getTime());
        console.log('lastTime:' + this.filmingVisibleService.getLastTime());
    }

    onPanelMouseMove(e: MouseEvent): void {
        // this.refreshAllUI();
        // this.refreshAllUI();
    }


    constructor(
        protected injector: Injector,
        protected route: ActivatedRoute,
        protected render: Renderer2,
        protected rootElement: ElementRef,
        protected z: NgZone,
        protected cd: ChangeDetectorRef,
        public filmingVisibleService: FilmingVisibleService,
        protected toastSvc: ToastService,
        protected modelContainer: AppCommon.ModelContainer
    ) {
        super(injector, route, render, rootElement, z, cd, modelContainer);
        this.filmingMode = FilmingMode.None;

    }

    protected initialize(): void {
        super.initialize();
        this.communicationProxy.registerCommandHandler(30000, {
            handleCommand: (context: NetBase.WebCommandContext) => {
                const reply = new NetBase.Reply();
                let replyString = "你好，我收到了";
                let encoder = new TextEncoder();
                let replyObject = encoder.encode(replyString);
                reply.sStringObject = replyObject;
                //this.HandleWarningFromServer(context.sStringObject);
                alert(`filming 收到了来自 ${context.sender} 的问候`);
                return reply;
            }
        });

        this.viewerControlClone = new Viewer.MedViewerControl(this.render, this.viewerControlCloneElement, this.commandSender);
        this.viewerControlClone.initialize();
        this.viewerControlClone.isSupportMultipleSelection = true;
        this.initCloneFilimingCell();
        //this.viewCotrolCloneAddCell();

        let viewerControlDom = this.viewerControlArea.nativeElement;
        viewerControlDom.addEventListener("mouseup", (e: any) => this.onMouseup(e), false);
        viewerControlDom.addEventListener("mousedown", (e: any) => this.onMousedown(e), false);
        viewerControlDom.addEventListener("wheel", (e: any) => this.onWheel(e), false);
        //viewerControlDom.addEventListener("dragstart", (e: any) => this.onDragstart(e), false);
        viewerControlDom.addEventListener("drop", (e: any) => this.onDrop(e), false);

        Viewer.ActionFactory.AddAction(Viewer.ActionTypes.Pan, new FilmingAction.FilmingActionPan());
        Viewer.ActionFactory.AddAction(Viewer.ActionTypes.Zoom, new FilmingAction.FilmingActionZoom());
        Viewer.ActionFactory.AddAction(Viewer.ActionTypes.Windowing, new FilmingAction.FilmingActionWindowing());
        Viewer.ActionFactory.AddAction(Viewer.ActionTypes.Pointer, new FilmingAction.FilmingActionPointer());

        this.waitInitState();
        this.resetlayout();
        this.setfontSize();
        this.viewerControl.commandSender.sendCellOperation(this.createPageupDeta(1), 'PageUpDown', 'Cell_0');
        this.isButtonDisable = this.viewerControl.layoutManager.isMaxmized;
        AppCommon.Messenger.on('layoutchanged', () => { this.OnLayoutChanged(); });//注册layout changed事件
        AppCommon.Messenger.on('drawImageComplete', (cellName) => { this.onDrawImageComplete(cellName); });
        AppCommon.Messenger.on('updateSelectedCell', (cell) => { this.onupdateSelectedCell(cell); });
        this.initSubject();
        if (this.viewControlDiv) {
            this.viewcontrolHeight = this.viewControlDiv.nativeElement.offsetHeight;
            this.viewcontrolTitleHeight = this.viewControlTitle.nativeElement.offsetHeight;
        }
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    initSubject(): void {
        //滚动条防抖
        this.scrollTerms
            .pipe(debounceTime(200))
            .subscribe(term => {
                let page = 1;
                let scrollTop = this.pagingBar.nativeElement.scrollTop;
                if (scrollTop > this.eachScrollLen) {
                    page = Math.ceil(scrollTop / this.eachScrollLen);
                    if (page > this.pages) {
                        page = this.pages;//match.ceil向上取整，导致计算出来的page有可能会比pages大1
                    }
                }
                this.gotoFixedPage(page);
            });
        this.wheelTerms.pipe(debounceTime(200))
            .subscribe((ret) => {
                this.gotoFixedPage(this.currentPage);
                if (ret == 'up') {
                    this.ypos = this.eachScrollLen * (this.currentPage - 1);//滚动距离计算
                } else if (ret == 'down') {
                    this.ypos = this.eachScrollLen * (this.currentPage);

                }
                this.pagingBar.nativeElement.scrollTop = this.ypos;
            });
        this.printSubjectUpdate();
    }


    onDrawImageComplete(cellName: string): void {
        try {
            let cellIndex = Number(cellName.substr(5));
            //cellIndex < this.layoutSize避免不是layout的cell刷新导致的update
            if (!this.updatedCellList.includes(cellName) && (cellIndex < this.layoutSize)) {
                this.updatedCellList.push(cellName);
                //console.log(`[onDrawImageComplete]:updatedCellList length is ${this.updatedCellList.length} and layout size is ${this.layoutSize}`);
                let remaingImages = this.getRemainImgNum(this.currentPage - 1);
                //最后一页因为可能不足layoutsize个数
                if (this.updatedCellList.length === this.layoutSize || (this.currentPage == this.pages && remaingImages == this.updatedCellList.length)) {
                    this.updateTextTimes++;
                    console.log(`[onDrawImageComplete]:print update num: ${this.updateTextTimes}. ${DateTimeHelper.getTimeString()}`);
                    this.hasUpdated = true;
                    this.updatedCellList = [];
                    this.printTerms.next(true);
                }
            }
        } catch (error) {
            console.error('[onDrawImageComplete]:onDrawImageComplete error.' + error);
        }
    }

    onupdateSelectedCell(cell: MedViewerControlCell): void {
        this.previouSelectedCell = [];
        this.currentClickCell = cell;
        let selectedCells = this.viewerControl.layoutManager.getSelectedCells();
        selectedCells.forEach((cell) => {
            this.previouSelectedCell.push(cell);
        });
    }

    showInform(): void {
        console.log("[showInform]:showInform start")
        let cells = this.viewerControl.getCells();
        for (let cell of cells) {
            if (cell.canvas && cell.cellControl && cell.canvas.width > 0 && cell.canvas.height > 0) {
                cell.displayData.imageText.isVisible = !cell.displayData.imageText.isVisible;
                console.log("[showInform]:" + cell.cellName + "image text visible is" + cell.displayData.imageText.isVisible);
                cell.drawImage();
            }
        }
    }

    protected OnLayoutChanged() {
        try {
            console.log("[OnLayoutChanged]:OnLayoutChanged start");
            setTimeout(() => {
                this.sendLayoutCommand();
                this.viewerControl.setActionType(this.currentActionType);
            }, 10);
            this.resetImageTextVisible(true);
            ///当在最后一页时点击切布局，会有部分cell的四角信息不显示
            if (!this.isSameLayout && this.currentPage == this.layOutList.length && this.newPage != 1) {
                console.log(`[OnLayoutChanged]:setPageImageTextVisible start,isSameLayout is ${this.isSameLayout}.`);
                this.setPageImageTextVisible(this.currentPage - 1);
            }
            if (!this.isSameLayout && this.currentPage > this.layOutList.length) {
                console.error(`[OnLayoutChanged]:current page is more than layoutlist length,isSameLayout is ${this.isSameLayout}`);
                return;
            }
            if (this.isSameLayout) {
                //当切换布局后，加载的图片小于layoutsize
                this.setPageImageTextVisible(this.currentPage - 1);
            }
            

        }
        catch (error) {
            console.error("[OnLayoutChanged]: OnLayoutChanged error." + error);
        }
    }

    protected buildModels(): Map<string, { new(...args: any[]): AppCommon.AppModelBase }> {
        const modelMap = super.buildModels();
        modelMap.set('WorkflowModel', FilmingWorkflow);
        return modelMap;
    }

    setDefaultLayout() {
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        workflow.LayoutSwitcher.CurrentLayout = 'defaultLayout5_4';
        this.rows = 5;
        this.colums = 4;  
        this.layoutSize = this.rows * this.colums;    
        this.viewerControl.commandSender.sendCellOperation(this.createPageupDeta(1), 'PageUpDown', 'Cell_0');//todo 1不对
    }

    protected initCells() {
        for (let i = 0; i < 36; i++) {
            this.AddCell('Cell_' + i.toString(), 'Slice');
        }
    }


    private AddCell(name: string, cellType: string) {
        const cell = new ViewerKit.AppCell(AppToolkit.AngularPerformanceHelper.highPerformanceWrapper, this.isDeviceSlow);
        cell.cellName = name;
        cell.cellType = cellType;
        let workflow = this.modelContainer.getModel('WorkflowModel') as ViewerKit.AppWorkflow;
        workflow.addCell(cell);

        let cellImageInfo = new ViewerKit.CellSliceInfoInitializeItem();
        cellImageInfo.cell = cell;
        cell.itemCollection.push(cellImageInfo);

        const actionInitializeItem = new FilmingCellActionInitializeItem();
        actionInitializeItem.cell = cell;
        cell.itemCollection.push(actionInitializeItem);

        const imageTexts = new Viewer.ImageTextInitializeItem();
        imageTexts.cell = cell;
        imageTexts.appName = this.appName;
        cell.itemCollection.push(imageTexts);

        this.viewerControl.addCell(cell);
        this.cellCollecton1.push(cell);
    }


    getEmptyLayout(): Viewer.LayoutCellInfo {
        const childLayout = new Viewer.LayoutCellInfo();
        childLayout.rows = 1;
        childLayout.colums = 1;
        childLayout.capacity = 1;
        return childLayout;
    }

    resetlayout(): void {
        ViewerKit.CommandHelper.sizeChanged(this.commandSender, this.viewerControl);
    }

    setlayout1(): void {
        const defaultLayout = new Viewer.LayoutCellInfo();
        defaultLayout.rows = 6;
        defaultLayout.colums = 6;
        this.viewerControl.layoutManager.setLayout(defaultLayout);
    }


    private Setlayout(rows: number, colums: number): void {//暂时注销该句，为了大图翻图功能
        if (rows == this.rows && colums == this.colums) {
            // return;
        }
        const layoutCellInfo = new Viewer.LayoutCellInfo();
        layoutCellInfo.rows = rows;
        layoutCellInfo.colums = colums;
        this.rows = rows;
        this.colums = colums;
        //this.viewerControl.layoutManager.setLayout(layoutCellInfo);//重复切布局，故注释掉
        let cPage = this.currentPage > 0 ? this.currentPage : 1;
        this.viewerControl.commandSender.sendCellOperation(this.createPageupDeta(cPage), 'PageUpDown', 'Cell_0');
    }

    onLayoutClicked(layoutValue: any): void {
        try {
            if (layoutValue === null || layoutValue === undefined) {
                console.error("[onLayoutClicked]: layoutValue is null ");
                return;
            }

            let row = layoutValue['row'];
            let line = layoutValue['line'];
            console.log("[onLayoutClicked]:onLayoutClicked start" + 'row:' + row + 'line:' + line + DateTimeHelper.getTimeString());
            if (this.isSameLayout) {
                this.getPages(layoutValue);
            } else {
                //初始化或更新layoutlist，以及重新计算pages
                this.setPageLayout(row, line, this.currentPage);
            }
            this.layoutSize = row * line;
            this.Setlayout(row, line);
            const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
            workflow.LayoutSwitcher.CurrentLayout = 'defaultLayout' + row + '_' + line;
            this.setfontSize();
            this.initCloneFilimingCell();
            if (this.uiImageNumber == 0) {
                this.resetPageDisplay();
            }
            if (this.isSameLayout) {
                this.pagingBar.nativeElement.scrollTop = 0;//滚动条的高度恢复初始状态
            }
            console.log("[onLayoutClicked]:onLayoutClicked end" + DateTimeHelper.getTimeString());
        }
        catch (error) {
            console.error('[onLayoutClicked]:onLayoutClicked error' + error)
        }
    }

    pageLayoutChange(newPage: number, currentPage: number) {
        if (this.isSameLayout) {
            return;
        }
        if (newPage > this.pages || newPage > this.layOutList.length) {
            console.error(`[pageLayoutChange]:newPage ${newPage} is more than pages ${this.pages} or layOutList length ${this.layOutList}`);
            return;
        }
        if (newPage <= 0) {
            console.log("[pageLayoutChange]:newpage is 0.")
            return;
        }
        console.log(`[pageLayoutChange]:pageLayoutChange start.`);
        console.log(`[pageLayoutChange]:newpage is ${newPage},currentpage is ${currentPage}.`);
        let row = this.layOutList[currentPage - 1].row;
        let line = this.layOutList[currentPage - 1].line;
        console.log(`[pageLayoutChange]:current page row is ${row},line is ${line}`);
        let newPageRow = this.layOutList[newPage - 1].row;
        let newPageLine = this.layOutList[newPage - 1].line;
        console.log(`[pageLayoutChange]:new page row is ${newPageRow}, newpageline is ${newPageLine}`);
        //当滚轮事件触发时， currentpage会更新导致currentpage和newpage是一样的
        if (row != newPageRow || line != newPageLine || newPage == currentPage) {
            const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
            workflow.LayoutSwitcher.CurrentLayout = 'defaultLayout' + newPageRow + '_' + newPageLine;
        }
        this.rows = newPageRow;
        this.colums = newPageLine;
        this.layoutSize = this.rows * this.colums;
        this.setfontSize();
        this.initCloneFilimingCell();
    }

    getRemainImgNum(page: number): number {
        let remaingImages = 0;
        if (this.isSameLayout) {
            remaingImages = this.uiImageNumber - page * this.layoutSize;
        } else {
            if (this.layOutList && this.layOutList.length > 0) {
                let imageNum = 0;
                console.log(`[getRemainImgNum]:current page is ${page},layoutlist length is ${this.layOutList.length}`);
                for (let i = 0; i < page; i++) {
                    let row = this.layOutList[i].row;
                    let line = this.layOutList[i].line;
                    let size = row * line;
                    imageNum = imageNum + size;
                }
                console.log(`[getRemainImgNum]:image capacity is ${imageNum}`);
                remaingImages = this.uiImageNumber - imageNum;
            }
        }
        return remaingImages;
    }

    setPageImageTextVisible(page: number) {
        if (page <= -1) {
            console.log(`[setPageImageTextVisible]:setPageImageTextVisible failed.page is ${page}`)
            return;
        }
        let remaingImages = this.getRemainImgNum(page);
        if (!this.isSameLayout && (!this.layOutList || this.layOutList.length < page)) {
            console.error("[setPageImageTextVisible]:layoutlist length is less page");
            return;
        }
        let layoutSize = 0;
        if (this.isSameLayout) {
            layoutSize = this.layoutSize;
        } else {
            let row = this.layOutList[page].row;
            let line = this.layOutList[page].line;
            layoutSize = row * line;
        }
        if (remaingImages < layoutSize) {
            for (let i = 0; i < layoutSize; i++) {
                let cellName = 'Cell_' + i.toString();
                if (i >= remaingImages) {
                    this.viewerControl.getCell(cellName).displayData.imageText.isVisible = false;
                    console.log("[setPageImageTextVisible]:" + cellName + "imagetext visible is false");
                }
            }
        } 
        else {
            this.resetImageTextVisible(true);
        }
    }

    getStartPosition(page: number): number {
        let start = 0;
        if (this.isSameLayout) {
            let layoutSize = this.rows * this.colums;
            console.log(`[getStartPosition]:layoutsize is ${layoutSize} and this layoutsize is ${this.layoutSize}`);
            start = (page - 1) * layoutSize;
        } else {
            if (!this.layOutList || this.layOutList.length == 0) {
                console.log("[getStartPosition]:layOutList is null.");
                return start;
            }
            if (page <= 1) {
                console.log(`[getStartPosition]: page is ${page}`);
                return start;
            }
            console.log("[getStartPosition]:getStartPosition start.");
            console.log(`[getStartPosition]:page is ${page}`);
            console.log(`[getStartPosition]:layOutList length is ${this.layOutList.length}`);
            for (let i = 0; i < page - 1; i++) {
                let row = this.layOutList[i].row;
                let line = this.layOutList[i].line;
                let size = row * line;
                start = start + size;
            }
        }
        return start;
    }

    setPageLayout(row: number, line: number, currentPage: number = 0) {
        if (row == 0 || line == 0) {
            console.log("[setPageLayout]: row or line is 0.");
            return;
        }
        //currentPage=0，初始化layOutList
        if (currentPage == 0) {
            this.layOutList = [];
            for (let i = 1; i <= this.pages; i++) {
                let filmingLayoutInfo = new FilmingLayoutInfo();
                filmingLayoutInfo.row = row;
                filmingLayoutInfo.line = line;
                filmingLayoutInfo.page = i + 1;
                this.layOutList.push(filmingLayoutInfo);
            }
        } else {
            //更新current page 的layOutList
            if (!this.layOutList || this.layOutList.length == 0) {
                console.error("[setPageLayout]: layOutList count is 0.");
                return;
            }
            this.layOutList[currentPage - 1].row = row;
            this.layOutList[currentPage - 1].line = line;
            let imageCapacity = 0;
            for (let i = 0; i < this.layOutList.length; i++) {
                imageCapacity = imageCapacity + this.layOutList[i].row * this.layOutList[i].line;
            }
            //计算当前总页数的图片容量，如果小于总的图片数，需要增加页数
            if (imageCapacity < this.uiImageNumber) {
                let overImgNum = this.uiImageNumber - imageCapacity;
                let defautSize = 20;
                let addPageNum = Math.ceil(overImgNum / defautSize);
                this.pages = this.layOutList.length + addPageNum;
                //增加页数的同时，需要添加新的默认的布局
                for (let i = 0; i < addPageNum; i++) {
                    let newfilmingLayoutInfo = new FilmingLayoutInfo();
                    newfilmingLayoutInfo.row = 4;
                    newfilmingLayoutInfo.line = 5;
                    this.layOutList.push(newfilmingLayoutInfo);
                }
            } else {
                //当小布局切换成大布局时，会减少页数
                let excessImgNum = imageCapacity - this.uiImageNumber;
                this.deleteExcessLayoutItem(excessImgNum);
                this.pages = this.layOutList.length;
            }
        }
    }

    deleteExcessLayoutItem(excessImgNum: number): void {
        console.log(`[deleteExcessLayoutItem]:excessImgNum is ${excessImgNum}`);
        let num = excessImgNum;
        let row = this.layOutList[this.layOutList.length - 1].row;
        let line = this.layOutList[this.layOutList.length - 1].line;
        let size = row * line;
        console.log(`[deleteExcessLayoutItem]:size is ${size}`);
        if (num > size) {
            this.layOutList.pop();
            num = num - size;
            console.log(`[deleteExcessLayoutItem]:num is ${num}`)
            this.deleteExcessLayoutItem(num);
        }
        return;
    }

    //accoding to diff layout set diff fontsize 
    setfontSize(scale: number = 1): void {
        let cells = this.viewerControl.getCells();
        if (cells.length == 1) {
            cells.forEach(cell => { cell.displayData.imageText.fontSize = 18 * scale; });
        }
        else if (cells.length <= 12) {
            cells.forEach(cell => { cell.displayData.imageText.fontSize = 8 * scale; });
        }
        else if (cells.length <= 20) {
            cells.forEach(cell => { cell.displayData.imageText.fontSize = 6 * scale; });
        }
        else {
            cells.forEach(cell => { cell.displayData.imageText.fontSize = 4 * scale; });
        }
    }


    onfilmSizeChange(event: string): void {
        if (event === null || event === undefined) {
            console.log("[onfilmSizeChange]:event is null or undefined");
            return;
        }
        if (this.viewControlDiv && this.viewcontrolHeight != this.viewControlDiv.nativeElement.offsetHeight) {
            this.viewcontrolHeight = this.viewControlDiv.nativeElement.offsetHeight;
        }
        let filmingWidth = event.split("X")[0];
        let filmingHeight = event.split("X")[1];
        let scale = 0;
        if (event.indexOf("IN") > 0) {
            scale = (Number(filmingWidth.replace('IN', ''))) / (Number(filmingHeight.replace('IN', '')));
            console.log(`[onfilmSizeChange]:scale is ${scale}.`);
        } else {//CM
            scale = (Number(filmingWidth.replace('CM', ''))) / (Number(filmingHeight.replace('CM', '')));
            console.log(`[onfilmSizeChange]:scale is ${scale}.`);
        }
        this.viewerControlArea.nativeElement.style.width = Math.round(this.viewcontrolHeight * scale).toString() + 'px';
        this.viewControlTitle.nativeElement.style.width = Math.round(this.viewcontrolHeight * scale).toString() + 'px';
    }

    onTitleModelChange(event: string) {
        if (!event) {
            console.log("[onTitleModelChange]:event is undefined.");
            return;
        }
        this.titleModel = event;
        console.log(`[onTitleModelChange]: titleModel is ${this.titleModel}`);
    }

    // onPrintNumChange(event: number): void {
    //     console.log("printNum:", event)
    // }

    protected buildCellCommandOperations(): AppCommon.IFunctionCollection {
        let collection = super.buildCellCommandOperations();
        return collection;
    }

    protected buildPanelCommandOperations(): AppCommon.IFunctionCollection {
        let collection = super.buildPanelCommandOperations();
        collection.addFunction('UpdateFELoadingEnd', LoadEndOperation);
        collection.addFunction('UpdateFELoadingStart', LoadSeriesStartOperation);
        collection.addFunction('UpdateFESetLayout', SetLayoutOperation);
        return collection;
    }

    clearCell(cellName: string): void {
        let cell = this.viewerControl.getCell(cellName);
        if (!cell) {
            console.log("[clearCell]: get invalid");
            return;
        }
        cell.clearImage();
        if(!cell.displayData){
            console.log("[clearCell]:" + cellName + "has no displaydata");
            return;
        }
        cell.displayData.imageText.isVisible = false;
        //  this.viewerControl.commandSender.sendCellOperation(new TextEncoder().encode(''), 'clear_cell', cellName);
    }

    protected handleDropevent(event: any): void { }

    waitInitState(): void {
        while (!this.stateInit) {
            setTimeout(() => { this.waitInitState(); }, 1);
            return;
        }
    }

    getImages(): void {
        try {
            let studyUid = this.route.snapshot.params['studyInstanceUID'];
            if (studyUid === null || studyUid === undefined) {
                console.log("[getImages]:studyUid is null")
                return;
            }
            this.advAppAPIService.dicomClient.getStudyByUID(studyUid).then((result: StudyDto) => {
                let study = result;
                if (study != null && study.list !== null) {
                    let seriesInstanceUid = study.list[0].seriesInstanceUID;
                    this.setFilmingPageInfo(seriesInstanceUid);
                }
            })
        }
        catch (error) {
            console.error('[getImages]:getImages error.' + error);
        }
    }

    setFilmingPageInfo(seriesInstanceUid: string): void {
        this.seriesInstanceUid = seriesInstanceUid;

        this.advAppAPIService.aiDBSvcClient.getStudyAll(this.studyInstanceUid).then((result: StudyDto) => {
            for (const seriesdto of result.list) {
                if (seriesdto.seriesInstanceUID == seriesInstanceUid) {
                    this.uiImageNumber = seriesdto.seriesCount;
                    console.log(this.seriesInstanceUid + " uiImageNumber=" + this.uiImageNumber);
                    let dlayoutValue = {
                        'row': 5,
                        'line': 4
                    }
                    this.getPages(dlayoutValue);
                    if (!this.isSameLayout) {
                        this.setPageLayout(5, 4);
                    }                
                    //初始化时图片个数小于布局大小，需要设置没有图片的cell不显示四角信息
                    if (this.uiImageNumber < this.layoutSize) {
                        for (let i = this.uiImageNumber; i < this.layoutSize; i++) {
                            let cellName = "Cell_" + i;
                            let cell = this.viewerControl.getCell(cellName);
                            cell.displayData.imageText.isVisible = false;
                        }
                    }
                    break;
                }
            }
        });
    }


    getPages(layoutValue: any): void {
        if (!layoutValue) {
            console.log("[getPages]: layoutValue is null or undefined ");
            return;
        }
        let row = layoutValue['row'];
        let line = layoutValue['line'];
        let size = row * line;
        this.pages = Math.ceil(this.uiImageNumber / size);
        console.log("[getPages]:uiImageNumber is " + this.pages);
        //this.layoutSize = size;
        this.currentPage = 1;    
        //console.log(`scrollHeight:${scrollHeight} clientHeight:${clientHeight} pages:${this.pages} eachScrollLen:${this.eachScrollLen}`);
        //初始化滚动条数据
        // let scrollHeight = this.pagingBar.nativeElement.scrollHeight; //可滚动内容高度
        // let clientHeight = this.pagingBar.nativeElement.clientHeight;//可见高度、内容实际高度 + 上下内边距
        // this.eachScrollLen = (scrollHeight - clientHeight) / (this.pages);//+1是为防止滚动滑块滑倒页面底部  
    }

    removeAllCellsSelectStatus(): void {
        //避免浅拷贝造成的清除状态不够彻底
        const selectedCells = [];
        this.viewerControl.layoutManager.getSelectedCells().forEach(cell => {
            selectedCells.push(cell);
        });
        selectedCells.forEach(cell => {
            this.viewerControl.layoutManager.setCellSelectStatus(cell, false);
        })
    }

    getPagesUnSameLayout(): number {
        let remainImgNum = this.uiImageNumber;
        console.log(`[getPagesUnSameLayout]:getPagesUnSameLayout start. uiImageNumber is ${this.uiImageNumber}`);
        let pages = 0;
        for (let i = 0; i < this.layOutList.length; i++) {
            let row = this.layOutList[i].row;
            let line = this.layOutList[i].line;
            let size = row * line;
            console.log(`[getPagesUnSameLayout]: size is ${size}, i is ${i}`);
            if (remainImgNum > size) {
                remainImgNum = remainImgNum - size;
                console.log(`[getPagesUnSameLayout]:remainImgNum is ${remainImgNum}`);
                pages++;
            } else {
                if (remainImgNum > 0) {
                    pages++;
                }
                console.log(`[getPagesUnSameLayout]:remainImgNum is ${remainImgNum} and size is ${size}. pages is ${pages}`);
                break;
            }
        }
        return pages;
    }

    resetLayoutList() {
        if (this.layOutList.length == this.pages) {
            return;
        }
        if (this.layOutList.length < this.pages) {
            console.error(`[resetLayoutList]:layoutList length is ${this.layOutList.length} less than pages ${this.pages}.`);
            return;
        }
        let length = this.layOutList.length;
        this.layOutList.splice(this.pages, length - this.pages);
        console.log(`[resetLayoutList]:layoutList length is ${this.layOutList.length}`);
    }

    resetPageDisplay(): void {
        //重新计算pages
        if (this.isSameLayout) {
            this.pages = Math.ceil(this.uiImageNumber / this.layoutSize);
        } else {
            this.pages = this.getPagesUnSameLayout();
            //删除layoutlist中多余的item
            this.resetLayoutList();
        }
        //去除选中项     
        const selectedCells = this.viewerControl.layoutManager.getSelectedCells();
        for (const cell of selectedCells) {
            cell.isSelected = false;
            //this.viewerControl.getCell(cell.cellName).displayData.imageText.isVisible = true && this.isImageTextVisible;
        }

        if (this.currentPage < this.pages) {
            return;
        }
        if (this.currentPage >= this.pages) {
            this.currentPage = this.pages;
            //无图片的cell设置黑图
            console.log("[resetPageDisplay]:setPageImageTextVisible  start.")
            this.setPageImageTextVisible(this.currentPage - 1);
        }
        if (this.uiImageNumber == 0) {//首页且无图
            for (let i = 0; i < this.layoutSize; i++)//设置黑图
            {
                let cellName = 'Cell_' + i.toString();
                this.viewerControl.getCell(cellName).displayData.imageText.isVisible = false;
                console.log("[resetPageDisplay]:" + cellName + "imagetext visible is false");
            }
        } else if (this.uiImageNumber > 0 && this.uiImageNumber < this.layoutSize) {//首页且有图
            for (let i = 0; i < this.layoutSize; i++)//设置黑图
            {
                if (i >= this.uiImageNumber) {
                    let cellName = 'Cell_' + i.toString();
                    this.viewerControl.getCell(cellName).displayData.imageText.isVisible = false;
                    console.log("[resetPageDisplay]:" + cellName + "imagetext visible is false");
                }
            }
        }
    }

    leftPageClick(): void {
        if (this.viewerControl.layoutManager.isMaxmized) {
            return;
        }
        if (this.currentPage < 0 || this.currentPage - 1 <= 0) {
            console.log("[leftPageClick]: currentpage is one or zero" + this.currentPage);
            return;
        }
        if (this.layoutSize === 0 || !this.layoutSize) {
            console.log("[leftPageClick]: layoutSize is zero or null");
            return;
        }
        let newPage = this.currentPage - 1;
        if (!this.isSameLayout) {
            //需要先切布局，不然小布局切成大布局，会找不到cell
            this.pageLayoutChange(newPage, this.currentPage);
        }
        if (newPage == this.pages - 1) {
            this.resetImageTextVisible(true);
        }
        this.viewerControl.commandSender.sendCellOperation(this.createPageupDeta(newPage), 'PageUpDown', 'Cell_0');
        this.currentPage = newPage;
        this.ypos = this.eachScrollLen * (this.currentPage - 1);
        this.pagingBar.nativeElement.scrollTop = this.ypos;
        this.isScrolled = true;
    }

    rightPageClick(): void {
        if (this.viewerControl.layoutManager.isMaxmized) {
            return;
        }
        if (this.currentPage >= this.pages) { return; }
        if (this.layoutSize === 0 || !this.layoutSize) {
            console.log("[rightPageClick]: layoutSize is zero or null");
            return;
        }
        let newPage = this.currentPage + 1;
        if (!this.isSameLayout) {
            this.pageLayoutChange(newPage, this.currentPage);
        }
        this.viewerControl.commandSender.sendCellOperation(this.createPageupDeta(newPage), 'PageUpDown', 'Cell_0');
        console.log("[rightPageClick]:setPageImageTextVisible start.");
        this.setPageImageTextVisible(this.currentPage);
        this.currentPage = newPage;
        this.ypos = this.eachScrollLen * (this.currentPage);
        this.pagingBar.nativeElement.scrollTop = this.ypos;
        this.isScrolled = true;
    }

    async asyncRightPageClick(): Promise<void> {
        if (this.viewerControl.layoutManager.isMaxmized) {
            return;
        }
        if (this.currentPage >= this.pages) { return; }
        if (this.layoutSize === 0 || !this.layoutSize) {
            console.log("[asyncRightPageClick]: layoutSize is zero or null");
            return;
        }
        let newPage = this.currentPage + 1;
        if (!this.isSameLayout) {
            this.pageLayoutChange(newPage, this.currentPage);
        }
        console.log(`[Printallpage]:right page click ${newPage} send start.` + DateTimeHelper.getTimeString());
        let ret= await this.viewerControl.commandSender.syncSendCommonOperation(this.createPageupDeta(newPage), 'PageUpDown', 'Cell_0');
        console.log(`[Printallpage]:right page click ${newPage} send end.` + DateTimeHelper.getTimeString());
        console.log("[asyncRightPageClick]:setPageImageTextVisible start.");
        this.setPageImageTextVisible(this.currentPage);
        this.currentPage = newPage;
        this.ypos = this.eachScrollLen * (this.currentPage);
        this.pagingBar.nativeElement.scrollTop = this.ypos;
        this.isScrolled = true;
    }

    firstPageClick(): void {
        if (this.viewerControl.layoutManager.isMaxmized) {
            return;
        }
        if (this.currentPage < 0 || this.currentPage - 1 <= 0) {
            console.log("[firstPageClick]: currentpage is one or zero");
            return;
        }
        if (this.layoutSize === 0 || !this.layoutSize) {
            console.log("[firstPageClick]: layoutSize is zero or null");
            return;
        }
        //当最后一页跳到第一页时，会触发onlayoutchanged的setPageImageTextVisible   
        if (!this.isSameLayout) {
            this.newPage = 1;
            this.pageLayoutChange(1, this.currentPage);
        }
        this.resetImageTextVisible(true);
        this.viewerControl.commandSender.sendCellOperation(this.createPageupDeta(1), 'PageUpDown', 'Cell_0');
        this.currentPage = 1;
        this.ypos = this.eachScrollLen * (this.currentPage - 1);
        this.pagingBar.nativeElement.scrollTop = this.ypos;
        this.isScrolled = true;
        this.newPage = 0;
    }

    lastPageClick(): Promise<void> {
        if (this.viewerControl.layoutManager.isMaxmized) {
            return;
        }
        if (this.currentPage >= this.pages) { return; }
        if (this.layoutSize === 0 || !this.layoutSize) {
            console.log("[righttClick]: layoutSize is zero or null");
            return;
        }
        if (!this.isSameLayout) {
            this.pageLayoutChange(this.pages, this.currentPage);
        }
        this.viewerControl.commandSender.sendCellOperation(this.createPageupDeta(this.pages), 'PageUpDown', 'Cell_0');
        console.log("[lastPageClick]:setPageImageTextVisible start.")
        this.setPageImageTextVisible(this.pages - 1);
        this.currentPage = this.pages;
        this.ypos = this.eachScrollLen * (this.currentPage);
        this.pagingBar.nativeElement.scrollTop = this.ypos;
        this.isScrolled = true;
    }

    gotoFixedPage(pageIndex: number): void {
        if (pageIndex > this.pages) {
            console.error(`[gotoFixedPage]:page is greater than pages.pageIndex is ${pageIndex} and pages is ${this.pages}`);
            return;
        }
        if (!this.isSameLayout) {
            this.pageLayoutChange(pageIndex, this.currentPage);
        }
        this.viewerControl.commandSender.sendCellOperation(this.createPageupDeta(pageIndex), 'PageUpDown', 'Cell_0');
        if (pageIndex == this.pages) {
            console.log("[gotoFixedPage]:setPageImageTextVisible start.")
            this.setPageImageTextVisible(this.pages - 1);
        }
        if (pageIndex < this.pages) {
            this.resetImageTextVisible(true);
        }
        this.currentPage = pageIndex;
    }

    protected async StartLoadSeries(): Promise<void> {
        while (!this.stateInit) {
            await delay(200);
            if (this.stateInit) {
                break;
            }
        }
        console.log("[StartLoadSeries]:StartLoadSeries start" + DateTimeHelper.getTimeString())
        this.advAppAPIService.aiDBSvcClient.getStudyAll(this.studyInstanceUid).then(studyDto => {
            let maxSeriesInstanceNumber = 0;
            let maxSeriesUID = '';
            let folder = '';
            this.patientName = studyDto.patientName;
            if (this.titleModel == "model2") {
                this.patientId = "PID:" + studyDto.patientId;//同时显示，不然会先显示pid
                this.accessionNumber = "Acc Num:" + studyDto.accessionNumber;
            }
            else {
                this.patientId = studyDto.patientId;
                this.accessionNumber = studyDto.accessionNumber;
            }
            if (studyDto.sex == 'M') {
                this.sex = "男";
            } else if (studyDto.sex == 'F') {
                this.sex = "女";
            }
            var today = new Date();
            var ageNum = today.getFullYear() - studyDto.birthDate.getFullYear();
            if (today.getMonth() < studyDto.birthDate.getMonth() || (today.getMonth() == studyDto.birthDate.getMonth() && today.getDay() < studyDto.birthDate.getDay())) {
                ageNum--;
            }
            this.age = ageNum + "岁";
            this.printDate = moment(new Date()).format('YYYY/MM/DD');
            studyDto.list.forEach(series => {
                const tmpInstanceNumber = series.seriesNumber;
                const tmpSeriesUID = series.seriesInstanceUID;
                this.institutionName = series.institutionName != null && series.institutionName != this.institutionName ? series.institutionName : this.institutionName;
                if (tmpInstanceNumber > maxSeriesInstanceNumber && tmpInstanceNumber >= 8000
                ) {
                    let seriestatus = series.seriesStatus;
                    if (seriestatus == 'uAIM') {
                        maxSeriesInstanceNumber = tmpInstanceNumber;
                        maxSeriesUID = tmpSeriesUID;
                        folder = series.seriesThumbnail;
                        let index = folder.lastIndexOf('/');
                        if (index >= 0) {
                            folder = folder.substring(0, index);
                        }
                    }
                }
            });
            if (maxSeriesUID && maxSeriesInstanceNumber >= 8000) {
                this.LoadSeriesInstanceUID = maxSeriesUID;
            } else {
                this.LoadSeriesInstanceUID = this.studyDTO.list[0].seriesInstanceUID;
            }
            console.log('[StartLoadSeries]:LoadSeriesInstanceUID is:' + this.LoadSeriesInstanceUID);
            this.setFilmingPageInfo(this.LoadSeriesInstanceUID);
            ViewerKit.CommandHelper.loadSeries(this.commandSender, this.LoadSeriesInstanceUID);
            this.advAppAPIService.aiDBSvcClient.updateSeriesStatus(this.LoadSeriesInstanceUID, 'SaveFilm');
            console.log("[StartLoadSeries]:StartLoadSeries end" + DateTimeHelper.getTimeString())
        });
    }

    // getImageNumberofLastPage(): number {
    //     return this.uiImageNumber - (this.pages - 1) * this.layoutSize;
    // }

    deleteCells(): void {//依赖窗口cell位置固定,删除后需要同步this.uiImageNumber
        if (this.uiImageNumber == 0) {
            return;
        }
        let selectedCellNum = 0;
        let selectedCellIndex = '';
        let start = this.getStartPosition(this.currentPage);
        for (const cell of this.viewerControl.getCells()) {
            if (cell.isSelected) {
                let arrIndex = cell.cellName.substr(5);
                if (this.currentPage == this.pages) {//计算黑图位置
                    let currentImagePos = start + Number(arrIndex) + 1;
                    if (currentImagePos > this.uiImageNumber) {
                        console.log(`[deleteCells]:currentImagePos ${currentImagePos} is more than uiImageNumber ${this.uiImageNumber}`);
                        continue;
                    }
                }
                if (selectedCellNum == 0) {
                    selectedCellIndex = arrIndex;
                } else {
                    selectedCellIndex = selectedCellIndex + '|' + arrIndex;
                }
                selectedCellNum = selectedCellNum + 1;
            }
        }
        if (selectedCellNum == 0) {
            console.log("[deleteCells]:selectedCellNum is zero")
            return;
        }
        console.log(`[deleteCells]:selectedCellIndex is ${selectedCellIndex}`);
        this.viewerControl.commandSender.sendCellOperation(this.createDeletePara(selectedCellIndex), 'DeletePage', 'Cell_0');
        this.uiImageNumber = this.uiImageNumber - selectedCellNum;
        if (this.uiImageNumber < 0) {
            this.uiImageNumber = 0;
        }
        let imageCapacity = this.getStartPosition(this.currentPage);
        console.log(`[deleteCells]:imageCapacity is ${imageCapacity}`);
        if (this.uiImageNumber == imageCapacity)//把最后一页剩余的图像都删除了
        {
            this.leftPageClick();
            this.ypos = this.eachScrollLen * (this.currentPage);
            this.pagingBar.nativeElement.scrollTop = this.ypos;
            this.isScrolled = true;
        }
        this.resetPageDisplay();
    }

    deleteCurrentPage(): void {
        if (this.pages <= 0) return;
        //获取当前布局所有cell的index
        let currentPageCellIndex = '';
        let lastPageImageNumbers = this.getRemainImgNum(this.pages - 1);
        //获取删除currentPageCellIndex
        if (this.currentPage == 1) {//删除首页
            if (this.uiImageNumber < this.layoutSize) {
                for (let i = 0; i < this.uiImageNumber; i++) {
                    if (i == this.uiImageNumber - 1) {
                        currentPageCellIndex = currentPageCellIndex + i.toString();
                    } else {
                        currentPageCellIndex = currentPageCellIndex + i.toString() + '|';
                    }
                }
            } else {
                for (let i = 0; i < this.layoutSize; i++) {
                    if (i == this.layoutSize - 1) {
                        currentPageCellIndex = currentPageCellIndex + i.toString();
                    } else {
                        currentPageCellIndex = currentPageCellIndex + i.toString() + '|';
                    }
                }
            }

        } else if (this.currentPage == this.pages) {//删除末页
            for (let i = 0; i < this.layoutSize; i++) {
                if (i >= lastPageImageNumbers) {
                    break;
                }
                if (i == this.layoutSize - 1) {
                    currentPageCellIndex = currentPageCellIndex + i.toString();
                } else {
                    currentPageCellIndex = currentPageCellIndex + i.toString() + '|';
                }
            }
        } else {//删除中间页
            for (let i = 0; i < this.layoutSize; i++) {
                if (i == this.layoutSize - 1) {
                    currentPageCellIndex = currentPageCellIndex + i.toString();
                } else {
                    currentPageCellIndex = currentPageCellIndex + i.toString() + '|';
                }
            }
        }
        if (!this.isSameLayout) {
            //切布局
            let newPage = this.currentPage == this.pages ? this.currentPage - 1 : this.currentPage + 1;
            this.newPage = 1;//避免触发setPageImageTextVisible
            this.pageLayoutChange(newPage, this.currentPage);     
            this.newPage = 0;
            console.log(`[deleteCurrentPage]:layoutlist remove index is ${this.currentPage - 1}`);
        }
        console.log(`[deleteCurrentPage]:current page is ${this.currentPage} and currentPageCellIndex is ${currentPageCellIndex}`);
        this.viewerControl.commandSender.sendCellOperation(this.createDeletePara(currentPageCellIndex), 'DeletePage', 'Cell_0');

        if (this.currentPage == this.pages)//当前删除的是末页,有逻辑需要处理TODO
        {
            this.uiImageNumber = this.uiImageNumber - lastPageImageNumbers;
            if (this.pages <= 1)//删除末页后没有页了
            {
                this.currentPage = 0;
            } else {
                this.currentPage = this.pages;
                this.newPage = 1;//避免触发setPageImageTextVisible
                this.leftPageClick();
                this.layOutList.splice(this.currentPage, 1);//删除当前页在laytoutlist的layout信息
                this.newPage = 0;
                this.ypos = this.eachScrollLen * (this.currentPage);//将滚动条设置到最下面
                this.pagingBar.nativeElement.scrollTop = this.ypos;
                this.isScrolled = true;
            }
        } else {
            let layoutSize = this.isSameLayout ? this.layoutSize : this.layOutList[this.currentPage - 1].row * this.layOutList[this.currentPage - 1].line;
            this.uiImageNumber = this.uiImageNumber - layoutSize;
            if (!this.isSameLayout) {
                this.layOutList.splice(this.currentPage - 1, 1);
            }
        }
        this.pages--;
        this.resetPageDisplay();
    }

    private async getSelectCellsDcmImageIndex(): Promise<string> {
        const selectedCells = this.viewerControl.layoutManager.getSelectedCells();
        const msg = $PB.MsgCommonString.create();
        msg.value = selectedCells[0].cellName;
        const buffer = $PB.MsgCommonString.encode(msg).finish();

        let value = await this.viewerControl.commandSender.syncSendCommonOperation(buffer, 'GetSelectDcmIndex', 'Cell_0');
        let decoder = new TextDecoder();
        return decoder.decode(value).toString();
    }

    createPageupDeta(pageIndex: number): Uint8Array {
        let startPos = this.getStartPosition(pageIndex);
        let row = 0;
        let colum = 0;
        if (!this.isSameLayout) {
            //start = this.getStartPosition(pageIndex);
            row = this.layOutList[pageIndex - 1].row;
            colum = this.layOutList[pageIndex - 1].line;
        } else {
            row = this.rows;
            colum = this.colums;
        }
        let layoutSize = row * colum;
        const msg = $PB.MsgCommonString.create();
        //var isSameNum = this.isSameLayout ? 1 : 0;
        if (layoutSize != this.layoutSize) {
            console.log(`[createPageupDeta]:layoutsize ${layoutSize} and this.layoutsize ${this.layoutSize} do not equal.`);
        }
        msg.value = pageIndex.toString() + '|' + layoutSize.toString() + '|' + startPos.toString();
        console.log(`[createPageupDeta]:page is ${pageIndex},layoutSize is ${this.layoutSize}, startPos is ${startPos}`);
        const buffer = $PB.MsgCommonString.encode(msg).finish();
        return buffer;
    }

    createDeletePara(deleteCellIndex: string): Uint8Array {
        let startPos = this.getStartPosition(this.currentPage);
        let row = 0;
        let column = 0;
        if (!this.isSameLayout) {
            row = this.layOutList[this.currentPage - 1].row;
            column = this.layOutList[this.currentPage - 1].line;
        }
        else {
            row = this.rows;
            column = this.colums;
        }
        let layoutSize = row * column;
        if (layoutSize != this.layoutSize) {
            console.log(`[createDeletePara]:layoutsize ${layoutSize} and this.layoutsize ${this.layoutSize} do not equal.`);
        }
        const msg = $PB.MsgCommonString.create();
        msg.value = this.currentPage.toString() + '|' + layoutSize.toString() + '|' + startPos.toString() + ';' + deleteCellIndex;
        console.log(`[createDeletePara]:current page is ${this.currentPage},layoutSize is ${this.layoutSize}, startPos is ${startPos}`);
        const buffer = $PB.MsgCommonString.encode(msg).finish();
        return buffer;
    }


    resetImageTextVisible(isVisible: boolean): void {
        let isVisibleFinal = isVisible && this.isImageTextVisible;
        let cells = this.viewerControl.getCells();
        cells.forEach((cell) => {
            if (cell.displayData) {
                cell.displayData.imageText.isVisible = isVisibleFinal;
            }
            else {
                console.error("the cell or displaydata of" + cell.cellName + "is null or undefined");
            }
        });
    }

    imageTextVisibleChangeClick() {
        console.log("[imageTextVisibleChangeClick]:imageTextVisibleChangeClick start")
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        workflow.LayoutSwitcher.CurrentLayout = 'defaultLayout' + this.rows + '_' + this.colums;
        this.resetImageTextVisible(this.isImageTextVisible);
        if (this.currentPage == this.pages) {//避免在最有一页点击checkbox导致全部cell都显示四角信息
            this.setPageImageTextVisible(this.currentPage - 1);
        }
    }

    sameLayoutChangeClick() {
        console.log("[sameLayoutChangeClick]:sameLayoutChangeClick start");
        console.log(`[sameLayoutChangeClick]: isSameLayout is ${this.isSameLayout}`);
        if (!this.isSameLayout) {
            this.setPageLayout(this.rows, this.colums);
        } else {
            this.newPage = 1;//会跳转到第一页，需避免执行setPageImageTextVisible
            //切换成跟首页布局一致
            this.rows = this.layOutList[0].row;
            this.colums = this.layOutList[0].line;  
            const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
            workflow.LayoutSwitcher.CurrentLayout = `defaultLayout${this.rows}_${this.colums}`;
            this.layoutSize = this.rows * this.colums;    
            this.viewerControl.commandSender.sendCellOperation(this.createPageupDeta(1), 'PageUpDown', 'Cell_0');//todo 1不对
            let layoutInfo = { 'row': this.rows, 'line': this.colums };
            this.getPages(layoutInfo);//重新计算pages和设置currentpage
            this.pagingBar.nativeElement.scrollTop = 0;//滚动条的高度恢复初始状态
            this.layOutList = [];
            this.newPage = 0;
        }
    }

    deleteCellClick(): void {
        this.deleteCells();
    }

    deleteCurrentPageClick(): void {
        this.deleteCurrentPage();
    }

    deleteAllPageClick(): void {
        for (let i = 0; i < this.layoutSize; i++) {
            let cellName = 'Cell_' + i.toString();
            this.clearCell(cellName);
        }
        let row = 0;
        let column = 0;
        if (!this.isSameLayout) {
            row = this.layOutList[this.currentPage - 1].row;
            column = this.layOutList[this.currentPage - 1].line;
        }
        else {
            row = this.rows;
            column = this.colums;
        }
        let layoutSize = row * column;
        if (layoutSize != this.layoutSize) {
            console.log(`[createDeletePara]:layoutsize ${layoutSize} and this.layoutsize ${this.layoutSize} do not equal.`);
        }
        const msg = $PB.MsgCommonString.create();
        msg.value = layoutSize.toString();
        const buffer = $PB.MsgCommonString.encode(msg).finish();
        this.viewerControl.commandSender.sendCellOperation(buffer, 'DeleteAllPage', 'Cell_0');
        this.currentPage = 0;
        this.pages = 0;
        this.uiImageNumber = 0;
    }

    generateMsgValue(): string {
        //给平移缩放调窗传选中cell
        let selectCells = this.viewerControl.layoutManager.getSelectedCells();
        let cellsString = 'initial|';
        for (let i = 0; i < selectCells.length; i++) {
            if (i == selectCells.length - 1) {
                cellsString = cellsString + selectCells[i].cellName;
            } else {
                cellsString = cellsString + selectCells[i].cellName + '|';
            }
        }
        return cellsString;
    }

    onMouseup(e: MouseEvent) {
        if (!e.ctrlKey && e.which == 1 && e.buttons !==2 && this.previouSelectedCell.indexOf(this.currentClickCell) > -1) {
            //e.buttons !==2避免左右键平移触发反选
            this.previouSelectedCell.forEach((cell) => {
                if (cell.cellName != this.currentClickCell.cellName)
                    this.viewerControl.layoutManager.setCellSelectStatus(cell, false);//反选
            });
        }
        if (this.previousIndex == -1) {
            this.previousIndex = this.viewerControl.getCell((<any>event.target).id).cellIndex;
        }
        else {
            this.currentIndex = this.viewerControl.getCell((<any>event.target).id).cellIndex;
        }
        if (!e.shiftKey) {
            this.previousIndex = this.viewerControl.getCell((<any>event.target).id).cellIndex;
        }

        if (e.shiftKey) {
            if (this.currentIndex > this.previousIndex) {
                for (let i = this.previousIndex; i < this.currentIndex; i++) {
                    this.viewerControl.getCells().forEach(
                        el => {
                            if (el.cellIndex == i) {
                                this.viewerControl.layoutManager.selectedCell(el, true)
                            }
                        });
                }
            }
            else {
                for (let i = this.currentIndex + 1; i <= this.previousIndex; i++) {
                    this.viewerControl.getCells().forEach(
                        el => {
                            if (el.cellIndex == i) {
                                this.viewerControl.layoutManager.selectedCell(el, true)
                            }
                        });
                }
            }
        }
    }

    onMousedown(event: MouseEvent) {
        const Cells = this.viewerControl.getCells();
        if (!event.ctrlKey && this.previouSelectedCell.indexOf(this.currentClickCell) > -1) {
            this.previouSelectedCell.forEach((cell) => {
                this.viewerControl.layoutManager.setCellSelectStatus(cell, true);//由于触发medveiwcontrol的反选，需重新设置多选项为选中状态
            });
        }
        if (event.ctrlKey && this.previouSelectedCell.indexOf(this.currentClickCell) > -1) {
            this.viewerControl.layoutManager.setCellSelectStatus(this.currentClickCell, false);//按住ctrl反选
        }
        const args = this.currentClickCell.buildMouseEventArgs(event);
        const currentAction = this.currentClickCell.actionManager.getCurrentAction(args);
        if (event.type == "mousedown") {
            currentAction.mouseDown(args);
        }
        else if (event.type == "mousewheel") {
            currentAction.mouseDown(args);
        }

        for (const cell of Cells) {
            if (event.button == 0 && event.buttons == 1) {
                //在只有左键按下的情况
                document.getElementById(cell.cellName).draggable = true;
            }
            else {
                document.getElementById(cell.cellName).draggable = false;
            }
        }
    }



    onScroll(e: any) {
        console.log("[onScroll]:start");
        //区分滚轮滚和拖动滚动条，用滚轮得时候直接return
        if (this.isScrolled) {
            this.isScrolled = false;
            return;
        }
        this.scrollTerms.next(e); //加入防抖队列
    }

    onWheel(e: any) {
        const event = e.event || window.event;
        this.isScrolled = true;//避免触发onscroll
        if (event.wheelDelta) {
            let cell = this.viewerControl.getCell((<any>event.target).id);
            if (event.wheelDelta > 0) {
                if (this.viewerControl.layoutManager.isMaxmized) {
                    this.bwheeled = true;
                    this.commandSender.sendPage(cell.cellName, -1); //上翻一张图
                } else {
                    //this.leftPageClick();
                    // console.log(`onWheel ypos:${this.ypos} eachScrollLen:${this.eachScrollLen}`);
                    // this.ypos = this.eachScrollLen * (this.currentPage - 1);//滚动距离计算
                    // this.pagingBar.nativeElement.scrollTo(this.xpos, this.ypos);
                    // this.isScrolled = 1;
                    this.upWheel();//多次发送，只执行最后一次
                }
            } else {
                if (this.viewerControl.layoutManager.isMaxmized) {
                    this.bwheeled = true;
                    this.commandSender.sendPage(cell.cellName, 1); //下翻一张图
                } else {
                    // console.log(`onWheel ypos:${this.ypos} eachScrollLen:${this.eachScrollLen}`);
                    // this.rightPageClick();
                    // this.ypos = this.eachScrollLen * this.currentPage;
                    // this.pagingBar.nativeElement.scrollTo(this.xpos, this.ypos);
                    this.downWheel();
                }
            }
        }
    }

    upWheel(): void {
        if (this.viewerControl.layoutManager.isMaxmized) {
            return;
        }
        if (this.currentPage - 1 <= 0) {
            console.log(`[upWheel]: currentpage is ${this.currentPage}`);
            return;
        }
        if (this.layoutSize === 0 || !this.layoutSize) {
            console.log("[upWheel]: layoutSize is zero or null");
            return;
        }
        let newPage = this.currentPage - 1;
        this.currentPage = newPage;
        this.wheelTerms.next('up');
    }

    downWheel(): void {
        if (this.viewerControl.layoutManager.isMaxmized) {
            return;
        }
        if (this.currentPage >= this.pages) { return; }
        if (this.layoutSize === 0 || !this.layoutSize) {
            console.log("[downWheel]: layoutSize is zero or null");
            return;
        }
        let newPage = this.currentPage + 1;
        this.currentPage = newPage;
        this.wheelTerms.next('down');
    }

    onDragstart(e: MouseEvent) {
        // this.previouSelectedCell.forEach((cell) => {
        //     this.viewerControl.layoutManager.setCellSelectStatus(cell, true);//由于触发medveiwcontrol的反选，需重新设置多选项为选中状态
        // });
    }

    onDrop(e: MouseEvent) {
        e.preventDefault();
        const selectedCells = this.viewerControl.layoutManager.getSelectedCells();
        selectedCells.forEach(item => {
            if (item.actionManager.currentAction) {
                item.actionManager.currentAction.isActionDone = true;
            } else {
                console.log("[onDrop]: currentAction is null");
            }
        });
        if (this.viewerControl.layoutManager.getSelectedCells()) {
            this.droppedIndex = (this.viewerControl.getCell((e.target as any).id).cellIndex).toString();
            this.viewerControl.commandSender.sendCellOperation(this.createDragDropPara(), 'DragDrop', 'Cell_0');
        }
        this.setDragCellSelectStatus();
    }

    createDragDropPara(): Uint8Array {
        let s = '';
        const selectedCells = this.viewerControl.layoutManager.getSelectedCells();
        if (selectedCells && selectedCells.length > 0) {
            let i = 0;
            for (const cell of selectedCells) {
                //当拖动的cell放回到原始位置会抛异常，所以加了判断
                if (cell.cellIndex.toString() == this.droppedIndex) {
                    console.error(`[createDragDropPara]:droppedIndex is ${this.droppedIndex} and dragIndex is ${cell.cellIndex}.It can not the same.`);
                    return;
                }
                if (i == 0) {
                    s = cell.cellIndex.toString();
                } else {
                    s = s + ',' + cell.cellIndex.toString();
                }
                i++;
            }
        }
        let startPos = this.getStartPosition(this.currentPage);
        let row = 0;
        let colum = 0;
        if (!this.isSameLayout) {
            row = this.layOutList[this.currentPage - 1].row;
            colum = this.layOutList[this.currentPage - 1].line;
        } else {
            row = this.rows;
            colum = this.colums;
        }
        let layoutSize = row * colum;
        const msg = $PB.MsgCommonString.create();
        msg.value = this.currentPage.toString() + '|' + layoutSize.toString() + '|' + startPos.toString() + '|'
            + s + '|' + this.droppedIndex;
        console.log(`[createDragDropPara]:current page is ${this.currentPage},layoutsize is ${layoutSize},startpos is ${startPos}`);
        const buffer = $PB.MsgCommonString.encode(msg).finish();
        return buffer;
    }

    async onPrintPage(event: PrinterConfig): Promise<void> {
        try {
            this.isButtonDisable = true;
            if (event == null) {
                this.toastSvc.error("读取打印配置失败");
                this.isButtonDisable = false;
                return;
            }
            this.viewCotrolCloneAddCell();
            this.showPupup = true;
            let isPrint = $PB.MsgCommonBool.create();
            isPrint.value = true;
            let buffer = $PB.MsgCommonBool.encode(isPrint).finish();
            let ret = await this.viewerControl.commandSender.syncSendCommonOperation(buffer, 'UpdatePrintState', 'Cell_0');
            console.log(`[onPrintPage]:UpdatePrintState ${ret}`);
            console.log(`start print ${AppCommon.DateTimeHelper.getTimeString()}`);
            this.currentPrinterConfig = event;
            await this.printPage();
            //viewcontrol重新获取焦点
            const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
            workflow.LayoutSwitcher.CurrentLayout = 'defaultLayout' + this.rows + '_' + this.colums;
            console.log(`end print ${AppCommon.DateTimeHelper.getTimeString()}`);
            this.showPupup = false;
            this.toastSvc.info("打印成功");
            this.hasPrint = true;
            //await delay(2000);
            //this.filmingVisibleService.setPrintState(true);
        }
        catch (error) {
            console.error(`[onPrintPage]:onPrintPage error.${error}`);
        }
        finally {
            let isPrint = $PB.MsgCommonBool.create();
            isPrint.value = false;
            let buffer = $PB.MsgCommonBool.encode(isPrint).finish();
            this.viewerControl.commandSender.sendCellOperation(buffer, 'UpdatePrintState', 'Cell_0');
            console.log("[onPrintPage]:onPrintPage finally isprint is false. " + DateTimeHelper.getTimeString());
        }
    }

    async onPrintAllPage(event: PrinterConfig): Promise<void> {
        try {
            this.isButtonDisable = true;
            if (event == null) {
                this.toastSvc.error("读取打印配置失败");
                this.isButtonDisable = false;
                return;
            }
            this.viewCotrolCloneAddCell();
            this.isHiddenPrintProgress = false;
            this.showPupup = true;
            this.currentPrinterConfig = event;
            let newPage = 1;
            this.removeAllCellsSelectStatus();
            if (this.currentPage !== newPage) {
                this.firstPageClick();
                await delay(500);
            }
            let isPrint = $PB.MsgCommonBool.create();
            isPrint.value = true;
            let buffer = $PB.MsgCommonBool.encode(isPrint).finish();
            let ret = await this.viewerControl.commandSender.syncSendCommonOperation(buffer, 'UpdatePrintState', 'Cell_0');
            console.log(`[onPrintPage]:UpdatePrintState ${ret}`);
            this.loadPrintPercent = 5;
            let perValue = 100 / this.pages;
            while (newPage <= this.pages) {
                //打印
                if (newPage == this.pages) {
                    //打印最后一页问题
                    await delay(1000);
                }
                console.log(`[onPrintAllPage]:print ${newPage} page. ` + DateTimeHelper.getTimeString());
                await this.printPage();
                newPage++;
                if (newPage > this.pages) {
                    this.loadPrintPercent = 100;
                    this.isHiddenPrintProgress = true;
                    this.showPupup = false;
                    //this.onLayoutClicked({ 'row': this.rows, 'line': this.colums });
                    this.viewerControlClone.clearCells()
                    const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
                    workflow.LayoutSwitcher.CurrentLayout = 'defaultLayout' + this.rows + '_' + this.colums;
                    this.firstPageClick();
                    this.toastSvc.info("打印成功");
                    this.ypos = this.eachScrollLen * (this.currentPage - 1);
                    this.pagingBar.nativeElement.scrollTop = this.ypos;
                    this.isScrolled = true;
                    this.hasPrint = true;
                    // await delay(2000);
                    // this.filmingVisibleService.setPrintState(true);
                    return;
                }
                console.log(`[onPrintAllPage]:page ${newPage} get focus start. ` + DateTimeHelper.getTimeString());
                const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
                workflow.LayoutSwitcher.CurrentLayout = 'defaultLayout' + this.rows + '_' + this.colums;
                await this.waitDrawComplete();//等待出图完毕
                console.log(`[onPrintAllPage]:page ${newPage} get focus end. ` + DateTimeHelper.getTimeString());
                //翻页
                console.log(`[onPrintAllPage]:page ${newPage} forward start. ` + DateTimeHelper.getTimeString());
                let pageRet = await this.asyncRightPageClick();
                console.log(`[onPrintAllPage]:asyncRightPageClick forward end ${pageRet}. ` + DateTimeHelper.getTimeString());
                await this.waitDrawComplete();//等待出图完毕
                console.log(`[onPrintAllPage]:page ${newPage} forward end. ` + DateTimeHelper.getTimeString());
                await delay(500);//等待出图完毕
                this.loadPrintPercent = newPage * perValue;
            }
            // this.isHiddenPrintProgress = true;
            // this.showPupup = false;
            // this.onLayoutClicked({ 'row': this.rows, 'line': this.colums });
            // this.toastSvc.info("打印成功");
        }
        catch (error) {
            console.error(`[onPrintAllPage]:onPrintAllPage error.${error} `);
        }
        finally {
            let isPrint = $PB.MsgCommonBool.create();
            isPrint.value = false;
            let buffer = $PB.MsgCommonBool.encode(isPrint).finish();
            this.viewerControl.commandSender.sendCellOperation(buffer, 'UpdatePrintState', 'Cell_0');
            console.log("[onPrintAllPage]:onPrintAllPage finally isprint is false. " + DateTimeHelper.getTimeString());
        }
    }

    initCloneFilimingCell(): void {
        this.cellCollecton2 = [];
        let size = this.rows * this.colums;
        for (let i = 0; i < size; i++) {
            let cell = this.cellCollecton1[i];
            if (cell === null || cell === undefined) {
                console.error("[initPrintFliming]:cell is null ")
                return;
            }
            this.cellCollecton2.push(cell);
        }
    }

    viewCotrolCloneAddCell(): void {
        let size = 36;
        for (let i = 0; i < size; i++) {
            let cell = this.cellCollecton1[i];
            if (cell === null || cell === undefined) {
                console.error("[viewCotrolCloneAddCell]:cell is null ")
                return;
            }
            this.viewerControlClone.addCell(cell);
        }
    }

    async printPage(): Promise<void> {
        try {
            console.log(`[printPage]: print page ${this.currentPage}  start. ` + DateTimeHelper.getTimeString());     
            this.updatedCellList = [];
            this.hasUpdated = false;
            let viewerControlCloneDom = this.viewerControlCloneElement.nativeElement;
            if (!viewerControlCloneDom) {
                console.error("[initPrintFliming]:viewerControlCloneDom is null.")
                return;
            }
            //设置胶片比例
            this.resetViewerControlCloneSize(this.currentPrinterConfig.selectSize)
            this.removeAllCellsSelectStatus();
            let printControlTitleHeight = Math.round((this.viewerControlCloneDomHeight / this.viewcontrolHeight) * this.viewcontrolTitleHeight);//现在标题高度默认是40px;
            if (this.titleModel == "model2") {
                printControlTitleHeight = 0.4 * printControlTitleHeight;
            }
            viewerControlCloneDom.style.height = (this.viewerControlCloneDomHeight - printControlTitleHeight).toString() + 'px';//设置图像区域的宽和高
            viewerControlCloneDom.style.width = this.viewerControlCloneDomWidth.toString() + 'px';
            this.printControl.nativeElement.style.height = (this.viewerControlCloneDomHeight).toString() + 'px';//设置图像区域加标题div的宽和高
            this.printControl.nativeElement.style.width = this.viewerControlCloneDomWidth.toString() + 'px';
            this.printControlTitle.nativeElement.style.height = printControlTitleHeight.toString() + 'px';//设置标题的高度
            const defaultLayout = new Viewer.LayoutCellInfo();
            defaultLayout.rows = this.rows;
            defaultLayout.colums = this.colums;
            console.log(`[printPage]:vicontrolclone ${this.currentPage} get focus start.` + DateTimeHelper.getTimeString());
            this.viewerControlClone.layoutManager.setLayout(defaultLayout, this.cellCollecton2);
            ViewerKit.CommandHelper.sizeChanged(this.commandSender, this.viewerControlClone);
            //CommandHelper.sendControllerOperation(this.commandSender, null, 'ForceUpdateAllNonimage');
            //根据dpi去设置字体大小，dpi为300时，字体放大3倍
            let dpi = Number(this.currentPrinterConfig.DPI);
            if (this.currentPrinterConfig.titleFontSize) {
                var titleFontSize = this.currentPrinterConfig.titleFontSize;
                this.printControlTitle.nativeElement.style.fontSize = titleFontSize + 'px';
            }
            if (dpi >= 300) {
                this.setfontSize(3);
            } else if (dpi >= 200) {
                this.setfontSize(2);
                this.printControlTitle.nativeElement.style.fontSize = 18 + 'px';
                 //打印胶片默认字体大小是28px
                 this.printControlTitle.nativeElement.style.fontSize = !titleFontSize ? Math.floor((dpi / 300) * 28) + 'px' : Math.floor((dpi / 300) * Number(titleFontSize)) + 'px';
            } else {
                this.setfontSize(1.5);
                this.printControlTitle.nativeElement.style.fontSize = 9 + 'px';
            }
            this.printSubjectNum = 0;
            // if (this.hasUpdated) {
            //     //如果出图完成，直接截图打印
            //     console.log("[printPage]: no delay and print start. hasUpdated is true");
            //     await this.canvasToBMP();
            //     this.setfontSize();//恢复默认的四角信息字体大小
            //     console.log("[printPage]: no delay and print end");
            //     return;
            // }

            await this.waitDrawCompleteToScreen();
            console.log(`[printPage]:vicontrolclone ${this.currentPage} get focus end.` + DateTimeHelper.getTimeString());
            await this.canvasToBMP();
            this.setfontSize();//恢复默认的四角信息字体大小
            console.log(`[printPage]: print page ${this.currentPage}  end.` + DateTimeHelper.getTimeString())
        } catch (error) {
            console.error(`[printPage]:print error ${error}`);
            this.updatedCellList = [];
            this.hasUpdated = false;
        }
    }


    async waitDrawComplete(): Promise<void> {
        console.log('[waitDrawComplete]:waitDrawComplete print start. ' + DateTimeHelper.getTimeString());
        let num = 0;
        while (!this.hasUpdated) {
            await delay(100 * num);//每隔100 * num检查hasUpdated状态是否为true
            num++;
            if (this.hasUpdated || num == 20) {
                this.hasUpdated = false;
                this.updatedCellList = [];
                await delay(500);
                console.log(`[waitDrawComplete]:waitDrawComplete print end, and while num is ${num}.`+ DateTimeHelper.getTimeString());
                return;
            }
        }
    }

    printSubjectUpdate(): void {
        console.log('[printSubjectUpdate]:printSubjectUpdate start. ' + DateTimeHelper.getTimeString());
        this.printTerms.subscribe((ret) => {
            if (ret) {
                this.printSubjectNum++;
                console.log(`[printSubjectUpdate]:printSubjectUpdate printSubjectNum is ${this.printSubjectNum}. ` + DateTimeHelper.getTimeString());
            }
        });
    }

    async waitDrawCompleteToScreen(): Promise<void> {
        let num = 0;
        console.log('[waitDrawCompleteToScreen]:waitDrawCompleteToScreen print  start.' + DateTimeHelper.getTimeString());
        while (this.printSubjectNum != 2) {
            await delay(100 * num);//每隔100 * num检查hasUpdated状态是否为true
            num++;
            if (num == 10 && !this.hasUpdated) {
                console.log('[waitDrawCompleteToScreen]:fresh viewtrolclone. ' + DateTimeHelper.getTimeString());
                const defaultLayout = new Viewer.LayoutCellInfo();
                defaultLayout.rows = this.rows;
                defaultLayout.colums = this.colums;
                this.viewerControlClone.layoutManager.setLayout(defaultLayout, this.cellCollecton2);
                ViewerKit.CommandHelper.sizeChanged(this.commandSender, this.viewerControlClone);
                await delay(5000);
            }
            //设置num为30是为了避免卡死现象
            if (this.printSubjectNum >= 2 || num == 30 ) {
                await delay(600);
                console.log(`[waitDrawCompleteToScreen]:print draw has completed and screen start. while num is ${num}. ` + DateTimeHelper.getTimeString());
                this.hasUpdated = false;
                this.updatedCellList = [];
                this.printSubjectNum = 0;
                console.log("[waitDrawCompleteToScreen]:waitDrawCompleteToScreen print end.  " + DateTimeHelper.getTimeString());
                return;
            }
        }
    }

    async canvasToBMP(): Promise<void> {
        try {
            console.log(`[canvasToBMP]:print page ${this.currentPage} screen start. ` + DateTimeHelper.getTimeString());
            let shareContent = this.printControl.nativeElement;
            let width = this.viewerControlCloneDomWidth; //获取dom 宽度
            let height = this.viewerControlCloneDomHeight; //获取dom 高度
            let canvas = document.createElement("canvas"); //创建一个canvas节点
            let scale = 1; //定义任意放大倍数 支持小数
            canvas.width = width * scale; //定义canvas 宽度 * 缩放
            canvas.height = height * scale; //定义canvas高度 *缩放
            canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
            let opts = {
                scale: scale, // 添加的scale 参数
                canvas: canvas, //自定义 canvas
                logging: true, //日志开关
                width: width, //dom 原始宽度
                height: height //dom 原始高度
            };
            console.log('[canvasToBMP]:canvas finished.');
            await html2Canvas(shareContent, opts).then(canvas => {
                console.log('[canvasToBMP]:html2Canvas start.');
                let canvantoBMP = new ViewerKit.CanvasToBMP();
                let printColor = this.currentPrinterConfig.selectedPrintModel.indexOf("color") != -1;
                let bitmapFormat = printColor ? ViewerKit.BitMapFormat.RGB : ViewerKit.BitMapFormat.GRAY_8;
                console.log("[canvasToBMP]:toArrayBuffer start.");
                let buff = canvantoBMP.toArrayBuffer(canvas, false, bitmapFormat);
                console.log("[canvasToBMP]:toArrayBuffer end.");
                let header = this.cellCollecton2[0].displayData.DataHeader;
                ViewerKit.SaveFilmingHelper.FillWriteableBitMap(header, buff, canvas.width, canvas.height, false, bitmapFormat);
                const operateInfo = $FrameworkPB.MsgCommonOperate.create();
                operateInfo.context = header.Serialize();
                operateInfo.workflowName = this.viewerControl.commandSender.workflowName;
                operateInfo.cellId = 'Cell_0';
                operateInfo.operateType = 'Print';
                //guid拼接protobuf信息给be
                console.log("[canvasToBMP]:sendCellOperation params ready." + DateTimeHelper.getTimeString());
                operateInfo.guid = new Date().getTime().toString() + '|' + this.currentPrinterConfig.selectPrinter + '|' + this.currentPrinterConfig.ip + '|'
                    + this.currentPrinterConfig.port + '|' + printColor + '|' + this.currentPrinterConfig.selectNum + '|' + this.currentPrinterConfig.selectSize + '|' + this.currentPrinterConfig.mediumType
                    + '|' + this.currentPrinterConfig.localAE;

                const sendBuffer = $FrameworkPB.MsgCommonOperate.encode(operateInfo).finish();
                console.log("[canvasToBMP]:sendCellOperation start." + DateTimeHelper.getTimeString());
                this.viewerControl.commandSender.sendCellOperation(sendBuffer, 'Print', 'Cell_0');
            });
            console.log(`[canvasToBMP]:print page ${this.currentPage} screen end. ` + DateTimeHelper.getTimeString());
        }
        catch (error) {
            console.error('[canvasToBMP]:canvasToBMP error.' + error);
        }
    }

    resetViewerControlCloneSize(printerSize: string): void {
        try {
            let dpi = Number(this.currentPrinterConfig.DPI);
            let filmingWidth = printerSize.split("X")[0];
            let filmingHeight = printerSize.split("X")[1];
            if (printerSize.indexOf("IN") > 0) {
            	this.viewerControlCloneDomWidth = (dpi * Number(filmingWidth.replace('IN', '')));
                this.viewerControlCloneDomHeight = (dpi * Number(filmingHeight.replace('IN', '')));
                console.log(`viewerControlCloneDomWidth is ${this.viewerControlCloneDomWidth} and viewerControlCloneDomHeight is ${this.viewerControlCloneDomHeight}`);
            } else {//CM
                this.viewerControlCloneDomWidth = (dpi * Number(filmingWidth.replace('CM', '')) * 0.3937);
                this.viewerControlCloneDomHeight = (dpi * Number(filmingHeight.replace('CM', '')) * 0.3937);
                console.log(`viewerControlCloneDomWidth is ${this.viewerControlCloneDomWidth} and viewerControlCloneDomHeight is ${this.viewerControlCloneDomHeight}`);
            }
        }
        catch (error) {
            console.error("[resetViewerControlCloneSize]:" + error)
        }
    }

    setDragCellSelectStatus(): void {
        let selectedCells = this.viewerControl.layoutManager.getSelectedCells();
        if (!selectedCells) {
            console.log("[setDragCellSelectStatus]: selectedCells is null")
            return;
        }
        let droppIndex = Number(this.droppedIndex);
        if (!isNumber(droppIndex)) {
            console.error("[setDragCellSelectStatus]: droppedIndex convert number error")
            return;
        }
        this.removeAllCellsSelectStatus();
        let space = 0;
        let newIndex = 0;
        let minIndex = this.getMinIndex(selectedCells);
        let maxIndex = this.getMaxIndex(selectedCells);

        selectedCells.forEach((selectedCell) => {
            //向左拖拽
            if (selectedCell.cellIndex > droppIndex && minIndex > droppIndex) {
                newIndex = droppIndex + space;
                space++;
            }
            //向右拖拽
            else if (selectedCell.cellIndex < droppIndex && maxIndex < droppIndex) {
                newIndex = droppIndex - selectedCells.length + space;//TODO向右拖两个间隔才有效果
                space++;
            }
            else if (minIndex < droppIndex && maxIndex > droppIndex) {
                newIndex = droppIndex - selectedCells.length + 1 + space;
                space++;
            }
            else {
                selectedCells.forEach((item) => {
                    this.viewerControl.layoutManager.setCellSelectStatus(item, true)
                });
                return;
            }
            let cellName = "Cell_" + newIndex.toString();
            let cell = this.viewerControl.layoutManager.getCell(cellName);
            this.viewerControl.layoutManager.setCellSelectStatus(cell, true)
        });
    }

    getMinIndex(selectedCells: MedViewerControlCell[]): number {
        let minIdex = Number.MAX_VALUE;//初始化一个很大值 
        selectedCells.forEach(cell => {
            if (cell.cellIndex < minIdex) {
                minIdex = cell.cellIndex;
            }
        });
        return minIdex
    }

    getMaxIndex(selectedCells: MedViewerControlCell[]): number {
        let maxIndex = Number.MIN_VALUE;//初始化一个很小值
        selectedCells.forEach(cell => {
            if (cell.cellIndex > maxIndex) {
                maxIndex = cell.cellIndex;
            }
        });
        return maxIndex
    }

    protected HandleWarningFromServer(warningInfo: string): void {
        this.showTitle = 'uAI-CoronaryCTA';
        this.showContent = warningInfo;
        this.showAiDialog = true;
    }

    cancel(): void {
        this.showAiDialog = false;
        window.location.href = 'about:blank';
        window.close();
    }
}

export class FilmingLayoutInfo {
    row: number;
    line: number;
    page: number;
}
