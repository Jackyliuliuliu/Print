import { Component, OnInit, ChangeDetectorRef,Input } from '@angular/core';
import * as CardiacProtoCommon from '../CTCaridacCommonProto'
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol
import { ModelContainer } from 'uih-appcommon';
import * as Viewer from 'uih-medviewercontrol';
import { HRTCellNames } from '../heart.component.definition';
import { CommandHelper } from 'uih-viewerkit';
import { HeartService } from '../service/heart.service';

@Component({
    selector: 'app-vr-show-or-hide-heart',
    templateUrl: './vr-show-or-hide-heart.component.html',
    styleUrls: ['./vr-show-or-hide-heart.component.css']
})
export class VRShowOrHideHeartComponent implements OnInit {
    constructor(protected modelContainer: ModelContainer,
         protected svc: HeartService,
         protected cd: ChangeDetectorRef) { }

    private _isShowHeart: boolean = true;
    get isShowHeart(): boolean {
        return this._isShowHeart;
    }
    @Input()
    set isShowHeart(value: boolean) {
        if (this._isShowHeart == value) {
            return;
        }

        this._isShowHeart = value;
        this.svc.isShowHeart = value;
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        const cell = viewerControl.getCell(HRTCellNames.VR);
        const builder = CardiacProto.MessageTissueVisibility.create();
        builder.IsVisible = value;
        if (value)
            builder.ID = 3;   // 0:all 1:none 2:coronary 3:cardiac
        else
            builder.ID = 2;

        const commandInfo = CardiacProto.MessageTissueVisibility.encode(builder).finish();
        CommandHelper.sendPanelOperation(cell.viewerControl.commandSender, commandInfo, 'UpdateTissuesVisibility');
    }

    ngOnInit() {
        this._isShowHeart = this.svc.isShowHeart;
    }
  }
