import {
    Injector, ElementRef, OnInit, ViewChild, Renderer2, OnDestroy, Component, HostListener, AfterViewInit, Output, EventEmitter, NgZone, ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';
import * as AppCommon from 'uih-appcommon';
import * as NetBase from 'uih-netbase';
import { AppHostType } from '../app-host-type.enum';
import { AdvAppServerAPIService, StudyListDto, StudyDto } from '../../../root/adv-app.server.api.service';
import { ProgressComponent } from '../../app-toolkit/progress/progress.component';
import { AppsConsts } from '../apps-consts';
import { AppConfigService } from '../app-config.service';

import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;
import { StudyListComponent, CommonToolsComponent, DynamicComponentHostComponent, IFrameHostComponent, AngularPerformanceHelper } from 'uih-apptoolkit';
import * as ServerAPI from 'uih-app-serverapi';
import { LoadSeriesStartOperation, SetLayoutOperation, LoadEndOperation } from './adv-app-base.component.paneloperations';

export enum FilmingMode {
    None,
    SingleTon,
    NewWindow,
    NewPage
}

@Component({
    selector: 'app-adv-app-base',
    templateUrl: './adv-app-base.component.html',
    styleUrls: ['./adv-app-base.component.css']
})

export class AdvAppBaseComponent implements OnInit, OnDestroy, AfterViewInit, ViewerKit.IMainComponent {

    @ViewChild('progress', { static: false }) progress?: ProgressComponent;
    @ViewChild('viewerControl', { static: false }) viewerControlElement?: ElementRef;
    @ViewChild('studyList', { static: false }) protected studyList?: StudyListComponent;
    @ViewChild('commonTools', { static: false }) commonTools?: CommonToolsComponent;
    @ViewChild('filmingHost', { static: false }) filmingHost?: DynamicComponentHostComponent;
    @Output() loadCompleteRequest = new EventEmitter<string>();

    viewerControl: Viewer.MedViewerControl = undefined;
    appName: string;
    studyInstanceUid: string;
    appHostType: AppHostType;
    advAppAPIService: AdvAppServerAPIService;
    appConfigService: AppConfigService;
    commandSender: Viewer.IMedViewerControlCommandSender;
    commandSenderFE: Viewer.IMedViewerControlCommandSender;
    proxyName: string;
    studyDTO: StudyDto = undefined;
    communicationProxy: NetBase.SignalRClientCommunicationProxy = undefined;
    mainModelContainerClient: ServerAPI.MainModelContainerClient = undefined;
    modelContainerConfig: ServerAPI.MainModelContainer = undefined;
    contextMenus: ServerAPI.ModelItem[] = [];

    protected stateFetchStudyDTO = false;
    protected stateFetchContainerConfig = false;
    protected stateProxyConnect = false;
    protected stateNGViewInit = false;
    protected stateInit = false;
    protected models: Map<string, { new(...args: any[]): AppCommon.AppModelBase }> = undefined;
    protected isDeviceSlow = false;

    public filmingMode: FilmingMode = FilmingMode.SingleTon;
    public relatedFilmingProxyName: string = '';
    public relatedFilmingUrl: string = '';
    public relatedFilmingWindow: Window = undefined;

    constructor(
        protected injector: Injector,
        protected route: ActivatedRoute,
        protected render: Renderer2,
        protected rootElement: ElementRef,
        protected zone: NgZone,
        protected changeDetector: ChangeDetectorRef,
        protected modelContainer: AppCommon.ModelContainer
    ) {
        // tslint:disable-next-line: deprecation
        console.log('AppComponentBase enter constructor');

        console.info(`AppComponentBase enter constructor ${AppCommon.DateTimeHelper.getTimeString()}`);

        AngularPerformanceHelper.zone = this.zone;
        this.isDeviceSlow = AppCommon.DeviceInformationHelper.getChromeVersion() < 50;

        this.appConfigService = this.injector.get(AppConfigService);
        this.advAppAPIService = this.injector.get(AdvAppServerAPIService);

        this.studyInstanceUid = this.route.snapshot.paramMap.get(AppsConsts.RoutePara_StudyInstanceUID);
        this.appName = AppsConsts.getAppNameByRoutPath(this.route.toString());
        this.proxyName = this.route.snapshot.paramMap.get(AppsConsts.RoutePara_ProxyName);
        const hostName = this.route.snapshot.paramMap.get(AppsConsts.RoutePara_HostType);
        this.appHostType = hostName === AppsConsts.RoutePara_HostType_WebHost ? AppHostType.Web : AppHostType.Native;

        this.models = this.buildModels();

        this.appConfigService.getConfig().then(response => {

            const configjson = response.json();
            this.advAppAPIService.baseUrl = configjson.serverAPIBaseUrl;
            this.mainModelContainerClient = new ServerAPI.MainModelContainerClient(this.advAppAPIService.baseUrl);
            this.startFetchs();
            this.waitForStatesReadyToInitialize();
        });

        console.log('AppComponentBase leave constructor');
    }

    protected startFetchs(): void {
        if (this.appHostType === AppHostType.Web) {
            if (this.studyInstanceUid !== AppsConsts.RoutePara_StudyInstanceUID_Invalid) {

                this.advAppAPIService.dicomClient.getStudyByUID(this.studyInstanceUid).then((studyDTO: StudyDto) => {
                    this.onStudyListLoaded(studyDTO);
                });
            } else {
                this.stateFetchStudyDTO = true;
            }
        }

        if (this.proxyName == 'InOpen') {
            alert('其他用户打开了这个检查，请等待该用户关闭');
            window.location.href = 'about:blank';
            window.close();
            return;
        }

        this.communicationProxy = new NetBase.SignalRClientCommunicationProxy(
            this.advAppAPIService.baseUrl + '/hub', this.isDeviceSlow);//, AngularPerformanceHelper.highPerformanceWrapper);
        this.communicationProxy.setName(this.proxyName);
        this.communicationProxy.onConnected = () => {
            this.onConnected();
        };
        this.communicationProxy.connect();

        this.mainModelContainerClient.getModelContainer(this.appName).then((modelContainerConfig: ServerAPI.MainModelContainer) => {

            this.stateFetchContainerConfig = true;
            this.modelContainerConfig = modelContainerConfig;

        }).catch((r) => {
            this.stateFetchContainerConfig = true;
        });
    }

    protected canInitialize(): boolean {
        return this.stateFetchContainerConfig && this.stateFetchStudyDTO && this.stateProxyConnect && this.stateNGViewInit;
    }

    waitForStatesReadyToInitialize() {
        while (!this.canInitialize()) {
            setTimeout(() => { this.waitForStatesReadyToInitialize(); }, 10);
            return;
        }
        this.initialize();
    }

    ngOnInit() {


        // this.studyList.ThumbnailWidth="100px";
    }

    protected refreshTimer?: any = undefined;
    ngAfterViewInit(): void {
        this.initStudylist();
        this.stateNGViewInit = true;
        if (this.commonTools) {
            this.commonTools.modelContainer = this.modelContainer;
        }
        if(!this.refreshTimer)
        {
            this.refreshTimer = setInterval(() => this.refresh(), 1000);
        }
    }

    refresh(): void {
      this.zone.run(() => this.changeDetector.detectChanges());
    }

    initStudylist() {

    }

    protected buildPanelCommandOperations(): AppCommon.IFunctionCollection {
        let collection = new AppCommon.FunctionCollection();
        collection.addFunction('LoadSeriesStart', LoadSeriesStartOperation);
        collection.addFunction('SetLayout', SetLayoutOperation);
        collection.addFunction('UpdateLoadingResults', LoadEndOperation);
        return collection;
    }

    protected buildCellCommandOperations(): AppCommon.IFunctionCollection {
        return new ViewerKit.CellCommandFunctionCollection();
    }

    protected buildModels(): Map<string, { new(...args: any[]): AppCommon.AppModelBase }> {
        const models = new Map<string, { new(...args: any[]): AppCommon.AppModelBase }>();
        models.set('RootUIModel', ViewerKit.RootUIModel);
        models.set('ResourceModel', ViewerKit.ResourceModel);
        models.set('LoadedDataModel', ViewerKit.LoadedDataModel);
        models.set('ModalityModel', ViewerKit.ModalityModel);
        models.set('CellWindowLevelModel', ViewerKit.CellWindowLevelModel);
        models.set('CellThicknessModel', ViewerKit.CellThicknessModel);
        models.set('CellPseudoColorModel', ViewerKit.CellPseudoColorModel);
        models.set('CellSSDGrayValueSettingsModel', ViewerKit.CellSSDGrayValueSettingsModel);
        models.set('UIResourceModel', ViewerKit.UIResourceModel);
        models.set('InputBindingModel', ViewerKit.InputBindingModel);
        models.set('VRContextMenu', ViewerKit.ControlAssemblyViewModel);
        models.set('MPRContextMenu', ViewerKit.ControlAssemblyViewModel);
        models.set('InteractivelySaveImageCommandViewModel', ViewerKit.InteractivelySaveImageCommandViewModel);
        models.set('InteractivelySaveDisplayCommandViewModel', ViewerKit.InteractivelySaveDisplayCommandViewModel);
        models.set('CommonToolsBackToPointerViewModel', ViewerKit.CommonToolsBackToPointerViewModel);
        models.set('PresetWindowingCommandViewModel', ViewerKit.PresetWindowingCommandViewModel);
        models.set('PageUpCommandViewModel', ViewerKit.PageUpCommandViewModel);
        models.set('PageDownCommandViewModel', ViewerKit.PageDownCommandViewModel);
        models.set('ChangeLayoutByDoubleClickCommandViewModel', ViewerKit.ChangeLayoutByDoubleClickCommandViewModel);
        models.set('ChangeCrossHairCommandViewModel', ViewerKit.ChangeCrossHairCommandViewModel);
        models.set('CommonToolsCommandViewModel', ViewerKit.CommonToolsCommandViewModel);
        models.set('ImageTextDisplayModeCommandViewModel', ViewerKit.ImageTextDisplayModeCommandViewModel);
        models.set('FilmingViewerControlCommandViewModel', ViewerKit.FilmingViewerControlCommandViewModel);
        models.set('SaveFilmingCommandViewModel', ViewerKit.SaveFilmingCommandViewModel);
        models.set('AutoSaveImageCommandViewModel', ViewerKit.AutoSaveImageCommandViewModel);
        models.set('AutoSaveDisplayCommandViewModel', ViewerKit.AutoSaveDisplayCommandViewModel);
        models.set('CellReportCommandViewModel', ViewerKit.CellReportCommandViewModel);
        models.set('DisplayReportCommandViewModel', ViewerKit.DisplayReportCommandViewModel);
        models.set('FilmingCommandViewModel', ViewerKit.FilmingCommandViewModel);
        models.set('PasteGraphicsCommandViewModel', ViewerKit.PasteGraphicsCommandViewModel);
        models.set('WorkflowModel', ViewerKit.AppWorkflow);
        return models;
    }

    protected registerInputBinding(): Viewer.KeyBoardHandler[] {
        const handlers: Viewer.KeyBoardHandler[] = [];

        const changeCrossHairCommand = new ViewerKit.ChangeCrossHairCommand();
        changeCrossHairCommand.modelContainer = this.modelContainer;
        handlers.push(changeCrossHairCommand);

        const deleteGraphicCommand = new ViewerKit.DeleteGraphicCommand();
        deleteGraphicCommand.modelContainer = this.modelContainer;
        handlers.push(deleteGraphicCommand);

        return handlers;
    }

    protected HandleWarningFromServer(warningInfo: string): void {
        alert(warningInfo);
    }

    protected initialize(): void {

        try {
            console.info('Enter AdvAppBaseComponent.initialize.');

            if (this.modelContainerConfig) {

                for (const modelConfig of this.modelContainerConfig.item) {
                    const ctor = this.models.get(modelConfig.name);
                    this.modelContainer.addModel(modelConfig.name, Reflect.construct(ctor, []));
                }
            } else {
                this.models.forEach((ctor, key) => { this.modelContainer.addModel(key, Reflect.construct(ctor, [])); });
            }

            let workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
            workflow.Initialize();

            const paneloperations = this.buildPanelCommandOperations();
            const panelOperationCommandHandler = new ViewerKit.PanelCommandHandler(this.modelContainer, paneloperations);
            this.communicationProxy.registerCommandHandler(13001, panelOperationCommandHandler);

            const celloperations = this.buildCellCommandOperations();
            const cellOpHandler = new ViewerKit.CellCommandHandler(this.modelContainer, celloperations);
            this.communicationProxy.registerCommandHandler(10109, cellOpHandler);

            this.communicationProxy.registerCommandHandler(20000, {
                handleCommand: (context: NetBase.WebCommandContext) => {
                    const reply = new NetBase.Reply();
                    let decoder = new TextDecoder();
                    let info = decoder.decode(context.sStringObject);
                    this.HandleWarningFromServer(info);
                    return reply;
                }
            }); //20000: 后端给前端发送的warning

            this.communicationProxy.registerCommandHandler(20001, {
                handleCommand: (context: NetBase.WebCommandContext) => {
                    const reply = new NetBase.Reply();
                    let decoder = new TextDecoder();
                    let info = decoder.decode(context.sStringObject);
                    this.HandleWarningFromServer(info);
                    this.communicationProxy.isSendHeartBeat = false;
                    return reply;
                }
            }); //20001: 后端给前端发送的特殊的warning：后端退出

            this.modelContainer.addModel('MainComponent', this);

            this.modelContainer.addModel('ImageText', this.advAppAPIService.imageTextClient);

            this.commandSender = new ViewerKit.SignalRCommandSender();
            this.commandSenderFE = new ViewerKit.EventCommandSender();

            this.modelContainer.addModel('CommandSender', this.commandSender);
            this.modelContainer.addModel('CommandSenderFE', this.commandSenderFE);
            this.commandSender.proxy = this.communicationProxy;
            this.commandSender.workflowName = this.appName;

            if (this.appHostType === AppHostType.Web) {
                //if (this.studyInstanceUid !== AppsConsts.RoutePara_StudyInstanceUID_Invalid) {

                //    this.advAppAPIService.dicomClient.getStudyByUID(this.studyInstanceUid).then((studyDTO: StudyDto) => {
                //        this.onStudyListLoaded(studyDTO);
                //    });
                //}
                //提升性能，这里注释
            } else {
                ViewerKit.CommandHelper.sendString(this.commandSender, '', ViewerKit.CommandHelper.FEInit);
            }

            this.viewerControl = new Viewer.MedViewerControl(this.render, this.viewerControlElement, this.commandSender, AngularPerformanceHelper.highPerformanceWrapper);
            this.registerInputBinding().forEach(handle => {
                this.viewerControl.registerKeyBoardEvent(handle);
            });

            this.modelContainer.addModel('MedViewerControl', this.viewerControl);
            this.viewerControl.initialize();
            this.viewerControl.isSupportMultipleSelection = true;
            this.initCells();
            this.addCommonEventListener();
            AppCommon.Messenger.on('layoutchanged', () => { this.OnLayoutChanged(); });

            window.addEventListener('resize', (e: any) => this.OnSizeChanged(e));
            this.viewerControlElement.nativeElement.addEventListener('drop', (e: any) => this.handleDropevent(e), false);

            this.initializeFilming();

            this.stateInit = true;
            console.info('Leave AdvAppBaseComponent.initialize.');
        } catch (error) {
            console.error(error);
            throw error; //yu.xiang: intialize 不允许出现错误，否则会导致无限循环
        }

    }

    protected async calculateFilmingUrl(): Promise<void> {
        this.relatedFilmingProxyName =
            await this.advAppAPIService.dispatcherClient.createClientProxyName(AppsConsts.App_Name_FilmingV2, this.studyInstanceUid);
        const childRoute = AppsConsts.generateChildRoute(
            AppsConsts.App_RootPath_FilmingV2, AppsConsts.RoutePara_HostType_WebHost, this.studyInstanceUid, this.relatedFilmingProxyName);
        this.relatedFilmingUrl = window.location.origin + '/' + 'app' + '/' + childRoute;
        return;
    }

    protected initFilmingWindow(): void {

        if (!this.stateNGViewInit) {
            setTimeout(() => {
                this.initFilmingWindow();
            }, 500);
            return;
        }

        if (!this.filmingHost) {
            console.error('this.filmingHost is null');
            return;
        }

        console.log(`enter stencil.initFilmingWindow with filming url: ${this.relatedFilmingUrl}`);
        this.filmingHost.componentType = IFrameHostComponent;
        this.filmingHost.loadDynamicComponent();
        (<IFrameHostComponent>this.filmingHost.instance).url = this.relatedFilmingUrl;
        (<IFrameHostComponent>this.filmingHost.instance).width = 1500;
        (<IFrameHostComponent>this.filmingHost.instance).height = 900;
    }
    protected async initializeFilming() {
        switch (this.filmingMode) {
            case FilmingMode.NewPage:

                if (this.appHostType === AppHostType.Web) {
                    await this.calculateFilmingUrl();
                    this.relatedFilmingWindow = window.open(this.relatedFilmingUrl, '_blank');
                }

                break;
            case FilmingMode.NewWindow:
                await this.calculateFilmingUrl();
                this.initFilmingWindow();
                break;
            case FilmingMode.SingleTon:
                //do nothing
                break;
            default:
                //do nothing
                break;
        }
    }

    protected onConnected(): void {

        this.stateProxyConnect = true;
    }

    protected onStudyListLoaded(studyDTO: StudyDto): void {
        console.log('get study dto succeed');
        console.info(`start onStudyListLoaded ${AppCommon.DateTimeHelper.getTimeString()}`);
        if (!this.stateFetchStudyDTO) {
            this.stateFetchStudyDTO = true;
            this.studyDTO = studyDTO;
        }

        while (!this.stateInit) {
            setTimeout(() => { this.onStudyListLoaded(this.studyDTO); }, 10);
            return;
        }
        ViewerKit.CommandHelper.sendString(this.commandSender, '', ViewerKit.CommandHelper.FEInit);
        this.StartLoadSeries();
        console.log('send start load series end after get study dto');
    }

    protected finalize(): void {
        this.communicationProxy.stop();
        switch (this.filmingMode) {
            case FilmingMode.NewPage:
                if (this.relatedFilmingWindow) {
                    this.relatedFilmingWindow.close();
                }
                break;
            case FilmingMode.NewWindow:
                break;
            case FilmingMode.SingleTon:
                //do nothing
                break;
            default:
                //do nothing
                break;
        }
    }

    ngOnDestroy(): void {
        this.finalize();
    }

    //https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
    @HostListener('window:beforeunload', ['$event'])
    beforeUnloadHander(event) {
        this.finalize();
    }

    protected StartLoadSeries(): void {

        while (!this.stateInit) {
            setTimeout(() => { this.StartLoadSeries(); }, 10);
            return;
        }

        const uid = this.studyDTO.list[0].seriesInstanceUID;

        ViewerKit.CommandHelper.loadSeries(this.commandSender, uid);
    }

    protected initCells() {
    }

    setDefaultLayout() {

    }
    protected addCommonEventListener() {

    }

    protected OnSizeChanged(event) {
        setTimeout(() => {
            this.sendLayoutCommand();
        }, 100);
    }

    protected OnLayoutChanged() {
        setTimeout(() => {
            this.viewerControl.setActionType(Viewer.ActionTypes.Pointer);
            this.sendLayoutCommand();
        }, 10);

    }

    protected sendLayoutCommand() {
        try {
            this.viewerControl.layoutManager.setCanvasSize();
            ViewerKit.CommandHelper.sizeChanged(this.commandSender, this.viewerControl);
        } catch (error) {
            console.error(error);
        }
    }

    protected handleDropevent(event: any): void {
        event.preventDefault();
        const seriesUID = event.dataTransfer.getData('seriesUID');
        const cellID = event.srcElement.id;
        ViewerKit.CommandHelper.loadSeries(this.commandSender, seriesUID, cellID);
    }
}
