import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { ModelContainer } from 'uih-appcommon';
import { HeartComponent } from '../heart.component';
import { CommandHelper } from 'uih-viewerkit';
import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;

@Component({
    selector: 'app-mpr-cpr-link',
    templateUrl: './mpr-cpr-link.component.html',
    styleUrls: ['./mpr-cpr-link.component.css']
})
export class MPRCPRLinkComponent implements OnInit {
    isLinked: boolean = true;

    constructor(protected modelContainer: ModelContainer) { }

    ngOnInit() {
    }

    update(): void {
        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        
        let msgIsLinked = $PB.MsgCommonBool.create();
        msgIsLinked.value = this.isLinked;
        const buffer = $PB.MsgCommonBool.encode(msgIsLinked).finish();
        CommandHelper.sendPanelOperation(component.commandSender, buffer, 'ChangeMPRCPRLinkState');
    }
}
