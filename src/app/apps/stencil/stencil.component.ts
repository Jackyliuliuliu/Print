import { Injector, ElementRef, Renderer2, Component, HostListener, NgZone, ChangeDetectorRef } from '@angular/core'; // ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvAppBaseComponent, FilmingMode } from '../adv-app-base/adv-app-base.component';
import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';
import * as AppToolkit from 'uih-apptoolkit';
import * as AppCommon from 'uih-appcommon';
import * as NetBase from 'uih-netbase';
import { StencilWorkflow } from './StencilWorkflow';
import { isNullOrUndefined } from 'util';
import { Point } from 'uih-appcommon';
//import { AppFilmingReviewComponent } from '../heart/filming/filming-review/filming-review.component';

@Component({
    selector: 'app-stencil',
    templateUrl: './stencil.component.html',
    styleUrls: ['./stencil.component.css'],
    providers: [AppCommon.ModelContainer]
})
export class StencilComponent extends AdvAppBaseComponent {
    commonToolAppName: string = "AdvAppStencil";//初始化CommonTools
    //@ViewChild('farea', { read: ViewContainerRef, static: false }) farea: ViewContainerRef;
    constructor(protected injector: Injector,
        protected route: ActivatedRoute,
        protected render: Renderer2,
        //protected componentFactoryResolver: ComponentFactoryResolver,
        protected rootElement: ElementRef,
        protected z: NgZone,
        protected cd: ChangeDetectorRef,
        protected modelContainer: AppCommon.ModelContainer) {
        super(injector, route, render, rootElement, z, cd, modelContainer);
        this.filmingMode = FilmingMode.NewPage;
    }
    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit() {
        super.ngOnInit();
    }

    //test():void{
    //    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AppFilmingReviewComponent);
    //    this.farea.clear();
    //    const componentRef = this.farea.createComponent(componentFactory);
    //    componentRef.instance.showFilmingReview =true;
    //}

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    protected initCells() {
        //this.AddCell('VR_Ribs', 'VR');
        //this.AddCell('Axial_Intervertebral', 'MPR');
        //this.AddCell('Coronal_Intervertebral', 'MPR');
        //this.AddCell('Sagittal_Intervertebral', 'MPR');
        this.AddCell('VR', 'VR');
        this.AddCell('Axial', 'MPR');
        this.AddCell('Coronal', 'MPR');
        this.AddCell('Sagittal', 'MPR');
    }

    protected buildModels(): Map<string, { new(...args: any[]): AppCommon.AppModelBase }> {
        const modelMap = super.buildModels();
        modelMap.set('WorkflowModel', StencilWorkflow);
        return modelMap;
    }

    private AddCell(name: string, cellType: string) {
        const cell0 = new ViewerKit.AppCell(AppToolkit.AngularPerformanceHelper.highPerformanceWrapper, this.isDeviceSlow);
        cell0.cellName = name;
        cell0.cellType = cellType;
        //   if (cellType == "MPR2") {

        //    cell0.itemCollection.push(new Viewer.textBoxControl());
        //    }
        let workflow = this.modelContainer.getModel('WorkflowModel') as ViewerKit.AppWorkflow;
        //this.viewerControl.addCell(cell0);
        workflow.addCell(cell0);

        if (cellType === 'VR') {
            let positionSwitchingControl = new AppToolkit.PositionSwitchingControl();
            cell0.itemCollection.push(positionSwitchingControl);
            let actionInitializeItem = new Viewer.VRCellActionInitializeItem();
            cell0.itemCollection.push(actionInitializeItem);
            const crossHairInitializeItem = new ViewerKit.CommonCellCrossHairInitializeItem();
            cell0.itemCollection.push(crossHairInitializeItem);
        }

        if (cellType === 'MPR') {
            let actionInitializeItem = new Viewer.MPRCellActionInitializeItem();
            cell0.itemCollection.push(actionInitializeItem);

            const crossHairInitializeItem = new ViewerKit.MPRCellCrossHairInitializeItem();
            cell0.itemCollection.push(crossHairInitializeItem);

            // let mprSliceThicknessControl = new AppToolkit.MPRSliceThicknessControl();
            // mprSliceThicknessControl.modelContainer = this.modelContainer;
            // mprSliceThicknessControl.cell = cell0;
            // cell0.itemCollection.push(mprSliceThicknessControl);
        }

        let changeRenderMethodControl = new AppToolkit.ChangeRenderMethodControl();
        changeRenderMethodControl.modelContainer = this.modelContainer;
        changeRenderMethodControl.cell = cell0;
        cell0.itemCollection.push(changeRenderMethodControl);

        const imageTexts = new Viewer.ImageTextInitializeItem();
        imageTexts.cell = cell0;
        imageTexts.appName = this.appName;
        cell0.itemCollection.push(imageTexts);
    }

    setDefaultLayout() {
        this.setlayout1();
    }

    setlayout1(): void {

        const workflow = this.modelContainer.getModel('WorkflowModel') as ViewerKit.AppWorkflow;
        workflow.LayoutSwitcher.CurrentLayout = 'defaultLayout';

        //this.viewerControl.layoutManager.setCompleteLayout(wholeLayoutInfo);
        //MedViewerCommandHelper.SizeChanged(this.viewerControl);
    }

    setlayout2(): void {
        //const defaultLayout = new Viewer.LayoutCellInfo();
        //defaultLayout.rows = 1;
        //defaultLayout.colums = 3;
        //this.viewerControl.layoutManager.setLayout(defaultLayout);
        // todo: 应该使用render2的listen接口来等待UI刷新完毕        //MedViewerCommandHelper.SizeChanged(this.viewerControl);

        const workflow = this.modelContainer.getModel('WorkflowModel') as ViewerKit.AppWorkflow;
        workflow.LayoutSwitcher.CurrentLayout = 'layout2';
    }

    setlayout3(): void {
        const layout3CellInfo = new Viewer.LayoutCellInfo();
        layout3CellInfo.rows = 1;
        layout3CellInfo.colums = 2;
        layout3CellInfo.widths = [0.7, 0.3];
        const childLayout1 = new Viewer.LayoutCellInfo();
        childLayout1.rows = 1;
        childLayout1.colums = 1;
        layout3CellInfo.cells.push(childLayout1);
        const childLayout2 = new Viewer.LayoutCellInfo();
        childLayout2.rows = 3;
        childLayout2.colums = 1;
        layout3CellInfo.cells.push(childLayout2);
        this.viewerControl.layoutManager.setLayout(layout3CellInfo);
    }

    setlayout4(): void {
        const defaultLayout = new Viewer.LayoutCellInfo();
        defaultLayout.rows = 2;
        defaultLayout.colums = 1;
        defaultLayout.heights = [0.7, 0.3];
        const childLayout1 = new Viewer.LayoutCellInfo();
        childLayout1.rows = 1;
        childLayout1.colums = 3;
        childLayout1.widths = [0.6, 0.3, 0.1];
        const childLayout11 = new Viewer.LayoutCellInfo();
        childLayout11.rows = 3;
        childLayout11.colums = 3;
        childLayout1.cells.push(childLayout11);
        const childLayout12 = new Viewer.LayoutCellInfo();
        childLayout12.rows = 2;
        childLayout12.colums = 2;
        childLayout1.cells.push(childLayout12);
        const childLayout13 = new Viewer.LayoutCellInfo();
        childLayout13.rows = 3;
        childLayout13.colums = 1;
        childLayout1.cells.push(childLayout13);
        defaultLayout.cells.push(childLayout1);
        const childLayout2 = new Viewer.LayoutCellInfo();
        childLayout2.rows = 1;
        childLayout2.colums = 4;
        defaultLayout.cells.push(childLayout2);
        this.viewerControl.layoutManager.setLayout(defaultLayout);
    }

    setlayout5(): void {
        const defaultLayout = new Viewer.LayoutCellInfo();
        defaultLayout.rows = 2;
        defaultLayout.colums = 2;
        defaultLayout.capacity = 6;
        const childLayout = new Viewer.LayoutCellInfo();
        childLayout.rows = 2;
        childLayout.colums = 1;
        childLayout.capacity = 4;
        defaultLayout.cells.push(childLayout);
        defaultLayout.cells.push(this.getEmptyLayout());
        defaultLayout.cells.push(this.getEmptyLayout());
        defaultLayout.cells.push(this.getEmptyLayout());
        defaultLayout.cells.push(this.getEmptyLayout());
        defaultLayout.cells.push(this.getEmptyLayout());
        this.viewerControl.layoutManager.setLayout(defaultLayout);
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

    protected addCommonEventListener() {
        const nativeElement = this.rootElement.nativeElement as HTMLElement;
        nativeElement.addEventListener("click", (ev: Event) => {

            let node = (<any>(ev as MouseEvent)).toElement;
            if (node.id == "currentClutName") return;
            let flag = false;//是否点中了伪彩条
            while (true) {
                if (node.id == "clutDialog") {
                    flag = true;
                    break;
                }
                if (!node.parentElement) {
                    flag = false;
                    break;
                }
                node = node.parentElement;

            }
            // if(!flag){               
            //     this.commonTools.openClutColor("parent");
            // }   
            ev.stopPropagation();
        })
    }



    //临时代码，等后期cell中鼠标事件代码重构后这一块需要修改
    @HostListener('mouseup', ['$event'])
    mouseup(e: MouseEvent) {
        if (3 == e.which) {
            const selectedCell = this.viewerControl.layoutManager.getSelectedCells()[0];
            let contextMenuControl = new AppToolkit.ContextMenuControl();
            contextMenuControl.modelContainer = this.modelContainer;
            contextMenuControl.cell = selectedCell;
            // contextMenuControl.left = e.x + 5;
            // contextMenuControl.top = e.y + 5;
            selectedCell.itemCollection.push(contextMenuControl);
        }
    }

    saveImage(): void {
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        const selectedCells = viewerControl.layoutManager.getSelectedCells();
        if (isNullOrUndefined(selectedCells) || selectedCells.length == 0) return;
        const selectedCell = selectedCells[0];
        ViewerKit.SaveFilmingHelper.saveCellAutoMatically(viewerControl.commandSender, selectedCell);
    }

    private _autoRotateStart: AppCommon.Point = undefined;
    private _autoRotateEnd: AppCommon.Point = undefined;
    private _isAutoRotating = false;
    private _autoRotateTimer: any = undefined;
    autoRotate(): void {
        const workflow = this.modelContainer.getModel('WorkflowModel') as ViewerKit.AppWorkflow;
        const cell = workflow.getCell('VR');
        if (!cell) {
            return;
        }

        if (!this._isAutoRotating) {
            Viewer.MedViewerCommandHelper.sendCellOperationStart(cell.viewerControl.commandSender, 'rotate');
            this._autoRotateStart = new AppCommon.Point(0.5, 0.5);
            this._autoRotateEnd = new AppCommon.Point(0.5 + 0.1, 0.5);
            this._autoRotateTimer = setInterval(this.autoRotateTimerTick, 20, cell, this._autoRotateStart, this._autoRotateEnd);
            this._isAutoRotating = true;
        } else {
            Viewer.MedViewerCommandHelper.sendCellOperationEnd(cell.viewerControl.commandSender, 'rotate');
            this._isAutoRotating = false;
            clearInterval(this._autoRotateTimer);
            this._autoRotateTimer = undefined;
        }
    }

    autoRotateTimerTick(cell: ViewerKit.AppCell, start: AppCommon.Point, end: AppCommon.Point) {
        Viewer.MedViewerCommandHelper.cellCommonOperation('rotate', cell,
            new Point(start.x * cell.canvas.width, start.y * cell.canvas.height),
            new Point(end.x * cell.canvas.width, end.y * cell.canvas.height));
        const preEndX = end.x;
        const preEndY = end.y;

        if ((end.x > start.x && end.x < 0.85) ||
            (end.x < start.x && end.x < 0.15)) {
            end.move(0.1, 0);
        } else {
            end.move(-0.1, 0);
        }

        start.move(preEndX - start.x, preEndY - start.y);
    }

    sendToVRFilming(): void {
        this.isFilmingWindowVisible = true;
        let workflow = this.modelContainer.getModel('WorkflowModel') as ViewerKit.AppWorkflow;
        let vrCell = workflow.getCell('VR');
        let cell = workflow.cells.find(c => c.isSelected);
        if (!cell) {
            cell = vrCell;
        }
        ViewerKit.SaveFilmingHelper.filmingCellDirectly(this.commandSender, cell, this.relatedFilmingProxyName.replace('FE', 'BE'), ViewerKit.BitMapFormat.RGB);
        setTimeout(() => {
            this.isFilmingWindowVisible = false;
        }, 5000);
    }

    isFilmingWindowVisible = false;

    //handleCancelMiddle(): void {
    //    this.isFilmingWindowVisible = false;
    //}

    //handleOkMiddle(): void {
    //    this.isFilmingWindowVisible = false;
    //}

    callFilmingFE(): void {
        var context = new NetBase.WebCommandContext();
        context.commandId = 30000;
        context.sender = this.communicationProxy.getName();
        context.receiver = this.relatedFilmingProxyName;
        context.isNeedReply = true;
        this.communicationProxy.asyncSendCommand(context, {
            handleReply: (asyncResult: Uint8Array) => {
                let decoder = new TextDecoder();
                let info = decoder.decode(asyncResult);
                alert(`filming的回复： ${info}`);
                return new NetBase.Result();
            }
        });
    }

}
