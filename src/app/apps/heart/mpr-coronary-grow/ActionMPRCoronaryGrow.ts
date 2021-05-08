import { ActionBase, MouseActionArgs, MedViewerControlCell } from 'uih-medviewercontrol';
import { Point, Messenger } from 'uih-appcommon';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;

export class ActionMPRCoronaryGrow extends ActionBase {
    constructor() {
        super();
    }

    mouseDown(args: MouseActionArgs): void {
        this.isMouseDown = true;
        this.isMouseMove = false;
        this.isActionDone = false;

    }

    mouseMove(args: MouseActionArgs): void {
    }

    mouseUp(args: MouseActionArgs): void {
        if (this.isMouseDown) {
            this.isMouseDown = false;
            this.endAction(args);

            Messenger.trigger('changeAllPageResponseStatus', false);
            this.sendGrowCommand(args.currentCell, args.relativePosition);
        }
    }

    sendGrowCommand(cell: MedViewerControlCell, point: Point): void {
        const msg = CardiacProto.MessageHRTPoint2D.create();
        msg.x = point.x;
        msg.y = point.y;
        const buffer = CardiacProto.MessageHRTPoint2D.encode(msg).finish();
        cell.viewerControl.commandSender.sendCellOperation(buffer, 'CoronaryGrow', cell.cellName);
    }
}
