import { GraphicImplBase } from "uih-medviewercontrol";
import { Point } from 'uih-appcommon';
import { GraphicSectionPositionMark } from './GraphicSectionPositionMark';

export class GraphicCenterLinePositionMarkImpl extends GraphicImplBase {
    protected line: Point[] = [];
    refresh(): void {
        const ctx = this.getContext2D();
        if (!ctx || !this.dataSource.isVisible) {
            return;
        }

        let graphic = this.dataSource as GraphicSectionPositionMark;
        graphic.calculateLinePosition();

        ctx.save();
        ctx.translate(0.5, 0.5);
        ctx.beginPath();

        const points = graphic.renderPoints;
        ctx.moveTo(points[0].x, points[0].y);
        ctx.lineTo(points[1].x, points[1].y);

        this.shadowSetting(ctx);

        ctx.strokeStyle = this.getCurrentPenColor();
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
    }

    makeHitTest(position: Point): number {
        let hit = super.makeHitTest(position);
        return hit != -2 ? 0 : -2;
    }
}