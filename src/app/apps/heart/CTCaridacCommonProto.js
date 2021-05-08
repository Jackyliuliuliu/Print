/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default1"] || ($protobuf.roots["default1"] = {});

$root.Mcsf = (function() {

    /**
     * Namespace Mcsf.
     * @exports Mcsf
     * @namespace
     */
    var Mcsf = {};

    Mcsf.CTCardiacCommonProtocol = (function() {

        /**
         * Namespace CTCardiacCommonProtocol.
         * @memberof Mcsf
         * @namespace
         */
        var CTCardiacCommonProtocol = {};

        /**
         * SculptorMode enum.
         * @name Mcsf.CTCardiacCommonProtocol.SculptorMode
         * @enum {number}
         * @property {number} All=1 All value
         * @property {number} Selected=2 Selected value
         */
        CTCardiacCommonProtocol.SculptorMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "All"] = 1;
            values[valuesById[2] = "Selected"] = 2;
            return values;
        })();

        /**
         * ListOperationType enum.
         * @name Mcsf.CTCardiacCommonProtocol.ListOperationType
         * @enum {number}
         * @property {number} ListOperationType_Add=1 ListOperationType_Add value
         * @property {number} ListOperationType_Delete=2 ListOperationType_Delete value
         * @property {number} ListOperationType_Rename=3 ListOperationType_Rename value
         * @property {number} ListOperationType_Select=4 ListOperationType_Select value
         * @property {number} ListOperationType_Change=5 ListOperationType_Change value
         */
        CTCardiacCommonProtocol.ListOperationType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ListOperationType_Add"] = 1;
            values[valuesById[2] = "ListOperationType_Delete"] = 2;
            values[valuesById[3] = "ListOperationType_Rename"] = 3;
            values[valuesById[4] = "ListOperationType_Select"] = 4;
            values[valuesById[5] = "ListOperationType_Change"] = 5;
            return values;
        })();

        /**
         * RapidResultsImageType enum.
         * @name Mcsf.CTCardiacCommonProtocol.RapidResultsImageType
         * @enum {number}
         * @property {number} RapidResultsImageType_VR=1 RapidResultsImageType_VR value
         * @property {number} RapidResultsImageType_MIP=2 RapidResultsImageType_MIP value
         * @property {number} RapidResultsImageType_CPR=3 RapidResultsImageType_CPR value
         * @property {number} RapidResultsImageType_SCPR=4 RapidResultsImageType_SCPR value
         */
        CTCardiacCommonProtocol.RapidResultsImageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "RapidResultsImageType_VR"] = 1;
            values[valuesById[2] = "RapidResultsImageType_MIP"] = 2;
            values[valuesById[3] = "RapidResultsImageType_CPR"] = 3;
            values[valuesById[4] = "RapidResultsImageType_SCPR"] = 4;
            return values;
        })();

        /**
         * StenosisMarkType enum.
         * @name Mcsf.CTCardiacCommonProtocol.StenosisMarkType
         * @enum {number}
         * @property {number} StenosisMarkType_Unknown=0 StenosisMarkType_Unknown value
         * @property {number} StenosisMarkType_Proximal=1 StenosisMarkType_Proximal value
         * @property {number} StenosisMarkType_Distal=2 StenosisMarkType_Distal value
         * @property {number} StenosisMarkType_Nidus=3 StenosisMarkType_Nidus value
         */
        CTCardiacCommonProtocol.StenosisMarkType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "StenosisMarkType_Unknown"] = 0;
            values[valuesById[1] = "StenosisMarkType_Proximal"] = 1;
            values[valuesById[2] = "StenosisMarkType_Distal"] = 2;
            values[valuesById[3] = "StenosisMarkType_Nidus"] = 3;
            return values;
        })();

        /**
         * StenosisDegree enum.
         * @name Mcsf.CTCardiacCommonProtocol.StenosisDegree
         * @enum {number}
         * @property {number} StenosisDegree_None=0 StenosisDegree_None value
         * @property {number} StenosisDegree_Slight=1 StenosisDegree_Slight value
         * @property {number} StenosisDegree_Mild=2 StenosisDegree_Mild value
         * @property {number} StenosisDegree_Moderate=3 StenosisDegree_Moderate value
         * @property {number} StenosisDegree_Severe=4 StenosisDegree_Severe value
         * @property {number} StenosisDegree_Blocking=5 StenosisDegree_Blocking value
         */
        CTCardiacCommonProtocol.StenosisDegree = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "StenosisDegree_None"] = 0;
            values[valuesById[1] = "StenosisDegree_Slight"] = 1;
            values[valuesById[2] = "StenosisDegree_Mild"] = 2;
            values[valuesById[3] = "StenosisDegree_Moderate"] = 3;
            values[valuesById[4] = "StenosisDegree_Severe"] = 4;
            values[valuesById[5] = "StenosisDegree_Blocking"] = 5;
            return values;
        })();

        /**
         * StenosisMarkDistanceType enum.
         * @name Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType
         * @enum {number}
         * @property {number} StenosisMarkDistanceType_Unknown=0 StenosisMarkDistanceType_Unknown value
         * @property {number} StenosisMarkDistanceType_Proximal=1 StenosisMarkDistanceType_Proximal value
         * @property {number} StenosisMarkDistanceType_Distal=2 StenosisMarkDistanceType_Distal value
         * @property {number} StenosisMarkDistanceType_Total=3 StenosisMarkDistanceType_Total value
         */
        CTCardiacCommonProtocol.StenosisMarkDistanceType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "StenosisMarkDistanceType_Unknown"] = 0;
            values[valuesById[1] = "StenosisMarkDistanceType_Proximal"] = 1;
            values[valuesById[2] = "StenosisMarkDistanceType_Distal"] = 2;
            values[valuesById[3] = "StenosisMarkDistanceType_Total"] = 3;
            return values;
        })();

        /**
         * ContourDiameterType enum.
         * @name Mcsf.CTCardiacCommonProtocol.ContourDiameterType
         * @enum {number}
         * @property {number} ContourDiameterType_Max=1 ContourDiameterType_Max value
         * @property {number} ContourDiameterType_Min=2 ContourDiameterType_Min value
         */
        CTCardiacCommonProtocol.ContourDiameterType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ContourDiameterType_Max"] = 1;
            values[valuesById[2] = "ContourDiameterType_Min"] = 2;
            return values;
        })();

        /**
         * StatisticsType enum.
         * @name Mcsf.CTCardiacCommonProtocol.StatisticsType
         * @enum {number}
         * @property {number} StatisticsType_Area=1 StatisticsType_Area value
         * @property {number} StatisticsType_MinDiameter=2 StatisticsType_MinDiameter value
         * @property {number} StatisticsType_MaxDiameter=3 StatisticsType_MaxDiameter value
         */
        CTCardiacCommonProtocol.StatisticsType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "StatisticsType_Area"] = 1;
            values[valuesById[2] = "StatisticsType_MinDiameter"] = 2;
            values[valuesById[3] = "StatisticsType_MaxDiameter"] = 3;
            return values;
        })();

        /**
         * TissueDisplayMode enum.
         * @name Mcsf.CTCardiacCommonProtocol.TissueDisplayMode
         * @enum {number}
         * @property {number} TissueDisplayMode_None=0 TissueDisplayMode_None value
         * @property {number} AllTissue=1 AllTissue value
         * @property {number} CoronaryTissue=2 CoronaryTissue value
         */
        CTCardiacCommonProtocol.TissueDisplayMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TissueDisplayMode_None"] = 0;
            values[valuesById[1] = "AllTissue"] = 1;
            values[valuesById[2] = "CoronaryTissue"] = 2;
            return values;
        })();

        /**
         * LoadSeriesMode enum.
         * @name Mcsf.CTCardiacCommonProtocol.LoadSeriesMode
         * @enum {number}
         * @property {number} Replace=1 Replace value
         * @property {number} Append=2 Append value
         * @property {number} Cancel=3 Cancel value
         */
        CTCardiacCommonProtocol.LoadSeriesMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "Replace"] = 1;
            values[valuesById[2] = "Append"] = 2;
            values[valuesById[3] = "Cancel"] = 3;
            return values;
        })();

        /**
         * StenosisMode enum.
         * @name Mcsf.CTCardiacCommonProtocol.StenosisMode
         * @enum {number}
         * @property {number} Stenosis=0 Stenosis value
         * @property {number} Plaque=1 Plaque value
         */
        CTCardiacCommonProtocol.StenosisMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Stenosis"] = 0;
            values[valuesById[1] = "Plaque"] = 1;
            return values;
        })();

        /**
         * VentricleContourType enum.
         * @name Mcsf.CTCardiacCommonProtocol.VentricleContourType
         * @enum {number}
         * @property {number} VentricleContourType_None=0 VentricleContourType_None value
         * @property {number} VentricleContourType_Right=1 VentricleContourType_Right value
         * @property {number} VentricleContourType_Left=2 VentricleContourType_Left value
         * @property {number} VentricleContourType_Left_Myocardium=3 VentricleContourType_Left_Myocardium value
         * @property {number} VentricleContourType_All=4 VentricleContourType_All value
         */
        CTCardiacCommonProtocol.VentricleContourType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "VentricleContourType_None"] = 0;
            values[valuesById[1] = "VentricleContourType_Right"] = 1;
            values[valuesById[2] = "VentricleContourType_Left"] = 2;
            values[valuesById[3] = "VentricleContourType_Left_Myocardium"] = 3;
            values[valuesById[4] = "VentricleContourType_All"] = 4;
            return values;
        })();

        /**
         * VentricleContourRedoUndoType enum.
         * @name Mcsf.CTCardiacCommonProtocol.VentricleContourRedoUndoType
         * @enum {number}
         * @property {number} VentricleContourRedoUndoType_Redo=0 VentricleContourRedoUndoType_Redo value
         * @property {number} VentricleContourRedoUndoType_Undo=1 VentricleContourRedoUndoType_Undo value
         */
        CTCardiacCommonProtocol.VentricleContourRedoUndoType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "VentricleContourRedoUndoType_Redo"] = 0;
            values[valuesById[1] = "VentricleContourRedoUndoType_Undo"] = 1;
            return values;
        })();

        /**
         * SimpsonCurveType enum.
         * @name Mcsf.CTCardiacCommonProtocol.SimpsonCurveType
         * @enum {number}
         * @property {number} SimpsonCurveType_LeftVentricleVolume=0 SimpsonCurveType_LeftVentricleVolume value
         * @property {number} SimpsonCurveType_RightVentricleVolume=1 SimpsonCurveType_RightVentricleVolume value
         * @property {number} SimpsonCurveType_VentricleWallThickness=2 SimpsonCurveType_VentricleWallThickness value
         * @property {number} SimpsonCurveType_VentricleWallThickening=3 SimpsonCurveType_VentricleWallThickening value
         * @property {number} SimpsonCurveType_VentricleWallMotion=4 SimpsonCurveType_VentricleWallMotion value
         */
        CTCardiacCommonProtocol.SimpsonCurveType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SimpsonCurveType_LeftVentricleVolume"] = 0;
            values[valuesById[1] = "SimpsonCurveType_RightVentricleVolume"] = 1;
            values[valuesById[2] = "SimpsonCurveType_VentricleWallThickness"] = 2;
            values[valuesById[3] = "SimpsonCurveType_VentricleWallThickening"] = 3;
            values[valuesById[4] = "SimpsonCurveType_VentricleWallMotion"] = 4;
            return values;
        })();

        /**
         * BullEyeMapType enum.
         * @name Mcsf.CTCardiacCommonProtocol.BullEyeMapType
         * @enum {number}
         * @property {number} BullEyeMapType_ED=0 BullEyeMapType_ED value
         * @property {number} BullEyeMapType_ES=1 BullEyeMapType_ES value
         * @property {number} BullEyeMapType_WallThickening=2 BullEyeMapType_WallThickening value
         * @property {number} BullEyeMapType_WallMotion=3 BullEyeMapType_WallMotion value
         */
        CTCardiacCommonProtocol.BullEyeMapType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BullEyeMapType_ED"] = 0;
            values[valuesById[1] = "BullEyeMapType_ES"] = 1;
            values[valuesById[2] = "BullEyeMapType_WallThickening"] = 2;
            values[valuesById[3] = "BullEyeMapType_WallMotion"] = 3;
            return values;
        })();

        /**
         * ValveType enum.
         * @name Mcsf.CTCardiacCommonProtocol.ValveType
         * @enum {number}
         * @property {number} ValveType_Normal=0 ValveType_Normal value
         * @property {number} ValveType_MitralValve=1 ValveType_MitralValve value
         * @property {number} ValveType_AorticValve=2 ValveType_AorticValve value
         * @property {number} ValveType_TricuspidValve=3 ValveType_TricuspidValve value
         */
        CTCardiacCommonProtocol.ValveType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ValveType_Normal"] = 0;
            values[valuesById[1] = "ValveType_MitralValve"] = 1;
            values[valuesById[2] = "ValveType_AorticValve"] = 2;
            values[valuesById[3] = "ValveType_TricuspidValve"] = 3;
            return values;
        })();

        /**
         * CoronaryOrientationType enum.
         * @name Mcsf.CTCardiacCommonProtocol.CoronaryOrientationType
         * @enum {number}
         * @property {number} LeftAnteriorObliquePosition_0_Skull_0=1 LeftAnteriorObliquePosition_0_Skull_0 value
         * @property {number} LeftAnteriorObliquePosition_20_Skull_0=2 LeftAnteriorObliquePosition_20_Skull_0 value
         * @property {number} LeftAnteriorObliquePosition_20_Skull_30=3 LeftAnteriorObliquePosition_20_Skull_30 value
         * @property {number} LeftAnteriorObliquePosition_0_Skull_45=4 LeftAnteriorObliquePosition_0_Skull_45 value
         * @property {number} RightAnteriorObliquePosition_30_Skull_40=5 RightAnteriorObliquePosition_30_Skull_40 value
         * @property {number} RightAnteriorObliquePosition_30_Tail_20=6 RightAnteriorObliquePosition_30_Tail_20 value
         * @property {number} LeftAnteriorObliquePosition_0_Tail_40=7 LeftAnteriorObliquePosition_0_Tail_40 value
         * @property {number} LeftAnteriorObliquePosition_40_Tail_30=8 LeftAnteriorObliquePosition_40_Tail_30 value
         * @property {number} LeftAnteriorObliquePosition_60_Skull_0=9 LeftAnteriorObliquePosition_60_Skull_0 value
         * @property {number} LeftAnteriorObliquePosition_20_Tail_20=10 LeftAnteriorObliquePosition_20_Tail_20 value
         * @property {number} RightAnteriorObliquePosition_30_Skull_0=11 RightAnteriorObliquePosition_30_Skull_0 value
         * @property {number} CoronaryOrientationType_None=12 CoronaryOrientationType_None value
         */
        CTCardiacCommonProtocol.CoronaryOrientationType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "LeftAnteriorObliquePosition_0_Skull_0"] = 1;
            values[valuesById[2] = "LeftAnteriorObliquePosition_20_Skull_0"] = 2;
            values[valuesById[3] = "LeftAnteriorObliquePosition_20_Skull_30"] = 3;
            values[valuesById[4] = "LeftAnteriorObliquePosition_0_Skull_45"] = 4;
            values[valuesById[5] = "RightAnteriorObliquePosition_30_Skull_40"] = 5;
            values[valuesById[6] = "RightAnteriorObliquePosition_30_Tail_20"] = 6;
            values[valuesById[7] = "LeftAnteriorObliquePosition_0_Tail_40"] = 7;
            values[valuesById[8] = "LeftAnteriorObliquePosition_40_Tail_30"] = 8;
            values[valuesById[9] = "LeftAnteriorObliquePosition_60_Skull_0"] = 9;
            values[valuesById[10] = "LeftAnteriorObliquePosition_20_Tail_20"] = 10;
            values[valuesById[11] = "RightAnteriorObliquePosition_30_Skull_0"] = 11;
            values[valuesById[12] = "CoronaryOrientationType_None"] = 12;
            return values;
        })();

        /**
         * SliderLocationChangeType enum.
         * @name Mcsf.CTCardiacCommonProtocol.SliderLocationChangeType
         * @enum {number}
         * @property {number} SliderLocationChangeType_Offset=1 SliderLocationChangeType_Offset value
         * @property {number} SliderLocationChangeType_Index=2 SliderLocationChangeType_Index value
         */
        CTCardiacCommonProtocol.SliderLocationChangeType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "SliderLocationChangeType_Offset"] = 1;
            values[valuesById[2] = "SliderLocationChangeType_Index"] = 2;
            return values;
        })();

        /**
         * BEStatusEnum enum.
         * @name Mcsf.CTCardiacCommonProtocol.BEStatusEnum
         * @enum {number}
         * @property {number} BEStatusEnum_LoadSeriesStart=31 BEStatusEnum_LoadSeriesStart value
         * @property {number} BEStatusEnum_LoadSeriesEnd=32 BEStatusEnum_LoadSeriesEnd value
         * @property {number} BEStatusEnum_LoadSeriesFailed=33 BEStatusEnum_LoadSeriesFailed value
         * @property {number} BEStatusEnum_LoadSeriesCanceled=34 BEStatusEnum_LoadSeriesCanceled value
         * @property {number} BEStatusEnum_LoadBookmarkStart=35 BEStatusEnum_LoadBookmarkStart value
         * @property {number} BEStatusEnum_LoadBookmarkEnd=36 BEStatusEnum_LoadBookmarkEnd value
         * @property {number} BEStatusEnum_ChamberSegmentStart=37 BEStatusEnum_ChamberSegmentStart value
         * @property {number} BEStatusEnum_ChamberSegmentFailed=38 BEStatusEnum_ChamberSegmentFailed value
         * @property {number} BEStatusEnum_ChamberSegmentEnd=39 BEStatusEnum_ChamberSegmentEnd value
         * @property {number} BEStatusEnum_AutoExtractCenterLineStart=40 BEStatusEnum_AutoExtractCenterLineStart value
         * @property {number} BEStatusEnum_AutoExtractCenterLineFailed=41 BEStatusEnum_AutoExtractCenterLineFailed value
         * @property {number} BEStatusEnum_AutoExtractCenterLineEnd=42 BEStatusEnum_AutoExtractCenterLineEnd value
         * @property {number} BEStatusEnum_ManualExtractCenterLineStart=43 BEStatusEnum_ManualExtractCenterLineStart value
         * @property {number} BEStatusEnum_ManualExtractCenterLineFailed=44 BEStatusEnum_ManualExtractCenterLineFailed value
         * @property {number} BEStatusEnum_ManualExtractCenterLineEnd=45 BEStatusEnum_ManualExtractCenterLineEnd value
         * @property {number} BEStatusEnum_AllPhaseAutoProcessed=46 BEStatusEnum_AllPhaseAutoProcessed value
         * @property {number} BEStatusEnum_AllPhaseCalBullEyeMapEnd=47 BEStatusEnum_AllPhaseCalBullEyeMapEnd value
         * @property {number} BEStatusEnum_UnlockMedViewerControl=48 BEStatusEnum_UnlockMedViewerControl value
         * @property {number} BEStatusEnum_ChangeToNewVolume=49 BEStatusEnum_ChangeToNewVolume value
         */
        CTCardiacCommonProtocol.BEStatusEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[31] = "BEStatusEnum_LoadSeriesStart"] = 31;
            values[valuesById[32] = "BEStatusEnum_LoadSeriesEnd"] = 32;
            values[valuesById[33] = "BEStatusEnum_LoadSeriesFailed"] = 33;
            values[valuesById[34] = "BEStatusEnum_LoadSeriesCanceled"] = 34;
            values[valuesById[35] = "BEStatusEnum_LoadBookmarkStart"] = 35;
            values[valuesById[36] = "BEStatusEnum_LoadBookmarkEnd"] = 36;
            values[valuesById[37] = "BEStatusEnum_ChamberSegmentStart"] = 37;
            values[valuesById[38] = "BEStatusEnum_ChamberSegmentFailed"] = 38;
            values[valuesById[39] = "BEStatusEnum_ChamberSegmentEnd"] = 39;
            values[valuesById[40] = "BEStatusEnum_AutoExtractCenterLineStart"] = 40;
            values[valuesById[41] = "BEStatusEnum_AutoExtractCenterLineFailed"] = 41;
            values[valuesById[42] = "BEStatusEnum_AutoExtractCenterLineEnd"] = 42;
            values[valuesById[43] = "BEStatusEnum_ManualExtractCenterLineStart"] = 43;
            values[valuesById[44] = "BEStatusEnum_ManualExtractCenterLineFailed"] = 44;
            values[valuesById[45] = "BEStatusEnum_ManualExtractCenterLineEnd"] = 45;
            values[valuesById[46] = "BEStatusEnum_AllPhaseAutoProcessed"] = 46;
            values[valuesById[47] = "BEStatusEnum_AllPhaseCalBullEyeMapEnd"] = 47;
            values[valuesById[48] = "BEStatusEnum_UnlockMedViewerControl"] = 48;
            values[valuesById[49] = "BEStatusEnum_ChangeToNewVolume"] = 49;
            return values;
        })();

        /**
         * TissueVisibilityMode enum.
         * @name Mcsf.CTCardiacCommonProtocol.TissueVisibilityMode
         * @enum {number}
         * @property {number} TissueVisibilityMode_All=0 TissueVisibilityMode_All value
         * @property {number} TissueVisibilityMode_None=1 TissueVisibilityMode_None value
         * @property {number} TissueVisibilityMode_Coronary=2 TissueVisibilityMode_Coronary value
         * @property {number} TissueVisibilityMode_Cardiac=3 TissueVisibilityMode_Cardiac value
         */
        CTCardiacCommonProtocol.TissueVisibilityMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TissueVisibilityMode_All"] = 0;
            values[valuesById[1] = "TissueVisibilityMode_None"] = 1;
            values[valuesById[2] = "TissueVisibilityMode_Coronary"] = 2;
            values[valuesById[3] = "TissueVisibilityMode_Cardiac"] = 3;
            return values;
        })();

        /**
         * StatusLevel enum.
         * @name Mcsf.CTCardiacCommonProtocol.StatusLevel
         * @enum {number}
         * @property {number} StatusInfo=0 StatusInfo value
         * @property {number} StatusWarn=1 StatusWarn value
         * @property {number} StatusError=2 StatusError value
         */
        CTCardiacCommonProtocol.StatusLevel = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "StatusInfo"] = 0;
            values[valuesById[1] = "StatusWarn"] = 1;
            values[valuesById[2] = "StatusError"] = 2;
            return values;
        })();

        CTCardiacCommonProtocol.MessageSculptorMode = (function() {

            /**
             * Properties of a MessageSculptorMode.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageSculptorMode
             * @property {Mcsf.CTCardiacCommonProtocol.SculptorMode} Mode MessageSculptorMode Mode
             */

            /**
             * Constructs a new MessageSculptorMode.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageSculptorMode.
             * @implements IMessageSculptorMode
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSculptorMode=} [properties] Properties to set
             */
            function MessageSculptorMode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageSculptorMode Mode.
             * @member {Mcsf.CTCardiacCommonProtocol.SculptorMode} Mode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @instance
             */
            MessageSculptorMode.prototype.Mode = 1;

            /**
             * Creates a new MessageSculptorMode instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSculptorMode=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSculptorMode} MessageSculptorMode instance
             */
            MessageSculptorMode.create = function create(properties) {
                return new MessageSculptorMode(properties);
            };

            /**
             * Encodes the specified MessageSculptorMode message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSculptorMode.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSculptorMode} message MessageSculptorMode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSculptorMode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Mode);
                return writer;
            };

            /**
             * Encodes the specified MessageSculptorMode message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSculptorMode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSculptorMode} message MessageSculptorMode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSculptorMode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageSculptorMode message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSculptorMode} MessageSculptorMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSculptorMode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSculptorMode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Mode = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("Mode"))
                    throw $util.ProtocolError("missing required 'Mode'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageSculptorMode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSculptorMode} MessageSculptorMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSculptorMode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageSculptorMode message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageSculptorMode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.Mode) {
                default:
                    return "Mode: enum value expected";
                case 1:
                case 2:
                    break;
                }
                return null;
            };

            /**
             * Creates a MessageSculptorMode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSculptorMode} MessageSculptorMode
             */
            MessageSculptorMode.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageSculptorMode)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSculptorMode();
                switch (object.Mode) {
                case "All":
                case 1:
                    message.Mode = 1;
                    break;
                case "Selected":
                case 2:
                    message.Mode = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageSculptorMode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageSculptorMode} message MessageSculptorMode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageSculptorMode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Mode = options.enums === String ? "All" : 1;
                if (message.Mode != null && message.hasOwnProperty("Mode"))
                    object.Mode = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.SculptorMode[message.Mode] : message.Mode;
                return object;
            };

            /**
             * Converts this MessageSculptorMode to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSculptorMode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageSculptorMode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageSculptorMode;
        })();

        CTCardiacCommonProtocol.MessageCenterLineList = (function() {

            /**
             * Properties of a MessageCenterLineList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageCenterLineList
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageCenterLine>|null} [CenterLine] MessageCenterLineList CenterLine
             * @property {number} SelectedCenterLineID MessageCenterLineList SelectedCenterLineID
             */

            /**
             * Constructs a new MessageCenterLineList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageCenterLineList.
             * @implements IMessageCenterLineList
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineList=} [properties] Properties to set
             */
            function MessageCenterLineList(properties) {
                this.CenterLine = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageCenterLineList CenterLine.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageCenterLine>} CenterLine
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @instance
             */
            MessageCenterLineList.prototype.CenterLine = $util.emptyArray;

            /**
             * MessageCenterLineList SelectedCenterLineID.
             * @member {number} SelectedCenterLineID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @instance
             */
            MessageCenterLineList.prototype.SelectedCenterLineID = 0;

            /**
             * Creates a new MessageCenterLineList instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineList=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineList} MessageCenterLineList instance
             */
            MessageCenterLineList.create = function create(properties) {
                return new MessageCenterLineList(properties);
            };

            /**
             * Encodes the specified MessageCenterLineList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineList.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineList} message MessageCenterLineList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCenterLineList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.CenterLine != null && message.CenterLine.length)
                    for (var i = 0; i < message.CenterLine.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.encode(message.CenterLine[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SelectedCenterLineID);
                return writer;
            };

            /**
             * Encodes the specified MessageCenterLineList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineList} message MessageCenterLineList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCenterLineList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageCenterLineList message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineList} MessageCenterLineList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCenterLineList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLineList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.CenterLine && message.CenterLine.length))
                            message.CenterLine = [];
                        message.CenterLine.push($root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.SelectedCenterLineID = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("SelectedCenterLineID"))
                    throw $util.ProtocolError("missing required 'SelectedCenterLineID'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageCenterLineList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineList} MessageCenterLineList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCenterLineList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageCenterLineList message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageCenterLineList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.CenterLine != null && message.hasOwnProperty("CenterLine")) {
                    if (!Array.isArray(message.CenterLine))
                        return "CenterLine: array expected";
                    for (var i = 0; i < message.CenterLine.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.verify(message.CenterLine[i]);
                        if (error)
                            return "CenterLine." + error;
                    }
                }
                if (!$util.isInteger(message.SelectedCenterLineID))
                    return "SelectedCenterLineID: integer expected";
                return null;
            };

            /**
             * Creates a MessageCenterLineList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineList} MessageCenterLineList
             */
            MessageCenterLineList.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLineList)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLineList();
                if (object.CenterLine) {
                    if (!Array.isArray(object.CenterLine))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageCenterLineList.CenterLine: array expected");
                    message.CenterLine = [];
                    for (var i = 0; i < object.CenterLine.length; ++i) {
                        if (typeof object.CenterLine[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageCenterLineList.CenterLine: object expected");
                        message.CenterLine[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.fromObject(object.CenterLine[i]);
                    }
                }
                if (object.SelectedCenterLineID != null)
                    message.SelectedCenterLineID = object.SelectedCenterLineID | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessageCenterLineList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageCenterLineList} message MessageCenterLineList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageCenterLineList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.CenterLine = [];
                if (options.defaults)
                    object.SelectedCenterLineID = 0;
                if (message.CenterLine && message.CenterLine.length) {
                    object.CenterLine = [];
                    for (var j = 0; j < message.CenterLine.length; ++j)
                        object.CenterLine[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.toObject(message.CenterLine[j], options);
                }
                if (message.SelectedCenterLineID != null && message.hasOwnProperty("SelectedCenterLineID"))
                    object.SelectedCenterLineID = message.SelectedCenterLineID;
                return object;
            };

            /**
             * Converts this MessageCenterLineList to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageCenterLineList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageCenterLineList;
        })();

        CTCardiacCommonProtocol.MessageUpdateCenterLine = (function() {

            /**
             * Properties of a MessageUpdateCenterLine.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageUpdateCenterLine
             * @property {Mcsf.CTCardiacCommonProtocol.ListOperationType} OperationType MessageUpdateCenterLine OperationType
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageCenterLine} CenterLine MessageUpdateCenterLine CenterLine
             * @property {string|null} [CellName] MessageUpdateCenterLine CellName
             */

            /**
             * Constructs a new MessageUpdateCenterLine.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageUpdateCenterLine.
             * @implements IMessageUpdateCenterLine
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageUpdateCenterLine=} [properties] Properties to set
             */
            function MessageUpdateCenterLine(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageUpdateCenterLine OperationType.
             * @member {Mcsf.CTCardiacCommonProtocol.ListOperationType} OperationType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @instance
             */
            MessageUpdateCenterLine.prototype.OperationType = 1;

            /**
             * MessageUpdateCenterLine CenterLine.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageCenterLine} CenterLine
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @instance
             */
            MessageUpdateCenterLine.prototype.CenterLine = null;

            /**
             * MessageUpdateCenterLine CellName.
             * @member {string} CellName
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @instance
             */
            MessageUpdateCenterLine.prototype.CellName = "";

            /**
             * Creates a new MessageUpdateCenterLine instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageUpdateCenterLine=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine} MessageUpdateCenterLine instance
             */
            MessageUpdateCenterLine.create = function create(properties) {
                return new MessageUpdateCenterLine(properties);
            };

            /**
             * Encodes the specified MessageUpdateCenterLine message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageUpdateCenterLine} message MessageUpdateCenterLine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageUpdateCenterLine.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.OperationType);
                $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.encode(message.CenterLine, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.CellName != null && Object.hasOwnProperty.call(message, "CellName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.CellName);
                return writer;
            };

            /**
             * Encodes the specified MessageUpdateCenterLine message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageUpdateCenterLine} message MessageUpdateCenterLine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageUpdateCenterLine.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageUpdateCenterLine message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine} MessageUpdateCenterLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageUpdateCenterLine.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.OperationType = reader.int32();
                        break;
                    case 2:
                        message.CenterLine = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.CellName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("OperationType"))
                    throw $util.ProtocolError("missing required 'OperationType'", { instance: message });
                if (!message.hasOwnProperty("CenterLine"))
                    throw $util.ProtocolError("missing required 'CenterLine'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageUpdateCenterLine message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine} MessageUpdateCenterLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageUpdateCenterLine.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageUpdateCenterLine message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageUpdateCenterLine.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.OperationType) {
                default:
                    return "OperationType: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.verify(message.CenterLine);
                    if (error)
                        return "CenterLine." + error;
                }
                if (message.CellName != null && message.hasOwnProperty("CellName"))
                    if (!$util.isString(message.CellName))
                        return "CellName: string expected";
                return null;
            };

            /**
             * Creates a MessageUpdateCenterLine message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine} MessageUpdateCenterLine
             */
            MessageUpdateCenterLine.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine();
                switch (object.OperationType) {
                case "ListOperationType_Add":
                case 1:
                    message.OperationType = 1;
                    break;
                case "ListOperationType_Delete":
                case 2:
                    message.OperationType = 2;
                    break;
                case "ListOperationType_Rename":
                case 3:
                    message.OperationType = 3;
                    break;
                case "ListOperationType_Select":
                case 4:
                    message.OperationType = 4;
                    break;
                case "ListOperationType_Change":
                case 5:
                    message.OperationType = 5;
                    break;
                }
                if (object.CenterLine != null) {
                    if (typeof object.CenterLine !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine.CenterLine: object expected");
                    message.CenterLine = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.fromObject(object.CenterLine);
                }
                if (object.CellName != null)
                    message.CellName = String(object.CellName);
                return message;
            };

            /**
             * Creates a plain object from a MessageUpdateCenterLine message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine} message MessageUpdateCenterLine
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageUpdateCenterLine.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.OperationType = options.enums === String ? "ListOperationType_Add" : 1;
                    object.CenterLine = null;
                    object.CellName = "";
                }
                if (message.OperationType != null && message.hasOwnProperty("OperationType"))
                    object.OperationType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.ListOperationType[message.OperationType] : message.OperationType;
                if (message.CenterLine != null && message.hasOwnProperty("CenterLine"))
                    object.CenterLine = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.toObject(message.CenterLine, options);
                if (message.CellName != null && message.hasOwnProperty("CellName"))
                    object.CellName = message.CellName;
                return object;
            };

            /**
             * Converts this MessageUpdateCenterLine to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageUpdateCenterLine.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageUpdateCenterLine;
        })();

        CTCardiacCommonProtocol.MessageCenterLine = (function() {

            /**
             * Properties of a MessageCenterLine.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageCenterLine
             * @property {number|null} [ID] MessageCenterLine ID
             * @property {string|null} [Name] MessageCenterLine Name
             * @property {number|null} [FindIndex] MessageCenterLine FindIndex
             */

            /**
             * Constructs a new MessageCenterLine.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageCenterLine.
             * @implements IMessageCenterLine
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLine=} [properties] Properties to set
             */
            function MessageCenterLine(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageCenterLine ID.
             * @member {number} ID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @instance
             */
            MessageCenterLine.prototype.ID = 0;

            /**
             * MessageCenterLine Name.
             * @member {string} Name
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @instance
             */
            MessageCenterLine.prototype.Name = "";

            /**
             * MessageCenterLine FindIndex.
             * @member {number} FindIndex
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @instance
             */
            MessageCenterLine.prototype.FindIndex = 0;

            /**
             * Creates a new MessageCenterLine instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLine=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLine} MessageCenterLine instance
             */
            MessageCenterLine.create = function create(properties) {
                return new MessageCenterLine(properties);
            };

            /**
             * Encodes the specified MessageCenterLine message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLine.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLine} message MessageCenterLine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCenterLine.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
                if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
                if (message.FindIndex != null && Object.hasOwnProperty.call(message, "FindIndex"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.FindIndex);
                return writer;
            };

            /**
             * Encodes the specified MessageCenterLine message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLine.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLine} message MessageCenterLine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCenterLine.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageCenterLine message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLine} MessageCenterLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCenterLine.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ID = reader.int32();
                        break;
                    case 2:
                        message.Name = reader.string();
                        break;
                    case 3:
                        message.FindIndex = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageCenterLine message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLine} MessageCenterLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCenterLine.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageCenterLine message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageCenterLine.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ID != null && message.hasOwnProperty("ID"))
                    if (!$util.isInteger(message.ID))
                        return "ID: integer expected";
                if (message.Name != null && message.hasOwnProperty("Name"))
                    if (!$util.isString(message.Name))
                        return "Name: string expected";
                if (message.FindIndex != null && message.hasOwnProperty("FindIndex"))
                    if (!$util.isInteger(message.FindIndex))
                        return "FindIndex: integer expected";
                return null;
            };

            /**
             * Creates a MessageCenterLine message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLine} MessageCenterLine
             */
            MessageCenterLine.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine();
                if (object.ID != null)
                    message.ID = object.ID | 0;
                if (object.Name != null)
                    message.Name = String(object.Name);
                if (object.FindIndex != null)
                    message.FindIndex = object.FindIndex | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessageCenterLine message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageCenterLine} message MessageCenterLine
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageCenterLine.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ID = 0;
                    object.Name = "";
                    object.FindIndex = 0;
                }
                if (message.ID != null && message.hasOwnProperty("ID"))
                    object.ID = message.ID;
                if (message.Name != null && message.hasOwnProperty("Name"))
                    object.Name = message.Name;
                if (message.FindIndex != null && message.hasOwnProperty("FindIndex"))
                    object.FindIndex = message.FindIndex;
                return object;
            };

            /**
             * Converts this MessageCenterLine to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLine
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageCenterLine.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageCenterLine;
        })();

        CTCardiacCommonProtocol.MessageTissueVisibility = (function() {

            /**
             * Properties of a MessageTissueVisibility.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageTissueVisibility
             * @property {number} ID MessageTissueVisibility ID
             * @property {boolean} IsVisible MessageTissueVisibility IsVisible
             */

            /**
             * Constructs a new MessageTissueVisibility.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageTissueVisibility.
             * @implements IMessageTissueVisibility
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility=} [properties] Properties to set
             */
            function MessageTissueVisibility(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageTissueVisibility ID.
             * @member {number} ID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @instance
             */
            MessageTissueVisibility.prototype.ID = 0;

            /**
             * MessageTissueVisibility IsVisible.
             * @member {boolean} IsVisible
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @instance
             */
            MessageTissueVisibility.prototype.IsVisible = false;

            /**
             * Creates a new MessageTissueVisibility instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility} MessageTissueVisibility instance
             */
            MessageTissueVisibility.create = function create(properties) {
                return new MessageTissueVisibility(properties);
            };

            /**
             * Encodes the specified MessageTissueVisibility message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility} message MessageTissueVisibility message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageTissueVisibility.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsVisible);
                return writer;
            };

            /**
             * Encodes the specified MessageTissueVisibility message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility} message MessageTissueVisibility message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageTissueVisibility.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageTissueVisibility message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility} MessageTissueVisibility
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageTissueVisibility.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ID = reader.int32();
                        break;
                    case 2:
                        message.IsVisible = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ID"))
                    throw $util.ProtocolError("missing required 'ID'", { instance: message });
                if (!message.hasOwnProperty("IsVisible"))
                    throw $util.ProtocolError("missing required 'IsVisible'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageTissueVisibility message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility} MessageTissueVisibility
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageTissueVisibility.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageTissueVisibility message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageTissueVisibility.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
                if (typeof message.IsVisible !== "boolean")
                    return "IsVisible: boolean expected";
                return null;
            };

            /**
             * Creates a MessageTissueVisibility message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility} MessageTissueVisibility
             */
            MessageTissueVisibility.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility();
                if (object.ID != null)
                    message.ID = object.ID | 0;
                if (object.IsVisible != null)
                    message.IsVisible = Boolean(object.IsVisible);
                return message;
            };

            /**
             * Creates a plain object from a MessageTissueVisibility message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility} message MessageTissueVisibility
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageTissueVisibility.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ID = 0;
                    object.IsVisible = false;
                }
                if (message.ID != null && message.hasOwnProperty("ID"))
                    object.ID = message.ID;
                if (message.IsVisible != null && message.hasOwnProperty("IsVisible"))
                    object.IsVisible = message.IsVisible;
                return object;
            };

            /**
             * Converts this MessageTissueVisibility to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageTissueVisibility.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageTissueVisibility;
        })();

        CTCardiacCommonProtocol.MessageTissueVisibilityList = (function() {

            /**
             * Properties of a MessageTissueVisibilityList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageTissueVisibilityList
             * @property {Mcsf.CTCardiacCommonProtocol.TissueVisibilityMode} Mode MessageTissueVisibilityList Mode
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility>|null} [TissueVisibility] MessageTissueVisibilityList TissueVisibility
             */

            /**
             * Constructs a new MessageTissueVisibilityList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageTissueVisibilityList.
             * @implements IMessageTissueVisibilityList
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibilityList=} [properties] Properties to set
             */
            function MessageTissueVisibilityList(properties) {
                this.TissueVisibility = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageTissueVisibilityList Mode.
             * @member {Mcsf.CTCardiacCommonProtocol.TissueVisibilityMode} Mode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @instance
             */
            MessageTissueVisibilityList.prototype.Mode = 0;

            /**
             * MessageTissueVisibilityList TissueVisibility.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility>} TissueVisibility
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @instance
             */
            MessageTissueVisibilityList.prototype.TissueVisibility = $util.emptyArray;

            /**
             * Creates a new MessageTissueVisibilityList instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibilityList=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList} MessageTissueVisibilityList instance
             */
            MessageTissueVisibilityList.create = function create(properties) {
                return new MessageTissueVisibilityList(properties);
            };

            /**
             * Encodes the specified MessageTissueVisibilityList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibilityList} message MessageTissueVisibilityList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageTissueVisibilityList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Mode);
                if (message.TissueVisibility != null && message.TissueVisibility.length)
                    for (var i = 0; i < message.TissueVisibility.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility.encode(message.TissueVisibility[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageTissueVisibilityList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibilityList} message MessageTissueVisibilityList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageTissueVisibilityList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageTissueVisibilityList message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList} MessageTissueVisibilityList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageTissueVisibilityList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Mode = reader.int32();
                        break;
                    case 2:
                        if (!(message.TissueVisibility && message.TissueVisibility.length))
                            message.TissueVisibility = [];
                        message.TissueVisibility.push($root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("Mode"))
                    throw $util.ProtocolError("missing required 'Mode'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageTissueVisibilityList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList} MessageTissueVisibilityList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageTissueVisibilityList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageTissueVisibilityList message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageTissueVisibilityList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.Mode) {
                default:
                    return "Mode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (message.TissueVisibility != null && message.hasOwnProperty("TissueVisibility")) {
                    if (!Array.isArray(message.TissueVisibility))
                        return "TissueVisibility: array expected";
                    for (var i = 0; i < message.TissueVisibility.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility.verify(message.TissueVisibility[i]);
                        if (error)
                            return "TissueVisibility." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageTissueVisibilityList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList} MessageTissueVisibilityList
             */
            MessageTissueVisibilityList.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList();
                switch (object.Mode) {
                case "TissueVisibilityMode_All":
                case 0:
                    message.Mode = 0;
                    break;
                case "TissueVisibilityMode_None":
                case 1:
                    message.Mode = 1;
                    break;
                case "TissueVisibilityMode_Coronary":
                case 2:
                    message.Mode = 2;
                    break;
                case "TissueVisibilityMode_Cardiac":
                case 3:
                    message.Mode = 3;
                    break;
                }
                if (object.TissueVisibility) {
                    if (!Array.isArray(object.TissueVisibility))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList.TissueVisibility: array expected");
                    message.TissueVisibility = [];
                    for (var i = 0; i < object.TissueVisibility.length; ++i) {
                        if (typeof object.TissueVisibility[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList.TissueVisibility: object expected");
                        message.TissueVisibility[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility.fromObject(object.TissueVisibility[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageTissueVisibilityList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList} message MessageTissueVisibilityList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageTissueVisibilityList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.TissueVisibility = [];
                if (options.defaults)
                    object.Mode = options.enums === String ? "TissueVisibilityMode_All" : 0;
                if (message.Mode != null && message.hasOwnProperty("Mode"))
                    object.Mode = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.TissueVisibilityMode[message.Mode] : message.Mode;
                if (message.TissueVisibility && message.TissueVisibility.length) {
                    object.TissueVisibility = [];
                    for (var j = 0; j < message.TissueVisibility.length; ++j)
                        object.TissueVisibility[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility.toObject(message.TissueVisibility[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageTissueVisibilityList to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageTissueVisibilityList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageTissueVisibilityList;
        })();

        CTCardiacCommonProtocol.MessageHRTPoint2D = (function() {

            /**
             * Properties of a MessageHRTPoint2D.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageHRTPoint2D
             * @property {number|null} [x] MessageHRTPoint2D x
             * @property {number|null} [y] MessageHRTPoint2D y
             */

            /**
             * Constructs a new MessageHRTPoint2D.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageHRTPoint2D.
             * @implements IMessageHRTPoint2D
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D=} [properties] Properties to set
             */
            function MessageHRTPoint2D(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageHRTPoint2D x.
             * @member {number} x
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @instance
             */
            MessageHRTPoint2D.prototype.x = 0;

            /**
             * MessageHRTPoint2D y.
             * @member {number} y
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @instance
             */
            MessageHRTPoint2D.prototype.y = 0;

            /**
             * Creates a new MessageHRTPoint2D instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D} MessageHRTPoint2D instance
             */
            MessageHRTPoint2D.create = function create(properties) {
                return new MessageHRTPoint2D(properties);
            };

            /**
             * Encodes the specified MessageHRTPoint2D message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} message MessageHRTPoint2D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageHRTPoint2D.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                return writer;
            };

            /**
             * Encodes the specified MessageHRTPoint2D message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} message MessageHRTPoint2D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageHRTPoint2D.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageHRTPoint2D message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D} MessageHRTPoint2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageHRTPoint2D.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.double();
                        break;
                    case 2:
                        message.y = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageHRTPoint2D message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D} MessageHRTPoint2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageHRTPoint2D.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageHRTPoint2D message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageHRTPoint2D.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                return null;
            };

            /**
             * Creates a MessageHRTPoint2D message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D} MessageHRTPoint2D
             */
            MessageHRTPoint2D.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                return message;
            };

            /**
             * Creates a plain object from a MessageHRTPoint2D message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D} message MessageHRTPoint2D
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageHRTPoint2D.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                return object;
            };

            /**
             * Converts this MessageHRTPoint2D to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageHRTPoint2D.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageHRTPoint2D;
        })();

        CTCardiacCommonProtocol.MessageHRTPoint2Ds = (function() {

            /**
             * Properties of a MessageHRTPoint2Ds.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageHRTPoint2Ds
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D>|null} [Point] MessageHRTPoint2Ds Point
             */

            /**
             * Constructs a new MessageHRTPoint2Ds.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageHRTPoint2Ds.
             * @implements IMessageHRTPoint2Ds
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds=} [properties] Properties to set
             */
            function MessageHRTPoint2Ds(properties) {
                this.Point = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageHRTPoint2Ds Point.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D>} Point
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @instance
             */
            MessageHRTPoint2Ds.prototype.Point = $util.emptyArray;

            /**
             * Creates a new MessageHRTPoint2Ds instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds} MessageHRTPoint2Ds instance
             */
            MessageHRTPoint2Ds.create = function create(properties) {
                return new MessageHRTPoint2Ds(properties);
            };

            /**
             * Encodes the specified MessageHRTPoint2Ds message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} message MessageHRTPoint2Ds message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageHRTPoint2Ds.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Point != null && message.Point.length)
                    for (var i = 0; i < message.Point.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.encode(message.Point[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageHRTPoint2Ds message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} message MessageHRTPoint2Ds message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageHRTPoint2Ds.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageHRTPoint2Ds message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds} MessageHRTPoint2Ds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageHRTPoint2Ds.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Point && message.Point.length))
                            message.Point = [];
                        message.Point.push($root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageHRTPoint2Ds message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds} MessageHRTPoint2Ds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageHRTPoint2Ds.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageHRTPoint2Ds message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageHRTPoint2Ds.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Point != null && message.hasOwnProperty("Point")) {
                    if (!Array.isArray(message.Point))
                        return "Point: array expected";
                    for (var i = 0; i < message.Point.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify(message.Point[i]);
                        if (error)
                            return "Point." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageHRTPoint2Ds message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds} MessageHRTPoint2Ds
             */
            MessageHRTPoint2Ds.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds();
                if (object.Point) {
                    if (!Array.isArray(object.Point))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.Point: array expected");
                    message.Point = [];
                    for (var i = 0; i < object.Point.length; ++i) {
                        if (typeof object.Point[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.Point: object expected");
                        message.Point[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.fromObject(object.Point[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageHRTPoint2Ds message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds} message MessageHRTPoint2Ds
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageHRTPoint2Ds.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Point = [];
                if (message.Point && message.Point.length) {
                    object.Point = [];
                    for (var j = 0; j < message.Point.length; ++j)
                        object.Point[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.toObject(message.Point[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageHRTPoint2Ds to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageHRTPoint2Ds.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageHRTPoint2Ds;
        })();

        CTCardiacCommonProtocol.MessageTrackPoint = (function() {

            /**
             * Properties of a MessageTrackPoint.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageTrackPoint
             * @property {string|null} [UID] MessageTrackPoint UID
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D|null} [TrackPoint] MessageTrackPoint TrackPoint
             */

            /**
             * Constructs a new MessageTrackPoint.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageTrackPoint.
             * @implements IMessageTrackPoint
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint=} [properties] Properties to set
             */
            function MessageTrackPoint(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageTrackPoint UID.
             * @member {string} UID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @instance
             */
            MessageTrackPoint.prototype.UID = "";

            /**
             * MessageTrackPoint TrackPoint.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D|null|undefined} TrackPoint
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @instance
             */
            MessageTrackPoint.prototype.TrackPoint = null;

            /**
             * Creates a new MessageTrackPoint instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTrackPoint} MessageTrackPoint instance
             */
            MessageTrackPoint.create = function create(properties) {
                return new MessageTrackPoint(properties);
            };

            /**
             * Encodes the specified MessageTrackPoint message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint} message MessageTrackPoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageTrackPoint.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.UID);
                if (message.TrackPoint != null && Object.hasOwnProperty.call(message, "TrackPoint"))
                    $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.encode(message.TrackPoint, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageTrackPoint message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint} message MessageTrackPoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageTrackPoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageTrackPoint message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTrackPoint} MessageTrackPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageTrackPoint.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPoint();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.UID = reader.string();
                        break;
                    case 2:
                        message.TrackPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageTrackPoint message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTrackPoint} MessageTrackPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageTrackPoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageTrackPoint message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageTrackPoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.UID != null && message.hasOwnProperty("UID"))
                    if (!$util.isString(message.UID))
                        return "UID: string expected";
                if (message.TrackPoint != null && message.hasOwnProperty("TrackPoint")) {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify(message.TrackPoint);
                    if (error)
                        return "TrackPoint." + error;
                }
                return null;
            };

            /**
             * Creates a MessageTrackPoint message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTrackPoint} MessageTrackPoint
             */
            MessageTrackPoint.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPoint)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPoint();
                if (object.UID != null)
                    message.UID = String(object.UID);
                if (object.TrackPoint != null) {
                    if (typeof object.TrackPoint !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.TrackPoint: object expected");
                    message.TrackPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.fromObject(object.TrackPoint);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageTrackPoint message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageTrackPoint} message MessageTrackPoint
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageTrackPoint.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.UID = "";
                    object.TrackPoint = null;
                }
                if (message.UID != null && message.hasOwnProperty("UID"))
                    object.UID = message.UID;
                if (message.TrackPoint != null && message.hasOwnProperty("TrackPoint"))
                    object.TrackPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.toObject(message.TrackPoint, options);
                return object;
            };

            /**
             * Converts this MessageTrackPoint to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPoint
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageTrackPoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageTrackPoint;
        })();

        CTCardiacCommonProtocol.MessageTrackPointList = (function() {

            /**
             * Properties of a MessageTrackPointList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageTrackPointList
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint>|null} [TrackPointList] MessageTrackPointList TrackPointList
             */

            /**
             * Constructs a new MessageTrackPointList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageTrackPointList.
             * @implements IMessageTrackPointList
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTrackPointList=} [properties] Properties to set
             */
            function MessageTrackPointList(properties) {
                this.TrackPointList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageTrackPointList TrackPointList.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint>} TrackPointList
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @instance
             */
            MessageTrackPointList.prototype.TrackPointList = $util.emptyArray;

            /**
             * Creates a new MessageTrackPointList instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTrackPointList=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTrackPointList} MessageTrackPointList instance
             */
            MessageTrackPointList.create = function create(properties) {
                return new MessageTrackPointList(properties);
            };

            /**
             * Encodes the specified MessageTrackPointList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTrackPointList.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTrackPointList} message MessageTrackPointList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageTrackPointList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.TrackPointList != null && message.TrackPointList.length)
                    for (var i = 0; i < message.TrackPointList.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.encode(message.TrackPointList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageTrackPointList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTrackPointList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageTrackPointList} message MessageTrackPointList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageTrackPointList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageTrackPointList message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTrackPointList} MessageTrackPointList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageTrackPointList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPointList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.TrackPointList && message.TrackPointList.length))
                            message.TrackPointList = [];
                        message.TrackPointList.push($root.Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageTrackPointList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTrackPointList} MessageTrackPointList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageTrackPointList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageTrackPointList message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageTrackPointList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.TrackPointList != null && message.hasOwnProperty("TrackPointList")) {
                    if (!Array.isArray(message.TrackPointList))
                        return "TrackPointList: array expected";
                    for (var i = 0; i < message.TrackPointList.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.verify(message.TrackPointList[i]);
                        if (error)
                            return "TrackPointList." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageTrackPointList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageTrackPointList} MessageTrackPointList
             */
            MessageTrackPointList.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPointList)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPointList();
                if (object.TrackPointList) {
                    if (!Array.isArray(object.TrackPointList))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageTrackPointList.TrackPointList: array expected");
                    message.TrackPointList = [];
                    for (var i = 0; i < object.TrackPointList.length; ++i) {
                        if (typeof object.TrackPointList[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageTrackPointList.TrackPointList: object expected");
                        message.TrackPointList[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.fromObject(object.TrackPointList[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageTrackPointList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageTrackPointList} message MessageTrackPointList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageTrackPointList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.TrackPointList = [];
                if (message.TrackPointList && message.TrackPointList.length) {
                    object.TrackPointList = [];
                    for (var j = 0; j < message.TrackPointList.length; ++j)
                        object.TrackPointList[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.toObject(message.TrackPointList[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageTrackPointList to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageTrackPointList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageTrackPointList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageTrackPointList;
        })();

        CTCardiacCommonProtocol.MessageRapidResultsSave = (function() {

            /**
             * Properties of a MessageRapidResultsSave.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageRapidResultsSave
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview>|null} [SaveItem] MessageRapidResultsSave SaveItem
             */

            /**
             * Constructs a new MessageRapidResultsSave.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageRapidResultsSave.
             * @implements IMessageRapidResultsSave
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsSave=} [properties] Properties to set
             */
            function MessageRapidResultsSave(properties) {
                this.SaveItem = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageRapidResultsSave SaveItem.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview>} SaveItem
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @instance
             */
            MessageRapidResultsSave.prototype.SaveItem = $util.emptyArray;

            /**
             * Creates a new MessageRapidResultsSave instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsSave=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave} MessageRapidResultsSave instance
             */
            MessageRapidResultsSave.create = function create(properties) {
                return new MessageRapidResultsSave(properties);
            };

            /**
             * Encodes the specified MessageRapidResultsSave message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsSave} message MessageRapidResultsSave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageRapidResultsSave.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.SaveItem != null && message.SaveItem.length)
                    for (var i = 0; i < message.SaveItem.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview.encode(message.SaveItem[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageRapidResultsSave message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsSave} message MessageRapidResultsSave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageRapidResultsSave.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageRapidResultsSave message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave} MessageRapidResultsSave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageRapidResultsSave.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.SaveItem && message.SaveItem.length))
                            message.SaveItem = [];
                        message.SaveItem.push($root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageRapidResultsSave message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave} MessageRapidResultsSave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageRapidResultsSave.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageRapidResultsSave message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageRapidResultsSave.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.SaveItem != null && message.hasOwnProperty("SaveItem")) {
                    if (!Array.isArray(message.SaveItem))
                        return "SaveItem: array expected";
                    for (var i = 0; i < message.SaveItem.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview.verify(message.SaveItem[i]);
                        if (error)
                            return "SaveItem." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageRapidResultsSave message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave} MessageRapidResultsSave
             */
            MessageRapidResultsSave.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave();
                if (object.SaveItem) {
                    if (!Array.isArray(object.SaveItem))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave.SaveItem: array expected");
                    message.SaveItem = [];
                    for (var i = 0; i < object.SaveItem.length; ++i) {
                        if (typeof object.SaveItem[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave.SaveItem: object expected");
                        message.SaveItem[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview.fromObject(object.SaveItem[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageRapidResultsSave message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave} message MessageRapidResultsSave
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageRapidResultsSave.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.SaveItem = [];
                if (message.SaveItem && message.SaveItem.length) {
                    object.SaveItem = [];
                    for (var j = 0; j < message.SaveItem.length; ++j)
                        object.SaveItem[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview.toObject(message.SaveItem[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageRapidResultsSave to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageRapidResultsSave.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageRapidResultsSave;
        })();

        CTCardiacCommonProtocol.MessageRapidResultsPreview = (function() {

            /**
             * Properties of a MessageRapidResultsPreview.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageRapidResultsPreview
             * @property {number} Index MessageRapidResultsPreview Index
             * @property {number} CenterLineID MessageRapidResultsPreview CenterLineID
             * @property {Mcsf.CTCardiacCommonProtocol.RapidResultsImageType} ImageType MessageRapidResultsPreview ImageType
             * @property {boolean|null} [IsCoronaryOrientationMode] MessageRapidResultsPreview IsCoronaryOrientationMode
             * @property {number|null} [IndexInGroup] MessageRapidResultsPreview IndexInGroup
             * @property {Mcsf.CTCardiacCommonProtocol.TissueDisplayMode|null} [DisplayMode] MessageRapidResultsPreview DisplayMode
             * @property {number|null} [angle1] MessageRapidResultsPreview angle1
             * @property {number|null} [angle2] MessageRapidResultsPreview angle2
             * @property {number|null} [changeUpDirection] MessageRapidResultsPreview changeUpDirection
             * @property {number|null} [upX] MessageRapidResultsPreview upX
             * @property {number|null} [upY] MessageRapidResultsPreview upY
             * @property {number|null} [upZ] MessageRapidResultsPreview upZ
             */

            /**
             * Constructs a new MessageRapidResultsPreview.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageRapidResultsPreview.
             * @implements IMessageRapidResultsPreview
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview=} [properties] Properties to set
             */
            function MessageRapidResultsPreview(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageRapidResultsPreview Index.
             * @member {number} Index
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.Index = 0;

            /**
             * MessageRapidResultsPreview CenterLineID.
             * @member {number} CenterLineID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.CenterLineID = 0;

            /**
             * MessageRapidResultsPreview ImageType.
             * @member {Mcsf.CTCardiacCommonProtocol.RapidResultsImageType} ImageType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.ImageType = 1;

            /**
             * MessageRapidResultsPreview IsCoronaryOrientationMode.
             * @member {boolean} IsCoronaryOrientationMode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.IsCoronaryOrientationMode = false;

            /**
             * MessageRapidResultsPreview IndexInGroup.
             * @member {number} IndexInGroup
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.IndexInGroup = 0;

            /**
             * MessageRapidResultsPreview DisplayMode.
             * @member {Mcsf.CTCardiacCommonProtocol.TissueDisplayMode} DisplayMode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.DisplayMode = 0;

            /**
             * MessageRapidResultsPreview angle1.
             * @member {number} angle1
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.angle1 = 0;

            /**
             * MessageRapidResultsPreview angle2.
             * @member {number} angle2
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.angle2 = 0;

            /**
             * MessageRapidResultsPreview changeUpDirection.
             * @member {number} changeUpDirection
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.changeUpDirection = 0;

            /**
             * MessageRapidResultsPreview upX.
             * @member {number} upX
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.upX = 0;

            /**
             * MessageRapidResultsPreview upY.
             * @member {number} upY
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.upY = 0;

            /**
             * MessageRapidResultsPreview upZ.
             * @member {number} upZ
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             */
            MessageRapidResultsPreview.prototype.upZ = 0;

            /**
             * Creates a new MessageRapidResultsPreview instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview} MessageRapidResultsPreview instance
             */
            MessageRapidResultsPreview.create = function create(properties) {
                return new MessageRapidResultsPreview(properties);
            };

            /**
             * Encodes the specified MessageRapidResultsPreview message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview} message MessageRapidResultsPreview message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageRapidResultsPreview.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Index);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CenterLineID);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ImageType);
                if (message.IsCoronaryOrientationMode != null && Object.hasOwnProperty.call(message, "IsCoronaryOrientationMode"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsCoronaryOrientationMode);
                if (message.IndexInGroup != null && Object.hasOwnProperty.call(message, "IndexInGroup"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.IndexInGroup);
                if (message.DisplayMode != null && Object.hasOwnProperty.call(message, "DisplayMode"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.DisplayMode);
                if (message.angle1 != null && Object.hasOwnProperty.call(message, "angle1"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.angle1);
                if (message.angle2 != null && Object.hasOwnProperty.call(message, "angle2"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.angle2);
                if (message.changeUpDirection != null && Object.hasOwnProperty.call(message, "changeUpDirection"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.changeUpDirection);
                if (message.upX != null && Object.hasOwnProperty.call(message, "upX"))
                    writer.uint32(/* id 10, wireType 1 =*/81).double(message.upX);
                if (message.upY != null && Object.hasOwnProperty.call(message, "upY"))
                    writer.uint32(/* id 11, wireType 1 =*/89).double(message.upY);
                if (message.upZ != null && Object.hasOwnProperty.call(message, "upZ"))
                    writer.uint32(/* id 12, wireType 1 =*/97).double(message.upZ);
                return writer;
            };

            /**
             * Encodes the specified MessageRapidResultsPreview message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview} message MessageRapidResultsPreview message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageRapidResultsPreview.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageRapidResultsPreview message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview} MessageRapidResultsPreview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageRapidResultsPreview.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Index = reader.int32();
                        break;
                    case 2:
                        message.CenterLineID = reader.int32();
                        break;
                    case 3:
                        message.ImageType = reader.int32();
                        break;
                    case 4:
                        message.IsCoronaryOrientationMode = reader.bool();
                        break;
                    case 5:
                        message.IndexInGroup = reader.int32();
                        break;
                    case 6:
                        message.DisplayMode = reader.int32();
                        break;
                    case 7:
                        message.angle1 = reader.double();
                        break;
                    case 8:
                        message.angle2 = reader.double();
                        break;
                    case 9:
                        message.changeUpDirection = reader.int32();
                        break;
                    case 10:
                        message.upX = reader.double();
                        break;
                    case 11:
                        message.upY = reader.double();
                        break;
                    case 12:
                        message.upZ = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("Index"))
                    throw $util.ProtocolError("missing required 'Index'", { instance: message });
                if (!message.hasOwnProperty("CenterLineID"))
                    throw $util.ProtocolError("missing required 'CenterLineID'", { instance: message });
                if (!message.hasOwnProperty("ImageType"))
                    throw $util.ProtocolError("missing required 'ImageType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageRapidResultsPreview message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview} MessageRapidResultsPreview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageRapidResultsPreview.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageRapidResultsPreview message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageRapidResultsPreview.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.Index))
                    return "Index: integer expected";
                if (!$util.isInteger(message.CenterLineID))
                    return "CenterLineID: integer expected";
                switch (message.ImageType) {
                default:
                    return "ImageType: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
                if (message.IsCoronaryOrientationMode != null && message.hasOwnProperty("IsCoronaryOrientationMode"))
                    if (typeof message.IsCoronaryOrientationMode !== "boolean")
                        return "IsCoronaryOrientationMode: boolean expected";
                if (message.IndexInGroup != null && message.hasOwnProperty("IndexInGroup"))
                    if (!$util.isInteger(message.IndexInGroup))
                        return "IndexInGroup: integer expected";
                if (message.DisplayMode != null && message.hasOwnProperty("DisplayMode"))
                    switch (message.DisplayMode) {
                    default:
                        return "DisplayMode: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.angle1 != null && message.hasOwnProperty("angle1"))
                    if (typeof message.angle1 !== "number")
                        return "angle1: number expected";
                if (message.angle2 != null && message.hasOwnProperty("angle2"))
                    if (typeof message.angle2 !== "number")
                        return "angle2: number expected";
                if (message.changeUpDirection != null && message.hasOwnProperty("changeUpDirection"))
                    if (!$util.isInteger(message.changeUpDirection))
                        return "changeUpDirection: integer expected";
                if (message.upX != null && message.hasOwnProperty("upX"))
                    if (typeof message.upX !== "number")
                        return "upX: number expected";
                if (message.upY != null && message.hasOwnProperty("upY"))
                    if (typeof message.upY !== "number")
                        return "upY: number expected";
                if (message.upZ != null && message.hasOwnProperty("upZ"))
                    if (typeof message.upZ !== "number")
                        return "upZ: number expected";
                return null;
            };

            /**
             * Creates a MessageRapidResultsPreview message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview} MessageRapidResultsPreview
             */
            MessageRapidResultsPreview.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview();
                if (object.Index != null)
                    message.Index = object.Index | 0;
                if (object.CenterLineID != null)
                    message.CenterLineID = object.CenterLineID | 0;
                switch (object.ImageType) {
                case "RapidResultsImageType_VR":
                case 1:
                    message.ImageType = 1;
                    break;
                case "RapidResultsImageType_MIP":
                case 2:
                    message.ImageType = 2;
                    break;
                case "RapidResultsImageType_CPR":
                case 3:
                    message.ImageType = 3;
                    break;
                case "RapidResultsImageType_SCPR":
                case 4:
                    message.ImageType = 4;
                    break;
                }
                if (object.IsCoronaryOrientationMode != null)
                    message.IsCoronaryOrientationMode = Boolean(object.IsCoronaryOrientationMode);
                if (object.IndexInGroup != null)
                    message.IndexInGroup = object.IndexInGroup | 0;
                switch (object.DisplayMode) {
                case "TissueDisplayMode_None":
                case 0:
                    message.DisplayMode = 0;
                    break;
                case "AllTissue":
                case 1:
                    message.DisplayMode = 1;
                    break;
                case "CoronaryTissue":
                case 2:
                    message.DisplayMode = 2;
                    break;
                }
                if (object.angle1 != null)
                    message.angle1 = Number(object.angle1);
                if (object.angle2 != null)
                    message.angle2 = Number(object.angle2);
                if (object.changeUpDirection != null)
                    message.changeUpDirection = object.changeUpDirection | 0;
                if (object.upX != null)
                    message.upX = Number(object.upX);
                if (object.upY != null)
                    message.upY = Number(object.upY);
                if (object.upZ != null)
                    message.upZ = Number(object.upZ);
                return message;
            };

            /**
             * Creates a plain object from a MessageRapidResultsPreview message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview} message MessageRapidResultsPreview
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageRapidResultsPreview.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Index = 0;
                    object.CenterLineID = 0;
                    object.ImageType = options.enums === String ? "RapidResultsImageType_VR" : 1;
                    object.IsCoronaryOrientationMode = false;
                    object.IndexInGroup = 0;
                    object.DisplayMode = options.enums === String ? "TissueDisplayMode_None" : 0;
                    object.angle1 = 0;
                    object.angle2 = 0;
                    object.changeUpDirection = 0;
                    object.upX = 0;
                    object.upY = 0;
                    object.upZ = 0;
                }
                if (message.Index != null && message.hasOwnProperty("Index"))
                    object.Index = message.Index;
                if (message.CenterLineID != null && message.hasOwnProperty("CenterLineID"))
                    object.CenterLineID = message.CenterLineID;
                if (message.ImageType != null && message.hasOwnProperty("ImageType"))
                    object.ImageType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.RapidResultsImageType[message.ImageType] : message.ImageType;
                if (message.IsCoronaryOrientationMode != null && message.hasOwnProperty("IsCoronaryOrientationMode"))
                    object.IsCoronaryOrientationMode = message.IsCoronaryOrientationMode;
                if (message.IndexInGroup != null && message.hasOwnProperty("IndexInGroup"))
                    object.IndexInGroup = message.IndexInGroup;
                if (message.DisplayMode != null && message.hasOwnProperty("DisplayMode"))
                    object.DisplayMode = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.TissueDisplayMode[message.DisplayMode] : message.DisplayMode;
                if (message.angle1 != null && message.hasOwnProperty("angle1"))
                    object.angle1 = options.json && !isFinite(message.angle1) ? String(message.angle1) : message.angle1;
                if (message.angle2 != null && message.hasOwnProperty("angle2"))
                    object.angle2 = options.json && !isFinite(message.angle2) ? String(message.angle2) : message.angle2;
                if (message.changeUpDirection != null && message.hasOwnProperty("changeUpDirection"))
                    object.changeUpDirection = message.changeUpDirection;
                if (message.upX != null && message.hasOwnProperty("upX"))
                    object.upX = options.json && !isFinite(message.upX) ? String(message.upX) : message.upX;
                if (message.upY != null && message.hasOwnProperty("upY"))
                    object.upY = options.json && !isFinite(message.upY) ? String(message.upY) : message.upY;
                if (message.upZ != null && message.hasOwnProperty("upZ"))
                    object.upZ = options.json && !isFinite(message.upZ) ? String(message.upZ) : message.upZ;
                return object;
            };

            /**
             * Converts this MessageRapidResultsPreview to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageRapidResultsPreview.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageRapidResultsPreview;
        })();

        CTCardiacCommonProtocol.MessageCenterLineCandidateNames = (function() {

            /**
             * Properties of a MessageCenterLineCandidateNames.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageCenterLineCandidateNames
             * @property {boolean} IsHighLight MessageCenterLineCandidateNames IsHighLight
             * @property {string} CurrentCellCenterLineName MessageCenterLineCandidateNames CurrentCellCenterLineName
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageCenterLine>|null} [CenterLine] MessageCenterLineCandidateNames CenterLine
             */

            /**
             * Constructs a new MessageCenterLineCandidateNames.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageCenterLineCandidateNames.
             * @implements IMessageCenterLineCandidateNames
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineCandidateNames=} [properties] Properties to set
             */
            function MessageCenterLineCandidateNames(properties) {
                this.CenterLine = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageCenterLineCandidateNames IsHighLight.
             * @member {boolean} IsHighLight
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @instance
             */
            MessageCenterLineCandidateNames.prototype.IsHighLight = false;

            /**
             * MessageCenterLineCandidateNames CurrentCellCenterLineName.
             * @member {string} CurrentCellCenterLineName
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @instance
             */
            MessageCenterLineCandidateNames.prototype.CurrentCellCenterLineName = "";

            /**
             * MessageCenterLineCandidateNames CenterLine.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageCenterLine>} CenterLine
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @instance
             */
            MessageCenterLineCandidateNames.prototype.CenterLine = $util.emptyArray;

            /**
             * Creates a new MessageCenterLineCandidateNames instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineCandidateNames=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames} MessageCenterLineCandidateNames instance
             */
            MessageCenterLineCandidateNames.create = function create(properties) {
                return new MessageCenterLineCandidateNames(properties);
            };

            /**
             * Encodes the specified MessageCenterLineCandidateNames message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineCandidateNames} message MessageCenterLineCandidateNames message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCenterLineCandidateNames.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.IsHighLight);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.CurrentCellCenterLineName);
                if (message.CenterLine != null && message.CenterLine.length)
                    for (var i = 0; i < message.CenterLine.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.encode(message.CenterLine[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageCenterLineCandidateNames message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineCandidateNames} message MessageCenterLineCandidateNames message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCenterLineCandidateNames.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageCenterLineCandidateNames message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames} MessageCenterLineCandidateNames
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCenterLineCandidateNames.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.IsHighLight = reader.bool();
                        break;
                    case 2:
                        message.CurrentCellCenterLineName = reader.string();
                        break;
                    case 3:
                        if (!(message.CenterLine && message.CenterLine.length))
                            message.CenterLine = [];
                        message.CenterLine.push($root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("IsHighLight"))
                    throw $util.ProtocolError("missing required 'IsHighLight'", { instance: message });
                if (!message.hasOwnProperty("CurrentCellCenterLineName"))
                    throw $util.ProtocolError("missing required 'CurrentCellCenterLineName'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageCenterLineCandidateNames message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames} MessageCenterLineCandidateNames
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCenterLineCandidateNames.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageCenterLineCandidateNames message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageCenterLineCandidateNames.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.IsHighLight !== "boolean")
                    return "IsHighLight: boolean expected";
                if (!$util.isString(message.CurrentCellCenterLineName))
                    return "CurrentCellCenterLineName: string expected";
                if (message.CenterLine != null && message.hasOwnProperty("CenterLine")) {
                    if (!Array.isArray(message.CenterLine))
                        return "CenterLine: array expected";
                    for (var i = 0; i < message.CenterLine.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.verify(message.CenterLine[i]);
                        if (error)
                            return "CenterLine." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageCenterLineCandidateNames message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames} MessageCenterLineCandidateNames
             */
            MessageCenterLineCandidateNames.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames();
                if (object.IsHighLight != null)
                    message.IsHighLight = Boolean(object.IsHighLight);
                if (object.CurrentCellCenterLineName != null)
                    message.CurrentCellCenterLineName = String(object.CurrentCellCenterLineName);
                if (object.CenterLine) {
                    if (!Array.isArray(object.CenterLine))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames.CenterLine: array expected");
                    message.CenterLine = [];
                    for (var i = 0; i < object.CenterLine.length; ++i) {
                        if (typeof object.CenterLine[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames.CenterLine: object expected");
                        message.CenterLine[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.fromObject(object.CenterLine[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageCenterLineCandidateNames message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames} message MessageCenterLineCandidateNames
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageCenterLineCandidateNames.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.CenterLine = [];
                if (options.defaults) {
                    object.IsHighLight = false;
                    object.CurrentCellCenterLineName = "";
                }
                if (message.IsHighLight != null && message.hasOwnProperty("IsHighLight"))
                    object.IsHighLight = message.IsHighLight;
                if (message.CurrentCellCenterLineName != null && message.hasOwnProperty("CurrentCellCenterLineName"))
                    object.CurrentCellCenterLineName = message.CurrentCellCenterLineName;
                if (message.CenterLine && message.CenterLine.length) {
                    object.CenterLine = [];
                    for (var j = 0; j < message.CenterLine.length; ++j)
                        object.CenterLine[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLine.toObject(message.CenterLine[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageCenterLineCandidateNames to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageCenterLineCandidateNames.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageCenterLineCandidateNames;
        })();

        CTCardiacCommonProtocol.MessageAnnotationContour = (function() {

            /**
             * Properties of a MessageAnnotationContour.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageAnnotationContour
             * @property {number|null} [Area] MessageAnnotationContour Area
             * @property {number|null} [MaxDiameter] MessageAnnotationContour MaxDiameter
             * @property {number|null} [MinDiameter] MessageAnnotationContour MinDiameter
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null} [ContourPoints] MessageAnnotationContour ContourPoints
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null} [MinDiameterPoints] MessageAnnotationContour MinDiameterPoints
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null} [MaxDiameterPoints] MessageAnnotationContour MaxDiameterPoints
             */

            /**
             * Constructs a new MessageAnnotationContour.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageAnnotationContour.
             * @implements IMessageAnnotationContour
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageAnnotationContour=} [properties] Properties to set
             */
            function MessageAnnotationContour(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageAnnotationContour Area.
             * @member {number} Area
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @instance
             */
            MessageAnnotationContour.prototype.Area = 0;

            /**
             * MessageAnnotationContour MaxDiameter.
             * @member {number} MaxDiameter
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @instance
             */
            MessageAnnotationContour.prototype.MaxDiameter = 0;

            /**
             * MessageAnnotationContour MinDiameter.
             * @member {number} MinDiameter
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @instance
             */
            MessageAnnotationContour.prototype.MinDiameter = 0;

            /**
             * MessageAnnotationContour ContourPoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null|undefined} ContourPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @instance
             */
            MessageAnnotationContour.prototype.ContourPoints = null;

            /**
             * MessageAnnotationContour MinDiameterPoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null|undefined} MinDiameterPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @instance
             */
            MessageAnnotationContour.prototype.MinDiameterPoints = null;

            /**
             * MessageAnnotationContour MaxDiameterPoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null|undefined} MaxDiameterPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @instance
             */
            MessageAnnotationContour.prototype.MaxDiameterPoints = null;

            /**
             * Creates a new MessageAnnotationContour instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageAnnotationContour=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour} MessageAnnotationContour instance
             */
            MessageAnnotationContour.create = function create(properties) {
                return new MessageAnnotationContour(properties);
            };

            /**
             * Encodes the specified MessageAnnotationContour message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageAnnotationContour} message MessageAnnotationContour message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageAnnotationContour.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Area != null && Object.hasOwnProperty.call(message, "Area"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.Area);
                if (message.MaxDiameter != null && Object.hasOwnProperty.call(message, "MaxDiameter"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.MaxDiameter);
                if (message.MinDiameter != null && Object.hasOwnProperty.call(message, "MinDiameter"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.MinDiameter);
                if (message.ContourPoints != null && Object.hasOwnProperty.call(message, "ContourPoints"))
                    $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.ContourPoints, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.MinDiameterPoints != null && Object.hasOwnProperty.call(message, "MinDiameterPoints"))
                    $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.MinDiameterPoints, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.MaxDiameterPoints != null && Object.hasOwnProperty.call(message, "MaxDiameterPoints"))
                    $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.MaxDiameterPoints, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageAnnotationContour message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageAnnotationContour} message MessageAnnotationContour message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageAnnotationContour.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageAnnotationContour message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour} MessageAnnotationContour
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageAnnotationContour.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Area = reader.double();
                        break;
                    case 2:
                        message.MaxDiameter = reader.double();
                        break;
                    case 3:
                        message.MinDiameter = reader.double();
                        break;
                    case 4:
                        message.ContourPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.MinDiameterPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.MaxDiameterPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageAnnotationContour message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour} MessageAnnotationContour
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageAnnotationContour.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageAnnotationContour message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageAnnotationContour.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Area != null && message.hasOwnProperty("Area"))
                    if (typeof message.Area !== "number")
                        return "Area: number expected";
                if (message.MaxDiameter != null && message.hasOwnProperty("MaxDiameter"))
                    if (typeof message.MaxDiameter !== "number")
                        return "MaxDiameter: number expected";
                if (message.MinDiameter != null && message.hasOwnProperty("MinDiameter"))
                    if (typeof message.MinDiameter !== "number")
                        return "MinDiameter: number expected";
                if (message.ContourPoints != null && message.hasOwnProperty("ContourPoints")) {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.ContourPoints);
                    if (error)
                        return "ContourPoints." + error;
                }
                if (message.MinDiameterPoints != null && message.hasOwnProperty("MinDiameterPoints")) {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.MinDiameterPoints);
                    if (error)
                        return "MinDiameterPoints." + error;
                }
                if (message.MaxDiameterPoints != null && message.hasOwnProperty("MaxDiameterPoints")) {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.MaxDiameterPoints);
                    if (error)
                        return "MaxDiameterPoints." + error;
                }
                return null;
            };

            /**
             * Creates a MessageAnnotationContour message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour} MessageAnnotationContour
             */
            MessageAnnotationContour.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour();
                if (object.Area != null)
                    message.Area = Number(object.Area);
                if (object.MaxDiameter != null)
                    message.MaxDiameter = Number(object.MaxDiameter);
                if (object.MinDiameter != null)
                    message.MinDiameter = Number(object.MinDiameter);
                if (object.ContourPoints != null) {
                    if (typeof object.ContourPoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour.ContourPoints: object expected");
                    message.ContourPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.ContourPoints);
                }
                if (object.MinDiameterPoints != null) {
                    if (typeof object.MinDiameterPoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour.MinDiameterPoints: object expected");
                    message.MinDiameterPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.MinDiameterPoints);
                }
                if (object.MaxDiameterPoints != null) {
                    if (typeof object.MaxDiameterPoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour.MaxDiameterPoints: object expected");
                    message.MaxDiameterPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.MaxDiameterPoints);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageAnnotationContour message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour} message MessageAnnotationContour
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageAnnotationContour.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Area = 0;
                    object.MaxDiameter = 0;
                    object.MinDiameter = 0;
                    object.ContourPoints = null;
                    object.MinDiameterPoints = null;
                    object.MaxDiameterPoints = null;
                }
                if (message.Area != null && message.hasOwnProperty("Area"))
                    object.Area = options.json && !isFinite(message.Area) ? String(message.Area) : message.Area;
                if (message.MaxDiameter != null && message.hasOwnProperty("MaxDiameter"))
                    object.MaxDiameter = options.json && !isFinite(message.MaxDiameter) ? String(message.MaxDiameter) : message.MaxDiameter;
                if (message.MinDiameter != null && message.hasOwnProperty("MinDiameter"))
                    object.MinDiameter = options.json && !isFinite(message.MinDiameter) ? String(message.MinDiameter) : message.MinDiameter;
                if (message.ContourPoints != null && message.hasOwnProperty("ContourPoints"))
                    object.ContourPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.ContourPoints, options);
                if (message.MinDiameterPoints != null && message.hasOwnProperty("MinDiameterPoints"))
                    object.MinDiameterPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.MinDiameterPoints, options);
                if (message.MaxDiameterPoints != null && message.hasOwnProperty("MaxDiameterPoints"))
                    object.MaxDiameterPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.MaxDiameterPoints, options);
                return object;
            };

            /**
             * Converts this MessageAnnotationContour to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageAnnotationContour.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageAnnotationContour;
        })();

        CTCardiacCommonProtocol.MessageStenosisMark = (function() {

            /**
             * Properties of a MessageStenosisMark.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMark
             * @property {number} ID MessageStenosisMark ID
             * @property {number} CenterLineID MessageStenosisMark CenterLineID
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} CenterPoint MessageStenosisMark CenterPoint
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} NormalVector MessageStenosisMark NormalVector
             * @property {string|null} [CenterlineName] MessageStenosisMark CenterlineName
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisDegree|null} [StenosisDegree] MessageStenosisMark StenosisDegree
             * @property {number|null} [FindingType] MessageStenosisMark FindingType
             * @property {number|null} [StentLevel] MessageStenosisMark StentLevel
             * @property {string|null} [FindingUID] MessageStenosisMark FindingUID
             */

            /**
             * Constructs a new MessageStenosisMark.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMark.
             * @implements IMessageStenosisMark
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark=} [properties] Properties to set
             */
            function MessageStenosisMark(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMark ID.
             * @member {number} ID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             */
            MessageStenosisMark.prototype.ID = 0;

            /**
             * MessageStenosisMark CenterLineID.
             * @member {number} CenterLineID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             */
            MessageStenosisMark.prototype.CenterLineID = 0;

            /**
             * MessageStenosisMark CenterPoint.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} CenterPoint
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             */
            MessageStenosisMark.prototype.CenterPoint = null;

            /**
             * MessageStenosisMark NormalVector.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} NormalVector
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             */
            MessageStenosisMark.prototype.NormalVector = null;

            /**
             * MessageStenosisMark CenterlineName.
             * @member {string} CenterlineName
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             */
            MessageStenosisMark.prototype.CenterlineName = "";

            /**
             * MessageStenosisMark StenosisDegree.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisDegree} StenosisDegree
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             */
            MessageStenosisMark.prototype.StenosisDegree = 0;

            /**
             * MessageStenosisMark FindingType.
             * @member {number} FindingType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             */
            MessageStenosisMark.prototype.FindingType = 0;

            /**
             * MessageStenosisMark StentLevel.
             * @member {number} StentLevel
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             */
            MessageStenosisMark.prototype.StentLevel = 0;

            /**
             * MessageStenosisMark FindingUID.
             * @member {string} FindingUID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             */
            MessageStenosisMark.prototype.FindingUID = "";

            /**
             * Creates a new MessageStenosisMark instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMark} MessageStenosisMark instance
             */
            MessageStenosisMark.create = function create(properties) {
                return new MessageStenosisMark(properties);
            };

            /**
             * Encodes the specified MessageStenosisMark message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark} message MessageStenosisMark message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMark.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CenterLineID);
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.encode(message.CenterPoint, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.encode(message.NormalVector, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.CenterlineName != null && Object.hasOwnProperty.call(message, "CenterlineName"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.CenterlineName);
                if (message.StenosisDegree != null && Object.hasOwnProperty.call(message, "StenosisDegree"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.StenosisDegree);
                if (message.FindingType != null && Object.hasOwnProperty.call(message, "FindingType"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.FindingType);
                if (message.StentLevel != null && Object.hasOwnProperty.call(message, "StentLevel"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.StentLevel);
                if (message.FindingUID != null && Object.hasOwnProperty.call(message, "FindingUID"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.FindingUID);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMark message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark} message MessageStenosisMark message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMark.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMark message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMark} MessageStenosisMark
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMark.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMark();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ID = reader.int32();
                        break;
                    case 2:
                        message.CenterLineID = reader.int32();
                        break;
                    case 3:
                        message.CenterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.NormalVector = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.CenterlineName = reader.string();
                        break;
                    case 6:
                        message.StenosisDegree = reader.int32();
                        break;
                    case 7:
                        message.FindingType = reader.int32();
                        break;
                    case 8:
                        message.StentLevel = reader.int32();
                        break;
                    case 9:
                        message.FindingUID = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ID"))
                    throw $util.ProtocolError("missing required 'ID'", { instance: message });
                if (!message.hasOwnProperty("CenterLineID"))
                    throw $util.ProtocolError("missing required 'CenterLineID'", { instance: message });
                if (!message.hasOwnProperty("CenterPoint"))
                    throw $util.ProtocolError("missing required 'CenterPoint'", { instance: message });
                if (!message.hasOwnProperty("NormalVector"))
                    throw $util.ProtocolError("missing required 'NormalVector'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisMark message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMark} MessageStenosisMark
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMark.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMark message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMark.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
                if (!$util.isInteger(message.CenterLineID))
                    return "CenterLineID: integer expected";
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify(message.CenterPoint);
                    if (error)
                        return "CenterPoint." + error;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify(message.NormalVector);
                    if (error)
                        return "NormalVector." + error;
                }
                if (message.CenterlineName != null && message.hasOwnProperty("CenterlineName"))
                    if (!$util.isString(message.CenterlineName))
                        return "CenterlineName: string expected";
                if (message.StenosisDegree != null && message.hasOwnProperty("StenosisDegree"))
                    switch (message.StenosisDegree) {
                    default:
                        return "StenosisDegree: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                if (message.FindingType != null && message.hasOwnProperty("FindingType"))
                    if (!$util.isInteger(message.FindingType))
                        return "FindingType: integer expected";
                if (message.StentLevel != null && message.hasOwnProperty("StentLevel"))
                    if (!$util.isInteger(message.StentLevel))
                        return "StentLevel: integer expected";
                if (message.FindingUID != null && message.hasOwnProperty("FindingUID"))
                    if (!$util.isString(message.FindingUID))
                        return "FindingUID: string expected";
                return null;
            };

            /**
             * Creates a MessageStenosisMark message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMark} MessageStenosisMark
             */
            MessageStenosisMark.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMark)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMark();
                if (object.ID != null)
                    message.ID = object.ID | 0;
                if (object.CenterLineID != null)
                    message.CenterLineID = object.CenterLineID | 0;
                if (object.CenterPoint != null) {
                    if (typeof object.CenterPoint !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.CenterPoint: object expected");
                    message.CenterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.fromObject(object.CenterPoint);
                }
                if (object.NormalVector != null) {
                    if (typeof object.NormalVector !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.NormalVector: object expected");
                    message.NormalVector = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.fromObject(object.NormalVector);
                }
                if (object.CenterlineName != null)
                    message.CenterlineName = String(object.CenterlineName);
                switch (object.StenosisDegree) {
                case "StenosisDegree_None":
                case 0:
                    message.StenosisDegree = 0;
                    break;
                case "StenosisDegree_Slight":
                case 1:
                    message.StenosisDegree = 1;
                    break;
                case "StenosisDegree_Mild":
                case 2:
                    message.StenosisDegree = 2;
                    break;
                case "StenosisDegree_Moderate":
                case 3:
                    message.StenosisDegree = 3;
                    break;
                case "StenosisDegree_Severe":
                case 4:
                    message.StenosisDegree = 4;
                    break;
                case "StenosisDegree_Blocking":
                case 5:
                    message.StenosisDegree = 5;
                    break;
                }
                if (object.FindingType != null)
                    message.FindingType = object.FindingType | 0;
                if (object.StentLevel != null)
                    message.StentLevel = object.StentLevel | 0;
                if (object.FindingUID != null)
                    message.FindingUID = String(object.FindingUID);
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMark message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMark} message MessageStenosisMark
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMark.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ID = 0;
                    object.CenterLineID = 0;
                    object.CenterPoint = null;
                    object.NormalVector = null;
                    object.CenterlineName = "";
                    object.StenosisDegree = options.enums === String ? "StenosisDegree_None" : 0;
                    object.FindingType = 0;
                    object.StentLevel = 0;
                    object.FindingUID = "";
                }
                if (message.ID != null && message.hasOwnProperty("ID"))
                    object.ID = message.ID;
                if (message.CenterLineID != null && message.hasOwnProperty("CenterLineID"))
                    object.CenterLineID = message.CenterLineID;
                if (message.CenterPoint != null && message.hasOwnProperty("CenterPoint"))
                    object.CenterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.toObject(message.CenterPoint, options);
                if (message.NormalVector != null && message.hasOwnProperty("NormalVector"))
                    object.NormalVector = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.toObject(message.NormalVector, options);
                if (message.CenterlineName != null && message.hasOwnProperty("CenterlineName"))
                    object.CenterlineName = message.CenterlineName;
                if (message.StenosisDegree != null && message.hasOwnProperty("StenosisDegree"))
                    object.StenosisDegree = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisDegree[message.StenosisDegree] : message.StenosisDegree;
                if (message.FindingType != null && message.hasOwnProperty("FindingType"))
                    object.FindingType = message.FindingType;
                if (message.StentLevel != null && message.hasOwnProperty("StentLevel"))
                    object.StentLevel = message.StentLevel;
                if (message.FindingUID != null && message.hasOwnProperty("FindingUID"))
                    object.FindingUID = message.FindingUID;
                return object;
            };

            /**
             * Converts this MessageStenosisMark to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMark
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMark.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMark;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarks = (function() {

            /**
             * Properties of a MessageStenosisMarks.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarks
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark>|null} [Marks] MessageStenosisMarks Marks
             */

            /**
             * Constructs a new MessageStenosisMarks.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarks.
             * @implements IMessageStenosisMarks
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarks=} [properties] Properties to set
             */
            function MessageStenosisMarks(properties) {
                this.Marks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarks Marks.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark>} Marks
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @instance
             */
            MessageStenosisMarks.prototype.Marks = $util.emptyArray;

            /**
             * Creates a new MessageStenosisMarks instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarks=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks} MessageStenosisMarks instance
             */
            MessageStenosisMarks.create = function create(properties) {
                return new MessageStenosisMarks(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarks message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarks} message MessageStenosisMarks message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarks.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Marks != null && message.Marks.length)
                    for (var i = 0; i < message.Marks.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.encode(message.Marks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarks message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarks} message MessageStenosisMarks message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarks.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarks message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks} MessageStenosisMarks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarks.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Marks && message.Marks.length))
                            message.Marks = [];
                        message.Marks.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageStenosisMarks message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks} MessageStenosisMarks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarks.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarks message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarks.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Marks != null && message.hasOwnProperty("Marks")) {
                    if (!Array.isArray(message.Marks))
                        return "Marks: array expected";
                    for (var i = 0; i < message.Marks.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.verify(message.Marks[i]);
                        if (error)
                            return "Marks." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMarks message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks} MessageStenosisMarks
             */
            MessageStenosisMarks.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks();
                if (object.Marks) {
                    if (!Array.isArray(object.Marks))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks.Marks: array expected");
                    message.Marks = [];
                    for (var i = 0; i < object.Marks.length; ++i) {
                        if (typeof object.Marks[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks.Marks: object expected");
                        message.Marks[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.fromObject(object.Marks[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarks message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks} message MessageStenosisMarks
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarks.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Marks = [];
                if (message.Marks && message.Marks.length) {
                    object.Marks = [];
                    for (var j = 0; j < message.Marks.length; ++j)
                        object.Marks[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.toObject(message.Marks[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageStenosisMarks to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarks.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarks;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkDistance = (function() {

            /**
             * Properties of a MessageStenosisMarkDistance.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkDistance
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType} DistanceType MessageStenosisMarkDistance DistanceType
             * @property {number} DistanceValue MessageStenosisMarkDistance DistanceValue
             * @property {boolean} IsChecked MessageStenosisMarkDistance IsChecked
             */

            /**
             * Constructs a new MessageStenosisMarkDistance.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkDistance.
             * @implements IMessageStenosisMarkDistance
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance=} [properties] Properties to set
             */
            function MessageStenosisMarkDistance(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkDistance DistanceType.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType} DistanceType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @instance
             */
            MessageStenosisMarkDistance.prototype.DistanceType = 0;

            /**
             * MessageStenosisMarkDistance DistanceValue.
             * @member {number} DistanceValue
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @instance
             */
            MessageStenosisMarkDistance.prototype.DistanceValue = 0;

            /**
             * MessageStenosisMarkDistance IsChecked.
             * @member {boolean} IsChecked
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @instance
             */
            MessageStenosisMarkDistance.prototype.IsChecked = false;

            /**
             * Creates a new MessageStenosisMarkDistance instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance} MessageStenosisMarkDistance instance
             */
            MessageStenosisMarkDistance.create = function create(properties) {
                return new MessageStenosisMarkDistance(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkDistance message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance} message MessageStenosisMarkDistance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkDistance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.DistanceType);
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.DistanceValue);
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsChecked);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkDistance message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance} message MessageStenosisMarkDistance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkDistance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkDistance message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance} MessageStenosisMarkDistance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkDistance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.DistanceType = reader.int32();
                        break;
                    case 2:
                        message.DistanceValue = reader.double();
                        break;
                    case 3:
                        message.IsChecked = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("DistanceType"))
                    throw $util.ProtocolError("missing required 'DistanceType'", { instance: message });
                if (!message.hasOwnProperty("DistanceValue"))
                    throw $util.ProtocolError("missing required 'DistanceValue'", { instance: message });
                if (!message.hasOwnProperty("IsChecked"))
                    throw $util.ProtocolError("missing required 'IsChecked'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkDistance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance} MessageStenosisMarkDistance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkDistance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkDistance message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkDistance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.DistanceType) {
                default:
                    return "DistanceType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (typeof message.DistanceValue !== "number")
                    return "DistanceValue: number expected";
                if (typeof message.IsChecked !== "boolean")
                    return "IsChecked: boolean expected";
                return null;
            };

            /**
             * Creates a MessageStenosisMarkDistance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance} MessageStenosisMarkDistance
             */
            MessageStenosisMarkDistance.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance();
                switch (object.DistanceType) {
                case "StenosisMarkDistanceType_Unknown":
                case 0:
                    message.DistanceType = 0;
                    break;
                case "StenosisMarkDistanceType_Proximal":
                case 1:
                    message.DistanceType = 1;
                    break;
                case "StenosisMarkDistanceType_Distal":
                case 2:
                    message.DistanceType = 2;
                    break;
                case "StenosisMarkDistanceType_Total":
                case 3:
                    message.DistanceType = 3;
                    break;
                }
                if (object.DistanceValue != null)
                    message.DistanceValue = Number(object.DistanceValue);
                if (object.IsChecked != null)
                    message.IsChecked = Boolean(object.IsChecked);
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkDistance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance} message MessageStenosisMarkDistance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkDistance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.DistanceType = options.enums === String ? "StenosisMarkDistanceType_Unknown" : 0;
                    object.DistanceValue = 0;
                    object.IsChecked = false;
                }
                if (message.DistanceType != null && message.hasOwnProperty("DistanceType"))
                    object.DistanceType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType[message.DistanceType] : message.DistanceType;
                if (message.DistanceValue != null && message.hasOwnProperty("DistanceValue"))
                    object.DistanceValue = options.json && !isFinite(message.DistanceValue) ? String(message.DistanceValue) : message.DistanceValue;
                if (message.IsChecked != null && message.hasOwnProperty("IsChecked"))
                    object.IsChecked = message.IsChecked;
                return object;
            };

            /**
             * Converts this MessageStenosisMarkDistance to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkDistance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkDistance;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkDistances = (function() {

            /**
             * Properties of a MessageStenosisMarkDistances.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkDistances
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance>|null} [Distance] MessageStenosisMarkDistances Distance
             */

            /**
             * Constructs a new MessageStenosisMarkDistances.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkDistances.
             * @implements IMessageStenosisMarkDistances
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistances=} [properties] Properties to set
             */
            function MessageStenosisMarkDistances(properties) {
                this.Distance = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkDistances Distance.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance>} Distance
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @instance
             */
            MessageStenosisMarkDistances.prototype.Distance = $util.emptyArray;

            /**
             * Creates a new MessageStenosisMarkDistances instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistances=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances} MessageStenosisMarkDistances instance
             */
            MessageStenosisMarkDistances.create = function create(properties) {
                return new MessageStenosisMarkDistances(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkDistances message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistances} message MessageStenosisMarkDistances message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkDistances.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Distance != null && message.Distance.length)
                    for (var i = 0; i < message.Distance.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance.encode(message.Distance[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkDistances message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistances} message MessageStenosisMarkDistances message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkDistances.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkDistances message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances} MessageStenosisMarkDistances
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkDistances.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Distance && message.Distance.length))
                            message.Distance = [];
                        message.Distance.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkDistances message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances} MessageStenosisMarkDistances
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkDistances.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkDistances message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkDistances.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Distance != null && message.hasOwnProperty("Distance")) {
                    if (!Array.isArray(message.Distance))
                        return "Distance: array expected";
                    for (var i = 0; i < message.Distance.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance.verify(message.Distance[i]);
                        if (error)
                            return "Distance." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMarkDistances message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances} MessageStenosisMarkDistances
             */
            MessageStenosisMarkDistances.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances();
                if (object.Distance) {
                    if (!Array.isArray(object.Distance))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances.Distance: array expected");
                    message.Distance = [];
                    for (var i = 0; i < object.Distance.length; ++i) {
                        if (typeof object.Distance[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances.Distance: object expected");
                        message.Distance[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance.fromObject(object.Distance[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkDistances message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances} message MessageStenosisMarkDistances
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkDistances.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Distance = [];
                if (message.Distance && message.Distance.length) {
                    object.Distance = [];
                    for (var j = 0; j < message.Distance.length; ++j)
                        object.Distance[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance.toObject(message.Distance[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageStenosisMarkDistances to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkDistances.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkDistances;
        })();

        CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo = (function() {

            /**
             * Properties of a MessageCenterLineStatisticsInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageCenterLineStatisticsInfo
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null} [MaxDiameter] MessageCenterLineStatisticsInfo MaxDiameter
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null} [MinDiameter] MessageCenterLineStatisticsInfo MinDiameter
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null} [Area] MessageCenterLineStatisticsInfo Area
             */

            /**
             * Constructs a new MessageCenterLineStatisticsInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageCenterLineStatisticsInfo.
             * @implements IMessageCenterLineStatisticsInfo
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineStatisticsInfo=} [properties] Properties to set
             */
            function MessageCenterLineStatisticsInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageCenterLineStatisticsInfo MaxDiameter.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null|undefined} MaxDiameter
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @instance
             */
            MessageCenterLineStatisticsInfo.prototype.MaxDiameter = null;

            /**
             * MessageCenterLineStatisticsInfo MinDiameter.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null|undefined} MinDiameter
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @instance
             */
            MessageCenterLineStatisticsInfo.prototype.MinDiameter = null;

            /**
             * MessageCenterLineStatisticsInfo Area.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null|undefined} Area
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @instance
             */
            MessageCenterLineStatisticsInfo.prototype.Area = null;

            /**
             * Creates a new MessageCenterLineStatisticsInfo instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineStatisticsInfo=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo} MessageCenterLineStatisticsInfo instance
             */
            MessageCenterLineStatisticsInfo.create = function create(properties) {
                return new MessageCenterLineStatisticsInfo(properties);
            };

            /**
             * Encodes the specified MessageCenterLineStatisticsInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineStatisticsInfo} message MessageCenterLineStatisticsInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCenterLineStatisticsInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.MaxDiameter != null && Object.hasOwnProperty.call(message, "MaxDiameter"))
                    $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.MaxDiameter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.MinDiameter != null && Object.hasOwnProperty.call(message, "MinDiameter"))
                    $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.MinDiameter, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.Area != null && Object.hasOwnProperty.call(message, "Area"))
                    $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.Area, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageCenterLineStatisticsInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCenterLineStatisticsInfo} message MessageCenterLineStatisticsInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCenterLineStatisticsInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageCenterLineStatisticsInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo} MessageCenterLineStatisticsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCenterLineStatisticsInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.MaxDiameter = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.MinDiameter = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.Area = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageCenterLineStatisticsInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo} MessageCenterLineStatisticsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCenterLineStatisticsInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageCenterLineStatisticsInfo message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageCenterLineStatisticsInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.MaxDiameter != null && message.hasOwnProperty("MaxDiameter")) {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.MaxDiameter);
                    if (error)
                        return "MaxDiameter." + error;
                }
                if (message.MinDiameter != null && message.hasOwnProperty("MinDiameter")) {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.MinDiameter);
                    if (error)
                        return "MinDiameter." + error;
                }
                if (message.Area != null && message.hasOwnProperty("Area")) {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.Area);
                    if (error)
                        return "Area." + error;
                }
                return null;
            };

            /**
             * Creates a MessageCenterLineStatisticsInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo} MessageCenterLineStatisticsInfo
             */
            MessageCenterLineStatisticsInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo();
                if (object.MaxDiameter != null) {
                    if (typeof object.MaxDiameter !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo.MaxDiameter: object expected");
                    message.MaxDiameter = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.MaxDiameter);
                }
                if (object.MinDiameter != null) {
                    if (typeof object.MinDiameter !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo.MinDiameter: object expected");
                    message.MinDiameter = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.MinDiameter);
                }
                if (object.Area != null) {
                    if (typeof object.Area !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo.Area: object expected");
                    message.Area = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.Area);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageCenterLineStatisticsInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo} message MessageCenterLineStatisticsInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageCenterLineStatisticsInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.MaxDiameter = null;
                    object.MinDiameter = null;
                    object.Area = null;
                }
                if (message.MaxDiameter != null && message.hasOwnProperty("MaxDiameter"))
                    object.MaxDiameter = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.MaxDiameter, options);
                if (message.MinDiameter != null && message.hasOwnProperty("MinDiameter"))
                    object.MinDiameter = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.MinDiameter, options);
                if (message.Area != null && message.hasOwnProperty("Area"))
                    object.Area = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.Area, options);
                return object;
            };

            /**
             * Converts this MessageCenterLineStatisticsInfo to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageCenterLineStatisticsInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageCenterLineStatisticsInfo;
        })();

        CTCardiacCommonProtocol.MessageContourDiameterEdit = (function() {

            /**
             * Properties of a MessageContourDiameterEdit.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageContourDiameterEdit
             * @property {Mcsf.CTCardiacCommonProtocol.ContourDiameterType} DiameterType MessageContourDiameterEdit DiameterType
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} DiameterPoints MessageContourDiameterEdit DiameterPoints
             */

            /**
             * Constructs a new MessageContourDiameterEdit.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageContourDiameterEdit.
             * @implements IMessageContourDiameterEdit
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourDiameterEdit=} [properties] Properties to set
             */
            function MessageContourDiameterEdit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageContourDiameterEdit DiameterType.
             * @member {Mcsf.CTCardiacCommonProtocol.ContourDiameterType} DiameterType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @instance
             */
            MessageContourDiameterEdit.prototype.DiameterType = 1;

            /**
             * MessageContourDiameterEdit DiameterPoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} DiameterPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @instance
             */
            MessageContourDiameterEdit.prototype.DiameterPoints = null;

            /**
             * Creates a new MessageContourDiameterEdit instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourDiameterEdit=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit} MessageContourDiameterEdit instance
             */
            MessageContourDiameterEdit.create = function create(properties) {
                return new MessageContourDiameterEdit(properties);
            };

            /**
             * Encodes the specified MessageContourDiameterEdit message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourDiameterEdit} message MessageContourDiameterEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageContourDiameterEdit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.DiameterType);
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.DiameterPoints, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageContourDiameterEdit message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourDiameterEdit} message MessageContourDiameterEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageContourDiameterEdit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageContourDiameterEdit message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit} MessageContourDiameterEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageContourDiameterEdit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.DiameterType = reader.int32();
                        break;
                    case 2:
                        message.DiameterPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("DiameterType"))
                    throw $util.ProtocolError("missing required 'DiameterType'", { instance: message });
                if (!message.hasOwnProperty("DiameterPoints"))
                    throw $util.ProtocolError("missing required 'DiameterPoints'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageContourDiameterEdit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit} MessageContourDiameterEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageContourDiameterEdit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageContourDiameterEdit message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageContourDiameterEdit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.DiameterType) {
                default:
                    return "DiameterType: enum value expected";
                case 1:
                case 2:
                    break;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.DiameterPoints);
                    if (error)
                        return "DiameterPoints." + error;
                }
                return null;
            };

            /**
             * Creates a MessageContourDiameterEdit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit} MessageContourDiameterEdit
             */
            MessageContourDiameterEdit.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit();
                switch (object.DiameterType) {
                case "ContourDiameterType_Max":
                case 1:
                    message.DiameterType = 1;
                    break;
                case "ContourDiameterType_Min":
                case 2:
                    message.DiameterType = 2;
                    break;
                }
                if (object.DiameterPoints != null) {
                    if (typeof object.DiameterPoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit.DiameterPoints: object expected");
                    message.DiameterPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.DiameterPoints);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageContourDiameterEdit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit} message MessageContourDiameterEdit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageContourDiameterEdit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.DiameterType = options.enums === String ? "ContourDiameterType_Max" : 1;
                    object.DiameterPoints = null;
                }
                if (message.DiameterType != null && message.hasOwnProperty("DiameterType"))
                    object.DiameterType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.ContourDiameterType[message.DiameterType] : message.DiameterType;
                if (message.DiameterPoints != null && message.hasOwnProperty("DiameterPoints"))
                    object.DiameterPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.DiameterPoints, options);
                return object;
            };

            /**
             * Converts this MessageContourDiameterEdit to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageContourDiameterEdit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageContourDiameterEdit;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkDistanceType = (function() {

            /**
             * Properties of a MessageStenosisMarkDistanceType.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkDistanceType
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType} DistanceType MessageStenosisMarkDistanceType DistanceType
             * @property {boolean|null} [IsChecked] MessageStenosisMarkDistanceType IsChecked
             */

            /**
             * Constructs a new MessageStenosisMarkDistanceType.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkDistanceType.
             * @implements IMessageStenosisMarkDistanceType
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistanceType=} [properties] Properties to set
             */
            function MessageStenosisMarkDistanceType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkDistanceType DistanceType.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType} DistanceType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @instance
             */
            MessageStenosisMarkDistanceType.prototype.DistanceType = 0;

            /**
             * MessageStenosisMarkDistanceType IsChecked.
             * @member {boolean} IsChecked
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @instance
             */
            MessageStenosisMarkDistanceType.prototype.IsChecked = false;

            /**
             * Creates a new MessageStenosisMarkDistanceType instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistanceType=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType} MessageStenosisMarkDistanceType instance
             */
            MessageStenosisMarkDistanceType.create = function create(properties) {
                return new MessageStenosisMarkDistanceType(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkDistanceType message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistanceType} message MessageStenosisMarkDistanceType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkDistanceType.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.DistanceType);
                if (message.IsChecked != null && Object.hasOwnProperty.call(message, "IsChecked"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsChecked);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkDistanceType message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistanceType} message MessageStenosisMarkDistanceType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkDistanceType.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkDistanceType message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType} MessageStenosisMarkDistanceType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkDistanceType.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.DistanceType = reader.int32();
                        break;
                    case 2:
                        message.IsChecked = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("DistanceType"))
                    throw $util.ProtocolError("missing required 'DistanceType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkDistanceType message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType} MessageStenosisMarkDistanceType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkDistanceType.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkDistanceType message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkDistanceType.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.DistanceType) {
                default:
                    return "DistanceType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (message.IsChecked != null && message.hasOwnProperty("IsChecked"))
                    if (typeof message.IsChecked !== "boolean")
                        return "IsChecked: boolean expected";
                return null;
            };

            /**
             * Creates a MessageStenosisMarkDistanceType message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType} MessageStenosisMarkDistanceType
             */
            MessageStenosisMarkDistanceType.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType();
                switch (object.DistanceType) {
                case "StenosisMarkDistanceType_Unknown":
                case 0:
                    message.DistanceType = 0;
                    break;
                case "StenosisMarkDistanceType_Proximal":
                case 1:
                    message.DistanceType = 1;
                    break;
                case "StenosisMarkDistanceType_Distal":
                case 2:
                    message.DistanceType = 2;
                    break;
                case "StenosisMarkDistanceType_Total":
                case 3:
                    message.DistanceType = 3;
                    break;
                }
                if (object.IsChecked != null)
                    message.IsChecked = Boolean(object.IsChecked);
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkDistanceType message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType} message MessageStenosisMarkDistanceType
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkDistanceType.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.DistanceType = options.enums === String ? "StenosisMarkDistanceType_Unknown" : 0;
                    object.IsChecked = false;
                }
                if (message.DistanceType != null && message.hasOwnProperty("DistanceType"))
                    object.DistanceType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType[message.DistanceType] : message.DistanceType;
                if (message.IsChecked != null && message.hasOwnProperty("IsChecked"))
                    object.IsChecked = message.IsChecked;
                return object;
            };

            /**
             * Converts this MessageStenosisMarkDistanceType to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkDistanceType.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkDistanceType;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkLine = (function() {

            /**
             * Properties of a MessageStenosisMarkLine.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkLine
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType|null} [DistanceType] MessageStenosisMarkLine DistanceType
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null} [LinePoints] MessageStenosisMarkLine LinePoints
             */

            /**
             * Constructs a new MessageStenosisMarkLine.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkLine.
             * @implements IMessageStenosisMarkLine
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine=} [properties] Properties to set
             */
            function MessageStenosisMarkLine(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkLine DistanceType.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType} DistanceType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @instance
             */
            MessageStenosisMarkLine.prototype.DistanceType = 0;

            /**
             * MessageStenosisMarkLine LinePoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null|undefined} LinePoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @instance
             */
            MessageStenosisMarkLine.prototype.LinePoints = null;

            /**
             * Creates a new MessageStenosisMarkLine instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine} MessageStenosisMarkLine instance
             */
            MessageStenosisMarkLine.create = function create(properties) {
                return new MessageStenosisMarkLine(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkLine message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine} message MessageStenosisMarkLine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkLine.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.DistanceType != null && Object.hasOwnProperty.call(message, "DistanceType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.DistanceType);
                if (message.LinePoints != null && Object.hasOwnProperty.call(message, "LinePoints"))
                    $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.LinePoints, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkLine message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine} message MessageStenosisMarkLine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkLine.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkLine message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine} MessageStenosisMarkLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkLine.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.DistanceType = reader.int32();
                        break;
                    case 2:
                        message.LinePoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkLine message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine} MessageStenosisMarkLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkLine.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkLine message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkLine.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.DistanceType != null && message.hasOwnProperty("DistanceType"))
                    switch (message.DistanceType) {
                    default:
                        return "DistanceType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.LinePoints != null && message.hasOwnProperty("LinePoints")) {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.LinePoints);
                    if (error)
                        return "LinePoints." + error;
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMarkLine message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine} MessageStenosisMarkLine
             */
            MessageStenosisMarkLine.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine();
                switch (object.DistanceType) {
                case "StenosisMarkDistanceType_Unknown":
                case 0:
                    message.DistanceType = 0;
                    break;
                case "StenosisMarkDistanceType_Proximal":
                case 1:
                    message.DistanceType = 1;
                    break;
                case "StenosisMarkDistanceType_Distal":
                case 2:
                    message.DistanceType = 2;
                    break;
                case "StenosisMarkDistanceType_Total":
                case 3:
                    message.DistanceType = 3;
                    break;
                }
                if (object.LinePoints != null) {
                    if (typeof object.LinePoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.LinePoints: object expected");
                    message.LinePoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.LinePoints);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkLine message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine} message MessageStenosisMarkLine
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkLine.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.DistanceType = options.enums === String ? "StenosisMarkDistanceType_Unknown" : 0;
                    object.LinePoints = null;
                }
                if (message.DistanceType != null && message.hasOwnProperty("DistanceType"))
                    object.DistanceType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType[message.DistanceType] : message.DistanceType;
                if (message.LinePoints != null && message.hasOwnProperty("LinePoints"))
                    object.LinePoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.LinePoints, options);
                return object;
            };

            /**
             * Converts this MessageStenosisMarkLine to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkLine.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkLine;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkLines = (function() {

            /**
             * Properties of a MessageStenosisMarkLines.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkLines
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine>|null} [Lines] MessageStenosisMarkLines Lines
             */

            /**
             * Constructs a new MessageStenosisMarkLines.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkLines.
             * @implements IMessageStenosisMarkLines
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLines=} [properties] Properties to set
             */
            function MessageStenosisMarkLines(properties) {
                this.Lines = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkLines Lines.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine>} Lines
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @instance
             */
            MessageStenosisMarkLines.prototype.Lines = $util.emptyArray;

            /**
             * Creates a new MessageStenosisMarkLines instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLines=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines} MessageStenosisMarkLines instance
             */
            MessageStenosisMarkLines.create = function create(properties) {
                return new MessageStenosisMarkLines(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkLines message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLines} message MessageStenosisMarkLines message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkLines.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Lines != null && message.Lines.length)
                    for (var i = 0; i < message.Lines.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.encode(message.Lines[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkLines message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLines} message MessageStenosisMarkLines message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkLines.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkLines message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines} MessageStenosisMarkLines
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkLines.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Lines && message.Lines.length))
                            message.Lines = [];
                        message.Lines.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkLines message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines} MessageStenosisMarkLines
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkLines.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkLines message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkLines.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Lines != null && message.hasOwnProperty("Lines")) {
                    if (!Array.isArray(message.Lines))
                        return "Lines: array expected";
                    for (var i = 0; i < message.Lines.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.verify(message.Lines[i]);
                        if (error)
                            return "Lines." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMarkLines message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines} MessageStenosisMarkLines
             */
            MessageStenosisMarkLines.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines();
                if (object.Lines) {
                    if (!Array.isArray(object.Lines))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines.Lines: array expected");
                    message.Lines = [];
                    for (var i = 0; i < object.Lines.length; ++i) {
                        if (typeof object.Lines[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines.Lines: object expected");
                        message.Lines[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.fromObject(object.Lines[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkLines message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines} message MessageStenosisMarkLines
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkLines.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Lines = [];
                if (message.Lines && message.Lines.length) {
                    object.Lines = [];
                    for (var j = 0; j < message.Lines.length; ++j)
                        object.Lines[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.toObject(message.Lines[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageStenosisMarkLines to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkLines.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkLines;
        })();

        CTCardiacCommonProtocol.MessageSectionSlider = (function() {

            /**
             * Properties of a MessageSectionSlider.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageSectionSlider
             * @property {number} CenterLineID MessageSectionSlider CenterLineID
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} CenterPoint MessageSectionSlider CenterPoint
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} NormalVector MessageSectionSlider NormalVector
             */

            /**
             * Constructs a new MessageSectionSlider.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageSectionSlider.
             * @implements IMessageSectionSlider
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider=} [properties] Properties to set
             */
            function MessageSectionSlider(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageSectionSlider CenterLineID.
             * @member {number} CenterLineID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @instance
             */
            MessageSectionSlider.prototype.CenterLineID = 0;

            /**
             * MessageSectionSlider CenterPoint.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} CenterPoint
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @instance
             */
            MessageSectionSlider.prototype.CenterPoint = null;

            /**
             * MessageSectionSlider NormalVector.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} NormalVector
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @instance
             */
            MessageSectionSlider.prototype.NormalVector = null;

            /**
             * Creates a new MessageSectionSlider instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSectionSlider} MessageSectionSlider instance
             */
            MessageSectionSlider.create = function create(properties) {
                return new MessageSectionSlider(properties);
            };

            /**
             * Encodes the specified MessageSectionSlider message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider} message MessageSectionSlider message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSectionSlider.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CenterLineID);
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.encode(message.CenterPoint, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.encode(message.NormalVector, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageSectionSlider message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider} message MessageSectionSlider message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSectionSlider.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageSectionSlider message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSectionSlider} MessageSectionSlider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSectionSlider.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSectionSlider();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.CenterLineID = reader.int32();
                        break;
                    case 2:
                        message.CenterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.NormalVector = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("CenterLineID"))
                    throw $util.ProtocolError("missing required 'CenterLineID'", { instance: message });
                if (!message.hasOwnProperty("CenterPoint"))
                    throw $util.ProtocolError("missing required 'CenterPoint'", { instance: message });
                if (!message.hasOwnProperty("NormalVector"))
                    throw $util.ProtocolError("missing required 'NormalVector'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageSectionSlider message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSectionSlider} MessageSectionSlider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSectionSlider.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageSectionSlider message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageSectionSlider.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.CenterLineID))
                    return "CenterLineID: integer expected";
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify(message.CenterPoint);
                    if (error)
                        return "CenterPoint." + error;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify(message.NormalVector);
                    if (error)
                        return "NormalVector." + error;
                }
                return null;
            };

            /**
             * Creates a MessageSectionSlider message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSectionSlider} MessageSectionSlider
             */
            MessageSectionSlider.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageSectionSlider)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSectionSlider();
                if (object.CenterLineID != null)
                    message.CenterLineID = object.CenterLineID | 0;
                if (object.CenterPoint != null) {
                    if (typeof object.CenterPoint !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.CenterPoint: object expected");
                    message.CenterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.fromObject(object.CenterPoint);
                }
                if (object.NormalVector != null) {
                    if (typeof object.NormalVector !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.NormalVector: object expected");
                    message.NormalVector = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.fromObject(object.NormalVector);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageSectionSlider message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageSectionSlider} message MessageSectionSlider
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageSectionSlider.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.CenterLineID = 0;
                    object.CenterPoint = null;
                    object.NormalVector = null;
                }
                if (message.CenterLineID != null && message.hasOwnProperty("CenterLineID"))
                    object.CenterLineID = message.CenterLineID;
                if (message.CenterPoint != null && message.hasOwnProperty("CenterPoint"))
                    object.CenterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.toObject(message.CenterPoint, options);
                if (message.NormalVector != null && message.hasOwnProperty("NormalVector"))
                    object.NormalVector = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.toObject(message.NormalVector, options);
                return object;
            };

            /**
             * Converts this MessageSectionSlider to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSectionSlider
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageSectionSlider.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageSectionSlider;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkSlider = (function() {

            /**
             * Properties of a MessageStenosisMarkSlider.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkSlider
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType MessageStenosisMarkSlider MarkType
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider} Slider MessageStenosisMarkSlider Slider
             */

            /**
             * Constructs a new MessageStenosisMarkSlider.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkSlider.
             * @implements IMessageStenosisMarkSlider
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider=} [properties] Properties to set
             */
            function MessageStenosisMarkSlider(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkSlider MarkType.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @instance
             */
            MessageStenosisMarkSlider.prototype.MarkType = 0;

            /**
             * MessageStenosisMarkSlider Slider.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider} Slider
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @instance
             */
            MessageStenosisMarkSlider.prototype.Slider = null;

            /**
             * Creates a new MessageStenosisMarkSlider instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider} MessageStenosisMarkSlider instance
             */
            MessageStenosisMarkSlider.create = function create(properties) {
                return new MessageStenosisMarkSlider(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkSlider message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider} message MessageStenosisMarkSlider message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkSlider.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MarkType);
                $root.Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.encode(message.Slider, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkSlider message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider} message MessageStenosisMarkSlider message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkSlider.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkSlider message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider} MessageStenosisMarkSlider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkSlider.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.MarkType = reader.int32();
                        break;
                    case 2:
                        message.Slider = $root.Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("MarkType"))
                    throw $util.ProtocolError("missing required 'MarkType'", { instance: message });
                if (!message.hasOwnProperty("Slider"))
                    throw $util.ProtocolError("missing required 'Slider'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkSlider message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider} MessageStenosisMarkSlider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkSlider.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkSlider message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkSlider.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.MarkType) {
                default:
                    return "MarkType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.verify(message.Slider);
                    if (error)
                        return "Slider." + error;
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMarkSlider message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider} MessageStenosisMarkSlider
             */
            MessageStenosisMarkSlider.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider();
                switch (object.MarkType) {
                case "StenosisMarkType_Unknown":
                case 0:
                    message.MarkType = 0;
                    break;
                case "StenosisMarkType_Proximal":
                case 1:
                    message.MarkType = 1;
                    break;
                case "StenosisMarkType_Distal":
                case 2:
                    message.MarkType = 2;
                    break;
                case "StenosisMarkType_Nidus":
                case 3:
                    message.MarkType = 3;
                    break;
                }
                if (object.Slider != null) {
                    if (typeof object.Slider !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.Slider: object expected");
                    message.Slider = $root.Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.fromObject(object.Slider);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkSlider message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider} message MessageStenosisMarkSlider
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkSlider.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.MarkType = options.enums === String ? "StenosisMarkType_Unknown" : 0;
                    object.Slider = null;
                }
                if (message.MarkType != null && message.hasOwnProperty("MarkType"))
                    object.MarkType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkType[message.MarkType] : message.MarkType;
                if (message.Slider != null && message.hasOwnProperty("Slider"))
                    object.Slider = $root.Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.toObject(message.Slider, options);
                return object;
            };

            /**
             * Converts this MessageStenosisMarkSlider to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkSlider.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkSlider;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkSliders = (function() {

            /**
             * Properties of a MessageStenosisMarkSliders.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkSliders
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider>|null} [Sliders] MessageStenosisMarkSliders Sliders
             */

            /**
             * Constructs a new MessageStenosisMarkSliders.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkSliders.
             * @implements IMessageStenosisMarkSliders
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSliders=} [properties] Properties to set
             */
            function MessageStenosisMarkSliders(properties) {
                this.Sliders = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkSliders Sliders.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider>} Sliders
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @instance
             */
            MessageStenosisMarkSliders.prototype.Sliders = $util.emptyArray;

            /**
             * Creates a new MessageStenosisMarkSliders instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSliders=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders} MessageStenosisMarkSliders instance
             */
            MessageStenosisMarkSliders.create = function create(properties) {
                return new MessageStenosisMarkSliders(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkSliders message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSliders} message MessageStenosisMarkSliders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkSliders.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Sliders != null && message.Sliders.length)
                    for (var i = 0; i < message.Sliders.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.encode(message.Sliders[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkSliders message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSliders} message MessageStenosisMarkSliders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkSliders.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkSliders message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders} MessageStenosisMarkSliders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkSliders.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Sliders && message.Sliders.length))
                            message.Sliders = [];
                        message.Sliders.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkSliders message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders} MessageStenosisMarkSliders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkSliders.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkSliders message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkSliders.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Sliders != null && message.hasOwnProperty("Sliders")) {
                    if (!Array.isArray(message.Sliders))
                        return "Sliders: array expected";
                    for (var i = 0; i < message.Sliders.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.verify(message.Sliders[i]);
                        if (error)
                            return "Sliders." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMarkSliders message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders} MessageStenosisMarkSliders
             */
            MessageStenosisMarkSliders.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders();
                if (object.Sliders) {
                    if (!Array.isArray(object.Sliders))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders.Sliders: array expected");
                    message.Sliders = [];
                    for (var i = 0; i < object.Sliders.length; ++i) {
                        if (typeof object.Sliders[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders.Sliders: object expected");
                        message.Sliders[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.fromObject(object.Sliders[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkSliders message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders} message MessageStenosisMarkSliders
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkSliders.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Sliders = [];
                if (message.Sliders && message.Sliders.length) {
                    object.Sliders = [];
                    for (var j = 0; j < message.Sliders.length; ++j)
                        object.Sliders[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.toObject(message.Sliders[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageStenosisMarkSliders to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkSliders.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkSliders;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkPointIndex = (function() {

            /**
             * Properties of a MessageStenosisMarkPointIndex.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkPointIndex
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType MessageStenosisMarkPointIndex MarkType
             * @property {number} MarkPointIndex MessageStenosisMarkPointIndex MarkPointIndex
             */

            /**
             * Constructs a new MessageStenosisMarkPointIndex.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkPointIndex.
             * @implements IMessageStenosisMarkPointIndex
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex=} [properties] Properties to set
             */
            function MessageStenosisMarkPointIndex(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkPointIndex MarkType.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @instance
             */
            MessageStenosisMarkPointIndex.prototype.MarkType = 0;

            /**
             * MessageStenosisMarkPointIndex MarkPointIndex.
             * @member {number} MarkPointIndex
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @instance
             */
            MessageStenosisMarkPointIndex.prototype.MarkPointIndex = 0;

            /**
             * Creates a new MessageStenosisMarkPointIndex instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex} MessageStenosisMarkPointIndex instance
             */
            MessageStenosisMarkPointIndex.create = function create(properties) {
                return new MessageStenosisMarkPointIndex(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkPointIndex message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex} message MessageStenosisMarkPointIndex message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkPointIndex.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MarkType);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MarkPointIndex);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkPointIndex message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex} message MessageStenosisMarkPointIndex message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkPointIndex.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkPointIndex message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex} MessageStenosisMarkPointIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkPointIndex.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.MarkType = reader.int32();
                        break;
                    case 2:
                        message.MarkPointIndex = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("MarkType"))
                    throw $util.ProtocolError("missing required 'MarkType'", { instance: message });
                if (!message.hasOwnProperty("MarkPointIndex"))
                    throw $util.ProtocolError("missing required 'MarkPointIndex'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkPointIndex message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex} MessageStenosisMarkPointIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkPointIndex.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkPointIndex message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkPointIndex.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.MarkType) {
                default:
                    return "MarkType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (!$util.isInteger(message.MarkPointIndex))
                    return "MarkPointIndex: integer expected";
                return null;
            };

            /**
             * Creates a MessageStenosisMarkPointIndex message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex} MessageStenosisMarkPointIndex
             */
            MessageStenosisMarkPointIndex.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex();
                switch (object.MarkType) {
                case "StenosisMarkType_Unknown":
                case 0:
                    message.MarkType = 0;
                    break;
                case "StenosisMarkType_Proximal":
                case 1:
                    message.MarkType = 1;
                    break;
                case "StenosisMarkType_Distal":
                case 2:
                    message.MarkType = 2;
                    break;
                case "StenosisMarkType_Nidus":
                case 3:
                    message.MarkType = 3;
                    break;
                }
                if (object.MarkPointIndex != null)
                    message.MarkPointIndex = object.MarkPointIndex | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkPointIndex message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex} message MessageStenosisMarkPointIndex
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkPointIndex.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.MarkType = options.enums === String ? "StenosisMarkType_Unknown" : 0;
                    object.MarkPointIndex = 0;
                }
                if (message.MarkType != null && message.hasOwnProperty("MarkType"))
                    object.MarkType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkType[message.MarkType] : message.MarkType;
                if (message.MarkPointIndex != null && message.hasOwnProperty("MarkPointIndex"))
                    object.MarkPointIndex = message.MarkPointIndex;
                return object;
            };

            /**
             * Converts this MessageStenosisMarkPointIndex to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkPointIndex.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkPointIndex;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs = (function() {

            /**
             * Properties of a MessageStenosisMarkPointIndexs.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkPointIndexs
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex>|null} [Indexs] MessageStenosisMarkPointIndexs Indexs
             */

            /**
             * Constructs a new MessageStenosisMarkPointIndexs.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkPointIndexs.
             * @implements IMessageStenosisMarkPointIndexs
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndexs=} [properties] Properties to set
             */
            function MessageStenosisMarkPointIndexs(properties) {
                this.Indexs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkPointIndexs Indexs.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex>} Indexs
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @instance
             */
            MessageStenosisMarkPointIndexs.prototype.Indexs = $util.emptyArray;

            /**
             * Creates a new MessageStenosisMarkPointIndexs instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndexs=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs} MessageStenosisMarkPointIndexs instance
             */
            MessageStenosisMarkPointIndexs.create = function create(properties) {
                return new MessageStenosisMarkPointIndexs(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkPointIndexs message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndexs} message MessageStenosisMarkPointIndexs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkPointIndexs.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Indexs != null && message.Indexs.length)
                    for (var i = 0; i < message.Indexs.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex.encode(message.Indexs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkPointIndexs message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndexs} message MessageStenosisMarkPointIndexs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkPointIndexs.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkPointIndexs message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs} MessageStenosisMarkPointIndexs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkPointIndexs.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Indexs && message.Indexs.length))
                            message.Indexs = [];
                        message.Indexs.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkPointIndexs message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs} MessageStenosisMarkPointIndexs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkPointIndexs.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkPointIndexs message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkPointIndexs.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Indexs != null && message.hasOwnProperty("Indexs")) {
                    if (!Array.isArray(message.Indexs))
                        return "Indexs: array expected";
                    for (var i = 0; i < message.Indexs.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex.verify(message.Indexs[i]);
                        if (error)
                            return "Indexs." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMarkPointIndexs message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs} MessageStenosisMarkPointIndexs
             */
            MessageStenosisMarkPointIndexs.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs();
                if (object.Indexs) {
                    if (!Array.isArray(object.Indexs))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs.Indexs: array expected");
                    message.Indexs = [];
                    for (var i = 0; i < object.Indexs.length; ++i) {
                        if (typeof object.Indexs[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs.Indexs: object expected");
                        message.Indexs[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex.fromObject(object.Indexs[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkPointIndexs message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs} message MessageStenosisMarkPointIndexs
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkPointIndexs.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Indexs = [];
                if (message.Indexs && message.Indexs.length) {
                    object.Indexs = [];
                    for (var j = 0; j < message.Indexs.length; ++j)
                        object.Indexs[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex.toObject(message.Indexs[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageStenosisMarkPointIndexs to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkPointIndexs.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkPointIndexs;
        })();

        CTCardiacCommonProtocol.MessageStenosisListOperationParams = (function() {

            /**
             * Properties of a MessageStenosisListOperationParams.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisListOperationParams
             * @property {Mcsf.CTCardiacCommonProtocol.ListOperationType} OperationType MessageStenosisListOperationParams OperationType
             * @property {string|null} [UID] MessageStenosisListOperationParams UID
             * @property {string|null} [NewName] MessageStenosisListOperationParams NewName
             */

            /**
             * Constructs a new MessageStenosisListOperationParams.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisListOperationParams.
             * @implements IMessageStenosisListOperationParams
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisListOperationParams=} [properties] Properties to set
             */
            function MessageStenosisListOperationParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisListOperationParams OperationType.
             * @member {Mcsf.CTCardiacCommonProtocol.ListOperationType} OperationType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @instance
             */
            MessageStenosisListOperationParams.prototype.OperationType = 1;

            /**
             * MessageStenosisListOperationParams UID.
             * @member {string} UID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @instance
             */
            MessageStenosisListOperationParams.prototype.UID = "";

            /**
             * MessageStenosisListOperationParams NewName.
             * @member {string} NewName
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @instance
             */
            MessageStenosisListOperationParams.prototype.NewName = "";

            /**
             * Creates a new MessageStenosisListOperationParams instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisListOperationParams=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams} MessageStenosisListOperationParams instance
             */
            MessageStenosisListOperationParams.create = function create(properties) {
                return new MessageStenosisListOperationParams(properties);
            };

            /**
             * Encodes the specified MessageStenosisListOperationParams message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisListOperationParams} message MessageStenosisListOperationParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisListOperationParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.OperationType);
                if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.UID);
                if (message.NewName != null && Object.hasOwnProperty.call(message, "NewName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.NewName);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisListOperationParams message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisListOperationParams} message MessageStenosisListOperationParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisListOperationParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisListOperationParams message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams} MessageStenosisListOperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisListOperationParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.OperationType = reader.int32();
                        break;
                    case 2:
                        message.UID = reader.string();
                        break;
                    case 3:
                        message.NewName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("OperationType"))
                    throw $util.ProtocolError("missing required 'OperationType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisListOperationParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams} MessageStenosisListOperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisListOperationParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisListOperationParams message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisListOperationParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.OperationType) {
                default:
                    return "OperationType: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
                if (message.UID != null && message.hasOwnProperty("UID"))
                    if (!$util.isString(message.UID))
                        return "UID: string expected";
                if (message.NewName != null && message.hasOwnProperty("NewName"))
                    if (!$util.isString(message.NewName))
                        return "NewName: string expected";
                return null;
            };

            /**
             * Creates a MessageStenosisListOperationParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams} MessageStenosisListOperationParams
             */
            MessageStenosisListOperationParams.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams();
                switch (object.OperationType) {
                case "ListOperationType_Add":
                case 1:
                    message.OperationType = 1;
                    break;
                case "ListOperationType_Delete":
                case 2:
                    message.OperationType = 2;
                    break;
                case "ListOperationType_Rename":
                case 3:
                    message.OperationType = 3;
                    break;
                case "ListOperationType_Select":
                case 4:
                    message.OperationType = 4;
                    break;
                case "ListOperationType_Change":
                case 5:
                    message.OperationType = 5;
                    break;
                }
                if (object.UID != null)
                    message.UID = String(object.UID);
                if (object.NewName != null)
                    message.NewName = String(object.NewName);
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisListOperationParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams} message MessageStenosisListOperationParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisListOperationParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.OperationType = options.enums === String ? "ListOperationType_Add" : 1;
                    object.UID = "";
                    object.NewName = "";
                }
                if (message.OperationType != null && message.hasOwnProperty("OperationType"))
                    object.OperationType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.ListOperationType[message.OperationType] : message.OperationType;
                if (message.UID != null && message.hasOwnProperty("UID"))
                    object.UID = message.UID;
                if (message.NewName != null && message.hasOwnProperty("NewName"))
                    object.NewName = message.NewName;
                return object;
            };

            /**
             * Converts this MessageStenosisListOperationParams to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisListOperationParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisListOperationParams;
        })();

        CTCardiacCommonProtocol.MessageStenosisItem = (function() {

            /**
             * Properties of a MessageStenosisItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisItem
             * @property {number} ID MessageStenosisItem ID
             * @property {string} Name MessageStenosisItem Name
             */

            /**
             * Constructs a new MessageStenosisItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisItem.
             * @implements IMessageStenosisItem
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem=} [properties] Properties to set
             */
            function MessageStenosisItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisItem ID.
             * @member {number} ID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @instance
             */
            MessageStenosisItem.prototype.ID = 0;

            /**
             * MessageStenosisItem Name.
             * @member {string} Name
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @instance
             */
            MessageStenosisItem.prototype.Name = "";

            /**
             * Creates a new MessageStenosisItem instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisItem} MessageStenosisItem instance
             */
            MessageStenosisItem.create = function create(properties) {
                return new MessageStenosisItem(properties);
            };

            /**
             * Encodes the specified MessageStenosisItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisItem.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem} message MessageStenosisItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem} message MessageStenosisItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisItem message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisItem} MessageStenosisItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ID = reader.int32();
                        break;
                    case 2:
                        message.Name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ID"))
                    throw $util.ProtocolError("missing required 'ID'", { instance: message });
                if (!message.hasOwnProperty("Name"))
                    throw $util.ProtocolError("missing required 'Name'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisItem} MessageStenosisItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisItem message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
                if (!$util.isString(message.Name))
                    return "Name: string expected";
                return null;
            };

            /**
             * Creates a MessageStenosisItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisItem} MessageStenosisItem
             */
            MessageStenosisItem.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisItem)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisItem();
                if (object.ID != null)
                    message.ID = object.ID | 0;
                if (object.Name != null)
                    message.Name = String(object.Name);
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisItem} message MessageStenosisItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ID = 0;
                    object.Name = "";
                }
                if (message.ID != null && message.hasOwnProperty("ID"))
                    object.ID = message.ID;
                if (message.Name != null && message.hasOwnProperty("Name"))
                    object.Name = message.Name;
                return object;
            };

            /**
             * Converts this MessageStenosisItem to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisItem;
        })();

        CTCardiacCommonProtocol.MessageStenosisList = (function() {

            /**
             * Properties of a MessageStenosisList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisList
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem>|null} [Items] MessageStenosisList Items
             * @property {number} SelectedID MessageStenosisList SelectedID
             */

            /**
             * Constructs a new MessageStenosisList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisList.
             * @implements IMessageStenosisList
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisList=} [properties] Properties to set
             */
            function MessageStenosisList(properties) {
                this.Items = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisList Items.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem>} Items
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @instance
             */
            MessageStenosisList.prototype.Items = $util.emptyArray;

            /**
             * MessageStenosisList SelectedID.
             * @member {number} SelectedID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @instance
             */
            MessageStenosisList.prototype.SelectedID = 0;

            /**
             * Creates a new MessageStenosisList instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisList=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisList} MessageStenosisList instance
             */
            MessageStenosisList.create = function create(properties) {
                return new MessageStenosisList(properties);
            };

            /**
             * Encodes the specified MessageStenosisList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisList.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisList} message MessageStenosisList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Items != null && message.Items.length)
                    for (var i = 0; i < message.Items.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisItem.encode(message.Items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SelectedID);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisList} message MessageStenosisList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisList message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisList} MessageStenosisList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Items && message.Items.length))
                            message.Items = [];
                        message.Items.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisItem.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.SelectedID = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("SelectedID"))
                    throw $util.ProtocolError("missing required 'SelectedID'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisList} MessageStenosisList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisList message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Items != null && message.hasOwnProperty("Items")) {
                    if (!Array.isArray(message.Items))
                        return "Items: array expected";
                    for (var i = 0; i < message.Items.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisItem.verify(message.Items[i]);
                        if (error)
                            return "Items." + error;
                    }
                }
                if (!$util.isInteger(message.SelectedID))
                    return "SelectedID: integer expected";
                return null;
            };

            /**
             * Creates a MessageStenosisList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisList} MessageStenosisList
             */
            MessageStenosisList.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisList)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisList();
                if (object.Items) {
                    if (!Array.isArray(object.Items))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisList.Items: array expected");
                    message.Items = [];
                    for (var i = 0; i < object.Items.length; ++i) {
                        if (typeof object.Items[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisList.Items: object expected");
                        message.Items[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisItem.fromObject(object.Items[i]);
                    }
                }
                if (object.SelectedID != null)
                    message.SelectedID = object.SelectedID | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisList} message MessageStenosisList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Items = [];
                if (options.defaults)
                    object.SelectedID = 0;
                if (message.Items && message.Items.length) {
                    object.Items = [];
                    for (var j = 0; j < message.Items.length; ++j)
                        object.Items[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisItem.toObject(message.Items[j], options);
                }
                if (message.SelectedID != null && message.hasOwnProperty("SelectedID"))
                    object.SelectedID = message.SelectedID;
                return object;
            };

            /**
             * Converts this MessageStenosisList to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisList;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkType = (function() {

            /**
             * Properties of a MessageStenosisMarkType.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkType
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType MessageStenosisMarkType MarkType
             */

            /**
             * Constructs a new MessageStenosisMarkType.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkType.
             * @implements IMessageStenosisMarkType
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkType=} [properties] Properties to set
             */
            function MessageStenosisMarkType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkType MarkType.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @instance
             */
            MessageStenosisMarkType.prototype.MarkType = 0;

            /**
             * Creates a new MessageStenosisMarkType instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkType=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType} MessageStenosisMarkType instance
             */
            MessageStenosisMarkType.create = function create(properties) {
                return new MessageStenosisMarkType(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkType message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkType} message MessageStenosisMarkType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkType.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MarkType);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkType message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkType} message MessageStenosisMarkType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkType.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkType message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType} MessageStenosisMarkType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkType.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.MarkType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("MarkType"))
                    throw $util.ProtocolError("missing required 'MarkType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkType message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType} MessageStenosisMarkType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkType.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkType message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkType.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.MarkType) {
                default:
                    return "MarkType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMarkType message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType} MessageStenosisMarkType
             */
            MessageStenosisMarkType.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType();
                switch (object.MarkType) {
                case "StenosisMarkType_Unknown":
                case 0:
                    message.MarkType = 0;
                    break;
                case "StenosisMarkType_Proximal":
                case 1:
                    message.MarkType = 1;
                    break;
                case "StenosisMarkType_Distal":
                case 2:
                    message.MarkType = 2;
                    break;
                case "StenosisMarkType_Nidus":
                case 3:
                    message.MarkType = 3;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkType message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType} message MessageStenosisMarkType
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkType.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.MarkType = options.enums === String ? "StenosisMarkType_Unknown" : 0;
                if (message.MarkType != null && message.hasOwnProperty("MarkType"))
                    object.MarkType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkType[message.MarkType] : message.MarkType;
                return object;
            };

            /**
             * Converts this MessageStenosisMarkType to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkType.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkType;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkTypes = (function() {

            /**
             * Properties of a MessageStenosisMarkTypes.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkTypes
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.StenosisMarkType>|null} [MarkTypes] MessageStenosisMarkTypes MarkTypes
             */

            /**
             * Constructs a new MessageStenosisMarkTypes.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkTypes.
             * @implements IMessageStenosisMarkTypes
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkTypes=} [properties] Properties to set
             */
            function MessageStenosisMarkTypes(properties) {
                this.MarkTypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkTypes MarkTypes.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.StenosisMarkType>} MarkTypes
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @instance
             */
            MessageStenosisMarkTypes.prototype.MarkTypes = $util.emptyArray;

            /**
             * Creates a new MessageStenosisMarkTypes instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkTypes=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes} MessageStenosisMarkTypes instance
             */
            MessageStenosisMarkTypes.create = function create(properties) {
                return new MessageStenosisMarkTypes(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkTypes message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkTypes} message MessageStenosisMarkTypes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkTypes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.MarkTypes != null && message.MarkTypes.length)
                    for (var i = 0; i < message.MarkTypes.length; ++i)
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MarkTypes[i]);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkTypes message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkTypes} message MessageStenosisMarkTypes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkTypes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkTypes message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes} MessageStenosisMarkTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkTypes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.MarkTypes && message.MarkTypes.length))
                            message.MarkTypes = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.MarkTypes.push(reader.int32());
                        } else
                            message.MarkTypes.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkTypes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes} MessageStenosisMarkTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkTypes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkTypes message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkTypes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.MarkTypes != null && message.hasOwnProperty("MarkTypes")) {
                    if (!Array.isArray(message.MarkTypes))
                        return "MarkTypes: array expected";
                    for (var i = 0; i < message.MarkTypes.length; ++i)
                        switch (message.MarkTypes[i]) {
                        default:
                            return "MarkTypes: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMarkTypes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes} MessageStenosisMarkTypes
             */
            MessageStenosisMarkTypes.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes();
                if (object.MarkTypes) {
                    if (!Array.isArray(object.MarkTypes))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes.MarkTypes: array expected");
                    message.MarkTypes = [];
                    for (var i = 0; i < object.MarkTypes.length; ++i)
                        switch (object.MarkTypes[i]) {
                        default:
                        case "StenosisMarkType_Unknown":
                        case 0:
                            message.MarkTypes[i] = 0;
                            break;
                        case "StenosisMarkType_Proximal":
                        case 1:
                            message.MarkTypes[i] = 1;
                            break;
                        case "StenosisMarkType_Distal":
                        case 2:
                            message.MarkTypes[i] = 2;
                            break;
                        case "StenosisMarkType_Nidus":
                        case 3:
                            message.MarkTypes[i] = 3;
                            break;
                        }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkTypes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes} message MessageStenosisMarkTypes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkTypes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.MarkTypes = [];
                if (message.MarkTypes && message.MarkTypes.length) {
                    object.MarkTypes = [];
                    for (var j = 0; j < message.MarkTypes.length; ++j)
                        object.MarkTypes[j] = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkType[message.MarkTypes[j]] : message.MarkTypes[j];
                }
                return object;
            };

            /**
             * Converts this MessageStenosisMarkTypes to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkTypes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkTypes;
        })();

        CTCardiacCommonProtocol.MessageStenosisMarkVisibility = (function() {

            /**
             * Properties of a MessageStenosisMarkVisibility.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMarkVisibility
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType MessageStenosisMarkVisibility MarkType
             * @property {boolean} IsVisible MessageStenosisMarkVisibility IsVisible
             */

            /**
             * Constructs a new MessageStenosisMarkVisibility.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMarkVisibility.
             * @implements IMessageStenosisMarkVisibility
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkVisibility=} [properties] Properties to set
             */
            function MessageStenosisMarkVisibility(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMarkVisibility MarkType.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @instance
             */
            MessageStenosisMarkVisibility.prototype.MarkType = 0;

            /**
             * MessageStenosisMarkVisibility IsVisible.
             * @member {boolean} IsVisible
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @instance
             */
            MessageStenosisMarkVisibility.prototype.IsVisible = false;

            /**
             * Creates a new MessageStenosisMarkVisibility instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkVisibility=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility} MessageStenosisMarkVisibility instance
             */
            MessageStenosisMarkVisibility.create = function create(properties) {
                return new MessageStenosisMarkVisibility(properties);
            };

            /**
             * Encodes the specified MessageStenosisMarkVisibility message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkVisibility} message MessageStenosisMarkVisibility message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkVisibility.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MarkType);
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsVisible);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMarkVisibility message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkVisibility} message MessageStenosisMarkVisibility message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMarkVisibility.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMarkVisibility message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility} MessageStenosisMarkVisibility
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkVisibility.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.MarkType = reader.int32();
                        break;
                    case 2:
                        message.IsVisible = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("MarkType"))
                    throw $util.ProtocolError("missing required 'MarkType'", { instance: message });
                if (!message.hasOwnProperty("IsVisible"))
                    throw $util.ProtocolError("missing required 'IsVisible'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisMarkVisibility message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility} MessageStenosisMarkVisibility
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMarkVisibility.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMarkVisibility message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMarkVisibility.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.MarkType) {
                default:
                    return "MarkType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (typeof message.IsVisible !== "boolean")
                    return "IsVisible: boolean expected";
                return null;
            };

            /**
             * Creates a MessageStenosisMarkVisibility message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility} MessageStenosisMarkVisibility
             */
            MessageStenosisMarkVisibility.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility();
                switch (object.MarkType) {
                case "StenosisMarkType_Unknown":
                case 0:
                    message.MarkType = 0;
                    break;
                case "StenosisMarkType_Proximal":
                case 1:
                    message.MarkType = 1;
                    break;
                case "StenosisMarkType_Distal":
                case 2:
                    message.MarkType = 2;
                    break;
                case "StenosisMarkType_Nidus":
                case 3:
                    message.MarkType = 3;
                    break;
                }
                if (object.IsVisible != null)
                    message.IsVisible = Boolean(object.IsVisible);
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMarkVisibility message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility} message MessageStenosisMarkVisibility
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMarkVisibility.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.MarkType = options.enums === String ? "StenosisMarkType_Unknown" : 0;
                    object.IsVisible = false;
                }
                if (message.MarkType != null && message.hasOwnProperty("MarkType"))
                    object.MarkType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkType[message.MarkType] : message.MarkType;
                if (message.IsVisible != null && message.hasOwnProperty("IsVisible"))
                    object.IsVisible = message.IsVisible;
                return object;
            };

            /**
             * Converts this MessageStenosisMarkVisibility to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMarkVisibility.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMarkVisibility;
        })();

        CTCardiacCommonProtocol.MessageStenosisStatisticsType = (function() {

            /**
             * Properties of a MessageStenosisStatisticsType.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisStatisticsType
             * @property {Mcsf.CTCardiacCommonProtocol.StatisticsType} Type MessageStenosisStatisticsType Type
             */

            /**
             * Constructs a new MessageStenosisStatisticsType.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisStatisticsType.
             * @implements IMessageStenosisStatisticsType
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsType=} [properties] Properties to set
             */
            function MessageStenosisStatisticsType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisStatisticsType Type.
             * @member {Mcsf.CTCardiacCommonProtocol.StatisticsType} Type
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @instance
             */
            MessageStenosisStatisticsType.prototype.Type = 1;

            /**
             * Creates a new MessageStenosisStatisticsType instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsType=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType} MessageStenosisStatisticsType instance
             */
            MessageStenosisStatisticsType.create = function create(properties) {
                return new MessageStenosisStatisticsType(properties);
            };

            /**
             * Encodes the specified MessageStenosisStatisticsType message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsType} message MessageStenosisStatisticsType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsType.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisStatisticsType message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsType} message MessageStenosisStatisticsType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsType.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisStatisticsType message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType} MessageStenosisStatisticsType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsType.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("Type"))
                    throw $util.ProtocolError("missing required 'Type'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisStatisticsType message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType} MessageStenosisStatisticsType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsType.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisStatisticsType message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisStatisticsType.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
                return null;
            };

            /**
             * Creates a MessageStenosisStatisticsType message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType} MessageStenosisStatisticsType
             */
            MessageStenosisStatisticsType.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType();
                switch (object.Type) {
                case "StatisticsType_Area":
                case 1:
                    message.Type = 1;
                    break;
                case "StatisticsType_MinDiameter":
                case 2:
                    message.Type = 2;
                    break;
                case "StatisticsType_MaxDiameter":
                case 3:
                    message.Type = 3;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisStatisticsType message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType} message MessageStenosisStatisticsType
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisStatisticsType.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Type = options.enums === String ? "StatisticsType_Area" : 1;
                if (message.Type != null && message.hasOwnProperty("Type"))
                    object.Type = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StatisticsType[message.Type] : message.Type;
                return object;
            };

            /**
             * Converts this MessageStenosisStatisticsType to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisStatisticsType.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisStatisticsType;
        })();

        CTCardiacCommonProtocol.MessageStenosisStatisticsCurve = (function() {

            /**
             * Properties of a MessageStenosisStatisticsCurve.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisStatisticsCurve
             * @property {Mcsf.CTCardiacCommonProtocol.StatisticsType} Type MessageStenosisStatisticsCurve Type
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} CurvePoints MessageStenosisStatisticsCurve CurvePoints
             */

            /**
             * Constructs a new MessageStenosisStatisticsCurve.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisStatisticsCurve.
             * @implements IMessageStenosisStatisticsCurve
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCurve=} [properties] Properties to set
             */
            function MessageStenosisStatisticsCurve(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisStatisticsCurve Type.
             * @member {Mcsf.CTCardiacCommonProtocol.StatisticsType} Type
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @instance
             */
            MessageStenosisStatisticsCurve.prototype.Type = 1;

            /**
             * MessageStenosisStatisticsCurve CurvePoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} CurvePoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @instance
             */
            MessageStenosisStatisticsCurve.prototype.CurvePoints = null;

            /**
             * Creates a new MessageStenosisStatisticsCurve instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCurve=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve} MessageStenosisStatisticsCurve instance
             */
            MessageStenosisStatisticsCurve.create = function create(properties) {
                return new MessageStenosisStatisticsCurve(properties);
            };

            /**
             * Encodes the specified MessageStenosisStatisticsCurve message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCurve} message MessageStenosisStatisticsCurve message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsCurve.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.CurvePoints, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisStatisticsCurve message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCurve} message MessageStenosisStatisticsCurve message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsCurve.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisStatisticsCurve message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve} MessageStenosisStatisticsCurve
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsCurve.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Type = reader.int32();
                        break;
                    case 2:
                        message.CurvePoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("Type"))
                    throw $util.ProtocolError("missing required 'Type'", { instance: message });
                if (!message.hasOwnProperty("CurvePoints"))
                    throw $util.ProtocolError("missing required 'CurvePoints'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisStatisticsCurve message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve} MessageStenosisStatisticsCurve
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsCurve.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisStatisticsCurve message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisStatisticsCurve.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.CurvePoints);
                    if (error)
                        return "CurvePoints." + error;
                }
                return null;
            };

            /**
             * Creates a MessageStenosisStatisticsCurve message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve} MessageStenosisStatisticsCurve
             */
            MessageStenosisStatisticsCurve.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve();
                switch (object.Type) {
                case "StatisticsType_Area":
                case 1:
                    message.Type = 1;
                    break;
                case "StatisticsType_MinDiameter":
                case 2:
                    message.Type = 2;
                    break;
                case "StatisticsType_MaxDiameter":
                case 3:
                    message.Type = 3;
                    break;
                }
                if (object.CurvePoints != null) {
                    if (typeof object.CurvePoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve.CurvePoints: object expected");
                    message.CurvePoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.CurvePoints);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisStatisticsCurve message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve} message MessageStenosisStatisticsCurve
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisStatisticsCurve.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Type = options.enums === String ? "StatisticsType_Area" : 1;
                    object.CurvePoints = null;
                }
                if (message.Type != null && message.hasOwnProperty("Type"))
                    object.Type = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StatisticsType[message.Type] : message.Type;
                if (message.CurvePoints != null && message.hasOwnProperty("CurvePoints"))
                    object.CurvePoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.CurvePoints, options);
                return object;
            };

            /**
             * Converts this MessageStenosisStatisticsCurve to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisStatisticsCurve.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisStatisticsCurve;
        })();

        CTCardiacCommonProtocol.MessageStenosisStatisticsCell = (function() {

            /**
             * Properties of a MessageStenosisStatisticsCell.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisStatisticsCell
             * @property {Mcsf.CTCardiacCommonProtocol.StatisticsType} Type MessageStenosisStatisticsCell Type
             * @property {number} Value MessageStenosisStatisticsCell Value
             */

            /**
             * Constructs a new MessageStenosisStatisticsCell.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisStatisticsCell.
             * @implements IMessageStenosisStatisticsCell
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell=} [properties] Properties to set
             */
            function MessageStenosisStatisticsCell(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisStatisticsCell Type.
             * @member {Mcsf.CTCardiacCommonProtocol.StatisticsType} Type
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @instance
             */
            MessageStenosisStatisticsCell.prototype.Type = 1;

            /**
             * MessageStenosisStatisticsCell Value.
             * @member {number} Value
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @instance
             */
            MessageStenosisStatisticsCell.prototype.Value = 0;

            /**
             * Creates a new MessageStenosisStatisticsCell instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell} MessageStenosisStatisticsCell instance
             */
            MessageStenosisStatisticsCell.create = function create(properties) {
                return new MessageStenosisStatisticsCell(properties);
            };

            /**
             * Encodes the specified MessageStenosisStatisticsCell message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell} message MessageStenosisStatisticsCell message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsCell.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.Value);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisStatisticsCell message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell} message MessageStenosisStatisticsCell message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsCell.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisStatisticsCell message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell} MessageStenosisStatisticsCell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsCell.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Type = reader.int32();
                        break;
                    case 2:
                        message.Value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("Type"))
                    throw $util.ProtocolError("missing required 'Type'", { instance: message });
                if (!message.hasOwnProperty("Value"))
                    throw $util.ProtocolError("missing required 'Value'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisStatisticsCell message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell} MessageStenosisStatisticsCell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsCell.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisStatisticsCell message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisStatisticsCell.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (typeof message.Value !== "number")
                    return "Value: number expected";
                return null;
            };

            /**
             * Creates a MessageStenosisStatisticsCell message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell} MessageStenosisStatisticsCell
             */
            MessageStenosisStatisticsCell.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell();
                switch (object.Type) {
                case "StatisticsType_Area":
                case 1:
                    message.Type = 1;
                    break;
                case "StatisticsType_MinDiameter":
                case 2:
                    message.Type = 2;
                    break;
                case "StatisticsType_MaxDiameter":
                case 3:
                    message.Type = 3;
                    break;
                }
                if (object.Value != null)
                    message.Value = Number(object.Value);
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisStatisticsCell message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell} message MessageStenosisStatisticsCell
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisStatisticsCell.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Type = options.enums === String ? "StatisticsType_Area" : 1;
                    object.Value = 0;
                }
                if (message.Type != null && message.hasOwnProperty("Type"))
                    object.Type = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StatisticsType[message.Type] : message.Type;
                if (message.Value != null && message.hasOwnProperty("Value"))
                    object.Value = options.json && !isFinite(message.Value) ? String(message.Value) : message.Value;
                return object;
            };

            /**
             * Converts this MessageStenosisStatisticsCell to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisStatisticsCell.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisStatisticsCell;
        })();

        CTCardiacCommonProtocol.MessageStenosisStatisticsColumn = (function() {

            /**
             * Properties of a MessageStenosisStatisticsColumn.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisStatisticsColumn
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType MessageStenosisStatisticsColumn MarkType
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell>|null} [Cells] MessageStenosisStatisticsColumn Cells
             */

            /**
             * Constructs a new MessageStenosisStatisticsColumn.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisStatisticsColumn.
             * @implements IMessageStenosisStatisticsColumn
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn=} [properties] Properties to set
             */
            function MessageStenosisStatisticsColumn(properties) {
                this.Cells = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisStatisticsColumn MarkType.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} MarkType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @instance
             */
            MessageStenosisStatisticsColumn.prototype.MarkType = 0;

            /**
             * MessageStenosisStatisticsColumn Cells.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell>} Cells
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @instance
             */
            MessageStenosisStatisticsColumn.prototype.Cells = $util.emptyArray;

            /**
             * Creates a new MessageStenosisStatisticsColumn instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn} MessageStenosisStatisticsColumn instance
             */
            MessageStenosisStatisticsColumn.create = function create(properties) {
                return new MessageStenosisStatisticsColumn(properties);
            };

            /**
             * Encodes the specified MessageStenosisStatisticsColumn message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn} message MessageStenosisStatisticsColumn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsColumn.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MarkType);
                if (message.Cells != null && message.Cells.length)
                    for (var i = 0; i < message.Cells.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell.encode(message.Cells[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisStatisticsColumn message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn} message MessageStenosisStatisticsColumn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsColumn.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisStatisticsColumn message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn} MessageStenosisStatisticsColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsColumn.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.MarkType = reader.int32();
                        break;
                    case 2:
                        if (!(message.Cells && message.Cells.length))
                            message.Cells = [];
                        message.Cells.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("MarkType"))
                    throw $util.ProtocolError("missing required 'MarkType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisStatisticsColumn message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn} MessageStenosisStatisticsColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsColumn.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisStatisticsColumn message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisStatisticsColumn.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.MarkType) {
                default:
                    return "MarkType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (message.Cells != null && message.hasOwnProperty("Cells")) {
                    if (!Array.isArray(message.Cells))
                        return "Cells: array expected";
                    for (var i = 0; i < message.Cells.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell.verify(message.Cells[i]);
                        if (error)
                            return "Cells." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageStenosisStatisticsColumn message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn} MessageStenosisStatisticsColumn
             */
            MessageStenosisStatisticsColumn.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn();
                switch (object.MarkType) {
                case "StenosisMarkType_Unknown":
                case 0:
                    message.MarkType = 0;
                    break;
                case "StenosisMarkType_Proximal":
                case 1:
                    message.MarkType = 1;
                    break;
                case "StenosisMarkType_Distal":
                case 2:
                    message.MarkType = 2;
                    break;
                case "StenosisMarkType_Nidus":
                case 3:
                    message.MarkType = 3;
                    break;
                }
                if (object.Cells) {
                    if (!Array.isArray(object.Cells))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.Cells: array expected");
                    message.Cells = [];
                    for (var i = 0; i < object.Cells.length; ++i) {
                        if (typeof object.Cells[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.Cells: object expected");
                        message.Cells[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell.fromObject(object.Cells[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisStatisticsColumn message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn} message MessageStenosisStatisticsColumn
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisStatisticsColumn.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Cells = [];
                if (options.defaults)
                    object.MarkType = options.enums === String ? "StenosisMarkType_Unknown" : 0;
                if (message.MarkType != null && message.hasOwnProperty("MarkType"))
                    object.MarkType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkType[message.MarkType] : message.MarkType;
                if (message.Cells && message.Cells.length) {
                    object.Cells = [];
                    for (var j = 0; j < message.Cells.length; ++j)
                        object.Cells[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell.toObject(message.Cells[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageStenosisStatisticsColumn to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisStatisticsColumn.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisStatisticsColumn;
        })();

        CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable = (function() {

            /**
             * Properties of a MessageStenosisStatisticsSubTable.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisStatisticsSubTable
             * @property {string} Name MessageStenosisStatisticsSubTable Name
             * @property {number} ID MessageStenosisStatisticsSubTable ID
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn>|null} [Columns] MessageStenosisStatisticsSubTable Columns
             */

            /**
             * Constructs a new MessageStenosisStatisticsSubTable.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisStatisticsSubTable.
             * @implements IMessageStenosisStatisticsSubTable
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable=} [properties] Properties to set
             */
            function MessageStenosisStatisticsSubTable(properties) {
                this.Columns = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisStatisticsSubTable Name.
             * @member {string} Name
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @instance
             */
            MessageStenosisStatisticsSubTable.prototype.Name = "";

            /**
             * MessageStenosisStatisticsSubTable ID.
             * @member {number} ID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @instance
             */
            MessageStenosisStatisticsSubTable.prototype.ID = 0;

            /**
             * MessageStenosisStatisticsSubTable Columns.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn>} Columns
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @instance
             */
            MessageStenosisStatisticsSubTable.prototype.Columns = $util.emptyArray;

            /**
             * Creates a new MessageStenosisStatisticsSubTable instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable} MessageStenosisStatisticsSubTable instance
             */
            MessageStenosisStatisticsSubTable.create = function create(properties) {
                return new MessageStenosisStatisticsSubTable(properties);
            };

            /**
             * Encodes the specified MessageStenosisStatisticsSubTable message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable} message MessageStenosisStatisticsSubTable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsSubTable.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ID);
                if (message.Columns != null && message.Columns.length)
                    for (var i = 0; i < message.Columns.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.encode(message.Columns[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisStatisticsSubTable message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable} message MessageStenosisStatisticsSubTable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsSubTable.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisStatisticsSubTable message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable} MessageStenosisStatisticsSubTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsSubTable.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Name = reader.string();
                        break;
                    case 2:
                        message.ID = reader.int32();
                        break;
                    case 3:
                        if (!(message.Columns && message.Columns.length))
                            message.Columns = [];
                        message.Columns.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("Name"))
                    throw $util.ProtocolError("missing required 'Name'", { instance: message });
                if (!message.hasOwnProperty("ID"))
                    throw $util.ProtocolError("missing required 'ID'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisStatisticsSubTable message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable} MessageStenosisStatisticsSubTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsSubTable.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisStatisticsSubTable message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisStatisticsSubTable.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.Name))
                    return "Name: string expected";
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
                if (message.Columns != null && message.hasOwnProperty("Columns")) {
                    if (!Array.isArray(message.Columns))
                        return "Columns: array expected";
                    for (var i = 0; i < message.Columns.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.verify(message.Columns[i]);
                        if (error)
                            return "Columns." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageStenosisStatisticsSubTable message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable} MessageStenosisStatisticsSubTable
             */
            MessageStenosisStatisticsSubTable.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable();
                if (object.Name != null)
                    message.Name = String(object.Name);
                if (object.ID != null)
                    message.ID = object.ID | 0;
                if (object.Columns) {
                    if (!Array.isArray(object.Columns))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.Columns: array expected");
                    message.Columns = [];
                    for (var i = 0; i < object.Columns.length; ++i) {
                        if (typeof object.Columns[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.Columns: object expected");
                        message.Columns[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.fromObject(object.Columns[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisStatisticsSubTable message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable} message MessageStenosisStatisticsSubTable
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisStatisticsSubTable.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Columns = [];
                if (options.defaults) {
                    object.Name = "";
                    object.ID = 0;
                }
                if (message.Name != null && message.hasOwnProperty("Name"))
                    object.Name = message.Name;
                if (message.ID != null && message.hasOwnProperty("ID"))
                    object.ID = message.ID;
                if (message.Columns && message.Columns.length) {
                    object.Columns = [];
                    for (var j = 0; j < message.Columns.length; ++j)
                        object.Columns[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.toObject(message.Columns[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageStenosisStatisticsSubTable to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisStatisticsSubTable.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisStatisticsSubTable;
        })();

        CTCardiacCommonProtocol.MessageStenosisStatisticsTable = (function() {

            /**
             * Properties of a MessageStenosisStatisticsTable.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisStatisticsTable
             * @property {string} SelectedName MessageStenosisStatisticsTable SelectedName
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable>|null} [SubTables] MessageStenosisStatisticsTable SubTables
             */

            /**
             * Constructs a new MessageStenosisStatisticsTable.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisStatisticsTable.
             * @implements IMessageStenosisStatisticsTable
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsTable=} [properties] Properties to set
             */
            function MessageStenosisStatisticsTable(properties) {
                this.SubTables = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisStatisticsTable SelectedName.
             * @member {string} SelectedName
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @instance
             */
            MessageStenosisStatisticsTable.prototype.SelectedName = "";

            /**
             * MessageStenosisStatisticsTable SubTables.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable>} SubTables
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @instance
             */
            MessageStenosisStatisticsTable.prototype.SubTables = $util.emptyArray;

            /**
             * Creates a new MessageStenosisStatisticsTable instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsTable=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable} MessageStenosisStatisticsTable instance
             */
            MessageStenosisStatisticsTable.create = function create(properties) {
                return new MessageStenosisStatisticsTable(properties);
            };

            /**
             * Encodes the specified MessageStenosisStatisticsTable message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsTable} message MessageStenosisStatisticsTable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsTable.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.SelectedName);
                if (message.SubTables != null && message.SubTables.length)
                    for (var i = 0; i < message.SubTables.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.encode(message.SubTables[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisStatisticsTable message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsTable} message MessageStenosisStatisticsTable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisStatisticsTable.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisStatisticsTable message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable} MessageStenosisStatisticsTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsTable.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.SelectedName = reader.string();
                        break;
                    case 2:
                        if (!(message.SubTables && message.SubTables.length))
                            message.SubTables = [];
                        message.SubTables.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("SelectedName"))
                    throw $util.ProtocolError("missing required 'SelectedName'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisStatisticsTable message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable} MessageStenosisStatisticsTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisStatisticsTable.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisStatisticsTable message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisStatisticsTable.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.SelectedName))
                    return "SelectedName: string expected";
                if (message.SubTables != null && message.hasOwnProperty("SubTables")) {
                    if (!Array.isArray(message.SubTables))
                        return "SubTables: array expected";
                    for (var i = 0; i < message.SubTables.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.verify(message.SubTables[i]);
                        if (error)
                            return "SubTables." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageStenosisStatisticsTable message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable} MessageStenosisStatisticsTable
             */
            MessageStenosisStatisticsTable.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable();
                if (object.SelectedName != null)
                    message.SelectedName = String(object.SelectedName);
                if (object.SubTables) {
                    if (!Array.isArray(object.SubTables))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable.SubTables: array expected");
                    message.SubTables = [];
                    for (var i = 0; i < object.SubTables.length; ++i) {
                        if (typeof object.SubTables[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable.SubTables: object expected");
                        message.SubTables[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.fromObject(object.SubTables[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisStatisticsTable message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable} message MessageStenosisStatisticsTable
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisStatisticsTable.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.SubTables = [];
                if (options.defaults)
                    object.SelectedName = "";
                if (message.SelectedName != null && message.hasOwnProperty("SelectedName"))
                    object.SelectedName = message.SelectedName;
                if (message.SubTables && message.SubTables.length) {
                    object.SubTables = [];
                    for (var j = 0; j < message.SubTables.length; ++j)
                        object.SubTables[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.toObject(message.SubTables[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageStenosisStatisticsTable to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisStatisticsTable.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisStatisticsTable;
        })();

        CTCardiacCommonProtocol.MsgEraser = (function() {

            /**
             * Properties of a MsgEraser.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMsgEraser
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D>|null} [points] MsgEraser points
             * @property {boolean|null} [isRemove] MsgEraser isRemove
             */

            /**
             * Constructs a new MsgEraser.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MsgEraser.
             * @implements IMsgEraser
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgEraser=} [properties] Properties to set
             */
            function MsgEraser(properties) {
                this.points = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MsgEraser points.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D>} points
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @instance
             */
            MsgEraser.prototype.points = $util.emptyArray;

            /**
             * MsgEraser isRemove.
             * @member {boolean} isRemove
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @instance
             */
            MsgEraser.prototype.isRemove = false;

            /**
             * Creates a new MsgEraser instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgEraser=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgEraser} MsgEraser instance
             */
            MsgEraser.create = function create(properties) {
                return new MsgEraser(properties);
            };

            /**
             * Encodes the specified MsgEraser message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgEraser.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgEraser} message MsgEraser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgEraser.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.points != null && message.points.length)
                    for (var i = 0; i < message.points.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.encode(message.points[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.isRemove != null && Object.hasOwnProperty.call(message, "isRemove"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isRemove);
                return writer;
            };

            /**
             * Encodes the specified MsgEraser message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgEraser.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgEraser} message MsgEraser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgEraser.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MsgEraser message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgEraser} MsgEraser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgEraser.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MsgEraser();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.points && message.points.length))
                            message.points = [];
                        message.points.push($root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.isRemove = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MsgEraser message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgEraser} MsgEraser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgEraser.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MsgEraser message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MsgEraser.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.points != null && message.hasOwnProperty("points")) {
                    if (!Array.isArray(message.points))
                        return "points: array expected";
                    for (var i = 0; i < message.points.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify(message.points[i]);
                        if (error)
                            return "points." + error;
                    }
                }
                if (message.isRemove != null && message.hasOwnProperty("isRemove"))
                    if (typeof message.isRemove !== "boolean")
                        return "isRemove: boolean expected";
                return null;
            };

            /**
             * Creates a MsgEraser message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgEraser} MsgEraser
             */
            MsgEraser.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MsgEraser)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MsgEraser();
                if (object.points) {
                    if (!Array.isArray(object.points))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MsgEraser.points: array expected");
                    message.points = [];
                    for (var i = 0; i < object.points.length; ++i) {
                        if (typeof object.points[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MsgEraser.points: object expected");
                        message.points[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.fromObject(object.points[i]);
                    }
                }
                if (object.isRemove != null)
                    message.isRemove = Boolean(object.isRemove);
                return message;
            };

            /**
             * Creates a plain object from a MsgEraser message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MsgEraser} message MsgEraser
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MsgEraser.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.points = [];
                if (options.defaults)
                    object.isRemove = false;
                if (message.points && message.points.length) {
                    object.points = [];
                    for (var j = 0; j < message.points.length; ++j)
                        object.points[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.toObject(message.points[j], options);
                }
                if (message.isRemove != null && message.hasOwnProperty("isRemove"))
                    object.isRemove = message.isRemove;
                return object;
            };

            /**
             * Converts this MsgEraser to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgEraser
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MsgEraser.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MsgEraser;
        })();

        CTCardiacCommonProtocol.MessagePhaseItem = (function() {

            /**
             * Properties of a MessagePhaseItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessagePhaseItem
             * @property {number} ID MessagePhaseItem ID
             * @property {string} Phase MessagePhaseItem Phase
             * @property {string} SeriesNumber MessagePhaseItem SeriesNumber
             * @property {string} VolumeUID MessagePhaseItem VolumeUID
             * @property {number} ImageWidth MessagePhaseItem ImageWidth
             * @property {number} ImageHeight MessagePhaseItem ImageHeight
             * @property {number} Thickness MessagePhaseItem Thickness
             * @property {boolean} IsAutoProcessed MessagePhaseItem IsAutoProcessed
             * @property {boolean} IsChamberSegmentSucceed MessagePhaseItem IsChamberSegmentSucceed
             * @property {boolean} IsAutoExtractCenterLineSucceed MessagePhaseItem IsAutoExtractCenterLineSucceed
             */

            /**
             * Constructs a new MessagePhaseItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessagePhaseItem.
             * @implements IMessagePhaseItem
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem=} [properties] Properties to set
             */
            function MessagePhaseItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessagePhaseItem ID.
             * @member {number} ID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.ID = 0;

            /**
             * MessagePhaseItem Phase.
             * @member {string} Phase
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.Phase = "";

            /**
             * MessagePhaseItem SeriesNumber.
             * @member {string} SeriesNumber
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.SeriesNumber = "";

            /**
             * MessagePhaseItem VolumeUID.
             * @member {string} VolumeUID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.VolumeUID = "";

            /**
             * MessagePhaseItem ImageWidth.
             * @member {number} ImageWidth
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.ImageWidth = 0;

            /**
             * MessagePhaseItem ImageHeight.
             * @member {number} ImageHeight
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.ImageHeight = 0;

            /**
             * MessagePhaseItem Thickness.
             * @member {number} Thickness
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.Thickness = 0;

            /**
             * MessagePhaseItem IsAutoProcessed.
             * @member {boolean} IsAutoProcessed
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.IsAutoProcessed = false;

            /**
             * MessagePhaseItem IsChamberSegmentSucceed.
             * @member {boolean} IsChamberSegmentSucceed
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.IsChamberSegmentSucceed = false;

            /**
             * MessagePhaseItem IsAutoExtractCenterLineSucceed.
             * @member {boolean} IsAutoExtractCenterLineSucceed
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             */
            MessagePhaseItem.prototype.IsAutoExtractCenterLineSucceed = false;

            /**
             * Creates a new MessagePhaseItem instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePhaseItem} MessagePhaseItem instance
             */
            MessagePhaseItem.create = function create(properties) {
                return new MessagePhaseItem(properties);
            };

            /**
             * Encodes the specified MessagePhaseItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePhaseItem.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem} message MessagePhaseItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePhaseItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Phase);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.SeriesNumber);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.VolumeUID);
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ImageWidth);
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ImageHeight);
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.Thickness);
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.IsAutoProcessed);
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.IsChamberSegmentSucceed);
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.IsAutoExtractCenterLineSucceed);
                return writer;
            };

            /**
             * Encodes the specified MessagePhaseItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePhaseItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem} message MessagePhaseItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePhaseItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessagePhaseItem message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePhaseItem} MessagePhaseItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePhaseItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ID = reader.int32();
                        break;
                    case 2:
                        message.Phase = reader.string();
                        break;
                    case 3:
                        message.SeriesNumber = reader.string();
                        break;
                    case 4:
                        message.VolumeUID = reader.string();
                        break;
                    case 5:
                        message.ImageWidth = reader.int32();
                        break;
                    case 6:
                        message.ImageHeight = reader.int32();
                        break;
                    case 7:
                        message.Thickness = reader.double();
                        break;
                    case 8:
                        message.IsAutoProcessed = reader.bool();
                        break;
                    case 9:
                        message.IsChamberSegmentSucceed = reader.bool();
                        break;
                    case 10:
                        message.IsAutoExtractCenterLineSucceed = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ID"))
                    throw $util.ProtocolError("missing required 'ID'", { instance: message });
                if (!message.hasOwnProperty("Phase"))
                    throw $util.ProtocolError("missing required 'Phase'", { instance: message });
                if (!message.hasOwnProperty("SeriesNumber"))
                    throw $util.ProtocolError("missing required 'SeriesNumber'", { instance: message });
                if (!message.hasOwnProperty("VolumeUID"))
                    throw $util.ProtocolError("missing required 'VolumeUID'", { instance: message });
                if (!message.hasOwnProperty("ImageWidth"))
                    throw $util.ProtocolError("missing required 'ImageWidth'", { instance: message });
                if (!message.hasOwnProperty("ImageHeight"))
                    throw $util.ProtocolError("missing required 'ImageHeight'", { instance: message });
                if (!message.hasOwnProperty("Thickness"))
                    throw $util.ProtocolError("missing required 'Thickness'", { instance: message });
                if (!message.hasOwnProperty("IsAutoProcessed"))
                    throw $util.ProtocolError("missing required 'IsAutoProcessed'", { instance: message });
                if (!message.hasOwnProperty("IsChamberSegmentSucceed"))
                    throw $util.ProtocolError("missing required 'IsChamberSegmentSucceed'", { instance: message });
                if (!message.hasOwnProperty("IsAutoExtractCenterLineSucceed"))
                    throw $util.ProtocolError("missing required 'IsAutoExtractCenterLineSucceed'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessagePhaseItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePhaseItem} MessagePhaseItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePhaseItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessagePhaseItem message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessagePhaseItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
                if (!$util.isString(message.Phase))
                    return "Phase: string expected";
                if (!$util.isString(message.SeriesNumber))
                    return "SeriesNumber: string expected";
                if (!$util.isString(message.VolumeUID))
                    return "VolumeUID: string expected";
                if (!$util.isInteger(message.ImageWidth))
                    return "ImageWidth: integer expected";
                if (!$util.isInteger(message.ImageHeight))
                    return "ImageHeight: integer expected";
                if (typeof message.Thickness !== "number")
                    return "Thickness: number expected";
                if (typeof message.IsAutoProcessed !== "boolean")
                    return "IsAutoProcessed: boolean expected";
                if (typeof message.IsChamberSegmentSucceed !== "boolean")
                    return "IsChamberSegmentSucceed: boolean expected";
                if (typeof message.IsAutoExtractCenterLineSucceed !== "boolean")
                    return "IsAutoExtractCenterLineSucceed: boolean expected";
                return null;
            };

            /**
             * Creates a MessagePhaseItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePhaseItem} MessagePhaseItem
             */
            MessagePhaseItem.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseItem)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseItem();
                if (object.ID != null)
                    message.ID = object.ID | 0;
                if (object.Phase != null)
                    message.Phase = String(object.Phase);
                if (object.SeriesNumber != null)
                    message.SeriesNumber = String(object.SeriesNumber);
                if (object.VolumeUID != null)
                    message.VolumeUID = String(object.VolumeUID);
                if (object.ImageWidth != null)
                    message.ImageWidth = object.ImageWidth | 0;
                if (object.ImageHeight != null)
                    message.ImageHeight = object.ImageHeight | 0;
                if (object.Thickness != null)
                    message.Thickness = Number(object.Thickness);
                if (object.IsAutoProcessed != null)
                    message.IsAutoProcessed = Boolean(object.IsAutoProcessed);
                if (object.IsChamberSegmentSucceed != null)
                    message.IsChamberSegmentSucceed = Boolean(object.IsChamberSegmentSucceed);
                if (object.IsAutoExtractCenterLineSucceed != null)
                    message.IsAutoExtractCenterLineSucceed = Boolean(object.IsAutoExtractCenterLineSucceed);
                return message;
            };

            /**
             * Creates a plain object from a MessagePhaseItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessagePhaseItem} message MessagePhaseItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessagePhaseItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ID = 0;
                    object.Phase = "";
                    object.SeriesNumber = "";
                    object.VolumeUID = "";
                    object.ImageWidth = 0;
                    object.ImageHeight = 0;
                    object.Thickness = 0;
                    object.IsAutoProcessed = false;
                    object.IsChamberSegmentSucceed = false;
                    object.IsAutoExtractCenterLineSucceed = false;
                }
                if (message.ID != null && message.hasOwnProperty("ID"))
                    object.ID = message.ID;
                if (message.Phase != null && message.hasOwnProperty("Phase"))
                    object.Phase = message.Phase;
                if (message.SeriesNumber != null && message.hasOwnProperty("SeriesNumber"))
                    object.SeriesNumber = message.SeriesNumber;
                if (message.VolumeUID != null && message.hasOwnProperty("VolumeUID"))
                    object.VolumeUID = message.VolumeUID;
                if (message.ImageWidth != null && message.hasOwnProperty("ImageWidth"))
                    object.ImageWidth = message.ImageWidth;
                if (message.ImageHeight != null && message.hasOwnProperty("ImageHeight"))
                    object.ImageHeight = message.ImageHeight;
                if (message.Thickness != null && message.hasOwnProperty("Thickness"))
                    object.Thickness = options.json && !isFinite(message.Thickness) ? String(message.Thickness) : message.Thickness;
                if (message.IsAutoProcessed != null && message.hasOwnProperty("IsAutoProcessed"))
                    object.IsAutoProcessed = message.IsAutoProcessed;
                if (message.IsChamberSegmentSucceed != null && message.hasOwnProperty("IsChamberSegmentSucceed"))
                    object.IsChamberSegmentSucceed = message.IsChamberSegmentSucceed;
                if (message.IsAutoExtractCenterLineSucceed != null && message.hasOwnProperty("IsAutoExtractCenterLineSucceed"))
                    object.IsAutoExtractCenterLineSucceed = message.IsAutoExtractCenterLineSucceed;
                return object;
            };

            /**
             * Converts this MessagePhaseItem to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessagePhaseItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessagePhaseItem;
        })();

        CTCardiacCommonProtocol.MessagePhaseList = (function() {

            /**
             * Properties of a MessagePhaseList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessagePhaseList
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem>|null} [item] MessagePhaseList item
             * @property {number} selectedID MessagePhaseList selectedID
             */

            /**
             * Constructs a new MessagePhaseList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessagePhaseList.
             * @implements IMessagePhaseList
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePhaseList=} [properties] Properties to set
             */
            function MessagePhaseList(properties) {
                this.item = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessagePhaseList item.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem>} item
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @instance
             */
            MessagePhaseList.prototype.item = $util.emptyArray;

            /**
             * MessagePhaseList selectedID.
             * @member {number} selectedID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @instance
             */
            MessagePhaseList.prototype.selectedID = 0;

            /**
             * Creates a new MessagePhaseList instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePhaseList=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePhaseList} MessagePhaseList instance
             */
            MessagePhaseList.create = function create(properties) {
                return new MessagePhaseList(properties);
            };

            /**
             * Encodes the specified MessagePhaseList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePhaseList.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePhaseList} message MessagePhaseList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePhaseList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.item != null && message.item.length)
                    for (var i = 0; i < message.item.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseItem.encode(message.item[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.selectedID);
                return writer;
            };

            /**
             * Encodes the specified MessagePhaseList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePhaseList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePhaseList} message MessagePhaseList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePhaseList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessagePhaseList message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePhaseList} MessagePhaseList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePhaseList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.item && message.item.length))
                            message.item = [];
                        message.item.push($root.Mcsf.CTCardiacCommonProtocol.MessagePhaseItem.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.selectedID = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("selectedID"))
                    throw $util.ProtocolError("missing required 'selectedID'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessagePhaseList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePhaseList} MessagePhaseList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePhaseList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessagePhaseList message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessagePhaseList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.item != null && message.hasOwnProperty("item")) {
                    if (!Array.isArray(message.item))
                        return "item: array expected";
                    for (var i = 0; i < message.item.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseItem.verify(message.item[i]);
                        if (error)
                            return "item." + error;
                    }
                }
                if (!$util.isInteger(message.selectedID))
                    return "selectedID: integer expected";
                return null;
            };

            /**
             * Creates a MessagePhaseList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePhaseList} MessagePhaseList
             */
            MessagePhaseList.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseList)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseList();
                if (object.item) {
                    if (!Array.isArray(object.item))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessagePhaseList.item: array expected");
                    message.item = [];
                    for (var i = 0; i < object.item.length; ++i) {
                        if (typeof object.item[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessagePhaseList.item: object expected");
                        message.item[i] = $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseItem.fromObject(object.item[i]);
                    }
                }
                if (object.selectedID != null)
                    message.selectedID = object.selectedID | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessagePhaseList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessagePhaseList} message MessagePhaseList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessagePhaseList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.item = [];
                if (options.defaults)
                    object.selectedID = 0;
                if (message.item && message.item.length) {
                    object.item = [];
                    for (var j = 0; j < message.item.length; ++j)
                        object.item[j] = $root.Mcsf.CTCardiacCommonProtocol.MessagePhaseItem.toObject(message.item[j], options);
                }
                if (message.selectedID != null && message.hasOwnProperty("selectedID"))
                    object.selectedID = message.selectedID;
                return object;
            };

            /**
             * Converts this MessagePhaseList to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePhaseList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessagePhaseList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessagePhaseList;
        })();

        CTCardiacCommonProtocol.MessageLoadSeriesMode = (function() {

            /**
             * Properties of a MessageLoadSeriesMode.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageLoadSeriesMode
             * @property {Mcsf.CTCardiacCommonProtocol.LoadSeriesMode} mode MessageLoadSeriesMode mode
             */

            /**
             * Constructs a new MessageLoadSeriesMode.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageLoadSeriesMode.
             * @implements IMessageLoadSeriesMode
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageLoadSeriesMode=} [properties] Properties to set
             */
            function MessageLoadSeriesMode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageLoadSeriesMode mode.
             * @member {Mcsf.CTCardiacCommonProtocol.LoadSeriesMode} mode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @instance
             */
            MessageLoadSeriesMode.prototype.mode = 1;

            /**
             * Creates a new MessageLoadSeriesMode instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageLoadSeriesMode=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode} MessageLoadSeriesMode instance
             */
            MessageLoadSeriesMode.create = function create(properties) {
                return new MessageLoadSeriesMode(properties);
            };

            /**
             * Encodes the specified MessageLoadSeriesMode message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageLoadSeriesMode} message MessageLoadSeriesMode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageLoadSeriesMode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
                return writer;
            };

            /**
             * Encodes the specified MessageLoadSeriesMode message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageLoadSeriesMode} message MessageLoadSeriesMode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageLoadSeriesMode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageLoadSeriesMode message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode} MessageLoadSeriesMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageLoadSeriesMode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mode = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("mode"))
                    throw $util.ProtocolError("missing required 'mode'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageLoadSeriesMode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode} MessageLoadSeriesMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageLoadSeriesMode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageLoadSeriesMode message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageLoadSeriesMode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.mode) {
                default:
                    return "mode: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
                return null;
            };

            /**
             * Creates a MessageLoadSeriesMode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode} MessageLoadSeriesMode
             */
            MessageLoadSeriesMode.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode();
                switch (object.mode) {
                case "Replace":
                case 1:
                    message.mode = 1;
                    break;
                case "Append":
                case 2:
                    message.mode = 2;
                    break;
                case "Cancel":
                case 3:
                    message.mode = 3;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageLoadSeriesMode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode} message MessageLoadSeriesMode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageLoadSeriesMode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.mode = options.enums === String ? "Replace" : 1;
                if (message.mode != null && message.hasOwnProperty("mode"))
                    object.mode = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.LoadSeriesMode[message.mode] : message.mode;
                return object;
            };

            /**
             * Converts this MessageLoadSeriesMode to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageLoadSeriesMode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageLoadSeriesMode;
        })();

        CTCardiacCommonProtocol.MessagePlaqueList = (function() {

            /**
             * Properties of a MessagePlaqueList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessagePlaqueList
             * @property {Array.<number>|null} [PlaqueIDs] MessagePlaqueList PlaqueIDs
             * @property {number} SelectedID MessagePlaqueList SelectedID
             */

            /**
             * Constructs a new MessagePlaqueList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessagePlaqueList.
             * @implements IMessagePlaqueList
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueList=} [properties] Properties to set
             */
            function MessagePlaqueList(properties) {
                this.PlaqueIDs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessagePlaqueList PlaqueIDs.
             * @member {Array.<number>} PlaqueIDs
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @instance
             */
            MessagePlaqueList.prototype.PlaqueIDs = $util.emptyArray;

            /**
             * MessagePlaqueList SelectedID.
             * @member {number} SelectedID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @instance
             */
            MessagePlaqueList.prototype.SelectedID = 0;

            /**
             * Creates a new MessagePlaqueList instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueList=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueList} MessagePlaqueList instance
             */
            MessagePlaqueList.create = function create(properties) {
                return new MessagePlaqueList(properties);
            };

            /**
             * Encodes the specified MessagePlaqueList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueList.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueList} message MessagePlaqueList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePlaqueList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PlaqueIDs != null && message.PlaqueIDs.length)
                    for (var i = 0; i < message.PlaqueIDs.length; ++i)
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PlaqueIDs[i]);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SelectedID);
                return writer;
            };

            /**
             * Encodes the specified MessagePlaqueList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueList} message MessagePlaqueList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePlaqueList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessagePlaqueList message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueList} MessagePlaqueList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePlaqueList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.PlaqueIDs && message.PlaqueIDs.length))
                            message.PlaqueIDs = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.PlaqueIDs.push(reader.int32());
                        } else
                            message.PlaqueIDs.push(reader.int32());
                        break;
                    case 2:
                        message.SelectedID = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("SelectedID"))
                    throw $util.ProtocolError("missing required 'SelectedID'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessagePlaqueList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueList} MessagePlaqueList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePlaqueList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessagePlaqueList message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessagePlaqueList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PlaqueIDs != null && message.hasOwnProperty("PlaqueIDs")) {
                    if (!Array.isArray(message.PlaqueIDs))
                        return "PlaqueIDs: array expected";
                    for (var i = 0; i < message.PlaqueIDs.length; ++i)
                        if (!$util.isInteger(message.PlaqueIDs[i]))
                            return "PlaqueIDs: integer[] expected";
                }
                if (!$util.isInteger(message.SelectedID))
                    return "SelectedID: integer expected";
                return null;
            };

            /**
             * Creates a MessagePlaqueList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueList} MessagePlaqueList
             */
            MessagePlaqueList.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueList)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueList();
                if (object.PlaqueIDs) {
                    if (!Array.isArray(object.PlaqueIDs))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessagePlaqueList.PlaqueIDs: array expected");
                    message.PlaqueIDs = [];
                    for (var i = 0; i < object.PlaqueIDs.length; ++i)
                        message.PlaqueIDs[i] = object.PlaqueIDs[i] | 0;
                }
                if (object.SelectedID != null)
                    message.SelectedID = object.SelectedID | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessagePlaqueList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessagePlaqueList} message MessagePlaqueList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessagePlaqueList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.PlaqueIDs = [];
                if (options.defaults)
                    object.SelectedID = 0;
                if (message.PlaqueIDs && message.PlaqueIDs.length) {
                    object.PlaqueIDs = [];
                    for (var j = 0; j < message.PlaqueIDs.length; ++j)
                        object.PlaqueIDs[j] = message.PlaqueIDs[j];
                }
                if (message.SelectedID != null && message.hasOwnProperty("SelectedID"))
                    object.SelectedID = message.SelectedID;
                return object;
            };

            /**
             * Converts this MessagePlaqueList to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessagePlaqueList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessagePlaqueList;
        })();

        CTCardiacCommonProtocol.MessageStenosisMode = (function() {

            /**
             * Properties of a MessageStenosisMode.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisMode
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMode} mode MessageStenosisMode mode
             */

            /**
             * Constructs a new MessageStenosisMode.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisMode.
             * @implements IMessageStenosisMode
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMode=} [properties] Properties to set
             */
            function MessageStenosisMode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisMode mode.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMode} mode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @instance
             */
            MessageStenosisMode.prototype.mode = 0;

            /**
             * Creates a new MessageStenosisMode instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMode=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMode} MessageStenosisMode instance
             */
            MessageStenosisMode.create = function create(properties) {
                return new MessageStenosisMode(properties);
            };

            /**
             * Encodes the specified MessageStenosisMode message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMode.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMode} message MessageStenosisMode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisMode message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisMode} message MessageStenosisMode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisMode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisMode message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMode} MessageStenosisMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mode = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("mode"))
                    throw $util.ProtocolError("missing required 'mode'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisMode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMode} MessageStenosisMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisMode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisMode message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisMode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.mode) {
                default:
                    return "mode: enum value expected";
                case 0:
                case 1:
                    break;
                }
                return null;
            };

            /**
             * Creates a MessageStenosisMode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisMode} MessageStenosisMode
             */
            MessageStenosisMode.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMode)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMode();
                switch (object.mode) {
                case "Stenosis":
                case 0:
                    message.mode = 0;
                    break;
                case "Plaque":
                case 1:
                    message.mode = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisMode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisMode} message MessageStenosisMode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisMode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.mode = options.enums === String ? "Stenosis" : 0;
                if (message.mode != null && message.hasOwnProperty("mode"))
                    object.mode = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMode[message.mode] : message.mode;
                return object;
            };

            /**
             * Converts this MessageStenosisMode to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisMode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisMode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisMode;
        })();

        CTCardiacCommonProtocol.MessageContourChangePoints = (function() {

            /**
             * Properties of a MessageContourChangePoints.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageContourChangePoints
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} oldPoints MessageContourChangePoints oldPoints
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} newPoints MessageContourChangePoints newPoints
             */

            /**
             * Constructs a new MessageContourChangePoints.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageContourChangePoints.
             * @implements IMessageContourChangePoints
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourChangePoints=} [properties] Properties to set
             */
            function MessageContourChangePoints(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageContourChangePoints oldPoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} oldPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @instance
             */
            MessageContourChangePoints.prototype.oldPoints = null;

            /**
             * MessageContourChangePoints newPoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} newPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @instance
             */
            MessageContourChangePoints.prototype.newPoints = null;

            /**
             * Creates a new MessageContourChangePoints instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourChangePoints=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints} MessageContourChangePoints instance
             */
            MessageContourChangePoints.create = function create(properties) {
                return new MessageContourChangePoints(properties);
            };

            /**
             * Encodes the specified MessageContourChangePoints message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourChangePoints} message MessageContourChangePoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageContourChangePoints.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.oldPoints, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.newPoints, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageContourChangePoints message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourChangePoints} message MessageContourChangePoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageContourChangePoints.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageContourChangePoints message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints} MessageContourChangePoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageContourChangePoints.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.oldPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.newPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("oldPoints"))
                    throw $util.ProtocolError("missing required 'oldPoints'", { instance: message });
                if (!message.hasOwnProperty("newPoints"))
                    throw $util.ProtocolError("missing required 'newPoints'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageContourChangePoints message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints} MessageContourChangePoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageContourChangePoints.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageContourChangePoints message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageContourChangePoints.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.oldPoints);
                    if (error)
                        return "oldPoints." + error;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.newPoints);
                    if (error)
                        return "newPoints." + error;
                }
                return null;
            };

            /**
             * Creates a MessageContourChangePoints message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints} MessageContourChangePoints
             */
            MessageContourChangePoints.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints();
                if (object.oldPoints != null) {
                    if (typeof object.oldPoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints.oldPoints: object expected");
                    message.oldPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.oldPoints);
                }
                if (object.newPoints != null) {
                    if (typeof object.newPoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints.newPoints: object expected");
                    message.newPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.newPoints);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageContourChangePoints message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints} message MessageContourChangePoints
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageContourChangePoints.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.oldPoints = null;
                    object.newPoints = null;
                }
                if (message.oldPoints != null && message.hasOwnProperty("oldPoints"))
                    object.oldPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.oldPoints, options);
                if (message.newPoints != null && message.hasOwnProperty("newPoints"))
                    object.newPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.newPoints, options);
                return object;
            };

            /**
             * Converts this MessageContourChangePoints to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageContourChangePoints.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageContourChangePoints;
        })();

        CTCardiacCommonProtocol.MessagePlaqueListOperationParams = (function() {

            /**
             * Properties of a MessagePlaqueListOperationParams.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessagePlaqueListOperationParams
             * @property {Mcsf.CTCardiacCommonProtocol.ListOperationType} OperationType MessagePlaqueListOperationParams OperationType
             * @property {number|null} [ItemID] MessagePlaqueListOperationParams ItemID
             */

            /**
             * Constructs a new MessagePlaqueListOperationParams.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessagePlaqueListOperationParams.
             * @implements IMessagePlaqueListOperationParams
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueListOperationParams=} [properties] Properties to set
             */
            function MessagePlaqueListOperationParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessagePlaqueListOperationParams OperationType.
             * @member {Mcsf.CTCardiacCommonProtocol.ListOperationType} OperationType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @instance
             */
            MessagePlaqueListOperationParams.prototype.OperationType = 1;

            /**
             * MessagePlaqueListOperationParams ItemID.
             * @member {number} ItemID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @instance
             */
            MessagePlaqueListOperationParams.prototype.ItemID = 0;

            /**
             * Creates a new MessagePlaqueListOperationParams instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueListOperationParams=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams} MessagePlaqueListOperationParams instance
             */
            MessagePlaqueListOperationParams.create = function create(properties) {
                return new MessagePlaqueListOperationParams(properties);
            };

            /**
             * Encodes the specified MessagePlaqueListOperationParams message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueListOperationParams} message MessagePlaqueListOperationParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePlaqueListOperationParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.OperationType);
                if (message.ItemID != null && Object.hasOwnProperty.call(message, "ItemID"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemID);
                return writer;
            };

            /**
             * Encodes the specified MessagePlaqueListOperationParams message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueListOperationParams} message MessagePlaqueListOperationParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePlaqueListOperationParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessagePlaqueListOperationParams message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams} MessagePlaqueListOperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePlaqueListOperationParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.OperationType = reader.int32();
                        break;
                    case 2:
                        message.ItemID = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("OperationType"))
                    throw $util.ProtocolError("missing required 'OperationType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessagePlaqueListOperationParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams} MessagePlaqueListOperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePlaqueListOperationParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessagePlaqueListOperationParams message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessagePlaqueListOperationParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.OperationType) {
                default:
                    return "OperationType: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
                if (message.ItemID != null && message.hasOwnProperty("ItemID"))
                    if (!$util.isInteger(message.ItemID))
                        return "ItemID: integer expected";
                return null;
            };

            /**
             * Creates a MessagePlaqueListOperationParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams} MessagePlaqueListOperationParams
             */
            MessagePlaqueListOperationParams.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams();
                switch (object.OperationType) {
                case "ListOperationType_Add":
                case 1:
                    message.OperationType = 1;
                    break;
                case "ListOperationType_Delete":
                case 2:
                    message.OperationType = 2;
                    break;
                case "ListOperationType_Rename":
                case 3:
                    message.OperationType = 3;
                    break;
                case "ListOperationType_Select":
                case 4:
                    message.OperationType = 4;
                    break;
                case "ListOperationType_Change":
                case 5:
                    message.OperationType = 5;
                    break;
                }
                if (object.ItemID != null)
                    message.ItemID = object.ItemID | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessagePlaqueListOperationParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams} message MessagePlaqueListOperationParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessagePlaqueListOperationParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.OperationType = options.enums === String ? "ListOperationType_Add" : 1;
                    object.ItemID = 0;
                }
                if (message.OperationType != null && message.hasOwnProperty("OperationType"))
                    object.OperationType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.ListOperationType[message.OperationType] : message.OperationType;
                if (message.ItemID != null && message.hasOwnProperty("ItemID"))
                    object.ItemID = message.ItemID;
                return object;
            };

            /**
             * Converts this MessagePlaqueListOperationParams to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessagePlaqueListOperationParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessagePlaqueListOperationParams;
        })();

        CTCardiacCommonProtocol.MessageBEStatus = (function() {

            /**
             * Properties of a MessageBEStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageBEStatus
             * @property {Mcsf.CTCardiacCommonProtocol.BEStatusEnum} BEStatus MessageBEStatus BEStatus
             * @property {Uint8Array|null} [CustomInfo] MessageBEStatus CustomInfo
             */

            /**
             * Constructs a new MessageBEStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageBEStatus.
             * @implements IMessageBEStatus
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBEStatus=} [properties] Properties to set
             */
            function MessageBEStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageBEStatus BEStatus.
             * @member {Mcsf.CTCardiacCommonProtocol.BEStatusEnum} BEStatus
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @instance
             */
            MessageBEStatus.prototype.BEStatus = 31;

            /**
             * MessageBEStatus CustomInfo.
             * @member {Uint8Array} CustomInfo
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @instance
             */
            MessageBEStatus.prototype.CustomInfo = $util.newBuffer([]);

            /**
             * Creates a new MessageBEStatus instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBEStatus=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBEStatus} MessageBEStatus instance
             */
            MessageBEStatus.create = function create(properties) {
                return new MessageBEStatus(properties);
            };

            /**
             * Encodes the specified MessageBEStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBEStatus.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBEStatus} message MessageBEStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageBEStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BEStatus);
                if (message.CustomInfo != null && Object.hasOwnProperty.call(message, "CustomInfo"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.CustomInfo);
                return writer;
            };

            /**
             * Encodes the specified MessageBEStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBEStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBEStatus} message MessageBEStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageBEStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageBEStatus message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBEStatus} MessageBEStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageBEStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageBEStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.BEStatus = reader.int32();
                        break;
                    case 2:
                        message.CustomInfo = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("BEStatus"))
                    throw $util.ProtocolError("missing required 'BEStatus'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageBEStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBEStatus} MessageBEStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageBEStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageBEStatus message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageBEStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.BEStatus) {
                default:
                    return "BEStatus: enum value expected";
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                    break;
                }
                if (message.CustomInfo != null && message.hasOwnProperty("CustomInfo"))
                    if (!(message.CustomInfo && typeof message.CustomInfo.length === "number" || $util.isString(message.CustomInfo)))
                        return "CustomInfo: buffer expected";
                return null;
            };

            /**
             * Creates a MessageBEStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBEStatus} MessageBEStatus
             */
            MessageBEStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageBEStatus)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageBEStatus();
                switch (object.BEStatus) {
                case "BEStatusEnum_LoadSeriesStart":
                case 31:
                    message.BEStatus = 31;
                    break;
                case "BEStatusEnum_LoadSeriesEnd":
                case 32:
                    message.BEStatus = 32;
                    break;
                case "BEStatusEnum_LoadSeriesFailed":
                case 33:
                    message.BEStatus = 33;
                    break;
                case "BEStatusEnum_LoadSeriesCanceled":
                case 34:
                    message.BEStatus = 34;
                    break;
                case "BEStatusEnum_LoadBookmarkStart":
                case 35:
                    message.BEStatus = 35;
                    break;
                case "BEStatusEnum_LoadBookmarkEnd":
                case 36:
                    message.BEStatus = 36;
                    break;
                case "BEStatusEnum_ChamberSegmentStart":
                case 37:
                    message.BEStatus = 37;
                    break;
                case "BEStatusEnum_ChamberSegmentFailed":
                case 38:
                    message.BEStatus = 38;
                    break;
                case "BEStatusEnum_ChamberSegmentEnd":
                case 39:
                    message.BEStatus = 39;
                    break;
                case "BEStatusEnum_AutoExtractCenterLineStart":
                case 40:
                    message.BEStatus = 40;
                    break;
                case "BEStatusEnum_AutoExtractCenterLineFailed":
                case 41:
                    message.BEStatus = 41;
                    break;
                case "BEStatusEnum_AutoExtractCenterLineEnd":
                case 42:
                    message.BEStatus = 42;
                    break;
                case "BEStatusEnum_ManualExtractCenterLineStart":
                case 43:
                    message.BEStatus = 43;
                    break;
                case "BEStatusEnum_ManualExtractCenterLineFailed":
                case 44:
                    message.BEStatus = 44;
                    break;
                case "BEStatusEnum_ManualExtractCenterLineEnd":
                case 45:
                    message.BEStatus = 45;
                    break;
                case "BEStatusEnum_AllPhaseAutoProcessed":
                case 46:
                    message.BEStatus = 46;
                    break;
                case "BEStatusEnum_AllPhaseCalBullEyeMapEnd":
                case 47:
                    message.BEStatus = 47;
                    break;
                case "BEStatusEnum_UnlockMedViewerControl":
                case 48:
                    message.BEStatus = 48;
                    break;
                case "BEStatusEnum_ChangeToNewVolume":
                case 49:
                    message.BEStatus = 49;
                    break;
                }
                if (object.CustomInfo != null)
                    if (typeof object.CustomInfo === "string")
                        $util.base64.decode(object.CustomInfo, message.CustomInfo = $util.newBuffer($util.base64.length(object.CustomInfo)), 0);
                    else if (object.CustomInfo.length)
                        message.CustomInfo = object.CustomInfo;
                return message;
            };

            /**
             * Creates a plain object from a MessageBEStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageBEStatus} message MessageBEStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageBEStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.BEStatus = options.enums === String ? "BEStatusEnum_LoadSeriesStart" : 31;
                    if (options.bytes === String)
                        object.CustomInfo = "";
                    else {
                        object.CustomInfo = [];
                        if (options.bytes !== Array)
                            object.CustomInfo = $util.newBuffer(object.CustomInfo);
                    }
                }
                if (message.BEStatus != null && message.hasOwnProperty("BEStatus"))
                    object.BEStatus = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.BEStatusEnum[message.BEStatus] : message.BEStatus;
                if (message.CustomInfo != null && message.hasOwnProperty("CustomInfo"))
                    object.CustomInfo = options.bytes === String ? $util.base64.encode(message.CustomInfo, 0, message.CustomInfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.CustomInfo) : message.CustomInfo;
                return object;
            };

            /**
             * Converts this MessageBEStatus to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBEStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageBEStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageBEStatus;
        })();

        CTCardiacCommonProtocol.MsgSimpsonStatistics = (function() {

            /**
             * Properties of a MsgSimpsonStatistics.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMsgSimpsonStatistics
             * @property {string|null} [ventricularType] MsgSimpsonStatistics ventricularType
             * @property {number|null} [EDVentricularVolume] MsgSimpsonStatistics EDVentricularVolume
             * @property {number|null} [ESVentricularVolume] MsgSimpsonStatistics ESVentricularVolume
             * @property {number|null} [ventricularStrokeVolume] MsgSimpsonStatistics ventricularStrokeVolume
             * @property {number|null} [ventricularEjectionFraction] MsgSimpsonStatistics ventricularEjectionFraction
             * @property {number|null} [ventricular_CardiacOutput] MsgSimpsonStatistics ventricular_CardiacOutput
             */

            /**
             * Constructs a new MsgSimpsonStatistics.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MsgSimpsonStatistics.
             * @implements IMsgSimpsonStatistics
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics=} [properties] Properties to set
             */
            function MsgSimpsonStatistics(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MsgSimpsonStatistics ventricularType.
             * @member {string} ventricularType
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @instance
             */
            MsgSimpsonStatistics.prototype.ventricularType = "";

            /**
             * MsgSimpsonStatistics EDVentricularVolume.
             * @member {number} EDVentricularVolume
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @instance
             */
            MsgSimpsonStatistics.prototype.EDVentricularVolume = 0;

            /**
             * MsgSimpsonStatistics ESVentricularVolume.
             * @member {number} ESVentricularVolume
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @instance
             */
            MsgSimpsonStatistics.prototype.ESVentricularVolume = 0;

            /**
             * MsgSimpsonStatistics ventricularStrokeVolume.
             * @member {number} ventricularStrokeVolume
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @instance
             */
            MsgSimpsonStatistics.prototype.ventricularStrokeVolume = 0;

            /**
             * MsgSimpsonStatistics ventricularEjectionFraction.
             * @member {number} ventricularEjectionFraction
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @instance
             */
            MsgSimpsonStatistics.prototype.ventricularEjectionFraction = 0;

            /**
             * MsgSimpsonStatistics ventricular_CardiacOutput.
             * @member {number} ventricular_CardiacOutput
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @instance
             */
            MsgSimpsonStatistics.prototype.ventricular_CardiacOutput = 0;

            /**
             * Creates a new MsgSimpsonStatistics instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics} MsgSimpsonStatistics instance
             */
            MsgSimpsonStatistics.create = function create(properties) {
                return new MsgSimpsonStatistics(properties);
            };

            /**
             * Encodes the specified MsgSimpsonStatistics message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics} message MsgSimpsonStatistics message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgSimpsonStatistics.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ventricularType != null && Object.hasOwnProperty.call(message, "ventricularType"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.ventricularType);
                if (message.EDVentricularVolume != null && Object.hasOwnProperty.call(message, "EDVentricularVolume"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.EDVentricularVolume);
                if (message.ESVentricularVolume != null && Object.hasOwnProperty.call(message, "ESVentricularVolume"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.ESVentricularVolume);
                if (message.ventricularStrokeVolume != null && Object.hasOwnProperty.call(message, "ventricularStrokeVolume"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.ventricularStrokeVolume);
                if (message.ventricularEjectionFraction != null && Object.hasOwnProperty.call(message, "ventricularEjectionFraction"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ventricularEjectionFraction);
                if (message.ventricular_CardiacOutput != null && Object.hasOwnProperty.call(message, "ventricular_CardiacOutput"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.ventricular_CardiacOutput);
                return writer;
            };

            /**
             * Encodes the specified MsgSimpsonStatistics message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics} message MsgSimpsonStatistics message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgSimpsonStatistics.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MsgSimpsonStatistics message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics} MsgSimpsonStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgSimpsonStatistics.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ventricularType = reader.string();
                        break;
                    case 2:
                        message.EDVentricularVolume = reader.double();
                        break;
                    case 3:
                        message.ESVentricularVolume = reader.double();
                        break;
                    case 4:
                        message.ventricularStrokeVolume = reader.double();
                        break;
                    case 5:
                        message.ventricularEjectionFraction = reader.int32();
                        break;
                    case 6:
                        message.ventricular_CardiacOutput = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MsgSimpsonStatistics message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics} MsgSimpsonStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgSimpsonStatistics.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MsgSimpsonStatistics message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MsgSimpsonStatistics.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ventricularType != null && message.hasOwnProperty("ventricularType"))
                    if (!$util.isString(message.ventricularType))
                        return "ventricularType: string expected";
                if (message.EDVentricularVolume != null && message.hasOwnProperty("EDVentricularVolume"))
                    if (typeof message.EDVentricularVolume !== "number")
                        return "EDVentricularVolume: number expected";
                if (message.ESVentricularVolume != null && message.hasOwnProperty("ESVentricularVolume"))
                    if (typeof message.ESVentricularVolume !== "number")
                        return "ESVentricularVolume: number expected";
                if (message.ventricularStrokeVolume != null && message.hasOwnProperty("ventricularStrokeVolume"))
                    if (typeof message.ventricularStrokeVolume !== "number")
                        return "ventricularStrokeVolume: number expected";
                if (message.ventricularEjectionFraction != null && message.hasOwnProperty("ventricularEjectionFraction"))
                    if (!$util.isInteger(message.ventricularEjectionFraction))
                        return "ventricularEjectionFraction: integer expected";
                if (message.ventricular_CardiacOutput != null && message.hasOwnProperty("ventricular_CardiacOutput"))
                    if (typeof message.ventricular_CardiacOutput !== "number")
                        return "ventricular_CardiacOutput: number expected";
                return null;
            };

            /**
             * Creates a MsgSimpsonStatistics message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics} MsgSimpsonStatistics
             */
            MsgSimpsonStatistics.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics();
                if (object.ventricularType != null)
                    message.ventricularType = String(object.ventricularType);
                if (object.EDVentricularVolume != null)
                    message.EDVentricularVolume = Number(object.EDVentricularVolume);
                if (object.ESVentricularVolume != null)
                    message.ESVentricularVolume = Number(object.ESVentricularVolume);
                if (object.ventricularStrokeVolume != null)
                    message.ventricularStrokeVolume = Number(object.ventricularStrokeVolume);
                if (object.ventricularEjectionFraction != null)
                    message.ventricularEjectionFraction = object.ventricularEjectionFraction | 0;
                if (object.ventricular_CardiacOutput != null)
                    message.ventricular_CardiacOutput = Number(object.ventricular_CardiacOutput);
                return message;
            };

            /**
             * Creates a plain object from a MsgSimpsonStatistics message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics} message MsgSimpsonStatistics
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MsgSimpsonStatistics.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ventricularType = "";
                    object.EDVentricularVolume = 0;
                    object.ESVentricularVolume = 0;
                    object.ventricularStrokeVolume = 0;
                    object.ventricularEjectionFraction = 0;
                    object.ventricular_CardiacOutput = 0;
                }
                if (message.ventricularType != null && message.hasOwnProperty("ventricularType"))
                    object.ventricularType = message.ventricularType;
                if (message.EDVentricularVolume != null && message.hasOwnProperty("EDVentricularVolume"))
                    object.EDVentricularVolume = options.json && !isFinite(message.EDVentricularVolume) ? String(message.EDVentricularVolume) : message.EDVentricularVolume;
                if (message.ESVentricularVolume != null && message.hasOwnProperty("ESVentricularVolume"))
                    object.ESVentricularVolume = options.json && !isFinite(message.ESVentricularVolume) ? String(message.ESVentricularVolume) : message.ESVentricularVolume;
                if (message.ventricularStrokeVolume != null && message.hasOwnProperty("ventricularStrokeVolume"))
                    object.ventricularStrokeVolume = options.json && !isFinite(message.ventricularStrokeVolume) ? String(message.ventricularStrokeVolume) : message.ventricularStrokeVolume;
                if (message.ventricularEjectionFraction != null && message.hasOwnProperty("ventricularEjectionFraction"))
                    object.ventricularEjectionFraction = message.ventricularEjectionFraction;
                if (message.ventricular_CardiacOutput != null && message.hasOwnProperty("ventricular_CardiacOutput"))
                    object.ventricular_CardiacOutput = options.json && !isFinite(message.ventricular_CardiacOutput) ? String(message.ventricular_CardiacOutput) : message.ventricular_CardiacOutput;
                return object;
            };

            /**
             * Converts this MsgSimpsonStatistics to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MsgSimpsonStatistics.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MsgSimpsonStatistics;
        })();

        CTCardiacCommonProtocol.MsgSimpsonStatisticsList = (function() {

            /**
             * Properties of a MsgSimpsonStatisticsList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMsgSimpsonStatisticsList
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics>|null} [simpsonStatistics] MsgSimpsonStatisticsList simpsonStatistics
             * @property {number|null} [ventricularWallMass] MsgSimpsonStatisticsList ventricularWallMass
             * @property {number|null} [heartRate] MsgSimpsonStatisticsList heartRate
             */

            /**
             * Constructs a new MsgSimpsonStatisticsList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MsgSimpsonStatisticsList.
             * @implements IMsgSimpsonStatisticsList
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatisticsList=} [properties] Properties to set
             */
            function MsgSimpsonStatisticsList(properties) {
                this.simpsonStatistics = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MsgSimpsonStatisticsList simpsonStatistics.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics>} simpsonStatistics
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @instance
             */
            MsgSimpsonStatisticsList.prototype.simpsonStatistics = $util.emptyArray;

            /**
             * MsgSimpsonStatisticsList ventricularWallMass.
             * @member {number} ventricularWallMass
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @instance
             */
            MsgSimpsonStatisticsList.prototype.ventricularWallMass = 0;

            /**
             * MsgSimpsonStatisticsList heartRate.
             * @member {number} heartRate
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @instance
             */
            MsgSimpsonStatisticsList.prototype.heartRate = 0;

            /**
             * Creates a new MsgSimpsonStatisticsList instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatisticsList=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList} MsgSimpsonStatisticsList instance
             */
            MsgSimpsonStatisticsList.create = function create(properties) {
                return new MsgSimpsonStatisticsList(properties);
            };

            /**
             * Encodes the specified MsgSimpsonStatisticsList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatisticsList} message MsgSimpsonStatisticsList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgSimpsonStatisticsList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.simpsonStatistics != null && message.simpsonStatistics.length)
                    for (var i = 0; i < message.simpsonStatistics.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics.encode(message.simpsonStatistics[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.ventricularWallMass != null && Object.hasOwnProperty.call(message, "ventricularWallMass"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.ventricularWallMass);
                if (message.heartRate != null && Object.hasOwnProperty.call(message, "heartRate"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.heartRate);
                return writer;
            };

            /**
             * Encodes the specified MsgSimpsonStatisticsList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatisticsList} message MsgSimpsonStatisticsList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgSimpsonStatisticsList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MsgSimpsonStatisticsList message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList} MsgSimpsonStatisticsList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgSimpsonStatisticsList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.simpsonStatistics && message.simpsonStatistics.length))
                            message.simpsonStatistics = [];
                        message.simpsonStatistics.push($root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.ventricularWallMass = reader.double();
                        break;
                    case 3:
                        message.heartRate = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MsgSimpsonStatisticsList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList} MsgSimpsonStatisticsList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgSimpsonStatisticsList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MsgSimpsonStatisticsList message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MsgSimpsonStatisticsList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.simpsonStatistics != null && message.hasOwnProperty("simpsonStatistics")) {
                    if (!Array.isArray(message.simpsonStatistics))
                        return "simpsonStatistics: array expected";
                    for (var i = 0; i < message.simpsonStatistics.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics.verify(message.simpsonStatistics[i]);
                        if (error)
                            return "simpsonStatistics." + error;
                    }
                }
                if (message.ventricularWallMass != null && message.hasOwnProperty("ventricularWallMass"))
                    if (typeof message.ventricularWallMass !== "number")
                        return "ventricularWallMass: number expected";
                if (message.heartRate != null && message.hasOwnProperty("heartRate"))
                    if (typeof message.heartRate !== "number")
                        return "heartRate: number expected";
                return null;
            };

            /**
             * Creates a MsgSimpsonStatisticsList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList} MsgSimpsonStatisticsList
             */
            MsgSimpsonStatisticsList.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList();
                if (object.simpsonStatistics) {
                    if (!Array.isArray(object.simpsonStatistics))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList.simpsonStatistics: array expected");
                    message.simpsonStatistics = [];
                    for (var i = 0; i < object.simpsonStatistics.length; ++i) {
                        if (typeof object.simpsonStatistics[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList.simpsonStatistics: object expected");
                        message.simpsonStatistics[i] = $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics.fromObject(object.simpsonStatistics[i]);
                    }
                }
                if (object.ventricularWallMass != null)
                    message.ventricularWallMass = Number(object.ventricularWallMass);
                if (object.heartRate != null)
                    message.heartRate = Number(object.heartRate);
                return message;
            };

            /**
             * Creates a plain object from a MsgSimpsonStatisticsList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList} message MsgSimpsonStatisticsList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MsgSimpsonStatisticsList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.simpsonStatistics = [];
                if (options.defaults) {
                    object.ventricularWallMass = 0;
                    object.heartRate = 0;
                }
                if (message.simpsonStatistics && message.simpsonStatistics.length) {
                    object.simpsonStatistics = [];
                    for (var j = 0; j < message.simpsonStatistics.length; ++j)
                        object.simpsonStatistics[j] = $root.Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics.toObject(message.simpsonStatistics[j], options);
                }
                if (message.ventricularWallMass != null && message.hasOwnProperty("ventricularWallMass"))
                    object.ventricularWallMass = options.json && !isFinite(message.ventricularWallMass) ? String(message.ventricularWallMass) : message.ventricularWallMass;
                if (message.heartRate != null && message.hasOwnProperty("heartRate"))
                    object.heartRate = options.json && !isFinite(message.heartRate) ? String(message.heartRate) : message.heartRate;
                return object;
            };

            /**
             * Converts this MsgSimpsonStatisticsList to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MsgSimpsonStatisticsList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MsgSimpsonStatisticsList;
        })();

        CTCardiacCommonProtocol.MessageVentricleContourInfo = (function() {

            /**
             * Properties of a MessageVentricleContourInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageVentricleContourInfo
             * @property {Mcsf.CTCardiacCommonProtocol.VentricleContourType} VisibleContourType MessageVentricleContourInfo VisibleContourType
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem>|null} [ContourItem] MessageVentricleContourInfo ContourItem
             */

            /**
             * Constructs a new MessageVentricleContourInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageVentricleContourInfo.
             * @implements IMessageVentricleContourInfo
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourInfo=} [properties] Properties to set
             */
            function MessageVentricleContourInfo(properties) {
                this.ContourItem = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageVentricleContourInfo VisibleContourType.
             * @member {Mcsf.CTCardiacCommonProtocol.VentricleContourType} VisibleContourType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @instance
             */
            MessageVentricleContourInfo.prototype.VisibleContourType = 0;

            /**
             * MessageVentricleContourInfo ContourItem.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem>} ContourItem
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @instance
             */
            MessageVentricleContourInfo.prototype.ContourItem = $util.emptyArray;

            /**
             * Creates a new MessageVentricleContourInfo instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourInfo=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo} MessageVentricleContourInfo instance
             */
            MessageVentricleContourInfo.create = function create(properties) {
                return new MessageVentricleContourInfo(properties);
            };

            /**
             * Encodes the specified MessageVentricleContourInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourInfo} message MessageVentricleContourInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVentricleContourInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.VisibleContourType);
                if (message.ContourItem != null && message.ContourItem.length)
                    for (var i = 0; i < message.ContourItem.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.encode(message.ContourItem[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageVentricleContourInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourInfo} message MessageVentricleContourInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVentricleContourInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageVentricleContourInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo} MessageVentricleContourInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVentricleContourInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.VisibleContourType = reader.int32();
                        break;
                    case 2:
                        if (!(message.ContourItem && message.ContourItem.length))
                            message.ContourItem = [];
                        message.ContourItem.push($root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("VisibleContourType"))
                    throw $util.ProtocolError("missing required 'VisibleContourType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageVentricleContourInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo} MessageVentricleContourInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVentricleContourInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageVentricleContourInfo message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageVentricleContourInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.VisibleContourType) {
                default:
                    return "VisibleContourType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
                if (message.ContourItem != null && message.hasOwnProperty("ContourItem")) {
                    if (!Array.isArray(message.ContourItem))
                        return "ContourItem: array expected";
                    for (var i = 0; i < message.ContourItem.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.verify(message.ContourItem[i]);
                        if (error)
                            return "ContourItem." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageVentricleContourInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo} MessageVentricleContourInfo
             */
            MessageVentricleContourInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo();
                switch (object.VisibleContourType) {
                case "VentricleContourType_None":
                case 0:
                    message.VisibleContourType = 0;
                    break;
                case "VentricleContourType_Right":
                case 1:
                    message.VisibleContourType = 1;
                    break;
                case "VentricleContourType_Left":
                case 2:
                    message.VisibleContourType = 2;
                    break;
                case "VentricleContourType_Left_Myocardium":
                case 3:
                    message.VisibleContourType = 3;
                    break;
                case "VentricleContourType_All":
                case 4:
                    message.VisibleContourType = 4;
                    break;
                }
                if (object.ContourItem) {
                    if (!Array.isArray(object.ContourItem))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo.ContourItem: array expected");
                    message.ContourItem = [];
                    for (var i = 0; i < object.ContourItem.length; ++i) {
                        if (typeof object.ContourItem[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo.ContourItem: object expected");
                        message.ContourItem[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.fromObject(object.ContourItem[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageVentricleContourInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo} message MessageVentricleContourInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageVentricleContourInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.ContourItem = [];
                if (options.defaults)
                    object.VisibleContourType = options.enums === String ? "VentricleContourType_None" : 0;
                if (message.VisibleContourType != null && message.hasOwnProperty("VisibleContourType"))
                    object.VisibleContourType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.VentricleContourType[message.VisibleContourType] : message.VisibleContourType;
                if (message.ContourItem && message.ContourItem.length) {
                    object.ContourItem = [];
                    for (var j = 0; j < message.ContourItem.length; ++j)
                        object.ContourItem[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.toObject(message.ContourItem[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageVentricleContourInfo to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageVentricleContourInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageVentricleContourInfo;
        })();

        CTCardiacCommonProtocol.MessageVentricleContourItem = (function() {

            /**
             * Properties of a MessageVentricleContourItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageVentricleContourItem
             * @property {Mcsf.CTCardiacCommonProtocol.VentricleContourType} ContourType MessageVentricleContourItem ContourType
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageContourPoints>|null} [ContourPoints] MessageVentricleContourItem ContourPoints
             */

            /**
             * Constructs a new MessageVentricleContourItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageVentricleContourItem.
             * @implements IMessageVentricleContourItem
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem=} [properties] Properties to set
             */
            function MessageVentricleContourItem(properties) {
                this.ContourPoints = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageVentricleContourItem ContourType.
             * @member {Mcsf.CTCardiacCommonProtocol.VentricleContourType} ContourType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @instance
             */
            MessageVentricleContourItem.prototype.ContourType = 0;

            /**
             * MessageVentricleContourItem ContourPoints.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageContourPoints>} ContourPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @instance
             */
            MessageVentricleContourItem.prototype.ContourPoints = $util.emptyArray;

            /**
             * Creates a new MessageVentricleContourItem instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem} MessageVentricleContourItem instance
             */
            MessageVentricleContourItem.create = function create(properties) {
                return new MessageVentricleContourItem(properties);
            };

            /**
             * Encodes the specified MessageVentricleContourItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem} message MessageVentricleContourItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVentricleContourItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ContourType);
                if (message.ContourPoints != null && message.ContourPoints.length)
                    for (var i = 0; i < message.ContourPoints.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageContourPoints.encode(message.ContourPoints[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageVentricleContourItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem} message MessageVentricleContourItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVentricleContourItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageVentricleContourItem message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem} MessageVentricleContourItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVentricleContourItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ContourType = reader.int32();
                        break;
                    case 2:
                        if (!(message.ContourPoints && message.ContourPoints.length))
                            message.ContourPoints = [];
                        message.ContourPoints.push($root.Mcsf.CTCardiacCommonProtocol.MessageContourPoints.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ContourType"))
                    throw $util.ProtocolError("missing required 'ContourType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageVentricleContourItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem} MessageVentricleContourItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVentricleContourItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageVentricleContourItem message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageVentricleContourItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.ContourType) {
                default:
                    return "ContourType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
                if (message.ContourPoints != null && message.hasOwnProperty("ContourPoints")) {
                    if (!Array.isArray(message.ContourPoints))
                        return "ContourPoints: array expected";
                    for (var i = 0; i < message.ContourPoints.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageContourPoints.verify(message.ContourPoints[i]);
                        if (error)
                            return "ContourPoints." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageVentricleContourItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem} MessageVentricleContourItem
             */
            MessageVentricleContourItem.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem();
                switch (object.ContourType) {
                case "VentricleContourType_None":
                case 0:
                    message.ContourType = 0;
                    break;
                case "VentricleContourType_Right":
                case 1:
                    message.ContourType = 1;
                    break;
                case "VentricleContourType_Left":
                case 2:
                    message.ContourType = 2;
                    break;
                case "VentricleContourType_Left_Myocardium":
                case 3:
                    message.ContourType = 3;
                    break;
                case "VentricleContourType_All":
                case 4:
                    message.ContourType = 4;
                    break;
                }
                if (object.ContourPoints) {
                    if (!Array.isArray(object.ContourPoints))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.ContourPoints: array expected");
                    message.ContourPoints = [];
                    for (var i = 0; i < object.ContourPoints.length; ++i) {
                        if (typeof object.ContourPoints[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.ContourPoints: object expected");
                        message.ContourPoints[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageContourPoints.fromObject(object.ContourPoints[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageVentricleContourItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem} message MessageVentricleContourItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageVentricleContourItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.ContourPoints = [];
                if (options.defaults)
                    object.ContourType = options.enums === String ? "VentricleContourType_None" : 0;
                if (message.ContourType != null && message.hasOwnProperty("ContourType"))
                    object.ContourType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.VentricleContourType[message.ContourType] : message.ContourType;
                if (message.ContourPoints && message.ContourPoints.length) {
                    object.ContourPoints = [];
                    for (var j = 0; j < message.ContourPoints.length; ++j)
                        object.ContourPoints[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageContourPoints.toObject(message.ContourPoints[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageVentricleContourItem to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageVentricleContourItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageVentricleContourItem;
        })();

        CTCardiacCommonProtocol.MessageContourPoints = (function() {

            /**
             * Properties of a MessageContourPoints.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageContourPoints
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} OutPoints MessageContourPoints OutPoints
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds>|null} [InnerPoints] MessageContourPoints InnerPoints
             */

            /**
             * Constructs a new MessageContourPoints.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageContourPoints.
             * @implements IMessageContourPoints
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourPoints=} [properties] Properties to set
             */
            function MessageContourPoints(properties) {
                this.InnerPoints = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageContourPoints OutPoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} OutPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @instance
             */
            MessageContourPoints.prototype.OutPoints = null;

            /**
             * MessageContourPoints InnerPoints.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds>} InnerPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @instance
             */
            MessageContourPoints.prototype.InnerPoints = $util.emptyArray;

            /**
             * Creates a new MessageContourPoints instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourPoints=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourPoints} MessageContourPoints instance
             */
            MessageContourPoints.create = function create(properties) {
                return new MessageContourPoints(properties);
            };

            /**
             * Encodes the specified MessageContourPoints message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourPoints.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourPoints} message MessageContourPoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageContourPoints.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.OutPoints, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.InnerPoints != null && message.InnerPoints.length)
                    for (var i = 0; i < message.InnerPoints.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.InnerPoints[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageContourPoints message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourPoints.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageContourPoints} message MessageContourPoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageContourPoints.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageContourPoints message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourPoints} MessageContourPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageContourPoints.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageContourPoints();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.OutPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.InnerPoints && message.InnerPoints.length))
                            message.InnerPoints = [];
                        message.InnerPoints.push($root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("OutPoints"))
                    throw $util.ProtocolError("missing required 'OutPoints'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageContourPoints message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourPoints} MessageContourPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageContourPoints.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageContourPoints message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageContourPoints.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.OutPoints);
                    if (error)
                        return "OutPoints." + error;
                }
                if (message.InnerPoints != null && message.hasOwnProperty("InnerPoints")) {
                    if (!Array.isArray(message.InnerPoints))
                        return "InnerPoints: array expected";
                    for (var i = 0; i < message.InnerPoints.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.InnerPoints[i]);
                        if (error)
                            return "InnerPoints." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageContourPoints message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageContourPoints} MessageContourPoints
             */
            MessageContourPoints.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageContourPoints)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageContourPoints();
                if (object.OutPoints != null) {
                    if (typeof object.OutPoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageContourPoints.OutPoints: object expected");
                    message.OutPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.OutPoints);
                }
                if (object.InnerPoints) {
                    if (!Array.isArray(object.InnerPoints))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageContourPoints.InnerPoints: array expected");
                    message.InnerPoints = [];
                    for (var i = 0; i < object.InnerPoints.length; ++i) {
                        if (typeof object.InnerPoints[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageContourPoints.InnerPoints: object expected");
                        message.InnerPoints[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.InnerPoints[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageContourPoints message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageContourPoints} message MessageContourPoints
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageContourPoints.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.InnerPoints = [];
                if (options.defaults)
                    object.OutPoints = null;
                if (message.OutPoints != null && message.hasOwnProperty("OutPoints"))
                    object.OutPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.OutPoints, options);
                if (message.InnerPoints && message.InnerPoints.length) {
                    object.InnerPoints = [];
                    for (var j = 0; j < message.InnerPoints.length; ++j)
                        object.InnerPoints[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.InnerPoints[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageContourPoints to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageContourPoints
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageContourPoints.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageContourPoints;
        })();

        CTCardiacCommonProtocol.MessageVentricleContourType = (function() {

            /**
             * Properties of a MessageVentricleContourType.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageVentricleContourType
             * @property {Mcsf.CTCardiacCommonProtocol.VentricleContourType} ContourType MessageVentricleContourType ContourType
             */

            /**
             * Constructs a new MessageVentricleContourType.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageVentricleContourType.
             * @implements IMessageVentricleContourType
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourType=} [properties] Properties to set
             */
            function MessageVentricleContourType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageVentricleContourType ContourType.
             * @member {Mcsf.CTCardiacCommonProtocol.VentricleContourType} ContourType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @instance
             */
            MessageVentricleContourType.prototype.ContourType = 0;

            /**
             * Creates a new MessageVentricleContourType instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourType=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType} MessageVentricleContourType instance
             */
            MessageVentricleContourType.create = function create(properties) {
                return new MessageVentricleContourType(properties);
            };

            /**
             * Encodes the specified MessageVentricleContourType message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourType} message MessageVentricleContourType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVentricleContourType.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ContourType);
                return writer;
            };

            /**
             * Encodes the specified MessageVentricleContourType message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourType} message MessageVentricleContourType message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVentricleContourType.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageVentricleContourType message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType} MessageVentricleContourType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVentricleContourType.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ContourType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ContourType"))
                    throw $util.ProtocolError("missing required 'ContourType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageVentricleContourType message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType} MessageVentricleContourType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVentricleContourType.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageVentricleContourType message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageVentricleContourType.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.ContourType) {
                default:
                    return "ContourType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
                return null;
            };

            /**
             * Creates a MessageVentricleContourType message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType} MessageVentricleContourType
             */
            MessageVentricleContourType.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType();
                switch (object.ContourType) {
                case "VentricleContourType_None":
                case 0:
                    message.ContourType = 0;
                    break;
                case "VentricleContourType_Right":
                case 1:
                    message.ContourType = 1;
                    break;
                case "VentricleContourType_Left":
                case 2:
                    message.ContourType = 2;
                    break;
                case "VentricleContourType_Left_Myocardium":
                case 3:
                    message.ContourType = 3;
                    break;
                case "VentricleContourType_All":
                case 4:
                    message.ContourType = 4;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageVentricleContourType message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType} message MessageVentricleContourType
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageVentricleContourType.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.ContourType = options.enums === String ? "VentricleContourType_None" : 0;
                if (message.ContourType != null && message.hasOwnProperty("ContourType"))
                    object.ContourType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.VentricleContourType[message.ContourType] : message.ContourType;
                return object;
            };

            /**
             * Converts this MessageVentricleContourType to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageVentricleContourType.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageVentricleContourType;
        })();

        CTCardiacCommonProtocol.MessageChangeVentricleContourPoints = (function() {

            /**
             * Properties of a MessageChangeVentricleContourPoints.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageChangeVentricleContourPoints
             * @property {Mcsf.CTCardiacCommonProtocol.VentricleContourType} ContourType MessageChangeVentricleContourPoints ContourType
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} OldPoints MessageChangeVentricleContourPoints OldPoints
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} NewPoints MessageChangeVentricleContourPoints NewPoints
             */

            /**
             * Constructs a new MessageChangeVentricleContourPoints.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageChangeVentricleContourPoints.
             * @implements IMessageChangeVentricleContourPoints
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageChangeVentricleContourPoints=} [properties] Properties to set
             */
            function MessageChangeVentricleContourPoints(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageChangeVentricleContourPoints ContourType.
             * @member {Mcsf.CTCardiacCommonProtocol.VentricleContourType} ContourType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @instance
             */
            MessageChangeVentricleContourPoints.prototype.ContourType = 0;

            /**
             * MessageChangeVentricleContourPoints OldPoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} OldPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @instance
             */
            MessageChangeVentricleContourPoints.prototype.OldPoints = null;

            /**
             * MessageChangeVentricleContourPoints NewPoints.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} NewPoints
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @instance
             */
            MessageChangeVentricleContourPoints.prototype.NewPoints = null;

            /**
             * Creates a new MessageChangeVentricleContourPoints instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageChangeVentricleContourPoints=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints} MessageChangeVentricleContourPoints instance
             */
            MessageChangeVentricleContourPoints.create = function create(properties) {
                return new MessageChangeVentricleContourPoints(properties);
            };

            /**
             * Encodes the specified MessageChangeVentricleContourPoints message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageChangeVentricleContourPoints} message MessageChangeVentricleContourPoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageChangeVentricleContourPoints.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ContourType);
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.OldPoints, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.NewPoints, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageChangeVentricleContourPoints message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageChangeVentricleContourPoints} message MessageChangeVentricleContourPoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageChangeVentricleContourPoints.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageChangeVentricleContourPoints message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints} MessageChangeVentricleContourPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageChangeVentricleContourPoints.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ContourType = reader.int32();
                        break;
                    case 2:
                        message.OldPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.NewPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ContourType"))
                    throw $util.ProtocolError("missing required 'ContourType'", { instance: message });
                if (!message.hasOwnProperty("OldPoints"))
                    throw $util.ProtocolError("missing required 'OldPoints'", { instance: message });
                if (!message.hasOwnProperty("NewPoints"))
                    throw $util.ProtocolError("missing required 'NewPoints'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageChangeVentricleContourPoints message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints} MessageChangeVentricleContourPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageChangeVentricleContourPoints.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageChangeVentricleContourPoints message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageChangeVentricleContourPoints.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.ContourType) {
                default:
                    return "ContourType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.OldPoints);
                    if (error)
                        return "OldPoints." + error;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.NewPoints);
                    if (error)
                        return "NewPoints." + error;
                }
                return null;
            };

            /**
             * Creates a MessageChangeVentricleContourPoints message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints} MessageChangeVentricleContourPoints
             */
            MessageChangeVentricleContourPoints.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints();
                switch (object.ContourType) {
                case "VentricleContourType_None":
                case 0:
                    message.ContourType = 0;
                    break;
                case "VentricleContourType_Right":
                case 1:
                    message.ContourType = 1;
                    break;
                case "VentricleContourType_Left":
                case 2:
                    message.ContourType = 2;
                    break;
                case "VentricleContourType_Left_Myocardium":
                case 3:
                    message.ContourType = 3;
                    break;
                case "VentricleContourType_All":
                case 4:
                    message.ContourType = 4;
                    break;
                }
                if (object.OldPoints != null) {
                    if (typeof object.OldPoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints.OldPoints: object expected");
                    message.OldPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.OldPoints);
                }
                if (object.NewPoints != null) {
                    if (typeof object.NewPoints !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints.NewPoints: object expected");
                    message.NewPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.NewPoints);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageChangeVentricleContourPoints message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints} message MessageChangeVentricleContourPoints
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageChangeVentricleContourPoints.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ContourType = options.enums === String ? "VentricleContourType_None" : 0;
                    object.OldPoints = null;
                    object.NewPoints = null;
                }
                if (message.ContourType != null && message.hasOwnProperty("ContourType"))
                    object.ContourType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.VentricleContourType[message.ContourType] : message.ContourType;
                if (message.OldPoints != null && message.hasOwnProperty("OldPoints"))
                    object.OldPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.OldPoints, options);
                if (message.NewPoints != null && message.hasOwnProperty("NewPoints"))
                    object.NewPoints = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.NewPoints, options);
                return object;
            };

            /**
             * Converts this MessageChangeVentricleContourPoints to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageChangeVentricleContourPoints.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageChangeVentricleContourPoints;
        })();

        CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo = (function() {

            /**
             * Properties of a MessageVentricleContourRedoUndoInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageVentricleContourRedoUndoInfo
             * @property {Mcsf.CTCardiacCommonProtocol.VentricleContourRedoUndoType} RedoUndoType MessageVentricleContourRedoUndoInfo RedoUndoType
             * @property {boolean|null} [IsEnable] MessageVentricleContourRedoUndoInfo IsEnable
             */

            /**
             * Constructs a new MessageVentricleContourRedoUndoInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageVentricleContourRedoUndoInfo.
             * @implements IMessageVentricleContourRedoUndoInfo
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourRedoUndoInfo=} [properties] Properties to set
             */
            function MessageVentricleContourRedoUndoInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageVentricleContourRedoUndoInfo RedoUndoType.
             * @member {Mcsf.CTCardiacCommonProtocol.VentricleContourRedoUndoType} RedoUndoType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @instance
             */
            MessageVentricleContourRedoUndoInfo.prototype.RedoUndoType = 0;

            /**
             * MessageVentricleContourRedoUndoInfo IsEnable.
             * @member {boolean} IsEnable
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @instance
             */
            MessageVentricleContourRedoUndoInfo.prototype.IsEnable = false;

            /**
             * Creates a new MessageVentricleContourRedoUndoInfo instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourRedoUndoInfo=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo} MessageVentricleContourRedoUndoInfo instance
             */
            MessageVentricleContourRedoUndoInfo.create = function create(properties) {
                return new MessageVentricleContourRedoUndoInfo(properties);
            };

            /**
             * Encodes the specified MessageVentricleContourRedoUndoInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourRedoUndoInfo} message MessageVentricleContourRedoUndoInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVentricleContourRedoUndoInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RedoUndoType);
                if (message.IsEnable != null && Object.hasOwnProperty.call(message, "IsEnable"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsEnable);
                return writer;
            };

            /**
             * Encodes the specified MessageVentricleContourRedoUndoInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourRedoUndoInfo} message MessageVentricleContourRedoUndoInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVentricleContourRedoUndoInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageVentricleContourRedoUndoInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo} MessageVentricleContourRedoUndoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVentricleContourRedoUndoInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.RedoUndoType = reader.int32();
                        break;
                    case 2:
                        message.IsEnable = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("RedoUndoType"))
                    throw $util.ProtocolError("missing required 'RedoUndoType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageVentricleContourRedoUndoInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo} MessageVentricleContourRedoUndoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVentricleContourRedoUndoInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageVentricleContourRedoUndoInfo message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageVentricleContourRedoUndoInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.RedoUndoType) {
                default:
                    return "RedoUndoType: enum value expected";
                case 0:
                case 1:
                    break;
                }
                if (message.IsEnable != null && message.hasOwnProperty("IsEnable"))
                    if (typeof message.IsEnable !== "boolean")
                        return "IsEnable: boolean expected";
                return null;
            };

            /**
             * Creates a MessageVentricleContourRedoUndoInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo} MessageVentricleContourRedoUndoInfo
             */
            MessageVentricleContourRedoUndoInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo();
                switch (object.RedoUndoType) {
                case "VentricleContourRedoUndoType_Redo":
                case 0:
                    message.RedoUndoType = 0;
                    break;
                case "VentricleContourRedoUndoType_Undo":
                case 1:
                    message.RedoUndoType = 1;
                    break;
                }
                if (object.IsEnable != null)
                    message.IsEnable = Boolean(object.IsEnable);
                return message;
            };

            /**
             * Creates a plain object from a MessageVentricleContourRedoUndoInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo} message MessageVentricleContourRedoUndoInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageVentricleContourRedoUndoInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.RedoUndoType = options.enums === String ? "VentricleContourRedoUndoType_Redo" : 0;
                    object.IsEnable = false;
                }
                if (message.RedoUndoType != null && message.hasOwnProperty("RedoUndoType"))
                    object.RedoUndoType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.VentricleContourRedoUndoType[message.RedoUndoType] : message.RedoUndoType;
                if (message.IsEnable != null && message.hasOwnProperty("IsEnable"))
                    object.IsEnable = message.IsEnable;
                return object;
            };

            /**
             * Converts this MessageVentricleContourRedoUndoInfo to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageVentricleContourRedoUndoInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageVentricleContourRedoUndoInfo;
        })();

        CTCardiacCommonProtocol.MessagePlaqueParameterItem = (function() {

            /**
             * Properties of a MessagePlaqueParameterItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessagePlaqueParameterItem
             * @property {number} ID MessagePlaqueParameterItem ID
             * @property {string} Type MessagePlaqueParameterItem Type
             * @property {number} Distance MessagePlaqueParameterItem Distance
             * @property {number} Volume MessagePlaqueParameterItem Volume
             * @property {number} CalcificPercentage MessagePlaqueParameterItem CalcificPercentage
             * @property {number} FibrousPercentage MessagePlaqueParameterItem FibrousPercentage
             * @property {number} LipidicPercentage MessagePlaqueParameterItem LipidicPercentage
             */

            /**
             * Constructs a new MessagePlaqueParameterItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessagePlaqueParameterItem.
             * @implements IMessagePlaqueParameterItem
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem=} [properties] Properties to set
             */
            function MessagePlaqueParameterItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessagePlaqueParameterItem ID.
             * @member {number} ID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @instance
             */
            MessagePlaqueParameterItem.prototype.ID = 0;

            /**
             * MessagePlaqueParameterItem Type.
             * @member {string} Type
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @instance
             */
            MessagePlaqueParameterItem.prototype.Type = "";

            /**
             * MessagePlaqueParameterItem Distance.
             * @member {number} Distance
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @instance
             */
            MessagePlaqueParameterItem.prototype.Distance = 0;

            /**
             * MessagePlaqueParameterItem Volume.
             * @member {number} Volume
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @instance
             */
            MessagePlaqueParameterItem.prototype.Volume = 0;

            /**
             * MessagePlaqueParameterItem CalcificPercentage.
             * @member {number} CalcificPercentage
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @instance
             */
            MessagePlaqueParameterItem.prototype.CalcificPercentage = 0;

            /**
             * MessagePlaqueParameterItem FibrousPercentage.
             * @member {number} FibrousPercentage
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @instance
             */
            MessagePlaqueParameterItem.prototype.FibrousPercentage = 0;

            /**
             * MessagePlaqueParameterItem LipidicPercentage.
             * @member {number} LipidicPercentage
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @instance
             */
            MessagePlaqueParameterItem.prototype.LipidicPercentage = 0;

            /**
             * Creates a new MessagePlaqueParameterItem instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem} MessagePlaqueParameterItem instance
             */
            MessagePlaqueParameterItem.create = function create(properties) {
                return new MessagePlaqueParameterItem(properties);
            };

            /**
             * Encodes the specified MessagePlaqueParameterItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem} message MessagePlaqueParameterItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePlaqueParameterItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Type);
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.Distance);
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.Volume);
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.CalcificPercentage);
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.FibrousPercentage);
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.LipidicPercentage);
                return writer;
            };

            /**
             * Encodes the specified MessagePlaqueParameterItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem} message MessagePlaqueParameterItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePlaqueParameterItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessagePlaqueParameterItem message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem} MessagePlaqueParameterItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePlaqueParameterItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ID = reader.int32();
                        break;
                    case 2:
                        message.Type = reader.string();
                        break;
                    case 3:
                        message.Distance = reader.double();
                        break;
                    case 4:
                        message.Volume = reader.double();
                        break;
                    case 5:
                        message.CalcificPercentage = reader.double();
                        break;
                    case 6:
                        message.FibrousPercentage = reader.double();
                        break;
                    case 7:
                        message.LipidicPercentage = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ID"))
                    throw $util.ProtocolError("missing required 'ID'", { instance: message });
                if (!message.hasOwnProperty("Type"))
                    throw $util.ProtocolError("missing required 'Type'", { instance: message });
                if (!message.hasOwnProperty("Distance"))
                    throw $util.ProtocolError("missing required 'Distance'", { instance: message });
                if (!message.hasOwnProperty("Volume"))
                    throw $util.ProtocolError("missing required 'Volume'", { instance: message });
                if (!message.hasOwnProperty("CalcificPercentage"))
                    throw $util.ProtocolError("missing required 'CalcificPercentage'", { instance: message });
                if (!message.hasOwnProperty("FibrousPercentage"))
                    throw $util.ProtocolError("missing required 'FibrousPercentage'", { instance: message });
                if (!message.hasOwnProperty("LipidicPercentage"))
                    throw $util.ProtocolError("missing required 'LipidicPercentage'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessagePlaqueParameterItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem} MessagePlaqueParameterItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePlaqueParameterItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessagePlaqueParameterItem message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessagePlaqueParameterItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
                if (!$util.isString(message.Type))
                    return "Type: string expected";
                if (typeof message.Distance !== "number")
                    return "Distance: number expected";
                if (typeof message.Volume !== "number")
                    return "Volume: number expected";
                if (typeof message.CalcificPercentage !== "number")
                    return "CalcificPercentage: number expected";
                if (typeof message.FibrousPercentage !== "number")
                    return "FibrousPercentage: number expected";
                if (typeof message.LipidicPercentage !== "number")
                    return "LipidicPercentage: number expected";
                return null;
            };

            /**
             * Creates a MessagePlaqueParameterItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem} MessagePlaqueParameterItem
             */
            MessagePlaqueParameterItem.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem();
                if (object.ID != null)
                    message.ID = object.ID | 0;
                if (object.Type != null)
                    message.Type = String(object.Type);
                if (object.Distance != null)
                    message.Distance = Number(object.Distance);
                if (object.Volume != null)
                    message.Volume = Number(object.Volume);
                if (object.CalcificPercentage != null)
                    message.CalcificPercentage = Number(object.CalcificPercentage);
                if (object.FibrousPercentage != null)
                    message.FibrousPercentage = Number(object.FibrousPercentage);
                if (object.LipidicPercentage != null)
                    message.LipidicPercentage = Number(object.LipidicPercentage);
                return message;
            };

            /**
             * Creates a plain object from a MessagePlaqueParameterItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem} message MessagePlaqueParameterItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessagePlaqueParameterItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ID = 0;
                    object.Type = "";
                    object.Distance = 0;
                    object.Volume = 0;
                    object.CalcificPercentage = 0;
                    object.FibrousPercentage = 0;
                    object.LipidicPercentage = 0;
                }
                if (message.ID != null && message.hasOwnProperty("ID"))
                    object.ID = message.ID;
                if (message.Type != null && message.hasOwnProperty("Type"))
                    object.Type = message.Type;
                if (message.Distance != null && message.hasOwnProperty("Distance"))
                    object.Distance = options.json && !isFinite(message.Distance) ? String(message.Distance) : message.Distance;
                if (message.Volume != null && message.hasOwnProperty("Volume"))
                    object.Volume = options.json && !isFinite(message.Volume) ? String(message.Volume) : message.Volume;
                if (message.CalcificPercentage != null && message.hasOwnProperty("CalcificPercentage"))
                    object.CalcificPercentage = options.json && !isFinite(message.CalcificPercentage) ? String(message.CalcificPercentage) : message.CalcificPercentage;
                if (message.FibrousPercentage != null && message.hasOwnProperty("FibrousPercentage"))
                    object.FibrousPercentage = options.json && !isFinite(message.FibrousPercentage) ? String(message.FibrousPercentage) : message.FibrousPercentage;
                if (message.LipidicPercentage != null && message.hasOwnProperty("LipidicPercentage"))
                    object.LipidicPercentage = options.json && !isFinite(message.LipidicPercentage) ? String(message.LipidicPercentage) : message.LipidicPercentage;
                return object;
            };

            /**
             * Converts this MessagePlaqueParameterItem to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessagePlaqueParameterItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessagePlaqueParameterItem;
        })();

        CTCardiacCommonProtocol.MessagePlaqueParameterTable = (function() {

            /**
             * Properties of a MessagePlaqueParameterTable.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessagePlaqueParameterTable
             * @property {string} CoronaryName MessagePlaqueParameterTable CoronaryName
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem>|null} [Items] MessagePlaqueParameterTable Items
             * @property {number} SelectedID MessagePlaqueParameterTable SelectedID
             */

            /**
             * Constructs a new MessagePlaqueParameterTable.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessagePlaqueParameterTable.
             * @implements IMessagePlaqueParameterTable
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterTable=} [properties] Properties to set
             */
            function MessagePlaqueParameterTable(properties) {
                this.Items = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessagePlaqueParameterTable CoronaryName.
             * @member {string} CoronaryName
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @instance
             */
            MessagePlaqueParameterTable.prototype.CoronaryName = "";

            /**
             * MessagePlaqueParameterTable Items.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem>} Items
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @instance
             */
            MessagePlaqueParameterTable.prototype.Items = $util.emptyArray;

            /**
             * MessagePlaqueParameterTable SelectedID.
             * @member {number} SelectedID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @instance
             */
            MessagePlaqueParameterTable.prototype.SelectedID = 0;

            /**
             * Creates a new MessagePlaqueParameterTable instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterTable=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable} MessagePlaqueParameterTable instance
             */
            MessagePlaqueParameterTable.create = function create(properties) {
                return new MessagePlaqueParameterTable(properties);
            };

            /**
             * Encodes the specified MessagePlaqueParameterTable message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterTable} message MessagePlaqueParameterTable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePlaqueParameterTable.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.CoronaryName);
                if (message.Items != null && message.Items.length)
                    for (var i = 0; i < message.Items.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem.encode(message.Items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SelectedID);
                return writer;
            };

            /**
             * Encodes the specified MessagePlaqueParameterTable message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterTable} message MessagePlaqueParameterTable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessagePlaqueParameterTable.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessagePlaqueParameterTable message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable} MessagePlaqueParameterTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePlaqueParameterTable.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.CoronaryName = reader.string();
                        break;
                    case 2:
                        if (!(message.Items && message.Items.length))
                            message.Items = [];
                        message.Items.push($root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.SelectedID = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("CoronaryName"))
                    throw $util.ProtocolError("missing required 'CoronaryName'", { instance: message });
                if (!message.hasOwnProperty("SelectedID"))
                    throw $util.ProtocolError("missing required 'SelectedID'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessagePlaqueParameterTable message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable} MessagePlaqueParameterTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessagePlaqueParameterTable.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessagePlaqueParameterTable message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessagePlaqueParameterTable.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.CoronaryName))
                    return "CoronaryName: string expected";
                if (message.Items != null && message.hasOwnProperty("Items")) {
                    if (!Array.isArray(message.Items))
                        return "Items: array expected";
                    for (var i = 0; i < message.Items.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem.verify(message.Items[i]);
                        if (error)
                            return "Items." + error;
                    }
                }
                if (!$util.isInteger(message.SelectedID))
                    return "SelectedID: integer expected";
                return null;
            };

            /**
             * Creates a MessagePlaqueParameterTable message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable} MessagePlaqueParameterTable
             */
            MessagePlaqueParameterTable.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable();
                if (object.CoronaryName != null)
                    message.CoronaryName = String(object.CoronaryName);
                if (object.Items) {
                    if (!Array.isArray(object.Items))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable.Items: array expected");
                    message.Items = [];
                    for (var i = 0; i < object.Items.length; ++i) {
                        if (typeof object.Items[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable.Items: object expected");
                        message.Items[i] = $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem.fromObject(object.Items[i]);
                    }
                }
                if (object.SelectedID != null)
                    message.SelectedID = object.SelectedID | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessagePlaqueParameterTable message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable} message MessagePlaqueParameterTable
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessagePlaqueParameterTable.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Items = [];
                if (options.defaults) {
                    object.CoronaryName = "";
                    object.SelectedID = 0;
                }
                if (message.CoronaryName != null && message.hasOwnProperty("CoronaryName"))
                    object.CoronaryName = message.CoronaryName;
                if (message.Items && message.Items.length) {
                    object.Items = [];
                    for (var j = 0; j < message.Items.length; ++j)
                        object.Items[j] = $root.Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem.toObject(message.Items[j], options);
                }
                if (message.SelectedID != null && message.hasOwnProperty("SelectedID"))
                    object.SelectedID = message.SelectedID;
                return object;
            };

            /**
             * Converts this MessagePlaqueParameterTable to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessagePlaqueParameterTable.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessagePlaqueParameterTable;
        })();

        CTCardiacCommonProtocol.MessageSimpsonCurve = (function() {

            /**
             * Properties of a MessageSimpsonCurve.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageSimpsonCurve
             * @property {Mcsf.CTCardiacCommonProtocol.SimpsonCurveType} Type MessageSimpsonCurve Type
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} Value MessageSimpsonCurve Value
             */

            /**
             * Constructs a new MessageSimpsonCurve.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageSimpsonCurve.
             * @implements IMessageSimpsonCurve
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve=} [properties] Properties to set
             */
            function MessageSimpsonCurve(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageSimpsonCurve Type.
             * @member {Mcsf.CTCardiacCommonProtocol.SimpsonCurveType} Type
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @instance
             */
            MessageSimpsonCurve.prototype.Type = 0;

            /**
             * MessageSimpsonCurve Value.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds} Value
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @instance
             */
            MessageSimpsonCurve.prototype.Value = null;

            /**
             * Creates a new MessageSimpsonCurve instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve} MessageSimpsonCurve instance
             */
            MessageSimpsonCurve.create = function create(properties) {
                return new MessageSimpsonCurve(properties);
            };

            /**
             * Encodes the specified MessageSimpsonCurve message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve} message MessageSimpsonCurve message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSimpsonCurve.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.encode(message.Value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageSimpsonCurve message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve} message MessageSimpsonCurve message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSimpsonCurve.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageSimpsonCurve message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve} MessageSimpsonCurve
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSimpsonCurve.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Type = reader.int32();
                        break;
                    case 2:
                        message.Value = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("Type"))
                    throw $util.ProtocolError("missing required 'Type'", { instance: message });
                if (!message.hasOwnProperty("Value"))
                    throw $util.ProtocolError("missing required 'Value'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageSimpsonCurve message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve} MessageSimpsonCurve
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSimpsonCurve.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageSimpsonCurve message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageSimpsonCurve.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify(message.Value);
                    if (error)
                        return "Value." + error;
                }
                return null;
            };

            /**
             * Creates a MessageSimpsonCurve message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve} MessageSimpsonCurve
             */
            MessageSimpsonCurve.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve();
                switch (object.Type) {
                case "SimpsonCurveType_LeftVentricleVolume":
                case 0:
                    message.Type = 0;
                    break;
                case "SimpsonCurveType_RightVentricleVolume":
                case 1:
                    message.Type = 1;
                    break;
                case "SimpsonCurveType_VentricleWallThickness":
                case 2:
                    message.Type = 2;
                    break;
                case "SimpsonCurveType_VentricleWallThickening":
                case 3:
                    message.Type = 3;
                    break;
                case "SimpsonCurveType_VentricleWallMotion":
                case 4:
                    message.Type = 4;
                    break;
                }
                if (object.Value != null) {
                    if (typeof object.Value !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.Value: object expected");
                    message.Value = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.fromObject(object.Value);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageSimpsonCurve message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve} message MessageSimpsonCurve
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageSimpsonCurve.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Type = options.enums === String ? "SimpsonCurveType_LeftVentricleVolume" : 0;
                    object.Value = null;
                }
                if (message.Type != null && message.hasOwnProperty("Type"))
                    object.Type = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.SimpsonCurveType[message.Type] : message.Type;
                if (message.Value != null && message.hasOwnProperty("Value"))
                    object.Value = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.toObject(message.Value, options);
                return object;
            };

            /**
             * Converts this MessageSimpsonCurve to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageSimpsonCurve.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageSimpsonCurve;
        })();

        CTCardiacCommonProtocol.MessageSimpsonCurveList = (function() {

            /**
             * Properties of a MessageSimpsonCurveList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageSimpsonCurveList
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve>|null} [SimpsonCurve] MessageSimpsonCurveList SimpsonCurve
             */

            /**
             * Constructs a new MessageSimpsonCurveList.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageSimpsonCurveList.
             * @implements IMessageSimpsonCurveList
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurveList=} [properties] Properties to set
             */
            function MessageSimpsonCurveList(properties) {
                this.SimpsonCurve = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageSimpsonCurveList SimpsonCurve.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve>} SimpsonCurve
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @instance
             */
            MessageSimpsonCurveList.prototype.SimpsonCurve = $util.emptyArray;

            /**
             * Creates a new MessageSimpsonCurveList instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurveList=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList} MessageSimpsonCurveList instance
             */
            MessageSimpsonCurveList.create = function create(properties) {
                return new MessageSimpsonCurveList(properties);
            };

            /**
             * Encodes the specified MessageSimpsonCurveList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurveList} message MessageSimpsonCurveList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSimpsonCurveList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.SimpsonCurve != null && message.SimpsonCurve.length)
                    for (var i = 0; i < message.SimpsonCurve.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.encode(message.SimpsonCurve[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageSimpsonCurveList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurveList} message MessageSimpsonCurveList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSimpsonCurveList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageSimpsonCurveList message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList} MessageSimpsonCurveList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSimpsonCurveList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.SimpsonCurve && message.SimpsonCurve.length))
                            message.SimpsonCurve = [];
                        message.SimpsonCurve.push($root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageSimpsonCurveList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList} MessageSimpsonCurveList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSimpsonCurveList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageSimpsonCurveList message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageSimpsonCurveList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.SimpsonCurve != null && message.hasOwnProperty("SimpsonCurve")) {
                    if (!Array.isArray(message.SimpsonCurve))
                        return "SimpsonCurve: array expected";
                    for (var i = 0; i < message.SimpsonCurve.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.verify(message.SimpsonCurve[i]);
                        if (error)
                            return "SimpsonCurve." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageSimpsonCurveList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList} MessageSimpsonCurveList
             */
            MessageSimpsonCurveList.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList();
                if (object.SimpsonCurve) {
                    if (!Array.isArray(object.SimpsonCurve))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList.SimpsonCurve: array expected");
                    message.SimpsonCurve = [];
                    for (var i = 0; i < object.SimpsonCurve.length; ++i) {
                        if (typeof object.SimpsonCurve[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList.SimpsonCurve: object expected");
                        message.SimpsonCurve[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.fromObject(object.SimpsonCurve[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageSimpsonCurveList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList} message MessageSimpsonCurveList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageSimpsonCurveList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.SimpsonCurve = [];
                if (message.SimpsonCurve && message.SimpsonCurve.length) {
                    object.SimpsonCurve = [];
                    for (var j = 0; j < message.SimpsonCurve.length; ++j)
                        object.SimpsonCurve[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.toObject(message.SimpsonCurve[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageSimpsonCurveList to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageSimpsonCurveList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageSimpsonCurveList;
        })();

        CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo = (function() {

            /**
             * Properties of a MessageSimpsonBullEyeMapInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageSimpsonBullEyeMapInfo
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} CenterPoint MessageSimpsonBullEyeMapInfo CenterPoint
             * @property {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} OuterPoint MessageSimpsonBullEyeMapInfo OuterPoint
             * @property {Array.<number>|null} [MeanValue] MessageSimpsonBullEyeMapInfo MeanValue
             * @property {string} PsuedoColorKey MessageSimpsonBullEyeMapInfo PsuedoColorKey
             */

            /**
             * Constructs a new MessageSimpsonBullEyeMapInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageSimpsonBullEyeMapInfo.
             * @implements IMessageSimpsonBullEyeMapInfo
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonBullEyeMapInfo=} [properties] Properties to set
             */
            function MessageSimpsonBullEyeMapInfo(properties) {
                this.MeanValue = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageSimpsonBullEyeMapInfo CenterPoint.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} CenterPoint
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @instance
             */
            MessageSimpsonBullEyeMapInfo.prototype.CenterPoint = null;

            /**
             * MessageSimpsonBullEyeMapInfo OuterPoint.
             * @member {Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D} OuterPoint
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @instance
             */
            MessageSimpsonBullEyeMapInfo.prototype.OuterPoint = null;

            /**
             * MessageSimpsonBullEyeMapInfo MeanValue.
             * @member {Array.<number>} MeanValue
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @instance
             */
            MessageSimpsonBullEyeMapInfo.prototype.MeanValue = $util.emptyArray;

            /**
             * MessageSimpsonBullEyeMapInfo PsuedoColorKey.
             * @member {string} PsuedoColorKey
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @instance
             */
            MessageSimpsonBullEyeMapInfo.prototype.PsuedoColorKey = "";

            /**
             * Creates a new MessageSimpsonBullEyeMapInfo instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonBullEyeMapInfo=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo} MessageSimpsonBullEyeMapInfo instance
             */
            MessageSimpsonBullEyeMapInfo.create = function create(properties) {
                return new MessageSimpsonBullEyeMapInfo(properties);
            };

            /**
             * Encodes the specified MessageSimpsonBullEyeMapInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonBullEyeMapInfo} message MessageSimpsonBullEyeMapInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSimpsonBullEyeMapInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.encode(message.CenterPoint, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.encode(message.OuterPoint, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.MeanValue != null && message.MeanValue.length)
                    for (var i = 0; i < message.MeanValue.length; ++i)
                        writer.uint32(/* id 3, wireType 1 =*/25).double(message.MeanValue[i]);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.PsuedoColorKey);
                return writer;
            };

            /**
             * Encodes the specified MessageSimpsonBullEyeMapInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSimpsonBullEyeMapInfo} message MessageSimpsonBullEyeMapInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSimpsonBullEyeMapInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageSimpsonBullEyeMapInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo} MessageSimpsonBullEyeMapInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSimpsonBullEyeMapInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.CenterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.OuterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.decode(reader, reader.uint32());
                        break;
                    case 3:
                        if (!(message.MeanValue && message.MeanValue.length))
                            message.MeanValue = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.MeanValue.push(reader.double());
                        } else
                            message.MeanValue.push(reader.double());
                        break;
                    case 4:
                        message.PsuedoColorKey = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("CenterPoint"))
                    throw $util.ProtocolError("missing required 'CenterPoint'", { instance: message });
                if (!message.hasOwnProperty("OuterPoint"))
                    throw $util.ProtocolError("missing required 'OuterPoint'", { instance: message });
                if (!message.hasOwnProperty("PsuedoColorKey"))
                    throw $util.ProtocolError("missing required 'PsuedoColorKey'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageSimpsonBullEyeMapInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo} MessageSimpsonBullEyeMapInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSimpsonBullEyeMapInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageSimpsonBullEyeMapInfo message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageSimpsonBullEyeMapInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify(message.CenterPoint);
                    if (error)
                        return "CenterPoint." + error;
                }
                {
                    var error = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify(message.OuterPoint);
                    if (error)
                        return "OuterPoint." + error;
                }
                if (message.MeanValue != null && message.hasOwnProperty("MeanValue")) {
                    if (!Array.isArray(message.MeanValue))
                        return "MeanValue: array expected";
                    for (var i = 0; i < message.MeanValue.length; ++i)
                        if (typeof message.MeanValue[i] !== "number")
                            return "MeanValue: number[] expected";
                }
                if (!$util.isString(message.PsuedoColorKey))
                    return "PsuedoColorKey: string expected";
                return null;
            };

            /**
             * Creates a MessageSimpsonBullEyeMapInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo} MessageSimpsonBullEyeMapInfo
             */
            MessageSimpsonBullEyeMapInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo();
                if (object.CenterPoint != null) {
                    if (typeof object.CenterPoint !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo.CenterPoint: object expected");
                    message.CenterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.fromObject(object.CenterPoint);
                }
                if (object.OuterPoint != null) {
                    if (typeof object.OuterPoint !== "object")
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo.OuterPoint: object expected");
                    message.OuterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.fromObject(object.OuterPoint);
                }
                if (object.MeanValue) {
                    if (!Array.isArray(object.MeanValue))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo.MeanValue: array expected");
                    message.MeanValue = [];
                    for (var i = 0; i < object.MeanValue.length; ++i)
                        message.MeanValue[i] = Number(object.MeanValue[i]);
                }
                if (object.PsuedoColorKey != null)
                    message.PsuedoColorKey = String(object.PsuedoColorKey);
                return message;
            };

            /**
             * Creates a plain object from a MessageSimpsonBullEyeMapInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo} message MessageSimpsonBullEyeMapInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageSimpsonBullEyeMapInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.MeanValue = [];
                if (options.defaults) {
                    object.CenterPoint = null;
                    object.OuterPoint = null;
                    object.PsuedoColorKey = "";
                }
                if (message.CenterPoint != null && message.hasOwnProperty("CenterPoint"))
                    object.CenterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.toObject(message.CenterPoint, options);
                if (message.OuterPoint != null && message.hasOwnProperty("OuterPoint"))
                    object.OuterPoint = $root.Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.toObject(message.OuterPoint, options);
                if (message.MeanValue && message.MeanValue.length) {
                    object.MeanValue = [];
                    for (var j = 0; j < message.MeanValue.length; ++j)
                        object.MeanValue[j] = options.json && !isFinite(message.MeanValue[j]) ? String(message.MeanValue[j]) : message.MeanValue[j];
                }
                if (message.PsuedoColorKey != null && message.hasOwnProperty("PsuedoColorKey"))
                    object.PsuedoColorKey = message.PsuedoColorKey;
                return object;
            };

            /**
             * Converts this MessageSimpsonBullEyeMapInfo to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageSimpsonBullEyeMapInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageSimpsonBullEyeMapInfo;
        })();

        CTCardiacCommonProtocol.MessageCoronaryOrientation = (function() {

            /**
             * Properties of a MessageCoronaryOrientation.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageCoronaryOrientation
             * @property {Mcsf.CTCardiacCommonProtocol.CoronaryOrientationType} OrientationType MessageCoronaryOrientation OrientationType
             */

            /**
             * Constructs a new MessageCoronaryOrientation.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageCoronaryOrientation.
             * @implements IMessageCoronaryOrientation
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCoronaryOrientation=} [properties] Properties to set
             */
            function MessageCoronaryOrientation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageCoronaryOrientation OrientationType.
             * @member {Mcsf.CTCardiacCommonProtocol.CoronaryOrientationType} OrientationType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @instance
             */
            MessageCoronaryOrientation.prototype.OrientationType = 1;

            /**
             * Creates a new MessageCoronaryOrientation instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCoronaryOrientation=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation} MessageCoronaryOrientation instance
             */
            MessageCoronaryOrientation.create = function create(properties) {
                return new MessageCoronaryOrientation(properties);
            };

            /**
             * Encodes the specified MessageCoronaryOrientation message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCoronaryOrientation} message MessageCoronaryOrientation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCoronaryOrientation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.OrientationType);
                return writer;
            };

            /**
             * Encodes the specified MessageCoronaryOrientation message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCoronaryOrientation} message MessageCoronaryOrientation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCoronaryOrientation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageCoronaryOrientation message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation} MessageCoronaryOrientation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCoronaryOrientation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.OrientationType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("OrientationType"))
                    throw $util.ProtocolError("missing required 'OrientationType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageCoronaryOrientation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation} MessageCoronaryOrientation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCoronaryOrientation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageCoronaryOrientation message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageCoronaryOrientation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.OrientationType) {
                default:
                    return "OrientationType: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    break;
                }
                return null;
            };

            /**
             * Creates a MessageCoronaryOrientation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation} MessageCoronaryOrientation
             */
            MessageCoronaryOrientation.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation();
                switch (object.OrientationType) {
                case "LeftAnteriorObliquePosition_0_Skull_0":
                case 1:
                    message.OrientationType = 1;
                    break;
                case "LeftAnteriorObliquePosition_20_Skull_0":
                case 2:
                    message.OrientationType = 2;
                    break;
                case "LeftAnteriorObliquePosition_20_Skull_30":
                case 3:
                    message.OrientationType = 3;
                    break;
                case "LeftAnteriorObliquePosition_0_Skull_45":
                case 4:
                    message.OrientationType = 4;
                    break;
                case "RightAnteriorObliquePosition_30_Skull_40":
                case 5:
                    message.OrientationType = 5;
                    break;
                case "RightAnteriorObliquePosition_30_Tail_20":
                case 6:
                    message.OrientationType = 6;
                    break;
                case "LeftAnteriorObliquePosition_0_Tail_40":
                case 7:
                    message.OrientationType = 7;
                    break;
                case "LeftAnteriorObliquePosition_40_Tail_30":
                case 8:
                    message.OrientationType = 8;
                    break;
                case "LeftAnteriorObliquePosition_60_Skull_0":
                case 9:
                    message.OrientationType = 9;
                    break;
                case "LeftAnteriorObliquePosition_20_Tail_20":
                case 10:
                    message.OrientationType = 10;
                    break;
                case "RightAnteriorObliquePosition_30_Skull_0":
                case 11:
                    message.OrientationType = 11;
                    break;
                case "CoronaryOrientationType_None":
                case 12:
                    message.OrientationType = 12;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageCoronaryOrientation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation} message MessageCoronaryOrientation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageCoronaryOrientation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.OrientationType = options.enums === String ? "LeftAnteriorObliquePosition_0_Skull_0" : 1;
                if (message.OrientationType != null && message.hasOwnProperty("OrientationType"))
                    object.OrientationType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.CoronaryOrientationType[message.OrientationType] : message.OrientationType;
                return object;
            };

            /**
             * Converts this MessageCoronaryOrientation to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageCoronaryOrientation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageCoronaryOrientation;
        })();

        CTCardiacCommonProtocol.MessageBookMarkInfo = (function() {

            /**
             * Properties of a MessageBookMarkInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageBookMarkInfo
             * @property {string} VolumeUIDED MessageBookMarkInfo VolumeUIDED
             * @property {string} VolumeUIDES MessageBookMarkInfo VolumeUIDES
             * @property {boolean} ShowPapillaryMuscle MessageBookMarkInfo ShowPapillaryMuscle
             */

            /**
             * Constructs a new MessageBookMarkInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageBookMarkInfo.
             * @implements IMessageBookMarkInfo
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBookMarkInfo=} [properties] Properties to set
             */
            function MessageBookMarkInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageBookMarkInfo VolumeUIDED.
             * @member {string} VolumeUIDED
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @instance
             */
            MessageBookMarkInfo.prototype.VolumeUIDED = "";

            /**
             * MessageBookMarkInfo VolumeUIDES.
             * @member {string} VolumeUIDES
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @instance
             */
            MessageBookMarkInfo.prototype.VolumeUIDES = "";

            /**
             * MessageBookMarkInfo ShowPapillaryMuscle.
             * @member {boolean} ShowPapillaryMuscle
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @instance
             */
            MessageBookMarkInfo.prototype.ShowPapillaryMuscle = false;

            /**
             * Creates a new MessageBookMarkInfo instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBookMarkInfo=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo} MessageBookMarkInfo instance
             */
            MessageBookMarkInfo.create = function create(properties) {
                return new MessageBookMarkInfo(properties);
            };

            /**
             * Encodes the specified MessageBookMarkInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBookMarkInfo} message MessageBookMarkInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageBookMarkInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.VolumeUIDED);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.VolumeUIDES);
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ShowPapillaryMuscle);
                return writer;
            };

            /**
             * Encodes the specified MessageBookMarkInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBookMarkInfo} message MessageBookMarkInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageBookMarkInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageBookMarkInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo} MessageBookMarkInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageBookMarkInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.VolumeUIDED = reader.string();
                        break;
                    case 2:
                        message.VolumeUIDES = reader.string();
                        break;
                    case 3:
                        message.ShowPapillaryMuscle = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("VolumeUIDED"))
                    throw $util.ProtocolError("missing required 'VolumeUIDED'", { instance: message });
                if (!message.hasOwnProperty("VolumeUIDES"))
                    throw $util.ProtocolError("missing required 'VolumeUIDES'", { instance: message });
                if (!message.hasOwnProperty("ShowPapillaryMuscle"))
                    throw $util.ProtocolError("missing required 'ShowPapillaryMuscle'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageBookMarkInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo} MessageBookMarkInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageBookMarkInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageBookMarkInfo message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageBookMarkInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.VolumeUIDED))
                    return "VolumeUIDED: string expected";
                if (!$util.isString(message.VolumeUIDES))
                    return "VolumeUIDES: string expected";
                if (typeof message.ShowPapillaryMuscle !== "boolean")
                    return "ShowPapillaryMuscle: boolean expected";
                return null;
            };

            /**
             * Creates a MessageBookMarkInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo} MessageBookMarkInfo
             */
            MessageBookMarkInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo();
                if (object.VolumeUIDED != null)
                    message.VolumeUIDED = String(object.VolumeUIDED);
                if (object.VolumeUIDES != null)
                    message.VolumeUIDES = String(object.VolumeUIDES);
                if (object.ShowPapillaryMuscle != null)
                    message.ShowPapillaryMuscle = Boolean(object.ShowPapillaryMuscle);
                return message;
            };

            /**
             * Creates a plain object from a MessageBookMarkInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo} message MessageBookMarkInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageBookMarkInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.VolumeUIDED = "";
                    object.VolumeUIDES = "";
                    object.ShowPapillaryMuscle = false;
                }
                if (message.VolumeUIDED != null && message.hasOwnProperty("VolumeUIDED"))
                    object.VolumeUIDED = message.VolumeUIDED;
                if (message.VolumeUIDES != null && message.hasOwnProperty("VolumeUIDES"))
                    object.VolumeUIDES = message.VolumeUIDES;
                if (message.ShowPapillaryMuscle != null && message.hasOwnProperty("ShowPapillaryMuscle"))
                    object.ShowPapillaryMuscle = message.ShowPapillaryMuscle;
                return object;
            };

            /**
             * Converts this MessageBookMarkInfo to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageBookMarkInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageBookMarkInfo;
        })();

        CTCardiacCommonProtocol.MessageBookmarkStatus = (function() {

            /**
             * Properties of a MessageBookmarkStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageBookmarkStatus
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus>|null} [Status] MessageBookmarkStatus Status
             */

            /**
             * Constructs a new MessageBookmarkStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageBookmarkStatus.
             * @implements IMessageBookmarkStatus
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBookmarkStatus=} [properties] Properties to set
             */
            function MessageBookmarkStatus(properties) {
                this.Status = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageBookmarkStatus Status.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus>} Status
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @instance
             */
            MessageBookmarkStatus.prototype.Status = $util.emptyArray;

            /**
             * Creates a new MessageBookmarkStatus instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBookmarkStatus=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus} MessageBookmarkStatus instance
             */
            MessageBookmarkStatus.create = function create(properties) {
                return new MessageBookmarkStatus(properties);
            };

            /**
             * Encodes the specified MessageBookmarkStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBookmarkStatus} message MessageBookmarkStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageBookmarkStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Status != null && message.Status.length)
                    for (var i = 0; i < message.Status.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus.encode(message.Status[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageBookmarkStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageBookmarkStatus} message MessageBookmarkStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageBookmarkStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageBookmarkStatus message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus} MessageBookmarkStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageBookmarkStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Status && message.Status.length))
                            message.Status = [];
                        message.Status.push($root.Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageBookmarkStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus} MessageBookmarkStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageBookmarkStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageBookmarkStatus message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageBookmarkStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Status != null && message.hasOwnProperty("Status")) {
                    if (!Array.isArray(message.Status))
                        return "Status: array expected";
                    for (var i = 0; i < message.Status.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus.verify(message.Status[i]);
                        if (error)
                            return "Status." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageBookmarkStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus} MessageBookmarkStatus
             */
            MessageBookmarkStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus();
                if (object.Status) {
                    if (!Array.isArray(object.Status))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus.Status: array expected");
                    message.Status = [];
                    for (var i = 0; i < object.Status.length; ++i) {
                        if (typeof object.Status[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus.Status: object expected");
                        message.Status[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus.fromObject(object.Status[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageBookmarkStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus} message MessageBookmarkStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageBookmarkStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Status = [];
                if (message.Status && message.Status.length) {
                    object.Status = [];
                    for (var j = 0; j < message.Status.length; ++j)
                        object.Status[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus.toObject(message.Status[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageBookmarkStatus to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageBookmarkStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageBookmarkStatus;
        })();

        CTCardiacCommonProtocol.MessageWorkStepStatus = (function() {

            /**
             * Properties of a MessageWorkStepStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageWorkStepStatus
             * @property {string} WorkStepName MessageWorkStepStatus WorkStepName
             * @property {Uint8Array} WorkStepStatus MessageWorkStepStatus WorkStepStatus
             */

            /**
             * Constructs a new MessageWorkStepStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageWorkStepStatus.
             * @implements IMessageWorkStepStatus
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus=} [properties] Properties to set
             */
            function MessageWorkStepStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageWorkStepStatus WorkStepName.
             * @member {string} WorkStepName
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @instance
             */
            MessageWorkStepStatus.prototype.WorkStepName = "";

            /**
             * MessageWorkStepStatus WorkStepStatus.
             * @member {Uint8Array} WorkStepStatus
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @instance
             */
            MessageWorkStepStatus.prototype.WorkStepStatus = $util.newBuffer([]);

            /**
             * Creates a new MessageWorkStepStatus instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus} MessageWorkStepStatus instance
             */
            MessageWorkStepStatus.create = function create(properties) {
                return new MessageWorkStepStatus(properties);
            };

            /**
             * Encodes the specified MessageWorkStepStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus} message MessageWorkStepStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageWorkStepStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.WorkStepName);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.WorkStepStatus);
                return writer;
            };

            /**
             * Encodes the specified MessageWorkStepStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus} message MessageWorkStepStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageWorkStepStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageWorkStepStatus message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus} MessageWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageWorkStepStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.WorkStepName = reader.string();
                        break;
                    case 2:
                        message.WorkStepStatus = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("WorkStepName"))
                    throw $util.ProtocolError("missing required 'WorkStepName'", { instance: message });
                if (!message.hasOwnProperty("WorkStepStatus"))
                    throw $util.ProtocolError("missing required 'WorkStepStatus'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageWorkStepStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus} MessageWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageWorkStepStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageWorkStepStatus message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageWorkStepStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.WorkStepName))
                    return "WorkStepName: string expected";
                if (!(message.WorkStepStatus && typeof message.WorkStepStatus.length === "number" || $util.isString(message.WorkStepStatus)))
                    return "WorkStepStatus: buffer expected";
                return null;
            };

            /**
             * Creates a MessageWorkStepStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus} MessageWorkStepStatus
             */
            MessageWorkStepStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus();
                if (object.WorkStepName != null)
                    message.WorkStepName = String(object.WorkStepName);
                if (object.WorkStepStatus != null)
                    if (typeof object.WorkStepStatus === "string")
                        $util.base64.decode(object.WorkStepStatus, message.WorkStepStatus = $util.newBuffer($util.base64.length(object.WorkStepStatus)), 0);
                    else if (object.WorkStepStatus.length)
                        message.WorkStepStatus = object.WorkStepStatus;
                return message;
            };

            /**
             * Creates a plain object from a MessageWorkStepStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus} message MessageWorkStepStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageWorkStepStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.WorkStepName = "";
                    if (options.bytes === String)
                        object.WorkStepStatus = "";
                    else {
                        object.WorkStepStatus = [];
                        if (options.bytes !== Array)
                            object.WorkStepStatus = $util.newBuffer(object.WorkStepStatus);
                    }
                }
                if (message.WorkStepName != null && message.hasOwnProperty("WorkStepName"))
                    object.WorkStepName = message.WorkStepName;
                if (message.WorkStepStatus != null && message.hasOwnProperty("WorkStepStatus"))
                    object.WorkStepStatus = options.bytes === String ? $util.base64.encode(message.WorkStepStatus, 0, message.WorkStepStatus.length) : options.bytes === Array ? Array.prototype.slice.call(message.WorkStepStatus) : message.WorkStepStatus;
                return object;
            };

            /**
             * Converts this MessageWorkStepStatus to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageWorkStepStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageWorkStepStatus;
        })();

        CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus = (function() {

            /**
             * Properties of a MessageCoronaryWorkStepStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageCoronaryWorkStepStatus
             * @property {boolean} IsShowCoronarySinus MessageCoronaryWorkStepStatus IsShowCoronarySinus
             */

            /**
             * Constructs a new MessageCoronaryWorkStepStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageCoronaryWorkStepStatus.
             * @implements IMessageCoronaryWorkStepStatus
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCoronaryWorkStepStatus=} [properties] Properties to set
             */
            function MessageCoronaryWorkStepStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageCoronaryWorkStepStatus IsShowCoronarySinus.
             * @member {boolean} IsShowCoronarySinus
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @instance
             */
            MessageCoronaryWorkStepStatus.prototype.IsShowCoronarySinus = false;

            /**
             * Creates a new MessageCoronaryWorkStepStatus instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCoronaryWorkStepStatus=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus} MessageCoronaryWorkStepStatus instance
             */
            MessageCoronaryWorkStepStatus.create = function create(properties) {
                return new MessageCoronaryWorkStepStatus(properties);
            };

            /**
             * Encodes the specified MessageCoronaryWorkStepStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCoronaryWorkStepStatus} message MessageCoronaryWorkStepStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCoronaryWorkStepStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.IsShowCoronarySinus);
                return writer;
            };

            /**
             * Encodes the specified MessageCoronaryWorkStepStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageCoronaryWorkStepStatus} message MessageCoronaryWorkStepStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageCoronaryWorkStepStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageCoronaryWorkStepStatus message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus} MessageCoronaryWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCoronaryWorkStepStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.IsShowCoronarySinus = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("IsShowCoronarySinus"))
                    throw $util.ProtocolError("missing required 'IsShowCoronarySinus'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageCoronaryWorkStepStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus} MessageCoronaryWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageCoronaryWorkStepStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageCoronaryWorkStepStatus message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageCoronaryWorkStepStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.IsShowCoronarySinus !== "boolean")
                    return "IsShowCoronarySinus: boolean expected";
                return null;
            };

            /**
             * Creates a MessageCoronaryWorkStepStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus} MessageCoronaryWorkStepStatus
             */
            MessageCoronaryWorkStepStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus();
                if (object.IsShowCoronarySinus != null)
                    message.IsShowCoronarySinus = Boolean(object.IsShowCoronarySinus);
                return message;
            };

            /**
             * Creates a plain object from a MessageCoronaryWorkStepStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus} message MessageCoronaryWorkStepStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageCoronaryWorkStepStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.IsShowCoronarySinus = false;
                if (message.IsShowCoronarySinus != null && message.hasOwnProperty("IsShowCoronarySinus"))
                    object.IsShowCoronarySinus = message.IsShowCoronarySinus;
                return object;
            };

            /**
             * Converts this MessageCoronaryWorkStepStatus to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageCoronaryWorkStepStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageCoronaryWorkStepStatus;
        })();

        CTCardiacCommonProtocol.MessageChangeSliderLocationParams = (function() {

            /**
             * Properties of a MessageChangeSliderLocationParams.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageChangeSliderLocationParams
             * @property {Mcsf.CTCardiacCommonProtocol.StenosisMarkType|null} [SliderType] MessageChangeSliderLocationParams SliderType
             * @property {Mcsf.CTCardiacCommonProtocol.SliderLocationChangeType} ChangeType MessageChangeSliderLocationParams ChangeType
             * @property {number} ChangeValue MessageChangeSliderLocationParams ChangeValue
             */

            /**
             * Constructs a new MessageChangeSliderLocationParams.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageChangeSliderLocationParams.
             * @implements IMessageChangeSliderLocationParams
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageChangeSliderLocationParams=} [properties] Properties to set
             */
            function MessageChangeSliderLocationParams(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageChangeSliderLocationParams SliderType.
             * @member {Mcsf.CTCardiacCommonProtocol.StenosisMarkType} SliderType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @instance
             */
            MessageChangeSliderLocationParams.prototype.SliderType = 0;

            /**
             * MessageChangeSliderLocationParams ChangeType.
             * @member {Mcsf.CTCardiacCommonProtocol.SliderLocationChangeType} ChangeType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @instance
             */
            MessageChangeSliderLocationParams.prototype.ChangeType = 1;

            /**
             * MessageChangeSliderLocationParams ChangeValue.
             * @member {number} ChangeValue
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @instance
             */
            MessageChangeSliderLocationParams.prototype.ChangeValue = 0;

            /**
             * Creates a new MessageChangeSliderLocationParams instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageChangeSliderLocationParams=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams} MessageChangeSliderLocationParams instance
             */
            MessageChangeSliderLocationParams.create = function create(properties) {
                return new MessageChangeSliderLocationParams(properties);
            };

            /**
             * Encodes the specified MessageChangeSliderLocationParams message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageChangeSliderLocationParams} message MessageChangeSliderLocationParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageChangeSliderLocationParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.SliderType != null && Object.hasOwnProperty.call(message, "SliderType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SliderType);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ChangeType);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ChangeValue);
                return writer;
            };

            /**
             * Encodes the specified MessageChangeSliderLocationParams message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageChangeSliderLocationParams} message MessageChangeSliderLocationParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageChangeSliderLocationParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageChangeSliderLocationParams message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams} MessageChangeSliderLocationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageChangeSliderLocationParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.SliderType = reader.int32();
                        break;
                    case 2:
                        message.ChangeType = reader.int32();
                        break;
                    case 3:
                        message.ChangeValue = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ChangeType"))
                    throw $util.ProtocolError("missing required 'ChangeType'", { instance: message });
                if (!message.hasOwnProperty("ChangeValue"))
                    throw $util.ProtocolError("missing required 'ChangeValue'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageChangeSliderLocationParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams} MessageChangeSliderLocationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageChangeSliderLocationParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageChangeSliderLocationParams message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageChangeSliderLocationParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.SliderType != null && message.hasOwnProperty("SliderType"))
                    switch (message.SliderType) {
                    default:
                        return "SliderType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                switch (message.ChangeType) {
                default:
                    return "ChangeType: enum value expected";
                case 1:
                case 2:
                    break;
                }
                if (!$util.isInteger(message.ChangeValue))
                    return "ChangeValue: integer expected";
                return null;
            };

            /**
             * Creates a MessageChangeSliderLocationParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams} MessageChangeSliderLocationParams
             */
            MessageChangeSliderLocationParams.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams();
                switch (object.SliderType) {
                case "StenosisMarkType_Unknown":
                case 0:
                    message.SliderType = 0;
                    break;
                case "StenosisMarkType_Proximal":
                case 1:
                    message.SliderType = 1;
                    break;
                case "StenosisMarkType_Distal":
                case 2:
                    message.SliderType = 2;
                    break;
                case "StenosisMarkType_Nidus":
                case 3:
                    message.SliderType = 3;
                    break;
                }
                switch (object.ChangeType) {
                case "SliderLocationChangeType_Offset":
                case 1:
                    message.ChangeType = 1;
                    break;
                case "SliderLocationChangeType_Index":
                case 2:
                    message.ChangeType = 2;
                    break;
                }
                if (object.ChangeValue != null)
                    message.ChangeValue = object.ChangeValue | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessageChangeSliderLocationParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams} message MessageChangeSliderLocationParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageChangeSliderLocationParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.SliderType = options.enums === String ? "StenosisMarkType_Unknown" : 0;
                    object.ChangeType = options.enums === String ? "SliderLocationChangeType_Offset" : 1;
                    object.ChangeValue = 0;
                }
                if (message.SliderType != null && message.hasOwnProperty("SliderType"))
                    object.SliderType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StenosisMarkType[message.SliderType] : message.SliderType;
                if (message.ChangeType != null && message.hasOwnProperty("ChangeType"))
                    object.ChangeType = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.SliderLocationChangeType[message.ChangeType] : message.ChangeType;
                if (message.ChangeValue != null && message.hasOwnProperty("ChangeValue"))
                    object.ChangeValue = message.ChangeValue;
                return object;
            };

            /**
             * Converts this MessageChangeSliderLocationParams to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageChangeSliderLocationParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageChangeSliderLocationParams;
        })();

        CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus = (function() {

            /**
             * Properties of a MessageFunctionalWorkStepStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageFunctionalWorkStepStatus
             * @property {number} bsaHeight MessageFunctionalWorkStepStatus bsaHeight
             * @property {number} bsaWeight MessageFunctionalWorkStepStatus bsaWeight
             * @property {number} ValveType MessageFunctionalWorkStepStatus ValveType
             */

            /**
             * Constructs a new MessageFunctionalWorkStepStatus.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageFunctionalWorkStepStatus.
             * @implements IMessageFunctionalWorkStepStatus
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageFunctionalWorkStepStatus=} [properties] Properties to set
             */
            function MessageFunctionalWorkStepStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageFunctionalWorkStepStatus bsaHeight.
             * @member {number} bsaHeight
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @instance
             */
            MessageFunctionalWorkStepStatus.prototype.bsaHeight = 0;

            /**
             * MessageFunctionalWorkStepStatus bsaWeight.
             * @member {number} bsaWeight
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @instance
             */
            MessageFunctionalWorkStepStatus.prototype.bsaWeight = 0;

            /**
             * MessageFunctionalWorkStepStatus ValveType.
             * @member {number} ValveType
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @instance
             */
            MessageFunctionalWorkStepStatus.prototype.ValveType = 0;

            /**
             * Creates a new MessageFunctionalWorkStepStatus instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageFunctionalWorkStepStatus=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus} MessageFunctionalWorkStepStatus instance
             */
            MessageFunctionalWorkStepStatus.create = function create(properties) {
                return new MessageFunctionalWorkStepStatus(properties);
            };

            /**
             * Encodes the specified MessageFunctionalWorkStepStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageFunctionalWorkStepStatus} message MessageFunctionalWorkStepStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageFunctionalWorkStepStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bsaHeight);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bsaWeight);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ValveType);
                return writer;
            };

            /**
             * Encodes the specified MessageFunctionalWorkStepStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageFunctionalWorkStepStatus} message MessageFunctionalWorkStepStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageFunctionalWorkStepStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageFunctionalWorkStepStatus message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus} MessageFunctionalWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageFunctionalWorkStepStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bsaHeight = reader.int32();
                        break;
                    case 2:
                        message.bsaWeight = reader.int32();
                        break;
                    case 3:
                        message.ValveType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("bsaHeight"))
                    throw $util.ProtocolError("missing required 'bsaHeight'", { instance: message });
                if (!message.hasOwnProperty("bsaWeight"))
                    throw $util.ProtocolError("missing required 'bsaWeight'", { instance: message });
                if (!message.hasOwnProperty("ValveType"))
                    throw $util.ProtocolError("missing required 'ValveType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageFunctionalWorkStepStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus} MessageFunctionalWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageFunctionalWorkStepStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageFunctionalWorkStepStatus message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageFunctionalWorkStepStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.bsaHeight))
                    return "bsaHeight: integer expected";
                if (!$util.isInteger(message.bsaWeight))
                    return "bsaWeight: integer expected";
                if (!$util.isInteger(message.ValveType))
                    return "ValveType: integer expected";
                return null;
            };

            /**
             * Creates a MessageFunctionalWorkStepStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus} MessageFunctionalWorkStepStatus
             */
            MessageFunctionalWorkStepStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus();
                if (object.bsaHeight != null)
                    message.bsaHeight = object.bsaHeight | 0;
                if (object.bsaWeight != null)
                    message.bsaWeight = object.bsaWeight | 0;
                if (object.ValveType != null)
                    message.ValveType = object.ValveType | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessageFunctionalWorkStepStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus} message MessageFunctionalWorkStepStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageFunctionalWorkStepStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.bsaHeight = 0;
                    object.bsaWeight = 0;
                    object.ValveType = 0;
                }
                if (message.bsaHeight != null && message.hasOwnProperty("bsaHeight"))
                    object.bsaHeight = message.bsaHeight;
                if (message.bsaWeight != null && message.hasOwnProperty("bsaWeight"))
                    object.bsaWeight = message.bsaWeight;
                if (message.ValveType != null && message.hasOwnProperty("ValveType"))
                    object.ValveType = message.ValveType;
                return object;
            };

            /**
             * Converts this MessageFunctionalWorkStepStatus to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageFunctionalWorkStepStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageFunctionalWorkStepStatus;
        })();

        CTCardiacCommonProtocol.MessageVolumeInfoItem = (function() {

            /**
             * Properties of a MessageVolumeInfoItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageVolumeInfoItem
             * @property {string} VolumeName MessageVolumeInfoItem VolumeName
             * @property {string} InstanceNumberRange MessageVolumeInfoItem InstanceNumberRange
             * @property {number} ImageCount MessageVolumeInfoItem ImageCount
             * @property {string} PhaseInfo MessageVolumeInfoItem PhaseInfo
             * @property {boolean} IsLoaded MessageVolumeInfoItem IsLoaded
             */

            /**
             * Constructs a new MessageVolumeInfoItem.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageVolumeInfoItem.
             * @implements IMessageVolumeInfoItem
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem=} [properties] Properties to set
             */
            function MessageVolumeInfoItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageVolumeInfoItem VolumeName.
             * @member {string} VolumeName
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @instance
             */
            MessageVolumeInfoItem.prototype.VolumeName = "";

            /**
             * MessageVolumeInfoItem InstanceNumberRange.
             * @member {string} InstanceNumberRange
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @instance
             */
            MessageVolumeInfoItem.prototype.InstanceNumberRange = "";

            /**
             * MessageVolumeInfoItem ImageCount.
             * @member {number} ImageCount
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @instance
             */
            MessageVolumeInfoItem.prototype.ImageCount = 0;

            /**
             * MessageVolumeInfoItem PhaseInfo.
             * @member {string} PhaseInfo
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @instance
             */
            MessageVolumeInfoItem.prototype.PhaseInfo = "";

            /**
             * MessageVolumeInfoItem IsLoaded.
             * @member {boolean} IsLoaded
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @instance
             */
            MessageVolumeInfoItem.prototype.IsLoaded = false;

            /**
             * Creates a new MessageVolumeInfoItem instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem} MessageVolumeInfoItem instance
             */
            MessageVolumeInfoItem.create = function create(properties) {
                return new MessageVolumeInfoItem(properties);
            };

            /**
             * Encodes the specified MessageVolumeInfoItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem} message MessageVolumeInfoItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVolumeInfoItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.VolumeName);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.InstanceNumberRange);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ImageCount);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.PhaseInfo);
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.IsLoaded);
                return writer;
            };

            /**
             * Encodes the specified MessageVolumeInfoItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem} message MessageVolumeInfoItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVolumeInfoItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageVolumeInfoItem message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem} MessageVolumeInfoItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVolumeInfoItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.VolumeName = reader.string();
                        break;
                    case 2:
                        message.InstanceNumberRange = reader.string();
                        break;
                    case 3:
                        message.ImageCount = reader.int32();
                        break;
                    case 4:
                        message.PhaseInfo = reader.string();
                        break;
                    case 5:
                        message.IsLoaded = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("VolumeName"))
                    throw $util.ProtocolError("missing required 'VolumeName'", { instance: message });
                if (!message.hasOwnProperty("InstanceNumberRange"))
                    throw $util.ProtocolError("missing required 'InstanceNumberRange'", { instance: message });
                if (!message.hasOwnProperty("ImageCount"))
                    throw $util.ProtocolError("missing required 'ImageCount'", { instance: message });
                if (!message.hasOwnProperty("PhaseInfo"))
                    throw $util.ProtocolError("missing required 'PhaseInfo'", { instance: message });
                if (!message.hasOwnProperty("IsLoaded"))
                    throw $util.ProtocolError("missing required 'IsLoaded'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageVolumeInfoItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem} MessageVolumeInfoItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVolumeInfoItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageVolumeInfoItem message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageVolumeInfoItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.VolumeName))
                    return "VolumeName: string expected";
                if (!$util.isString(message.InstanceNumberRange))
                    return "InstanceNumberRange: string expected";
                if (!$util.isInteger(message.ImageCount))
                    return "ImageCount: integer expected";
                if (!$util.isString(message.PhaseInfo))
                    return "PhaseInfo: string expected";
                if (typeof message.IsLoaded !== "boolean")
                    return "IsLoaded: boolean expected";
                return null;
            };

            /**
             * Creates a MessageVolumeInfoItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem} MessageVolumeInfoItem
             */
            MessageVolumeInfoItem.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem();
                if (object.VolumeName != null)
                    message.VolumeName = String(object.VolumeName);
                if (object.InstanceNumberRange != null)
                    message.InstanceNumberRange = String(object.InstanceNumberRange);
                if (object.ImageCount != null)
                    message.ImageCount = object.ImageCount | 0;
                if (object.PhaseInfo != null)
                    message.PhaseInfo = String(object.PhaseInfo);
                if (object.IsLoaded != null)
                    message.IsLoaded = Boolean(object.IsLoaded);
                return message;
            };

            /**
             * Creates a plain object from a MessageVolumeInfoItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem} message MessageVolumeInfoItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageVolumeInfoItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.VolumeName = "";
                    object.InstanceNumberRange = "";
                    object.ImageCount = 0;
                    object.PhaseInfo = "";
                    object.IsLoaded = false;
                }
                if (message.VolumeName != null && message.hasOwnProperty("VolumeName"))
                    object.VolumeName = message.VolumeName;
                if (message.InstanceNumberRange != null && message.hasOwnProperty("InstanceNumberRange"))
                    object.InstanceNumberRange = message.InstanceNumberRange;
                if (message.ImageCount != null && message.hasOwnProperty("ImageCount"))
                    object.ImageCount = message.ImageCount;
                if (message.PhaseInfo != null && message.hasOwnProperty("PhaseInfo"))
                    object.PhaseInfo = message.PhaseInfo;
                if (message.IsLoaded != null && message.hasOwnProperty("IsLoaded"))
                    object.IsLoaded = message.IsLoaded;
                return object;
            };

            /**
             * Converts this MessageVolumeInfoItem to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageVolumeInfoItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageVolumeInfoItem;
        })();

        CTCardiacCommonProtocol.MessageVolumeInfos = (function() {

            /**
             * Properties of a MessageVolumeInfos.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageVolumeInfos
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem>|null} [VolumeInfo] MessageVolumeInfos VolumeInfo
             */

            /**
             * Constructs a new MessageVolumeInfos.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageVolumeInfos.
             * @implements IMessageVolumeInfos
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfos=} [properties] Properties to set
             */
            function MessageVolumeInfos(properties) {
                this.VolumeInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageVolumeInfos VolumeInfo.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem>} VolumeInfo
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @instance
             */
            MessageVolumeInfos.prototype.VolumeInfo = $util.emptyArray;

            /**
             * Creates a new MessageVolumeInfos instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfos=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos} MessageVolumeInfos instance
             */
            MessageVolumeInfos.create = function create(properties) {
                return new MessageVolumeInfos(properties);
            };

            /**
             * Encodes the specified MessageVolumeInfos message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfos} message MessageVolumeInfos message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVolumeInfos.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.VolumeInfo != null && message.VolumeInfo.length)
                    for (var i = 0; i < message.VolumeInfo.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem.encode(message.VolumeInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageVolumeInfos message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfos} message MessageVolumeInfos message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageVolumeInfos.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageVolumeInfos message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos} MessageVolumeInfos
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVolumeInfos.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.VolumeInfo && message.VolumeInfo.length))
                            message.VolumeInfo = [];
                        message.VolumeInfo.push($root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageVolumeInfos message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos} MessageVolumeInfos
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageVolumeInfos.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageVolumeInfos message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageVolumeInfos.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.VolumeInfo != null && message.hasOwnProperty("VolumeInfo")) {
                    if (!Array.isArray(message.VolumeInfo))
                        return "VolumeInfo: array expected";
                    for (var i = 0; i < message.VolumeInfo.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem.verify(message.VolumeInfo[i]);
                        if (error)
                            return "VolumeInfo." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageVolumeInfos message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos} MessageVolumeInfos
             */
            MessageVolumeInfos.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos();
                if (object.VolumeInfo) {
                    if (!Array.isArray(object.VolumeInfo))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos.VolumeInfo: array expected");
                    message.VolumeInfo = [];
                    for (var i = 0; i < object.VolumeInfo.length; ++i) {
                        if (typeof object.VolumeInfo[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos.VolumeInfo: object expected");
                        message.VolumeInfo[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem.fromObject(object.VolumeInfo[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageVolumeInfos message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos} message MessageVolumeInfos
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageVolumeInfos.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.VolumeInfo = [];
                if (message.VolumeInfo && message.VolumeInfo.length) {
                    object.VolumeInfo = [];
                    for (var j = 0; j < message.VolumeInfo.length; ++j)
                        object.VolumeInfo[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem.toObject(message.VolumeInfo[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageVolumeInfos to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageVolumeInfos.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageVolumeInfos;
        })();

        CTCardiacCommonProtocol.MessageStatusNotify = (function() {

            /**
             * Properties of a MessageStatusNotify.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStatusNotify
             * @property {Mcsf.CTCardiacCommonProtocol.StatusLevel} level MessageStatusNotify level
             * @property {number} ID MessageStatusNotify ID
             * @property {string} StatusDetail MessageStatusNotify StatusDetail
             */

            /**
             * Constructs a new MessageStatusNotify.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStatusNotify.
             * @implements IMessageStatusNotify
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStatusNotify=} [properties] Properties to set
             */
            function MessageStatusNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStatusNotify level.
             * @member {Mcsf.CTCardiacCommonProtocol.StatusLevel} level
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @instance
             */
            MessageStatusNotify.prototype.level = 0;

            /**
             * MessageStatusNotify ID.
             * @member {number} ID
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @instance
             */
            MessageStatusNotify.prototype.ID = 0;

            /**
             * MessageStatusNotify StatusDetail.
             * @member {string} StatusDetail
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @instance
             */
            MessageStatusNotify.prototype.StatusDetail = "";

            /**
             * Creates a new MessageStatusNotify instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStatusNotify=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStatusNotify} MessageStatusNotify instance
             */
            MessageStatusNotify.create = function create(properties) {
                return new MessageStatusNotify(properties);
            };

            /**
             * Encodes the specified MessageStatusNotify message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStatusNotify.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStatusNotify} message MessageStatusNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStatusNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ID);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.StatusDetail);
                return writer;
            };

            /**
             * Encodes the specified MessageStatusNotify message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStatusNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStatusNotify} message MessageStatusNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStatusNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStatusNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStatusNotify} MessageStatusNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStatusNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStatusNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.level = reader.int32();
                        break;
                    case 2:
                        message.ID = reader.int32();
                        break;
                    case 3:
                        message.StatusDetail = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("level"))
                    throw $util.ProtocolError("missing required 'level'", { instance: message });
                if (!message.hasOwnProperty("ID"))
                    throw $util.ProtocolError("missing required 'ID'", { instance: message });
                if (!message.hasOwnProperty("StatusDetail"))
                    throw $util.ProtocolError("missing required 'StatusDetail'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStatusNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStatusNotify} MessageStatusNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStatusNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStatusNotify message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStatusNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.level) {
                default:
                    return "level: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
                if (!$util.isString(message.StatusDetail))
                    return "StatusDetail: string expected";
                return null;
            };

            /**
             * Creates a MessageStatusNotify message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStatusNotify} MessageStatusNotify
             */
            MessageStatusNotify.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStatusNotify)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStatusNotify();
                switch (object.level) {
                case "StatusInfo":
                case 0:
                    message.level = 0;
                    break;
                case "StatusWarn":
                case 1:
                    message.level = 1;
                    break;
                case "StatusError":
                case 2:
                    message.level = 2;
                    break;
                }
                if (object.ID != null)
                    message.ID = object.ID | 0;
                if (object.StatusDetail != null)
                    message.StatusDetail = String(object.StatusDetail);
                return message;
            };

            /**
             * Creates a plain object from a MessageStatusNotify message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStatusNotify} message MessageStatusNotify
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStatusNotify.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.level = options.enums === String ? "StatusInfo" : 0;
                    object.ID = 0;
                    object.StatusDetail = "";
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = options.enums === String ? $root.Mcsf.CTCardiacCommonProtocol.StatusLevel[message.level] : message.level;
                if (message.ID != null && message.hasOwnProperty("ID"))
                    object.ID = message.ID;
                if (message.StatusDetail != null && message.hasOwnProperty("StatusDetail"))
                    object.StatusDetail = message.StatusDetail;
                return object;
            };

            /**
             * Converts this MessageStatusNotify to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStatusNotify
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStatusNotify.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStatusNotify;
        })();

        CTCardiacCommonProtocol.MessageSelectedStenosisInfo = (function() {

            /**
             * Properties of a MessageSelectedStenosisInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageSelectedStenosisInfo
             * @property {number} Length MessageSelectedStenosisInfo Length
             * @property {number} StenosisRate MessageSelectedStenosisInfo StenosisRate
             * @property {string} findingUid MessageSelectedStenosisInfo findingUid
             */

            /**
             * Constructs a new MessageSelectedStenosisInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageSelectedStenosisInfo.
             * @implements IMessageSelectedStenosisInfo
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSelectedStenosisInfo=} [properties] Properties to set
             */
            function MessageSelectedStenosisInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageSelectedStenosisInfo Length.
             * @member {number} Length
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @instance
             */
            MessageSelectedStenosisInfo.prototype.Length = 0;

            /**
             * MessageSelectedStenosisInfo StenosisRate.
             * @member {number} StenosisRate
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @instance
             */
            MessageSelectedStenosisInfo.prototype.StenosisRate = 0;

            /**
             * MessageSelectedStenosisInfo findingUid.
             * @member {string} findingUid
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @instance
             */
            MessageSelectedStenosisInfo.prototype.findingUid = "";

            /**
             * Creates a new MessageSelectedStenosisInfo instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSelectedStenosisInfo=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo} MessageSelectedStenosisInfo instance
             */
            MessageSelectedStenosisInfo.create = function create(properties) {
                return new MessageSelectedStenosisInfo(properties);
            };

            /**
             * Encodes the specified MessageSelectedStenosisInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSelectedStenosisInfo} message MessageSelectedStenosisInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSelectedStenosisInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.Length);
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.StenosisRate);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.findingUid);
                return writer;
            };

            /**
             * Encodes the specified MessageSelectedStenosisInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageSelectedStenosisInfo} message MessageSelectedStenosisInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageSelectedStenosisInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageSelectedStenosisInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo} MessageSelectedStenosisInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSelectedStenosisInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Length = reader.double();
                        break;
                    case 2:
                        message.StenosisRate = reader.double();
                        break;
                    case 3:
                        message.findingUid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("Length"))
                    throw $util.ProtocolError("missing required 'Length'", { instance: message });
                if (!message.hasOwnProperty("StenosisRate"))
                    throw $util.ProtocolError("missing required 'StenosisRate'", { instance: message });
                if (!message.hasOwnProperty("findingUid"))
                    throw $util.ProtocolError("missing required 'findingUid'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageSelectedStenosisInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo} MessageSelectedStenosisInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageSelectedStenosisInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageSelectedStenosisInfo message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageSelectedStenosisInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.Length !== "number")
                    return "Length: number expected";
                if (typeof message.StenosisRate !== "number")
                    return "StenosisRate: number expected";
                if (!$util.isString(message.findingUid))
                    return "findingUid: string expected";
                return null;
            };

            /**
             * Creates a MessageSelectedStenosisInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo} MessageSelectedStenosisInfo
             */
            MessageSelectedStenosisInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo();
                if (object.Length != null)
                    message.Length = Number(object.Length);
                if (object.StenosisRate != null)
                    message.StenosisRate = Number(object.StenosisRate);
                if (object.findingUid != null)
                    message.findingUid = String(object.findingUid);
                return message;
            };

            /**
             * Creates a plain object from a MessageSelectedStenosisInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo} message MessageSelectedStenosisInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageSelectedStenosisInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Length = 0;
                    object.StenosisRate = 0;
                    object.findingUid = "";
                }
                if (message.Length != null && message.hasOwnProperty("Length"))
                    object.Length = options.json && !isFinite(message.Length) ? String(message.Length) : message.Length;
                if (message.StenosisRate != null && message.hasOwnProperty("StenosisRate"))
                    object.StenosisRate = options.json && !isFinite(message.StenosisRate) ? String(message.StenosisRate) : message.StenosisRate;
                if (message.findingUid != null && message.hasOwnProperty("findingUid"))
                    object.findingUid = message.findingUid;
                return object;
            };

            /**
             * Converts this MessageSelectedStenosisInfo to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageSelectedStenosisInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageSelectedStenosisInfo;
        })();

        CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo = (function() {

            /**
             * Properties of a MessageStenosisRangeMarkInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @interface IMessageStenosisRangeMarkInfo
             * @property {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider>|null} [Sliders] MessageStenosisRangeMarkInfo Sliders
             * @property {number} ProximalIndex MessageStenosisRangeMarkInfo ProximalIndex
             * @property {number} DistalIndex MessageStenosisRangeMarkInfo DistalIndex
             * @property {string} findingUid MessageStenosisRangeMarkInfo findingUid
             */

            /**
             * Constructs a new MessageStenosisRangeMarkInfo.
             * @memberof Mcsf.CTCardiacCommonProtocol
             * @classdesc Represents a MessageStenosisRangeMarkInfo.
             * @implements IMessageStenosisRangeMarkInfo
             * @constructor
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisRangeMarkInfo=} [properties] Properties to set
             */
            function MessageStenosisRangeMarkInfo(properties) {
                this.Sliders = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageStenosisRangeMarkInfo Sliders.
             * @member {Array.<Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider>} Sliders
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @instance
             */
            MessageStenosisRangeMarkInfo.prototype.Sliders = $util.emptyArray;

            /**
             * MessageStenosisRangeMarkInfo ProximalIndex.
             * @member {number} ProximalIndex
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @instance
             */
            MessageStenosisRangeMarkInfo.prototype.ProximalIndex = 0;

            /**
             * MessageStenosisRangeMarkInfo DistalIndex.
             * @member {number} DistalIndex
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @instance
             */
            MessageStenosisRangeMarkInfo.prototype.DistalIndex = 0;

            /**
             * MessageStenosisRangeMarkInfo findingUid.
             * @member {string} findingUid
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @instance
             */
            MessageStenosisRangeMarkInfo.prototype.findingUid = "";

            /**
             * Creates a new MessageStenosisRangeMarkInfo instance using the specified properties.
             * @function create
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisRangeMarkInfo=} [properties] Properties to set
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo} MessageStenosisRangeMarkInfo instance
             */
            MessageStenosisRangeMarkInfo.create = function create(properties) {
                return new MessageStenosisRangeMarkInfo(properties);
            };

            /**
             * Encodes the specified MessageStenosisRangeMarkInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo.verify|verify} messages.
             * @function encode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisRangeMarkInfo} message MessageStenosisRangeMarkInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisRangeMarkInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Sliders != null && message.Sliders.length)
                    for (var i = 0; i < message.Sliders.length; ++i)
                        $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.encode(message.Sliders[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ProximalIndex);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.DistalIndex);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.findingUid);
                return writer;
            };

            /**
             * Encodes the specified MessageStenosisRangeMarkInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.IMessageStenosisRangeMarkInfo} message MessageStenosisRangeMarkInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageStenosisRangeMarkInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageStenosisRangeMarkInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo} MessageStenosisRangeMarkInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisRangeMarkInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Sliders && message.Sliders.length))
                            message.Sliders = [];
                        message.Sliders.push($root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.ProximalIndex = reader.int32();
                        break;
                    case 3:
                        message.DistalIndex = reader.int32();
                        break;
                    case 4:
                        message.findingUid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ProximalIndex"))
                    throw $util.ProtocolError("missing required 'ProximalIndex'", { instance: message });
                if (!message.hasOwnProperty("DistalIndex"))
                    throw $util.ProtocolError("missing required 'DistalIndex'", { instance: message });
                if (!message.hasOwnProperty("findingUid"))
                    throw $util.ProtocolError("missing required 'findingUid'", { instance: message });
                return message;
            };

            /**
             * Decodes a MessageStenosisRangeMarkInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo} MessageStenosisRangeMarkInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageStenosisRangeMarkInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageStenosisRangeMarkInfo message.
             * @function verify
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageStenosisRangeMarkInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Sliders != null && message.hasOwnProperty("Sliders")) {
                    if (!Array.isArray(message.Sliders))
                        return "Sliders: array expected";
                    for (var i = 0; i < message.Sliders.length; ++i) {
                        var error = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.verify(message.Sliders[i]);
                        if (error)
                            return "Sliders." + error;
                    }
                }
                if (!$util.isInteger(message.ProximalIndex))
                    return "ProximalIndex: integer expected";
                if (!$util.isInteger(message.DistalIndex))
                    return "DistalIndex: integer expected";
                if (!$util.isString(message.findingUid))
                    return "findingUid: string expected";
                return null;
            };

            /**
             * Creates a MessageStenosisRangeMarkInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo} MessageStenosisRangeMarkInfo
             */
            MessageStenosisRangeMarkInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo)
                    return object;
                var message = new $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo();
                if (object.Sliders) {
                    if (!Array.isArray(object.Sliders))
                        throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo.Sliders: array expected");
                    message.Sliders = [];
                    for (var i = 0; i < object.Sliders.length; ++i) {
                        if (typeof object.Sliders[i] !== "object")
                            throw TypeError(".Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo.Sliders: object expected");
                        message.Sliders[i] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.fromObject(object.Sliders[i]);
                    }
                }
                if (object.ProximalIndex != null)
                    message.ProximalIndex = object.ProximalIndex | 0;
                if (object.DistalIndex != null)
                    message.DistalIndex = object.DistalIndex | 0;
                if (object.findingUid != null)
                    message.findingUid = String(object.findingUid);
                return message;
            };

            /**
             * Creates a plain object from a MessageStenosisRangeMarkInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @static
             * @param {Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo} message MessageStenosisRangeMarkInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageStenosisRangeMarkInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Sliders = [];
                if (options.defaults) {
                    object.ProximalIndex = 0;
                    object.DistalIndex = 0;
                    object.findingUid = "";
                }
                if (message.Sliders && message.Sliders.length) {
                    object.Sliders = [];
                    for (var j = 0; j < message.Sliders.length; ++j)
                        object.Sliders[j] = $root.Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.toObject(message.Sliders[j], options);
                }
                if (message.ProximalIndex != null && message.hasOwnProperty("ProximalIndex"))
                    object.ProximalIndex = message.ProximalIndex;
                if (message.DistalIndex != null && message.hasOwnProperty("DistalIndex"))
                    object.DistalIndex = message.DistalIndex;
                if (message.findingUid != null && message.hasOwnProperty("findingUid"))
                    object.findingUid = message.findingUid;
                return object;
            };

            /**
             * Converts this MessageStenosisRangeMarkInfo to JSON.
             * @function toJSON
             * @memberof Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageStenosisRangeMarkInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageStenosisRangeMarkInfo;
        })();

        return CTCardiacCommonProtocol;
    })();

    return Mcsf;
})();

module.exports = $root;
