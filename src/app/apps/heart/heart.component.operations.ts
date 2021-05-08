import * as ViewerKit from 'uih-viewerkit';
import * as AppCommon from 'uih-appcommon';
import * as $PBRoot from 'uih-app-protocol';
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import { HeartComponent } from './heart.component';
import * as Viewer from 'uih-medviewercontrol';
import * as HeartGraphics from './heart.component.graphics';
import * as CardiacProtoCommon from './CTCaridacCommonProto';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import Point = AppCommon.Point;
import { GraphicContour } from './contours/graphic_contour';
import { GraphicContourDiameter } from './contours/graphic_contour_diameter';
import { GraphicContourStatistics } from './contours/graphic_contour_statistics';
import { GraphicStenosisMark } from './stenosis-mark/graphic-stenosis-mark';
import { GraphicSectionPositionMark } from './section/GraphicSectionPositionMark';
import { GraphicSectionDistance } from './section/GraphicSectionDistance';
import { MedViewerControl, GraphicAnnotationLine } from 'uih-medviewercontrol';
import { ValueConverter } from './heart.component.enumConverter';
import { GraphicStenosisRangeMark } from './stenosis-mark/graphic-stenosis-range-mark';
import { GraphicCenterlineImpl } from './herat.component.centerline.impl';
import { ResultTableComponent } from './result-table/result-table.component';
import { GraphicHUValue } from './heart.component.graphics';
import { CommandHelper } from 'uih-viewerkit';
import { CellTypeName } from './heart.component.definition';

export class ProcessUpdateStatusOperation implements ViewerKit.IPanelOperation {
    handle(modelContainer: AppCommon.ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
        AppCommon.Messenger.trigger('UpdateNotify', obj);
        return null;
    }
}

export class ProcessEndLoadOperation implements ViewerKit.IPanelOperation {
    handle(modelContainer: AppCommon.ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
        let component = modelContainer.getModel('MainComponent') as HeartComponent;
        component.loadCompleteRequest.emit("LoadedSeriesUID");
        
        console.log('加载完成 ' +  AppCommon.DateTimeHelper.getTimeString());
        return null;
    }
}
export class ProcessEndResetOperation implements ViewerKit.IPanelOperation {
    handle(modelContainer: AppCommon.ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
        let component = modelContainer.getModel('MainComponent') as HeartComponent;
        AppCommon.Messenger.trigger('seriesLoaded', component.LoadSeriesInsatnceUID);
        
        console.log('Reset end ' +  AppCommon.DateTimeHelper.getTimeString());
        return null;
    }
}

export class ProcessEndOperation implements ViewerKit.IPanelOperation {
    handle(modelContainer: AppCommon.ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
        let component = modelContainer.getModel('MainComponent') as HeartComponent;
        AppCommon.Messenger.trigger('seriesLoaded', component.LoadSeriesInsatnceUID);
        //component.addResultLayoutInfos();
        component.setlayoutResultCPR();
        console.log('分割提取完成' +  AppCommon.DateTimeHelper.getTimeString());
        component.isLoading = false;
        return null;
    }
}

export class CenterLineGraphicCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, nonImageContent: Uint8Array): void {

        const msgCenterLine = $PB.MsgCenterLine.decode(nonImageContent);

        if (!msgCenterLine.pointList ||
            !msgCenterLine.pointList.pointList ||
            msgCenterLine.pointList.pointList.length === 0) {
            return;
        }
        let isVisible = true;
        let centerLineGraphic = cell.displayData.graphics.find(g => {
            if (!(g instanceof HeartGraphics.GraphicCenterLine)) {
                return false;
            }
            else if (g.id === msgCenterLine.id.toString()) {
                return true;
            }
            else {
                isVisible = g.isVisible;
                cell.displayData.removeGraphic(g);
                return false;
            }
        }) as HeartGraphics.GraphicCenterLine;

        if (!centerLineGraphic) {
            centerLineGraphic = new HeartGraphics.GraphicCenterLine(GraphicCenterlineImpl);
            centerLineGraphic.id = msgCenterLine.id.toString();
            centerLineGraphic.property.thickness = 1.5;
            centerLineGraphic.isVisible = isVisible;
            cell.displayData.addGraphic(centerLineGraphic);
        }

        let component = container.getModel('MainComponent') as HeartComponent;

        centerLineGraphic.property.normalColor = '#00c6ff'; // (0,198,255)
        centerLineGraphic.shouldKeepSilence = true;
        centerLineGraphic.isSelected = true;
        centerLineGraphic.canSelect = component.editor.isEditCenterLineEnable;
        const canEdit = true; // todo: canEdit应该就是生长的意思。。。
        centerLineGraphic.canEdit = canEdit;
        centerLineGraphic.canModify = component.editor.isEditCenterLineEnable;
        centerLineGraphic.isVisible = component.toolbarbottom.checkOptionsOne[2].checked;
        centerLineGraphic.shouldKeepSilence = false;

        HeartGraphics.CenterLineGraphicHelper.RefreshCenterLine(container, cell, msgCenterLine, centerLineGraphic);

        //component.refresh();
        //cell.displayData.graphics.push(centerLineGraphic);

        // todo: RefreshEdgeLine(container, cell, overlay, msgCenterLine);
    }

}

export class CoronaryListCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, nonImageContent: Uint8Array): void {
        //console.info('CoronaryListCellOperation Enter!');
        const messageCenterLineList = CardiacProto.MessageCenterLineList.decode(nonImageContent);
        let component = container.getModel('MainComponent') as HeartComponent;
        if (messageCenterLineList.CenterLine.length != 0) {
            AppCommon.Messenger.trigger('nameListLoad', messageCenterLineList.CenterLine);
        }
        //console.info('CoronaryListCellOperation End!');
    }

}

export class VRCenterLineGraphicCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {

        //console.warn('VRCenterLineGraphicCellOperation Enter!');

        const component = container.getModel('MainComponent') as HeartComponent;
        const isCenterlineVisible = component.toolbarbottom.checkOptionsOne[2].checked;
        
        const msgAllCenterLines = $PB.MsgAllCenterLines.decode(buffer);

        //增加中心线之前，先把VR的中心线清空，防止出现同时存在多个中心线情况
        cell.displayData.deleteGraphics(HeartGraphics.GraphicCenterLine);

        const idList: string[] = [];
        for (const msgCenterLine of msgAllCenterLines.centerlineList) {
            idList.push(msgCenterLine.id.toString());

            if (!msgCenterLine.pointList ||
                !msgCenterLine.pointList.pointList ||
                msgCenterLine.pointList.pointList.length === 0) {
                continue;
            }

            let centerLineGraphic = cell.displayData.graphics.find(g => {
                if (!(g instanceof HeartGraphics.GraphicCenterLine)) {
                    return false;
                } else {
                    return g.id === msgCenterLine.id.toString();
                }
            }) as HeartGraphics.GraphicCenterLine;
            if (!centerLineGraphic) {
                centerLineGraphic = new HeartGraphics.GraphicCenterLine(GraphicCenterlineImpl);
                centerLineGraphic.id = msgCenterLine.id.toString();
                centerLineGraphic.property.thickness = 1.5;
                cell.displayData.addGraphic(centerLineGraphic);
            }

            centerLineGraphic.SelectedCenterLineID = msgAllCenterLines.selectedId.toString();
            HeartGraphics.CenterLineGraphicHelper.RefreshCenterLine(container, cell, msgCenterLine, centerLineGraphic);

            let component = container.getModel('MainComponent') as HeartComponent;

            centerLineGraphic.isVisible = isCenterlineVisible;
            if (centerLineGraphic.id === centerLineGraphic.SelectedCenterLineID) {
                centerLineGraphic.property.normalColor = '#00c6ff'; // (0,198,255)
                centerLineGraphic.shouldKeepSilence = true;
                //let viewerControl = cell.viewerControl as MedViewerControl;
                // if (viewerControl.isPerformanceOptimized) {
                //     centerLineGraphic.canSelect = false;
                // }
                // else {
                //     centerLineGraphic.canSelect = true;
                // }
                centerLineGraphic.isSelected = true;
                centerLineGraphic.canSelect = component.editor.isEditCenterLineEnable;
                centerLineGraphic.shouldKeepSilence = false;
                centerLineGraphic.canModify = component.editor.isEditCenterLineEnable;
            } else {
                // tslint:disable-next-line: max-line-length
                centerLineGraphic.property.normalColor = 'transparent'; // https://stackoverflow.com/questions/19578456/transparent-color-html5-canvas
                centerLineGraphic.isSelected = false;
                centerLineGraphic.canSelect = false;
                centerLineGraphic.canModify = false;
            }

            //centerLineGraphic.isVisible = isCenterlineVisible;
        }

        console.info('VRCenterLineGraphicCellOperation Leave!');
    }
}

export class CPRAngleCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {
        if ('CPR' === cell.cellType) {
            const cprAngleTag = '00731002';
            const msg = $PB.MsgCommonDouble.decode(buffer);
            const info = cell.displayData.imageText.imageTextInfo;
            if (cell.cellName === 'Straightened_CPR_Coronary') {
                Viewer.GraphicHelper.replaceTagValue(cprAngleTag, info, 'SCPR Angle:' + msg.value.toFixed().toString());
            } else {
                Viewer.GraphicHelper.replaceTagValue(cprAngleTag, info, 'CPR Angle:' + msg.value.toFixed().toString());
            }
        }
    }
}

export class StenosisMarkCellOperation implements ViewerKit.ICellOperation {
    handle(modelContainer: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, nonImageContent: Uint8Array): void {

        //console.warn('StenosisMarkCellOperation Enter!');

        cell.displayData.deleteGraphics(GraphicStenosisMark);
        var valCvt: ValueConverter = new ValueConverter();

        const messageStenosisMarks = CardiacProto.MessageStenosisMarks.decode(nonImageContent);
        /*if(!this.isSameWithCell){
            cell.displayData.deleteGraphics(GraphicStenosisMark);
        }*/

        if (!messageStenosisMarks.Marks ||
            messageStenosisMarks.Marks.length == 0) {
            return;
        }

        const result = modelContainer.getModel('ResultTable') as ResultTableComponent;
        for (const msgMark of messageStenosisMarks.Marks) {

            let markGraphic = cell.displayData.graphics.find(g => {
                if (!(g instanceof GraphicStenosisMark)) {
                    return false;
                }
                else {
                    return g.findingUID === msgMark.FindingUID;
                }
            }) as GraphicStenosisMark;

            if (!markGraphic) {
                markGraphic = new GraphicStenosisMark();
                cell.displayData.addGraphic(markGraphic);
            }

            markGraphic.findingUID = msgMark.FindingUID;

            let iLength = 30;

            markGraphic.renderPoints[0] = new Point(msgMark.CenterPoint.x, msgMark.CenterPoint.y);
            if (msgMark.FindingType === 1) {
                markGraphic.renderPoints[1] = new Point((msgMark.CenterPoint.x + msgMark.NormalVector.x * iLength),
                                                        (msgMark.CenterPoint.y + msgMark.NormalVector.y * iLength));
            } else {
                markGraphic.isStent = true;
                markGraphic.renderPoints[1] = new Point((msgMark.CenterPoint.x - msgMark.NormalVector.x * iLength),
                                                        (msgMark.CenterPoint.y - msgMark.NormalVector.y * iLength));
            }

            this.UpdateRenderPoint(markGraphic,cell);

            let stenosisMarkText = "";
            if (msgMark.FindingType == 1) {
                stenosisMarkText += msgMark.StenosisDegree == 0 ? "狭窄" : valCvt.stenosisLevelCvt(msgMark.StenosisDegree.toString());
            }
            if (msgMark.FindingType == 2) {
                stenosisMarkText += "支架";
            }
            if (msgMark.FindingType == 3) {
                stenosisMarkText += "心肌桥";
            }
            

            markGraphic.updateText(msgMark.CenterlineName + stenosisMarkText);

            if (result) {
                let flag = result.isSelected(markGraphic.findingUID);
                markGraphic.isSelectedInFInding = flag;
                markGraphic.isSelected = flag
                
            }
        }

        if (result) {
            // 此时不应提前绘制Cell，否则会出现中心线位置与图像不对应问题
            result.updateStenosisMark(cell, false);
        }
        //console.warn('StenosisMarkCellOperation Leave!');
        
    }
    private UpdateRenderPoint(newmark: GraphicStenosisMark ,cell: Viewer.MedViewerControlCell): void{
        for (const graphic of cell.displayData.graphics) {
            if (graphic instanceof GraphicStenosisMark) {
                if(newmark.findingUID != graphic.findingUID && newmark.isStent == graphic.isStent){
                    if(newmark.renderPoints[1].y - graphic.renderPoints[1].y >= 0 && 
                        newmark.renderPoints[1].y - graphic.renderPoints[1].y < 10){
                        newmark.renderPoints[1] = new Point(newmark.renderPoints[1].x,newmark.renderPoints[1].y + 12);
                    }
                    if(newmark.renderPoints[1].y - graphic.renderPoints[1].y < 0 && 
                        graphic.renderPoints[1].y - newmark.renderPoints[1].y < 10){
                        newmark.renderPoints[1] = new Point(newmark.renderPoints[1].x,newmark.renderPoints[1].y - 12);
                    }
                }
            }

        }
    }

    private isSameWithCell(Marks: CardiacProto.IMessageStenosisMark[],cell: Viewer.MedViewerControlCell){
        //如果数量和findingUID都对得上，那么就返回true
        let msgMarks = [];
        for (const msgMark of Marks){
            msgMarks.push(msgMark.FindingUID);
        }
        let cellMarks = [];
        cell.displayData.graphics.forEach(graphic => {
            if (graphic instanceof GraphicStenosisMark) {
                cellMarks.push(graphic.findingUID);
            }
        });
        if(msgMarks.length == 0 || cellMarks.length == 0){
            return false;
        }
        if(msgMarks.length != cellMarks.length){
            return false;
        }
        for(let mark of msgMarks){
            if(cellMarks.findIndex(mark) < 0){
                return false;
            }
        }

        return true;
    }
}

// MPR十字线, CPR布局时不需要旋转
export class HRTCrossHairCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {
        const workflow = container.getSingleModel(ViewerKit.AppWorkflow);
        const currentLayout = workflow.LayoutSwitcher.CurrentLayout;
        const msgCrossHair = $PB.MsgCrossHair.decode(buffer);
        for (let g of cell.displayData.graphics) {
            if (g instanceof ViewerKit.GraphicCrossHair) {
                g.isVisible = msgCrossHair.crossHairVisible;
                g.crossHairCenter = new Point(msgCrossHair.crossHairCenter.x, msgCrossHair.crossHairCenter.y);
                g.crossHairColorX = msgCrossHair.crossHairColorX;
                g.crossHairColorY = msgCrossHair.crossHairColorY;
                g.vectorXLine = new Viewer.Vector(msgCrossHair.crossHairDirX.x, msgCrossHair.crossHairDirX.y);
                g.vectorYLine = new Viewer.Vector(msgCrossHair.crossHairDirY.x, msgCrossHair.crossHairDirY.y);
                g.displayData = cell.displayData;
                g.canRotate = currentLayout == 'resultLayoutMPR';
                break;
            }
        }
    }
}

export class ContourCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {
        //console.info("Enter ContourCellOperation.handle");

        const component = container.getModel('MainComponent') as HeartComponent;
        const isChecked = component.toolbarbottom.checkOptionsOne[5].checked;

        const msgContour = CardiacProto.MessageAnnotationContour.decode(buffer);
        this.updateContour(msgContour, cell,isChecked);  

        let maxDiameterGraphic = this.getContourMaxDiameterGraphic(cell);
        maxDiameterGraphic.isVisible = isChecked;
        this.updateContourDiameter(maxDiameterGraphic, msgContour.MaxDiameterPoints as CardiacProto.MessageHRTPoint2Ds, cell);

        let minDiameterGraphic = this.getContourMinDiameterGraphic(cell);
        minDiameterGraphic.isVisible = isChecked;
        this.updateContourDiameter(minDiameterGraphic, msgContour.MinDiameterPoints as CardiacProto.MessageHRTPoint2Ds, cell);

        this.updateStatistics(cell, msgContour);
        cell.displayData.refreshGraphics();

        //console.info("Leave ContourCellOperation.handle");
    }

    private updateContour(message: CardiacProto.MessageAnnotationContour, cell: Viewer.MedViewerControlCell, isChecked:boolean): void {
        let contourPointList: Point[] = [];
        for (let item of message.ContourPoints.Point) {
            contourPointList.push(new Point(item.x, item.y));
        }
        let graphicContour = this.getContour(cell);
        graphicContour.isVisible = isChecked;
        
        graphicContour.handles = contourPointList;
    }

    private updateContourDiameter(graphic: GraphicContourDiameter, points: CardiacProto.MessageHRTPoint2Ds, cell: Viewer.MedViewerControlCell) {
        let diameterPoints: Point[] = [];
        for (let item of points.Point) {
            diameterPoints.push(new Point(item.x, item.y));
        }
        graphic.renderPoints = diameterPoints;
    }

    private updateStatistics(cell: Viewer.MedViewerControlCell, content: CardiacProto.MessageAnnotationContour) {
        let statisticsGraphic = this.getContourStatisticsGraphic(cell);
        statisticsGraphic.diameter = content.MinDiameter.toFixed(1) + '/' + content.MaxDiameter.toFixed(1) + 'mm';
        statisticsGraphic.area = content.Area.toFixed(0) + 'mm²';
    }

    private getContour(cell: Viewer.MedViewerControlCell): GraphicContour {
        let graphic = cell.displayData.getOrAddGraphic(GraphicContour);
        graphic.property.normalColor = '#87CEFA';
        return graphic;
    }

    private getContourMaxDiameterGraphic(cell: Viewer.MedViewerControlCell) {
        for (let g of cell.displayData.graphics) {
            if (g instanceof GraphicContourDiameter && (g as GraphicContourDiameter).diameterType == CardiacProto.ContourDiameterType.ContourDiameterType_Max) {
                return g;
            }
        }

        let graphic = new GraphicContourDiameter();
        graphic.diameterType = CardiacProto.ContourDiameterType.ContourDiameterType_Max;
        graphic.property.normalColor = '#87CEFA';
        cell.displayData.addGraphic(graphic);
        return graphic;
    }

    private getContourMinDiameterGraphic(cell: Viewer.MedViewerControlCell) {
        for (let g of cell.displayData.graphics) {
            if (g instanceof GraphicContourDiameter && (g as GraphicContourDiameter).diameterType == CardiacProto.ContourDiameterType.ContourDiameterType_Min) {
                return g;
            }
        }

        let graphic = new GraphicContourDiameter();
        graphic.diameterType = CardiacProto.ContourDiameterType.ContourDiameterType_Min;
        graphic.property.normalColor = '#87CEFA';
        graphic.isVisible = true;
        cell.displayData.addGraphic(graphic);
        return graphic;
    }

    private getContourStatisticsGraphic(cell: Viewer.MedViewerControlCell) {
        let graphic = cell.displayData.getOrAddGraphic(GraphicContourStatistics);
        graphic.renderPoints[0] = new Point(cell.canvas.width, cell.canvas.height - 1);
        return graphic;
    }
}

export class UpdateSectionLocationCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {
        const msgSlider = CardiacProto.MessageSectionSlider.decode(buffer);
        let graphic = this.getSectionPositionMarkGraphic(cell);

        graphic.centerPoint = new Point(msgSlider.CenterPoint.x, msgSlider.CenterPoint.y);
        graphic.direction = new Viewer.Vector(msgSlider.NormalVector.x, msgSlider.NormalVector.y);
        graphic.relatedCenterLineID = msgSlider.CenterLineID.toString();
        let component = container.getModel('MainComponent') as HeartComponent;
        graphic.isVisible = component.toolbarbottom.checkOptionsOne[3].checked;
    }

    getSectionPositionMarkGraphic(cell: Viewer.MedViewerControlCell): GraphicSectionPositionMark {
        for (let g of cell.displayData.graphics) {
            if (g instanceof GraphicSectionPositionMark) {
                return g;
            }
        }

        let graphic = new GraphicSectionPositionMark();
        cell.displayData.addGraphic(graphic);
        this.addPositionMarkMouseWheelEvent(cell);
        return graphic;
    }

    addPositionMarkMouseWheelEvent(cell: Viewer.MedViewerControlCell): void {
        let viewerControl = cell.viewerControl as MedViewerControl;
        viewerControl.controlElement.addEventListener('mousewheel', (e: any) => this.positionMarkMouseWheelEvent(e, cell), true);
    }

    positionMarkMouseWheelEvent(e: any, cell: Viewer.MedViewerControlCell): void {
        if (cell.viewerControl.layoutManager.getSelectedCells()[0].cellName === cell.cellName) {
            let event = e.event || window.event;
            let index = event.wheelDeltaY > 0 ? 1 : -1;
            this.updatePositionMark(cell, index);
            e.stopPropagation();
        }
    }

    updatePositionMark(cell: Viewer.MedViewerControlCell, value: number) {
        const params = CardiacProto.MessageChangeSliderLocationParams.create();
        params.ChangeType = CardiacProto.SliderLocationChangeType.SliderLocationChangeType_Offset;
        params.ChangeValue = value;
        const buffer = CardiacProto.MessageChangeSliderLocationParams.encode(params).finish();
        cell.viewerControl.commandSender.sendCellOperation(buffer, 'UpdateSectionLocation', cell.cellName);
    }
}

export class UpdateSectionDistanceCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {
        const msg = $PB.MsgCommonDouble.decode(buffer);
        let graphic = cell.displayData.getOrAddGraphic(GraphicSectionDistance);

        graphic.canSelect = false;
        graphic.text = msg.value.toFixed(0) + 'mm';
        graphic.renderPoints[0] = new Point(cell.canvas.width, 1);
    }
}


export class UpdateStenosisRangeMarkCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {
        const msg = CardiacProto.MessageStenosisRangeMarkInfo.decode(buffer);

        if (msg.Sliders.length == 0) {
            for (let c of cell.viewerControl.getCells()) {
                c.displayData.deleteGraphics(GraphicStenosisRangeMark);
            }
            return;
        }
        const component = container.getModel('MainComponent') as HeartComponent;
        const result = container.getModel('ResultTable') as ResultTableComponent;
        const isVisible = component.toolbarbottom.checkOptionsOne[4].checked &&
            ((result.selectedStenosisItem.isChecked &&
                result.selectedStenosisItem.is_stent_present != 2) ||
                (result.selectedStentItem.isChecked &&
                    result.selectedStentItem.is_stent_present != 2));
        for (let item of msg.Sliders) {
            let graphic = this.getStenosisRangeMarkGraphic(cell, item.MarkType);
            graphic.centerPoint = new Point(item.Slider.CenterPoint.x, item.Slider.CenterPoint.y);
            graphic.direction = new Viewer.Vector(item.Slider.NormalVector.x, item.Slider.NormalVector.y);
            graphic.relatedCenterLineID = item.Slider.CenterLineID.toString();
            graphic.isVisible = isVisible;
        }

        let proximalIndex = msg.ProximalIndex;
        let distalIndex = msg.DistalIndex;
        let findingUid = msg.findingUid;
        let findingItem = result.getFinding(findingUid);
        if(findingItem != null && findingItem.isChecked) {
            let currentIndex: string = '';
            if (findingItem.extend1) {
                let all = findingItem.extend1.split(';');
                currentIndex = all[0];
            }
            findingItem.extend1 = currentIndex + ";" + proximalIndex.toString() + ";" + distalIndex.toString();
            let dto = findingItem.toDto();
            component.advAppAPIService.aiDBSvcClient.updateCoronaryFinding(dto);
        }
    }

    getStenosisRangeMarkGraphic(cell: Viewer.MedViewerControlCell, markType: CardiacProto.StenosisMarkType): GraphicStenosisRangeMark {
        for (let g of cell.displayData.graphics) {
            if (g instanceof GraphicStenosisRangeMark && g.markType === markType) {
                return g;
            }
        }

        let graphic = new GraphicStenosisRangeMark();
        graphic.markType = markType;
        cell.displayData.addGraphic(graphic);
        return graphic;
    }

    updateRangeMarkPositionToDB(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell): void {
        let component = container.getModel('MainComponent') as HeartComponent;
        let resultTable = container.getModel('ResultTable') as ResultTableComponent;
        let dto = resultTable.selectedStenosisItem.toDto();
        component.advAppAPIService.aiDBSvcClient.updateCoronaryFinding(dto);
    }
}

export class UpdateDiameterStenosisInfo implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {
        const msg = CardiacProto.MessageSelectedStenosisInfo.decode(buffer);
        let stenosisLength = msg.Length;
        let findingUid = msg.findingUid;

        let resultTable = container.getModel('ResultTable') as ResultTableComponent;
        let findingItem = resultTable.getFinding(findingUid);
        if(findingItem != null) {
            let flag = false;

            if(findingItem.narrow_length != Math.round(stenosisLength) && Math.round(stenosisLength) > 0){
                findingItem.narrow_length = Math.round(stenosisLength);
                flag = true;
            }
            
            if(flag){
                AppCommon.Messenger.trigger('hasModified', true);
                let component = container.getModel('MainComponent') as HeartComponent;
                let dto = findingItem.toDto();
                component.advAppAPIService.aiDBSvcClient.updateCoronaryFinding(dto);
                resultTable.refresh();
            }
        }
    }
}

export class UpdateHUValueOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {
        let allCells = cell.viewerControl.getCells();
        for (let oneCell of allCells) {
            let graphic = oneCell.displayData.getGraphic(GraphicHUValue);
            if (graphic) {
                graphic.isVisible = false;

                // 当前cell执行完Operation之后必然会重新绘制，加判断以避免重复绘制
                if (oneCell.cellName !== cell.cellName) {
                    oneCell.drawImage();
                }
            }
        }

        const msg = $PB.MsgCommonString.decode(buffer);
        let huValue = msg.value;
        let huValueGraphic = cell.displayData.getOrAddGraphic(GraphicHUValue);
        if (huValue.length > 0) {
            huValueGraphic.canSelect = false;
            huValueGraphic.isVisible = true;
            huValueGraphic.text = "HU: " + huValue;
            huValueGraphic.renderPoints[0] = new Point(cell.canvas.width - 5, cell.canvas.height - 55);
        }
    }
}

export class UpdateLoadPercentOperation implements ViewerKit.IPanelOperation {
    handle(modelContainer: AppCommon.ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
        const msg = $PB.MsgCommonInt.decode(obj.context);
        let component = modelContainer.getModel('MainComponent') as HeartComponent;
        let percent = msg.value;
        if (percent < 100) {
            component.canAllPageResponse = false;
            component.isHiddenProgress = false;
            component.loadPercent = percent;
        } else {
            component.canAllPageResponse = true;
            component.isHiddenProgress = true;
            console.log('进度条100% ' +  AppCommon.DateTimeHelper.getTimeString());
        }
        return null;
    }
}
export class UpdateProgressOperation implements ViewerKit.IPanelOperation {
    handle(modelContainer: AppCommon.ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
        const msg = $PB.MsgProgressInfo.decode(obj.context);
        let component = modelContainer.getModel('MainComponent') as HeartComponent;
        if(msg.progressInfo == 'UID_AppCommon_CommonSave_Saving'
         && !msg.isVisible){
             if(component.isSaving ){
                if(msg.progress == 1){
                    component.toastSvc.info('保存成功');
                    component.isSaving = false;
                 }else{
                    component.toastSvc.error('保存失败，请联系工程师');
                    component.isSaving = false;
                 }
             }
             else{
                if(msg.progress == 1){
                    AppCommon.Messenger.trigger('SaveUpdate');
                    return;
                 }else{
                    AppCommon.Messenger.trigger('SaveFailed');
                    
                 }
             }

            
        }
        return null;
    }
}

export class HRTUpdateGraphicAllInfoCellOperation implements ViewerKit.ICellOperation {
    handle(container: AppCommon.ModelContainer, cell: Viewer.MedViewerControlCell, buffer: Uint8Array): void {
        const roiList = $PB.MsgRoiInfoList.decode(buffer);
        if (roiList.containContent) {
            for (let roi of roiList.roiCollection) {
                let pointList: AppCommon.Point[] = [];
                if (roi.pointCollection && roi.pointCollection.pointList) {
                    for (let p of roi.pointCollection.pointList) {
                        pointList.push(CommandHelper.analyzePoint(p));
                    }
                }

                Viewer.CellGraphicOperationHelper.handle(cell, roi.id, pointList, roi.roiType, roi.textContent);
            }
        }
        else {
            // Common中将Cell上所有图元隐藏逻辑需优化，心脏目前只有GraphicAnnotationLine一种图元翻页时需要隐藏
            cell.displayData.graphics.forEach(g => {
                if (g instanceof GraphicAnnotationLine) {
                    if (cell.cellType == CellTypeName.CPR) {
                        cell.displayData.removeGraphic(g);
                    } else {
                        g.updateAllGraphicVisible(false);
                    }
                }});
        }
    }
}

