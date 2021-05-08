import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, Injector, ViewRef, Output, EventEmitter } from '@angular/core';
import * as Viewer from 'uih-medviewercontrol';
import { ModelContainer, GUIDHelper } from 'uih-appcommon';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import { CommandHelper, SaveFilmingHelper, AppCell } from 'uih-viewerkit';
import { HeartComponent } from '../heart.component';
import { isNullOrUndefined } from 'util';
import { FindingCtCoronaryDto, CoronaryCenterLineDto, CenterlinePoint, SeriesDto } from 'uih-app-serverapi';
import * as AppCommon from 'uih-appcommon';
import * as Enum from '../heart.component.enumConverter';
import { RapidResultsComponent } from '../rapid-results/rapid-results.component';
import * as HeartGraphics from '../heart.component.graphics';
import { HeartWorkflow } from '../heart.component.workflow';
import { HRTCellNames } from '../heart.component.definition';
import { GraphicSectionPositionMark } from '../section/GraphicSectionPositionMark';
import { ToastService } from '../service/toast.service';
import { GraphicAnnotationLine } from 'uih-medviewercontrol';
import { HelpComponent } from '../help/help.component';
import { GraphicCenterLine, GraphicPreView } from '../heart.component.graphics';
import { HeartService } from '../service/heart.service';
import { ResultTableComponent } from '../result-table/result-table.component';
import * as Dicom from 'uih-dataheader';
import { GraphicStenosisRangeMark } from '../stenosis-mark/graphic-stenosis-range-mark';
import { CoronaryFeaturesModel } from '../heart.component.findingModel';
@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @ViewChild('batcharea', { read: ViewContainerRef, static: false }) batcharea: ViewContainerRef;
    @Output() openFilming = new EventEmitter();
    selectedBtn: string = 'pointer';
    currentActionType: Viewer.ActionTypes = Viewer.ActionTypes.Pointer;

    public showDialog: boolean = false;
    public showMessages: boolean = false;
    public showResetAiDialog: boolean = false;
    public showInformation: boolean = false;
    public isAutoRotateVREnable: boolean = false;
    public isHiddenStudyList: boolean = false;

    public isEditorMode: boolean = false;
    public ShowStartEdit: boolean = false;
    public showContent: string;
    public isShowUsage: boolean = false;
    public isVisibleBatch: boolean = false;

    public windowingPreSrc: string = '';
    public currentWwwlName: string = '默认';
    public airesetSrc: string = '';

    public windowLevelWidthList: any[] = [
        { name: '默认', windowLevel: 300, windowWidth: 800, src: 'assets/images/windowing_pre_腹.png' },
        { name: '肺窗', windowLevel: -400, windowWidth: 1500, src: 'assets/images/windowing_pre_肺.png' },
        { name: '纵膈窗', windowLevel: 40, windowWidth: 350, src: 'assets/images/windowing_pre_膈.png' },
        { name: '骨窗', windowLevel: 800, windowWidth: 2600, src: 'assets/images/windowing_pre_骨.png' },
        { name: 'ISR窗', windowLevel: 900, windowWidth: 2500, src: 'assets/images/windowing_pre_骨.png' }
    ];

    constructor(protected modelContainer: ModelContainer,
        protected componentFactoryResolver: ComponentFactoryResolver,
        protected injector: Injector,
        protected toastSvc: ToastService,
        protected heartSvc: HeartService) {
        AppCommon.Messenger.on('actionDone', roiType => { this.onActionDown(roiType); });
        AppCommon.Messenger.on('clickAppAreaEvent', eleId => { this.handleAppAreaClickEvent(eleId); });
        AppCommon.Messenger.on('hasModified', isModified => {
            let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            if (isModified)
                this.airesetSrc = 'assets/images/ai_edit.svg';
            else
                this.airesetSrc = 'assets/images/icon_light_re_ai_result.svg';
            let modifyValue = 0;
            if (isModified) {
                modifyValue = 1;
            }

            const result = this.modelContainer.getModel('ResultTable') as ResultTableComponent;
            // reset will update db use another function
            if(result.coronaryFeatureItem.modified != modifyValue && isModified) {
                result.coronaryFeatureItem.modified = modifyValue;
                component.advAppAPIService.aiDBSvcClient.saveCoronaryFeature(result.coronaryFeatureItem.toDto()).then(rst => { });
            }
        });
    }

    ngOnInit() {
        this.windowingPreSrc = 'assets/images/icon_light_windowing_pre.svg';
        this.airesetSrc = 'assets/images/icon_light_re_ai_result.svg'
    }

    onActionDown(roiType) {
        // 绘制直线结束后自动跳回选择键
        if (roiType === 'roi_line') {
            this.pointer();
        }
    }

    /**
     * 显示确认退出应用弹窗
     */
    showExitDialog(): void {
        this.showDialog = true;
    }

    /**
     * 显示软件信息
     */
    showInfo(): void {
        this.showInformation = true;
    }

    /**
     * 退出软件信息
     */
    closeInfo(): void {
        this.showInformation = false;
    }

    /**
     * 显示使用信息
     */
    showUsage(): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HelpComponent);
        this.batcharea.clear();
        const componentRef = this.batcharea.createComponent(componentFactory);
        componentRef.instance.isShowUsage = true;
        componentRef.instance.batchViewContainer = this.batcharea;
        this.isShowUsage = true;
    }

    /**
     * 切换使用信息状态
     */
    switchUsage(): void {
        this.isShowUsage = !this.isShowUsage;
        this.batcharea.clear();
        if (this.isShowUsage) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HelpComponent);
            const componentRef = this.batcharea.createComponent(componentFactory);
            componentRef.instance.isShowUsage = !componentRef.instance.isShowUsage;
            componentRef.instance.batchViewContainer = this.batcharea;
        }
    }

    /**
     * 执行退出应用操作，关闭tab
     */
    doExit(): void {
        this.showDialog = false;
        window.location.href = 'about:blank';
        window.close();
    }

    /**
     * 取消退出应用操作，关闭弹框
     */
    cancelExit(): void {
        this.showDialog = false;
    }

    /**
     * 显示提示弹窗
     */
    showPrompt(): void {
        this.showMessages = true;
    }

    /**
     * 单机关闭提示弹窗
     */
    closePrompt(): void {
        this.showMessages = false;
    }

    /**
     * 重置AI提示弹窗
     */
    showResetDialog(): void {
        this.showResetAiDialog = true;
    }

    cancelResetAi(): void {
        this.showResetAiDialog = false;
    }

    doResetAi(): void {
        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        const seriesUID = component.LoadSeriesInsatnceUID;
        component.advAppAPIService.aiDBSvcClient.resetCoronaryFeature(seriesUID);
        const result = this.modelContainer.getModel('ResultTable') as ResultTableComponent;
        result.cancelSelectItem();
        result.ScoreCADRADS = '';
        component.viewerControl.getCells().forEach(cell => {
            for (let graphic of cell.displayData.graphics) {
                if (graphic instanceof GraphicAnnotationLine) {
                    cell.displayData.removeGraphic(graphic);
                } else if (graphic instanceof GraphicStenosisRangeMark) {
                    cell.displayData.removeGraphic(graphic);
                }
            }
            cell.displayData.refreshGraphics();
        });

        //this.heartSvc.isFirstLoad = true;
        const buffer1 = new TextEncoder().encode('');
        CommandHelper.sendPanelOperation(component.commandSender, buffer1, 'Reset');

        this.showResetAiDialog = false;
        AppCommon.Messenger.trigger('resetSelectedindex');
        AppCommon.Messenger.trigger('hasModified', false);
    }

    /**
     * 显示/隐藏Study List
     */
    toggleStudyList(): void {
        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        component.isHiddenStudyList = !component.isHiddenStudyList;
        this.isHiddenStudyList = !this.isHiddenStudyList;
    }

    startEdit(): void {
        if (this.isEditorMode) {
            let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            //component.editor.isShowExitEditor = true;
            component.editor.doExitEditor();
        } else {
            this.ShowStartEdit = true;
        }
    }

    doStartEdit(): void {
        AppCommon.Messenger.trigger('notifyEditState', true)
        this.ShowStartEdit = false;
        const result = this.modelContainer.getModel('ResultTable') as ResultTableComponent;
        result.setDisable(true);
        this.toggleEditor();
    }

    cancelStartEdit(): void {
        this.ShowStartEdit = false;
    }

    toggleEditor(): void {
        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        let proxyname = component.proxyName;
        component.advAppAPIService.dispatcherClient.setEditStatus(proxyname, true, component.studyDTO.studyInstanceUID).then(rst => {
            if (rst === true) {
                this.isEditorMode = !this.isEditorMode;

                component.isEditorMode = this.isEditorMode;

                component.advAppAPIService.aiDBSvcClient.deleteManualCoronaryFindings(component.LoadSeriesInsatnceUID).then(r => {
                    AppCommon.Messenger.trigger('seriesLoaded', component.LoadSeriesInsatnceUID);
                    let operation = CardiacProto.MessageStenosisListOperationParams.create();
                    operation.OperationType = CardiacProto.ListOperationType.ListOperationType_Delete;
                    let buffer = CardiacProto.MessageStenosisListOperationParams.encode(operation).finish();
                    CommandHelper.sendPanelOperation(component.commandSender, buffer, 'StenosisListOperation');

                });
                // notify BE start edit
                let buffer = new TextEncoder().encode('1');
                CommandHelper.sendPanelOperation(component.commandSender, buffer, 'EditState');
            } else {
                this.showContent = '他人正在编辑该病例，您暂时无法使用。';
                this.showMessages = true;
            }
        });
    }

    public showOrHideMenu($event) {
        var ele = $event.target.parentElement.lastElementChild;
        const isMenuShow = ele.classList.contains('open');
        if (!isMenuShow) {
            ele.classList.add('open');
        } else {
            ele.classList.remove('open');
        }
    }

    public closeMenu() {
        let ele = document.getElementById('current_wwwl_btn_menu');
        ele.classList.remove('open');
        //ele = document.getElementById('current_operation_btn_menu');
        //ele.classList.remove('open');
    }

    /**
     * 标记狭窄
     */
    addSenosis(): void {
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;

        const finding = new FindingCtCoronaryDto();
        finding.findingType = Enum.FindingTypeEnum.stenosis;
        finding.seriesInstanceUID = component.LoadSeriesInsatnceUID;

        finding.userID = 'user';
        finding.findingUID = GUIDHelper.NewGUID();

        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;

        let slideindex = 0;
        let cprCell = viewerControl.getCell('Straightened_CPR_Coronary');
        if (viewerControl.layoutManager.isMaxmized) {
            let cells = viewerControl.layoutManager.getSelectedCells();
            if (cells != null && cells.length > 0 && cells[0].cellType === 'CPR') {
                cprCell = cells[0];
            }
        }

        const graphic = cprCell.displayData.graphics.find(g => {
            if (!(g instanceof GraphicSectionPositionMark)) {
                return false;
            } else {
                return true;
            }
        }) as GraphicSectionPositionMark;
        slideindex = graphic.calCurrenSliderIndex();
        let currentIndex = slideindex;
        let far = currentIndex + 3;

        let index = this.heartSvc.selectedIndex

        let existFindingItem = false;
        component.advAppAPIService.aiDBSvcClient.getCoronaryCenterline(finding.seriesInstanceUID, index).then(rst => {
            if (!isNullOrUndefined(rst)) {
                const centerline = rst as CoronaryCenterLineDto;

                if (far >= centerline.pointList.length) {
                    far = centerline.pointList.length - 1;
                }

                finding.coronaryIndex = centerline.lable;
                let link = centerline.comboCenterline;
                if (link && link.centerline_link) {
                    link.centerline_link.forEach(item => {
                        if (slideindex >= item.first_point_index && slideindex <= item.last_point_index) {
                            finding.coronaryIndex = item.label;
                            currentIndex = slideindex - item.first_point_index;
                            far = currentIndex + 3;
                            if (far > item.last_point_index) {
                                far = item.last_point_index;
                            }
                        }
                    });
                }

                //finding.extend0 = centerline.name;
                const point = centerline.pointList[slideindex] as CenterlinePoint;

                let near = currentIndex - 3;
                if (near < 0) {
                    near = 0;
                }

                let len = far - near;
                const result = this.modelContainer.getModel('ResultTable') as ResultTableComponent;
                let existFindingItem = false;
                result.stenosisItems.forEach(item => {
                    if ((Math.abs(item.centerPointX - point.world_coordinate.x) < 1e-6) &&
                        (Math.abs(item.centerPointY - point.world_coordinate.y) < 1e-6) &&
                        (Math.abs(item.centerPointZ - point.world_coordinate.z) < 1e-6)) {
                        existFindingItem = true;
                    }

                });
                if (!existFindingItem) {
                    finding.centerPointX = point.world_coordinate.x;
                    finding.centerPointY = point.world_coordinate.y;
                    finding.centerPointZ = point.world_coordinate.z;
                    finding.narrow_length = far - near;
                    finding.extend1 = currentIndex.toString() + ";" + near.toString() + ";" + far.toString();

                    result.selectedStenosisUID = finding.findingUID;

                    const params = CardiacProto.MessageStenosisListOperationParams.create();
                    params.OperationType = CardiacProto.ListOperationType.ListOperationType_Add;
                    params.UID = finding.findingUID;
                    const buffer = CardiacProto.MessageStenosisListOperationParams.encode(params).finish();
                    CommandHelper.sendPanelOperation(component.commandSender, buffer, 'StenosisListOperation');

                    component.advAppAPIService.aiDBSvcClient.insertCoronaryFinding(finding).then(rst2 => {
                        result.cancelSelectItem();
                        AppCommon.Messenger.trigger('refreshFindings', 'senosis');

                        const operation = CardiacProto.MessageStenosisListOperationParams.create();
                        operation.OperationType = CardiacProto.ListOperationType.ListOperationType_Rename;
                        operation.NewName = 'changeDegree';
                        const buffer = CardiacProto.MessageStenosisListOperationParams.encode(operation).finish();
                        CommandHelper.sendPanelOperation(component.commandSender, buffer, 'StenosisListOperation');
                    });
                    component.advAppAPIService.userOperationClient.saveUserOperation('admin',
                        component.studyDTO.studyInstanceUID, Enum.userOperationType.addstenosis, component.appName);
                }
            }
        });
        AppCommon.Messenger.trigger('hasModified', true);
    }

    /**
     * 标记支架/心肌桥
     */
    addStent(): void {
        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        let finding = new FindingCtCoronaryDto();
        finding.findingType = Enum.FindingTypeEnum.stent;
        finding.is_stent_present = 2;
        finding.seriesInstanceUID = component.LoadSeriesInsatnceUID;

        finding.userID = 'user';
        finding.findingUID = GUIDHelper.NewGUID();

        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;

        let slideindex = 0;
        let cprCell = viewerControl.getCell('Straightened_CPR_Coronary');
        if (viewerControl.layoutManager.isMaxmized) {
            let cells = viewerControl.layoutManager.getSelectedCells();
            if (cells != null && cells.length > 0 && cells[0].cellType === 'CPR') {
                cprCell = cells[0];
            }
        }
        let graphic = cprCell.displayData.graphics.find(g => {
            if (!(g instanceof GraphicSectionPositionMark)) {
                return false;
            }
            else {
                return true;
            }
        }) as GraphicSectionPositionMark;
        slideindex = graphic.calCurrenSliderIndex();
        let currentIndex = slideindex;

        let index = this.heartSvc.selectedIndex
        component.advAppAPIService.aiDBSvcClient.getCoronaryCenterline(finding.seriesInstanceUID, index).then(rst => {
            if (!isNullOrUndefined(rst)) {
                let centerline = rst as CoronaryCenterLineDto;
                finding.coronaryIndex = centerline.lable;
                let link = centerline.comboCenterline;
                if (link && link.centerline_link) {
                    link.centerline_link.forEach(item => {
                        if (slideindex >= item.first_point_index && slideindex <= item.last_point_index) {
                            finding.coronaryIndex = item.label;
                            currentIndex = slideindex - item.first_point_index;
                        }
                    });
                }

                //finding.extend0 = centerline.name;
                let point = centerline.pointList[parseInt(slideindex.toString(), 10)] as CenterlinePoint;
                finding.centerPointX = point.world_coordinate.x;
                finding.centerPointY = point.world_coordinate.y;
                finding.centerPointZ = point.world_coordinate.z;
                finding.extend1 = currentIndex.toString();

                const result = this.modelContainer.getModel('ResultTable') as ResultTableComponent;
                let existFindingItem = false;
                result.stentItems.forEach(item => {
                    if ((Math.abs(item.centerPointX - point.world_coordinate.x) < 1e-6) &&
                        (Math.abs(item.centerPointY - point.world_coordinate.y) < 1e-6) &&
                        (Math.abs(item.centerPointZ - point.world_coordinate.z) < 1e-6)) {
                        existFindingItem = true;
                    }

                });
                if (!existFindingItem) {
                    result.selectedStentUID = finding.findingUID;

                    const params = CardiacProto.MessageStenosisListOperationParams.create();
                    params.OperationType = CardiacProto.ListOperationType.ListOperationType_Add;
                    params.UID = finding.findingUID;
                    const buffer = CardiacProto.MessageStenosisListOperationParams.encode(params).finish();
                    CommandHelper.sendPanelOperation(component.commandSender, buffer, 'StentListOperation');

                    component.advAppAPIService.aiDBSvcClient.insertCoronaryFinding(finding).then(rst => {
                        result.cancelSelectItem();
                        AppCommon.Messenger.trigger('refreshFindings', 'stent');

                        let operation = CardiacProto.MessageStenosisListOperationParams.create();
                        operation.OperationType = CardiacProto.ListOperationType.ListOperationType_Rename;
                        operation.NewName = "changeDegree";
                        let buffer = CardiacProto.MessageStenosisListOperationParams.encode(operation).finish();
                        CommandHelper.sendPanelOperation(component.commandSender, buffer, 'StentListOperation');
                    });
                }

            }
        });
        component.advAppAPIService.userOperationClient.saveUserOperation('admin',
            component.studyDTO.studyInstanceUID, Enum.userOperationType.addstent, component.appName);
        AppCommon.Messenger.trigger('hasModified', true);
    }

    pointer(): void {
        this.selectedBtn = 'pointer';
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        viewerControl.setActionType(Viewer.ActionTypes.Pointer);
        this.currentActionType = Viewer.ActionTypes.Pointer;
    }

    zoom(): void {
        this.selectedBtn = 'zoom';
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        viewerControl.setActionType(Viewer.ActionTypes.Zoom);
        this.currentActionType = Viewer.ActionTypes.Zoom;
    }

    pan(): void {
        this.selectedBtn = 'pan';
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        viewerControl.setActionType(Viewer.ActionTypes.Pan);
        this.currentActionType = Viewer.ActionTypes.Pan;
    }

    fitWindowing(): void {
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        const selectedCells = viewerControl.layoutManager.getSelectedCells();
        if (isNullOrUndefined(selectedCells) || selectedCells.length == 0) return;
        const cell = selectedCells[0];
        const buffer1 = new TextEncoder().encode('');
        Viewer.MedViewerCommandHelper.sendCellOperation(cell.viewerControl.commandSender, buffer1, 'fit_window', cell.cellName);
    }

    updateWLWW(name: string, windowLevel: number, windowWidth: number, imgsrc: string): void {
        this.windowingPreSrc = imgsrc;
        this.closeMenu();
        this.currentWwwlName = name;
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        viewerControl.getCells().forEach(el => {
            if (el.cellType != 'VR') {
                viewerControl.commandSender.sendUpdateWLWW(windowLevel, windowWidth, el.cellName);
            }
        });
    }

    resetWindowing(): void {
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        viewerControl.getCells().forEach(el => {
            //if (el.cellType != 'VR') {
            viewerControl.commandSender.sendUpdateWLWW(300, 800, el.cellName, 'Default');
            //}
        });
    }

    drawline(): void {
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        viewerControl.setActionType(Viewer.ActionTypes.AnnotationLine);
        this.selectedBtn = 'annotationLine';
        this.currentActionType = Viewer.ActionTypes.AnnotationLine;
    }

    drawArea(): void {
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        viewerControl.setActionType(Viewer.ActionTypes.RegionRectangle);
        this.selectedBtn = 'regionRectangle';
        this.currentActionType = Viewer.ActionTypes.RegionRectangle;
    }

    printPreview(): void {
        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        component.deAttachLayoutChange();
        
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RapidResultsComponent);
        this.batcharea.clear();
        const componentRef = this.batcharea.createComponent(componentFactory);
        componentRef.instance.isVisibleBatch = true;
        this.isVisibleBatch = componentRef.instance.isVisibleBatch;
        componentRef.instance.batchViewContainer = this.batcharea;
        componentRef.instance.openFilming.subscribe(() => { this.openFilming.emit(); });
    }

    saveImage(): void {
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        const selectedCells = viewerControl.layoutManager.getSelectedCells();
        if (isNullOrUndefined(selectedCells) || selectedCells.length == 0) return;
        const selectedCell = selectedCells[0];
        let v2 = selectedCell.displayData.ruler.isVisible;
        selectedCell.displayData.imageText.isVisible = false;
        //selectedCell.displayData.imageText.refresh();
        selectedCell.displayData.ruler.isVisible = false;
        //selectedCell.displayData.ruler.refresh();
        let s = undefined;
        if (selectedCell.cellType === 'CPR' && this.heartSvc.selectedIndex >= 0) {
            s =  this.heartSvc.currentCenterLineName();;
            const imageText = selectedCell.displayData.getOrAddGraphic(GraphicPreView);
            imageText.isVisible = true;
            imageText.canSelect = false;
            imageText.text = s;
            if (selectedCell.canvas.width > 800) {
                imageText.property.textFontSize = 36;
            } else if (selectedCell.canvas.width > 300) {
                imageText.property.textFontSize = 28;
            }
            imageText.renderPoints[0] = new AppCommon.Point(selectedCell.canvas.width / 2 - 30, selectedCell.canvas.height - 25);
        }



        for (const graphic of selectedCell.displayData.graphics) {
            if (graphic instanceof GraphicCenterLine) {
                graphic.isVisible = false;
            }
            if (graphic instanceof GraphicSectionPositionMark) {
                graphic.isVisible = false;
            }
        }

        selectedCell.drawImage();

        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        let toolbarbottom = component.toolbarbottom;

        component.advAppAPIService.userOperationClient.saveUserOperation('admin',
            component.studyDTO.studyInstanceUID, Enum.userOperationType.savePics, component.appName);

        component.advAppAPIService.aiDBSvcClient.getStudyAll(component.studyDTO.studyInstanceUID).then(studyDto => {
            let maxSeriesInstanceNumber = 0;
            let maxSeriesUID = '';
            let folder = '';
            let uAIMSeriesList = [];
            studyDto.list.forEach(series => {
                const tmpInstanceNumber = series.seriesNumber;
                const tmpSeriesUID = series.seriesInstanceUID;
                
                if (tmpInstanceNumber >= 8000) {
                    let seriestatus = series.seriesStatus;
                    if ((seriestatus === 'uAIM' || seriestatus === 'uAIMCopy') && series.seriesThumbnail.includes(':')) {
                        uAIMSeriesList.push(tmpSeriesUID);
                        maxSeriesInstanceNumber = tmpInstanceNumber;
                        maxSeriesUID = tmpSeriesUID;
                        if(seriestatus === 'uAIMCopy') {
                            component.advAppAPIService.aiDBSvcClient.updateSeriesStatus(maxSeriesUID,'uAIM');
                        }
                    }
                }

                if (tmpSeriesUID == component.LoadSeriesInsatnceUID) {
                    folder = series.seriesThumbnail;
                    let i = folder.lastIndexOf('/');
                    if (i >= 0) {
                        folder = folder.substring(0, i);
                    }
                }
            });

            if(uAIMSeriesList.length > 1) {
                for(let i = 0 ; i < uAIMSeriesList.length - 1; i++) {
                    component.advAppAPIService.aiDBSvcClient.updateSeriesStatus(uAIMSeriesList[i],'noUse');
                }
            }

            component.isSaving = true;

            let element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.InstanceNumber);
            if (!element.SetString(0, '500')) {
                throw new Error('Failed to Insert SOPClassUID to Data header');
            }
            selectedCell.displayData.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.InstanceNumber);
            selectedCell.displayData.DataHeader.AddDicomAttribute(element);

            if (maxSeriesUID && maxSeriesInstanceNumber >= 8000) {
                SaveFilmingHelper.saveCellAutoMatically(viewerControl.commandSender, selectedCell, context => {
                    context.KeepSameSeries = true;
                    context.SeriesUID = maxSeriesUID;
                });

                selectedCell.displayData.ruler.isVisible = v2;

                selectedCell.displayData.imageText.isVisible = toolbarbottom.checkOptionsOne[0].checked;
                for (const graphic of selectedCell.displayData.graphics) {
                    if (graphic instanceof GraphicCenterLine) {
                        graphic.isVisible = toolbarbottom.checkOptionsOne[2].checked;
                    }
                    if (graphic instanceof GraphicSectionPositionMark) {
                        graphic.isVisible = toolbarbottom.checkOptionsOne[3].checked;
                    }
                }
                if (s != undefined) {
                    const imageText = selectedCell.displayData.getOrAddGraphic(GraphicPreView);
                    imageText.isVisible = false;
                }
                selectedCell.drawImage();
            } else {
                let dto = component.generateNewSeries(folder, 'uAIM');
                component.advAppAPIService.aiDBSvcClient.saveSeries(dto).then(result => {
                    if (result) {
                        SaveFilmingHelper.saveCellAutoMatically(viewerControl.commandSender, selectedCell, context => {
                            context.KeepSameSeries = true;
                            context.SeriesUID = dto.seriesInstanceUID;
                        });

                    }
                    selectedCell.displayData.ruler.isVisible = v2;

                    selectedCell.displayData.imageText.isVisible = toolbarbottom.checkOptionsOne[0].checked;
                    for (const graphic of selectedCell.displayData.graphics) {
                        if (graphic instanceof GraphicCenterLine) {
                            graphic.isVisible = toolbarbottom.checkOptionsOne[2].checked;
                        }
                        if (graphic instanceof GraphicSectionPositionMark) {
                            graphic.isVisible = toolbarbottom.checkOptionsOne[3].checked;
                        }
                    }
                    if (s != undefined) {
                        const imageText = selectedCell.displayData.getOrAddGraphic(GraphicPreView);
                        imageText.isVisible = false;
                    }
                    selectedCell.drawImage();
                });
                //SaveFilmingHelper.saveCellAutoMatically(viewerControl.commandSender, selectedCell);
            }



        }).catch(err => {
            SaveFilmingHelper.saveCellAutoMatically(viewerControl.commandSender, selectedCell);
        });
    }

    handleAppAreaClickEvent(eleId: string): void {
        /*
        if (eleId.indexOf('current_operation_btn') == -1 && eleId.indexOf('current_wwwl_btn') == -1) {
            let ele = document.getElementById('current_operation_btn_menu');
            ele.classList.remove('open');
            ele = document.getElementById('current_wwwl_btn_menu');
            ele.classList.remove('open');
        } else if (eleId.indexOf('current_operation_btn') != -1 && eleId.indexOf('current_wwwl_btn') == -1) {
            let ele = document.getElementById('current_wwwl_btn_menu');
            ele.classList.remove('open');
        } else if (eleId.indexOf('current_operation_btn') == -1 && eleId.indexOf('current_wwwl_btn') != -1) {
            let ele = document.getElementById('current_operation_btn_menu');
            ele.classList.remove('open');
        }
        */
        if (eleId.indexOf('current_wwwl_btn') == -1) {
            let ele = document.getElementById('current_wwwl_btn_menu');
            ele.classList.remove('open');
        }
    }

    private _autoRotateStart: AppCommon.Point = undefined;
    private _autoRotateEnd: AppCommon.Point = undefined;
    private _isAutoRotating = false;
    private _autoRotateTimer: NodeJS.Timer = undefined;
    private count: number = 1;
    autoRotate(): void {
        const workflow = this.modelContainer.getModel('WorkflowModel') as HeartWorkflow;
        const cell = workflow.getCell('A_VR');
        if (!cell) {
            return;
        }

        if (!this._isAutoRotating) {
            Viewer.MedViewerCommandHelper.sendCellOperationStart(cell.viewerControl.commandSender, 'rotate');
            this._autoRotateStart = new AppCommon.Point(0.5, 0.5);
            this._autoRotateEnd = new AppCommon.Point(0.5 + 0.1, 0.5);
            this.count++;
            this._autoRotateTimer = setInterval(this.autoRotateTimerTick, 30, cell, this._autoRotateStart, this._autoRotateEnd);
            this._isAutoRotating = true;
        } else {
            Viewer.MedViewerCommandHelper.sendCellOperationEnd(cell.viewerControl.commandSender, 'rotate');
            this._isAutoRotating = false;
            clearInterval(this._autoRotateTimer);
            this._autoRotateTimer = undefined;


        }
    }

    autoRotateTimerTick(cell: AppCell, start: AppCommon.Point, end: AppCommon.Point) {
        Viewer.MedViewerCommandHelper.cellCommonOperation('rotate', cell,
            new AppCommon.Point(start.x * cell.canvas.width, start.y * cell.canvas.height),
            new AppCommon.Point(end.x * cell.canvas.width, end.y * cell.canvas.height));
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
}
