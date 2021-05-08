import { Component, OnInit } from '@angular/core';
import { ModelContainer } from 'uih-appcommon';
import * as Viewer from 'uih-medviewercontrol';
import { HRTCellNames } from '../heart.component.definition';
import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import { HeartService } from '../service/heart.service';
import { AdvAppBaseComponent } from '../../adv-app-base/adv-app-base.component';
import * as AppCommon from 'uih-appcommon';

@Component({
    // selector: 'app-vr-render-params-switch',
    templateUrl: './vr-render-params-switch.component.html',
    styleUrls: ['./vr-render-params-switch.component.css']
})
export class VRRenderParamsSwitchComponent implements OnInit {

    selectedBtnName = 'Default';

    constructor(protected modelContainer: ModelContainer, protected svc: HeartService) { }

    ngOnInit() {
        this.selectedBtnName = this.svc.currentVRParamName;
    }

    switchParams(name: string, index: number) {
        this.selectedBtnName = name;
        let operationIdx = index + 5;

        this.svc.currentVRParamName = name;
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        const cell = viewerControl.getCell(HRTCellNames.VR);

        // let showHideHeartControl = <VRShowOrHideHeartControl>cell.getCellInitializeItem(VRShowOrHideHeartControl);
        // let control = showHideHeartControl.control as NgElement & WithProperties<VRShowOrHideHeartComponent>;
        // if (name == 'Default') {
        //     control.isShowHeart = true;
        // } else {
        //     control.isShowHeart = false;
        // }

        const param = $PB.MsgCommonString.create();
        param.value = name;
        const buffer = $PB.MsgCommonString.encode(param).finish();
        Viewer.MedViewerCommandHelper.sendCellOperation(viewerControl.commandSender, buffer, 'ChangeVRRenderParam', cell.cellName);

        let component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.advAppAPIService.userOperationClient.saveUserOperation('admin',
            component.studyDTO.studyInstanceUID, operationIdx, component.appName);

        AppCommon.Messenger.trigger('VRRenderParamsSwitch', name);
    }
}