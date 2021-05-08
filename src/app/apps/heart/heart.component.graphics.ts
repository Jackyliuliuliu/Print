import * as ViewerKit from 'uih-viewerkit';
import * as Appcommon from 'uih-appcommon';
import * as Viewer from 'uih-medviewercontrol';
import * as $PBRoot from 'uih-app-protocol';
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import * as HeartDefinition from './heart.component.definition';
import * as NotifyBEHelper from './heart.component.notifybehelper';
import * as CardiacProtoCommon from './CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import { GraphicCenterlineImpl } from './herat.component.centerline.impl';

export class GraphicCenterLine extends ViewerKit.GraphicCenterLineBase {

    SelectedCenterLineID: string;
    modelContainer: Appcommon.ModelContainer = undefined;

    public CurrentLabel: number;
    ComboLink = new Map<number, number[]>()
    public ComboLabels: number[];

    constructor(implcreater: {
        new(): Viewer.GraphicImplBase;
    } = GraphicCenterlineImpl) {
        super(implcreater);
        this.SmoothSamplingFrequency = 7.0;
        this.CanExtend = false;
        this.canSelect = false;
        this.property.selectedColor = '#00c6ff'; // (0,198,255)
    }

    public ExtendCurve(ptCell: Appcommon.Point, editType: ViewerKit.CurveEditType): void {
        super.ExtendCurve(ptCell, editType);
        const newEditType = HeartDefinition.HRTCommonUtilities.ConvertCenterLineEditType(editType);
        //todo. pt的坐标转换，传入commandSender，传入cell等等
        NotifyBEHelper.CenterLineBEHelper.ExtendCenterLine(ptCell, newEditType);
    }

    public ModifyCurve(
        modifiedCellPoints: Appcommon.Point[],
        modifiedZs: number[],
        changedItemsInCell: [number, number, Appcommon.Point[], number[]][],
        ptLastInCell: Appcommon.Point): void {
        super.ModifyCurve(modifiedCellPoints, modifiedZs, changedItemsInCell, ptLastInCell);

        if (!this.modelContainer) {
            return;
        }

        const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
        if (!commandSender) {
            return;
        }

        const cell = this.getCell();
        if (!cell) {
            return;
        }
        if (changedItemsInCell && changedItemsInCell.length > 0) {
            const modifiedNormalPoints: Appcommon.Point[] = [];
            modifiedCellPoints.forEach(p => modifiedNormalPoints.push(Viewer.GraphicHelper.transformCell2Normal(p, cell)));
            const changedItemsNormal: [number, number, Appcommon.Point[], number[]][] = [];
            changedItemsInCell.forEach(item => {
                const itemNormal: [number, number, Appcommon.Point[], number[]]
                    = [item['0'], item['1'], Viewer.GraphicHelper.transformCells2Normal(item['2'], cell), item['3']];
                changedItemsNormal.push(itemNormal);
            });
            const ptLastNormal = Viewer.GraphicHelper.transformCell2Normal(ptLastInCell, cell);
            NotifyBEHelper.CenterLineBEHelper.ModifyCenterLine(modifiedZs, changedItemsNormal, ptLastNormal, commandSender, cell.cellName);
        }

        if (!(this.impl instanceof ViewerKit.GraphicCenterLineBaseImpl)) {
            return;
        }
        const centerLineImpl = this.impl as ViewerKit.GraphicCenterLineBaseImpl;
        const viewerControl = cell.viewerControl;
        //this.UpdateCenterLineExtremePointState(viewerControl, undefined, centerLineImpl.CurEditType); yu.xiang: 暂时用不上

        if (centerLineImpl.CurEditType === ViewerKit.CurveEditType.EditFromHead ||
            centerLineImpl.CurEditType === ViewerKit.CurveEditType.EditFromRear) {
            const newEditType = HeartDefinition.HRTCommonUtilities.ConvertCenterLineEditType(centerLineImpl.CurEditType);
            NotifyBEHelper.CenterLineBEHelper.FixPosition(newEditType, cell, commandSender);
        }
    }

    private UpdateCenterLineExtremePointState(
        viewerControl: Viewer.IMedViewerControl,
        commontoolsViewModel: any, //todo,
        editType: ViewerKit.CurveEditType): void {
        viewerControl.getCells().forEach(cell => {
            // tslint:disable-next-line: no-use-before-declare
            const impls = CenterLineGraphicHelper.GetCenterLineImpl(cell);
            let centerLineImpl: ViewerKit.GraphicCenterLineBaseImpl = undefined;
            for (let i = 0; i < impls.length; i++) {
                const element = impls[i];
                if (element.dataSource.property.normalColor !== 'transparent') {
                    centerLineImpl = element;
                    break;
                }
            }

            if (centerLineImpl) {
                centerLineImpl.CurEditType = editType;
                const graphicObj = centerLineImpl.dataSource as ViewerKit.GraphicCenterLineBase;
                if (editType === ViewerKit.CurveEditType.None) {
                    //todo
                    //let appCell = cell as ViewerKit.AppCell;
                    //appCell.getCellInitializeItem(Viewer.CellActionSetter).setAction(commontoolsViewModel.CurrentState);
                }
            }
        });
    }

    public FixPosition(ptInCell: Appcommon.Point, editType: ViewerKit.CurveEditType): void {
        super.FixPosition(ptInCell, editType);

        const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
        if (!commandSender) {
            return;
        }

        const cell = this.getCell();
        if (!cell) {
            return;
        }

        const newEditType = HeartDefinition.HRTCommonUtilities.ConvertCenterLineEditType(editType);
        NotifyBEHelper.CenterLineBEHelper.FixPosition(newEditType, cell, commandSender);

        const viewerControl = cell.viewerControl;
        this.UpdateCenterLineExtremePointState(viewerControl, undefined, editType);
    }

    public get isSelected(): boolean {
        return this._isSelected;
    }
    public set isSelected(value: boolean) {
        if (this._isSelected === value) {
            return;
        }
        if (!this.shouldKeepSilence) {
            const ancestor = this.getAncestorParent();
            ancestor.updateChildSelected(value);
            ancestor.refreshOverlay();
            this.NotifyBESelectedChanged(value);
        }
    }

    private NotifyBESelectedChanged(isSelected: boolean): void {
        if (!this.shouldKeepSilence
            && isSelected
            && this.id !== this.SelectedCenterLineID
            && this.SelectedCenterLineID
            && this.SelectedCenterLineID !== '') {
            Appcommon.Messenger.trigger('curCenterLineId', this.id);
            const commandSender = this.modelContainer.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
            NotifyBEHelper.CenterLineBEHelper.UpdateCenterLine(commandSender, CardiacProto.ListOperationType.ListOperationType_Select, parseInt(this.id), '');
        }
    }
}

export class CenterLineGraphicHelper {
    public static RefreshCenterLine(
        modelContainer: Appcommon.ModelContainer,
        cell: Viewer.MedViewerControlCell,
        msgCenterLine: $PB.IMsgCenterLine,
        centerLineGraphic: GraphicCenterLine
    ): void {
        centerLineGraphic.ExtendHeadActionType = HeartDefinition.HRTActionType.VRExtendCenterLine as number;
        centerLineGraphic.ExtendRearActionType = HeartDefinition.HRTActionType.VRExtendCenterLine as number;
        centerLineGraphic.id = msgCenterLine.id.toString();
        centerLineGraphic.CurrentLabel = msgCenterLine.currentLabel;
        centerLineGraphic.ComboLabels = msgCenterLine.comboLabels;

        for (const link of msgCenterLine.comboLinks) {
            const startend: number[] = [link.FirstIndex, link.LastIndex];
            centerLineGraphic.ComboLink[link.Label] = startend;
        }

        const pointList: Appcommon.Point[] = [];
        for (const item of msgCenterLine.pointList.pointList) {
            pointList.push(new Appcommon.Point(item.x, item.y));
        }
        centerLineGraphic.renderPoints = pointList;

        // if (this.CheckIsCPRCell(cell)) {
        //     const firstPoint = pointList[0];
        //     const lastPoint = pointList[pointList.length - 1];
        //     if (Math.abs(firstPoint.x - lastPoint.x) > Math.abs(firstPoint.y - lastPoint.y)) {
        //         centerLineGraphic.CurEditTraceType = ViewerKit.EditTraceType.VerticalEdit;
        //     } else {
        //         centerLineGraphic.CurEditTraceType = ViewerKit.EditTraceType.HorizonEdit;
        //     }
        // }
        //yu.xiang: AI心脏的CPR和VR一样，都先采用FreeEdit模式

        if (msgCenterLine.zOffsetList && msgCenterLine.zOffsetList.value && msgCenterLine.zOffsetList.value.length > 0) {
            centerLineGraphic.ZIndexs = msgCenterLine.zOffsetList.value;
            centerLineGraphic.ZMinIndex = msgCenterLine.zOffsetRange.x;
            centerLineGraphic.ZMaxIndex = msgCenterLine.zOffsetRange.y;
        }

        //todo: centerlinegraphic.canrefresh = false;
        if (cell.cellName.indexOf('Straightened_CPR') > -1) {
            //centerLineGraphic.canModify = false;
            //centerLineGraphic.canSelect = false;
        } else {
            //todo: centerLineGraphic.CanModify = container.GetModel<EditCenterLineCommandViewModel>().CurrentState;
        }

        centerLineGraphic.modelContainer = modelContainer;
        //centerLineGraphic.refreshOverlay();
    }

    public static CheckIsCPRCell(cell: Viewer.MedViewerControlCell): boolean {
        return cell && cell.cellType === HeartDefinition.CellTypeName.CPR;
    }

    public static ClearRedundantCenterLine(cell: Viewer.MedViewerControlCell, idList: string[]): void {
        const graphics: Viewer.GraphicBase[] = [];
        cell.displayData.graphics.forEach((g: Viewer.GraphicBase) => {
            const centerLine = g as GraphicCenterLine;
            if ((g instanceof GraphicCenterLine) && idList.indexOf(centerLine.id) <= -1) {
                graphics.push(centerLine);
            }
        });
        graphics.forEach(g => { cell.displayData.removeGraphic(g); });
    }

    public static GetCenterLineImpl(cell: Viewer.MedViewerControlCell): ViewerKit.GraphicCenterLineBaseImpl[] {
        const impls: ViewerKit.GraphicCenterLineBaseImpl[] = [];
        if (cell && cell.displayData && cell.displayData.graphics) {
            cell.displayData.graphics.forEach(g => {
                const i = g.impl;
                if (i instanceof ViewerKit.GraphicCenterLineBaseImpl) {
                    impls.push(i as ViewerKit.GraphicCenterLineBaseImpl);
                }
            });
        }
        return impls;
    }
}

export class GraphicHUValue extends Viewer.GraphicText {
    constructor() {
        super();
        this.textBaseline = 'Bottom';
        this.textAlign = 'right';
        this.property.normalColor = '#ffffff';
    }
}
export class GraphicPreView extends Viewer.GraphicText {
    constructor() {
        super();
        this.textBaseline = 'Bottom';
        this.textAlign = 'left';
        this.property.normalColor = '#ffffff';
    }
    refresh(): void {
        if (this.shouldKeepSilence) {
            return;
        }
        if(this.text == ''){
            this.isVisible = false;
            return;
        }
        super.refresh();
    }
}