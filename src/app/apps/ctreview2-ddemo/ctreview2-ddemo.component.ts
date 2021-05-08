import { Injector, ElementRef, Renderer2, Component, HostListener, Output, EventEmitter, NgZone, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvAppBaseComponent, FilmingMode } from '../adv-app-base/adv-app-base.component';
import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;
import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';
import * as AppCommon from 'uih-appcommon';
import { LoadEndOperation, LoadSeriesStartOperation, SetLayoutOperation } from '../adv-app-base/adv-app-base.component.paneloperations';
import { CellSliceInfoInitializeItem } from 'uih-viewerkit';
import { SeriesDto, StudyDto } from '../../../root/adv-app.server.api.service';
import { DateTimeHelper } from 'uih-appcommon';
import * as NetBase from 'uih-netbase';
import * as AppToolkit from 'uih-apptoolkit';

class ReceiveConvertResultOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): Uint8Array {
        let content: string = new TextDecoder("utf-8").decode(buffer);
        let infos: string[] = content.split("|");
        let point: AppCommon.Point = new AppCommon.Point(Number(infos[0]), Number(infos[1]));
        let mainComponent: CTReview2DDemoComponent = <CTReview2DDemoComponent>(container.getModel('MainComponent'));
        mainComponent.onReveiveConvertResult.emit(point);
        return null;
    }
}

@Component({
    selector: 'app-ctreview2-ddemo',
    templateUrl: './ctreview2-ddemo.component.html',
    styleUrls: ['./ctreview2-ddemo.component.css'],
    providers: [AppCommon.ModelContainer]
})
export class CTReview2DDemoComponent extends AdvAppBaseComponent {
    cellImage: string;
    commonToolAppName: string = "AdvAppStencil";//初始化CommonTools
    @Output() onReveiveConvertResult = new EventEmitter<AppCommon.Point>();

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

    initStudylist() {
        this.studyList.ThumbnailWidth = "50px";
    }
    // tslint:disable-next-line: use-life-cycle-interface
    ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    protected initCells() {
        this.AddCell('Review2d_LeftTop', 'Slice');
        this.AddCell('Review2d_RightTop', 'Slice');
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

        let cellImageInfo = new ViewerKit.CellSliceInfoInitializeItem();
        cellImageInfo.cell = cell0;
        cell0.itemCollection.push(cellImageInfo);

        const imageTexts = new Viewer.ImageTextInitializeItem();
        imageTexts.cell = cell0;
        imageTexts.appName = this.appName;
        cell0.itemCollection.push(imageTexts);

        this.viewerControl.addCell(cell0);
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

    setDefaultLayout() {
        this.setlayout1();
        let cells = this.viewerControl.getCells();
        cells[0].onImageLoaded = () => {
            console.log(`Review2D Log: Received image: ${DateTimeHelper.getTimeString()}`);
            this.cellImage = cells[0].getImage();
        };
    }

    setlayout1(): void {
        const defaultLayout = new Viewer.LayoutCellInfo();
        defaultLayout.rows = 1;
        defaultLayout.colums = 1;
        this.viewerControl.layoutManager.setLayout(defaultLayout);
        //MedViewerCommandHelper.SizeChanged(this.viewerControl);
    }

    protected buildCellCommandOperations(): AppCommon.IFunctionCollection {
        let collection = super.buildCellCommandOperations();
        collection.addFunction(151, ReceiveConvertResultOperation);
        return collection;
    }

    protected buildPanelCommandOperations(): AppCommon.IFunctionCollection {
        let collection = super.buildPanelCommandOperations();
        collection.addFunction('UpdateFELoadingEnd', LoadEndOperation);
        collection.addFunction('UpdateFELoadingStart', LoadSeriesStartOperation);
        collection.addFunction('UpdateFESetLayout', SetLayoutOperation);
        return collection;
    }

    private test_CellName: string = "Review2d_LeftTop";
    private test_InputPoint: AppCommon.Point = new AppCommon.Point(1000, 800);
    private test_ConvertImageToCell: boolean = true;

    test_GetConvertResult(): void {
        this.getConvertResult(this.test_CellName, this.test_InputPoint, this.test_ConvertImageToCell);
    }

    //输入：cellName，操作的窗口，目前为"Review2d_LeftTop"
    //输入：point，待转换的坐标。Cell坐标为距离窗口左上角的像素数；Image坐标为Dicom原始Pixel中的图像坐标
    //输入：convertImageToCell，转换模式。Image坐标转Cell坐标为true
    async getConvertResult(cellName: string, point: AppCommon.Point, convertImageToCell: boolean): Promise<AppCommon.Point3D> {
        let serializedString: string = 300 + "|" + 0 + "|" + "1000" + "|" + (convertImageToCell ? "1" : "0");
        let resultObject = await this.viewerControl.commandSender.syncSendCommonOperation(new TextEncoder().encode(serializedString), "GetConvertResult", cellName);
        let decoder = new TextDecoder();
        let result = decoder.decode(resultObject);
        let infos: string[] = result.split("|");
        return new AppCommon.Point3D(Number(infos[0]), Number(infos[1]), Number(infos[2]));
    }

    isImmediatelyShow: boolean = true;
    onImmediatelyShowChanged(): void {
        this.isImmediatelyShow = !this.isImmediatelyShow;
    }

    inputValue: number = 0;
    onLoadImage(sliceIndex: string): void {
        this.inputValue = Number(sliceIndex);
        this.test_AppendImage();
    }

    // protected onStudyListLoaded(studyDTO: StudyDto): void {
    //   console.log('get study dto succeed');
    //   this.studyDTO = studyDTO;
    //   AppToolkit.CommandHelper.sendString(this.commandSender, '', AppToolkit.CommandHelper.FEInit);
    //   console.log('send start load series end after get study dto');
    // }

    loadImage(cellName: string, imageUID: string, seriesUID: string, isAppend: boolean, isImmediatelyShow: boolean): void {
        let context: string = cellName + "|" +
            imageUID + "|" +
            seriesUID + "|" +
            (isAppend ? "1" : "0") + "|" +
            (isImmediatelyShow ? "1" : "0");
        this.sendLoadImageCommand(this.viewerControl.commandSender, context);
    }

    test_AppendImage(): void {
        let imageIds: string[] = [];
        let currentSeries = this.studyList.studies[0].list[0];
        this.advAppAPIService.dicomClient.getSeriesByUID(currentSeries.seriesInstanceUID).then((seriesDTO: SeriesDto) => {
            seriesDTO.images.forEach((image) => {
                imageIds.push(image.sopInstanceUID);
            });

            this.loadImage("Review2d_LeftTop", imageIds[this.inputValue], currentSeries.seriesInstanceUID, true, this.isImmediatelyShow);
        });
    }

    sendLoadImageCommand(commandSender: AppCommon.ICommandSender, context: string): void {

        const cp = $FrameworkPB.MsgCommonOperate.create();
        cp.workflowName = commandSender.workflowName;

        const loadData = $PB.MsgLoadDataOrCancelAction.create();
        loadData.cancelFlag = false;
        const cd = $PB.MsgCheckDataValidation.create();
        cd.isStudy = 0;
        cd.uids.push(context);

        loadData.content = $PB.MsgCheckDataValidation.encode(cd).finish();
        cp.context = $PB.MsgLoadDataOrCancelAction.encode(loadData).finish();
        const buffer = $FrameworkPB.MsgCommonOperate.encode(cp).finish();

        const LoadData = 10005;
        ViewerKit.CommandHelper.sendProtocolBuffer(commandSender, buffer, LoadData);
    }

    clearCell(cellName: string): void {
        let cell = this.viewerControl.getCell(cellName);
        cell.clearImage();
        this.viewerControl.commandSender.sendCellOperation(new TextEncoder().encode(''), 'clear_cell', cellName);
    }

    currentPlayIndex: number = 1;
    private intervalId: number = 0;
    currentFrameRate: number = 30;
    totalSliceNum: number = 15;

    Play(): void {
        clearInterval(this.intervalId);
        console.log("Review2D Log: Play Begin");
        const cell = this.viewerControl.getCell('Review2d_LeftTop');
        const sliceItem = cell.getCellInitializeItem(CellSliceInfoInitializeItem);
        this.currentPlayIndex = 1;
        this.intervalId = window.setInterval(() => {
            if (this.currentPlayIndex > this.totalSliceNum) {
                this.currentPlayIndex = 1;
                clearInterval(this.intervalId);
                console.log("Review2D Log: Play End");
            } else {
                sliceItem.setCurrentSlice(this.currentPlayIndex);
                this.currentPlayIndex += 1;
            }
        }, 1000 / this.currentFrameRate);
    }

    Stop(): void {
        clearInterval(this.intervalId);
    }

    protected handleDropevent(event: any): void {
        event.preventDefault();
        const seriesUID = event.dataTransfer.getData('seriesUID');
        const cellID = "Review2d_LeftTop";
        ViewerKit.CommandHelper.loadSeries(this.commandSender, seriesUID, cellID);
    }

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
