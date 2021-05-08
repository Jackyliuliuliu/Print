import { GraphicImplBase } from 'uih-medviewercontrol';
import { GraphicCenterLinePositionMarkImpl } from './GraphicCenterLinePositionMarkImpl';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import { GraphicCenterLinePositionMark } from './GraphicCenterLinePositionMark';
import { HeartComponent } from '../heart.component';
import { ModelContainer } from 'uih-appcommon';

export class GraphicSectionPositionMark extends GraphicCenterLinePositionMark {
    constructor(implcreator: { new(): GraphicImplBase; } = GraphicCenterLinePositionMarkImpl) {
        super(implcreator);
        this.property.normalColor = '#489248'; // 72 146 72
        this.property.selectedColor = '#489248';
        this.property.mouseOverColor = '#489248';
    }

    protected notifyBE(pointIndex: number): void {
        const params = CardiacProto.MessageChangeSliderLocationParams.create();
        params.ChangeType = CardiacProto.SliderLocationChangeType.SliderLocationChangeType_Index;
        params.ChangeValue = pointIndex;
        let cell = this.displayData.cell;
        const buffer = CardiacProto.MessageChangeSliderLocationParams.encode(params).finish();
        cell.viewerControl.commandSender.sendCellOperation(buffer, 'UpdateSectionLocation', cell.cellName);
    }
}
