import * as Viewer from "uih-medviewercontrol";
import * as AppCommon from "uih-appcommon";
import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import { CommandHelper } from 'uih-viewerkit';


export class FilmingActionZoom extends Viewer.ActionZoom {
    private clickPoint: AppCommon.Point = new AppCommon.Point(0, 0);

    mouseDown(args: Viewer.MouseActionArgs): void {
        this.clickPoint = args.relativePosition;
        this.isMouseDown = true;
        this.isMouseMove = false;
        this.previousPoint = args.absolutePosition;
        this.isActionDone = false;
        this.startPoint = args.relativePosition;
        this.isNonimageUpdate = false;
        const operationType = 'zoom';
        const msg = $PB.MsgCommonString.create();
        msg.value = 'initial|'
        for (var i = 0; i < args.selectedCells.length; i++) {
            if (i == args.selectedCells.length - 1) {
                msg.value = msg.value + args.selectedCells[i].cellName;
            } else {
                msg.value = msg.value + args.selectedCells[i].cellName + '|';
            }
        }
        const buffer = $PB.MsgCommonString.encode(msg).finish();  
        CommandHelper.sendCellOperation(args.selectedCell.viewerControl.commandSender, buffer, operationType, args.selectedCell.cellName);
       // args.selectedCell.viewerControl.commandSender.sendCellOperation(buffer, operationType, args.selectedCell.cellName);
    }

    update(cell: Viewer.MedViewerControlCell, start: AppCommon.Point, end: AppCommon.Point): void {
        const doublePoints = $PB.MsgDoublePointList.create();
        doublePoints.pointList.push(CommandHelper.buildDoublePoint(this.clickPoint));
        doublePoints.pointList.push(CommandHelper.buildDoublePoint(start));
        doublePoints.pointList.push(CommandHelper.buildDoublePoint(end));
        const buffer = $PB.MsgDoublePointList.encode(doublePoints).finish();
        const feTime = AppCommon.DateTimeHelper.getTimeString();
        CommandHelper.sendCellOperation(cell.viewerControl.commandSender, buffer, 'zoom', cell.cellName, feTime);
    }
}

export class FilmingActionPan extends Viewer.ActionPan { 
    

    mouseDown(args: Viewer.MouseActionArgs): void {
        this.isMouseDown = true;
        this.isMouseMove = false;
        this.previousPoint = args.absolutePosition;
        this.isActionDone = false;
        this.startPoint = args.relativePosition;
        this.isNonimageUpdate = false;
        const operationType = 'pan';
        const msg = $PB.MsgCommonString.create();
        msg.value = 'initial|'
        for (var i = 0; i < args.selectedCells.length; i++) {
            if (i == args.selectedCells.length - 1) {
                msg.value = msg.value + args.selectedCells[i].cellName;
            } else {
                msg.value = msg.value + args.selectedCells[i].cellName + '|';
            }
        }
        const buffer = $PB.MsgCommonString.encode(msg).finish();
        CommandHelper.sendCellOperation(args.selectedCell.viewerControl.commandSender, buffer, operationType, args.selectedCell.cellName);
        // args.selectedCell.viewerControl.commandSender.sendCellOperation(buffer, operationType, args.selectedCell.cellName);
    }

    update(cell: Viewer.MedViewerControlCell, start: AppCommon.Point, end: AppCommon.Point): void {
        const feTime = AppCommon.DateTimeHelper.getTimeString();
        CommandHelper.cellCommonOperation(cell.viewerControl.commandSender, 'pan', cell.cellName, start, end, feTime);
    }

}

export class FilmingActionWindowing extends Viewer.ActionWindowing {

    mouseDown(args: Viewer.MouseActionArgs): void {
        this.isMouseDown = true;
        this.isMouseMove = false;
        this.previousPoint = args.absolutePosition;
        this.isActionDone = false;
        this.startPoint = args.relativePosition;
        this.isNonimageUpdate = false;
        const operationType = 'windowing';
        const msg = $PB.MsgCommonString.create();
        msg.value = 'initial|'
        for (var i = 0; i < args.selectedCells.length; i++) {
            if (i == args.selectedCells.length - 1) {
                msg.value = msg.value + args.selectedCells[i].cellName;
            } else {
                msg.value = msg.value + args.selectedCells[i].cellName + '|';
            }
        }
        const buffer = $PB.MsgCommonString.encode(msg).finish();
        CommandHelper.sendCellOperation(args.selectedCell.viewerControl.commandSender, buffer, operationType, args.selectedCell.cellName);
        //args.selectedCell.viewerControl.commandSender.sendCellOperation(buffer, operationType, args.selectedCell.cellName);
    }
}

export class FilmingActionPointer extends Viewer.ActionBase {
    constructor() {
        super();
    }
    clearHittedGrphic(): void {}
}