import * as Viewer from "uih-medviewercontrol";
import * as AppCommon from "uih-appcommon";
import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import { CommandHelper } from 'uih-viewerkit';

export class HRTActionZoom extends Viewer.ActionZoom {
    private clickPoint: AppCommon.Point = new AppCommon.Point(0, 0);

    mouseDown(args: Viewer.MouseActionArgs): void {
        super.mouseDown(args);
        this.clickPoint = args.relativePosition;
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

export class RapidResultsPageUpDownAction extends Viewer.ActionBase {
    mousewheel(args: Viewer.MouseActionArgs) {
        super.mousewheel(args);
        console.log('mousewheel', args);
        AppCommon.Messenger.trigger('updateRapidResult');
    }
    mouseDown(args: Viewer.MouseActionArgs): void {
        super.mouseDown(args);
        //console.log('mouseDown', args);
    }
    mouseMove(args: Viewer.MouseActionArgs): void {
        if (this.isMouseDown) {
            super.mouseMove(args);
            //console.log('mouseMove', args);
            //AppCommon.Messenger.trigger('updateRapidResult');
        }
    }
    mouseUp(args: Viewer.MouseActionArgs): void {
        super.mouseUp(args);
        //console.log('mouseUp', args);
    }
}

export class MPRSectionEmptyAction extends Viewer.ActionBase {
    mouseDown(args: Viewer.MouseActionArgs): void {
        super.mouseDown(args);
        this.activeCursorType = AppCommon.Cursors.NO;
    }

    mouseUp(args: Viewer.MouseActionArgs): void {
        super.mouseUp(args);
        this.activeCursorType = AppCommon.Cursors.NORMAL;
    }
}