import { CellActionSetter, CPRCellActionInitializeItem, MouseButtonType, ActionTypes } from 'uih-medviewercontrol';
import { HRTActionType } from './heart.component.definition';

export class VRCellActionInitializeItem extends CellActionSetter {
    initialize(): void {
        this.cell.actionManager.setAction(MouseButtonType.Right, ActionTypes.Zoom);
        this.cell.actionManager.setAction(MouseButtonType.Middle, ActionTypes.Windowing);
        this.cell.actionManager.setAction(MouseButtonType.GroupButton1, ActionTypes.Pan);

        this.setAction(ActionTypes.Rotate);
    }

    setAction(actionType: ActionTypes, mouseButtonType: MouseButtonType = MouseButtonType.Left): void {
        if (actionType == ActionTypes.Pointer) {
            this.cell.actionManager.setAction(mouseButtonType, ActionTypes.Rotate);
        } else if (actionType == ActionTypes.Page ||
            actionType == ActionTypes.AnnotationLine ||
            actionType == <number>(HRTActionType.ActionMPRCoronaryGrow)) {
            this.cell.actionManager.setAction(mouseButtonType, ActionTypes.Empty);
        } else {
            this.cell.actionManager.setAction(mouseButtonType, actionType);
        }
    }
}

export class MPRCellActionInitializeItem extends CellActionSetter {
    initialize(): void {
        this.cell.actionManager.setAction(MouseButtonType.Right, ActionTypes.Zoom);
        this.cell.actionManager.setAction(MouseButtonType.Middle, ActionTypes.Windowing);
        this.cell.actionManager.setAction(MouseButtonType.GroupButton1, ActionTypes.Pan);

        this.setAction(ActionTypes.Page);
    }

    setAction(actionType: ActionTypes, mouseButtonType: MouseButtonType = MouseButtonType.Left): void {
        if (actionType == ActionTypes.Pointer) {
            this.cell.actionManager.setAction(mouseButtonType, ActionTypes.Page);
        } else if (actionType == <number>(HRTActionType.Eraser_Remove)) {
            this.cell.actionManager.setAction(mouseButtonType, ActionTypes.Empty);
        } else {
            this.cell.actionManager.setAction(mouseButtonType, actionType);
        }
    }
}

export class SectionCellActionInitializeItem extends CellActionSetter {
    initialize(): void {
        this.cell.actionManager.setAction(MouseButtonType.Left, HRTActionType.ActionMPRSectionEmpty);
        this.cell.actionManager.setAction(MouseButtonType.Right, ActionTypes.Zoom);
        this.cell.actionManager.setAction(MouseButtonType.Middle, ActionTypes.Windowing);
        this.cell.actionManager.setAction(MouseButtonType.GroupButton1, ActionTypes.Pan);
    }
    setAction(actionType: ActionTypes, mouseButtonType: MouseButtonType = MouseButtonType.Left): void {
        if (actionType == ActionTypes.Zoom ||
            actionType == ActionTypes.Windowing ||
            actionType == ActionTypes.Pan ||
            actionType == ActionTypes.AnnotationLine ) {
            this.cell.actionManager.setAction(mouseButtonType, actionType);
        } else {
            this.cell.actionManager.setAction(mouseButtonType, HRTActionType.ActionMPRSectionEmpty);
        }
    }
}

export class StretchedCPRCellActionInitializeItem extends CPRCellActionInitializeItem {
    initialize(): void {
        this.cell.actionManager.setAction(MouseButtonType.Right, ActionTypes.Zoom);
        this.cell.actionManager.setAction(MouseButtonType.Middle, ActionTypes.Windowing);
        this.cell.actionManager.setAction(MouseButtonType.GroupButton1, ActionTypes.Pan);

        this.setAction(ActionTypes.Rotate);
    }

    setAction(actionType: ActionTypes, mouseButtonType: MouseButtonType = MouseButtonType.Left): void {
        if (actionType == ActionTypes.Rotate ||
            actionType == ActionTypes.Zoom ||
            actionType == ActionTypes.Windowing ||
            actionType == ActionTypes.Pan ||
            actionType == ActionTypes.AnnotationLine) {
            this.cell.actionManager.setAction(mouseButtonType, actionType);
        } else if (actionType === ActionTypes.Pointer) {
            this.cell.actionManager.setAction(mouseButtonType, ActionTypes.Rotate);
        } else {
            this.cell.actionManager.setAction(mouseButtonType, ActionTypes.Empty);
        }
    }
}

export class StraightenedCPRCellActionInitializeItem extends CPRCellActionInitializeItem {
    initialize(): void {
        this.cell.actionManager.setAction(MouseButtonType.Right, ActionTypes.Zoom);
        this.cell.actionManager.setAction(MouseButtonType.Middle, ActionTypes.Windowing);
        this.cell.actionManager.setAction(MouseButtonType.GroupButton1, ActionTypes.Pan);

        this.setAction(ActionTypes.Rotate);
    }

    setAction(actionType: ActionTypes, mouseButtonType: MouseButtonType = MouseButtonType.Left): void {
        if (actionType == ActionTypes.Rotate ||
            actionType == ActionTypes.Zoom ||
            actionType == ActionTypes.Windowing ||
            actionType == ActionTypes.Pan ||
            actionType == ActionTypes.AnnotationLine) {
            this.cell.actionManager.setAction(mouseButtonType, actionType);
        } else if (actionType === ActionTypes.Pointer) {
            this.cell.actionManager.setAction(mouseButtonType, ActionTypes.Rotate);
        } else {
            this.cell.actionManager.setAction(mouseButtonType, ActionTypes.Empty);
        }
    }
}
