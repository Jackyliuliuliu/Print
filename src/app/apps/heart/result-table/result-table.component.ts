import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewRef, ElementRef } from '@angular/core';
import { ModelContainer, GUIDHelper } from 'uih-appcommon';
import * as AppCommon from 'uih-appcommon';
import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';
import { AdvAppBaseComponent } from '../../adv-app-base/adv-app-base.component';
import { isNullOrUndefined } from 'util';
import { FindingModel } from '../heart.component.findingModel';
import { FindingTypeEnum } from '../heart.component.enumConverter';
import { CoronaryFeaturesModel } from '../heart.component.findingModel';
import { ValueConverter } from '../heart.component.enumConverter';
import { VesselEnum } from '../heart.component.enumConverter';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import { CommandHelper } from 'uih-viewerkit';
import { ToastService } from '../service/toast.service';
import { HeartService } from '../service/heart.service';
import { HRTConst } from '../heart.component.definition';
import { GraphicStenosisMark } from '../stenosis-mark/graphic-stenosis-mark';
import { HeartComponent } from '../heart.component';
import { GraphicStenosisRangeMark } from '../stenosis-mark/graphic-stenosis-range-mark';
import { from } from 'rxjs';
import { indexOf } from 'typescript-collections/dist/lib/arrays';

@Component({
    selector: 'result-table',
    templateUrl: './result-table.component.html',
    styleUrls: ['./result-table.component.css'],
    host: {
        '[style.width]': "'100%'",
        '[style.height]': "'100%'"
    }
})
export class ResultTableComponent implements OnInit {
    customStyle = {
        background: '#f7f7f7',
        'border-radius': '0.25rem',
        'margin-bottom': '0.625rem',
        border: '0px'
    };

    private currentSeriesUid: string = '';

    private stenosisColor: any = '#3c3e42';

    public stenosisDes: string = '';
    public ScoreCADRADS: string = '';
    public valCvt: ValueConverter = new ValueConverter();

    public stenosisItems: FindingModel[] = [];
    public selectedStenosisItem: FindingModel = new FindingModel();
    public selectedStenosisUID: string = '';

    public stentItems: FindingModel[] = [];
    public selectedStentItem: FindingModel = new FindingModel();
    public selectedStentUID: string = '';

    public coronaryFeatureItem: CoronaryFeaturesModel = new CoronaryFeaturesModel(); 
    public selectedCoronaryFeatureItem: number = 0;

    public selectedStentType: number = 2;
    public isEditMode: boolean = false;
    public isDefaultPlaque: number = 1;
    public keyFindings: Array<object> = [];
    public originStenosisItems: FindingModel[] = [];
    public originStentItems: FindingModel[] = [];
    @ViewChild('stenosisTable', { static: false }) stenosisTable?: ElementRef;
    @ViewChild('stentTable', { static: false }) stentTable?: ElementRef;

    constructor(protected modelContainer: ModelContainer,
        protected toastSvc: ToastService,
        protected heartSvc: HeartService,
        protected cd: ChangeDetectorRef) { }

    ngOnInit() {
        AppCommon.Messenger.on('seriesLoaded', (seriesUid) => { this.onSeriesLoaded(seriesUid); });
        AppCommon.Messenger.on('updateFindings', (keyFindings) => { 
            this.keyFindings = keyFindings;
            this.updateFindings(); 
            this.updateStenosisDes();
            this.sendMsgToReport();
        });
        AppCommon.Messenger.on('refreshFindings', (addType) => { this.onSeriesLoaded(this.currentSeriesUid); this.scrollToTop(addType); });
        AppCommon.Messenger.on('renameCenterLineName', (oldName, newName) => { this.renameCenterLineName(oldName, newName); });
        // 中心线重要程度变更时刷新列表
        AppCommon.Messenger.on('onCenterlineChange', (keyFindings) => {
            this.keyFindings = keyFindings;
            this.onSeriesLoaded(this.currentSeriesUid);
        })
        this.modelContainer.addModel('ResultTable', this);
    }

    /**
     * Start to request result info from server after series loaded
     * @param seriesUid Current loaded series uid
     */
    onSeriesLoaded(seriesUid) {
        this.isDefaultPlaque = this.heartSvc.srM.commonM.isDefaultPlaque;
        console.log(seriesUid);
        this.currentSeriesUid = seriesUid;
        let component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.advAppAPIService.aiDBSvcClient.getCoronaryFindings(seriesUid).then(rst => {
            this.originStenosisItems = [];
            this.originStentItems = [];
            if (!isNullOrUndefined(rst)) {
                rst.forEach(item => {
                    let model = new FindingModel();
                    model.fromDto(item);
                    if (!isNullOrUndefined(item.extend0) && this.valCvt.coronaryIndexCvt(item.coronaryIndex) != item.extend0) {
                        model.newName = item.extend0;
                    } else {
                        model.newName = this.valCvt.coronaryIndexCvt(item.coronaryIndex);
                    }
                    if (model.userID == 'uAI') {
                        model.findingName = 'A';
                    } else {
                        model.findingName = 'M';
                    }
                    if (model.findingType == FindingTypeEnum.stenosis) {
                        model.findingName += this.originStenosisItems.length + 1;
                        model.plaqueName = model.plaqueType == 1 ? (this.isDefaultPlaque == 0 ? '软斑块' : '非钙化斑块') :
                            this.valCvt.plaqueTypeCvt(model.plaqueType)
                        this.originStenosisItems.push(model);
                        if (this.selectedStenosisUID == model.findingUID) {
                            this.selectedStenosisUID = '';
                            this.changeSelectedCenterline(model);
                            this.selectedStenosisItem = model;
                            this.notifyBEChangeSelectedItem(item.findingUID);
                        }

                    } else if (model.findingType == FindingTypeEnum.stent) {
                        model.findingName += this.originStentItems.length + 1;
                        this.originStentItems.push(model);
                        if (this.selectedStentUID == model.findingUID) {
                            this.selectedStentUID = '';
                            this.changeSelectedCenterline(model);
                            this.selectedStentItem = model;
                            this.notifyBEChangeSelectedItem(item.findingUID);
                        }
                    }
                });
            }
            this.updateFindings();  //根据keyfinding进行筛选
            this.updateStenosisDes();
            component.advAppAPIService.aiDBSvcClient.getCoronaryFeature(seriesUid).then(rst1 => {
                if (!isNullOrUndefined(rst1)) {
                    this.coronaryFeatureItem.fromDto(rst1);
                    let isModified = this.coronaryFeatureItem.modified;  //判断是否发生过修改
                    if (isModified == 1) {
                        AppCommon.Messenger.trigger('hasModified', true);
                    }
                    if(this.coronaryFeatureItem.markable == 0) {
                        this.ScoreCADRADS = 'N';
                        this.stenosisDes = '图像质量无法做出判断';
                        this.updateColor();
                    }
                    this.sendMsgToReport();
                }
            });
        });
    }

    scrollToTop(addType) {
        if (addType === 'senosis') {
            setTimeout(() => { this.scrollStenosisDomEle(); }, 100);
        } else {
            setTimeout(() => { this.scrollStentDomEle(); }, 100);
        }
    }

    scrollStenosisDomEle () {
        if (this.stenosisTable.nativeElement.scrollHeight > this.stenosisTable.nativeElement.offsetHeight) {
            this.stenosisTable.nativeElement.scrollTop = this.stenosisTable.nativeElement.scrollHeight - this.stenosisTable.nativeElement.offsetHeight;
        }
    }

    scrollStentDomEle () {
        if (this.stentTable.nativeElement.scrollHeight > this.stentTable.nativeElement.offsetHeight) {
            this.stentTable.nativeElement.scrollTop = this.stentTable.nativeElement.scrollHeight - this.stentTable.nativeElement.offsetHeight;
        }
    }

    renameCenterLineName(oldName, newName) {
        console.log(oldName, newName);
        const component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;

        let namelist = [];
        namelist.push(oldName);
        if (oldName === 'LAD') {
            namelist.push('LAD近段');
            namelist.push('LAD中段');
            namelist.push('LAD远段');
        } else if (oldName === 'RCA') {
            namelist.push('RCA近段');
            namelist.push('RCA中段');
            namelist.push('RCA远段');
        } else if (oldName === 'LCX') {
            namelist.push('LCX近段');
            namelist.push('LCX中远段');
        }
        let dtos = [];
        namelist.forEach(name => {
            const findings = this.originStenosisItems.filter(item => item.newName === name)
                .concat(this.originStentItems.filter(item => item.newName === name));

            if (findings) {
                findings.forEach(finding => {
                    finding.extend0 = newName;
                    dtos.push(finding.toDto());
                });
            }
        });
        if (dtos.length > 0) {
            component.advAppAPIService.aiDBSvcClient.updateCoronaryFindings(dtos).then(rst => {
                this.onSeriesLoaded(this.currentSeriesUid);
            });
        }
    }

    /**
     * Select stenosis item
     * @param item The selected stenosis item
     */
    public selectStenosisItem($event, item): void {
        const parentDoms = [];
        this.findParentDom($event.target, parentDoms);
        if (this.selectedStenosisItem === item
            && !parentDoms.includes('nz-select')
            && !parentDoms.includes('input')) {
            this.cancelSelectItem();
        } else {
            let itemName = item.newName;
            let index = itemName.indexOf('近段');
            if (index >= 0) {
                itemName = itemName.substring(0, index);
            }
            index = itemName.indexOf('中远段');
            if (index >= 0) {
                itemName = itemName.substring(0, index);
            }
            index = itemName.indexOf('中段');
            if (index >= 0) {
                itemName = itemName.substring(0, index);
            }
            index = itemName.indexOf('远段');
            if (index >= 0) {
                itemName = itemName.substring(0, index);
            }
            if (this.heartSvc.selectedIndex >= 0 &&
                this.heartSvc.selectedIndex < Object.keys(this.heartSvc.centerlineList).length &&
                itemName != Object.keys(this.heartSvc.centerlineList)[this.heartSvc.selectedIndex]) {
                this.changeSelectedCenterline(item);
            }
            item.isHovered = true;
            this.selectedStenosisItem = item;
            this.selectedStentItem = new FindingModel();
            this.selectedStentItem.isChecked = false;

            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            let toolbarbottom = component.toolbarbottom;
            if (toolbarbottom && !toolbarbottom.checkOptionsOne[4].checked) {
                toolbarbottom.checkOptionsOne[4].checked = true;
                toolbarbottom.updateVisibleState('StenosisMark', true);
            }

            this.notifyBEChangeSelectedItem(item.findingUID);
        }
    }

    private changeSelectedCenterline(item): void {
        let itemName = item.newName;

        let index = itemName.indexOf('近段');
        if (index >= 0) {
            itemName = itemName.substring(0, index);
        }
        index = itemName.indexOf('中远段');
        if (index >= 0) {
            itemName = itemName.substring(0, index);
        }
        index = itemName.indexOf('中段');
        if (index >= 0) {
            itemName = itemName.substring(0, index);
        }
        index = itemName.indexOf('远段');
        if (index >= 0) {
            itemName = itemName.substring(0, index);
        }
        AppCommon.Messenger.trigger('selectCenterline', { name: itemName, isKey: 1 });
    }

    cancelSelectItem(): void {
        this.selectedStenosisItem = new FindingModel();
        this.selectedStenosisItem.isChecked = false;
        this.selectedStentItem = new FindingModel();
        this.selectedStentItem.isChecked = false;
        this.notifyBEChangeSelectedItem('');
    }

    isSelected(findingUID: string): boolean {
        if (this.selectedStenosisItem.findingUID && findingUID == this.selectedStenosisItem.findingUID) {
            return true;
        }
        if (this.selectedStentItem.findingUID && findingUID == this.selectedStentItem.findingUID) {
            return true;
        }
        return false;
    }

    public findParentDom(curDom, parentDoms): void {
        parentDoms.push(curDom.localName);
        if (curDom.localName !== 'app-heart') {
            this.findParentDom(curDom.parentNode, parentDoms);
        } else {
            return;
        }
    }

    notifyBEChangeSelectedItem(uid: string): void {
        const params = CardiacProto.MessageStenosisListOperationParams.create();
        params.OperationType = CardiacProto.ListOperationType.ListOperationType_Select;
        params.UID = uid;
        const buffer = CardiacProto.MessageStenosisListOperationParams.encode(params).finish();
        let component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        CommandHelper.sendPanelOperation(component.commandSender, buffer, 'StenosisListOperation');
    }

    /**
     * Select stent item
     * @param item The selected stent item
     */
    public selectStentItem($event, item): void {
        const parentDoms = [];
        this.findParentDom($event.target, parentDoms);
        if (this.selectedStentItem === item
            && !parentDoms.includes('nz-select')
            && !parentDoms.includes('input')) {
            this.cancelSelectItem();
        } else {
            let itemName = item.newName;
            let index = itemName.indexOf('近段');
            if (index >= 0) {
                itemName = itemName.substring(0, index);
            }
            index = itemName.indexOf('中段');
            if (index >= 0) {
                itemName = itemName.substring(0, index);
            }
            index = itemName.indexOf('中远段');
            if (index >= 0) {
                itemName = itemName.substring(0, index);
            }
            index = itemName.indexOf('远段');
            if (index >= 0) {
                itemName = itemName.substring(0, index);
            }
            if (this.heartSvc.selectedIndex >= 0 &&
                this.heartSvc.selectedIndex < Object.keys(this.heartSvc.centerlineList).length &&
                itemName != Object.keys(this.heartSvc.centerlineList)[this.heartSvc.selectedIndex]) {
                this.changeSelectedCenterline(item);
            }
            //this.changeSelectedCenterline(item);
            item.isHovered = true;
            this.selectedStentItem = item;
            this.selectedStenosisItem = new FindingModel();
            this.selectedStenosisItem.isChecked = false;

            this.notifyBEChangeSelectedItem(item.findingUID);
        }
    }

    public showDelIcon(item): void {
        item.isHovered = true;
    }

    public hideDelIcon(item): void {
        item.isHovered = false;
    }

    /**
     * Delete stenosis item
     * @param item Stenosis item to be deleted
     */
    public deleteStenosisItem(item: FindingModel): void {
        this.deleteFinding(item.pid);
    }

    /**
     * Delete stent item
     * @param item Stent item to be deleted
     */
    public deleteStentItem(item: FindingModel): void {
        this.deleteFinding(item.pid);
    }

    private deleteFinding(pid) {
        AppCommon.Messenger.trigger('hasModified', true);
        let component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.advAppAPIService.aiDBSvcClient.deleteCoronaryFinding(pid).then(rst => {
            this.onSeriesLoaded(this.currentSeriesUid);

            let operation = CardiacProto.MessageStenosisListOperationParams.create();
            operation.OperationType = CardiacProto.ListOperationType.ListOperationType_Delete;
            let buffer = CardiacProto.MessageStenosisListOperationParams.encode(operation).finish();
            CommandHelper.sendPanelOperation(component.commandSender, buffer, 'StenosisListOperation');
        });
        AppCommon.Messenger.trigger('hasModified', true);
    }

    /**
     * list of narrow and Upper and lower bounds
     */
    NarrowList: any[] = [
        { "index": 1, "label": "轻微狭窄", "lower": 1, "upper": 24 },
        { "index": 2, "label": "轻度狭窄", "lower": 25, "upper": 49 },
        { "index": 3, "label": "中度狭窄", "lower": 50, "upper": 69 },
        { "index": 4, "label": "重度狭窄", "lower": 70, "upper": 99 },
        { "index": 5, "label": "闭塞", "lower": 100, "upper": 100 },
    ]

    /**
     * list of ScoreCADRADS
     */
    ScoreCADRADSList: any[] = [
        { 'index': 0, 'value': '0' },
        { 'index': 1, 'value': '1' },
        { 'index': 2, 'value': '2' },
        { 'index': 3, 'value': '3' },
        { 'index': 4, 'value': '4A' },
        { 'index': 5, 'value': '4B' },
        { 'index': 6, 'value': '5' },
        { 'index': 7, 'value': 'N' },
    ]

    /**
     * 
     * @param curStenosisType   stenosisType of select-option
     */
    public synchroInput(curStenosisType: any): any {
        for (var i = 0; i < this.stenosisItems.length; i++) {
            if (this.selectedStenosisItem.findingUID == this.stenosisItems[i].findingUID) {
                this.NarrowList.forEach(element => {
                    if (element.index == curStenosisType) {
                        this.stenosisItems[i].range_in_millimeters = element.lower;
                        this.stenosisItems[i].stenosisLevel = this.stenosisItems[i].str2Int(this.stenosisItems[i].stenosisLevel);
                    }
                });
                break;
            }
        }
        this.updateStenosisDes();
        this.saveStenosis();
        this.sendMsgToReport();
        AppCommon.Messenger.trigger('hasModified', true);
    }

    /**
     * 
     * @param curStenosisRange  stenosisRange of input
     */
    public synchroSelect(): any {
        this.selectedStenosisItem.range_in_millimeters = Math.round(this.selectedStenosisItem.range_in_millimeters);
        this.selectedStenosisItem.narrow_length = Math.round(this.selectedStenosisItem.narrow_length * 10) / 10;

        if (this.selectedStenosisItem.range_in_millimeters > 100) {
            this.selectedStenosisItem.range_in_millimeters = 100;
        }
        if (this.selectedStenosisItem.range_in_millimeters <= 0) {
            this.selectedStenosisItem.range_in_millimeters = 0;
        }

        const curStenosisRange = this.selectedStenosisItem.range_in_millimeters;
        for (let i = 0; i < this.stenosisItems.length; i++) {
            if (this.selectedStenosisItem.findingUID === this.stenosisItems[i].findingUID) {
                this.NarrowList.forEach(element => {
                    if (curStenosisRange <= element.upper && curStenosisRange >= element.lower) {
                        this.stenosisItems[i].stenosisLevel = element.index;
                    }
                });
                break;
            }
        }
        this.updateStenosisDes();
        this.saveStenosis();
        this.sendMsgToReport();
        AppCommon.Messenger.trigger('hasModified', true);
    }

    /**
     * 更新CAD-RADS以及狭窄程度的描述
     */
    public updateStenosisDes() {
        if(this.ScoreCADRADS == "N" ) {
            return;//   no need update
        }
        this.stenosisDes = '';
        var stenosisFindings = this.stenosisItems;
        var severeStenosis: FindingModel[] = [];
        var coronaryIndexAry: number[] = [];
        var severeLevel: number = 0;
        var onlyLM: boolean = true;
        var exisLM: boolean = false;
        for (var i = 0; i < stenosisFindings.length; i++) {
            if (stenosisFindings[i].isChecked && stenosisFindings[i].stenosisLevel > severeLevel
                && stenosisFindings[i].coronaryIndex != VesselEnum.LM) {
                severeStenosis = [];
                coronaryIndexAry = [];
                severeStenosis.push(stenosisFindings[i]);
                coronaryIndexAry.push(stenosisFindings[i].coronaryIndex);
                severeLevel = stenosisFindings[i].stenosisLevel;
            } else if (stenosisFindings[i].isChecked && stenosisFindings[i].stenosisLevel == severeLevel
                && stenosisFindings[i].coronaryIndex != VesselEnum.LM && coronaryIndexAry.indexOf(stenosisFindings[i].coronaryIndex) < 0) {
                severeStenosis.push(stenosisFindings[i]);
                coronaryIndexAry.push(stenosisFindings[i].coronaryIndex);
            } else {
                continue;
            }
        }
        for (var i = 0; i < stenosisFindings.length; i++) {
            if (stenosisFindings[i].isChecked && stenosisFindings[i].coronaryIndex == VesselEnum.LM) {
                if (stenosisFindings[i].stenosisLevel > severeLevel || (stenosisFindings[i].stenosisLevel == severeLevel && severeLevel == 3)) {
                    severeStenosis = [];
                    coronaryIndexAry = [];
                    severeStenosis.push(stenosisFindings[i]);
                    coronaryIndexAry.push(stenosisFindings[i].coronaryIndex);
                    severeLevel = stenosisFindings[i].stenosisLevel;
                }
                if ((coronaryIndexAry.indexOf(stenosisFindings[i].coronaryIndex) < 0) && ((stenosisFindings[i].stenosisLevel == severeLevel && severeLevel != 3) || (stenosisFindings[i].stenosisLevel == 3 && severeLevel == 4))) {
                    severeStenosis.push(stenosisFindings[i]);
                }
                coronaryIndexAry.push(stenosisFindings[i].coronaryIndex);
            } else {
                continue;
            }
        }
        if (severeStenosis.length === 0 || severeLevel === 0) {
            this.stenosisDes = '未检出明显狭窄';
            this.ScoreCADRADS = '0';
            this.updateColor();
            return;
        }
        var mainVesselCount = 0;
        severeStenosis.forEach(element => {
            if (this.isMainVessel(element)) {
                mainVesselCount++;
            }
        });
        severeStenosis.sort((a, b) => { return this.sortForVessel(a, b) });  // 按照重要性排序
        if (mainVesselCount > 0) {
            severeStenosis = severeStenosis.splice(0, mainVesselCount);
        } else {
            severeStenosis = severeStenosis.splice(0, 1);
        }

        if (severeLevel <= 2) {
            this.stenosisDes += this.valCvt.stenosisLevelCvt(severeLevel);
        } else {
            for (var i = 0; i < severeStenosis.length; i++) {
                if (severeStenosis[i].coronaryIndex == VesselEnum.LM) {
                    this.stenosisDes += severeStenosis[i].newName;
                    severeLevel = severeStenosis[i].stenosisLevel;
                    exisLM = true;
                }
            }

            var severeLevelLM = undefined;
            if (exisLM) {
                severeLevelLM = severeLevel;
            }
            var count = 1;
            if (severeStenosis.length == 1 && exisLM) {
                this.stenosisDes += this.valCvt.stenosisLevelCvt(severeLevel);
            } else {
                for (var i = 0; i < severeStenosis.length; i++) {
                    if (severeStenosis[i].coronaryIndex != VesselEnum.LM) {
                        if (exisLM && count != 0) {
                            if (severeStenosis[i].stenosisLevel != severeLevelLM) {
                                this.stenosisDes += (this.valCvt.stenosisLevelCvt(severeLevel) + '、');
                                severeLevel = severeStenosis[i].stenosisLevel;
                            } else {
                                this.stenosisDes += '、';
                            }
                            count--;
                        }
                        this.stenosisDes += (severeStenosis[i].newName + '、');
                        onlyLM = false;
                    }
                }
                this.stenosisDes = this.stenosisDes.substring(0, this.stenosisDes.length - 1);
                if (!onlyLM) {
                    this.stenosisDes += this.valCvt.stenosisLevelCvt(severeLevel);
                }
            }
        }

        // update CAD-RADS
        this.ScoreCADRADS = severeLevel.toString();
        this.ScoreCADRADS = this.ScoreCADRADS === '4' ? '4A' : this.ScoreCADRADS;
        if (severeLevel === 3 && this.isExistLM(severeStenosis)) {
            this.ScoreCADRADS = '4B';
        }
        if (severeLevel === 4 && this.isExistThreeMain(severeStenosis)) {
            this.ScoreCADRADS = '4B';
        }
        if (severeLevel === 4 && this.isExistLM(stenosisFindings)) {
            stenosisFindings.forEach(element => {
                if (element.coronaryIndex === 5 && element.range_in_millimeters >= 50) {
                    this.ScoreCADRADS = '4B';
                }
            });
        }
        this.updateColor();
    }

    public sortForVessel = function (a, b) {
        if (this.isMainVessel(a) !== this.isMainVessel(b)) {
            return this.isMainVessel(a) ? -1 : 1;
        } else {
            return a.coronaryIndex - b.coronaryIndex;
        }
    }

    /**
     *  judge whether current vessel is main vessel
     */
    public isMainVessel(curStenosis) {
        VesselEnum.LAD;
        let mainVesselArr: number[] = [1, 2, 3, 5, 6, 7, 8, 11, 13];
        return (mainVesselArr.indexOf(curStenosis.coronaryIndex) >= 0);
    }

    /**
     * 
     * @param stenosisFindings judge whether LM exists
     */
    public isExistLM(stenosisFindings: FindingModel[]): boolean {
        var res = false;
        stenosisFindings.forEach(element => {
            if (element.coronaryIndex === VesselEnum.LM) {
                res = true;
            }
        });
        return res;
    }

    /**
     * 
     * @param stenosisFindings judge whether LAD/LCX/RCA exists
     */
    public isExistThreeMain(stenosisFindings: FindingModel[]): boolean {
        let ThreeVesselArr: number[] = [1, 2, 3, 6, 7, 8, 11, 13];
        var res = false;
        stenosisFindings.forEach(element => {
            if (ThreeVesselArr.indexOf(element.coronaryIndex) >= 0) {
                res = true;
            }
        });
        return res;
    }

    /**
    * update PlaqueType
    */
    public savePlaqueType($event, stenosis: FindingModel) {
        stenosis.plaqueName = stenosis.plaqueType == 1 ? (this.isDefaultPlaque == 0 ? '软斑块' : '非钙化斑块') :
            this.valCvt.plaqueTypeCvt(stenosis.plaqueType)
        this.saveStenosis();
        this.sendMsgToReport();
        AppCommon.Messenger.trigger('hasModified', true);
    }
    /**
     * update whether isChecked
     */
    public updateChecked(): void {
        this.updateStenosisDes();
        this.sendMsgToReport();
        this.updateCellsStenosisMark();
    }

    public updateCellsStenosisMark(): void {
        const cells = [];
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        cells.push(workflow.getCell('Default_Layout_Stretched_CPR_2'));
        cells.push(workflow.getCell('Default_Layout_Stretched_CPR_3'));
        cells.push(workflow.getCell('Straightened_CPR_Coronary'));
        cells.forEach(c => {
            this.updateStenosisMark(c);
        });
    }

    public updateStenosisMark(cell: Viewer.MedViewerControlCell, isNeedDrawImage: boolean = true) {
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        const isChecked = component.toolbarbottom.checkOptionsOne[4].checked;
        cell.displayData.graphics.forEach(graphic => {
            if (graphic instanceof GraphicStenosisMark) {
                this.stenosisItems.concat(this.stentItems).forEach(item => {
                    if (graphic.findingUID === item.findingUID) {
                        let flag = true;
                        if (item.is_stent_present === 2) {
                            flag = false;
                        }
                        graphic.isVisible = item.isChecked && isChecked && flag;
                        const textChild = graphic.getChild(Viewer.GraphicText);
                        if (textChild) {
                            textChild.isVisible = graphic.isVisible;
                        }
                    }
                });
            }
            if (graphic instanceof GraphicStenosisRangeMark) {
                graphic.isVisible = component.toolbarbottom.checkOptionsOne[4].checked
                    && ((this.selectedStenosisItem.isChecked &&
                        this.selectedStenosisItem.is_stent_present != 2) ||
                        (this.selectedStentItem.isChecked &&
                            this.selectedStentItem.is_stent_present != 2));
            }
        });
        if (isNeedDrawImage) {
            cell.drawImage();
        } else {
            cell.displayData.refreshGraphics();
        }
    }

    /**
     * update color 
     */
    public updateColor() {
        if (this.ScoreCADRADS == '0' || this.ScoreCADRADS == '1' || this.ScoreCADRADS == '2') {
            this.stenosisColor = '#85bf67';
        } else if (this.ScoreCADRADS == '3') {
            this.stenosisColor = '#f5a623';
        } else if (this.ScoreCADRADS == '4A' || this.ScoreCADRADS == '4B' || this.ScoreCADRADS == '5') {
            this.stenosisColor = '#ff4d52';
        } else if (this.ScoreCADRADS == 'N') {
            this.stenosisColor = '#6a6b6c';
        }
    }

    /**
    * update database
    */
    public saveStenosis(): void {
        let component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        let dto = this.selectedStenosisItem.toDto();
        component.advAppAPIService.aiDBSvcClient.updateCoronaryFinding(dto).then(rst => {
            let operation = CardiacProto.MessageStenosisListOperationParams.create();
            operation.OperationType = CardiacProto.ListOperationType.ListOperationType_Rename;
            operation.NewName = "changeDegree";
            let buffer = CardiacProto.MessageStenosisListOperationParams.encode(operation).finish();
            CommandHelper.sendPanelOperation(component.commandSender, buffer, 'StenosisListOperation');
        });
    }

    /**
     * change the option in res table 
     */
    public selected($event) {
        if ($event.currentTarget.innerHTML == '评分') {
            this.ScoreCADRADS = "";
            this.updateStenosisDes();
        } else {
            this.ScoreCADRADS = "N";
        }
        let markable = 1;
        if (this.ScoreCADRADS == 'N') {
            markable = 0;
            this.stenosisDes = '图像质量无法做出判断';
        }

        if(this.coronaryFeatureItem.markable != markable) {
            this.coronaryFeatureItem.markable = markable;
            this.saveCoronaryFeatureItem();
        }
        this.updateColor();
    }

    compareIntValue(val1, val2) {
        return parseInt(val1) == parseInt(val2);
    }

    compareBooleanValue(val1, val2) {
        return new Boolean(val1) == new Boolean(val2);
    }

    saveStentItem(): void {
        // console.log($event);

        // stent.selectedStentType = parseInt($event as any);
        this.sendMsgToReport();
        let component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        let dto = this.selectedStentItem.toDto();
        component.advAppAPIService.aiDBSvcClient.updateCoronaryFinding(dto).then(rst => {
            let operation = CardiacProto.MessageStenosisListOperationParams.create();
            operation.OperationType = CardiacProto.ListOperationType.ListOperationType_Rename;
            operation.NewName = "changeDegree";
            let buffer = CardiacProto.MessageStenosisListOperationParams.encode(operation).finish();
            CommandHelper.sendPanelOperation(component.commandSender, buffer, 'StentListOperation');
        });
        AppCommon.Messenger.trigger('hasModified', true);
    }

    /**
     * send msg to report 
     */
    sendMsgToReport(): void {
        AppCommon.Messenger.trigger('updateReport', [this.coronaryFeatureItem, this.stenosisItems.concat(this.stentItems)]);
        this.heartSvc.srM.lesionM.findings = this.stenosisItems;
        this.heartSvc.srM.imagesM.coronaryFeatureItem = this.coronaryFeatureItem;
    }

    saveCoronaryFeatureItem(): void {
        this.coronaryFeatureItem.left_coronary_ostium = this.coronaryFeatureItem.str2Int(this.coronaryFeatureItem.left_coronary_ostium);
        this.coronaryFeatureItem.right_coronary_ostium = this.coronaryFeatureItem.str2Int(this.coronaryFeatureItem.right_coronary_ostium);
        this.coronaryFeatureItem.coronary_dominance = this.coronaryFeatureItem.str2Int(this.coronaryFeatureItem.coronary_dominance);

        const component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        if (isNullOrUndefined(this.coronaryFeatureItem.seriesInstanceUID)) {
            this.coronaryFeatureItem.seriesInstanceUID = this.currentSeriesUid;
        }
        if (isNullOrUndefined(this.coronaryFeatureItem.featureUID)) {
            this.coronaryFeatureItem.featureUID = GUIDHelper.NewGUID();
        }
        component.advAppAPIService.aiDBSvcClient.saveCoronaryFeature(this.coronaryFeatureItem.toDto()).then(rst => { });
        this.sendMsgToReport();
        AppCommon.Messenger.trigger('hasModified', true);
    }

    public keyUpEnter(event) {
        this.synchroSelect();
        this.selectedStenosisItem = new FindingModel();
        this.selectedStenosisItem.isChecked = false;
    }
    public setDisable(status: boolean): void {
        if (status) {
            this.cancelSelectItem();
            this.isEditMode = true;

        } else {
            this.isEditMode = false;
        }
    }
    public refresh(): void {
        this.cd.detectChanges();
    }
    // no database change
    public updateFindings(): void {
        const keyFindingsName = this.keyFindings.map(item => item['name']);
        this.stenosisItems = this.originStenosisItems.filter(function (ele) {
            return (keyFindingsName.indexOf(ele.newName.replace(/[\u4e00-\u9fa5]/g, "")) >= 0);
        });
        this.stentItems = this.originStentItems.filter(function (ele) {
            return (keyFindingsName.indexOf(ele.newName.replace(/[\u4e00-\u9fa5]/g, "")) >= 0);
        });
    }

    public getFinding(findingUid : string) : FindingModel {
        for(let i = 0; i < this.stenosisItems.length; i++) {
            if(this.stenosisItems[i].findingUID == findingUid) {
                return this.stenosisItems[i];
            }
        }

        for(let i = 0; i < this.stentItems.length; i++) {
            if(this.stentItems[i].findingUID == findingUid) {
                return this.stentItems[i];
            }
        }
        return null;
    }
}
