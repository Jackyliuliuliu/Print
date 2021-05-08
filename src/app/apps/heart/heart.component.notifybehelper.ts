import * as ViewerKit from 'uih-viewerkit';
import * as Appcommon from 'uih-appcommon';
import * as Viewer from 'uih-medviewercontrol';
import * as $PBRoot from 'uih-app-protocol';
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import * as CardiacProtoCommon from './CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol
import { findIndex } from 'rxjs/operators';

export class CenterLineBEHelper {
    public static ExtendCenterLine(ptInNormal: Appcommon.Point, editType: $PB.EnumEditCenterlineFrom): void {
        //todo.
    }

    public static ModifyCenterLine(
        modifiedZs: number[],
        changedNormalItems: [number, number, Appcommon.Point[], number[]][],
        ptLastNormal: Appcommon.Point,
        cm: Viewer.IMedViewerControlCommandSender,
        cellName: string): void {
        const msgCenterLineEdit = $PB.MsgCenterLineEdit.create();
        msgCenterLineEdit.editItem = [];
        changedNormalItems.forEach(item => {
            const editItem = $PB.MsgCenterLineEditItem.create();
            editItem.startIndex = item['0'];
            editItem.endIndex = item['1'];

            editItem.pointList = [];
            item['2'].forEach(point => {
                const pt = $PB.MsgDoublePoint.create();
                pt.x = point.x;
                pt.y = point.y;
                editItem.pointList.push(pt);
            });

            editItem.zIndex = [];
            modifiedZs.forEach(zIndex => {
                editItem.zIndex.push(zIndex);
            });

            msgCenterLineEdit.editItem.push(editItem);
        });

        const lastPoint = $PB.MsgDoublePoint.create();
        lastPoint.x = ptLastNormal.x;
        lastPoint.y = ptLastNormal.y;
        msgCenterLineEdit.lastPoint = lastPoint;

        const buffer = $PB.MsgCenterLineEdit.encode(msgCenterLineEdit).finish()
        cm.sendCellOperation(buffer, 'CenterLineEdit', cellName);
    }

    public static FixPosition(editType: $PB.EnumEditCenterlineFrom,
        cell: Viewer.MedViewerControlCell,
        cm: Viewer.IMedViewerControlCommandSender): void {

        const msgCenterLineExtend = $PB.MsgCenterLineExtend.create();
        msgCenterLineExtend.extendFrom = editType;

        //let ptNormal: Point = new Point(0, 0);
        const pt = $PB.MsgDoublePoint.create();
        pt.x = 0;
        pt.y = 0;
        msgCenterLineExtend.targetPoint = pt;

        const buffer = $PB.MsgCenterLineExtend.encode(msgCenterLineExtend).finish();
        cm.sendCellOperation(buffer, 'CenterLineFixPosition', cell.cellName);
    }

    public static UpdateCenterLine(cm: Viewer.IMedViewerControlCommandSender,
        operatoinType: CardiacProto.ListOperationType,
        id: number,
        name: string,
        findIndex: number = 0): void {
        const msgCenterLineB = CardiacProto.MessageCenterLine.create();
        msgCenterLineB.ID = id;
        msgCenterLineB.Name = name;
        msgCenterLineB.FindIndex = findIndex;

        const msgUpdateCenterLineB = CardiacProto.MessageUpdateCenterLine.create();
        msgUpdateCenterLineB.OperationType = operatoinType;
        msgUpdateCenterLineB.CenterLine = msgCenterLineB;

        const buffer = CardiacProto.MessageUpdateCenterLine.encode(msgUpdateCenterLineB).finish();
        ViewerKit.CommandHelper.sendPanelOperation(cm, buffer, 'UpdateCenterLine');
    }
}