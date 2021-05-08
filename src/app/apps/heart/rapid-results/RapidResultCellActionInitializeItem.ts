import * as Viewer from 'uih-medviewercontrol';
import { ActionTypes, MouseButtonType } from 'uih-medviewercontrol';

export class RapidResultCellActionInitializeItem extends Viewer.CellActionSetter {
    setAction(actionType: ActionTypes, mouseButtonType?: MouseButtonType): void {
        this.cell.actionManager.setAction(mouseButtonType, actionType);
    }
}