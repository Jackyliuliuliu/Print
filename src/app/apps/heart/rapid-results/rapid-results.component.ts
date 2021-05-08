import { Component, OnInit, ViewContainerRef, ChangeDetectorRef, NgZone, ViewChild, ElementRef, Renderer2, AfterViewInit, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import * as AppCommon from 'uih-appcommon';
import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';
import * as Dicom from 'uih-dataheader';
import * as HeartDefinitions from '../heart.component.definition';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import { RapidResultsHelper } from './RapicResultsHelper';
import { RapidResultCellActionInitializeItem } from './RapidResultCellActionInitializeItem';
import { HeartService } from '../service/heart.service';
import { AdvAppBaseComponent } from '../../adv-app-base/adv-app-base.component';
import { CoronarySaveTemplateDto, PacsListDto, SeriesDto } from 'uih-app-serverapi';
import * as Enum from '../heart.component.enumConverter';
import { HeartComponent } from '../heart.component';
import * as HeartActions from '../heart.component.actions';
import { AppCell, CommandHelper } from 'uih-viewerkit';
import { GraphicPreView } from '../heart.component.graphics';
import * as AppToolkit from 'uih-apptoolkit';
import { takeUntil } from 'rxjs/operators';
import { RapidResultComboxComponent } from '../rapid-result-combox/rapid-result-combox.component'
import { RapidResultTooltipComponent } from '../rapid-result-tooltip/rapid-result-tooltip.component'
import { state, animateChild } from '@angular/animations';
import { startImageIndex } from '../heart.component.enumConverter'
import { image } from 'html2canvas/dist/types/css/types/image';
import { start } from 'repl';
import { stat } from 'fs';
import { isNull, callbackify } from 'util';


export class ImagePreviewInfo {
    centerLineID: number;
    imageType: string;
    isCoronaryOrientationMode: boolean;
    imageIndex: number;
    tissueDisplayMode: CardiacProto.TissueDisplayMode;
    isMainBranch: false;
    isManualSaved: false;
    imageName: string;
    lrAngle: any;
    auAngle: any;
    changeUpDirection: number | 0;
    upX: any;
    upY: any;
    upZ: any;
}

export class TempCoronaryListItem {
    ID: number;
    name: string;
}

class AngleInfo {
    vr: object;
    vrTree: object;
    mip: object;
}

// image的index信息
class ImageIndexInfo {
    type: string;
    angleType: number; // 0:固定角度 1:旋转角度 -1:cpr/scpr无需区分该参数
    curIndex: number; // 在当前tab下的index
}

// 根据type区分imageInfo
class ImageInfoObj {
    vr: ImagePreviewInfo[];
    vrTree: ImagePreviewInfo[];
    mip: ImagePreviewInfo[];
    scpr: ImagePreviewInfo[];
    cpr: ImagePreviewInfo[];
    custom: ImagePreviewInfo[];
}

@Component({
    selector: 'app-rapid-results',
    templateUrl: './rapid-results.component.html',
    styleUrls: ['./rapid-results.component.css']
})
export class RapidResultsComponent implements OnInit, AfterViewInit {

    constructor(protected render: Renderer2,
        protected componentFactoryResolver: ComponentFactoryResolver,
        protected modelContainer: AppCommon.ModelContainer,
        protected heartSvc: HeartService,
        protected zone: NgZone
    ) { }
    scprNodeValue: string[] = ['LAD', 'RCA', 'LCX'];
    cprNodeValue: string[] = ['LAD', 'RCA', 'LCX'];  //树形菜单显示的节点
    nodes: any = this.heartSvc.cprNode;
    batchViewContainer: ViewContainerRef;
    isVisibleBatch: boolean = true;
    imagePreviewInfoList: ImagePreviewInfo[] = [];
    delPreviewInfoList: ImagePreviewInfo[] = [];
    currentPreviewIndex: number = 0;
    currentPreviewIndexStore: number = 0;
    vrChecked: boolean = true;
    vrMode: number = 0;
    vrImageInfo: object[] = this.heartSvc.imageInfoDict.VR;
    vrFixedImageInfo: object[] = []; //切换时 备份imageInfo
    vrCircleImageInfo: object[] = [];
    listVrTreeImageInfo: string[] = [];
    vrTreeChecked: boolean = true;
    vrTreeMode: number = 0;
    vrTreeImageInfo: object[] = this.heartSvc.imageInfoDict.VRTree;
    vrTreeFixedImageInfo: object[] = [];
    vrTreeCircleImageInfo: object[] = [];
    listVrImageInfo: string = '';
    listCprImageInfo: string = '';
    listScprImageInfo: string = ''
    mipChecked: boolean = true;
    mipMode: number = 0;
    mipImageInfo: object[] = this.heartSvc.imageInfoDict.MIP;
    mipFixedImageInfo: object[] = [];
    mipCircleImageInfo: object[] = [];
    listMipImageInfo: string[] = [];
    cprChecked: boolean = true;
    scprChecked: boolean = true;
    currentTemplate: CoronarySaveTemplateDto;
    allTemplates: CoronarySaveTemplateDto[] = [];
    pacsAddrs: PacsListDto = new PacsListDto();
    currentPacsAddr: string = '';
    seriesName: string = 'uAI Series';
    saveImageCount: number = 0;
    seriesUID: string = '';
    isSaving: boolean = false;
    saveIndex: number = 0;
    isShowFilming: boolean = false;
    bottomLeftInfo: string = '';
    currentImageTypeIndex: number = 0;
    previousImageTypeIndex: number = 0;
    isShowNoImage: boolean = false;
    numCPR: number = 5;
    numSCPR: number = 5;
    disableTab: boolean = false;
    updateSaveImageCount: number = 0;
    isShowNoFilming: boolean = false;
    savingSeriesInstanceUID: string = '';
    seriesNumber: number = 0;

    canAllPageResponse: boolean = true;
    isHiddenProgress: boolean = true;
    progressContent: string = '';
    savePercent: number = 0;

    currentTemplateName: string = '';
    templateNames: string[] = [];
    tabImageType: string[] = [];

    isDeviceSlow = false;
    templateUnsaved = true;
    showQuitModal = false;
    quitMode = null; //0 1 2 3 退出 发送胶片 切换模板 发送到PACS
    mouseDownTabImageType = '';
    angleInfo: AngleInfo = new AngleInfo();
    cprNumList: number[] = [5, 10, 20];
    scprNumList: number[] = [5, 10, 20];
    // 每个tab下的imagePreviewInfo长度
    lenOfPreviewInfo: number[] = [];
    vrAllChecked: boolean = true;
    vrTreeAllChecked: boolean = true;
    mipAllChecked: boolean = true;
    //固定角度下的输入框显示内容
    vrTreeDisplayContent = '全选';
    vrDisplayContent = '全选';
    mipDisplayContent = '全选';
    cprDisplayContent = '请选择分支';
    scprDisplayContent = '请选择分支';
    //batch angle
    vrTreeBatchAngle = [];
    vrBatchAngle = [];
    mipBatchAngle = [];
    //checkbox 的半选状态
    vrIndeterminate = false;
    vrTreeIndeterminate = false;
    mipIndeterminate = false;
    //旋转图幅
    vrLrNum = JSON.parse(this.heartSvc.defaultTemplate).vr.lrPreNum;
    vrLrNumList = JSON.parse(this.heartSvc.defaultTemplate).vr.lrPreNumList;
    vrAuNum = JSON.parse(this.heartSvc.defaultTemplate).vr.auPreNum;
    vrAuNumList = JSON.parse(this.heartSvc.defaultTemplate).vr.auPreNumList;

    vrTreeLrNum = JSON.parse(this.heartSvc.defaultTemplate).vrTree.lrPreNum;
    vrTreeLrNumList = JSON.parse(this.heartSvc.defaultTemplate).vrTree.lrPreNumList;
    vrTreeAuNum = JSON.parse(this.heartSvc.defaultTemplate).vrTree.auPreNum;
    vrTreeAuNumList = JSON.parse(this.heartSvc.defaultTemplate).vrTree.auPreNumList;

    mipLrNum = JSON.parse(this.heartSvc.defaultTemplate).mip.lrPreNum;
    mipLrNumList = JSON.parse(this.heartSvc.defaultTemplate).mip.lrPreNumList;
    mipAuNum = JSON.parse(this.heartSvc.defaultTemplate).mip.auPreNum;
    mipAuNumList = JSON.parse(this.heartSvc.defaultTemplate).mip.auPreNumList;
    saveSeriesCopyed = false;

    protected viewerControl: Viewer.MedViewerControl = undefined;
    protected viewerControlClone: Viewer.MedViewerControl = undefined;
    protected commandSender: Viewer.IMedViewerControlCommandSender = undefined;

    @ViewChild('viewerControl', { static: false }) viewerControlElement?: ElementRef;
    @ViewChild('viewerControlClone', { static: false }) viewerControlCloneElement?: ElementRef;
    @ViewChild('filmingreviewarea', { read: ViewContainerRef, static: false }) filmingreviewarea: ViewContainerRef;
    @ViewChild('rapidResultCombox', { static: false }) rapidResultCombox?: RapidResultComboxComponent;
    @ViewChild('rapidResultTooltip', { static: false }) rapidResultTooltip?: RapidResultTooltipComponent;
    @Output() openFilming = new EventEmitter();

    ngOnInit() {
        AppCommon.Messenger.off('updateRapidResult', (args) => { this.PageUpDown(args); });
        AppCommon.Messenger.on('updateRapidResult', (args) => { this.PageUpDown(args); });

        AppCommon.Messenger.off('SaveUpdate', () => { this.UpdateSaveImageCount(); });
        AppCommon.Messenger.on('SaveUpdate', () => { this.UpdateSaveImageCount(); });

        this.isDeviceSlow = AppCommon.DeviceInformationHelper.getChromeVersion() < 50;
        this.templateUnsaved = false;
    }

    UpdateSaveImageCount(): void {
        this.zone.run(() => {
            this.updateSaveImageCount += 1;
            this.savePercent = this.updateSaveImageCount * 100 / this.imagePreviewInfoList.length;
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;

            if (this.isShowFilming && this.updateSaveImageCount == this.imagePreviewInfoList.length) {
                this.isSaving = false;
                const buffer = new TextEncoder().encode('0');
                CommandHelper.sendPanelOperation(component.commandSender, buffer, 'ChangeSaveState');
                this.isVisibleBatch = false;
                const buffer1 = new TextEncoder().encode('1');
                ViewerKit.CommandHelper.sendPanelOperation(component.commandSender, buffer1, 'ForceUpdateAllNonimage');
                //component.toastSvc.close();
                //this.hideProgress();
                component.reAttachLayoutChange();
                component.toolbar.isVisibleBatch = this.isVisibleBatch;

                this.openFilming.emit();
                return;
            } else if (this.isSaving && this.updateSaveImageCount == this.imagePreviewInfoList.length) {
                this.currentPreviewIndex = this.currentPreviewIndexStore;
                this.isSaving = false;
                const buffer = new TextEncoder().encode('0');
                CommandHelper.sendPanelOperation(component.commandSender, buffer, 'ChangeSaveState');
                this.hideProgress();
            }
        });
    }
    ngAfterViewInit(): void {
        this.setSelectLength();
        this.initialize();

        const component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.advAppAPIService.aiDBSvcClient.getCoronarySaveTemplates().then(rst => {
            this.allTemplates = rst;
            if (this.allTemplates.length > 0) {
                this.currentTemplate = this.allTemplates[0];
                this.currentTemplateName = this.currentTemplate.name;
            } else {
                this.currentTemplate = new CoronarySaveTemplateDto();
                this.currentTemplate.template = this.heartSvc.defaultTemplate;
                this.currentTemplateName = 'default';
            }
            this.setTemplateNames();
            this.doSelectTemplate(this.currentTemplateName);
        });
        component.advAppAPIService.aiDBSvcClient.getPacsList().then(rst => {
            this.pacsAddrs = rst;
            this.currentPacsAddr = rst.defaultAE;
        });

        this.getCurrentSavedSeries(0);
    }

    /// callBackType : 0) do nothing, 1) doSavePacs, 2) doSaveFilming, 3) getSaveImage 
    private getCurrentSavedSeries(callBackType: Number): void {
        const component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.advAppAPIService.aiDBSvcClient.getStudyAll(component.studyDTO.studyInstanceUID).then(studyDto => {
            let maxSeriesInstanceNumber = 0;
            let maxSeriesUID = '';
            let uAIMSeriesList = [];
            studyDto.list.forEach(series => {
                const tmpInstanceNumber = series.seriesNumber;
                const tmpSeriesUID = series.seriesInstanceUID;

                if (tmpInstanceNumber >= 8000) {
                    const seriestatus = series.seriesStatus;
                    if ((seriestatus === 'uAIM' || seriestatus === 'uAIMCopy') && series.seriesThumbnail.includes(':')) {
                        uAIMSeriesList.push(tmpSeriesUID);
                        maxSeriesInstanceNumber = tmpInstanceNumber;
                        maxSeriesUID = tmpSeriesUID;
                        this.saveImageCount = series.seriesCount;
                        this.seriesUID = tmpSeriesUID;
                        if (seriestatus === 'uAIMCopy') {
                            component.advAppAPIService.aiDBSvcClient.updateSeriesStatus(maxSeriesUID, 'uAIM');
                        }
                    }
                }
            });

            if (uAIMSeriesList.length > 1) {
                for (let i = 0; i < uAIMSeriesList.length - 1; i++) {
                    component.advAppAPIService.aiDBSvcClient.updateSeriesStatus(uAIMSeriesList[i], 'noUse');
                }
            }

            this.saveSeriesCopyed = false;
            if (callBackType == 0) {
                // donothing:
                console.log('initial for save series');
                if (this.imagePreviewInfoList.length == 0) {
                    this.currentPreviewIndex = 0;
                    this.getSavedImageData(this.seriesUID, 0);
                }
            } else if (callBackType == 1) {
                this.doSaveToFilming();
            } else if (callBackType == 2) {
                this.doSaveToPACS();
            } else if (callBackType == 3) {
                if (this.currentPreviewIndex >= this.imagePreviewInfoList.length) {
                    let savedImageIndex = this.currentPreviewIndex - this.imagePreviewInfoList.length;
                    this.getSavedImageData(this.seriesUID, savedImageIndex);
                }
            }
        });
    }

    private setSelectLength(): void {
        const selectDom = document.getElementById('selectTemplate');
        const inputDom = selectDom.getElementsByTagName('input')[0];
        inputDom.setAttribute('maxlength', '20');
    }

    private initialize(): void {
        this.initViewerControl();
        this.initViewerControlClone();

        AppCommon.Messenger.off('SaveFailed', () => { this.OnSaveFailed(); });

        AppCommon.Messenger.on('SaveFailed', () => { this.OnSaveFailed(); });
        //this.assembleImagePreviewInfoList();

        document.getElementById('tabset').addEventListener("mousedown", (e: any) => this.onMouseDown(e), false);
        document.getElementById('tabset').addEventListener("mouseup", (e: any) => this.onMouseUp(e), false);
    }

    private onMouseDown(event) {
        this.mouseDownTabImageType = this.tabImageType.indexOf(event.srcElement.innerText) >= 0 ? event.srcElement.innerText : '';
    }
    // drag of tabset 
    private onMouseUp(event) {
        if (this.tabImageType.indexOf(event.srcElement.innerText) < 0)
            return;
        let mouseUpTabImageType = event.srcElement.innerText;
        // 自定义的tab无法拖拽
        if (mouseUpTabImageType == '自定义' || this.mouseDownTabImageType == '自定义') {
            this.mouseDownTabImageType = '';
            return;
        }

        if (mouseUpTabImageType == this.mouseDownTabImageType) {
            this.mouseDownTabImageType = '';
            return;
        }
        let curImageType = this.tabImageType[this.currentImageTypeIndex];  // 当前的图像类型
        let newTabset = [];
        if (this.mouseDownTabImageType != '' && mouseUpTabImageType != '') {
            this.tabImageType.forEach(ele => {
                if (ele == this.mouseDownTabImageType)
                    newTabset.push(mouseUpTabImageType);
                else {
                    if (ele == mouseUpTabImageType)
                        newTabset.push(this.mouseDownTabImageType);
                    else
                        newTabset.push(ele);
                }
            })
            this.tabImageType = newTabset;
            this.assembleImagePreviewInfoList();
            this.selectPreviewImage(curImageType, this.tabImageType.indexOf(curImageType));
            this.updateTemplate();
        }

        this.mouseDownTabImageType = '';
    }

    initViewerControl() {
        this.commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
        this.viewerControl = new Viewer.MedViewerControl(this.render, this.viewerControlElement, this.commandSender);
        this.viewerControl.initialize();
        this.viewerControl.isSupportMultipleSelection = true;
        Viewer.ActionFactory.AddAction(Viewer.ActionTypes.Zoom, new HeartActions.HRTActionZoom());
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        if (!workflow) {
            return;
        }

        let cell = workflow.getCell('Rapid_Results_Preview_Cell1');
        if (!cell) {
            cell = new ViewerKit.AppCell(AppToolkit.AngularPerformanceHelper.highPerformanceWrapper, this.isDeviceSlow);
            cell.cellName = 'Rapid_Results_Preview_Cell1';
            cell.cellType = 'Preview';
            const imageTexts = new Viewer.ImageTextInitializeItem();
            imageTexts.cell = cell;
            imageTexts.appName = 'CTCardiacAnalysis';
            cell.itemCollection.push(imageTexts);
            cell.displayData.imageHeader.DicomHeader.setValue(Dicom.Tag.Modality, 'CT');

            const actionInitializeItem = new RapidResultCellActionInitializeItem();
            cell.itemCollection.push(actionInitializeItem);
            cell.initialize(this.modelContainer);
            cell.actionManager.setAction(Viewer.MouseButtonType.Left, HeartDefinitions.HRTActionType.PageUpDown);
            cell.actionManager.setAction(Viewer.MouseButtonType.GroupButton1, HeartDefinitions.HRTActionType.PageUpDown);
            cell.actionManager.setAction(Viewer.MouseButtonType.Right, Viewer.ActionTypes.Zoom);
            workflow.addCell(cell);
        }

        cell.canMaximize = false;
        cell.displayData.imageText.isVisible = true;
        this.viewerControl.addCell(cell);

        const layoutInfo = new Viewer.LayoutCellInfo();
        //layoutInfo.capacity = 1;
        layoutInfo.colums = 1;
        layoutInfo.rows = 1;
        //layoutInfo.heights = [1.0];
        //layoutInfo.widths = [1.0];
        this.viewerControl.layoutManager.setLayout(layoutInfo, [cell]);
        this.viewerControl.layoutManager.selectedCell(cell, false);
        cell.isSelected = false;

        this.viewerControl.setActionType(HeartDefinitions.HRTActionType.PageUpDown);

        this.viewerControl.layoutManager.setCanvasSize();
        ViewerKit.CommandHelper.sizeChanged(this.commandSender, this.viewerControl);
        cell.actionManager.setAction(Viewer.MouseButtonType.Right, Viewer.ActionTypes.Zoom);
        AppCommon.Messenger.off('imageRefresh', (cell0) => { this.onRefreshImage(cell0); });
        AppCommon.Messenger.on('imageRefresh', (cell0) => { this.onRefreshImage(cell0); });
    }
    initViewerControlClone() {
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        if (!workflow) {
            return;
        }
        this.viewerControlClone = new Viewer.MedViewerControl(this.render, this.viewerControlCloneElement, this.commandSender);
        this.viewerControlClone.initialize();
        this.viewerControlClone.isSupportMultipleSelection = true;
        Viewer.ActionFactory.AddAction(Viewer.ActionTypes.Zoom, new HeartActions.HRTActionZoom());
        let cell = workflow.getCell('Rapid_Results_Preview_Cell');
        if (!cell) {
            cell = new ViewerKit.AppCell(AppToolkit.AngularPerformanceHelper.highPerformanceWrapper, this.isDeviceSlow);
            cell.cellName = 'Rapid_Results_Preview_Cell';
            cell.cellType = 'Preview';
            const imageTexts = new Viewer.ImageTextInitializeItem();
            imageTexts.cell = cell;
            imageTexts.appName = 'CTCardiacAnalysis';
            cell.itemCollection.push(imageTexts);
            cell.displayData.imageHeader.DicomHeader.setValue(Dicom.Tag.Modality, 'CT');
            workflow.addCell(cell);
        }
        cell.displayData.imageText.isVisible = false;
        cell.canMaximize = false;
        this.viewerControlClone.addCell(cell);

        const layoutInfo1 = new Viewer.LayoutCellInfo();
        //layoutInfo1.capacity = 1;
        layoutInfo1.colums = 1;
        layoutInfo1.rows = 1;
        //layoutInfo1.heights = [1.0];
        //layoutInfo1.widths = [1.0];
        this.viewerControlClone.layoutManager.setLayout(layoutInfo1, [cell]);
        this.viewerControlClone.layoutManager.selectedCell(cell, false);
        cell.isSelected = false;

        this.viewerControlClone.layoutManager.setCanvasSize();
        ViewerKit.CommandHelper.sizeChanged(this.commandSender, this.viewerControlClone);
    }
    compareIntValue(val1: string, val2: string) {
        return parseInt(val1, 0) === parseInt(val2, 0);
    }

    cancelQuit(): void {
        this.showQuitModal = false;
    }

    cancelSave(): void {
        this.showQuitModal = false;
        this.afterSaveAlert();
    }

    doSave(): void {
        this.saveTemplate();
        this.showQuitModal = false;
        this.templateUnsaved = false;
        this.afterSaveAlert();
    }

    afterSaveAlert() {
        if (this.quitMode == 0) {
            this.quitRapidRes();
        }
        if (this.quitMode == 1) {
            this.execSaveToFilming();
        }
        if (this.quitMode == 2) {
            this.doSelectTemplate(this.currentTemplateName);
        }
        if (this.quitMode == 3) {
            this.execSaveToPACS();
        }
    }

    quitRapidRes(): void {
        this.batchViewContainer.clear();
        this.isVisibleBatch = false;
        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        component.reAttachLayoutChange();

        component.toolbar.isVisibleBatch = this.isVisibleBatch;
        this.isSaving = false;
        this.isShowFilming = false;

        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        if (!workflow) {
            return;
        }

        const buffer1 = new TextEncoder().encode('1');
        ViewerKit.CommandHelper.sendPanelOperation(component.commandSender, buffer1, 'ForceUpdateAllNonimage');
        const buffer = new TextEncoder().encode('0');
        CommandHelper.sendPanelOperation(component.commandSender, buffer, 'ChangeSaveState');
    }

    close(): void {
        //弹框 提示未保存模板
        if (this.templateUnsaved) {
            this.showQuitModal = true;
            this.quitMode = 0;
        }
        else {
            // 退出当前的modal
            this.quitRapidRes();
        }
    }

    private OnSaveFailed(): void {
        if (!this.isVisibleBatch) {
            return;
        }
        if (this.isSaving) {
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            //component.toastSvc.close();
            this.hideProgress();
            if (!this.isShowFilming) {
                component.toastSvc.error('发送失败，请联系工程师');
                //this.isShowWaring = false;

            } else {
                component.toastSvc.error('发送打印失败，请联系工程师');
                this.isShowFilming = false;
            }
            this.isSaving = false;
            const buffer = new TextEncoder().encode('0');
            CommandHelper.sendPanelOperation(component.commandSender, buffer, 'ChangeSaveState');
        }
    }

    private onRefreshImage(cell: AppCell): void {
        if (cell.cellName.indexOf('Rapid_Results_Preview_Cell') == -1) {
            return;
        }
        if (!this.isVisibleBatch) {
            return;
        }
        if (this.currentPreviewIndex >= this.imagePreviewInfoList.length) {
            return;
        }

        this.refreshBottomLeftInfo();

        if (!this.isSaving || cell.cellName != 'Rapid_Results_Preview_Cell') {
            return;
        }
        this.saveIndex += 1;

        let isEnd = false;
        if (this.imagePreviewInfoList.length === this.saveIndex) {
            isEnd = true;

        }

        const flag = isEnd && (!this.isShowFilming);
        const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;

        setTimeout(() => {
            RapidResultsHelper.RapidSaveCommand(this.imagePreviewInfoList,
                this.currentPreviewIndex, cell,
                this.modelContainer,
                this.savingSeriesInstanceUID,
                this.seriesNumber,
                this.seriesName,
                this.currentPacsAddr, flag);
            if (this.saveIndex < this.imagePreviewInfoList.length) {
                this.currentPreviewIndex = this.saveIndex;
            }
            if (flag) {
                //const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
                //component.toastSvc.close();
            }
        }, 80);
    }

    public getCurrentImageTypeIndex(): void {
        // 根据tabImageType的顺序调整 todo
        if (this.imagePreviewInfoList.length + this.saveImageCount === 0) {
            this.currentImageTypeIndex = 3; //自定义默认无法拖拽
            this.disableTab = true;
            return;
        }
        if (this.currentPreviewIndex < this.imagePreviewInfoList.length) {
            this.disableTab = false;
            const imageType = this.imagePreviewInfoList[this.currentPreviewIndex].imageType;
            if (imageType === 'VR') {
                this.currentImageTypeIndex = this.tabImageType.indexOf('VR');
            } else if (imageType === 'MIP') {
                this.currentImageTypeIndex = this.tabImageType.indexOf('MIP');
            } else {
                this.currentImageTypeIndex = this.tabImageType.indexOf('CPR/SCPR');
            }
        } else {
            this.currentImageTypeIndex = 3; //自定义默认无法拖拽
        }
    }

    private getSavedImageData(seriesUID: string, index: number): void {
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;

        component.advAppAPIService.aiDBSvcClient.getSeriesImage(seriesUID,
            index).then(rst => {
                if (rst) {
                    const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
                    const cell = workflow.getCell('Rapid_Results_Preview_Cell1');

                    if (cell) {
                        cell.displayData.imageText.isVisible = false;
                        const s = 'data:image/jpg;base64,' + rst;
                        const canvasContext = cell.canvas.getContext('2d');
                        canvasContext.clearRect(0, 0, cell.canvas.width, cell.canvas.height);
                        cell.displayData.clearGraphics();
                        cell.displayData.orientation.isVisible = false;
                        this.viewerControl.updateCellImage('Rapid_Results_Preview_Cell1', s);
                        cell.actionManager.setAction(Viewer.MouseButtonType.Middle, Viewer.ActionTypes.Empty);
                        cell.actionManager.setAction(Viewer.MouseButtonType.Right, Viewer.ActionTypes.Empty);
                    }
                }
            });
    }

    private noNewSavedImage(): Boolean {
        if (this.imagePreviewInfoList.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    private getTotalSaveImageCount(): Number {
        return this.imagePreviewInfoList.length + this.saveImageCount;
    }

    public PageUpDown(args: any): void {
        if (this.getTotalSaveImageCount() <= 1) {
            return;
        }
        let delta = 0;
        const e2 = args || window.event;
        if (e2.type === 'mousewheel') {
            delta = e2.wheelDeltaY < 0 ? 1 : -1;
        } else {
            delta = e2.movementY < 0 ? 1 : -1;
        }

        if (this.imagePreviewInfoList.length + this.saveImageCount === 0) {
            // 如果啥都没有就为 0
            this.currentPreviewIndex = -1;
        } else if (this.currentPreviewIndex + delta >= this.imagePreviewInfoList.length + this.saveImageCount) {
            // 当前为最后一页, 最后一页翻页到第一页
            this.currentPreviewIndex = 0;
        } else if (this.currentPreviewIndex + delta < 0) {
            // 当前为第一页, 第一页翻页到最后一页
            this.currentPreviewIndex = this.imagePreviewInfoList.length - 1 + this.saveImageCount;
        } else {
            this.currentPreviewIndex += delta;
        }

        this.getCurrentImageTypeIndex();

        if (this.currentPreviewIndex < this.imagePreviewInfoList.length) {
            this.clearPreviewCell();
            const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
            RapidResultsHelper.sendPreviewCommandToBE(this.imagePreviewInfoList, this.currentPreviewIndex, commandSender);
        } else {
            if (this.saveSeriesCopyed) {
                this.getCurrentSavedSeries(3);
            } else {
                let savedImageIndex = this.currentPreviewIndex - this.imagePreviewInfoList.length;
                this.getSavedImageData(this.seriesUID, savedImageIndex);
            }
        }
        // this.refreshBottomLeftInfo();
    }

    // todo: assembleImagePreviewInfoList后续都由桂林完成
    private assembleImagePreviewInfoList(): void {
        this.imagePreviewInfoList = [];
        this.imagePreviewInfoList = this.assembleCoronaryList();
        this.currentPreviewIndex = 0;
        this.getCurrentImageTypeIndex();
        if (this.imagePreviewInfoList.length > 0) {
            const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
            RapidResultsHelper.sendPreviewCommandToBE(this.imagePreviewInfoList, this.currentPreviewIndex, commandSender);
        } else if (this.saveImageCount > 0) {
            this.naviToUserSavedImage();
        } else {
            const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
            const cell = workflow.getCell('Rapid_Results_Preview_Cell1');
            this.currentPreviewIndex = -1;
            if (cell) {
                cell.displayData.imageText.isVisible = false;
                const canvasContext = cell.canvas.getContext('2d');
                canvasContext.clearRect(0, 0, cell.canvas.width, cell.canvas.height);
                cell.displayData.clearGraphics();
                cell.displayData.orientation.isVisible = false;
            }
        }
        // this.refreshBottomLeftInfo();
    }

    /**
     * 
     * @param list imagePreviewInfo
     * @param centerLineID 
     * @param imageType 
     * @param imageIndex 
     * @param splitNum 分隔图幅
     */
    private getPreviewInfoList(list: ImagePreviewInfo[], centerLineID: number, imageType: string, startIndex: number, index: number, splitNum: number): ImagePreviewInfo[] {
        if (!this.isDelPreviewList(centerLineID, imageType, startIndex + index)) {
            const imagePreviewInfo = new ImagePreviewInfo();
            imagePreviewInfo.centerLineID = centerLineID;
            imagePreviewInfo.imageType = imageType;
            imagePreviewInfo.imageIndex = startIndex + index;
            imagePreviewInfo.tissueDisplayMode = CardiacProto.TissueDisplayMode.TissueDisplayMode_None;
            imagePreviewInfo.imageName = this.heartSvc.centerlineList[centerLineID]['name'];
            imagePreviewInfo.lrAngle = 360 / splitNum * index;
            imagePreviewInfo.auAngle = 0;
            imagePreviewInfo.changeUpDirection = 0;
            imagePreviewInfo.upX = 0;
            imagePreviewInfo.upY = 0;
            imagePreviewInfo.upY = 0;
            list.push(imagePreviewInfo);
        }
        return list;
    }
    private isDelPreviewList(centerLineID: number, imageType: string, imageIndex: number): boolean {
        if (this.delPreviewInfoList) {
            for (let item of this.delPreviewInfoList) {
                if (item.centerLineID === centerLineID &&
                    item.imageType === imageType &&
                    item.imageIndex === imageIndex) {
                    return true;
                }
            }
        }
        return false;
    }

    private assembleCoronaryList(): ImagePreviewInfo[] {
        const listVr: ImagePreviewInfo[] = [];
        const listMip: ImagePreviewInfo[] = [];
        const listCpr: ImagePreviewInfo[] = [];
        const tabListOrder = this.tabImageType;
        const deltaIdx = startImageIndex.delta;
        if (this.vrChecked) {
            const vrStartIdx = startImageIndex.vr;
            for (let i = 0; i < this.vrImageInfo.length; i++) {
                let curImageIdx = this.vrMode == 0 ? vrStartIdx + i : vrStartIdx + deltaIdx + i;
                if (!this.isDelPreviewList(0, 'VR', curImageIdx) && this.vrImageInfo[i]['isChecked']) {
                    const imagePreviewInfo = new ImagePreviewInfo();
                    imagePreviewInfo.centerLineID = 0;
                    imagePreviewInfo.imageType = 'VR';
                    imagePreviewInfo.tissueDisplayMode = CardiacProto.TissueDisplayMode.AllTissue;
                    imagePreviewInfo.isCoronaryOrientationMode = true;
                    imagePreviewInfo.imageIndex = curImageIdx;
                    imagePreviewInfo.imageName = this.vrImageInfo[i]['name'];
                    const angle = this.parseImageInfo(imagePreviewInfo.imageName);
                    imagePreviewInfo.lrAngle = angle[0];
                    imagePreviewInfo.auAngle = angle[1];
                    imagePreviewInfo.changeUpDirection = this.vrMode == 0 ? 0 : 1;
                    imagePreviewInfo.upX = this.vrMode == 0 ? 0 : this.vrImageInfo[i]['direction'][0];
                    imagePreviewInfo.upY = this.vrMode == 0 ? 0 : this.vrImageInfo[i]['direction'][1];
                    imagePreviewInfo.upZ = this.vrMode == 0 ? 0 : this.vrImageInfo[i]['direction'][2];
                    listVr.push(imagePreviewInfo);
                }
            }
        }
        if (this.vrTreeChecked) {
            const vrTreeStartIdx = startImageIndex.vrTree;
            for (let i = 0; i < this.vrTreeImageInfo.length; i++) {
                let curImageIdx = this.vrTreeMode == 0 ? vrTreeStartIdx + i : vrTreeStartIdx + deltaIdx + i;
                if (!this.isDelPreviewList(0, 'VR', curImageIdx) && this.vrTreeImageInfo[i]['isChecked']) {
                    const imagePreviewInfo = new ImagePreviewInfo();
                    imagePreviewInfo.centerLineID = 0;
                    imagePreviewInfo.imageType = 'VR';
                    imagePreviewInfo.tissueDisplayMode = CardiacProto.TissueDisplayMode.CoronaryTissue;
                    imagePreviewInfo.isCoronaryOrientationMode = true;
                    imagePreviewInfo.imageIndex = curImageIdx;
                    imagePreviewInfo.imageName = this.vrTreeImageInfo[i]['name'];
                    const angle = this.parseImageInfo(imagePreviewInfo.imageName);
                    imagePreviewInfo.lrAngle = angle[0];
                    imagePreviewInfo.auAngle = angle[1];
                    imagePreviewInfo.changeUpDirection = this.vrTreeMode == 0 ? 0 : 1;
                    imagePreviewInfo.upX = this.vrTreeMode == 0 ? 0 : this.vrTreeImageInfo[i]['direction'][0];
                    imagePreviewInfo.upY = this.vrTreeMode == 0 ? 0 : this.vrTreeImageInfo[i]['direction'][1];
                    imagePreviewInfo.upZ = this.vrTreeMode == 0 ? 0 : this.vrTreeImageInfo[i]['direction'][2];
                    listVr.push(imagePreviewInfo);
                }
            }
        }
        if (this.mipChecked) {
            const mipStartIdx = startImageIndex.mip;
            for (let i = 0; i < this.mipImageInfo.length; i++) {
                let curImageIdx = this.mipMode == 0 ? mipStartIdx + i : mipStartIdx + deltaIdx + i;
                if (!this.isDelPreviewList(0, 'MIP', curImageIdx) && this.mipImageInfo[i]['isChecked']) {
                    const imagePreviewInfo = new ImagePreviewInfo();
                    imagePreviewInfo.centerLineID = 0;
                    imagePreviewInfo.imageType = 'MIP';
                    imagePreviewInfo.tissueDisplayMode = CardiacProto.TissueDisplayMode.CoronaryTissue;
                    imagePreviewInfo.isCoronaryOrientationMode = true;
                    imagePreviewInfo.imageIndex = curImageIdx;
                    imagePreviewInfo.imageName = this.mipImageInfo[i]['name'];
                    const angle = this.parseImageInfo(imagePreviewInfo.imageName);
                    imagePreviewInfo.lrAngle = angle[0];
                    imagePreviewInfo.auAngle = angle[1];
                    imagePreviewInfo.changeUpDirection = this.mipMode == 0 ? 0 : 1;
                    imagePreviewInfo.upX = this.mipMode == 0 ? 0 : this.mipImageInfo[i]['direction'][0];
                    imagePreviewInfo.upY = this.mipMode == 0 ? 0 : this.mipImageInfo[i]['direction'][1];
                    imagePreviewInfo.upZ = this.mipMode == 0 ? 0 : this.mipImageInfo[i]['direction'][2];
                    listMip.push(imagePreviewInfo);
                }
            }
        }
        const cprStartIdx = startImageIndex.cpr;
        const scprStartIdx = startImageIndex.scpr;
        let cprList = this.parseNode(this.cprNodeValue);
        this.cprDisplayContent = cprList.length === 24 ? '全选' : cprList.length === 0 ? '无' : cprList.length === 1 ? cprList[0] : cprList[0] + '等';
        let scprList = this.parseNode(this.scprNodeValue);
        this.scprDisplayContent = scprList.length === 24 ? '全选' : scprList.length === 0 ? '无' : scprList.length === 1 ? scprList[0] : scprList[0] + '等';
        for (let index = 0; index < this.heartSvc.centerlineList.length; index++) {
            if (this.cprChecked) {
                for (const item in cprList) {
                    if (this.heartSvc.matchName(index, cprList[item])) {
                        for (let i = 0; i < this.numCPR; i++) {
                            this.getPreviewInfoList(listCpr, index, 'CPR', cprStartIdx, i, this.numCPR);
                        }
                    }
                }
            }
            if (this.scprChecked) {
                for (const item in scprList) {
                    if (this.heartSvc.matchName(index, scprList[item])) {
                        for (let i = 0; i < this.numSCPR; i++) {
                            this.getPreviewInfoList(listCpr, index, 'SCPR', scprStartIdx, i, this.numSCPR);
                        }
                    }
                }
            }
        }
        //sort
        let firstImagePreview = tabListOrder[0] == 'VR' ? listVr : (tabListOrder[0] == 'MIP' ? listMip : listCpr)  //['VR', 'MIP', 'CPR/SCPR', '自定义']
        let secondImagePreview = tabListOrder[1] == 'VR' ? listVr : (tabListOrder[1] == 'MIP' ? listMip : listCpr)  //['VR', 'MIP', 'CPR/SCPR', '自定义']
        let lastImagePreview = tabListOrder[2] == 'VR' ? listVr : (tabListOrder[2] == 'MIP' ? listMip : listCpr)  //['VR', 'MIP', 'CPR/SCPR', '自定义']
        this.lenOfPreviewInfo = [firstImagePreview.length, secondImagePreview.length, lastImagePreview.length];
        return firstImagePreview.concat(secondImagePreview, lastImagePreview);
    }

    private refreshBottomLeftInfo(): void {
        if (this.imagePreviewInfoList.length <= 0) {
            return;
        }
        if ((this.imagePreviewInfoList[this.currentPreviewIndex].imageType === 'MIP') ||
            (this.imagePreviewInfoList[this.currentPreviewIndex].imageType === 'VR')) {
            this.bottomLeftInfo = this.imagePreviewInfoList[this.currentPreviewIndex].imageName;
        } else if (this.imagePreviewInfoList[this.currentPreviewIndex].imageType === 'CPR') {
            this.bottomLeftInfo = this.heartSvc.centerlineList[this.imagePreviewInfoList[this.currentPreviewIndex].centerLineID]['name'] + ' ' +
                parseInt(this.imagePreviewInfoList[this.currentPreviewIndex].lrAngle);
        } else if (this.imagePreviewInfoList[this.currentPreviewIndex].imageType === 'SCPR') {
            this.bottomLeftInfo = this.heartSvc.centerlineList[this.imagePreviewInfoList[this.currentPreviewIndex].centerLineID]['name'] + ' ' +
                parseInt(this.imagePreviewInfoList[this.currentPreviewIndex].lrAngle);
        }

        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        let cell = workflow.getCell('Rapid_Results_Preview_Cell1');
        if (this.isSaving) {
            cell = workflow.getCell('Rapid_Results_Preview_Cell');
        }

        const ImageText = cell.displayData.getOrAddGraphic(GraphicPreView);
        if (ImageText.text !== this.bottomLeftInfo || !ImageText.isVisible) {
            ImageText.canSelect = false;
            ImageText.isVisible = true;
            ImageText.text = this.bottomLeftInfo;
            ImageText.renderPoints[0] = new AppCommon.Point(cell.canvas.width / 2 - 30, cell.canvas.height - 55);
            if (this.isSaving) {
                ImageText.property.textFontSize = 28;
                //cell.displayData.orientation.renderPoints[0] = new AppCommon.Point(cell.canvas.width / 2 - 30, 30);
                cell.displayData.orientation.fontSize = 28;
                cell.displayData.orientation.refresh();
            }
            cell.displayData.refreshGraphics();
        }
    }

    saveToPACS(): void {
        if (this.templateUnsaved) {
            this.showQuitModal = true;
            this.quitMode = 3
        } else {
            this.execSaveToPACS();
        }
    }

    public execSaveToPACS(): void {
        if (this.saveSeriesCopyed) {
            this.getCurrentSavedSeries(2);
        } else {
            this.doSaveToPACS();
        }
    }

    private emptyPreviewCell(): void {
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        const cell = workflow.getCell('Rapid_Results_Preview_Cell1');
        if (cell) {
            cell.displayData.imageText.isVisible = false;
            const canvasContext = cell.canvas.getContext('2d');
            canvasContext.clearRect(0, 0, cell.canvas.width, cell.canvas.height);
            cell.displayData.clearGraphics();
            cell.displayData.orientation.isVisible = false;
        }
    }

    public doSaveToPACS(): void {
        //const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        //pacs地址为空时候不进行归档
        if (this.currentPacsAddr == '') {
            this.isSaving = true;
            AppCommon.Messenger.trigger('SaveFailed');
        } else {
            this.saveIndex = 0;
            if (this.imagePreviewInfoList.length < 1 && this.saveImageCount < 1) {
                this.isSaving = false;
                component.toastSvc.error('无相关图片');
                return;
            }

            component.advAppAPIService.aiDBSvcClient.getStudyAll(component.studyDTO.studyInstanceUID).then(studyDto => {
                let maxSeriesInstanceNumber = 0;
                let maxSeriesUID = '';
                let folder = '';
                studyDto.list.forEach(series => {
                    const tmpInstanceNumber = series.seriesNumber;
                    const tmpSeriesUID = series.seriesInstanceUID;
                    if (tmpInstanceNumber > maxSeriesInstanceNumber && tmpInstanceNumber >= 8000) {
                        let seriestatus = series.seriesStatus;
                        if (seriestatus == 'uAIM' && series.seriesThumbnail.includes(':')) {
                            maxSeriesInstanceNumber = tmpInstanceNumber;
                            maxSeriesUID = tmpSeriesUID;
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
                if (maxSeriesUID && maxSeriesInstanceNumber >= 8000) {
                    let dtoCopy = component.generateNewSeries(folder, 'uAIMCopy');
                    component.advAppAPIService.aiDBSvcClient.saveSeries(dtoCopy).then(result => {
                        if (result) {
                            this.copySeries(maxSeriesUID, dtoCopy.seriesInstanceUID);
                            this.savingSeriesInstanceUID = maxSeriesUID;
                            this.seriesNumber = maxSeriesInstanceNumber;
                            this.updateSaveImageCount = 0;
                            if (this.noNewSavedImage()) {
                                RapidResultsHelper.RapidSaveCommand(this.imagePreviewInfoList,
                                    this.currentPreviewIndex,
                                    null,
                                    this.modelContainer,
                                    maxSeriesUID,
                                    maxSeriesInstanceNumber,
                                    this.seriesName, this.currentPacsAddr, true);
                                this.isSaving = false;
                                this.currentPreviewIndex = -1;
                            } else {
                                this.switchFirstImage();
                            }
                        }
                    });
                } else {
                    let dto = component.generateNewSeries(folder, 'uAIM');
                    component.advAppAPIService.aiDBSvcClient.saveSeries(dto).then(result => {
                        if (result) {
                            this.savingSeriesInstanceUID = dto.seriesInstanceUID;
                            this.seriesNumber = 8001;
                            this.updateSaveImageCount = 0;
                            this.switchFirstImage();
                        }
                    });
                }
            });
        }

    }

    private switchFirstImage(): void {
        const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;

        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);

        const buffer = new TextEncoder().encode('1');
        CommandHelper.sendPanelOperation(component.commandSender, buffer, 'ChangeSaveState');
        this.isSaving = true;

        RapidResultsHelper.sendPreviewCommandToBE(this.imagePreviewInfoList, 0, commandSender);
        this.currentPreviewIndexStore = this.currentPreviewIndex;
        this.currentPreviewIndex = 0;

        component.advAppAPIService.userOperationClient.saveUserOperation('admin',
            component.studyDTO.studyInstanceUID, Enum.userOperationType.sendToPacs, component.appName);
        if (!this.isShowFilming) {
            this.showProgress('开始生成归档序列，请勿离开。');
            //component.toastSvc.show('开始生成归档序列，请勿离开。');
        } else {
            //component.toastSvc.show('正在生成打印序列，请勿离开。');
            this.showProgress('正在生成打印序列，请勿离开。');
        }
    }
    public saveToFilming(): void {
        if (this.templateUnsaved) {
            this.showQuitModal = true;
            this.quitMode = 1;
        } else {
            this.execSaveToFilming();
        }
    }

    private copySeries(oldSeriesUID, newSeriesUID): void {
        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        let command = oldSeriesUID + '|' + newSeriesUID;
        const bufferCommand = new TextEncoder().encode(command);
        ViewerKit.CommandHelper.sendPanelOperation(component.commandSender, bufferCommand, 'CopySeries');
        this.saveSeriesCopyed = true;
    }

    public execSaveToFilming(): void {
        if (this.saveSeriesCopyed) {
            this.getCurrentSavedSeries(1);
        } else {
            this.doSaveToFilming();
        }
    }

    public doSaveToFilming(): void {
        // 先把预览图像保存一下
        const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
        this.saveIndex = 0;
        // 没有预览图像，不显示filming
        if (this.imagePreviewInfoList.length === 0 && this.saveImageCount === 0) {
            this.isSaving = false;
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            component.toastSvc.error('无相关图片');
            return;
        }

        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        let proxyname = component.proxyName;
        component.advAppAPIService.dispatcherClient.setFilmingStatus(proxyname, true, component.studyDTO.studyInstanceUID).then(rst => {
            if (rst === true) {
                // 如果有需要保存的 图片，则执行一下保存
                component.advAppAPIService.aiDBSvcClient.getStudyAll(component.studyDTO.studyInstanceUID).then(studyDto => {
                    let maxSeriesInstanceNumber = 0;
                    let maxSeriesUID = '';
                    let folder = '';
                    studyDto.list.forEach(series => {
                        const tmpInstanceNumber = series.seriesNumber;
                        const tmpSeriesUID = series.seriesInstanceUID;
                        if (tmpInstanceNumber > maxSeriesInstanceNumber && tmpInstanceNumber >= 8000) {
                            let seriestatus = series.seriesStatus;
                            if (seriestatus == 'uAIM' && series.seriesThumbnail.includes(':')) {
                                maxSeriesInstanceNumber = tmpInstanceNumber;
                                maxSeriesUID = tmpSeriesUID;
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
                    if (maxSeriesUID && maxSeriesInstanceNumber >= 8000) {
                        let dtoCopy = component.generateNewSeries(folder, 'uAIMCopy');
                        component.advAppAPIService.aiDBSvcClient.saveSeries(dtoCopy).then(result => {
                            if (result) {
                                this.copySeries(maxSeriesUID, dtoCopy.seriesInstanceUID);
                                this.savingSeriesInstanceUID = maxSeriesUID;
                                this.seriesNumber = maxSeriesInstanceNumber;
                                this.isShowFilming = true;
                                this.updateSaveImageCount = 0;
                                if (this.noNewSavedImage()) {
                                    this.isSaving = false;
                                    this.isVisibleBatch = false;
                                    const buffer1 = new TextEncoder().encode('1');
                                    ViewerKit.CommandHelper.sendPanelOperation(component.commandSender, buffer1, 'ForceUpdateAllNonimage');
                                    component.toolbar.isVisibleBatch = this.isVisibleBatch;
                                    this.openFilming.emit();
                                    this.quitRapidRes();
                                } else {
                                    this.switchFirstImage();
                                }
                            }
                        });

                    } else {
                        let dto = component.generateNewSeries(folder, 'uAIM');
                        component.advAppAPIService.aiDBSvcClient.saveSeries(dto).then(result => {
                            if (result) {
                                this.savingSeriesInstanceUID = dto.seriesInstanceUID;
                                this.seriesNumber = 8001;
                                this.isShowFilming = true;
                                this.updateSaveImageCount = 0;
                                this.switchFirstImage();
                            }
                        });
                    }
                });
            } else {
                this.isShowNoFilming = true;
            }
        });
        // this.refreshBottomLeftInfo();
    }

    public vrCheckBoxChanged(): void {
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    public vrTreeCheckBoxChanged(): void {
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    public mipCheckBoxChanged(): void {
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    public cprCheckBoxChanged(): void {
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    public scprCheckBoxChanged(): void {
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    public getChecked(tabImageType: string): boolean {
        if (tabImageType === 'VR') {
            return this.vrChecked || this.vrTreeChecked;
        } else if (tabImageType === 'MIP') {
            return this.mipChecked;
        } else if (tabImageType === 'CPR/SCPR') {
            return this.cprChecked || this.scprChecked;
        } else { // '自定义
            return false;
        }
    }

    public selectPreviewImage(tabImageType: string, index: number): void {
        this.previousImageTypeIndex = this.currentImageTypeIndex;
        if (this.getChecked(tabImageType)) {
            for (let i = 0; i < this.imagePreviewInfoList.length; i++) {
                if (tabImageType.indexOf(this.imagePreviewInfoList[i].imageType) >= 0) {
                    this.currentPreviewIndex = i;
                    this.currentImageTypeIndex = index;
                    break;
                }
            }

            this.clearPreviewCell();

            const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
            RapidResultsHelper.sendPreviewCommandToBE(this.imagePreviewInfoList, this.currentPreviewIndex, commandSender);
        } else {
            if (tabImageType == '自定义' && this.saveImageCount > 0) {
                this.currentImageTypeIndex = index;
                this.naviToUserSavedImage();
            } else {
                this.isShowNoImage = true;
            }
        }
    }

    public closeShowNoImage(): void {
        this.isShowNoImage = false;

        // 回到之前图像
        this.currentImageTypeIndex = this.previousImageTypeIndex;
    }

    public changeImageNum(imageType: string): void {

    }

    public deleteImage(): void {
        // 判断是否删除自定义的图片
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        if (this.currentPreviewIndex < this.imagePreviewInfoList.length) {
            this.delPreviewInfoList.push(this.imagePreviewInfoList[this.currentPreviewIndex]);
            this.imagePreviewInfoList.splice(this.currentPreviewIndex, 1);
        } else if (this.saveImageCount > 0) {
            const index = this.currentPreviewIndex - this.imagePreviewInfoList.length;
            component.advAppAPIService.aiDBSvcClient.deleteSeriesImage(this.seriesUID, index);
            this.saveImageCount -= 1;
        }

        // no image ,clear image display
        if (this.imagePreviewInfoList.length === 0 && this.saveImageCount === 0) {
            this.currentPreviewIndex = -1;
            this.clearPreviewCell();
            return;
        }
        // if the last image ,show first image
        if (this.currentPreviewIndex > this.imagePreviewInfoList.length + this.saveImageCount - 1) {
            this.currentPreviewIndex = 0;
        }

        this.getCurrentImageTypeIndex();
        if (this.currentPreviewIndex < this.imagePreviewInfoList.length) {
            this.clearPreviewCell();
            const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
            RapidResultsHelper.sendPreviewCommandToBE(this.imagePreviewInfoList, this.currentPreviewIndex, commandSender);
            // this.refreshBottomLeftInfo();
        } else {
            if (this.saveImageCount == 0) {
                component.toastSvc.warning('没有自定义保存图像');
            } else {
                this.getSavedImageData(this.seriesUID, this.currentPreviewIndex - this.imagePreviewInfoList.length);
            }
        }
    }

    public naviToUserSavedImage(): void {
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        if (this.saveImageCount <= 0) {
            component.toastSvc.warning('没有自定义保存图像');
            return;
        }
        this.currentPreviewIndex = this.imagePreviewInfoList.length;
        this.getSavedImageData(this.seriesUID, 0);
    }

    // 设置下拉列表的所有模板名
    setTemplateNames(): void {
        this.allTemplates.forEach(temp => {
            this.templateNames.push(temp.name);
        });
    }

    switchTemplate(name: string): void {
        this.currentTemplateName = name;
        if (this.templateUnsaved) {
            this.showQuitModal = true;
            this.quitMode = 2;
        } else {
            this.doSelectTemplate(name);
        }
    }

    // 选择下拉列表中的模板名，并选中对应模板，更新预览状态
    doSelectTemplate(name: string): void {
        // 如果有对应的模板，直接选中
        for (const temp of this.allTemplates) {
            if (name === temp.name) {
                this.currentTemplate = temp;
                break;
            }
        }
        // 根据选中的模板更新预览状态
        const states = JSON.parse(this.currentTemplate.template);
        let version = states.version;
        if (version) {
            this.vrChecked = states.vr.isChecked;
            this.vrFixedImageInfo = states.vr.fixedImageInfo;  //angle为带isChecked属性的list
            this.vrCircleImageInfo = states.vr.circleImageInfo;
            this.vrMode = states.vr.option;
            this.vrImageInfo = this.vrMode == 0 ? this.vrFixedImageInfo : this.vrCircleImageInfo;
            this.vrLrNum = states.vr.lrPreNum;
            this.vrAuNum = states.vr.auPreNum;
            this.vrLrNumList = states.vr.lrPreNumList;
            this.vrAuNumList = states.vr.auPreNumList;

            this.vrTreeChecked = states.vrTree.isChecked;
            this.vrTreeFixedImageInfo = states.vrTree.fixedImageInfo;
            this.vrTreeCircleImageInfo = states.vrTree.circleImageInfo;
            this.vrTreeMode = states.vrTree.option;
            this.vrTreeImageInfo = this.vrTreeMode == 0 ? this.vrTreeFixedImageInfo : this.vrTreeCircleImageInfo;
            this.vrTreeLrNum = states.vrTree.lrPreNum;
            this.vrTreeAuNum = states.vrTree.auPreNum;
            this.vrTreeLrNumList = states.vrTree.lrPreNumList;
            this.vrTreeAuNumList = states.vrTree.auPreNumList;

            this.mipChecked = states.mip.isChecked;
            this.mipFixedImageInfo = states.mip.fixedImageInfo;
            this.mipCircleImageInfo = states.mip.circleImageInfo;
            this.mipMode = states.mip.option;
            this.mipImageInfo = this.mipMode == 0 ? this.mipFixedImageInfo : this.mipCircleImageInfo;
            this.mipLrNum = states.mip.lrPreNum;
            this.mipAuNum = states.mip.auPreNum;
            this.mipLrNumList = states.mip.lrPreNumList;
            this.mipAuNumList = states.mip.auPreNumList;

            this.cprChecked = states.cpr.isChecked;
            this.cprNodeValue = states.cpr.cprNodeValue;
            this.numCPR = parseInt(states.cpr.cprNum, 0);
            this.cprNumList = states.cpr.cprNumList;

            this.scprChecked = states.scpr.isChecked;
            this.scprNodeValue = states.scpr.scprNodeValue;
            this.numSCPR = parseInt(states.scpr.scprNum, 0);
            this.scprNumList = states.scpr.scprNumList;

            this.tabImageType = states.order;
        } else {
            //兼容老版本模板
            this.vrChecked = states.vr;
            this.vrFixedImageInfo = this.heartSvc.imageInfoDict.VR;  //angle为带isChecked属性的list
            this.vrMode = 0;
            this.vrImageInfo = this.vrFixedImageInfo;
            this.vrLrNum = JSON.parse(this.heartSvc.defaultTemplate).vr.lrPreNum;
            this.vrAuNum = JSON.parse(this.heartSvc.defaultTemplate).vr.auPreNum;
            this.vrLrNumList = JSON.parse(this.heartSvc.defaultTemplate).vr.lrPreNumList;
            this.vrAuNumList = JSON.parse(this.heartSvc.defaultTemplate).vr.auPreNumList;

            this.vrTreeChecked = true; // vrtree默认选中
            this.vrTreeFixedImageInfo = this.heartSvc.imageInfoDict.VRTree;
            this.vrTreeImageInfo = this.vrTreeFixedImageInfo;
            this.vrTreeMode = 0;
            this.vrTreeLrNum = JSON.parse(this.heartSvc.defaultTemplate).vrTree.lrPreNum;
            this.vrTreeAuNum = JSON.parse(this.heartSvc.defaultTemplate).vrTree.auPreNum;
            this.vrTreeLrNumList = JSON.parse(this.heartSvc.defaultTemplate).vrTree.lrPreNumList;
            this.vrTreeAuNumList = JSON.parse(this.heartSvc.defaultTemplate).vrTree.auPreNumList;

            this.mipChecked = states.mip;
            this.mipFixedImageInfo = this.heartSvc.imageInfoDict.MIP;
            this.mipImageInfo = this.mipFixedImageInfo;
            this.mipMode = 0;
            this.mipLrNum = JSON.parse(this.heartSvc.defaultTemplate).mip.lrPreNum;
            this.mipAuNum = JSON.parse(this.heartSvc.defaultTemplate).mip.auPreNum;
            this.mipLrNumList = JSON.parse(this.heartSvc.defaultTemplate).mip.lrPreNumList;
            this.mipAuNumList = JSON.parse(this.heartSvc.defaultTemplate).mip.auPreNumList;

            this.cprChecked = states.cpr;
            this.cprNodeValue = this.updateOldNodeVal(states, 'cpr');
            this.numCPR = states.cprNum;
            this.cprNumList = JSON.parse(this.heartSvc.defaultTemplate).cpr.cprNumList;

            this.scprChecked = states.scpr;
            this.scprNodeValue = this.updateOldNodeVal(states, 'scpr');
            this.numSCPR = states.scprNum;
            this.scprNumList = JSON.parse(this.heartSvc.defaultTemplate).scpr.scprNumList;

            this.tabImageType = JSON.parse(this.heartSvc.defaultTemplate).order;
        }
        // update allchecked status
        for (let type of ['vrTree', 'vr', 'mip']) {
            this.updateSingleChecked(type);
        }

        this.templateUnsaved = false;
    }

    addTemplateName(value: string) {
        this.templateUnsaved = true;
        if (value) {
            this.currentTemplateName = value;
        }
    }

    // 在下拉列表中添加模板名
    addTemplate(): void {
        if (!this.currentTemplateName) {
            return;
        }
        // 如果存在同名
        if (this.templateNames.indexOf(this.currentTemplateName) > -1) {
            this.doSelectTemplate(this.currentTemplateName);
            return;
        }
        // 如果没有同名
        this.templateNames = [...this.templateNames, this.currentTemplateName];
        // 添加对应模板
        this.currentTemplate = new CoronarySaveTemplateDto();
        // 显然新建的模板没有PID
        this.currentTemplate.name = this.currentTemplateName;
        // 采用默认模板
        this.currentTemplate.template = this.heartSvc.defaultTemplate;
        this.allTemplates.push(this.currentTemplate);
        this.doSelectTemplate(name);
        this.assembleImagePreviewInfoList();
    }

    // 保存 新建的 / 更改的 模板到数据库
    public saveTemplate(): void {
        this.templateUnsaved = false;
        const component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.advAppAPIService.aiDBSvcClient.updateCoronarySaveTemplate(this.currentTemplate).then(() => {
            component.advAppAPIService.aiDBSvcClient.getCoronarySaveTemplates().then(savedTemplates => {
                // 新创建的模板没有pid
                if (!this.currentTemplate.pid) {
                    // 取出保存后的模板（主要是取出PID）
                    for (const temp of savedTemplates) {
                        if (this.currentTemplate.name === temp.name) {
                            this.currentTemplate.pid = temp.pid;
                        }
                    }
                }
            });
        });
    }

    // 删除模板
    public deleteTemplate(): void {
        // default 不删除
        if (this.currentTemplate.name === 'default1') {
            return;
        }
        // 从列表中删除
        for (let i = 0; i < this.allTemplates.length; i++) {
            if (this.allTemplates[i].name === this.currentTemplate.name) {
                this.allTemplates.splice(i, 1);
                this.templateNames.splice(i, 1);
                break;
            }
        }

        // 数据库已有的模板(有pid的模板)，还要从数据库中删除
        if (this.currentTemplate.pid) {
            const component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
            component.advAppAPIService.aiDBSvcClient.deleteCoronarySaveTemplate(this.currentTemplate.pid);
        }

        if (this.allTemplates.length > 0) {
            this.currentTemplate = this.allTemplates[0];
            this.currentTemplateName = this.currentTemplate.name;
            this.doSelectTemplate(this.currentTemplateName);
        }
    }

    // 更新当前模板 将保存按钮置为可用
    updateTemplate(): void {
        let templateJson = JSON.parse(this.currentTemplate.template)
        if (!templateJson.version) {
            //old template
            templateJson = JSON.parse(this.heartSvc.defaultTemplate)
        }
        templateJson.vr.isChecked = this.vrChecked;
        templateJson.vr.fixedImageInfo = this.vrFixedImageInfo;
        templateJson.vr.circleImageInfo = this.vrCircleImageInfo;
        templateJson.vr.option = this.vrMode;
        templateJson.vr.lrPreNum = this.vrLrNum;
        templateJson.vr.auPreNum = this.vrAuNum;
        templateJson.vr.lrPreNumList = this.vrLrNumList;
        templateJson.vr.auPreNumList = this.vrAuNumList;

        templateJson.vrTree.isChecked = this.vrTreeChecked;
        templateJson.vrTree.fixedImageInfo = this.vrTreeFixedImageInfo;
        templateJson.vrTree.circleImageInfo = this.vrTreeCircleImageInfo;
        templateJson.vrTree.option = this.vrTreeMode;
        templateJson.vrTree.lrPreNum = this.vrTreeLrNum;
        templateJson.vrTree.auPreNum = this.vrTreeAuNum;
        templateJson.vrTree.lrPreNumList = this.vrTreeLrNumList;
        templateJson.vrTree.auPreNumList = this.vrTreeAuNumList;

        templateJson.mip.isChecked = this.mipChecked;
        templateJson.mip.fixedImageInfo = this.mipFixedImageInfo;
        templateJson.mip.circleImageInfo = this.mipCircleImageInfo;
        templateJson.mip.option = this.mipMode;
        templateJson.mip.lrPreNum = this.mipLrNum;
        templateJson.mip.auPreNum = this.mipAuNum;
        templateJson.mip.lrPreNumList = this.mipLrNumList;
        templateJson.mip.auPreNumList = this.mipAuNumList;

        templateJson.cpr.isChecked = this.cprChecked;
        templateJson.cpr.cprNodeValue = this.cprNodeValue;
        templateJson.cpr.cprNum = this.numCPR;
        templateJson.cpr.cprNumList = this.cprNumList;

        templateJson.scpr.isChecked = this.scprChecked;
        templateJson.scpr.scprNodeValue = this.scprNodeValue;
        templateJson.scpr.scprNum = this.numSCPR;
        templateJson.scpr.scprNumList = this.scprNumList;

        templateJson.order = this.tabImageType;
        this.currentTemplate.template = JSON.stringify(templateJson);

        // 更新列表
        for (let i = 0; i < this.allTemplates.length; i++) {
            if (this.currentTemplate.name === this.allTemplates[i].name) {
                this.allTemplates[i] = this.currentTemplate;
            }
        }

        this.templateUnsaved = true;
    }

    closeShowNoFilming(): void {
        this.isShowNoFilming = false;
    }
    showProgress(content: string): void {
        this.isHiddenProgress = false;
        this.canAllPageResponse = false;
        this.savePercent = 0;
        this.progressContent = content;
    }
    hideProgress(): void {
        this.isHiddenProgress = true;
        this.canAllPageResponse = true;
    }

    /**
     * 接收子组件的值
     * @param $event 
     * @param type 
     */
    getOutputInfo($event, type) {
        //console.log('vr', event, type);
        let angleInfo = JSON.parse($event);
        if (type == 'vr') {
            this.angleInfo.vr = angleInfo;
        }
        if (type == 'vrTree') {
            this.angleInfo.vrTree = angleInfo;
        }
        if (type == 'mip') {
            this.angleInfo.mip = angleInfo;
        }
        this.addItem(type);
    }

    /**
     * 
     * @param type 根据类型增加固定角度
     */
    addItem(type: string) {
        let addItem = '';
        if (type == 'vr' && this.angleInfo.vr) {
            let angleInfo: any = this.angleInfo.vr;
            addItem += (angleInfo.lrMode + angleInfo.lrValue + ' ' + angleInfo.auMode + angleInfo.auValue);

            if (this.vrFixedImageInfo.map(item => item['name']).indexOf(addItem) === -1)
                this.vrFixedImageInfo.push({ name: addItem, isChecked: true, direction: [], canDelete: true });
        }
        if (type == 'vrTree' && this.angleInfo.vrTree) {
            let angleInfo: any = this.angleInfo.vrTree;
            addItem += (angleInfo.lrMode + angleInfo.lrValue + ' ' + angleInfo.auMode + angleInfo.auValue);
            if (this.vrTreeFixedImageInfo.map(item => item['name']).indexOf(addItem) === -1)
                this.vrTreeFixedImageInfo.push({ name: addItem, isChecked: true, direction: [], canDelete: true });
        }
        if (type == 'mip' && this.angleInfo.mip) {
            let angleInfo: any = this.angleInfo.mip;
            addItem += (angleInfo.lrMode + angleInfo.lrValue + ' ' + angleInfo.auMode + angleInfo.auValue);
            if (this.mipFixedImageInfo.map(item => item['name']).indexOf(addItem) === -1)
                this.mipFixedImageInfo.push({ name: addItem, isChecked: true, direction: [], canDelete: true });
        }
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    /**
     * 增加cpr/scpr的图幅 
     * @param type 
     */
    addCprOrScprNum(input: any, type: string) {
        const value = parseInt(input);
        if (isNaN(value))
            return;
        switch (type) {
            case 'cpr':
                if (this.cprNumList.indexOf(value) === -1) {
                    this.cprNumList = [...this.cprNumList, value].sort(function (a, b) { return a - b });
                }
                break;
            case 'scpr':
                if (this.scprNumList.indexOf(value) === -1) {
                    this.scprNumList = [...this.scprNumList, value].sort(function (a, b) { return a - b });
                }
                break;
            default:
                return;
        }
        this.assembleImagePreviewInfoList();
        this.updateTemplate();
    }

    /**
     * 删除cpr/scpr的图幅
     */
    deleteCprNum(item, type) {
        let idx = -1;
        switch (type) {
            case 'cpr':
                idx = this.cprNumList.indexOf(item);
                if (idx > -1) {
                    this.cprNumList.splice(idx, 1);
                    if (item == this.numCPR)
                        this.numCPR = this.cprNumList.length > 0 ? this.cprNumList[0] : null;
                }

                break;
            case 'scpr':
                idx = this.scprNumList.indexOf(item);
                if (idx > -1) {
                    this.scprNumList.splice(idx, 1);
                    if (item == this.numSCPR)
                        this.numSCPR = this.scprNumList.length > 0 ? this.scprNumList[0] : null;
                }

                break;
            default:
                return;
        }
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    addRotateNum(input: any, coronaryType: string, rotateType: string) {
        if (!this.validateInteger(input))
            return;
        const value = parseInt(input);
        switch (coronaryType) {
            case 'vr':
                if (rotateType == 'lr' && this.vrLrNumList.indexOf(value) === -1) {
                    this.vrLrNumList = [...this.vrLrNumList, value].sort(function (a, b) { return a - b });
                }
                if (rotateType == 'au' && this.vrAuNumList.indexOf(value) === -1) {
                    this.vrAuNumList = [...this.vrAuNumList, value].sort(function (a, b) { return a - b });
                }
            case 'vrTree':
                if (rotateType == 'lr' && this.vrTreeLrNumList.indexOf(value) === -1) {
                    this.vrTreeLrNumList = [...this.vrTreeLrNumList, value].sort(function (a, b) { return a - b });
                }
                if (rotateType == 'au' && this.vrTreeAuNumList.indexOf(value) === -1) {
                    this.vrTreeAuNumList = [...this.vrTreeAuNumList, value].sort(function (a, b) { return a - b });
                }
                break;
            case 'mip':
                if (rotateType == 'lr' && this.mipLrNumList.indexOf(value) === -1) {
                    this.mipLrNumList = [...this.mipLrNumList, value].sort(function (a, b) { return a - b });
                }
                if (rotateType == 'au' && this.mipAuNumList.indexOf(value) === -1) {
                    this.mipAuNumList = [...this.mipAuNumList, value].sort(function (a, b) { return a - b });
                }
                break;
            default:
                return;
        }
    }

    /**
     * 判断是否为0-360的正整数
     * @param value input value 
     */
    validateInteger(value: string): boolean {
        const reg = /^(?:[1-9]\d?|[1-2][0-9]\d|3[0-5]\d|360)$/; //isPositiveInteger beteween 0-360
        return ((!isNaN(+value) && reg.test(value)) || value === '');
    }

    /**
     * cpr/scpr树形菜单变化时响应
     * @param $event 
     * @param type 
     */
    onTreeChange($event, type) {
        if (type != 'cpr' && type != 'scpr')
            return;
        if (type == 'cpr') {
            this.cprNodeValue = $event.keys;
            console.log('cprNode', this.cprNodeValue);
        }
        if (type == 'scpr') {
            this.scprNodeValue = $event.keys;
            console.log('scprNode', this.scprNodeValue);
        }
        // this.updateDisContent(vrTreeCheckedImageInfo, this.vrTreeFixedImageInfo)
        this.assembleImagePreviewInfoList();
        this.updateTemplate();
    }

    /**
     * 
     * @param imageInfo 将string型转为number角度 LAO30 CAU20 -> [30 20]
     */
    parseImageInfo(imageInfo: string) {
        let angleSplit = imageInfo.split(' ');
        const angleTypeLr = angleSplit[0].substring(0, 3);
        const angleValueLr = angleSplit[0].substring(3);
        const angleTypeAu = angleSplit[1].substring(0, 3);
        const angleValueAu = angleSplit[1].substring(3);
        let angleLr = angleTypeLr == 'LAO' ? parseInt(angleValueLr) : 360 - parseInt(angleValueLr);
        let angleAu = angleTypeAu == 'CAU' ? parseInt(angleValueAu) : 360 - parseInt(angleValueAu);
        return [angleLr, angleAu];
    }

    // vr vrtree mip单选切换时或旋转输入改变时触发 
    async modeChanged(type, switchRadio) {
        let batchParam = this.getVrBatchParam();
        if (await this.getVRBatchAngle(batchParam)) {
            switch (type) {
                case 'vr':
                    if (switchRadio) {
                        if (this.vrMode == 0) {
                            this.vrImageInfo = this.vrFixedImageInfo;
                        } else {
                            this.vrImageInfo = this.updateImageInfo(type);
                        }
                    } else {
                        this.vrImageInfo = this.updateImageInfo(type);
                    }
                    break;
                case 'vrTree':
                    if (switchRadio) {
                        if (this.vrTreeMode == 0) {
                            this.vrTreeImageInfo = this.vrTreeFixedImageInfo;
                        } else {
                            this.vrTreeImageInfo = this.updateImageInfo(type);
                        }
                    } else {
                        this.vrTreeImageInfo = this.updateImageInfo(type);
                    }
                    break;
                case 'mip':
                    if (switchRadio) {
                        if (this.mipMode == 0) {
                            this.mipImageInfo = this.mipFixedImageInfo;
                        } else {
                            this.mipImageInfo = this.updateImageInfo(type);
                        }
                    } else {
                        this.mipImageInfo = this.updateImageInfo(type);
                    }
                    break;
                default:
                    return;
            }
        }
        this.assembleImagePreviewInfoList();
        this.updateTemplate();
    }

    onNumChange(type) {
        this.updateDelInfoList(type);//清空scpr或cpr的删除item
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    // 根据旋转角度生成imageInfo
    updateImageInfo(type) {
        let imageInfoList = [];
        switch (type) {
            case 'vr':
                imageInfoList = this.getImageInfoList(this.vrBatchAngle);
                this.vrCircleImageInfo = imageInfoList;
                break;
            case 'vrTree':
                imageInfoList = this.getImageInfoList(this.vrTreeBatchAngle);
                this.vrTreeCircleImageInfo = imageInfoList;
                break;
            case 'mip':
                imageInfoList = this.getImageInfoList(this.mipBatchAngle);
                this.mipCircleImageInfo = imageInfoList;
                break;
            default:
                return;
        }
        return imageInfoList;
    }

    /**
     * 
     * @param batchAngle list of batch Angle, exp:[lrAngle auAngle upX upY upZ]
     */
    getImageInfoList(batchAngle) {
        let list = [];
        if (batchAngle.length == 0)
            return list;
        for (let item of batchAngle) {
            if (item.length != 5)
                return;
            let parseBatchAngle = this.parseBatchAngle(item);
            list.push({ name: parseBatchAngle[0], isChecked: true, direction: parseBatchAngle[1], canDelete: false });
        }
        return list;
    }

    /**
     * 
     * @param node 将树形控件的节点转化为单节点列表
     */
    parseNode(node: string[]): string[] {
        let nodeList: string[] = [];
        if (node.indexOf('_LAD') !== -1) {
            nodeList = nodeList.concat(this.heartSvc.nodeStructure._LAD);
        }
        if (node.indexOf('_LCX') !== -1) {
            nodeList = nodeList.concat(this.heartSvc.nodeStructure._LCX);
        }
        if (node.indexOf('_RCA') !== -1) {
            nodeList = nodeList.concat(this.heartSvc.nodeStructure._RCA);
        }
        for (let item of node) {
            if (item != '_LAD' && item != '_LCX' && item != '_RCA') {
                nodeList.push(item);
            }
        }
        return nodeList;
    }

    /**
     * 切换radio时更新清空的list
     * @param type 类型cpr/scpr
     */
    updateDelInfoList(type) {
        let tmpDelPreviewInfoList = []
        let startIdx = 0;
        if (type !== 'cpr' && type !== 'scpr')
            return;
        if (type == 'cpr') {
            startIdx = startImageIndex.cpr;
        }
        if (type == 'scpr') {
            startIdx = startImageIndex.scpr;
        }
        for (let item of this.delPreviewInfoList) {
            if (item.imageIndex < startIdx || item.imageIndex >= startIdx + 1000) {
                tmpDelPreviewInfoList.push(item);
            }
        }
        this.delPreviewInfoList = tmpDelPreviewInfoList;
    }

    /**
     * 获取vr batch角度
     */
    async getVRBatchAngle(batchParam: string): Promise<boolean> {
        let res = true;
        try {
            let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            let resultObject = await component.viewerControl.commandSender.syncSendCommonOperation(new TextEncoder().encode(batchParam), "GetVRBatchAngle", '');
            let decoder = new TextDecoder();
            let result = decoder.decode(resultObject);
            let resArray = this.getBatchResult(result);
            this.vrTreeBatchAngle = resArray[0];
            this.vrBatchAngle = resArray[1];
            this.mipBatchAngle = resArray[2];
            return res;
        } catch (error) {
            return false;
        }
    }

    clearPreviewCell(): void {
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        const cell = workflow.getCell('Rapid_Results_Preview_Cell1');
        if (cell) {
            cell.actionManager.setAction(Viewer.MouseButtonType.Middle, Viewer.ActionTypes.Windowing);
            cell.actionManager.setAction(Viewer.MouseButtonType.Right, Viewer.ActionTypes.Zoom);
            cell.displayData.imageText.isVisible = true;
            cell.displayData.orientation.isVisible = true;

            const canvasContext = cell.canvas.getContext('2d');
            canvasContext.clearRect(0, 0, cell.canvas.width, cell.canvas.height);
        }
    }

    onSelectChange(type): void {
        console.log('vr:', this.listVrImageInfo)
    }

    /**
     * 全选时更新
     * @param type 类型
     */
    updateAllChecked(type): void {
        switch (type) {
            case 'vrTree':
                this.vrTreeIndeterminate = false;
                if (this.vrTreeAllChecked) {
                    this.vrTreeFixedImageInfo.forEach(ele => {
                        ele['isChecked'] = true;
                    })
                    this.vrTreeDisplayContent = '全选';
                } else {
                    this.vrTreeFixedImageInfo.forEach(ele => {
                        ele['isChecked'] = false;
                    })
                    this.vrTreeDisplayContent = '无';
                }
                break;
            case 'vr':
                this.vrIndeterminate = false;
                if (this.vrAllChecked) {
                    this.vrFixedImageInfo.forEach(ele => {
                        ele['isChecked'] = true;
                    })
                    this.vrDisplayContent = '全选';
                } else {
                    this.vrFixedImageInfo.forEach(ele => {
                        ele['isChecked'] = false;
                    })
                    this.vrDisplayContent = '无';
                }
                break;
            case 'mip':
                this.mipIndeterminate = false;
                if (this.mipAllChecked) {
                    this.mipFixedImageInfo.forEach(ele => {
                        ele['isChecked'] = true;
                    })
                    this.mipDisplayContent = '全选';
                } else {
                    this.mipFixedImageInfo.forEach(ele => {
                        ele['isChecked'] = false;
                    })
                    this.mipDisplayContent = '无';
                }
                break;
            default:
                return;
        }
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    /**
     * checkbox切换时更新
     * @param type 类型
     */
    updateSingleChecked(type): void {
        switch (type) {
            case 'vrTree':
                let vrTreeCheckedImageInfo = this.vrTreeFixedImageInfo.filter(function (item) {
                    return item['isChecked']
                });
                if (vrTreeCheckedImageInfo.length == this.vrTreeFixedImageInfo.length) {
                    this.vrTreeAllChecked = true;
                    this.vrTreeIndeterminate = false;
                } else {
                    if (vrTreeCheckedImageInfo.length == 0) {
                        this.vrTreeAllChecked = false;
                        this.vrTreeIndeterminate = false;
                    } else {
                        this.vrTreeIndeterminate = true;
                    }
                }
                this.vrTreeDisplayContent = this.updateDisContent(vrTreeCheckedImageInfo, this.vrTreeFixedImageInfo)
            case 'vr':
                let vrCheckedImageInfo = this.vrFixedImageInfo.filter(function (item) {
                    return item['isChecked']
                });
                if (vrCheckedImageInfo.length == this.vrFixedImageInfo.length) {
                    this.vrAllChecked = true;
                    this.vrIndeterminate = false;
                } else {
                    if (vrCheckedImageInfo.length == 0) {
                        this.vrAllChecked = false;
                        this.vrIndeterminate = false;
                    } else {
                        this.vrIndeterminate = true;
                    }
                }
                this.vrDisplayContent = this.updateDisContent(vrCheckedImageInfo, this.vrFixedImageInfo);
                break;
            case 'mip':
                let mipCheckedImageInfo = this.mipFixedImageInfo.filter(function (item) {
                    return item['isChecked']
                });
                if (mipCheckedImageInfo.length == this.mipFixedImageInfo.length) {
                    this.mipAllChecked = true;
                    this.mipIndeterminate = false;
                } else {
                    if (mipCheckedImageInfo.length == 0) {
                        this.mipAllChecked = false;
                        this.mipIndeterminate = false;
                    } else {
                        this.mipIndeterminate = true;
                    }
                }
                this.mipDisplayContent = this.updateDisContent(mipCheckedImageInfo, this.mipFixedImageInfo);
                break;
            default:
                return;
        }
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    /**
     * 固定角度下拉option的删除
     * @param type 
     * @param option 删除的具体项
     */
    deleteOption(type, option): void {
        let idx = -1;
        switch (type) {
            case 'vrTree':
                idx = this.vrTreeFixedImageInfo.indexOf(option);
                if (idx > -1)
                    this.vrTreeFixedImageInfo.splice(idx, 1);
                break;
            case 'vr':
                idx = this.vrFixedImageInfo.indexOf(option);
                if (idx > -1)
                    this.vrFixedImageInfo.splice(idx, 1);
                break;
            case 'mip':
                idx = this.mipFixedImageInfo.indexOf(option);
                if (idx > -1)
                    this.mipFixedImageInfo.splice(idx, 1);
                break;
            default:
                return;
        }
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    /**
     * 更新固定角度输入下拉框的文字
     */
    updateDisContent(checkedInfo: object[], allInfo: object[]): string {
        let content = '';
        if (checkedInfo.length === allInfo.length) {
            content = '全选';
        } else {
            if (checkedInfo.length == 0)
                content = '无';
            if (checkedInfo.length == 1)
                content = checkedInfo[0]['name'];
            if (checkedInfo.length > 1)
                content = checkedInfo[0]['name'] + '等';
        }
        return content;
    }

    /**
     * 更新老模板的树节点
     * @param states 
     * @param type 类型
     */
    updateOldNodeVal(states: any, type: string): string[] {
        let res = [];
        if (type != 'cpr' && type != 'scpr')
            return res;
        if (type == 'cpr') {
            if (states.LADcpr && states.LCXcpr && states.RCAcpr && states.Othercpr)
                res = ['_LAD', '_RCA', '_LCX'];
            else {
                // othercpr未选默认
                if (states.LADcpr) res.push('LAD');
                if (states.LCXcpr) res.push('LCX');
                if (states.RCAcpr) res.push('RCA');
            }
        }
        if (type == 'scpr') {
            if (states.LADscpr && states.LCXscpr && states.RCAscpr && states.Otherscpr)
                res = ['_LAD', '_RCA', '_LCX'];
            else {
                // othercpr未选默认
                if (states.LADscpr) res.push('LAD');
                if (states.LCXscpr) res.push('LCX');
                if (states.RCAscpr) res.push('RCA');
            }
        }
        return res;
    }

    /**
     * 获取vr batch角度的参数
     */
    getVrBatchParam(): string {
        let res = '';
        if (this.vrTreeMode == 0) {
            res += '0,0';
        } else {
            res += this.vrTreeLrNum + ',' + this.vrTreeAuNum;
        }
        res += '|';
        if (this.vrMode == 0) {
            res += '0,0';
        } else {
            res += this.vrLrNum + ',' + this.vrAuNum;
        }
        res += '|';
        if (this.mipMode == 0) {
            res += '0,0';
        } else {
            res += this.mipLrNum + ',' + this.mipAuNum;
        }
        return res;
    }

    /**
     * 分割vr batch返回的结果
     */
    getBatchResult(result: string): string[][] {
        let res = [];
        let resSplit = result.split('|');
        for (let i = 0; i < resSplit.length; i++) {
            let subRes = [];
            if (isNull(resSplit[i]) || resSplit[i].length == 0) {
                res.push(subRes);
                continue;
            }
            for (let j = 0; j < resSplit[i].split(',').length; j += 5) {
                subRes.push(resSplit[i].split(',').slice(j, j + 5));
            }
            res.push(subRes);
        }
        return res;
    }

    parseBatchAngle(batchAngle: string[]) {
        let name = '';
        name += parseInt(batchAngle[0]) >= 0 ? 'LAO' + Math.abs(parseInt(batchAngle[0])) : 'RAO' + Math.abs(parseInt(batchAngle[0]));
        name += ' ';
        name += parseInt(batchAngle[1]) >= 0 ? 'CAU' + Math.abs(parseInt(batchAngle[1])) : 'CRA' + Math.abs(parseInt(batchAngle[1]));
        let vec = [parseFloat(batchAngle[2]), parseFloat(batchAngle[3]), parseFloat(batchAngle[4])];
        return [name, vec];
    }

    changeRotateNum(coronaryType: string): void {
        if ((coronaryType == 'vr' && this.vrMode == 1) || (coronaryType == 'vrTree' && this.vrTreeMode == 1) || (coronaryType == 'mip' && this.mipMode == 1))
            this.modeChanged(coronaryType, false);
    }

    deleteNum(item, coronaryType: string, rotateType: string): void {
        const value = item;
        switch (coronaryType) {
            case 'vr':
                if (rotateType == 'lr' && this.vrAuNumList.indexOf(value) !== -1) {
                    this.vrLrNumList = this.removeElement(this.vrLrNumList, value);
                    if (value === this.vrLrNum)
                        this.vrLrNum = this.vrLrNumList[0];
                }
                if (rotateType == 'au' && this.vrAuNumList.indexOf(value) !== -1) {
                    this.vrAuNumList = this.removeElement(this.vrAuNumList, value);
                    if (value === this.vrAuNum)
                        this.vrAuNum = this.vrAuNumList[0];
                }
            case 'vrTree':
                if (rotateType == 'lr' && this.vrTreeLrNumList.indexOf(value) !== -1) {
                    this.vrTreeLrNumList = this.removeElement(this.vrTreeLrNumList, value);
                    if (value === this.vrTreeLrNum)
                        this.vrTreeLrNum = this.vrTreeLrNumList[0];
                }
                if (rotateType == 'au' && this.vrTreeAuNumList.indexOf(value) !== -1) {
                    this.vrTreeAuNumList = this.removeElement(this.vrTreeAuNumList, value);
                    if (value === this.vrTreeAuNum)
                        this.vrTreeAuNum = this.vrTreeAuNumList[0];
                }
                break;
            case 'mip':
                if (rotateType == 'lr' && this.mipLrNumList.indexOf(value) !== -1) {
                    this.mipLrNumList = this.removeElement(this.mipLrNumList, value);
                    if (value === this.mipLrNum)
                        this.mipLrNum = this.mipLrNumList[0];
                }
                if (rotateType == 'au' && this.mipAuNumList.indexOf(value) !== -1) {
                    this.mipAuNumList = this.removeElement(this.mipAuNumList, value);
                    if (value === this.mipAuNum)
                        this.mipAuNum = this.mipAuNumList[0];
                }
                break;
            default:
                return;
        }
        this.updateTemplate();
        this.assembleImagePreviewInfoList();
    }

    removeElement(list, val): void {
        const index = list.indexOf(val);
        if (index > -1) {
            list.splice(index, 1)
        }
        return list;
    }

}

