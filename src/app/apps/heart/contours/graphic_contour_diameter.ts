import { GraphicLine } from 'uih-medviewercontrol';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol

export class GraphicContourDiameter extends GraphicLine {
    diameterType: CardiacProto.ContourDiameterType;

    constructor() {
        super();
        this.isCreated = true;
        this.canModify = false;
        this.canSelect = false;
        this.canEdit = false;
        this.canDisplayHandles = false;
        this.canHitHandles = false;
        this.isContextMenuEnabled = false;
        this.isVisible = false;
    }
}