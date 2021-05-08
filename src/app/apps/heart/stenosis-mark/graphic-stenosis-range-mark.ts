import { GraphicCenterLinePositionMark } from "../section/GraphicCenterLinePositionMark"
import { GraphicCenterLinePositionMarkImpl } from '../section/GraphicCenterLinePositionMarkImpl';
import { GraphicImplBase } from 'uih-medviewercontrol';
import { GraphicCenterLine } from '../heart.component.graphics'
import { CenterLineHelper } from 'uih-viewerkit';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import { Point, Cursors } from 'uih-appcommon';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;

export class GraphicStenosisRangeMark extends GraphicCenterLinePositionMark {
    markType: CardiacProto.StenosisMarkType;

    constructor(implcreator: { new(): GraphicImplBase; } = GraphicCenterLinePositionMarkImpl) {
        super(implcreator);
        this.property.normalColor = 'gold';
        this.property.selectedColor = 'gold';
        this.property.mouseOverColor = 'gold';
        this.halfMarkLength = 6;
    }

    changePoint(index: number, point: Point): void {
        
        let centerLine = this.displayData.graphics.find(g => g instanceof GraphicCenterLine &&
             g.id == this.relatedCenterLineID) as GraphicCenterLine;
        let result = CenterLineHelper.findNearestPointIndex(centerLine.renderPoints, point, 1e-8);
        let nearestIndex = result.index;
        if (GraphicCenterLinePositionMark.isValidPoint(nearestIndex, centerLine.renderPoints.length)) {
            //if(centerLine.ComboLabels[nearestIndex] === centerLine.CurrentLabel){
                this.lastIndex = nearestIndex;
                console.info('change point to ' + this.lastIndex);
                this.notifyBE(nearestIndex);
            //}
            // else{
            //     console.error('move out range');
            // }
        }
    }
    protected notifyBE(pointIndex: number): void {
        const params = CardiacProto.MessageChangeSliderLocationParams.create();
        params.ChangeType = CardiacProto.SliderLocationChangeType.SliderLocationChangeType_Index;
        params.ChangeValue = pointIndex;
        params.SliderType = this.markType;
        let cell = this.displayData.cell;
        const buffer = CardiacProto.MessageChangeSliderLocationParams.encode(params).finish();
        cell.viewerControl.commandSender.sendCellOperation(buffer, 'MoveStenosisMarkSlider', cell.cellName);
    }
}