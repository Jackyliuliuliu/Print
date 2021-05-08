import { GraphicCircle, GraphicImplBase, MedViewerControlCell } from 'uih-medviewercontrol';
import { Point } from 'uih-appcommon';

export class GraphicEraserImpl extends GraphicImplBase {
    refresh(): void {
        const ctx = this.getContext2D();
        if (!ctx || !this.dataSource.isVisible) {
            return;
        }

        let eraserData = this.dataSource as GraphicEraser;

        ctx.save();
        ctx.translate(0.5, 0.5);
        ctx.strokeStyle = this.getCurrentPenColor();
        ctx.fillStyle = this.getCurrentPenColor();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(eraserData.center.x, eraserData.center.y, eraserData.height, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}

export class GraphicEraser extends GraphicCircle {
    constructor(implcreater: { new(): GraphicImplBase } = GraphicEraserImpl) {
        super(implcreater);
        this.canSelect = false;
        this.canDelete = false;
        this.canModify = false;
        this.isFilled = true;
        this.isCreated = true;
        this.isVisible = false;

        let color = 'rgba(255, 255, 255, 0.7)';
        this.property.normalColor = color;
        this.property.selectedColor = color;
        this.property.mouseOverColor = color;

        this.height = 5;
    }

    updateCenterPoint(point: Point): void {
        this.center = new Point(point.x, point.y);
    }

    generateContourPoints(cell: MedViewerControlCell): Point[] {
        let points: Point[] = [];
        for (let rad = 0; rad < 360; rad++) {
            let angle = rad * Math.PI / 180;
            let point = new Point(this.height * Math.cos(angle) + this.center.x, this.height * Math.sin(angle) + this.center.y);
            points.push(point);
        }
        points.push(this.center);

        return points;
    }
}