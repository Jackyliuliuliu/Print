import { GraphicText } from 'uih-medviewercontrol';

export class GraphicSectionDistance extends GraphicText {
    constructor() {
        super();
        this.textBaseline = 'Top';
        this.textAlign = 'right';
        this.property.normalColor = '#ffffff';
    }
}