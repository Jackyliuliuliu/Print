import * as ViewerKit from 'uih-viewerkit';
import * as Viewer from 'uih-medviewercontrol';
import { GraphicCenterLine } from './heart.component.graphics';
import { Pen, GraphicLine, GraphicHelper } from 'uih-medviewercontrol';
import { Point3D, Point } from 'uih-appcommon';

export class GraphicCenterlineImpl extends ViewerKit.GraphicCenterLineBaseImpl {

    constructor() {
        super();
        this.needKeepSameCountWhenModify = true;

    }

    public refresh(): void {
        const ctx = this.getContext2D();
        if (!ctx || (!this.dataSource.isVisible && this.dataSource.hitState == -2) ||
            this.dataSource.property.normalColor == 'transparent') {
            return;
        }

        if (this._needPrepareRenderControl) {
            this.PrepareRenderControl();
        }

        ctx.save();
        this.DrawSrcCenterLine(ctx);
        this.DrawDesCenterLine(ctx);

        this.DrawCurrentSection(ctx);

        this.DrawDragginRange(ctx);
        this.DrawOtherControl(ctx);
        ctx.restore();
    }

    private DrawCurrentSection(ctx: CanvasRenderingContext2D): void {

        const graphicCenterline = this.dataSource as GraphicCenterLine;
        // if (grphicCenterline.ComboLink.size == 0 ||
        //     !grphicCenterline.ComboLink.has[grphicCenterline.CurrentLabel]) {
        //     console.info("GraphicCenterlineImpl. no section");
        //     return;
        // }

        if (!graphicCenterline.isVisible ||
            graphicCenterline.property.normalColor === 'transparent') {
            console.info("GraphicCenterlineImpl. mpr skip section render");
            return;
        }

        let currentSection = graphicCenterline.ComboLink[graphicCenterline.CurrentLabel];

        let handles: Point3D[] = [];
        for (let i = currentSection[0]; i <= currentSection[1]; ++i) {
            handles.push(new Point3D(graphicCenterline.renderPoints[i].x, graphicCenterline.renderPoints[i].y, graphicCenterline.ZIndexs[i] ? graphicCenterline.ZIndexs[i] : 0.0));
        }

        console.info("GraphicCenterlineImpl. begin draw current section");
        let drawPen = new Pen();
        drawPen.Brush = (this.IsMouseOver && this.dataSource.canSelect && this.dataSource.canModify) ? graphicCenterline.property.mouseOverColor : "#489248"; // 72 146 72
        drawPen.LineWidth = 1.5;

        let shadPen = new Pen();
        shadPen.Brush = '#ffffff';
        shadPen.LineWidth = graphicCenterline.property.thickness;
        shadPen.LineDash = graphicCenterline.property.dashArray;

        this.DrawCenterLine_i(ctx, drawPen, shadPen, handles, graphicCenterline.CanExtend);

        console.info("GraphicCenterlineImpl. begin draw current section");
    }

    public makeHitTest(position: Point): number {

        //console.log('makeHitTest ' + typeof (this));

        if (!this.dataSource.canSelect) {
            return -2;
        }
        // 命中控制点
        // 后期很有可能是各个图元的阈值是不同的
        const points = this.dataSource.renderPoints;
        if (!points) {
            return -2;
        }

        const graphicCenterline = this.dataSource as GraphicCenterLine;
        let currentSection = graphicCenterline.ComboLink[graphicCenterline.CurrentLabel];

        const iBegin = currentSection[0];
        const iEnd = currentSection[1] + 1;

        if (this.dataSource.canHitHandles) {
            for (let index = iBegin; index < iEnd; index++) {
                if (GraphicHelper.distance(position, points[index]) < this.hitTolerance) {
                    return index;
                }
            }
        }

        // 命中整体
        for (let index = iBegin; index < iEnd - 1; index++) {
            if (GraphicHelper.disPointToLine(position, points[index], points[index + 1]) < this.hitTolerance) {
                return index;
            }
        }
        // 未命中任何元素
        return -2;
    }

    //yu.xiang: 重载FindHitTestRange，防止跨段编辑
    protected FindHitTestRange(
        handles: ViewerKit.CenterLineHandle[], iMiddleIndex: number,
        dFilterLength: number, dMinFilterLength: number,
        mousePoint: Point
    ): [number, number] {
        const graphicCenterline = this.dataSource as GraphicCenterLine;
        let currentSection = graphicCenterline.ComboLink[graphicCenterline.CurrentLabel];

        const iBegin = currentSection[0];
        const iEnd = currentSection[1];

        if (iMiddleIndex <= iBegin || iMiddleIndex >= iEnd) {
            return [-1, -1];
        }

        let result = super.FindHitTestRange(handles, iMiddleIndex, dFilterLength, dMinFilterLength, mousePoint);

        let iStartIndex = result["0"];
        let iEndIndex = result["1"];

        if (iStartIndex <= iBegin && iStartIndex > -1) {
            iStartIndex = iBegin + 1;
        } else if (iStartIndex >= iEnd && iStartIndex > -1) {
            iStartIndex = iEnd - 1;
        }

        if (iEndIndex <= iBegin && iEndIndex > -1) {
            iEndIndex = iBegin + 1;
        } else if (iEndIndex >= iEnd && iEndIndex > -1) {
            iEndIndex = iEnd - 1;
        }

        if(iStartIndex == -1 || iEndIndex == -1)
        {
            if(iStartIndex == -1 && iEndIndex > iBegin + 1)
            {
                iStartIndex = iBegin + 1;
            }
            else if(iEndIndex == -1 && iStartIndex < iEnd -1)
            {
                iEndIndex = iEnd -1;
            } 
            else
            {
                iStartIndex = -1;
                iEndIndex = -1;
            }
        }

        result["0"] = iStartIndex;
        result["1"] = iEndIndex;

        console.info(`heart.centerline.impl.FindHitTestRange StartIndex: ${iStartIndex} MiddleIndex: ${iMiddleIndex} EndIndex: ${iEndIndex}`);

        return result;
    }

    protected getDesPenColor(): string {
        return this.dataSource.property.normalColor;
    }

}
