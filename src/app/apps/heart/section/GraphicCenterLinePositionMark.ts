import { Point, Cursors } from 'uih-appcommon';
import { GraphicBase, GraphicImplBase, Vector, GraphicHelper, IHittedCursorable } from 'uih-medviewercontrol';
import { GraphicCenterLinePositionMarkImpl } from './GraphicCenterLinePositionMarkImpl';
import { GraphicCenterLineBase, CenterLineHelper } from 'uih-viewerkit';

export class GraphicCenterLinePositionMark extends GraphicBase implements IHittedCursorable {
    centerPoint: Point = new Point(0, 0);
    halfMarkLength: number = 10;
    direction: Vector;
    relatedCenterLineID: string;
    lastIndex: number = 0;

    constructor(implcreator: { new(): GraphicImplBase; } = GraphicCenterLinePositionMarkImpl) {
        super(implcreator);
    }

    changePoint(index: number, point: Point): void {
        let centerLine = this.displayData.graphics.find(g => g instanceof GraphicCenterLineBase && g.id == this.relatedCenterLineID);
        let result = CenterLineHelper.findNearestPointIndex(centerLine.renderPoints, point, 1e-8);
        let nearestIndex = result.index;
        if (GraphicCenterLinePositionMark.isValidPoint(nearestIndex, centerLine.renderPoints.length)) {
            this.lastIndex = nearestIndex;
            console.info('change point to ' + this.lastIndex);
            this.notifyBE(nearestIndex);
        }
    }

    calCurrenSliderIndex(): number {
       /*
        let centerLine = this.displayData.graphics.find(g => g instanceof GraphicCenterLineBase && g.id == this.relatedCenterLineID);
        let result = CenterLineHelper.findNearestPointIndex(centerLine.renderPoints, this.centerPoint, 1e-8);
        let nearestIndex = result.index;
        */
        return this.lastIndex;
    }

    protected notifyBE(pointIndex: number): void {
    }

    static isValidPoint(index: number, total: number): boolean {
        return index >= 0 && index < total;
    }

    calculateLinePosition(): void {
        let lineLeftPoint: Point;
        let lineRightPoint: Point;

        let k = this.direction.y / this.direction.x;
        let deltaX = Math.sqrt(GraphicHelper.sqr(this.halfMarkLength) / (GraphicHelper.sqr(k) + 1)) * 1.5;
        let deltaY = k * deltaX;

        this.renderPoints[0] = new Point(this.centerPoint.x - deltaX, this.centerPoint.y - deltaY);
        this.renderPoints[1] = new Point(this.centerPoint.x + deltaX, this.centerPoint.y + deltaY);

        let centerLine = this.displayData.graphics.find(g => g instanceof GraphicCenterLineBase && g.id == this.relatedCenterLineID);
        if(centerLine){
            let result = CenterLineHelper.findNearestPointIndex(centerLine.renderPoints, this.centerPoint, 1e-8);
            this.lastIndex = result.index;
        }
        
        console.info('update point ' + this.lastIndex);
    }

    getHitCursorType(hitNumber: number): string {
        if (hitNumber > -2) {
            return Cursors.MOVE_GRAPHIC;
        }
        return undefined;
    }
}
