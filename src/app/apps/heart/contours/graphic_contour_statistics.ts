import * as Viewer from "uih-medviewercontrol";

export class GraphicContourStatistics extends Viewer.GraphicBase {
    diameter: string;
    area: string;

    constructor(implcreater: { new(): Viewer.GraphicImplBase } = GraphicContourStatisticsImpl) {
        super(implcreater);
        this.canEdit = false;
        this.canSelect = false;
    }

    getTypeXml(): string {
        return Viewer.GSPSConst.TEXT_OBJ;
    }
}

export class GraphicContourStatisticsImpl extends Viewer.GraphicImplBase {
    public refresh(): void {
        const ctx = this.getContext2D();
        if (!ctx || !this.dataSource.isVisible) {
            return;
        }

        const graphic = this.dataSource as GraphicContourStatistics;
        if (!graphic.renderPoints || graphic.renderPoints.length == 0) {
            console.error('GraphicContourStatisticsImpl.invalid render points');
            return;
        }

        ctx.save();
        this.shadowSetting(ctx);
        (<any>ctx).textBaseline = 'Bottom';
        ctx.textAlign = 'right';
        ctx.fillStyle = '#ffffff';
        ctx.font = graphic.property.textFontSize + 'px sans-serif';

        let lineHeight = graphic.property.textFontSize;

        ctx.fillText(graphic.area, graphic.renderPoints[0].x, graphic.renderPoints[0].y);
        ctx.fillText(graphic.diameter, graphic.renderPoints[0].x, graphic.renderPoints[0].y - lineHeight);

        ctx.restore();
    }
}