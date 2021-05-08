import { Component, ViewChild, Injector, Renderer2, ElementRef, HostListener, ChangeDetectorRef, NgZone } from '@angular/core';
import { AdvAppBaseComponent, FilmingMode } from '../adv-app-base/adv-app-base.component';
import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';
import * as AppCommon from 'uih-appcommon';
import { CommandHelper } from 'uih-viewerkit';
import * as HeartOperations from './heart.component.operations';
import * as HeartCells from './heart.component.cellcontrol';
import { CenterLineNameEditControl } from './heart.component.cellcontrol';
import { ActivatedRoute } from '@angular/router';
import { HeartWorkflow } from './heart.component.workflow';
import * as HeartDefinitions from './heart.component.definition';
import * as HeartActions from './heart.component.actions';
import { HeartService } from './service/heart.service'
import { StudyAIAlgDto, SeriesDto } from '../../../root/adv-app.server.api.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarBottomComponent } from './toolbar-bottom/toolbar-bottom.component';
import * as HeartKeyboard from './heart.component.keyboardHandler';
import { ToastService } from './service/toast.service';
import * as CardiacProtoCommon from './CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import * as $PBRoot from 'uih-app-protocol';
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import { IFrameHostComponent, StudyTree, SeriesTree, AngularPerformanceHelper} from 'uih-apptoolkit';
import { ActionVREraser } from './sculpt/ActionVREraser';
import { SectionCellActionInitializeItem, StraightenedCPRCellActionInitializeItem, VRCellActionInitializeItem, MPRCellActionInitializeItem, StretchedCPRCellActionInitializeItem } from './heart.component.actioninitializeitems';
import { EditorComponent } from './editor/editor.component';
import { FilmingVisibleService } from '../filming/filming.component.service';
import { ActionMPRCoronaryGrow } from './mpr-coronary-grow/ActionMPRCoronaryGrow';

@Component({
    selector: 'app-heart',
    templateUrl: './heart.component.html',
    styleUrls: ['./heart.component.css'],
    providers: [AppCommon.ModelContainer]
})
export class HeartComponent extends AdvAppBaseComponent {

    loadCompleteRequestObserver = undefined;

    public isHiddenStudyList: boolean = true;
    public nameList: string[] = [];
    public LoadSeriesInsatnceUID: string;
    public showAiDialog: boolean = false;
    public showTitle: string = '';
    public showContent: string = '';
    public isEditorMode: boolean = false;
    public isLoading: boolean = false;
    canAllPageResponse: boolean = false;
    isHiddenProgress: boolean = false;
    loadPercent: number = 0;
    public isSaving: boolean = false;
    public isCloseShow: boolean = false;
    studyTree: StudyTree;
    isFirstLoad:boolean = false;

    @ViewChild('toolbar', { static: false }) toolbar?: ToolbarComponent;
    @ViewChild('toolbarbottom', { static: false }) toolbarbottom?: ToolbarBottomComponent;
    @ViewChild('editor', { static: false }) editor?: EditorComponent;
    @ViewChild('filmingDiv', { static: false }) filmingDiv?: ElementRef;

    protected stateGetAIAlgList = false;
    protected aiAlgList: StudyAIAlgDto = undefined;
    isFilmingVisible: boolean = false;
    timeOut: number = 1000 * 60 * 30;//超过定义的timeout会超时提示
    interval: any;

    CommandMap: any[] = [
        'defalt',
        '已向PACS发送预存序列 ',
        '发送失败，请联系工程师'
    ];

    @HostListener('click', ['$event']) filmingClick() {
        this.filmingVisibleService.setLastTime(new Date().getTime());
    }

    constructor(protected injector: Injector,
        protected route: ActivatedRoute,
        protected render: Renderer2,
        protected rootElement: ElementRef,
        protected heartService: HeartService,
        protected cd: ChangeDetectorRef,
        protected z: NgZone,
        protected modelContainer: AppCommon.ModelContainer,
        public toastSvc: ToastService,
        public filmingVisibleService: FilmingVisibleService
    ) {
        super(injector, route, render, rootElement, z, cd, modelContainer);
        //this.filmingMode = FilmingMode.NewPage;
    }

    ngOnInit() {
        super.ngOnInit();
        this.appConfigService.getHospitalConfig().then(response => {
            const config = response.json();
            this.heartService.srM.commonM.hospitalName = config.hospitalName;
            this.heartService.srM.commonM.hospitalLogoUrl = config.hospitalLogoUrl;
            this.heartService.srM.commonM.isDefaultPlaque = config.isDefaultPlaque;
        });

        this.loadCompleteRequestObserver = this.loadCompleteRequest.subscribe(cmd => {
            let seriesUid = this.LoadSeriesInsatnceUID;
            if (this.heartService.curSeriesUid != "") {
                seriesUid = this.heartService.curSeriesUid;
            } else {
                this.heartService.curSeriesUid = seriesUid;
            }
            if(!this.isFirstLoad){
                this.isFirstLoad = true;
                this.studyTree.studyInstanceUID = this.studyDTO.studyInstanceUID;
                this.studyTree.patientName = this.studyDTO.patientName;
                this.studyTree.sex = this.studyDTO.sex;
                this.studyTree.birthDate = this.studyDTO.birthDate;
                this.studyTree.studyDate = this.studyDTO.studyDate;
                this.studyTree.list = [];

                this.studyDTO.list.forEach(element => {
                    for(let alg of this.aiAlgList.seriesAlgs){
                        if(alg.seriesInstanceUID == element.seriesInstanceUID){
                            this.advAppAPIService.dicomClient.getThumbnail(element.seriesInstanceUID).then(rst => {
                                let series = new SeriesTree();
                                series.seriesInstanceUID = element.seriesInstanceUID;
                                series.studyInstanceUID = element.studyInstanceUID;
                                series.seriesDescription = element.seriesDescription;
                                series.seriesNumber = element.seriesNumber;
                                series.imageCount = element.seriesCount;
                                series.sliceThickness = element.images[0].imageContent
                                series.seriesThumbnail = ('data:image/jpeg;base64,' + rst);
                                if(series.seriesInstanceUID == this.LoadSeriesInsatnceUID){
                                    series.isLoaded = true;
                                    series.isSelected = true;
                                }
                                this.studyTree.list.push(series);
                            });
                            break;
                        }
                    }
  
                });
            }
            else
            {
                for(let series of this.studyTree.list){
                    if(series.seriesInstanceUID == this.LoadSeriesInsatnceUID){
                        series.isLoaded = true;
                    }
                    else{
                        series.isLoaded = false;
                    }
                }
            }
            
            //AppCommon.Messenger.trigger('seriesLoaded', seriesUid);
            this.advAppAPIService.aiDBSvcClient.updateSegStatus(seriesUid, 'CT_CORONARY', false);
        });

        AppCommon.Messenger.on('UpdateNotify', (obj) => { this.onNotify(obj); });

        AppCommon.Messenger.on('changeAllPageResponseStatus', (canResponse) => { this.changeAllPageResponseStatus(canResponse); });

        this.filmingVisibleService.setLastTime(new Date().getTime());
        //设置定时器，检查是否超时
        this.interval = setInterval(() => {
            let currentTime = new Date().getTime(); //更新当前时间
            //console.log('currentTime:'+currentTime+'  lastTime:'+this.filmingVisibleService.getLastTime()+' isFilmingVisible:'+this.isFilmingVisible);
            if (this.isFilmingVisible && (currentTime - this.filmingVisibleService.getLastTime() > this.timeOut)) {
                this.advAppAPIService.dispatcherClient.setFilmingStatus(this.proxyName, false, this.studyDTO.studyInstanceUID);
                //alert("30分钟未操作，强制中断");
                this.showTitle = 'uAI-CoronaryCTA';
                this.showContent = '30分钟未操作，强制中断';
                this.showAiDialog = true;
                this.isFilmingVisible = false;
                return;
            }
            // if (this.filmingVisibleService.getPrintState().indexOf('true')!=-1) {
            //     this.filmingWinclose();
            //     this.filmingVisibleService.setPrintState(false);
            //     return;
            // }
        }, 1000);
        
        
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.loadCompleteRequestObserver.unsubscribe();
        if (this.interval) {
            clearInterval(this.interval);
        }

    }

    protected startFetchs(): void {
        super.startFetchs();

        this.advAppAPIService.aiDBSvcClient.getAIAlgListByStudyInstanceUID(this.studyInstanceUid,'CT_CORONARY').then((result: StudyAIAlgDto) => {

            if (result) {
                this.aiAlgList = result;
            }
            this.stateGetAIAlgList = true;
        }).catch(e => {
            console.warn(e);
            this.stateGetAIAlgList = true;
        });
    }


    protected canInitialize(): boolean {
        return super.canInitialize() && this.stateGetAIAlgList;
    }

    protected initialize(): void {
        this.studyTree = new StudyTree();
        super.initialize();
        this.viewerControl.isSupportMultipleSelection = false;
        Viewer.ActionFactory.AddAction(Viewer.ActionTypes.Zoom, new HeartActions.HRTActionZoom());
        Viewer.ActionFactory.AddAction(HeartDefinitions.HRTActionType.PageUpDown, new HeartActions.RapidResultsPageUpDownAction());
        Viewer.ActionFactory.AddAction(HeartDefinitions.HRTActionType.Eraser_Remove, new ActionVREraser());
        Viewer.ActionFactory.AddAction(HeartDefinitions.HRTActionType.ActionMPRCoronaryGrow, new ActionMPRCoronaryGrow());
        Viewer.ActionFactory.AddAction(HeartDefinitions.HRTActionType.ActionMPRSectionEmpty, new HeartActions.MPRSectionEmptyAction())
        //this.viewerControl.controlElement.addEventListener("mouseup", (e:any) => this.onMouseup(e), false);
    }

    protected initCells() {
        this.AddCell('A_VR', 'VR', null);
        this.AddCell('Axial', 'MPR', null);
        this.AddCell('Coronal', 'MPR', null);
        this.AddCell('Sagittal', 'MPR', null);
        this.AddCell('Default_Layout_Stretched_CPR_1', 'CPR', null);
        this.AddCell('Default_Layout_Stretched_CPR_2', 'CPR', null);
        this.AddCell('Default_Layout_Stretched_CPR_3', 'CPR', null);
        this.AddCell('Special_Layout_Stretched_CPR_1', 'CPR', null);
        this.AddCell('Special_Layout_Stretched_CPR_2', 'CPR', null);
        this.AddCell('Special_Layout_Stretched_CPR_3', 'CPR', null);
        this.AddCell('Straightened_CPR', 'CPR', 'Straightened');
        this.AddCell('Straightened_CPR_Coronary', 'CPR', 'Straightened');
        this.AddCell('Default_Layout_Section_1', 'MPR', 'Section');
        this.AddCell('Default_Layout_Section_2', 'MPR', 'Section');
        this.AddCell('Default_Layout_Section_3', 'MPR', 'Section');
        this.AddCell('Default_Layout_Section_4', 'MPR', 'Section');
        this.AddCell('Default_Layout_Section_5', 'MPR', 'Section');
        this.AddCell('Default_Layout_Section_6', 'MPR', 'Section');
        this.AddCell('Default_Layout_Section_7', 'MPR', 'Section');
        this.AddCell('Default_Layout_Section_8', 'MPR', 'Section');
        this.AddCell('Default_Layout_Section_9', 'MPR', 'Section');

        this.AddCell('Special_Layout_Section_Left_1', 'MPR', null);
        this.AddCell('Special_Layout_Section_Left_2', 'MPR', null);
        this.AddCell('Special_Layout_Section_Left_3', 'MPR', null);
        this.AddCell('Special_Layout_Section_Left_4', 'MPR', null);
        this.AddCell('Special_Layout_Section_Left_5', 'MPR', null);

        this.AddCell('Special_Layout_Section_Middle_1', 'MPR', null);
        this.AddCell('Special_Layout_Section_Middle_2', 'MPR', null);
        this.AddCell('Special_Layout_Section_Middle_3', 'MPR', null);
        this.AddCell('Special_Layout_Section_Middle_4', 'MPR', null);
        this.AddCell('Special_Layout_Section_Middle_5', 'MPR', null);

        this.AddCell('Special_Layout_Section_Right_1', 'MPR', null);
        this.AddCell('Special_Layout_Section_Right_2', 'MPR', null);
        this.AddCell('Special_Layout_Section_Right_3', 'MPR', null);
        this.AddCell('Special_Layout_Section_Right_4', 'MPR', null);
        this.AddCell('Special_Layout_Section_Right_5', 'MPR', null);

        this.AddCell('Narrow_Layout_Section_1', 'MPR', null);
        this.AddCell('Narrow_Layout_Section_2', 'MPR', null);
        this.AddCell('Narrow_Layout_Section_3', 'MPR', null);
        this.AddCell('Narrow_Layout_Section_4', 'MPR', null);
        this.AddCell('Narrow_Layout_Section_5', 'MPR', null);

        this.AddCell('Narrow_Layout_Curve', 'Result_Curve', null);
        this.AddCell('Narrow_Layout_Table', 'Result_Table', null);
        this.AddCell('Narrow_Layout_Mesh', 'Mesh', null);
        this.AddCell('Rapid_Results_Preview_CPR', 'CPR', null);
        this.AddCell('Rapid_Results_Preview_VR', 'CPR', null);
        this.AddCell('Rapid_Results_Preview_MIP', 'CPR', null);
        this.AddCell('Section_Generate_Straightened_CPR', 'CPR', null);
        this.AddCell('FunctionalTable_MPR', 'Result_Table', null);
        this.AddCell('FunctionalCurve_MPR', 'Result_Curve', null);

        this.AddCell('Functional_VR', 'VR', null);
        this.AddCell('Functional_Axial', 'MPR', null);
        this.AddCell('Functional_Coronal', 'MPR', null);
        this.AddCell('Functional_Sagittal', 'MPR', null);
        this.AddCell('Center_Line_Edit_MPR', 'MPR', null);
    }

    protected buildModels(): Map<string, { new(...args: any[]): AppCommon.AppModelBase }> {
        const modelMap = super.buildModels();
        modelMap.set('WorkflowModel', HeartWorkflow);
        return modelMap;
    }

    private AddCell(name: string, cellType: string, reserved: string) {
        const cell0 = new ViewerKit.AppCell(AngularPerformanceHelper.highPerformanceWrapper, this.isDeviceSlow);
        cell0.cellName = name;
        cell0.cellType = cellType;
        const workflow = this.modelContainer.getModel('WorkflowModel') as ViewerKit.AppWorkflow;
        //this.viewerControl.addCell(cell0);
        workflow.addCell(cell0);

        if (cellType === 'VR') {
            const actionInitializeItem = new VRCellActionInitializeItem();
            cell0.itemCollection.push(actionInitializeItem);
            const crossHairInitializeItem = new ViewerKit.CommonCellCrossHairInitializeItem();
            cell0.itemCollection.push(crossHairInitializeItem);

            const vrRenderParamsSwitchInitializeItem = new HeartCells.VRRenderParamsSwitchControl(this.injector);
            cell0.itemCollection.push(vrRenderParamsSwitchInitializeItem);

            const vrShowOrHideHeartInitializeItem = new HeartCells.VRShowOrHideHeartControl(this.injector);
            cell0.itemCollection.push(vrShowOrHideHeartInitializeItem);

            const centerLineNameEditItem = new CenterLineNameEditControl(this.injector);
            centerLineNameEditItem.cell = cell0;
            cell0.itemCollection.push(centerLineNameEditItem);
        }

        if (cellType === 'MPR') {
            if (HeartCells.HeartCellHelper.IsCellSection(name)) {
                const sectionactionInitializeItem = new SectionCellActionInitializeItem();
                cell0.itemCollection.push(sectionactionInitializeItem);
            } else {
                const actionInitializeItem = new MPRCellActionInitializeItem();
                cell0.itemCollection.push(actionInitializeItem);
            }

            if (name === 'Axial') {
                const mprCPRSwtichInitializeItem = new HeartCells.MPRCPRSwitchControl(this.injector);
                cell0.itemCollection.push(mprCPRSwtichInitializeItem);
                const mprCPRLinkInitializeItem = new HeartCells.MPRCPRLinkControl(this.injector);
                cell0.itemCollection.push(mprCPRLinkInitializeItem);
            }

            if (name == 'Axial' || name == 'Coronal' || name == 'Sagittal') {
                const crossHairInitializeItem = new ViewerKit.MPRCellCrossHairInitializeItem();
                cell0.itemCollection.push(crossHairInitializeItem);
            }
        }

        if (cellType === 'CPR') {
            if (HeartCells.HeartCellHelper.IsCellStraightenedCPR(name)) {
                const actionInitializeItem = new StraightenedCPRCellActionInitializeItem();
                cell0.itemCollection.push(actionInitializeItem);
            } else {
                const actionInitializeItem = new StretchedCPRCellActionInitializeItem();
                cell0.itemCollection.push(actionInitializeItem);
            }
            
        }

        const imageTexts = new Viewer.ImageTextInitializeItem();
        imageTexts.cell = cell0;
        imageTexts.appName = this.appName;
        imageTexts.reserved = reserved;
        cell0.itemCollection.push(imageTexts);

        if (HeartCells.HeartCellHelper.IsCellStraightenedCPR(name) ||
            HeartCells.HeartCellHelper.IsCellSection(name)) {
            cell0.canMaximize = false;
        }
        
    }

    setDefaultLayout(): void {
        this.setLayoutDefault();
        //CommandHelper.sendControllerOperation(this.commandSender, null, 'CardiacSegment');
    }

    setLayoutDefault(): void {
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        workflow.LayoutSwitcher.CurrentLayout = 'defaultLayout';
        console.info('change layout defaultLayout');
    }

    // addResultLayoutInfos(): void {
    //     this.viewerControl.layoutManager.addLayoutInfo('resultLayoutCPR', this.buildLayoutResultCPR());
    //     this.viewerControl.layoutManager.addLayoutInfo('resultLayoutMPR', this.buildLayoutResultMPR());
    // }

    setlayoutResultCPR(): void {
        //this.viewerControl.layoutManager.setCompleteLayout(this.viewerControl.layoutManager.getLayoutInfo('resultLayoutCPR'));
        // todo: 应该使用render2的listen接口来等待UI刷新完毕        //MedViewerCommandHelper.SizeChanged(this.viewerControl);
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        workflow.LayoutSwitcher.CurrentLayout = 'resultLayoutCPR';
        console.info('change layout resultLayoutCPR');

        this.viewerControl.getCells().forEach(cell => {
            if (cell.cellName === 'Default_Layout_Stretched_CPR_2') {
                cell.isSelected = true;
                this.viewerControl.layoutManager.selectedCell(cell, false);
            }
        });
    }

    protected buildPanelCommandOperations(): AppCommon.IFunctionCollection {
        const collection = super.buildPanelCommandOperations();
        collection.addFunction('AllPhaseAutoProcessed', HeartOperations.ProcessEndOperation);
        collection.addFunction('ResetEndProcessed', HeartOperations.ProcessEndResetOperation);
        collection.addFunction('UpdateLoadingResults', HeartOperations.ProcessEndLoadOperation);
        collection.addFunction('UpdateStatusMsg', HeartOperations.ProcessUpdateStatusOperation);
        collection.addFunction('UpdateLoadPercent', HeartOperations.UpdateLoadPercentOperation);
        collection.addFunction('UpdateProgressInfo', HeartOperations.UpdateProgressOperation);
        return collection;
    }

    protected buildCellCommandOperations(): AppCommon.IFunctionCollection {
        const collection = new ViewerKit.CellCommandFunctionCollection();
        collection.addFunction(19, HeartOperations.HRTUpdateGraphicAllInfoCellOperation);
        collection.addFunction(24, HeartOperations.HRTCrossHairCellOperation);
        collection.addFunction(500, HeartOperations.CoronaryListCellOperation);
        collection.addFunction(501, HeartOperations.CenterLineGraphicCellOperation);
        collection.addFunction(504, HeartOperations.UpdateSectionLocationCellOperation);
        collection.addFunction(518, HeartOperations.VRCenterLineGraphicCellOperation);
        collection.addFunction(519, HeartOperations.CPRAngleCellOperation);
        collection.addFunction(521, HeartOperations.UpdateSectionDistanceCellOperation);
        collection.addFunction(523, HeartOperations.ContourCellOperation);
        collection.addFunction(530, HeartOperations.StenosisMarkCellOperation);
        collection.addFunction(531, HeartOperations.UpdateStenosisRangeMarkCellOperation);
        collection.addFunction(532, HeartOperations.UpdateDiameterStenosisInfo);
        collection.addFunction(533, HeartOperations.UpdateHUValueOperation);
        return collection;
    }
    protected StartLoadSeries(): void {

        console.info(`StartLoadSeries ${AppCommon.DateTimeHelper.getTimeString()}`);
        while (!this.stateInit) {
            setTimeout(() => { this.StartLoadSeries(); }, 10);
            return;
        }

        if (this.aiAlgList) {
            const uid = this.aiAlgList.seriesAlgs[0].seriesInstanceUID;
            this.getBestDiastSeriesUID(this.aiAlgList, uid);
            this.isLoading = true;
        } else {
            //super.StartLoadSeries();
        }
    }

    private GetSeriesByUID(seriesUID: string): SeriesDto {
        let res = null;
        for (const series of this.studyDTO.list) {
            if (series.seriesInstanceUID == seriesUID) {
                res = series;
                break;
            }
        }
        return res;
    }
    public getBestDiastSeriesUID(aiAlgList, uid): void {
        console.info(`getBestDiastSeriesUID ${AppCommon.DateTimeHelper.getTimeString()}`);
        if (aiAlgList.seriesAlgs.length === 1) {
            console.info(`before load series ${AppCommon.DateTimeHelper.getTimeString()}`);

            ViewerKit.CommandHelper.loadSeries(this.commandSender, uid);

            console.info(`start load series ${AppCommon.DateTimeHelper.getTimeString()}`);
            this.LoadSeriesInsatnceUID = uid;
        } else {
            let min = 0.75;
            // 从序列列表中取出一个序列
            for (const seriesAlg of this.aiAlgList.seriesAlgs) {
                if (seriesAlg.algList.indexOf('CT_CORONARY') != -1) {
                    let series = this.GetSeriesByUID(seriesAlg.seriesInstanceUID);
                    const phase = this.getSeriesPhase(series);
                    // 没有相位，pass；相位接近0.75，暂定
                    if ((phase !== -1) && (Math.abs(phase - 0.75) < min)) {
                        min = Math.abs(phase - 0.75);
                        uid = seriesAlg.seriesInstanceUID;
                    }
                }
            }
            console.info(`before load series ${AppCommon.DateTimeHelper.getTimeString()}`);
            ViewerKit.CommandHelper.loadSeries(this.commandSender, uid);
            console.info(`start load series ${AppCommon.DateTimeHelper.getTimeString()}`);
            this.LoadSeriesInsatnceUID = uid;
        }
    }

    public getSeriesPhase(series): number {
        console.info(`getSeriesPhase begin ${AppCommon.DateTimeHelper.getTimeString()}`);
        const description = series.seriesDescription;

        // / [1-9]\d*(?=(\s*%)) /
        // / (?<=(Diast|Syst)\s*)(([1-9]\d*)|(0\.\d*)) /      

        try {
            const strNum = description.match(/(Diast|Syst|[A-Za-z]*)\s*((([1-9]\d*)|(0\.\d*))|[1-9]\d*)(?=\s*%)/);
            if (strNum === null) {
                return -1;
            }
            let phase = parseFloat(strNum[2]);
            if (phase > 1) {
                phase /= 100;
            }
            console.info(`getSeriesPhase end ${AppCommon.DateTimeHelper.getTimeString()}`);
            return phase;
        }
        catch (error) {
            console.error(error);
            return -1;
        }
    }

    clickAppArea(e) {
        console.info('click ' + e.target.id);
        
        if(!this.isHiddenStudyList && 
            e.target.id.indexOf('current_operation_btn_hide') == -1 && 
            e.target.id.indexOf('current_operation_btn_hide_img') == -1 && 
            e.target.id.indexOf('study-list') == -1){
                
                this.toolbar.toggleStudyList();
        }
        AppCommon.Messenger.trigger('clickAppAreaEvent', e.target.id);
    }

    protected OnLayoutChanged() {

        setTimeout(() => {
            this.sendLayoutCommand();
            this.viewerControl.setActionType(this.toolbar.currentActionType);
            this.toolbarbottom.checkStateChangedForLayout();
            const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
            console.info('send layout cmd ' + workflow.LayoutSwitcher.CurrentLayout);
        }, 10);

    }

    protected registerInputBinding(): Viewer.KeyBoardHandler[] {
        const handlers: Viewer.KeyBoardHandler[] = [];

        const changeCrossHairCommand = new ViewerKit.ChangeCrossHairCommand();
        changeCrossHairCommand.modelContainer = this.modelContainer;
        handlers.push(changeCrossHairCommand);

        const deleteGraphicCommand = new ViewerKit.DeleteGraphicCommand();
        deleteGraphicCommand.modelContainer = this.modelContainer;
        handlers.push(deleteGraphicCommand);

        const changePerformanceCompareFlagCommand = new HeartKeyboard.ChangePerformanceCompareFlagCommand();
        changePerformanceCompareFlagCommand.modelContainer = this.modelContainer;
        handlers.push(changePerformanceCompareFlagCommand);

        const switchDisplayStatusCommand = new HeartKeyboard.SwitchDisplayStatusCommand();
        switchDisplayStatusCommand.modelContainer = this.modelContainer;
        handlers.push(switchDisplayStatusCommand);

        const switchUsageStatusCommand = new HeartKeyboard.SwitchUsageStatusCommand();
        switchUsageStatusCommand.modelContainer = this.modelContainer;
        handlers.push(switchUsageStatusCommand);

        const switchSelectedCenterline = new HeartKeyboard.SwitchSelectedCenterline();
        switchSelectedCenterline.modelContainer = this.modelContainer;
        handlers.push(switchSelectedCenterline);

        const finishCurrentEdit = new HeartKeyboard.FinishCurrentEdit();
        finishCurrentEdit.modelContainer = this.modelContainer;
        handlers.push(finishCurrentEdit);

        return handlers;
    }

    onNotify(obj: $FrameworkPB.MsgCommonOperate): void {
        const notify = CardiacProto.MessageStatusNotify.decode(obj.context);
        let id = notify.ID;
        let level = notify.level;
        let detail = notify.StatusDetail;

        if (detail.length == 0) {
            detail = this.CommandMap[id];
        }
        if (level == CardiacProto.StatusLevel.StatusInfo) {
            this.toastSvc.info(detail);
        }
        else if (level == CardiacProto.StatusLevel.StatusWarn) {
            this.toastSvc.warning(detail);
        }
        else {
            this.toastSvc.error(detail);
        }

    }

    protected handleDropevent(event: any): void {
        event.preventDefault();
        const seriesUID = event.dataTransfer.getData('seriesUID');
        if (this.isLoading) {
            this.toastSvc.warning('频繁操作');
            return;
        }
        if (seriesUID == this.LoadSeriesInsatnceUID) {
            return;
        }
        let flag = false;
        for (const seriesAlg of this.aiAlgList.seriesAlgs) {
            if (seriesUID == seriesAlg.seriesInstanceUID) {
                if (seriesAlg.algList.indexOf('CT_CORONARY') != -1) {
                    flag = true;
                    break;
                }

            }
        }
        if (flag) {
            this.heartService.curSeriesUid = seriesUID;
            ViewerKit.CommandHelper.loadSeries(this.commandSender, seriesUID);
            this.LoadSeriesInsatnceUID = seriesUID;
            this.heartService.selectedIndex = 0;
            this.isLoading = true;
            this.canAllPageResponse = false;
            this.isHiddenProgress = false;
            this.loadPercent = 0;
            AppCommon.Messenger.trigger('resetSelectedindex');
        }

    }

    protected HandleWarningFromServer(warningInfo: string): void {
        //alert(warningInfo);
        this.showTitle = 'uAI-CoronaryCTA';
        this.showContent = warningInfo;
        this.showAiDialog = true;

    }

    cancel(): void {
        this.showAiDialog = false;
        window.location.href = 'about:blank';
        window.close();
    }

    async onOpenFilming() {
        this.filmingMode = FilmingMode.NewWindow;
        //this.filmingVisibleService.setPrintState(false);
        //打开一uid进入filming，会提示当前uid有用户在操作，但是执行windows.close(),会把当前的wnd的filming也给关闭 todo
        await this.calculateFilmingUrl();
        this.initFilmingWindow();
        this.isFilmingVisible = true;
        //保证显示器横屏和竖屏的时候都有一个合适大小的界面
        const cheight = 818;//cdic提供的样式
        const cwidth = 973;
        let height = cheight;
        let width = cwidth;
        if (height > window.innerHeight) {
            height = window.innerHeight;
            width = cwidth / cheight * height;
        }
        (<IFrameHostComponent>this.filmingHost.instance).height = height;
        (<IFrameHostComponent>this.filmingHost.instance).width = width;
        //居中设置
        this.filmingDiv.nativeElement.style.top = '50%';
        this.filmingDiv.nativeElement.style.left = '50%';
        this.filmingDiv.nativeElement.style.marginTop = -Math.floor(height / 2) + 'px';
        this.filmingDiv.nativeElement.style.marginLeft = -Math.floor(width / 2) + 'px';
        setTimeout(() => { this.isCloseShow = true; }, 1000);
    }

    filmingWinclose() {
        this.advAppAPIService.dispatcherClient.setFilmingStatus(this.proxyName, false, this.studyDTO.studyInstanceUID);
        this.isFilmingVisible = false;
        //this.finalize();//销毁对象
        (<IFrameHostComponent>this.filmingHost.instance).url = null;
        this.isCloseShow = false;
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    protected addCommonEventListener() {
        super.addCommonEventListener();
        this.addHUValueEventListener(this.viewerControl);
    }

    addHUValueEventListener(viewerControl: Viewer.MedViewerControl): void {
        AngularPerformanceHelper.highPerformanceWrapper(() =>{
            viewerControl.controlElement.addEventListener('mousemove', (e: any) => this.huValueMouseMoveEvent(e, viewerControl), true);
            viewerControl.controlElement.addEventListener('mouseleave', (e: any) => this.huValueMouseLeaveEvent(e, viewerControl), true);
        });
    }

    private isMeasuringHU: boolean = false;

    huValueMouseMoveEvent(e: any, viewerControl: Viewer.MedViewerControl): void {

        let currentCell = viewerControl.getCell((<any>event.target).id);
        if (currentCell) {
            if (currentCell.cellType === 'VR') {
                if (this.isMeasuringHU) {
                    this.notifyMouseLeave(viewerControl);
                }
            }
            else {
                let ptX = e.offsetX === undefined ? e.layerX : e.offsetX;
                let ptY = e.offsetY === undefined ? e.layerY : e.offsetY;

                const pt = new AppCommon.Point(ptX, ptY);
                this.notifyChangeMousePosition(currentCell, pt);
            }
        }
    }

    huValueMouseLeaveEvent(e: any, viewerControl: Viewer.MedViewerControl): void {
        if (this.isMeasuringHU) {
            this.notifyMouseLeave(viewerControl);
        }
    }

    notifyChangeMousePosition(cell: Viewer.MedViewerControlCell, point: AppCommon.Point) {
        const params = $PB.MsgDoublePoint.create();
        params.x = point.x;
        params.y = point.y;
        const buffer = $PB.MsgDoublePoint.encode(params).finish();
        cell.viewerControl.commandSender.sendCellOperation(buffer, 'ChangeMousePosition', cell.cellName);
        this.isMeasuringHU = true;
    }

    notifyMouseLeave(viewerControl: Viewer.MedViewerControl): void {
        CommandHelper.sendPanelOperation(viewerControl.commandSender, null, 'MouseLeaveMedViewerControl');
        this.isMeasuringHU = false;
    }

    changeAllPageResponseStatus(canResponse: boolean): void {
        this.canAllPageResponse = canResponse;
    }

    public generateNewSeries(folder: string, seriesStatus:string) : SeriesDto{
        const dt = new Date;
        let y = dt.getFullYear().toString();
        let m = dt.getMonth().toString();
        let d = dt.getDate().toString();
        let h = dt.getHours().toString();
        let mm = dt.getMinutes().toString();
        let s = dt.getSeconds().toString();
        let ms = dt.getMilliseconds().toString();
        let seriesinstanceuid = this.LoadSeriesInsatnceUID + y + m + d + h + mm + s + ms;
        if (seriesinstanceuid.length > 64) {
            seriesinstanceuid = seriesinstanceuid.substring(seriesinstanceuid.length - 64, seriesinstanceuid.length);
        }

        let i1 = folder.lastIndexOf('/');
        if (i1 >= 0) {
            folder = folder.substring(0, i1);
            folder = folder + '/' + seriesinstanceuid;
        }

        let studyUID = this.studyDTO.studyInstanceUID;
        let dto = new SeriesDto();
        dto.seriesInstanceUID = seriesinstanceuid;
        dto.studyInstanceUID = studyUID;
        dto.seriesThumbnail = folder;
        dto.seriesNumber = 8001;
        dto.seriesStatus = seriesStatus;
        return dto;
    }

    protected OnSizeChanged(event) {
        setTimeout(() => {
            this.sendLayoutCommand();
            AppCommon.Messenger.trigger('Resized');
        }, 100);
    }
    onMouseup(e: MouseEvent) {
        
        let currentCell = this.viewerControl.getCell((<any>event.target).id);
        if (currentCell) {
            if (currentCell.cellType === 'CPR') {
                const buffer1 = new TextEncoder().encode('');
                ViewerKit.CommandHelper.sendPanelOperation(this.commandSender, buffer1, 'ForceUpdateAllNonimage');
            }
        }
    }

    public deAttachLayoutChange() {
        AppCommon.Messenger.off('layoutchanged', () => { this.OnLayoutChanged(); });
    }

    public reAttachLayoutChange() {
        ViewerKit.CommandHelper.sizeChanged(this.commandSender, this.viewerControl);
        AppCommon.Messenger.on('layoutchanged', () => { this.OnLayoutChanged(); });
    }
}
