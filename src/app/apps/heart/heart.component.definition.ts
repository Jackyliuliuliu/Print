import * as ViewerKit from 'uih-viewerkit';
import * as Appcommon from 'uih-appcommon';
import * as Viewer from 'uih-medviewercontrol';
import * as $PBRoot from 'uih-app-protocol';
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import { CurveEditType } from 'uih-viewerkit';

export enum HRTActionType {
    CenterLineSinglePoint = 1100,
    CenterLineMultiPoint = 1101,
    PageUpDown = 1102,
    VRExtendCenterLine = 1103,
    MPRExtendCenterLine = 1104,
    SculptAll = 1105,
    SculptSelected = 1106,
    Eraser_Add = 1107,
    Eraser_Remove = 1108,
    AddPlaque = 1109,
    PlaqueEraser_Add = 1110,
    PlaqueEraser_Remove = 1111,
    ActionMPRCoronaryGrow = 1112,
    ActionMPRSectionEmpty = 1113,
}

export class CellTypeName {
    public static readonly VR = 'VR';
    public static readonly MPR = 'MPR';
    public static readonly CPR = 'CPR';
    public static readonly Mesh = 'Mesh';
}

export class HRTCommonUtilities {
    public static ConvertCenterLineEditType(oriType: ViewerKit.CurveEditType): $PB.EnumEditCenterlineFrom {
        let result = $PB.EnumEditCenterlineFrom.EnumEditCenterlineFrom_None;

        switch (oriType) {
            case CurveEditType.EditFromHead:
                result = $PB.EnumEditCenterlineFrom.EnumEditCenterlineFrom_Head;
                break;
            case CurveEditType.EditFromRear:
                result = $PB.EnumEditCenterlineFrom.EnumEditCenterlineFrom_Rear;
                break;
            case CurveEditType.EditTrace:
                result = $PB.EnumEditCenterlineFrom.EnumEditCenterlineFrom_Middle;
                break;
            default:
                break;
        }

        return result;
    }
}

export class HRTCellNames {
    public static readonly VR = 'A_VR';
}

export class HRTConst {
    public static readonly NonSelectedItemID = -1;
    public static readonly StenosisRangeHalfLength = 3;
}