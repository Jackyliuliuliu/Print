import * as Viewer from "uih-medviewercontrol";

export class GraphicContour extends Viewer.GraphicFreehand {
    constructor() {
        super();
        this.isCreated = true;
        this.canModify = false;
        this.canSelect = false;
        this.canEdit = false;
        this.canDisplayHandles = false;
        this.canHitHandles = false;
        this.isContextMenuEnabled = false;
        this.isClosed = true;
        this.isVisible = false;
    }
}