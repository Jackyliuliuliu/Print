import { GraphicLine, GraphicImplBase, GraphicAttachedText, AttachState, GraphicBase } from 'uih-medviewercontrol';
import { Point } from "uih-appcommon";

export class GraphicStenosisMark extends GraphicLine {
    findingUID: string;
    isStent: boolean = false;
    isSelectedInFInding: boolean = false;
    constructor(implcreater?: { new(): GraphicImplBase }) {
        super(implcreater);

        const attachedTextChild = new GraphicAttachedText(this.impl as any);
        this.addChild(attachedTextChild);

        attachedTextChild.property.normalColor = '#00C0FF';
        attachedTextChild.property.selectedColor = '#FFC000';
        attachedTextChild.property.mouseOverColor = '#FFFF00';
        this.property.normalColor = '#00C0FF';
        this.property.selectedColor = '#FFC000';
        this.property.mouseOverColor = '#FFFF00';

        this.canSelect = true;
        attachedTextChild.canSelect = true;
    }

    updateText(text: string): void {
        const textChild = this.getChild(GraphicAttachedText);
        if (textChild) {
            textChild.text = text;
        }
        if (textChild.attachState === AttachState.TightAttached) {
            if (this.isStent) {
                textChild.renderPoints[0] = this.renderPoints[1];
                // textChild.textAlign = 'right';
                textChild.translatePoints(new Point(text.length * textChild.property.textFontSize, 0), new Point(0, 0));
            } else {
                textChild.renderPoints[0] = this.renderPoints[1];
            }
        }
    }

    getTypeXml(): string {
        return 'StenosisMark';
    }

    changePoint(index: number, point: Point): void {
        /*if(index == 0){
            return;
        }
        super.changePoint(index,point);*/
    }
    translatePoints(oldPoint, newPoint) {
        // const deltaX = newPoint.x - oldPoint.x;
        // const deltaY = newPoint.y - oldPoint.y;
        // for (let i = 1; i < this.renderPoints.length; i++) {
        //     this.renderPoints[i] = this.renderPoints[i].offset(deltaX, deltaY);
        // }
        // this.sendCommand();
        // this.refreshOverlay();
    }

    public set isSelected(value: boolean) {
        const textChild = this.getChild(GraphicAttachedText);

        if (this.isSelectedInFInding) {
            this.property.normalColor = '#FFC000';
        } else {
            this.property.normalColor = '#00C0FF';
        }
        if (textChild) {
            textChild.property.normalColor = this.property.normalColor;
        }

        if (this._isSelected === value) {
            return;
        }
        const ancestor = this.getAncestorParent();
        ancestor.updateChildSelected(value);
        ancestor.refreshOverlay();
    }

    // 狭窄标记仅文本部分支持选中和拖拽移动，标记线本身不支持，否则会影响狭窄近端远端拖拽操作效果
    makeHitTest(position: Point): [number, GraphicBase] {
        let result : [number, GraphicBase] = [-2, undefined];
        const textChild = this.getChild(GraphicAttachedText);
        if (textChild) {
            result = GraphicBase.makeHitTestCore(position, textChild);
        }
        return result;
    }
}
