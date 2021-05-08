import * as $protobuf from "protobufjs";
/** Namespace Mcsf. */
export namespace Mcsf {

    /** Namespace CTCardiacCommonProtocol. */
    namespace CTCardiacCommonProtocol {

        /** SculptorMode enum. */
        enum SculptorMode {
            All = 1,
            Selected = 2
        }

        /** ListOperationType enum. */
        enum ListOperationType {
            ListOperationType_Add = 1,
            ListOperationType_Delete = 2,
            ListOperationType_Rename = 3,
            ListOperationType_Select = 4,
            ListOperationType_Change = 5
        }

        /** RapidResultsImageType enum. */
        enum RapidResultsImageType {
            RapidResultsImageType_VR = 1,
            RapidResultsImageType_MIP = 2,
            RapidResultsImageType_CPR = 3,
            RapidResultsImageType_SCPR = 4
        }

        /** StenosisMarkType enum. */
        enum StenosisMarkType {
            StenosisMarkType_Unknown = 0,
            StenosisMarkType_Proximal = 1,
            StenosisMarkType_Distal = 2,
            StenosisMarkType_Nidus = 3
        }

        /** StenosisDegree enum. */
        enum StenosisDegree {
            StenosisDegree_None = 0,
            StenosisDegree_Slight = 1,
            StenosisDegree_Mild = 2,
            StenosisDegree_Moderate = 3,
            StenosisDegree_Severe = 4,
            StenosisDegree_Blocking = 5
        }

        /** StenosisMarkDistanceType enum. */
        enum StenosisMarkDistanceType {
            StenosisMarkDistanceType_Unknown = 0,
            StenosisMarkDistanceType_Proximal = 1,
            StenosisMarkDistanceType_Distal = 2,
            StenosisMarkDistanceType_Total = 3
        }

        /** ContourDiameterType enum. */
        enum ContourDiameterType {
            ContourDiameterType_Max = 1,
            ContourDiameterType_Min = 2
        }

        /** StatisticsType enum. */
        enum StatisticsType {
            StatisticsType_Area = 1,
            StatisticsType_MinDiameter = 2,
            StatisticsType_MaxDiameter = 3
        }

        /** TissueDisplayMode enum. */
        enum TissueDisplayMode {
            TissueDisplayMode_None = 0,
            AllTissue = 1,
            CoronaryTissue = 2
        }

        /** LoadSeriesMode enum. */
        enum LoadSeriesMode {
            Replace = 1,
            Append = 2,
            Cancel = 3
        }

        /** StenosisMode enum. */
        enum StenosisMode {
            Stenosis = 0,
            Plaque = 1
        }

        /** VentricleContourType enum. */
        enum VentricleContourType {
            VentricleContourType_None = 0,
            VentricleContourType_Right = 1,
            VentricleContourType_Left = 2,
            VentricleContourType_Left_Myocardium = 3,
            VentricleContourType_All = 4
        }

        /** VentricleContourRedoUndoType enum. */
        enum VentricleContourRedoUndoType {
            VentricleContourRedoUndoType_Redo = 0,
            VentricleContourRedoUndoType_Undo = 1
        }

        /** SimpsonCurveType enum. */
        enum SimpsonCurveType {
            SimpsonCurveType_LeftVentricleVolume = 0,
            SimpsonCurveType_RightVentricleVolume = 1,
            SimpsonCurveType_VentricleWallThickness = 2,
            SimpsonCurveType_VentricleWallThickening = 3,
            SimpsonCurveType_VentricleWallMotion = 4
        }

        /** BullEyeMapType enum. */
        enum BullEyeMapType {
            BullEyeMapType_ED = 0,
            BullEyeMapType_ES = 1,
            BullEyeMapType_WallThickening = 2,
            BullEyeMapType_WallMotion = 3
        }

        /** ValveType enum. */
        enum ValveType {
            ValveType_Normal = 0,
            ValveType_MitralValve = 1,
            ValveType_AorticValve = 2,
            ValveType_TricuspidValve = 3
        }

        /** CoronaryOrientationType enum. */
        enum CoronaryOrientationType {
            LeftAnteriorObliquePosition_0_Skull_0 = 1,
            LeftAnteriorObliquePosition_20_Skull_0 = 2,
            LeftAnteriorObliquePosition_20_Skull_30 = 3,
            LeftAnteriorObliquePosition_0_Skull_45 = 4,
            RightAnteriorObliquePosition_30_Skull_40 = 5,
            RightAnteriorObliquePosition_30_Tail_20 = 6,
            LeftAnteriorObliquePosition_0_Tail_40 = 7,
            LeftAnteriorObliquePosition_40_Tail_30 = 8,
            LeftAnteriorObliquePosition_60_Skull_0 = 9,
            LeftAnteriorObliquePosition_20_Tail_20 = 10,
            RightAnteriorObliquePosition_30_Skull_0 = 11,
            CoronaryOrientationType_None = 12
        }

        /** SliderLocationChangeType enum. */
        enum SliderLocationChangeType {
            SliderLocationChangeType_Offset = 1,
            SliderLocationChangeType_Index = 2
        }

        /** BEStatusEnum enum. */
        enum BEStatusEnum {
            BEStatusEnum_LoadSeriesStart = 31,
            BEStatusEnum_LoadSeriesEnd = 32,
            BEStatusEnum_LoadSeriesFailed = 33,
            BEStatusEnum_LoadSeriesCanceled = 34,
            BEStatusEnum_LoadBookmarkStart = 35,
            BEStatusEnum_LoadBookmarkEnd = 36,
            BEStatusEnum_ChamberSegmentStart = 37,
            BEStatusEnum_ChamberSegmentFailed = 38,
            BEStatusEnum_ChamberSegmentEnd = 39,
            BEStatusEnum_AutoExtractCenterLineStart = 40,
            BEStatusEnum_AutoExtractCenterLineFailed = 41,
            BEStatusEnum_AutoExtractCenterLineEnd = 42,
            BEStatusEnum_ManualExtractCenterLineStart = 43,
            BEStatusEnum_ManualExtractCenterLineFailed = 44,
            BEStatusEnum_ManualExtractCenterLineEnd = 45,
            BEStatusEnum_AllPhaseAutoProcessed = 46,
            BEStatusEnum_AllPhaseCalBullEyeMapEnd = 47,
            BEStatusEnum_UnlockMedViewerControl = 48,
            BEStatusEnum_ChangeToNewVolume = 49
        }

        /** TissueVisibilityMode enum. */
        enum TissueVisibilityMode {
            TissueVisibilityMode_All = 0,
            TissueVisibilityMode_None = 1,
            TissueVisibilityMode_Coronary = 2,
            TissueVisibilityMode_Cardiac = 3
        }

        /** StatusLevel enum. */
        enum StatusLevel {
            StatusInfo = 0,
            StatusWarn = 1,
            StatusError = 2
        }

        /** Properties of a MessageSculptorMode. */
        interface IMessageSculptorMode {

            /** MessageSculptorMode Mode */
            Mode: Mcsf.CTCardiacCommonProtocol.SculptorMode;
        }

        /** Represents a MessageSculptorMode. */
        class MessageSculptorMode implements IMessageSculptorMode {

            /**
             * Constructs a new MessageSculptorMode.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSculptorMode);

            /** MessageSculptorMode Mode. */
            public Mode: Mcsf.CTCardiacCommonProtocol.SculptorMode;

            /**
             * Creates a new MessageSculptorMode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageSculptorMode instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSculptorMode): Mcsf.CTCardiacCommonProtocol.MessageSculptorMode;

            /**
             * Encodes the specified MessageSculptorMode message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSculptorMode.verify|verify} messages.
             * @param message MessageSculptorMode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageSculptorMode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageSculptorMode message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSculptorMode.verify|verify} messages.
             * @param message MessageSculptorMode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageSculptorMode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageSculptorMode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageSculptorMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageSculptorMode;

            /**
             * Decodes a MessageSculptorMode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageSculptorMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageSculptorMode;

            /**
             * Verifies a MessageSculptorMode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageSculptorMode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageSculptorMode
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageSculptorMode;

            /**
             * Creates a plain object from a MessageSculptorMode message. Also converts values to other types if specified.
             * @param message MessageSculptorMode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageSculptorMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageSculptorMode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageCenterLineList. */
        interface IMessageCenterLineList {

            /** MessageCenterLineList CenterLine */
            CenterLine?: (Mcsf.CTCardiacCommonProtocol.IMessageCenterLine[]|null);

            /** MessageCenterLineList SelectedCenterLineID */
            SelectedCenterLineID: number;
        }

        /** Represents a MessageCenterLineList. */
        class MessageCenterLineList implements IMessageCenterLineList {

            /**
             * Constructs a new MessageCenterLineList.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineList);

            /** MessageCenterLineList CenterLine. */
            public CenterLine: Mcsf.CTCardiacCommonProtocol.IMessageCenterLine[];

            /** MessageCenterLineList SelectedCenterLineID. */
            public SelectedCenterLineID: number;

            /**
             * Creates a new MessageCenterLineList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageCenterLineList instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineList): Mcsf.CTCardiacCommonProtocol.MessageCenterLineList;

            /**
             * Encodes the specified MessageCenterLineList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineList.verify|verify} messages.
             * @param message MessageCenterLineList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageCenterLineList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineList.verify|verify} messages.
             * @param message MessageCenterLineList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageCenterLineList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageCenterLineList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageCenterLineList;

            /**
             * Decodes a MessageCenterLineList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageCenterLineList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageCenterLineList;

            /**
             * Verifies a MessageCenterLineList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageCenterLineList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageCenterLineList
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageCenterLineList;

            /**
             * Creates a plain object from a MessageCenterLineList message. Also converts values to other types if specified.
             * @param message MessageCenterLineList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageCenterLineList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageCenterLineList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageUpdateCenterLine. */
        interface IMessageUpdateCenterLine {

            /** MessageUpdateCenterLine OperationType */
            OperationType: Mcsf.CTCardiacCommonProtocol.ListOperationType;

            /** MessageUpdateCenterLine CenterLine */
            CenterLine: Mcsf.CTCardiacCommonProtocol.IMessageCenterLine;

            /** MessageUpdateCenterLine CellName */
            CellName?: (string|null);
        }

        /** Represents a MessageUpdateCenterLine. */
        class MessageUpdateCenterLine implements IMessageUpdateCenterLine {

            /**
             * Constructs a new MessageUpdateCenterLine.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageUpdateCenterLine);

            /** MessageUpdateCenterLine OperationType. */
            public OperationType: Mcsf.CTCardiacCommonProtocol.ListOperationType;

            /** MessageUpdateCenterLine CenterLine. */
            public CenterLine: Mcsf.CTCardiacCommonProtocol.IMessageCenterLine;

            /** MessageUpdateCenterLine CellName. */
            public CellName: string;

            /**
             * Creates a new MessageUpdateCenterLine instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageUpdateCenterLine instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageUpdateCenterLine): Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine;

            /**
             * Encodes the specified MessageUpdateCenterLine message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine.verify|verify} messages.
             * @param message MessageUpdateCenterLine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageUpdateCenterLine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageUpdateCenterLine message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine.verify|verify} messages.
             * @param message MessageUpdateCenterLine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageUpdateCenterLine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageUpdateCenterLine message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageUpdateCenterLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine;

            /**
             * Decodes a MessageUpdateCenterLine message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageUpdateCenterLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine;

            /**
             * Verifies a MessageUpdateCenterLine message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageUpdateCenterLine message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageUpdateCenterLine
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine;

            /**
             * Creates a plain object from a MessageUpdateCenterLine message. Also converts values to other types if specified.
             * @param message MessageUpdateCenterLine
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageUpdateCenterLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageUpdateCenterLine to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageCenterLine. */
        interface IMessageCenterLine {

            /** MessageCenterLine ID */
            ID?: (number|null);

            /** MessageCenterLine Name */
            Name?: (string|null);

            /** MessageCenterLine FindIndex */
            FindIndex?: (number|null);
        }

        /** Represents a MessageCenterLine. */
        class MessageCenterLine implements IMessageCenterLine {

            /**
             * Constructs a new MessageCenterLine.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCenterLine);

            /** MessageCenterLine ID. */
            public ID: number;

            /** MessageCenterLine Name. */
            public Name: string;

            /** MessageCenterLine FindIndex. */
            public FindIndex: number;

            /**
             * Creates a new MessageCenterLine instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageCenterLine instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCenterLine): Mcsf.CTCardiacCommonProtocol.MessageCenterLine;

            /**
             * Encodes the specified MessageCenterLine message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLine.verify|verify} messages.
             * @param message MessageCenterLine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageCenterLine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageCenterLine message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLine.verify|verify} messages.
             * @param message MessageCenterLine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageCenterLine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageCenterLine message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageCenterLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageCenterLine;

            /**
             * Decodes a MessageCenterLine message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageCenterLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageCenterLine;

            /**
             * Verifies a MessageCenterLine message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageCenterLine message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageCenterLine
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageCenterLine;

            /**
             * Creates a plain object from a MessageCenterLine message. Also converts values to other types if specified.
             * @param message MessageCenterLine
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageCenterLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageCenterLine to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageTissueVisibility. */
        interface IMessageTissueVisibility {

            /** MessageTissueVisibility ID */
            ID: number;

            /** MessageTissueVisibility IsVisible */
            IsVisible: boolean;
        }

        /** Represents a MessageTissueVisibility. */
        class MessageTissueVisibility implements IMessageTissueVisibility {

            /**
             * Constructs a new MessageTissueVisibility.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility);

            /** MessageTissueVisibility ID. */
            public ID: number;

            /** MessageTissueVisibility IsVisible. */
            public IsVisible: boolean;

            /**
             * Creates a new MessageTissueVisibility instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageTissueVisibility instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility): Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility;

            /**
             * Encodes the specified MessageTissueVisibility message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility.verify|verify} messages.
             * @param message MessageTissueVisibility message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageTissueVisibility message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility.verify|verify} messages.
             * @param message MessageTissueVisibility message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageTissueVisibility message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageTissueVisibility
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility;

            /**
             * Decodes a MessageTissueVisibility message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageTissueVisibility
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility;

            /**
             * Verifies a MessageTissueVisibility message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageTissueVisibility message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageTissueVisibility
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility;

            /**
             * Creates a plain object from a MessageTissueVisibility message. Also converts values to other types if specified.
             * @param message MessageTissueVisibility
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageTissueVisibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageTissueVisibility to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageTissueVisibilityList. */
        interface IMessageTissueVisibilityList {

            /** MessageTissueVisibilityList Mode */
            Mode: Mcsf.CTCardiacCommonProtocol.TissueVisibilityMode;

            /** MessageTissueVisibilityList TissueVisibility */
            TissueVisibility?: (Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility[]|null);
        }

        /** Represents a MessageTissueVisibilityList. */
        class MessageTissueVisibilityList implements IMessageTissueVisibilityList {

            /**
             * Constructs a new MessageTissueVisibilityList.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibilityList);

            /** MessageTissueVisibilityList Mode. */
            public Mode: Mcsf.CTCardiacCommonProtocol.TissueVisibilityMode;

            /** MessageTissueVisibilityList TissueVisibility. */
            public TissueVisibility: Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibility[];

            /**
             * Creates a new MessageTissueVisibilityList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageTissueVisibilityList instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibilityList): Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList;

            /**
             * Encodes the specified MessageTissueVisibilityList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList.verify|verify} messages.
             * @param message MessageTissueVisibilityList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibilityList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageTissueVisibilityList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList.verify|verify} messages.
             * @param message MessageTissueVisibilityList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageTissueVisibilityList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageTissueVisibilityList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageTissueVisibilityList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList;

            /**
             * Decodes a MessageTissueVisibilityList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageTissueVisibilityList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList;

            /**
             * Verifies a MessageTissueVisibilityList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageTissueVisibilityList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageTissueVisibilityList
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList;

            /**
             * Creates a plain object from a MessageTissueVisibilityList message. Also converts values to other types if specified.
             * @param message MessageTissueVisibilityList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageTissueVisibilityList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageTissueVisibilityList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageHRTPoint2D. */
        interface IMessageHRTPoint2D {

            /** MessageHRTPoint2D x */
            x?: (number|null);

            /** MessageHRTPoint2D y */
            y?: (number|null);
        }

        /** Represents a MessageHRTPoint2D. */
        class MessageHRTPoint2D implements IMessageHRTPoint2D {

            /**
             * Constructs a new MessageHRTPoint2D.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D);

            /** MessageHRTPoint2D x. */
            public x: number;

            /** MessageHRTPoint2D y. */
            public y: number;

            /**
             * Creates a new MessageHRTPoint2D instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageHRTPoint2D instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D): Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D;

            /**
             * Encodes the specified MessageHRTPoint2D message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify|verify} messages.
             * @param message MessageHRTPoint2D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageHRTPoint2D message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D.verify|verify} messages.
             * @param message MessageHRTPoint2D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageHRTPoint2D message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageHRTPoint2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D;

            /**
             * Decodes a MessageHRTPoint2D message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageHRTPoint2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D;

            /**
             * Verifies a MessageHRTPoint2D message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageHRTPoint2D message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageHRTPoint2D
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D;

            /**
             * Creates a plain object from a MessageHRTPoint2D message. Also converts values to other types if specified.
             * @param message MessageHRTPoint2D
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2D, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageHRTPoint2D to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageHRTPoint2Ds. */
        interface IMessageHRTPoint2Ds {

            /** MessageHRTPoint2Ds Point */
            Point?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D[]|null);
        }

        /** Represents a MessageHRTPoint2Ds. */
        class MessageHRTPoint2Ds implements IMessageHRTPoint2Ds {

            /**
             * Constructs a new MessageHRTPoint2Ds.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds);

            /** MessageHRTPoint2Ds Point. */
            public Point: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D[];

            /**
             * Creates a new MessageHRTPoint2Ds instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageHRTPoint2Ds instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds): Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds;

            /**
             * Encodes the specified MessageHRTPoint2Ds message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify|verify} messages.
             * @param message MessageHRTPoint2Ds message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageHRTPoint2Ds message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds.verify|verify} messages.
             * @param message MessageHRTPoint2Ds message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageHRTPoint2Ds message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageHRTPoint2Ds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds;

            /**
             * Decodes a MessageHRTPoint2Ds message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageHRTPoint2Ds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds;

            /**
             * Verifies a MessageHRTPoint2Ds message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageHRTPoint2Ds message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageHRTPoint2Ds
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds;

            /**
             * Creates a plain object from a MessageHRTPoint2Ds message. Also converts values to other types if specified.
             * @param message MessageHRTPoint2Ds
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageHRTPoint2Ds, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageHRTPoint2Ds to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageTrackPoint. */
        interface IMessageTrackPoint {

            /** MessageTrackPoint UID */
            UID?: (string|null);

            /** MessageTrackPoint TrackPoint */
            TrackPoint?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D|null);
        }

        /** Represents a MessageTrackPoint. */
        class MessageTrackPoint implements IMessageTrackPoint {

            /**
             * Constructs a new MessageTrackPoint.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint);

            /** MessageTrackPoint UID. */
            public UID: string;

            /** MessageTrackPoint TrackPoint. */
            public TrackPoint?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D|null);

            /**
             * Creates a new MessageTrackPoint instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageTrackPoint instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint): Mcsf.CTCardiacCommonProtocol.MessageTrackPoint;

            /**
             * Encodes the specified MessageTrackPoint message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.verify|verify} messages.
             * @param message MessageTrackPoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageTrackPoint message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTrackPoint.verify|verify} messages.
             * @param message MessageTrackPoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageTrackPoint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageTrackPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageTrackPoint;

            /**
             * Decodes a MessageTrackPoint message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageTrackPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageTrackPoint;

            /**
             * Verifies a MessageTrackPoint message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageTrackPoint message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageTrackPoint
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageTrackPoint;

            /**
             * Creates a plain object from a MessageTrackPoint message. Also converts values to other types if specified.
             * @param message MessageTrackPoint
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageTrackPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageTrackPoint to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageTrackPointList. */
        interface IMessageTrackPointList {

            /** MessageTrackPointList TrackPointList */
            TrackPointList?: (Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint[]|null);
        }

        /** Represents a MessageTrackPointList. */
        class MessageTrackPointList implements IMessageTrackPointList {

            /**
             * Constructs a new MessageTrackPointList.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageTrackPointList);

            /** MessageTrackPointList TrackPointList. */
            public TrackPointList: Mcsf.CTCardiacCommonProtocol.IMessageTrackPoint[];

            /**
             * Creates a new MessageTrackPointList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageTrackPointList instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageTrackPointList): Mcsf.CTCardiacCommonProtocol.MessageTrackPointList;

            /**
             * Encodes the specified MessageTrackPointList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTrackPointList.verify|verify} messages.
             * @param message MessageTrackPointList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageTrackPointList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageTrackPointList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageTrackPointList.verify|verify} messages.
             * @param message MessageTrackPointList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageTrackPointList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageTrackPointList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageTrackPointList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageTrackPointList;

            /**
             * Decodes a MessageTrackPointList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageTrackPointList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageTrackPointList;

            /**
             * Verifies a MessageTrackPointList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageTrackPointList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageTrackPointList
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageTrackPointList;

            /**
             * Creates a plain object from a MessageTrackPointList message. Also converts values to other types if specified.
             * @param message MessageTrackPointList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageTrackPointList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageTrackPointList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageRapidResultsSave. */
        interface IMessageRapidResultsSave {

            /** MessageRapidResultsSave SaveItem */
            SaveItem?: (Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview[]|null);
        }

        /** Represents a MessageRapidResultsSave. */
        class MessageRapidResultsSave implements IMessageRapidResultsSave {

            /**
             * Constructs a new MessageRapidResultsSave.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsSave);

            /** MessageRapidResultsSave SaveItem. */
            public SaveItem: Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview[];

            /**
             * Creates a new MessageRapidResultsSave instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageRapidResultsSave instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsSave): Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave;

            /**
             * Encodes the specified MessageRapidResultsSave message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave.verify|verify} messages.
             * @param message MessageRapidResultsSave message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsSave, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageRapidResultsSave message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave.verify|verify} messages.
             * @param message MessageRapidResultsSave message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsSave, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageRapidResultsSave message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageRapidResultsSave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave;

            /**
             * Decodes a MessageRapidResultsSave message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageRapidResultsSave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave;

            /**
             * Verifies a MessageRapidResultsSave message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageRapidResultsSave message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageRapidResultsSave
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave;

            /**
             * Creates a plain object from a MessageRapidResultsSave message. Also converts values to other types if specified.
             * @param message MessageRapidResultsSave
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageRapidResultsSave, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageRapidResultsSave to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageRapidResultsPreview. */
        interface IMessageRapidResultsPreview {

            /** MessageRapidResultsPreview Index */
            Index: number;

            /** MessageRapidResultsPreview CenterLineID */
            CenterLineID: number;

            /** MessageRapidResultsPreview ImageType */
            ImageType: Mcsf.CTCardiacCommonProtocol.RapidResultsImageType;

            /** MessageRapidResultsPreview IsCoronaryOrientationMode */
            IsCoronaryOrientationMode?: (boolean|null);

            /** MessageRapidResultsPreview IndexInGroup */
            IndexInGroup?: (number|null);

            /** MessageRapidResultsPreview DisplayMode */
            DisplayMode?: (Mcsf.CTCardiacCommonProtocol.TissueDisplayMode|null);

            /** MessageRapidResultsPreview angle1 */
            angle1?: (number|null);

            /** MessageRapidResultsPreview angle2 */
            angle2?: (number|null);

            /** MessageRapidResultsPreview changeUpDirection */
            changeUpDirection?: (number|null);

            /** MessageRapidResultsPreview upX */
            upX?: (number|null);

            /** MessageRapidResultsPreview upY */
            upY?: (number|null);

            /** MessageRapidResultsPreview upZ */
            upZ?: (number|null);
        }

        /** Represents a MessageRapidResultsPreview. */
        class MessageRapidResultsPreview implements IMessageRapidResultsPreview {

            /**
             * Constructs a new MessageRapidResultsPreview.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview);

            /** MessageRapidResultsPreview Index. */
            public Index: number;

            /** MessageRapidResultsPreview CenterLineID. */
            public CenterLineID: number;

            /** MessageRapidResultsPreview ImageType. */
            public ImageType: Mcsf.CTCardiacCommonProtocol.RapidResultsImageType;

            /** MessageRapidResultsPreview IsCoronaryOrientationMode. */
            public IsCoronaryOrientationMode: boolean;

            /** MessageRapidResultsPreview IndexInGroup. */
            public IndexInGroup: number;

            /** MessageRapidResultsPreview DisplayMode. */
            public DisplayMode: Mcsf.CTCardiacCommonProtocol.TissueDisplayMode;

            /** MessageRapidResultsPreview angle1. */
            public angle1: number;

            /** MessageRapidResultsPreview angle2. */
            public angle2: number;

            /** MessageRapidResultsPreview changeUpDirection. */
            public changeUpDirection: number;

            /** MessageRapidResultsPreview upX. */
            public upX: number;

            /** MessageRapidResultsPreview upY. */
            public upY: number;

            /** MessageRapidResultsPreview upZ. */
            public upZ: number;

            /**
             * Creates a new MessageRapidResultsPreview instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageRapidResultsPreview instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview): Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview;

            /**
             * Encodes the specified MessageRapidResultsPreview message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview.verify|verify} messages.
             * @param message MessageRapidResultsPreview message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageRapidResultsPreview message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview.verify|verify} messages.
             * @param message MessageRapidResultsPreview message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageRapidResultsPreview, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageRapidResultsPreview message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageRapidResultsPreview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview;

            /**
             * Decodes a MessageRapidResultsPreview message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageRapidResultsPreview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview;

            /**
             * Verifies a MessageRapidResultsPreview message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageRapidResultsPreview message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageRapidResultsPreview
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview;

            /**
             * Creates a plain object from a MessageRapidResultsPreview message. Also converts values to other types if specified.
             * @param message MessageRapidResultsPreview
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageRapidResultsPreview, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageRapidResultsPreview to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageCenterLineCandidateNames. */
        interface IMessageCenterLineCandidateNames {

            /** MessageCenterLineCandidateNames IsHighLight */
            IsHighLight: boolean;

            /** MessageCenterLineCandidateNames CurrentCellCenterLineName */
            CurrentCellCenterLineName: string;

            /** MessageCenterLineCandidateNames CenterLine */
            CenterLine?: (Mcsf.CTCardiacCommonProtocol.IMessageCenterLine[]|null);
        }

        /** Represents a MessageCenterLineCandidateNames. */
        class MessageCenterLineCandidateNames implements IMessageCenterLineCandidateNames {

            /**
             * Constructs a new MessageCenterLineCandidateNames.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineCandidateNames);

            /** MessageCenterLineCandidateNames IsHighLight. */
            public IsHighLight: boolean;

            /** MessageCenterLineCandidateNames CurrentCellCenterLineName. */
            public CurrentCellCenterLineName: string;

            /** MessageCenterLineCandidateNames CenterLine. */
            public CenterLine: Mcsf.CTCardiacCommonProtocol.IMessageCenterLine[];

            /**
             * Creates a new MessageCenterLineCandidateNames instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageCenterLineCandidateNames instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineCandidateNames): Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames;

            /**
             * Encodes the specified MessageCenterLineCandidateNames message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames.verify|verify} messages.
             * @param message MessageCenterLineCandidateNames message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineCandidateNames, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageCenterLineCandidateNames message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames.verify|verify} messages.
             * @param message MessageCenterLineCandidateNames message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineCandidateNames, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageCenterLineCandidateNames message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageCenterLineCandidateNames
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames;

            /**
             * Decodes a MessageCenterLineCandidateNames message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageCenterLineCandidateNames
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames;

            /**
             * Verifies a MessageCenterLineCandidateNames message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageCenterLineCandidateNames message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageCenterLineCandidateNames
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames;

            /**
             * Creates a plain object from a MessageCenterLineCandidateNames message. Also converts values to other types if specified.
             * @param message MessageCenterLineCandidateNames
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageCenterLineCandidateNames, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageCenterLineCandidateNames to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageAnnotationContour. */
        interface IMessageAnnotationContour {

            /** MessageAnnotationContour Area */
            Area?: (number|null);

            /** MessageAnnotationContour MaxDiameter */
            MaxDiameter?: (number|null);

            /** MessageAnnotationContour MinDiameter */
            MinDiameter?: (number|null);

            /** MessageAnnotationContour ContourPoints */
            ContourPoints?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /** MessageAnnotationContour MinDiameterPoints */
            MinDiameterPoints?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /** MessageAnnotationContour MaxDiameterPoints */
            MaxDiameterPoints?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);
        }

        /** Represents a MessageAnnotationContour. */
        class MessageAnnotationContour implements IMessageAnnotationContour {

            /**
             * Constructs a new MessageAnnotationContour.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageAnnotationContour);

            /** MessageAnnotationContour Area. */
            public Area: number;

            /** MessageAnnotationContour MaxDiameter. */
            public MaxDiameter: number;

            /** MessageAnnotationContour MinDiameter. */
            public MinDiameter: number;

            /** MessageAnnotationContour ContourPoints. */
            public ContourPoints?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /** MessageAnnotationContour MinDiameterPoints. */
            public MinDiameterPoints?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /** MessageAnnotationContour MaxDiameterPoints. */
            public MaxDiameterPoints?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /**
             * Creates a new MessageAnnotationContour instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageAnnotationContour instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageAnnotationContour): Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour;

            /**
             * Encodes the specified MessageAnnotationContour message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour.verify|verify} messages.
             * @param message MessageAnnotationContour message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageAnnotationContour, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageAnnotationContour message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour.verify|verify} messages.
             * @param message MessageAnnotationContour message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageAnnotationContour, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageAnnotationContour message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageAnnotationContour
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour;

            /**
             * Decodes a MessageAnnotationContour message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageAnnotationContour
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour;

            /**
             * Verifies a MessageAnnotationContour message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageAnnotationContour message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageAnnotationContour
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour;

            /**
             * Creates a plain object from a MessageAnnotationContour message. Also converts values to other types if specified.
             * @param message MessageAnnotationContour
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageAnnotationContour, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageAnnotationContour to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMark. */
        interface IMessageStenosisMark {

            /** MessageStenosisMark ID */
            ID: number;

            /** MessageStenosisMark CenterLineID */
            CenterLineID: number;

            /** MessageStenosisMark CenterPoint */
            CenterPoint: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageStenosisMark NormalVector */
            NormalVector: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageStenosisMark CenterlineName */
            CenterlineName?: (string|null);

            /** MessageStenosisMark StenosisDegree */
            StenosisDegree?: (Mcsf.CTCardiacCommonProtocol.StenosisDegree|null);

            /** MessageStenosisMark FindingType */
            FindingType?: (number|null);

            /** MessageStenosisMark StentLevel */
            StentLevel?: (number|null);

            /** MessageStenosisMark FindingUID */
            FindingUID?: (string|null);
        }

        /** Represents a MessageStenosisMark. */
        class MessageStenosisMark implements IMessageStenosisMark {

            /**
             * Constructs a new MessageStenosisMark.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark);

            /** MessageStenosisMark ID. */
            public ID: number;

            /** MessageStenosisMark CenterLineID. */
            public CenterLineID: number;

            /** MessageStenosisMark CenterPoint. */
            public CenterPoint: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageStenosisMark NormalVector. */
            public NormalVector: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageStenosisMark CenterlineName. */
            public CenterlineName: string;

            /** MessageStenosisMark StenosisDegree. */
            public StenosisDegree: Mcsf.CTCardiacCommonProtocol.StenosisDegree;

            /** MessageStenosisMark FindingType. */
            public FindingType: number;

            /** MessageStenosisMark StentLevel. */
            public StentLevel: number;

            /** MessageStenosisMark FindingUID. */
            public FindingUID: string;

            /**
             * Creates a new MessageStenosisMark instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMark instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark): Mcsf.CTCardiacCommonProtocol.MessageStenosisMark;

            /**
             * Encodes the specified MessageStenosisMark message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.verify|verify} messages.
             * @param message MessageStenosisMark message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMark message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMark.verify|verify} messages.
             * @param message MessageStenosisMark message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMark message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMark
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMark;

            /**
             * Decodes a MessageStenosisMark message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMark
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMark;

            /**
             * Verifies a MessageStenosisMark message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMark message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMark
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMark;

            /**
             * Creates a plain object from a MessageStenosisMark message. Also converts values to other types if specified.
             * @param message MessageStenosisMark
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMark, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMark to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarks. */
        interface IMessageStenosisMarks {

            /** MessageStenosisMarks Marks */
            Marks?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark[]|null);
        }

        /** Represents a MessageStenosisMarks. */
        class MessageStenosisMarks implements IMessageStenosisMarks {

            /**
             * Constructs a new MessageStenosisMarks.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarks);

            /** MessageStenosisMarks Marks. */
            public Marks: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMark[];

            /**
             * Creates a new MessageStenosisMarks instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarks instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarks): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks;

            /**
             * Encodes the specified MessageStenosisMarks message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks.verify|verify} messages.
             * @param message MessageStenosisMarks message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarks, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarks message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks.verify|verify} messages.
             * @param message MessageStenosisMarks message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarks, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarks message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks;

            /**
             * Decodes a MessageStenosisMarks message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks;

            /**
             * Verifies a MessageStenosisMarks message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarks message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarks
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks;

            /**
             * Creates a plain object from a MessageStenosisMarks message. Also converts values to other types if specified.
             * @param message MessageStenosisMarks
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarks, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarks to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkDistance. */
        interface IMessageStenosisMarkDistance {

            /** MessageStenosisMarkDistance DistanceType */
            DistanceType: Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType;

            /** MessageStenosisMarkDistance DistanceValue */
            DistanceValue: number;

            /** MessageStenosisMarkDistance IsChecked */
            IsChecked: boolean;
        }

        /** Represents a MessageStenosisMarkDistance. */
        class MessageStenosisMarkDistance implements IMessageStenosisMarkDistance {

            /**
             * Constructs a new MessageStenosisMarkDistance.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance);

            /** MessageStenosisMarkDistance DistanceType. */
            public DistanceType: Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType;

            /** MessageStenosisMarkDistance DistanceValue. */
            public DistanceValue: number;

            /** MessageStenosisMarkDistance IsChecked. */
            public IsChecked: boolean;

            /**
             * Creates a new MessageStenosisMarkDistance instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkDistance instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance;

            /**
             * Encodes the specified MessageStenosisMarkDistance message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance.verify|verify} messages.
             * @param message MessageStenosisMarkDistance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkDistance message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance.verify|verify} messages.
             * @param message MessageStenosisMarkDistance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkDistance message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkDistance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance;

            /**
             * Decodes a MessageStenosisMarkDistance message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkDistance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance;

            /**
             * Verifies a MessageStenosisMarkDistance message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkDistance message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkDistance
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance;

            /**
             * Creates a plain object from a MessageStenosisMarkDistance message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkDistance
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistance, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkDistance to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkDistances. */
        interface IMessageStenosisMarkDistances {

            /** MessageStenosisMarkDistances Distance */
            Distance?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance[]|null);
        }

        /** Represents a MessageStenosisMarkDistances. */
        class MessageStenosisMarkDistances implements IMessageStenosisMarkDistances {

            /**
             * Constructs a new MessageStenosisMarkDistances.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistances);

            /** MessageStenosisMarkDistances Distance. */
            public Distance: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistance[];

            /**
             * Creates a new MessageStenosisMarkDistances instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkDistances instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistances): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances;

            /**
             * Encodes the specified MessageStenosisMarkDistances message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances.verify|verify} messages.
             * @param message MessageStenosisMarkDistances message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistances, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkDistances message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances.verify|verify} messages.
             * @param message MessageStenosisMarkDistances message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistances, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkDistances message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkDistances
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances;

            /**
             * Decodes a MessageStenosisMarkDistances message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkDistances
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances;

            /**
             * Verifies a MessageStenosisMarkDistances message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkDistances message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkDistances
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances;

            /**
             * Creates a plain object from a MessageStenosisMarkDistances message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkDistances
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistances, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkDistances to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageCenterLineStatisticsInfo. */
        interface IMessageCenterLineStatisticsInfo {

            /** MessageCenterLineStatisticsInfo MaxDiameter */
            MaxDiameter?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /** MessageCenterLineStatisticsInfo MinDiameter */
            MinDiameter?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /** MessageCenterLineStatisticsInfo Area */
            Area?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);
        }

        /** Represents a MessageCenterLineStatisticsInfo. */
        class MessageCenterLineStatisticsInfo implements IMessageCenterLineStatisticsInfo {

            /**
             * Constructs a new MessageCenterLineStatisticsInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineStatisticsInfo);

            /** MessageCenterLineStatisticsInfo MaxDiameter. */
            public MaxDiameter?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /** MessageCenterLineStatisticsInfo MinDiameter. */
            public MinDiameter?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /** MessageCenterLineStatisticsInfo Area. */
            public Area?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /**
             * Creates a new MessageCenterLineStatisticsInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageCenterLineStatisticsInfo instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineStatisticsInfo): Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo;

            /**
             * Encodes the specified MessageCenterLineStatisticsInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo.verify|verify} messages.
             * @param message MessageCenterLineStatisticsInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineStatisticsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageCenterLineStatisticsInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo.verify|verify} messages.
             * @param message MessageCenterLineStatisticsInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageCenterLineStatisticsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageCenterLineStatisticsInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageCenterLineStatisticsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo;

            /**
             * Decodes a MessageCenterLineStatisticsInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageCenterLineStatisticsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo;

            /**
             * Verifies a MessageCenterLineStatisticsInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageCenterLineStatisticsInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageCenterLineStatisticsInfo
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo;

            /**
             * Creates a plain object from a MessageCenterLineStatisticsInfo message. Also converts values to other types if specified.
             * @param message MessageCenterLineStatisticsInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageCenterLineStatisticsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageCenterLineStatisticsInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageContourDiameterEdit. */
        interface IMessageContourDiameterEdit {

            /** MessageContourDiameterEdit DiameterType */
            DiameterType: Mcsf.CTCardiacCommonProtocol.ContourDiameterType;

            /** MessageContourDiameterEdit DiameterPoints */
            DiameterPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;
        }

        /** Represents a MessageContourDiameterEdit. */
        class MessageContourDiameterEdit implements IMessageContourDiameterEdit {

            /**
             * Constructs a new MessageContourDiameterEdit.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageContourDiameterEdit);

            /** MessageContourDiameterEdit DiameterType. */
            public DiameterType: Mcsf.CTCardiacCommonProtocol.ContourDiameterType;

            /** MessageContourDiameterEdit DiameterPoints. */
            public DiameterPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /**
             * Creates a new MessageContourDiameterEdit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageContourDiameterEdit instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageContourDiameterEdit): Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit;

            /**
             * Encodes the specified MessageContourDiameterEdit message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit.verify|verify} messages.
             * @param message MessageContourDiameterEdit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageContourDiameterEdit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageContourDiameterEdit message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit.verify|verify} messages.
             * @param message MessageContourDiameterEdit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageContourDiameterEdit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageContourDiameterEdit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageContourDiameterEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit;

            /**
             * Decodes a MessageContourDiameterEdit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageContourDiameterEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit;

            /**
             * Verifies a MessageContourDiameterEdit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageContourDiameterEdit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageContourDiameterEdit
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit;

            /**
             * Creates a plain object from a MessageContourDiameterEdit message. Also converts values to other types if specified.
             * @param message MessageContourDiameterEdit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageContourDiameterEdit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageContourDiameterEdit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkDistanceType. */
        interface IMessageStenosisMarkDistanceType {

            /** MessageStenosisMarkDistanceType DistanceType */
            DistanceType: Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType;

            /** MessageStenosisMarkDistanceType IsChecked */
            IsChecked?: (boolean|null);
        }

        /** Represents a MessageStenosisMarkDistanceType. */
        class MessageStenosisMarkDistanceType implements IMessageStenosisMarkDistanceType {

            /**
             * Constructs a new MessageStenosisMarkDistanceType.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistanceType);

            /** MessageStenosisMarkDistanceType DistanceType. */
            public DistanceType: Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType;

            /** MessageStenosisMarkDistanceType IsChecked. */
            public IsChecked: boolean;

            /**
             * Creates a new MessageStenosisMarkDistanceType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkDistanceType instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistanceType): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType;

            /**
             * Encodes the specified MessageStenosisMarkDistanceType message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType.verify|verify} messages.
             * @param message MessageStenosisMarkDistanceType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistanceType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkDistanceType message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType.verify|verify} messages.
             * @param message MessageStenosisMarkDistanceType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkDistanceType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkDistanceType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkDistanceType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType;

            /**
             * Decodes a MessageStenosisMarkDistanceType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkDistanceType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType;

            /**
             * Verifies a MessageStenosisMarkDistanceType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkDistanceType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkDistanceType
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType;

            /**
             * Creates a plain object from a MessageStenosisMarkDistanceType message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkDistanceType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkDistanceType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkDistanceType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkLine. */
        interface IMessageStenosisMarkLine {

            /** MessageStenosisMarkLine DistanceType */
            DistanceType?: (Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType|null);

            /** MessageStenosisMarkLine LinePoints */
            LinePoints?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);
        }

        /** Represents a MessageStenosisMarkLine. */
        class MessageStenosisMarkLine implements IMessageStenosisMarkLine {

            /**
             * Constructs a new MessageStenosisMarkLine.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine);

            /** MessageStenosisMarkLine DistanceType. */
            public DistanceType: Mcsf.CTCardiacCommonProtocol.StenosisMarkDistanceType;

            /** MessageStenosisMarkLine LinePoints. */
            public LinePoints?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds|null);

            /**
             * Creates a new MessageStenosisMarkLine instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkLine instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine;

            /**
             * Encodes the specified MessageStenosisMarkLine message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.verify|verify} messages.
             * @param message MessageStenosisMarkLine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkLine message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine.verify|verify} messages.
             * @param message MessageStenosisMarkLine message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkLine message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine;

            /**
             * Decodes a MessageStenosisMarkLine message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkLine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine;

            /**
             * Verifies a MessageStenosisMarkLine message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkLine message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkLine
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine;

            /**
             * Creates a plain object from a MessageStenosisMarkLine message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkLine
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkLine to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkLines. */
        interface IMessageStenosisMarkLines {

            /** MessageStenosisMarkLines Lines */
            Lines?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine[]|null);
        }

        /** Represents a MessageStenosisMarkLines. */
        class MessageStenosisMarkLines implements IMessageStenosisMarkLines {

            /**
             * Constructs a new MessageStenosisMarkLines.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLines);

            /** MessageStenosisMarkLines Lines. */
            public Lines: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLine[];

            /**
             * Creates a new MessageStenosisMarkLines instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkLines instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLines): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines;

            /**
             * Encodes the specified MessageStenosisMarkLines message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines.verify|verify} messages.
             * @param message MessageStenosisMarkLines message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLines, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkLines message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines.verify|verify} messages.
             * @param message MessageStenosisMarkLines message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkLines, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkLines message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkLines
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines;

            /**
             * Decodes a MessageStenosisMarkLines message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkLines
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines;

            /**
             * Verifies a MessageStenosisMarkLines message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkLines message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkLines
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines;

            /**
             * Creates a plain object from a MessageStenosisMarkLines message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkLines
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkLines, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkLines to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageSectionSlider. */
        interface IMessageSectionSlider {

            /** MessageSectionSlider CenterLineID */
            CenterLineID: number;

            /** MessageSectionSlider CenterPoint */
            CenterPoint: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageSectionSlider NormalVector */
            NormalVector: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;
        }

        /** Represents a MessageSectionSlider. */
        class MessageSectionSlider implements IMessageSectionSlider {

            /**
             * Constructs a new MessageSectionSlider.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider);

            /** MessageSectionSlider CenterLineID. */
            public CenterLineID: number;

            /** MessageSectionSlider CenterPoint. */
            public CenterPoint: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageSectionSlider NormalVector. */
            public NormalVector: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /**
             * Creates a new MessageSectionSlider instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageSectionSlider instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider): Mcsf.CTCardiacCommonProtocol.MessageSectionSlider;

            /**
             * Encodes the specified MessageSectionSlider message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.verify|verify} messages.
             * @param message MessageSectionSlider message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageSectionSlider message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSectionSlider.verify|verify} messages.
             * @param message MessageSectionSlider message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageSectionSlider message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageSectionSlider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageSectionSlider;

            /**
             * Decodes a MessageSectionSlider message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageSectionSlider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageSectionSlider;

            /**
             * Verifies a MessageSectionSlider message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageSectionSlider message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageSectionSlider
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageSectionSlider;

            /**
             * Creates a plain object from a MessageSectionSlider message. Also converts values to other types if specified.
             * @param message MessageSectionSlider
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageSectionSlider, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageSectionSlider to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkSlider. */
        interface IMessageStenosisMarkSlider {

            /** MessageStenosisMarkSlider MarkType */
            MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /** MessageStenosisMarkSlider Slider */
            Slider: Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider;
        }

        /** Represents a MessageStenosisMarkSlider. */
        class MessageStenosisMarkSlider implements IMessageStenosisMarkSlider {

            /**
             * Constructs a new MessageStenosisMarkSlider.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider);

            /** MessageStenosisMarkSlider MarkType. */
            public MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /** MessageStenosisMarkSlider Slider. */
            public Slider: Mcsf.CTCardiacCommonProtocol.IMessageSectionSlider;

            /**
             * Creates a new MessageStenosisMarkSlider instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkSlider instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider;

            /**
             * Encodes the specified MessageStenosisMarkSlider message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.verify|verify} messages.
             * @param message MessageStenosisMarkSlider message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkSlider message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider.verify|verify} messages.
             * @param message MessageStenosisMarkSlider message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkSlider message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkSlider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider;

            /**
             * Decodes a MessageStenosisMarkSlider message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkSlider
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider;

            /**
             * Verifies a MessageStenosisMarkSlider message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkSlider message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkSlider
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider;

            /**
             * Creates a plain object from a MessageStenosisMarkSlider message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkSlider
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSlider, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkSlider to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkSliders. */
        interface IMessageStenosisMarkSliders {

            /** MessageStenosisMarkSliders Sliders */
            Sliders?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider[]|null);
        }

        /** Represents a MessageStenosisMarkSliders. */
        class MessageStenosisMarkSliders implements IMessageStenosisMarkSliders {

            /**
             * Constructs a new MessageStenosisMarkSliders.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSliders);

            /** MessageStenosisMarkSliders Sliders. */
            public Sliders: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider[];

            /**
             * Creates a new MessageStenosisMarkSliders instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkSliders instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSliders): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders;

            /**
             * Encodes the specified MessageStenosisMarkSliders message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders.verify|verify} messages.
             * @param message MessageStenosisMarkSliders message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSliders, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkSliders message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders.verify|verify} messages.
             * @param message MessageStenosisMarkSliders message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSliders, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkSliders message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkSliders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders;

            /**
             * Decodes a MessageStenosisMarkSliders message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkSliders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders;

            /**
             * Verifies a MessageStenosisMarkSliders message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkSliders message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkSliders
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders;

            /**
             * Creates a plain object from a MessageStenosisMarkSliders message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkSliders
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkSliders, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkSliders to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkPointIndex. */
        interface IMessageStenosisMarkPointIndex {

            /** MessageStenosisMarkPointIndex MarkType */
            MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /** MessageStenosisMarkPointIndex MarkPointIndex */
            MarkPointIndex: number;
        }

        /** Represents a MessageStenosisMarkPointIndex. */
        class MessageStenosisMarkPointIndex implements IMessageStenosisMarkPointIndex {

            /**
             * Constructs a new MessageStenosisMarkPointIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex);

            /** MessageStenosisMarkPointIndex MarkType. */
            public MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /** MessageStenosisMarkPointIndex MarkPointIndex. */
            public MarkPointIndex: number;

            /**
             * Creates a new MessageStenosisMarkPointIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkPointIndex instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex;

            /**
             * Encodes the specified MessageStenosisMarkPointIndex message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex.verify|verify} messages.
             * @param message MessageStenosisMarkPointIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkPointIndex message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex.verify|verify} messages.
             * @param message MessageStenosisMarkPointIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkPointIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkPointIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex;

            /**
             * Decodes a MessageStenosisMarkPointIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkPointIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex;

            /**
             * Verifies a MessageStenosisMarkPointIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkPointIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkPointIndex
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex;

            /**
             * Creates a plain object from a MessageStenosisMarkPointIndex message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkPointIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkPointIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkPointIndexs. */
        interface IMessageStenosisMarkPointIndexs {

            /** MessageStenosisMarkPointIndexs Indexs */
            Indexs?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex[]|null);
        }

        /** Represents a MessageStenosisMarkPointIndexs. */
        class MessageStenosisMarkPointIndexs implements IMessageStenosisMarkPointIndexs {

            /**
             * Constructs a new MessageStenosisMarkPointIndexs.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndexs);

            /** MessageStenosisMarkPointIndexs Indexs. */
            public Indexs: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndex[];

            /**
             * Creates a new MessageStenosisMarkPointIndexs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkPointIndexs instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndexs): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs;

            /**
             * Encodes the specified MessageStenosisMarkPointIndexs message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs.verify|verify} messages.
             * @param message MessageStenosisMarkPointIndexs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndexs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkPointIndexs message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs.verify|verify} messages.
             * @param message MessageStenosisMarkPointIndexs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkPointIndexs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkPointIndexs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkPointIndexs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs;

            /**
             * Decodes a MessageStenosisMarkPointIndexs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkPointIndexs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs;

            /**
             * Verifies a MessageStenosisMarkPointIndexs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkPointIndexs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkPointIndexs
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs;

            /**
             * Creates a plain object from a MessageStenosisMarkPointIndexs message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkPointIndexs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkPointIndexs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkPointIndexs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisListOperationParams. */
        interface IMessageStenosisListOperationParams {

            /** MessageStenosisListOperationParams OperationType */
            OperationType: Mcsf.CTCardiacCommonProtocol.ListOperationType;

            /** MessageStenosisListOperationParams UID */
            UID?: (string|null);

            /** MessageStenosisListOperationParams NewName */
            NewName?: (string|null);
        }

        /** Represents a MessageStenosisListOperationParams. */
        class MessageStenosisListOperationParams implements IMessageStenosisListOperationParams {

            /**
             * Constructs a new MessageStenosisListOperationParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisListOperationParams);

            /** MessageStenosisListOperationParams OperationType. */
            public OperationType: Mcsf.CTCardiacCommonProtocol.ListOperationType;

            /** MessageStenosisListOperationParams UID. */
            public UID: string;

            /** MessageStenosisListOperationParams NewName. */
            public NewName: string;

            /**
             * Creates a new MessageStenosisListOperationParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisListOperationParams instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisListOperationParams): Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams;

            /**
             * Encodes the specified MessageStenosisListOperationParams message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams.verify|verify} messages.
             * @param message MessageStenosisListOperationParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisListOperationParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisListOperationParams message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams.verify|verify} messages.
             * @param message MessageStenosisListOperationParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisListOperationParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisListOperationParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisListOperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams;

            /**
             * Decodes a MessageStenosisListOperationParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisListOperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams;

            /**
             * Verifies a MessageStenosisListOperationParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisListOperationParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisListOperationParams
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams;

            /**
             * Creates a plain object from a MessageStenosisListOperationParams message. Also converts values to other types if specified.
             * @param message MessageStenosisListOperationParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisListOperationParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisListOperationParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisItem. */
        interface IMessageStenosisItem {

            /** MessageStenosisItem ID */
            ID: number;

            /** MessageStenosisItem Name */
            Name: string;
        }

        /** Represents a MessageStenosisItem. */
        class MessageStenosisItem implements IMessageStenosisItem {

            /**
             * Constructs a new MessageStenosisItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem);

            /** MessageStenosisItem ID. */
            public ID: number;

            /** MessageStenosisItem Name. */
            public Name: string;

            /**
             * Creates a new MessageStenosisItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisItem instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem): Mcsf.CTCardiacCommonProtocol.MessageStenosisItem;

            /**
             * Encodes the specified MessageStenosisItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisItem.verify|verify} messages.
             * @param message MessageStenosisItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisItem.verify|verify} messages.
             * @param message MessageStenosisItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisItem;

            /**
             * Decodes a MessageStenosisItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisItem;

            /**
             * Verifies a MessageStenosisItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisItem
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisItem;

            /**
             * Creates a plain object from a MessageStenosisItem message. Also converts values to other types if specified.
             * @param message MessageStenosisItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisList. */
        interface IMessageStenosisList {

            /** MessageStenosisList Items */
            Items?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem[]|null);

            /** MessageStenosisList SelectedID */
            SelectedID: number;
        }

        /** Represents a MessageStenosisList. */
        class MessageStenosisList implements IMessageStenosisList {

            /**
             * Constructs a new MessageStenosisList.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisList);

            /** MessageStenosisList Items. */
            public Items: Mcsf.CTCardiacCommonProtocol.IMessageStenosisItem[];

            /** MessageStenosisList SelectedID. */
            public SelectedID: number;

            /**
             * Creates a new MessageStenosisList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisList instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisList): Mcsf.CTCardiacCommonProtocol.MessageStenosisList;

            /**
             * Encodes the specified MessageStenosisList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisList.verify|verify} messages.
             * @param message MessageStenosisList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisList.verify|verify} messages.
             * @param message MessageStenosisList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisList;

            /**
             * Decodes a MessageStenosisList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisList;

            /**
             * Verifies a MessageStenosisList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisList
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisList;

            /**
             * Creates a plain object from a MessageStenosisList message. Also converts values to other types if specified.
             * @param message MessageStenosisList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkType. */
        interface IMessageStenosisMarkType {

            /** MessageStenosisMarkType MarkType */
            MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;
        }

        /** Represents a MessageStenosisMarkType. */
        class MessageStenosisMarkType implements IMessageStenosisMarkType {

            /**
             * Constructs a new MessageStenosisMarkType.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkType);

            /** MessageStenosisMarkType MarkType. */
            public MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /**
             * Creates a new MessageStenosisMarkType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkType instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkType): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType;

            /**
             * Encodes the specified MessageStenosisMarkType message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType.verify|verify} messages.
             * @param message MessageStenosisMarkType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkType message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType.verify|verify} messages.
             * @param message MessageStenosisMarkType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType;

            /**
             * Decodes a MessageStenosisMarkType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType;

            /**
             * Verifies a MessageStenosisMarkType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkType
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType;

            /**
             * Creates a plain object from a MessageStenosisMarkType message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkTypes. */
        interface IMessageStenosisMarkTypes {

            /** MessageStenosisMarkTypes MarkTypes */
            MarkTypes?: (Mcsf.CTCardiacCommonProtocol.StenosisMarkType[]|null);
        }

        /** Represents a MessageStenosisMarkTypes. */
        class MessageStenosisMarkTypes implements IMessageStenosisMarkTypes {

            /**
             * Constructs a new MessageStenosisMarkTypes.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkTypes);

            /** MessageStenosisMarkTypes MarkTypes. */
            public MarkTypes: Mcsf.CTCardiacCommonProtocol.StenosisMarkType[];

            /**
             * Creates a new MessageStenosisMarkTypes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkTypes instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkTypes): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes;

            /**
             * Encodes the specified MessageStenosisMarkTypes message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes.verify|verify} messages.
             * @param message MessageStenosisMarkTypes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkTypes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkTypes message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes.verify|verify} messages.
             * @param message MessageStenosisMarkTypes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkTypes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkTypes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes;

            /**
             * Decodes a MessageStenosisMarkTypes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes;

            /**
             * Verifies a MessageStenosisMarkTypes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkTypes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkTypes
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes;

            /**
             * Creates a plain object from a MessageStenosisMarkTypes message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkTypes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkTypes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkTypes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMarkVisibility. */
        interface IMessageStenosisMarkVisibility {

            /** MessageStenosisMarkVisibility MarkType */
            MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /** MessageStenosisMarkVisibility IsVisible */
            IsVisible: boolean;
        }

        /** Represents a MessageStenosisMarkVisibility. */
        class MessageStenosisMarkVisibility implements IMessageStenosisMarkVisibility {

            /**
             * Constructs a new MessageStenosisMarkVisibility.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkVisibility);

            /** MessageStenosisMarkVisibility MarkType. */
            public MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /** MessageStenosisMarkVisibility IsVisible. */
            public IsVisible: boolean;

            /**
             * Creates a new MessageStenosisMarkVisibility instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMarkVisibility instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkVisibility): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility;

            /**
             * Encodes the specified MessageStenosisMarkVisibility message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility.verify|verify} messages.
             * @param message MessageStenosisMarkVisibility message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkVisibility, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMarkVisibility message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility.verify|verify} messages.
             * @param message MessageStenosisMarkVisibility message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkVisibility, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMarkVisibility message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMarkVisibility
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility;

            /**
             * Decodes a MessageStenosisMarkVisibility message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMarkVisibility
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility;

            /**
             * Verifies a MessageStenosisMarkVisibility message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMarkVisibility message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMarkVisibility
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility;

            /**
             * Creates a plain object from a MessageStenosisMarkVisibility message. Also converts values to other types if specified.
             * @param message MessageStenosisMarkVisibility
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMarkVisibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMarkVisibility to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisStatisticsType. */
        interface IMessageStenosisStatisticsType {

            /** MessageStenosisStatisticsType Type */
            Type: Mcsf.CTCardiacCommonProtocol.StatisticsType;
        }

        /** Represents a MessageStenosisStatisticsType. */
        class MessageStenosisStatisticsType implements IMessageStenosisStatisticsType {

            /**
             * Constructs a new MessageStenosisStatisticsType.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsType);

            /** MessageStenosisStatisticsType Type. */
            public Type: Mcsf.CTCardiacCommonProtocol.StatisticsType;

            /**
             * Creates a new MessageStenosisStatisticsType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisStatisticsType instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsType): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType;

            /**
             * Encodes the specified MessageStenosisStatisticsType message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType.verify|verify} messages.
             * @param message MessageStenosisStatisticsType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisStatisticsType message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType.verify|verify} messages.
             * @param message MessageStenosisStatisticsType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisStatisticsType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisStatisticsType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType;

            /**
             * Decodes a MessageStenosisStatisticsType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisStatisticsType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType;

            /**
             * Verifies a MessageStenosisStatisticsType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisStatisticsType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisStatisticsType
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType;

            /**
             * Creates a plain object from a MessageStenosisStatisticsType message. Also converts values to other types if specified.
             * @param message MessageStenosisStatisticsType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisStatisticsType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisStatisticsCurve. */
        interface IMessageStenosisStatisticsCurve {

            /** MessageStenosisStatisticsCurve Type */
            Type: Mcsf.CTCardiacCommonProtocol.StatisticsType;

            /** MessageStenosisStatisticsCurve CurvePoints */
            CurvePoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;
        }

        /** Represents a MessageStenosisStatisticsCurve. */
        class MessageStenosisStatisticsCurve implements IMessageStenosisStatisticsCurve {

            /**
             * Constructs a new MessageStenosisStatisticsCurve.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCurve);

            /** MessageStenosisStatisticsCurve Type. */
            public Type: Mcsf.CTCardiacCommonProtocol.StatisticsType;

            /** MessageStenosisStatisticsCurve CurvePoints. */
            public CurvePoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /**
             * Creates a new MessageStenosisStatisticsCurve instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisStatisticsCurve instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCurve): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve;

            /**
             * Encodes the specified MessageStenosisStatisticsCurve message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve.verify|verify} messages.
             * @param message MessageStenosisStatisticsCurve message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCurve, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisStatisticsCurve message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve.verify|verify} messages.
             * @param message MessageStenosisStatisticsCurve message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCurve, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisStatisticsCurve message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisStatisticsCurve
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve;

            /**
             * Decodes a MessageStenosisStatisticsCurve message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisStatisticsCurve
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve;

            /**
             * Verifies a MessageStenosisStatisticsCurve message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisStatisticsCurve message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisStatisticsCurve
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve;

            /**
             * Creates a plain object from a MessageStenosisStatisticsCurve message. Also converts values to other types if specified.
             * @param message MessageStenosisStatisticsCurve
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCurve, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisStatisticsCurve to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisStatisticsCell. */
        interface IMessageStenosisStatisticsCell {

            /** MessageStenosisStatisticsCell Type */
            Type: Mcsf.CTCardiacCommonProtocol.StatisticsType;

            /** MessageStenosisStatisticsCell Value */
            Value: number;
        }

        /** Represents a MessageStenosisStatisticsCell. */
        class MessageStenosisStatisticsCell implements IMessageStenosisStatisticsCell {

            /**
             * Constructs a new MessageStenosisStatisticsCell.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell);

            /** MessageStenosisStatisticsCell Type. */
            public Type: Mcsf.CTCardiacCommonProtocol.StatisticsType;

            /** MessageStenosisStatisticsCell Value. */
            public Value: number;

            /**
             * Creates a new MessageStenosisStatisticsCell instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisStatisticsCell instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell;

            /**
             * Encodes the specified MessageStenosisStatisticsCell message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell.verify|verify} messages.
             * @param message MessageStenosisStatisticsCell message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisStatisticsCell message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell.verify|verify} messages.
             * @param message MessageStenosisStatisticsCell message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisStatisticsCell message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisStatisticsCell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell;

            /**
             * Decodes a MessageStenosisStatisticsCell message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisStatisticsCell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell;

            /**
             * Verifies a MessageStenosisStatisticsCell message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisStatisticsCell message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisStatisticsCell
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell;

            /**
             * Creates a plain object from a MessageStenosisStatisticsCell message. Also converts values to other types if specified.
             * @param message MessageStenosisStatisticsCell
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsCell, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisStatisticsCell to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisStatisticsColumn. */
        interface IMessageStenosisStatisticsColumn {

            /** MessageStenosisStatisticsColumn MarkType */
            MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /** MessageStenosisStatisticsColumn Cells */
            Cells?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell[]|null);
        }

        /** Represents a MessageStenosisStatisticsColumn. */
        class MessageStenosisStatisticsColumn implements IMessageStenosisStatisticsColumn {

            /**
             * Constructs a new MessageStenosisStatisticsColumn.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn);

            /** MessageStenosisStatisticsColumn MarkType. */
            public MarkType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /** MessageStenosisStatisticsColumn Cells. */
            public Cells: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsCell[];

            /**
             * Creates a new MessageStenosisStatisticsColumn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisStatisticsColumn instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn;

            /**
             * Encodes the specified MessageStenosisStatisticsColumn message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.verify|verify} messages.
             * @param message MessageStenosisStatisticsColumn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisStatisticsColumn message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn.verify|verify} messages.
             * @param message MessageStenosisStatisticsColumn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisStatisticsColumn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisStatisticsColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn;

            /**
             * Decodes a MessageStenosisStatisticsColumn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisStatisticsColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn;

            /**
             * Verifies a MessageStenosisStatisticsColumn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisStatisticsColumn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisStatisticsColumn
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn;

            /**
             * Creates a plain object from a MessageStenosisStatisticsColumn message. Also converts values to other types if specified.
             * @param message MessageStenosisStatisticsColumn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsColumn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisStatisticsColumn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisStatisticsSubTable. */
        interface IMessageStenosisStatisticsSubTable {

            /** MessageStenosisStatisticsSubTable Name */
            Name: string;

            /** MessageStenosisStatisticsSubTable ID */
            ID: number;

            /** MessageStenosisStatisticsSubTable Columns */
            Columns?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn[]|null);
        }

        /** Represents a MessageStenosisStatisticsSubTable. */
        class MessageStenosisStatisticsSubTable implements IMessageStenosisStatisticsSubTable {

            /**
             * Constructs a new MessageStenosisStatisticsSubTable.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable);

            /** MessageStenosisStatisticsSubTable Name. */
            public Name: string;

            /** MessageStenosisStatisticsSubTable ID. */
            public ID: number;

            /** MessageStenosisStatisticsSubTable Columns. */
            public Columns: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsColumn[];

            /**
             * Creates a new MessageStenosisStatisticsSubTable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisStatisticsSubTable instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable;

            /**
             * Encodes the specified MessageStenosisStatisticsSubTable message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.verify|verify} messages.
             * @param message MessageStenosisStatisticsSubTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisStatisticsSubTable message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable.verify|verify} messages.
             * @param message MessageStenosisStatisticsSubTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisStatisticsSubTable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisStatisticsSubTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable;

            /**
             * Decodes a MessageStenosisStatisticsSubTable message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisStatisticsSubTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable;

            /**
             * Verifies a MessageStenosisStatisticsSubTable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisStatisticsSubTable message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisStatisticsSubTable
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable;

            /**
             * Creates a plain object from a MessageStenosisStatisticsSubTable message. Also converts values to other types if specified.
             * @param message MessageStenosisStatisticsSubTable
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsSubTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisStatisticsSubTable to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisStatisticsTable. */
        interface IMessageStenosisStatisticsTable {

            /** MessageStenosisStatisticsTable SelectedName */
            SelectedName: string;

            /** MessageStenosisStatisticsTable SubTables */
            SubTables?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable[]|null);
        }

        /** Represents a MessageStenosisStatisticsTable. */
        class MessageStenosisStatisticsTable implements IMessageStenosisStatisticsTable {

            /**
             * Constructs a new MessageStenosisStatisticsTable.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsTable);

            /** MessageStenosisStatisticsTable SelectedName. */
            public SelectedName: string;

            /** MessageStenosisStatisticsTable SubTables. */
            public SubTables: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsSubTable[];

            /**
             * Creates a new MessageStenosisStatisticsTable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisStatisticsTable instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsTable): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable;

            /**
             * Encodes the specified MessageStenosisStatisticsTable message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable.verify|verify} messages.
             * @param message MessageStenosisStatisticsTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisStatisticsTable message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable.verify|verify} messages.
             * @param message MessageStenosisStatisticsTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisStatisticsTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisStatisticsTable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisStatisticsTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable;

            /**
             * Decodes a MessageStenosisStatisticsTable message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisStatisticsTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable;

            /**
             * Verifies a MessageStenosisStatisticsTable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisStatisticsTable message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisStatisticsTable
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable;

            /**
             * Creates a plain object from a MessageStenosisStatisticsTable message. Also converts values to other types if specified.
             * @param message MessageStenosisStatisticsTable
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisStatisticsTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisStatisticsTable to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgEraser. */
        interface IMsgEraser {

            /** MsgEraser points */
            points?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D[]|null);

            /** MsgEraser isRemove */
            isRemove?: (boolean|null);
        }

        /** Represents a MsgEraser. */
        class MsgEraser implements IMsgEraser {

            /**
             * Constructs a new MsgEraser.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMsgEraser);

            /** MsgEraser points. */
            public points: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D[];

            /** MsgEraser isRemove. */
            public isRemove: boolean;

            /**
             * Creates a new MsgEraser instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgEraser instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMsgEraser): Mcsf.CTCardiacCommonProtocol.MsgEraser;

            /**
             * Encodes the specified MsgEraser message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgEraser.verify|verify} messages.
             * @param message MsgEraser message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMsgEraser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgEraser message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgEraser.verify|verify} messages.
             * @param message MsgEraser message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMsgEraser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgEraser message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgEraser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MsgEraser;

            /**
             * Decodes a MsgEraser message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgEraser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MsgEraser;

            /**
             * Verifies a MsgEraser message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgEraser message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgEraser
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MsgEraser;

            /**
             * Creates a plain object from a MsgEraser message. Also converts values to other types if specified.
             * @param message MsgEraser
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MsgEraser, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgEraser to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessagePhaseItem. */
        interface IMessagePhaseItem {

            /** MessagePhaseItem ID */
            ID: number;

            /** MessagePhaseItem Phase */
            Phase: string;

            /** MessagePhaseItem SeriesNumber */
            SeriesNumber: string;

            /** MessagePhaseItem VolumeUID */
            VolumeUID: string;

            /** MessagePhaseItem ImageWidth */
            ImageWidth: number;

            /** MessagePhaseItem ImageHeight */
            ImageHeight: number;

            /** MessagePhaseItem Thickness */
            Thickness: number;

            /** MessagePhaseItem IsAutoProcessed */
            IsAutoProcessed: boolean;

            /** MessagePhaseItem IsChamberSegmentSucceed */
            IsChamberSegmentSucceed: boolean;

            /** MessagePhaseItem IsAutoExtractCenterLineSucceed */
            IsAutoExtractCenterLineSucceed: boolean;
        }

        /** Represents a MessagePhaseItem. */
        class MessagePhaseItem implements IMessagePhaseItem {

            /**
             * Constructs a new MessagePhaseItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem);

            /** MessagePhaseItem ID. */
            public ID: number;

            /** MessagePhaseItem Phase. */
            public Phase: string;

            /** MessagePhaseItem SeriesNumber. */
            public SeriesNumber: string;

            /** MessagePhaseItem VolumeUID. */
            public VolumeUID: string;

            /** MessagePhaseItem ImageWidth. */
            public ImageWidth: number;

            /** MessagePhaseItem ImageHeight. */
            public ImageHeight: number;

            /** MessagePhaseItem Thickness. */
            public Thickness: number;

            /** MessagePhaseItem IsAutoProcessed. */
            public IsAutoProcessed: boolean;

            /** MessagePhaseItem IsChamberSegmentSucceed. */
            public IsChamberSegmentSucceed: boolean;

            /** MessagePhaseItem IsAutoExtractCenterLineSucceed. */
            public IsAutoExtractCenterLineSucceed: boolean;

            /**
             * Creates a new MessagePhaseItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessagePhaseItem instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem): Mcsf.CTCardiacCommonProtocol.MessagePhaseItem;

            /**
             * Encodes the specified MessagePhaseItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePhaseItem.verify|verify} messages.
             * @param message MessagePhaseItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessagePhaseItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePhaseItem.verify|verify} messages.
             * @param message MessagePhaseItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessagePhaseItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessagePhaseItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessagePhaseItem;

            /**
             * Decodes a MessagePhaseItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessagePhaseItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessagePhaseItem;

            /**
             * Verifies a MessagePhaseItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessagePhaseItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessagePhaseItem
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessagePhaseItem;

            /**
             * Creates a plain object from a MessagePhaseItem message. Also converts values to other types if specified.
             * @param message MessagePhaseItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessagePhaseItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessagePhaseItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessagePhaseList. */
        interface IMessagePhaseList {

            /** MessagePhaseList item */
            item?: (Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem[]|null);

            /** MessagePhaseList selectedID */
            selectedID: number;
        }

        /** Represents a MessagePhaseList. */
        class MessagePhaseList implements IMessagePhaseList {

            /**
             * Constructs a new MessagePhaseList.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePhaseList);

            /** MessagePhaseList item. */
            public item: Mcsf.CTCardiacCommonProtocol.IMessagePhaseItem[];

            /** MessagePhaseList selectedID. */
            public selectedID: number;

            /**
             * Creates a new MessagePhaseList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessagePhaseList instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePhaseList): Mcsf.CTCardiacCommonProtocol.MessagePhaseList;

            /**
             * Encodes the specified MessagePhaseList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePhaseList.verify|verify} messages.
             * @param message MessagePhaseList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessagePhaseList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessagePhaseList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePhaseList.verify|verify} messages.
             * @param message MessagePhaseList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessagePhaseList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessagePhaseList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessagePhaseList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessagePhaseList;

            /**
             * Decodes a MessagePhaseList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessagePhaseList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessagePhaseList;

            /**
             * Verifies a MessagePhaseList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessagePhaseList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessagePhaseList
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessagePhaseList;

            /**
             * Creates a plain object from a MessagePhaseList message. Also converts values to other types if specified.
             * @param message MessagePhaseList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessagePhaseList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessagePhaseList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageLoadSeriesMode. */
        interface IMessageLoadSeriesMode {

            /** MessageLoadSeriesMode mode */
            mode: Mcsf.CTCardiacCommonProtocol.LoadSeriesMode;
        }

        /** Represents a MessageLoadSeriesMode. */
        class MessageLoadSeriesMode implements IMessageLoadSeriesMode {

            /**
             * Constructs a new MessageLoadSeriesMode.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageLoadSeriesMode);

            /** MessageLoadSeriesMode mode. */
            public mode: Mcsf.CTCardiacCommonProtocol.LoadSeriesMode;

            /**
             * Creates a new MessageLoadSeriesMode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageLoadSeriesMode instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageLoadSeriesMode): Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode;

            /**
             * Encodes the specified MessageLoadSeriesMode message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode.verify|verify} messages.
             * @param message MessageLoadSeriesMode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageLoadSeriesMode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageLoadSeriesMode message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode.verify|verify} messages.
             * @param message MessageLoadSeriesMode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageLoadSeriesMode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageLoadSeriesMode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageLoadSeriesMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode;

            /**
             * Decodes a MessageLoadSeriesMode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageLoadSeriesMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode;

            /**
             * Verifies a MessageLoadSeriesMode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageLoadSeriesMode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageLoadSeriesMode
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode;

            /**
             * Creates a plain object from a MessageLoadSeriesMode message. Also converts values to other types if specified.
             * @param message MessageLoadSeriesMode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageLoadSeriesMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageLoadSeriesMode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessagePlaqueList. */
        interface IMessagePlaqueList {

            /** MessagePlaqueList PlaqueIDs */
            PlaqueIDs?: (number[]|null);

            /** MessagePlaqueList SelectedID */
            SelectedID: number;
        }

        /** Represents a MessagePlaqueList. */
        class MessagePlaqueList implements IMessagePlaqueList {

            /**
             * Constructs a new MessagePlaqueList.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueList);

            /** MessagePlaqueList PlaqueIDs. */
            public PlaqueIDs: number[];

            /** MessagePlaqueList SelectedID. */
            public SelectedID: number;

            /**
             * Creates a new MessagePlaqueList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessagePlaqueList instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueList): Mcsf.CTCardiacCommonProtocol.MessagePlaqueList;

            /**
             * Encodes the specified MessagePlaqueList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueList.verify|verify} messages.
             * @param message MessagePlaqueList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessagePlaqueList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueList.verify|verify} messages.
             * @param message MessagePlaqueList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessagePlaqueList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessagePlaqueList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessagePlaqueList;

            /**
             * Decodes a MessagePlaqueList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessagePlaqueList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessagePlaqueList;

            /**
             * Verifies a MessagePlaqueList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessagePlaqueList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessagePlaqueList
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessagePlaqueList;

            /**
             * Creates a plain object from a MessagePlaqueList message. Also converts values to other types if specified.
             * @param message MessagePlaqueList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessagePlaqueList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessagePlaqueList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisMode. */
        interface IMessageStenosisMode {

            /** MessageStenosisMode mode */
            mode: Mcsf.CTCardiacCommonProtocol.StenosisMode;
        }

        /** Represents a MessageStenosisMode. */
        class MessageStenosisMode implements IMessageStenosisMode {

            /**
             * Constructs a new MessageStenosisMode.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMode);

            /** MessageStenosisMode mode. */
            public mode: Mcsf.CTCardiacCommonProtocol.StenosisMode;

            /**
             * Creates a new MessageStenosisMode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisMode instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMode): Mcsf.CTCardiacCommonProtocol.MessageStenosisMode;

            /**
             * Encodes the specified MessageStenosisMode message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMode.verify|verify} messages.
             * @param message MessageStenosisMode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisMode message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisMode.verify|verify} messages.
             * @param message MessageStenosisMode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisMode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisMode;

            /**
             * Decodes a MessageStenosisMode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisMode;

            /**
             * Verifies a MessageStenosisMode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisMode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisMode
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisMode;

            /**
             * Creates a plain object from a MessageStenosisMode message. Also converts values to other types if specified.
             * @param message MessageStenosisMode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisMode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageContourChangePoints. */
        interface IMessageContourChangePoints {

            /** MessageContourChangePoints oldPoints */
            oldPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /** MessageContourChangePoints newPoints */
            newPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;
        }

        /** Represents a MessageContourChangePoints. */
        class MessageContourChangePoints implements IMessageContourChangePoints {

            /**
             * Constructs a new MessageContourChangePoints.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageContourChangePoints);

            /** MessageContourChangePoints oldPoints. */
            public oldPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /** MessageContourChangePoints newPoints. */
            public newPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /**
             * Creates a new MessageContourChangePoints instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageContourChangePoints instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageContourChangePoints): Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints;

            /**
             * Encodes the specified MessageContourChangePoints message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints.verify|verify} messages.
             * @param message MessageContourChangePoints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageContourChangePoints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageContourChangePoints message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints.verify|verify} messages.
             * @param message MessageContourChangePoints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageContourChangePoints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageContourChangePoints message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageContourChangePoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints;

            /**
             * Decodes a MessageContourChangePoints message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageContourChangePoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints;

            /**
             * Verifies a MessageContourChangePoints message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageContourChangePoints message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageContourChangePoints
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints;

            /**
             * Creates a plain object from a MessageContourChangePoints message. Also converts values to other types if specified.
             * @param message MessageContourChangePoints
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageContourChangePoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageContourChangePoints to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessagePlaqueListOperationParams. */
        interface IMessagePlaqueListOperationParams {

            /** MessagePlaqueListOperationParams OperationType */
            OperationType: Mcsf.CTCardiacCommonProtocol.ListOperationType;

            /** MessagePlaqueListOperationParams ItemID */
            ItemID?: (number|null);
        }

        /** Represents a MessagePlaqueListOperationParams. */
        class MessagePlaqueListOperationParams implements IMessagePlaqueListOperationParams {

            /**
             * Constructs a new MessagePlaqueListOperationParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueListOperationParams);

            /** MessagePlaqueListOperationParams OperationType. */
            public OperationType: Mcsf.CTCardiacCommonProtocol.ListOperationType;

            /** MessagePlaqueListOperationParams ItemID. */
            public ItemID: number;

            /**
             * Creates a new MessagePlaqueListOperationParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessagePlaqueListOperationParams instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueListOperationParams): Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams;

            /**
             * Encodes the specified MessagePlaqueListOperationParams message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams.verify|verify} messages.
             * @param message MessagePlaqueListOperationParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueListOperationParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessagePlaqueListOperationParams message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams.verify|verify} messages.
             * @param message MessagePlaqueListOperationParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueListOperationParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessagePlaqueListOperationParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessagePlaqueListOperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams;

            /**
             * Decodes a MessagePlaqueListOperationParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessagePlaqueListOperationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams;

            /**
             * Verifies a MessagePlaqueListOperationParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessagePlaqueListOperationParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessagePlaqueListOperationParams
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams;

            /**
             * Creates a plain object from a MessagePlaqueListOperationParams message. Also converts values to other types if specified.
             * @param message MessagePlaqueListOperationParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessagePlaqueListOperationParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessagePlaqueListOperationParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageBEStatus. */
        interface IMessageBEStatus {

            /** MessageBEStatus BEStatus */
            BEStatus: Mcsf.CTCardiacCommonProtocol.BEStatusEnum;

            /** MessageBEStatus CustomInfo */
            CustomInfo?: (Uint8Array|null);
        }

        /** Represents a MessageBEStatus. */
        class MessageBEStatus implements IMessageBEStatus {

            /**
             * Constructs a new MessageBEStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageBEStatus);

            /** MessageBEStatus BEStatus. */
            public BEStatus: Mcsf.CTCardiacCommonProtocol.BEStatusEnum;

            /** MessageBEStatus CustomInfo. */
            public CustomInfo: Uint8Array;

            /**
             * Creates a new MessageBEStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageBEStatus instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageBEStatus): Mcsf.CTCardiacCommonProtocol.MessageBEStatus;

            /**
             * Encodes the specified MessageBEStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBEStatus.verify|verify} messages.
             * @param message MessageBEStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageBEStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageBEStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBEStatus.verify|verify} messages.
             * @param message MessageBEStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageBEStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageBEStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageBEStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageBEStatus;

            /**
             * Decodes a MessageBEStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageBEStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageBEStatus;

            /**
             * Verifies a MessageBEStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageBEStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageBEStatus
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageBEStatus;

            /**
             * Creates a plain object from a MessageBEStatus message. Also converts values to other types if specified.
             * @param message MessageBEStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageBEStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageBEStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSimpsonStatistics. */
        interface IMsgSimpsonStatistics {

            /** MsgSimpsonStatistics ventricularType */
            ventricularType?: (string|null);

            /** MsgSimpsonStatistics EDVentricularVolume */
            EDVentricularVolume?: (number|null);

            /** MsgSimpsonStatistics ESVentricularVolume */
            ESVentricularVolume?: (number|null);

            /** MsgSimpsonStatistics ventricularStrokeVolume */
            ventricularStrokeVolume?: (number|null);

            /** MsgSimpsonStatistics ventricularEjectionFraction */
            ventricularEjectionFraction?: (number|null);

            /** MsgSimpsonStatistics ventricular_CardiacOutput */
            ventricular_CardiacOutput?: (number|null);
        }

        /** Represents a MsgSimpsonStatistics. */
        class MsgSimpsonStatistics implements IMsgSimpsonStatistics {

            /**
             * Constructs a new MsgSimpsonStatistics.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics);

            /** MsgSimpsonStatistics ventricularType. */
            public ventricularType: string;

            /** MsgSimpsonStatistics EDVentricularVolume. */
            public EDVentricularVolume: number;

            /** MsgSimpsonStatistics ESVentricularVolume. */
            public ESVentricularVolume: number;

            /** MsgSimpsonStatistics ventricularStrokeVolume. */
            public ventricularStrokeVolume: number;

            /** MsgSimpsonStatistics ventricularEjectionFraction. */
            public ventricularEjectionFraction: number;

            /** MsgSimpsonStatistics ventricular_CardiacOutput. */
            public ventricular_CardiacOutput: number;

            /**
             * Creates a new MsgSimpsonStatistics instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSimpsonStatistics instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics): Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics;

            /**
             * Encodes the specified MsgSimpsonStatistics message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics.verify|verify} messages.
             * @param message MsgSimpsonStatistics message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSimpsonStatistics message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics.verify|verify} messages.
             * @param message MsgSimpsonStatistics message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSimpsonStatistics message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSimpsonStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics;

            /**
             * Decodes a MsgSimpsonStatistics message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSimpsonStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics;

            /**
             * Verifies a MsgSimpsonStatistics message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSimpsonStatistics message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSimpsonStatistics
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics;

            /**
             * Creates a plain object from a MsgSimpsonStatistics message. Also converts values to other types if specified.
             * @param message MsgSimpsonStatistics
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSimpsonStatistics to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSimpsonStatisticsList. */
        interface IMsgSimpsonStatisticsList {

            /** MsgSimpsonStatisticsList simpsonStatistics */
            simpsonStatistics?: (Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics[]|null);

            /** MsgSimpsonStatisticsList ventricularWallMass */
            ventricularWallMass?: (number|null);

            /** MsgSimpsonStatisticsList heartRate */
            heartRate?: (number|null);
        }

        /** Represents a MsgSimpsonStatisticsList. */
        class MsgSimpsonStatisticsList implements IMsgSimpsonStatisticsList {

            /**
             * Constructs a new MsgSimpsonStatisticsList.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatisticsList);

            /** MsgSimpsonStatisticsList simpsonStatistics. */
            public simpsonStatistics: Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatistics[];

            /** MsgSimpsonStatisticsList ventricularWallMass. */
            public ventricularWallMass: number;

            /** MsgSimpsonStatisticsList heartRate. */
            public heartRate: number;

            /**
             * Creates a new MsgSimpsonStatisticsList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSimpsonStatisticsList instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatisticsList): Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList;

            /**
             * Encodes the specified MsgSimpsonStatisticsList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList.verify|verify} messages.
             * @param message MsgSimpsonStatisticsList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatisticsList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSimpsonStatisticsList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList.verify|verify} messages.
             * @param message MsgSimpsonStatisticsList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMsgSimpsonStatisticsList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSimpsonStatisticsList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSimpsonStatisticsList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList;

            /**
             * Decodes a MsgSimpsonStatisticsList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSimpsonStatisticsList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList;

            /**
             * Verifies a MsgSimpsonStatisticsList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSimpsonStatisticsList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSimpsonStatisticsList
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList;

            /**
             * Creates a plain object from a MsgSimpsonStatisticsList message. Also converts values to other types if specified.
             * @param message MsgSimpsonStatisticsList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MsgSimpsonStatisticsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSimpsonStatisticsList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageVentricleContourInfo. */
        interface IMessageVentricleContourInfo {

            /** MessageVentricleContourInfo VisibleContourType */
            VisibleContourType: Mcsf.CTCardiacCommonProtocol.VentricleContourType;

            /** MessageVentricleContourInfo ContourItem */
            ContourItem?: (Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem[]|null);
        }

        /** Represents a MessageVentricleContourInfo. */
        class MessageVentricleContourInfo implements IMessageVentricleContourInfo {

            /**
             * Constructs a new MessageVentricleContourInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourInfo);

            /** MessageVentricleContourInfo VisibleContourType. */
            public VisibleContourType: Mcsf.CTCardiacCommonProtocol.VentricleContourType;

            /** MessageVentricleContourInfo ContourItem. */
            public ContourItem: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem[];

            /**
             * Creates a new MessageVentricleContourInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageVentricleContourInfo instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourInfo): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo;

            /**
             * Encodes the specified MessageVentricleContourInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo.verify|verify} messages.
             * @param message MessageVentricleContourInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageVentricleContourInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo.verify|verify} messages.
             * @param message MessageVentricleContourInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageVentricleContourInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageVentricleContourInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo;

            /**
             * Decodes a MessageVentricleContourInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageVentricleContourInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo;

            /**
             * Verifies a MessageVentricleContourInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageVentricleContourInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageVentricleContourInfo
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo;

            /**
             * Creates a plain object from a MessageVentricleContourInfo message. Also converts values to other types if specified.
             * @param message MessageVentricleContourInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageVentricleContourInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageVentricleContourInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageVentricleContourItem. */
        interface IMessageVentricleContourItem {

            /** MessageVentricleContourItem ContourType */
            ContourType: Mcsf.CTCardiacCommonProtocol.VentricleContourType;

            /** MessageVentricleContourItem ContourPoints */
            ContourPoints?: (Mcsf.CTCardiacCommonProtocol.IMessageContourPoints[]|null);
        }

        /** Represents a MessageVentricleContourItem. */
        class MessageVentricleContourItem implements IMessageVentricleContourItem {

            /**
             * Constructs a new MessageVentricleContourItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem);

            /** MessageVentricleContourItem ContourType. */
            public ContourType: Mcsf.CTCardiacCommonProtocol.VentricleContourType;

            /** MessageVentricleContourItem ContourPoints. */
            public ContourPoints: Mcsf.CTCardiacCommonProtocol.IMessageContourPoints[];

            /**
             * Creates a new MessageVentricleContourItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageVentricleContourItem instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem;

            /**
             * Encodes the specified MessageVentricleContourItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.verify|verify} messages.
             * @param message MessageVentricleContourItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageVentricleContourItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem.verify|verify} messages.
             * @param message MessageVentricleContourItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageVentricleContourItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageVentricleContourItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem;

            /**
             * Decodes a MessageVentricleContourItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageVentricleContourItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem;

            /**
             * Verifies a MessageVentricleContourItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageVentricleContourItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageVentricleContourItem
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem;

            /**
             * Creates a plain object from a MessageVentricleContourItem message. Also converts values to other types if specified.
             * @param message MessageVentricleContourItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageVentricleContourItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageVentricleContourItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageContourPoints. */
        interface IMessageContourPoints {

            /** MessageContourPoints OutPoints */
            OutPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /** MessageContourPoints InnerPoints */
            InnerPoints?: (Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds[]|null);
        }

        /** Represents a MessageContourPoints. */
        class MessageContourPoints implements IMessageContourPoints {

            /**
             * Constructs a new MessageContourPoints.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageContourPoints);

            /** MessageContourPoints OutPoints. */
            public OutPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /** MessageContourPoints InnerPoints. */
            public InnerPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds[];

            /**
             * Creates a new MessageContourPoints instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageContourPoints instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageContourPoints): Mcsf.CTCardiacCommonProtocol.MessageContourPoints;

            /**
             * Encodes the specified MessageContourPoints message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourPoints.verify|verify} messages.
             * @param message MessageContourPoints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageContourPoints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageContourPoints message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageContourPoints.verify|verify} messages.
             * @param message MessageContourPoints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageContourPoints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageContourPoints message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageContourPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageContourPoints;

            /**
             * Decodes a MessageContourPoints message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageContourPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageContourPoints;

            /**
             * Verifies a MessageContourPoints message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageContourPoints message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageContourPoints
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageContourPoints;

            /**
             * Creates a plain object from a MessageContourPoints message. Also converts values to other types if specified.
             * @param message MessageContourPoints
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageContourPoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageContourPoints to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageVentricleContourType. */
        interface IMessageVentricleContourType {

            /** MessageVentricleContourType ContourType */
            ContourType: Mcsf.CTCardiacCommonProtocol.VentricleContourType;
        }

        /** Represents a MessageVentricleContourType. */
        class MessageVentricleContourType implements IMessageVentricleContourType {

            /**
             * Constructs a new MessageVentricleContourType.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourType);

            /** MessageVentricleContourType ContourType. */
            public ContourType: Mcsf.CTCardiacCommonProtocol.VentricleContourType;

            /**
             * Creates a new MessageVentricleContourType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageVentricleContourType instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourType): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType;

            /**
             * Encodes the specified MessageVentricleContourType message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType.verify|verify} messages.
             * @param message MessageVentricleContourType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageVentricleContourType message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType.verify|verify} messages.
             * @param message MessageVentricleContourType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageVentricleContourType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageVentricleContourType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType;

            /**
             * Decodes a MessageVentricleContourType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageVentricleContourType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType;

            /**
             * Verifies a MessageVentricleContourType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageVentricleContourType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageVentricleContourType
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType;

            /**
             * Creates a plain object from a MessageVentricleContourType message. Also converts values to other types if specified.
             * @param message MessageVentricleContourType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageVentricleContourType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageVentricleContourType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageChangeVentricleContourPoints. */
        interface IMessageChangeVentricleContourPoints {

            /** MessageChangeVentricleContourPoints ContourType */
            ContourType: Mcsf.CTCardiacCommonProtocol.VentricleContourType;

            /** MessageChangeVentricleContourPoints OldPoints */
            OldPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /** MessageChangeVentricleContourPoints NewPoints */
            NewPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;
        }

        /** Represents a MessageChangeVentricleContourPoints. */
        class MessageChangeVentricleContourPoints implements IMessageChangeVentricleContourPoints {

            /**
             * Constructs a new MessageChangeVentricleContourPoints.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageChangeVentricleContourPoints);

            /** MessageChangeVentricleContourPoints ContourType. */
            public ContourType: Mcsf.CTCardiacCommonProtocol.VentricleContourType;

            /** MessageChangeVentricleContourPoints OldPoints. */
            public OldPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /** MessageChangeVentricleContourPoints NewPoints. */
            public NewPoints: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /**
             * Creates a new MessageChangeVentricleContourPoints instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageChangeVentricleContourPoints instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageChangeVentricleContourPoints): Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints;

            /**
             * Encodes the specified MessageChangeVentricleContourPoints message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints.verify|verify} messages.
             * @param message MessageChangeVentricleContourPoints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageChangeVentricleContourPoints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageChangeVentricleContourPoints message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints.verify|verify} messages.
             * @param message MessageChangeVentricleContourPoints message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageChangeVentricleContourPoints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageChangeVentricleContourPoints message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageChangeVentricleContourPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints;

            /**
             * Decodes a MessageChangeVentricleContourPoints message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageChangeVentricleContourPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints;

            /**
             * Verifies a MessageChangeVentricleContourPoints message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageChangeVentricleContourPoints message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageChangeVentricleContourPoints
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints;

            /**
             * Creates a plain object from a MessageChangeVentricleContourPoints message. Also converts values to other types if specified.
             * @param message MessageChangeVentricleContourPoints
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageChangeVentricleContourPoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageChangeVentricleContourPoints to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageVentricleContourRedoUndoInfo. */
        interface IMessageVentricleContourRedoUndoInfo {

            /** MessageVentricleContourRedoUndoInfo RedoUndoType */
            RedoUndoType: Mcsf.CTCardiacCommonProtocol.VentricleContourRedoUndoType;

            /** MessageVentricleContourRedoUndoInfo IsEnable */
            IsEnable?: (boolean|null);
        }

        /** Represents a MessageVentricleContourRedoUndoInfo. */
        class MessageVentricleContourRedoUndoInfo implements IMessageVentricleContourRedoUndoInfo {

            /**
             * Constructs a new MessageVentricleContourRedoUndoInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourRedoUndoInfo);

            /** MessageVentricleContourRedoUndoInfo RedoUndoType. */
            public RedoUndoType: Mcsf.CTCardiacCommonProtocol.VentricleContourRedoUndoType;

            /** MessageVentricleContourRedoUndoInfo IsEnable. */
            public IsEnable: boolean;

            /**
             * Creates a new MessageVentricleContourRedoUndoInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageVentricleContourRedoUndoInfo instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourRedoUndoInfo): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo;

            /**
             * Encodes the specified MessageVentricleContourRedoUndoInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo.verify|verify} messages.
             * @param message MessageVentricleContourRedoUndoInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourRedoUndoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageVentricleContourRedoUndoInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo.verify|verify} messages.
             * @param message MessageVentricleContourRedoUndoInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageVentricleContourRedoUndoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageVentricleContourRedoUndoInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageVentricleContourRedoUndoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo;

            /**
             * Decodes a MessageVentricleContourRedoUndoInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageVentricleContourRedoUndoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo;

            /**
             * Verifies a MessageVentricleContourRedoUndoInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageVentricleContourRedoUndoInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageVentricleContourRedoUndoInfo
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo;

            /**
             * Creates a plain object from a MessageVentricleContourRedoUndoInfo message. Also converts values to other types if specified.
             * @param message MessageVentricleContourRedoUndoInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageVentricleContourRedoUndoInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageVentricleContourRedoUndoInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessagePlaqueParameterItem. */
        interface IMessagePlaqueParameterItem {

            /** MessagePlaqueParameterItem ID */
            ID: number;

            /** MessagePlaqueParameterItem Type */
            Type: string;

            /** MessagePlaqueParameterItem Distance */
            Distance: number;

            /** MessagePlaqueParameterItem Volume */
            Volume: number;

            /** MessagePlaqueParameterItem CalcificPercentage */
            CalcificPercentage: number;

            /** MessagePlaqueParameterItem FibrousPercentage */
            FibrousPercentage: number;

            /** MessagePlaqueParameterItem LipidicPercentage */
            LipidicPercentage: number;
        }

        /** Represents a MessagePlaqueParameterItem. */
        class MessagePlaqueParameterItem implements IMessagePlaqueParameterItem {

            /**
             * Constructs a new MessagePlaqueParameterItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem);

            /** MessagePlaqueParameterItem ID. */
            public ID: number;

            /** MessagePlaqueParameterItem Type. */
            public Type: string;

            /** MessagePlaqueParameterItem Distance. */
            public Distance: number;

            /** MessagePlaqueParameterItem Volume. */
            public Volume: number;

            /** MessagePlaqueParameterItem CalcificPercentage. */
            public CalcificPercentage: number;

            /** MessagePlaqueParameterItem FibrousPercentage. */
            public FibrousPercentage: number;

            /** MessagePlaqueParameterItem LipidicPercentage. */
            public LipidicPercentage: number;

            /**
             * Creates a new MessagePlaqueParameterItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessagePlaqueParameterItem instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem): Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem;

            /**
             * Encodes the specified MessagePlaqueParameterItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem.verify|verify} messages.
             * @param message MessagePlaqueParameterItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessagePlaqueParameterItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem.verify|verify} messages.
             * @param message MessagePlaqueParameterItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessagePlaqueParameterItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessagePlaqueParameterItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem;

            /**
             * Decodes a MessagePlaqueParameterItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessagePlaqueParameterItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem;

            /**
             * Verifies a MessagePlaqueParameterItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessagePlaqueParameterItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessagePlaqueParameterItem
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem;

            /**
             * Creates a plain object from a MessagePlaqueParameterItem message. Also converts values to other types if specified.
             * @param message MessagePlaqueParameterItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessagePlaqueParameterItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessagePlaqueParameterTable. */
        interface IMessagePlaqueParameterTable {

            /** MessagePlaqueParameterTable CoronaryName */
            CoronaryName: string;

            /** MessagePlaqueParameterTable Items */
            Items?: (Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem[]|null);

            /** MessagePlaqueParameterTable SelectedID */
            SelectedID: number;
        }

        /** Represents a MessagePlaqueParameterTable. */
        class MessagePlaqueParameterTable implements IMessagePlaqueParameterTable {

            /**
             * Constructs a new MessagePlaqueParameterTable.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterTable);

            /** MessagePlaqueParameterTable CoronaryName. */
            public CoronaryName: string;

            /** MessagePlaqueParameterTable Items. */
            public Items: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterItem[];

            /** MessagePlaqueParameterTable SelectedID. */
            public SelectedID: number;

            /**
             * Creates a new MessagePlaqueParameterTable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessagePlaqueParameterTable instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterTable): Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable;

            /**
             * Encodes the specified MessagePlaqueParameterTable message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable.verify|verify} messages.
             * @param message MessagePlaqueParameterTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessagePlaqueParameterTable message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable.verify|verify} messages.
             * @param message MessagePlaqueParameterTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessagePlaqueParameterTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessagePlaqueParameterTable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessagePlaqueParameterTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable;

            /**
             * Decodes a MessagePlaqueParameterTable message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessagePlaqueParameterTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable;

            /**
             * Verifies a MessagePlaqueParameterTable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessagePlaqueParameterTable message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessagePlaqueParameterTable
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable;

            /**
             * Creates a plain object from a MessagePlaqueParameterTable message. Also converts values to other types if specified.
             * @param message MessagePlaqueParameterTable
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessagePlaqueParameterTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessagePlaqueParameterTable to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageSimpsonCurve. */
        interface IMessageSimpsonCurve {

            /** MessageSimpsonCurve Type */
            Type: Mcsf.CTCardiacCommonProtocol.SimpsonCurveType;

            /** MessageSimpsonCurve Value */
            Value: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;
        }

        /** Represents a MessageSimpsonCurve. */
        class MessageSimpsonCurve implements IMessageSimpsonCurve {

            /**
             * Constructs a new MessageSimpsonCurve.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve);

            /** MessageSimpsonCurve Type. */
            public Type: Mcsf.CTCardiacCommonProtocol.SimpsonCurveType;

            /** MessageSimpsonCurve Value. */
            public Value: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2Ds;

            /**
             * Creates a new MessageSimpsonCurve instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageSimpsonCurve instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve): Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve;

            /**
             * Encodes the specified MessageSimpsonCurve message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.verify|verify} messages.
             * @param message MessageSimpsonCurve message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageSimpsonCurve message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve.verify|verify} messages.
             * @param message MessageSimpsonCurve message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageSimpsonCurve message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageSimpsonCurve
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve;

            /**
             * Decodes a MessageSimpsonCurve message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageSimpsonCurve
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve;

            /**
             * Verifies a MessageSimpsonCurve message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageSimpsonCurve message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageSimpsonCurve
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve;

            /**
             * Creates a plain object from a MessageSimpsonCurve message. Also converts values to other types if specified.
             * @param message MessageSimpsonCurve
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurve, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageSimpsonCurve to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageSimpsonCurveList. */
        interface IMessageSimpsonCurveList {

            /** MessageSimpsonCurveList SimpsonCurve */
            SimpsonCurve?: (Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve[]|null);
        }

        /** Represents a MessageSimpsonCurveList. */
        class MessageSimpsonCurveList implements IMessageSimpsonCurveList {

            /**
             * Constructs a new MessageSimpsonCurveList.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurveList);

            /** MessageSimpsonCurveList SimpsonCurve. */
            public SimpsonCurve: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurve[];

            /**
             * Creates a new MessageSimpsonCurveList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageSimpsonCurveList instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurveList): Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList;

            /**
             * Encodes the specified MessageSimpsonCurveList message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList.verify|verify} messages.
             * @param message MessageSimpsonCurveList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurveList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageSimpsonCurveList message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList.verify|verify} messages.
             * @param message MessageSimpsonCurveList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonCurveList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageSimpsonCurveList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageSimpsonCurveList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList;

            /**
             * Decodes a MessageSimpsonCurveList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageSimpsonCurveList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList;

            /**
             * Verifies a MessageSimpsonCurveList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageSimpsonCurveList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageSimpsonCurveList
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList;

            /**
             * Creates a plain object from a MessageSimpsonCurveList message. Also converts values to other types if specified.
             * @param message MessageSimpsonCurveList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageSimpsonCurveList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageSimpsonCurveList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageSimpsonBullEyeMapInfo. */
        interface IMessageSimpsonBullEyeMapInfo {

            /** MessageSimpsonBullEyeMapInfo CenterPoint */
            CenterPoint: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageSimpsonBullEyeMapInfo OuterPoint */
            OuterPoint: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageSimpsonBullEyeMapInfo MeanValue */
            MeanValue?: (number[]|null);

            /** MessageSimpsonBullEyeMapInfo PsuedoColorKey */
            PsuedoColorKey: string;
        }

        /** Represents a MessageSimpsonBullEyeMapInfo. */
        class MessageSimpsonBullEyeMapInfo implements IMessageSimpsonBullEyeMapInfo {

            /**
             * Constructs a new MessageSimpsonBullEyeMapInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonBullEyeMapInfo);

            /** MessageSimpsonBullEyeMapInfo CenterPoint. */
            public CenterPoint: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageSimpsonBullEyeMapInfo OuterPoint. */
            public OuterPoint: Mcsf.CTCardiacCommonProtocol.IMessageHRTPoint2D;

            /** MessageSimpsonBullEyeMapInfo MeanValue. */
            public MeanValue: number[];

            /** MessageSimpsonBullEyeMapInfo PsuedoColorKey. */
            public PsuedoColorKey: string;

            /**
             * Creates a new MessageSimpsonBullEyeMapInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageSimpsonBullEyeMapInfo instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonBullEyeMapInfo): Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo;

            /**
             * Encodes the specified MessageSimpsonBullEyeMapInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo.verify|verify} messages.
             * @param message MessageSimpsonBullEyeMapInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonBullEyeMapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageSimpsonBullEyeMapInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo.verify|verify} messages.
             * @param message MessageSimpsonBullEyeMapInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageSimpsonBullEyeMapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageSimpsonBullEyeMapInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageSimpsonBullEyeMapInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo;

            /**
             * Decodes a MessageSimpsonBullEyeMapInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageSimpsonBullEyeMapInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo;

            /**
             * Verifies a MessageSimpsonBullEyeMapInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageSimpsonBullEyeMapInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageSimpsonBullEyeMapInfo
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo;

            /**
             * Creates a plain object from a MessageSimpsonBullEyeMapInfo message. Also converts values to other types if specified.
             * @param message MessageSimpsonBullEyeMapInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageSimpsonBullEyeMapInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageSimpsonBullEyeMapInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageCoronaryOrientation. */
        interface IMessageCoronaryOrientation {

            /** MessageCoronaryOrientation OrientationType */
            OrientationType: Mcsf.CTCardiacCommonProtocol.CoronaryOrientationType;
        }

        /** Represents a MessageCoronaryOrientation. */
        class MessageCoronaryOrientation implements IMessageCoronaryOrientation {

            /**
             * Constructs a new MessageCoronaryOrientation.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCoronaryOrientation);

            /** MessageCoronaryOrientation OrientationType. */
            public OrientationType: Mcsf.CTCardiacCommonProtocol.CoronaryOrientationType;

            /**
             * Creates a new MessageCoronaryOrientation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageCoronaryOrientation instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCoronaryOrientation): Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation;

            /**
             * Encodes the specified MessageCoronaryOrientation message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation.verify|verify} messages.
             * @param message MessageCoronaryOrientation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageCoronaryOrientation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageCoronaryOrientation message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation.verify|verify} messages.
             * @param message MessageCoronaryOrientation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageCoronaryOrientation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageCoronaryOrientation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageCoronaryOrientation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation;

            /**
             * Decodes a MessageCoronaryOrientation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageCoronaryOrientation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation;

            /**
             * Verifies a MessageCoronaryOrientation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageCoronaryOrientation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageCoronaryOrientation
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation;

            /**
             * Creates a plain object from a MessageCoronaryOrientation message. Also converts values to other types if specified.
             * @param message MessageCoronaryOrientation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageCoronaryOrientation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageCoronaryOrientation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageBookMarkInfo. */
        interface IMessageBookMarkInfo {

            /** MessageBookMarkInfo VolumeUIDED */
            VolumeUIDED: string;

            /** MessageBookMarkInfo VolumeUIDES */
            VolumeUIDES: string;

            /** MessageBookMarkInfo ShowPapillaryMuscle */
            ShowPapillaryMuscle: boolean;
        }

        /** Represents a MessageBookMarkInfo. */
        class MessageBookMarkInfo implements IMessageBookMarkInfo {

            /**
             * Constructs a new MessageBookMarkInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageBookMarkInfo);

            /** MessageBookMarkInfo VolumeUIDED. */
            public VolumeUIDED: string;

            /** MessageBookMarkInfo VolumeUIDES. */
            public VolumeUIDES: string;

            /** MessageBookMarkInfo ShowPapillaryMuscle. */
            public ShowPapillaryMuscle: boolean;

            /**
             * Creates a new MessageBookMarkInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageBookMarkInfo instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageBookMarkInfo): Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo;

            /**
             * Encodes the specified MessageBookMarkInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo.verify|verify} messages.
             * @param message MessageBookMarkInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageBookMarkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageBookMarkInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo.verify|verify} messages.
             * @param message MessageBookMarkInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageBookMarkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageBookMarkInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageBookMarkInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo;

            /**
             * Decodes a MessageBookMarkInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageBookMarkInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo;

            /**
             * Verifies a MessageBookMarkInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageBookMarkInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageBookMarkInfo
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo;

            /**
             * Creates a plain object from a MessageBookMarkInfo message. Also converts values to other types if specified.
             * @param message MessageBookMarkInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageBookMarkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageBookMarkInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageBookmarkStatus. */
        interface IMessageBookmarkStatus {

            /** MessageBookmarkStatus Status */
            Status?: (Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus[]|null);
        }

        /** Represents a MessageBookmarkStatus. */
        class MessageBookmarkStatus implements IMessageBookmarkStatus {

            /**
             * Constructs a new MessageBookmarkStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageBookmarkStatus);

            /** MessageBookmarkStatus Status. */
            public Status: Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus[];

            /**
             * Creates a new MessageBookmarkStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageBookmarkStatus instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageBookmarkStatus): Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus;

            /**
             * Encodes the specified MessageBookmarkStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus.verify|verify} messages.
             * @param message MessageBookmarkStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageBookmarkStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageBookmarkStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus.verify|verify} messages.
             * @param message MessageBookmarkStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageBookmarkStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageBookmarkStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageBookmarkStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus;

            /**
             * Decodes a MessageBookmarkStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageBookmarkStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus;

            /**
             * Verifies a MessageBookmarkStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageBookmarkStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageBookmarkStatus
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus;

            /**
             * Creates a plain object from a MessageBookmarkStatus message. Also converts values to other types if specified.
             * @param message MessageBookmarkStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageBookmarkStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageBookmarkStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageWorkStepStatus. */
        interface IMessageWorkStepStatus {

            /** MessageWorkStepStatus WorkStepName */
            WorkStepName: string;

            /** MessageWorkStepStatus WorkStepStatus */
            WorkStepStatus: Uint8Array;
        }

        /** Represents a MessageWorkStepStatus. */
        class MessageWorkStepStatus implements IMessageWorkStepStatus {

            /**
             * Constructs a new MessageWorkStepStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus);

            /** MessageWorkStepStatus WorkStepName. */
            public WorkStepName: string;

            /** MessageWorkStepStatus WorkStepStatus. */
            public WorkStepStatus: Uint8Array;

            /**
             * Creates a new MessageWorkStepStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageWorkStepStatus instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus): Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus;

            /**
             * Encodes the specified MessageWorkStepStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus.verify|verify} messages.
             * @param message MessageWorkStepStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageWorkStepStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus.verify|verify} messages.
             * @param message MessageWorkStepStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageWorkStepStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageWorkStepStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus;

            /**
             * Decodes a MessageWorkStepStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus;

            /**
             * Verifies a MessageWorkStepStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageWorkStepStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageWorkStepStatus
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus;

            /**
             * Creates a plain object from a MessageWorkStepStatus message. Also converts values to other types if specified.
             * @param message MessageWorkStepStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageWorkStepStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageWorkStepStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageCoronaryWorkStepStatus. */
        interface IMessageCoronaryWorkStepStatus {

            /** MessageCoronaryWorkStepStatus IsShowCoronarySinus */
            IsShowCoronarySinus: boolean;
        }

        /** Represents a MessageCoronaryWorkStepStatus. */
        class MessageCoronaryWorkStepStatus implements IMessageCoronaryWorkStepStatus {

            /**
             * Constructs a new MessageCoronaryWorkStepStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCoronaryWorkStepStatus);

            /** MessageCoronaryWorkStepStatus IsShowCoronarySinus. */
            public IsShowCoronarySinus: boolean;

            /**
             * Creates a new MessageCoronaryWorkStepStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageCoronaryWorkStepStatus instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageCoronaryWorkStepStatus): Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus;

            /**
             * Encodes the specified MessageCoronaryWorkStepStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus.verify|verify} messages.
             * @param message MessageCoronaryWorkStepStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageCoronaryWorkStepStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageCoronaryWorkStepStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus.verify|verify} messages.
             * @param message MessageCoronaryWorkStepStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageCoronaryWorkStepStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageCoronaryWorkStepStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageCoronaryWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus;

            /**
             * Decodes a MessageCoronaryWorkStepStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageCoronaryWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus;

            /**
             * Verifies a MessageCoronaryWorkStepStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageCoronaryWorkStepStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageCoronaryWorkStepStatus
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus;

            /**
             * Creates a plain object from a MessageCoronaryWorkStepStatus message. Also converts values to other types if specified.
             * @param message MessageCoronaryWorkStepStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageCoronaryWorkStepStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageCoronaryWorkStepStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageChangeSliderLocationParams. */
        interface IMessageChangeSliderLocationParams {

            /** MessageChangeSliderLocationParams SliderType */
            SliderType?: (Mcsf.CTCardiacCommonProtocol.StenosisMarkType|null);

            /** MessageChangeSliderLocationParams ChangeType */
            ChangeType: Mcsf.CTCardiacCommonProtocol.SliderLocationChangeType;

            /** MessageChangeSliderLocationParams ChangeValue */
            ChangeValue: number;
        }

        /** Represents a MessageChangeSliderLocationParams. */
        class MessageChangeSliderLocationParams implements IMessageChangeSliderLocationParams {

            /**
             * Constructs a new MessageChangeSliderLocationParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageChangeSliderLocationParams);

            /** MessageChangeSliderLocationParams SliderType. */
            public SliderType: Mcsf.CTCardiacCommonProtocol.StenosisMarkType;

            /** MessageChangeSliderLocationParams ChangeType. */
            public ChangeType: Mcsf.CTCardiacCommonProtocol.SliderLocationChangeType;

            /** MessageChangeSliderLocationParams ChangeValue. */
            public ChangeValue: number;

            /**
             * Creates a new MessageChangeSliderLocationParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageChangeSliderLocationParams instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageChangeSliderLocationParams): Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams;

            /**
             * Encodes the specified MessageChangeSliderLocationParams message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams.verify|verify} messages.
             * @param message MessageChangeSliderLocationParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageChangeSliderLocationParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageChangeSliderLocationParams message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams.verify|verify} messages.
             * @param message MessageChangeSliderLocationParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageChangeSliderLocationParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageChangeSliderLocationParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageChangeSliderLocationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams;

            /**
             * Decodes a MessageChangeSliderLocationParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageChangeSliderLocationParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams;

            /**
             * Verifies a MessageChangeSliderLocationParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageChangeSliderLocationParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageChangeSliderLocationParams
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams;

            /**
             * Creates a plain object from a MessageChangeSliderLocationParams message. Also converts values to other types if specified.
             * @param message MessageChangeSliderLocationParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageChangeSliderLocationParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageChangeSliderLocationParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageFunctionalWorkStepStatus. */
        interface IMessageFunctionalWorkStepStatus {

            /** MessageFunctionalWorkStepStatus bsaHeight */
            bsaHeight: number;

            /** MessageFunctionalWorkStepStatus bsaWeight */
            bsaWeight: number;

            /** MessageFunctionalWorkStepStatus ValveType */
            ValveType: number;
        }

        /** Represents a MessageFunctionalWorkStepStatus. */
        class MessageFunctionalWorkStepStatus implements IMessageFunctionalWorkStepStatus {

            /**
             * Constructs a new MessageFunctionalWorkStepStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageFunctionalWorkStepStatus);

            /** MessageFunctionalWorkStepStatus bsaHeight. */
            public bsaHeight: number;

            /** MessageFunctionalWorkStepStatus bsaWeight. */
            public bsaWeight: number;

            /** MessageFunctionalWorkStepStatus ValveType. */
            public ValveType: number;

            /**
             * Creates a new MessageFunctionalWorkStepStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageFunctionalWorkStepStatus instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageFunctionalWorkStepStatus): Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus;

            /**
             * Encodes the specified MessageFunctionalWorkStepStatus message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus.verify|verify} messages.
             * @param message MessageFunctionalWorkStepStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageFunctionalWorkStepStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageFunctionalWorkStepStatus message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus.verify|verify} messages.
             * @param message MessageFunctionalWorkStepStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageFunctionalWorkStepStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageFunctionalWorkStepStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageFunctionalWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus;

            /**
             * Decodes a MessageFunctionalWorkStepStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageFunctionalWorkStepStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus;

            /**
             * Verifies a MessageFunctionalWorkStepStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageFunctionalWorkStepStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageFunctionalWorkStepStatus
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus;

            /**
             * Creates a plain object from a MessageFunctionalWorkStepStatus message. Also converts values to other types if specified.
             * @param message MessageFunctionalWorkStepStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageFunctionalWorkStepStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageFunctionalWorkStepStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageVolumeInfoItem. */
        interface IMessageVolumeInfoItem {

            /** MessageVolumeInfoItem VolumeName */
            VolumeName: string;

            /** MessageVolumeInfoItem InstanceNumberRange */
            InstanceNumberRange: string;

            /** MessageVolumeInfoItem ImageCount */
            ImageCount: number;

            /** MessageVolumeInfoItem PhaseInfo */
            PhaseInfo: string;

            /** MessageVolumeInfoItem IsLoaded */
            IsLoaded: boolean;
        }

        /** Represents a MessageVolumeInfoItem. */
        class MessageVolumeInfoItem implements IMessageVolumeInfoItem {

            /**
             * Constructs a new MessageVolumeInfoItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem);

            /** MessageVolumeInfoItem VolumeName. */
            public VolumeName: string;

            /** MessageVolumeInfoItem InstanceNumberRange. */
            public InstanceNumberRange: string;

            /** MessageVolumeInfoItem ImageCount. */
            public ImageCount: number;

            /** MessageVolumeInfoItem PhaseInfo. */
            public PhaseInfo: string;

            /** MessageVolumeInfoItem IsLoaded. */
            public IsLoaded: boolean;

            /**
             * Creates a new MessageVolumeInfoItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageVolumeInfoItem instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem): Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem;

            /**
             * Encodes the specified MessageVolumeInfoItem message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem.verify|verify} messages.
             * @param message MessageVolumeInfoItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageVolumeInfoItem message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem.verify|verify} messages.
             * @param message MessageVolumeInfoItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageVolumeInfoItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageVolumeInfoItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem;

            /**
             * Decodes a MessageVolumeInfoItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageVolumeInfoItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem;

            /**
             * Verifies a MessageVolumeInfoItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageVolumeInfoItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageVolumeInfoItem
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem;

            /**
             * Creates a plain object from a MessageVolumeInfoItem message. Also converts values to other types if specified.
             * @param message MessageVolumeInfoItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageVolumeInfoItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageVolumeInfoItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageVolumeInfos. */
        interface IMessageVolumeInfos {

            /** MessageVolumeInfos VolumeInfo */
            VolumeInfo?: (Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem[]|null);
        }

        /** Represents a MessageVolumeInfos. */
        class MessageVolumeInfos implements IMessageVolumeInfos {

            /**
             * Constructs a new MessageVolumeInfos.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfos);

            /** MessageVolumeInfos VolumeInfo. */
            public VolumeInfo: Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfoItem[];

            /**
             * Creates a new MessageVolumeInfos instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageVolumeInfos instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfos): Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos;

            /**
             * Encodes the specified MessageVolumeInfos message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos.verify|verify} messages.
             * @param message MessageVolumeInfos message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfos, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageVolumeInfos message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos.verify|verify} messages.
             * @param message MessageVolumeInfos message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageVolumeInfos, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageVolumeInfos message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageVolumeInfos
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos;

            /**
             * Decodes a MessageVolumeInfos message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageVolumeInfos
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos;

            /**
             * Verifies a MessageVolumeInfos message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageVolumeInfos message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageVolumeInfos
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos;

            /**
             * Creates a plain object from a MessageVolumeInfos message. Also converts values to other types if specified.
             * @param message MessageVolumeInfos
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageVolumeInfos, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageVolumeInfos to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStatusNotify. */
        interface IMessageStatusNotify {

            /** MessageStatusNotify level */
            level: Mcsf.CTCardiacCommonProtocol.StatusLevel;

            /** MessageStatusNotify ID */
            ID: number;

            /** MessageStatusNotify StatusDetail */
            StatusDetail: string;
        }

        /** Represents a MessageStatusNotify. */
        class MessageStatusNotify implements IMessageStatusNotify {

            /**
             * Constructs a new MessageStatusNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStatusNotify);

            /** MessageStatusNotify level. */
            public level: Mcsf.CTCardiacCommonProtocol.StatusLevel;

            /** MessageStatusNotify ID. */
            public ID: number;

            /** MessageStatusNotify StatusDetail. */
            public StatusDetail: string;

            /**
             * Creates a new MessageStatusNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStatusNotify instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStatusNotify): Mcsf.CTCardiacCommonProtocol.MessageStatusNotify;

            /**
             * Encodes the specified MessageStatusNotify message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStatusNotify.verify|verify} messages.
             * @param message MessageStatusNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStatusNotify, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStatusNotify message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStatusNotify.verify|verify} messages.
             * @param message MessageStatusNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStatusNotify, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStatusNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStatusNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStatusNotify;

            /**
             * Decodes a MessageStatusNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStatusNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStatusNotify;

            /**
             * Verifies a MessageStatusNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStatusNotify message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStatusNotify
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStatusNotify;

            /**
             * Creates a plain object from a MessageStatusNotify message. Also converts values to other types if specified.
             * @param message MessageStatusNotify
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStatusNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStatusNotify to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageSelectedStenosisInfo. */
        interface IMessageSelectedStenosisInfo {

            /** MessageSelectedStenosisInfo Length */
            Length: number;

            /** MessageSelectedStenosisInfo StenosisRate */
            StenosisRate: number;

            /** MessageSelectedStenosisInfo findingUid */
            findingUid: string;
        }

        /** Represents a MessageSelectedStenosisInfo. */
        class MessageSelectedStenosisInfo implements IMessageSelectedStenosisInfo {

            /**
             * Constructs a new MessageSelectedStenosisInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSelectedStenosisInfo);

            /** MessageSelectedStenosisInfo Length. */
            public Length: number;

            /** MessageSelectedStenosisInfo StenosisRate. */
            public StenosisRate: number;

            /** MessageSelectedStenosisInfo findingUid. */
            public findingUid: string;

            /**
             * Creates a new MessageSelectedStenosisInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageSelectedStenosisInfo instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageSelectedStenosisInfo): Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo;

            /**
             * Encodes the specified MessageSelectedStenosisInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo.verify|verify} messages.
             * @param message MessageSelectedStenosisInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageSelectedStenosisInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageSelectedStenosisInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo.verify|verify} messages.
             * @param message MessageSelectedStenosisInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageSelectedStenosisInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageSelectedStenosisInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageSelectedStenosisInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo;

            /**
             * Decodes a MessageSelectedStenosisInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageSelectedStenosisInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo;

            /**
             * Verifies a MessageSelectedStenosisInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageSelectedStenosisInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageSelectedStenosisInfo
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo;

            /**
             * Creates a plain object from a MessageSelectedStenosisInfo message. Also converts values to other types if specified.
             * @param message MessageSelectedStenosisInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageSelectedStenosisInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageSelectedStenosisInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageStenosisRangeMarkInfo. */
        interface IMessageStenosisRangeMarkInfo {

            /** MessageStenosisRangeMarkInfo Sliders */
            Sliders?: (Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider[]|null);

            /** MessageStenosisRangeMarkInfo ProximalIndex */
            ProximalIndex: number;

            /** MessageStenosisRangeMarkInfo DistalIndex */
            DistalIndex: number;

            /** MessageStenosisRangeMarkInfo findingUid */
            findingUid: string;
        }

        /** Represents a MessageStenosisRangeMarkInfo. */
        class MessageStenosisRangeMarkInfo implements IMessageStenosisRangeMarkInfo {

            /**
             * Constructs a new MessageStenosisRangeMarkInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisRangeMarkInfo);

            /** MessageStenosisRangeMarkInfo Sliders. */
            public Sliders: Mcsf.CTCardiacCommonProtocol.IMessageStenosisMarkSlider[];

            /** MessageStenosisRangeMarkInfo ProximalIndex. */
            public ProximalIndex: number;

            /** MessageStenosisRangeMarkInfo DistalIndex. */
            public DistalIndex: number;

            /** MessageStenosisRangeMarkInfo findingUid. */
            public findingUid: string;

            /**
             * Creates a new MessageStenosisRangeMarkInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageStenosisRangeMarkInfo instance
             */
            public static create(properties?: Mcsf.CTCardiacCommonProtocol.IMessageStenosisRangeMarkInfo): Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo;

            /**
             * Encodes the specified MessageStenosisRangeMarkInfo message. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo.verify|verify} messages.
             * @param message MessageStenosisRangeMarkInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisRangeMarkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageStenosisRangeMarkInfo message, length delimited. Does not implicitly {@link Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo.verify|verify} messages.
             * @param message MessageStenosisRangeMarkInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Mcsf.CTCardiacCommonProtocol.IMessageStenosisRangeMarkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageStenosisRangeMarkInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageStenosisRangeMarkInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo;

            /**
             * Decodes a MessageStenosisRangeMarkInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageStenosisRangeMarkInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo;

            /**
             * Verifies a MessageStenosisRangeMarkInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageStenosisRangeMarkInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageStenosisRangeMarkInfo
             */
            public static fromObject(object: { [k: string]: any }): Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo;

            /**
             * Creates a plain object from a MessageStenosisRangeMarkInfo message. Also converts values to other types if specified.
             * @param message MessageStenosisRangeMarkInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Mcsf.CTCardiacCommonProtocol.MessageStenosisRangeMarkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageStenosisRangeMarkInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
