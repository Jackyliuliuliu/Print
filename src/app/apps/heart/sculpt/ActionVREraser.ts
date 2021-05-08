import { ActionBase, MouseActionArgs, MedViewerControlCell, GraphicHelper } from 'uih-medviewercontrol';
import { GraphicEraser } from './GraphicEraser';
import { Point } from 'uih-appcommon';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import { CommandHelper } from 'uih-viewerkit';

export class ActionVREraser extends ActionBase {
    private _preCenter: Point;
    private readonly _delta = 10;

    constructor() {
        super();
        this._preCenter = new Point(0, 0);
    }

    mouseDown(args: MouseActionArgs): void {
        this.isMouseDown = true;
        this.isMouseMove = false;
        this.isActionDone = false;

        let graphic = args.currentCell.displayData.getOrAddGraphic(GraphicEraser);
        graphic.isVisible = true;
        graphic.center = args.relativePosition;
        graphic.height = 10;
    }

    mouseMove(args: MouseActionArgs): void {
        if (this.isMouseDown) {
            let cell = args.currentCell;
            let graphic = cell.displayData.getOrAddGraphic(GraphicEraser);
            graphic.center = args.relativePosition;
            graphic.refreshOverlay();

            if (GraphicHelper.distance(this._preCenter, graphic.center) < this._delta) {
                return;
            }
    
            this._preCenter = graphic.center;
            let points = graphic.generateContourPoints(cell);
            this.sendEraseCommand(cell, points);
        }
    }

    mouseUp(args: MouseActionArgs): void {
        if (this.isMouseDown) {
            this.isMouseDown = false;
            this.endAction(args);
            
            let cell = args.currentCell;
            let graphic = cell.displayData.getOrAddGraphic(GraphicEraser);
            graphic.isVisible = false;
            graphic.refreshOverlay();
    
            CommandHelper.sendCellOperation(cell.viewerControl.commandSender, null, 'VRAddEraserResult', cell.cellName);
        }
    }

    sendEraseCommand(cell: MedViewerControlCell, points: Point[]): void {
        if (points.length > 0) {
            const msg = CardiacProto.MsgEraser.create();
            msg.isRemove = true;
            for (let pt of points) {
                const ptMsg = CardiacProto.MessageHRTPoint2D.create();
                ptMsg.x = pt.x;
                ptMsg.y = pt.y;
                msg.points.push(ptMsg);
            }
            const buffer = CardiacProto.MsgEraser.encode(msg).finish();
            cell.viewerControl.commandSender.sendCellOperation(buffer, 'VREraserSculpt', cell.cellName);
        }
    }
}
