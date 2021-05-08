import * as Viewer from "uih-medviewercontrol";
import { MPRCPRSwitchComponent } from './mpr-cpr-switch/mpr-cpr-switch.component';
import { NgElement, WithProperties, createCustomElement } from '@angular/elements';
import { VRRenderParamsSwitchComponent } from './vr-render-params-switch/vr-render-params-switch.component';
import { VRShowOrHideHeartComponent } from './vr-show-or-hide-heart/vr-show-or-hide-heart.component'
import * as $PBRoot from 'uih-app-protocol';
import $CommonPB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import * as CardiacProtoCommon from './CTCaridacCommonProto'
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol
import { CenterLineNameEditComponent } from "./centerline-name-edit-component/centerline-name-edit.component";
import * as AppCommon from 'uih-appcommon';
import { MPRCPRLinkComponent } from './mpr-cpr-link/mpr-cpr-link.component';
import { Injector } from '@angular/core';

export class MPRCPRSwitchControl extends Viewer.CellControlInitializeItemBase {
    constructor(injector: Injector) {
        super();
        if (!customElements.get('mprcprswitch-tag')) {
            const mprCPRSwitchElement = createCustomElement(MPRCPRSwitchComponent, { injector: injector });
            customElements.define('mprcprswitch-tag', mprCPRSwitchElement);
        }
    }

    initialize(): void {
        const mprCPRSwitchControl: NgElement & WithProperties<MPRCPRSwitchComponent> = document.createElement('mprcprswitch-tag') as any;
        this.control = mprCPRSwitchControl;
    }
}

export class MPRCPRLinkControl extends Viewer.CellControlInitializeItemBase {
    constructor(injector: Injector) {
        super();
        if (!customElements.get('mprcprlink-tag')) {
            const mprCPRLinkElement = createCustomElement(MPRCPRLinkComponent, { injector: injector });
            customElements.define('mprcprlink-tag', mprCPRLinkElement);
        }
    }

    initialize(): void {
        const mprCPRLinkControl: NgElement & WithProperties<MPRCPRLinkComponent> = document.createElement('mprcprlink-tag') as any;
        this.control = mprCPRLinkControl;
    }
}

export class VRRenderParamsSwitchControl extends Viewer.CellControlInitializeItemBase {
    constructor(injector: Injector) {
        super();
        if (!customElements.get('vrrenderparamsswitch-tag')) {
            const vrRenderParamsSwitchElement = createCustomElement(VRRenderParamsSwitchComponent, { injector: injector });
            customElements.define('vrrenderparamsswitch-tag', vrRenderParamsSwitchElement);
        }
    }

    initialize(): void {
        const vrRenderParamsSwitchControl: NgElement & WithProperties<VRRenderParamsSwitchComponent> = document.createElement('vrrenderparamsswitch-tag') as any;
        vrRenderParamsSwitchControl.style.setProperty('position', 'absolute');
        vrRenderParamsSwitchControl.style.setProperty('width', '20%');
        vrRenderParamsSwitchControl.style.setProperty('bottom', '10px');
        vrRenderParamsSwitchControl.style.setProperty('right', '10px');
        this.control = vrRenderParamsSwitchControl;
    }
}

export class HeartCellHelper {
    public static IsCellSection(cellName: string): boolean {
        return cellName.indexOf('Section') >= 0;
    }

    public static IsCellStraightenedCPR(cellName: string): boolean {
        return cellName.indexOf('Straightened') >= 0;
    }
}


export class VRShowOrHideHeartControl extends Viewer.CellControlInitializeItemBase {
    constructor(injector: Injector) {
        super();
        if (!customElements.get('vrshoworhideheart-tag')) {
            const vrShowOrHideMyocardiumElement = createCustomElement(VRShowOrHideHeartComponent, { injector: injector });
            customElements.define('vrshoworhideheart-tag', vrShowOrHideMyocardiumElement);
        }
    }

    initialize(): void {
        const vrShowOrHideHeartControl: NgElement & WithProperties<VRShowOrHideHeartComponent> = document.createElement('vrshoworhideheart-tag') as any;
        vrShowOrHideHeartControl.style.setProperty('position', 'absolute');
        vrShowOrHideHeartControl.style.setProperty('left', '10px');
        vrShowOrHideHeartControl.style.setProperty('bottom', '20px');
        this.control = vrShowOrHideHeartControl;

        AppCommon.Messenger.on('VRRenderParamsSwitch', (name) => {
            (this.control as NgElement & WithProperties<VRShowOrHideHeartComponent>).isShowHeart = name == 'Default';
        })
    }
}

export class CenterLineNameEditControl extends Viewer.CellControlInitializeItemBase {
    constructor(injector: Injector) {
        super();
        if (!customElements.get('centerlinenameedit-tag')) {
            const centerLineNameEditElement = createCustomElement(CenterLineNameEditComponent, { injector: injector });
            customElements.define('centerlinenameedit-tag', centerLineNameEditElement);
        }
    }

    initialize(): void {
        const centerLineNameEditControl: NgElement & WithProperties<CenterLineNameEditComponent> = document.createElement('centerlinenameedit-tag') as any;
        centerLineNameEditControl.cell = this.cell;
        centerLineNameEditControl.style.setProperty('position', 'absolute');
        centerLineNameEditControl.style.setProperty('top', '50%');
        centerLineNameEditControl.style.setProperty('right', '0px');
        centerLineNameEditControl.style.setProperty('transform', 'translateY(-50%)');
        this.control = centerLineNameEditControl;
    }
}
