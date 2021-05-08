import { Component, OnInit } from '@angular/core';
import * as Viewer from 'uih-medviewercontrol';
import { ModelContainer } from 'uih-appcommon';
import { GraphicCenterLine } from '../heart.component.graphics';
import { GraphicContour } from '../contours/graphic_contour';
import { GraphicContourDiameter } from '../contours/graphic_contour_diameter';
import { GraphicStenosisMark } from '../stenosis-mark/graphic-stenosis-mark';
import { GraphicSectionPositionMark } from '../section/GraphicSectionPositionMark';
import { ResultTableComponent } from '../result-table/result-table.component';
import { HeartComponent } from '../heart.component';
import { CommandHelper } from 'uih-viewerkit';
import {GraphicStenosisRangeMark} from '../stenosis-mark/graphic-stenosis-range-mark';
import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;

@Component({
    selector: 'app-toolbar-bottom',
    templateUrl: './toolbar-bottom.component.html',
    styleUrls: ['./toolbar-bottom.component.css']
})
export class ToolbarBottomComponent implements OnInit {
    constructor(protected modelContainer: ModelContainer) { }

    checkOptionsAll = false;
    indeterminate = true;

    checkOptionsOne = [
        { label: '四角信息', value: 'ImageText', checked: true },
        { label: '分割区域', value: 'MPRMask', checked: true },
        { label: '血管中心线', value: 'Centerline', checked: true },
        { label: '中心线定位横线', value: 'SectionPositionMark', checked: true },
        { label: 'CPR狭窄标记', value: 'StenosisMark', checked: true },
        { label: '探针长短径和轮廓', value: 'ContourAndDiameters', checked: false }
    ];

    checkOptionsPre = [
        { label: '四角信息', value: 'ImageText', checked: true },
        { label: '分割区域', value: 'MPRMask', checked: true },
        { label: '血管中心线', value: 'Centerline', checked: true },
        { label: '中心线定位横线', value: 'SectionPositionMark', checked: true },
        { label: 'CPR狭窄标记', value: 'StenosisMark', checked: true },
        { label: '探针长短径和轮廓', value: 'ContourAndDiameters', checked: false }
    ];

    ngOnInit() {
    }

    updateAllChecked(): void {
        if (this.indeterminate) {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return {
                    ...item,
                    checked: true
                };
            });
            this.checkOptionsAll = true;
        } else if (this.checkOptionsAll) {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return {
                    ...item,
                    checked: true
                };
            });
        } else {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return {
                    ...item,
                    checked: false
                };
            });
        }
        this.indeterminate = false;
        this.checkStateChanged();
    }

    updateSingleChecked(): void {
        if (this.checkOptionsOne.every(item => !item.checked)) {
            this.checkOptionsAll = false;
            this.indeterminate = false;
        } else if (this.checkOptionsOne.every(item => item.checked)) {
            this.checkOptionsAll = true;
            this.indeterminate = false;
        } else {
            this.checkOptionsAll = false;
            this.indeterminate = true;
        }

        this.checkStateChanged();
    }

    checkStateChanged(force: boolean = false) {
        this.checkOptionsOne.forEach(item => {
            if (item.checked !== this.checkOptionsPre.find(m => m.value === item.value).checked || force) {
                this.updateVisibleState(item.value, item.checked);
            }
        });

        this.checkOptionsPre = this.checkOptionsOne.map(item => {
            return {
                ...item
            };
        });
    }

    checkStateChangedForLayout() {
        this.updateVisibleStateForLayout();
    }

    updateVisibleState(value: string, checked: boolean): void {

        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;

        const cells = viewerControl.getCells();

        if (value === 'ImageText') {
            for (const cell of cells) {
                if (cell.canvas && cell.cellControl && cell.canvas.width > 0 && cell.canvas.height > 0) {
                    cell.displayData.imageText.isVisible = checked;
                    cell.drawImage();
                }
            }
        } else if (value === 'MPRMask') {
            for (const cell of cells) {
                if (cell.canvas && cell.cellControl && cell.canvas.width > 0 && cell.canvas.height > 0) {
                    if (cell.cellType === 'MPR') {
                        const msg = $PB.MsgCommonBool.create();
                        msg.value = checked;
                        const buffer = $PB.MsgCommonBool.encode(msg).finish();
                        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
                        CommandHelper.sendPanelOperation(component.commandSender, buffer, 'ShowHideMPRMask');
                    }
                }
            }
        } else if (value === 'Centerline') {
            for (const cell of cells) {
                if (cell.canvas && cell.cellControl && cell.canvas.width > 0 && cell.canvas.height > 0) {
                    let isNeedRefresh = false;
                    for (const graphic of cell.displayData.graphics) {
                        if (graphic instanceof GraphicCenterLine) {
                            graphic.isVisible = checked;
                            isNeedRefresh = true;
                        }
                        if (isNeedRefresh) {
                            cell.drawImage();
                        }
                    }
                }
            }
        } else if (value === 'SectionPositionMark') {
            for (const cell of cells) {
                if (cell.canvas && cell.cellControl && cell.canvas.width > 0 && cell.canvas.height > 0) {
                    let isNeedRefresh = false;
                    for (const graphic of cell.displayData.graphics) {
                        if (graphic instanceof GraphicSectionPositionMark) {
                            graphic.isVisible = checked;
                            isNeedRefresh = true;
                        }
                        if (isNeedRefresh) {
                            cell.drawImage();
                        }
                    }
                }
            }
        } else if (value === 'StenosisMark') {
            // 狭窄标记换图元后此处需要相应修改
            const resultTable = this.modelContainer.getModel('ResultTable') as ResultTableComponent;
            if (!checked) {
                resultTable.cancelSelectItem();
            }
            for (const cell of cells) {
                if (cell.canvas && cell.cellControl && cell.canvas.width > 0 && cell.canvas.height > 0) {
                    let isNeedRefresh = false;
                    cell.displayData.graphics.forEach(graphic => {
                        isNeedRefresh = true;
                        if (graphic instanceof GraphicStenosisMark) {
                            resultTable.stenosisItems.concat(resultTable.stentItems).forEach(item => {
                                if (graphic.findingUID === item.findingUID) {
                                    graphic.isVisible = item.isChecked && checked;
                                    const textChild = graphic.getChild(Viewer.GraphicText);
                                    if (textChild) {
                                        textChild.isVisible = graphic.isVisible;
                                    }
                                }
                            });
                        }
                        if(graphic instanceof GraphicStenosisRangeMark){
                            graphic.isVisible = this.checkOptionsOne[4].checked && 
                            (resultTable.selectedStenosisItem.isChecked || 
                                resultTable.selectedStentItem.isChecked);
                        }
                    });
                    if (isNeedRefresh) {
                        cell.drawImage();
                    }
                }
            }
        } else if (value === 'ContourAndDiameters') {
            for (const cell of cells) {
                if (cell.cellName.indexOf('Section') >= 0 && cell.canvas &&
                    cell.cellControl && cell.canvas.width > 0 && cell.canvas.height > 0) {
                    for (const graphic of cell.displayData.graphics) {
                        if (graphic instanceof GraphicContour || graphic instanceof GraphicContourDiameter) {
                            graphic.isVisible = checked;
                        }
                    }
                    cell.drawImage();
                }
            }
        }
    }

    updateVisibleStateForLayout(): void {

        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;

        const cells = viewerControl.getCells();

        for (const cell of cells) {
            if (cell.canvas && cell.cellControl && cell.canvas.width > 0 && cell.canvas.height > 0) {

                cell.displayData.imageText.isVisible = this.checkOptionsOne[0].checked;
                cell.displayData.imageText.refresh();

                let bRefresh = false;
                for (const graphic of cell.displayData.graphics) {
                    if (graphic instanceof GraphicCenterLine) {
                        graphic.isVisible = this.checkOptionsOne[2].checked;
                    }
                    if (graphic instanceof GraphicSectionPositionMark) {
                        graphic.isVisible = this.checkOptionsOne[3].checked;
                    }

                    if (graphic instanceof GraphicStenosisMark) {
                        graphic.isVisible = this.checkOptionsOne[4].checked;

                        const textChild = graphic.getChild(Viewer.GraphicText);
                        if (textChild) {
                            textChild.isVisible = this.checkOptionsOne[4].checked;
                            textChild.refresh();
                        }
                        bRefresh = true;
                    }
                    
                    if(graphic instanceof GraphicStenosisRangeMark){
                        const resultTable = this.modelContainer.getModel('ResultTable') as ResultTableComponent;
                        graphic.isVisible = this.checkOptionsOne[4].checked && (resultTable.selectedStenosisItem.isChecked ||
                        resultTable.selectedStentItem.isChecked);
                    }

                    if (graphic instanceof GraphicContour || graphic instanceof GraphicContourDiameter) {
                        graphic.isVisible = this.checkOptionsOne[5].checked;
                        bRefresh = true;
                    }
                }
                if (bRefresh) {
                    cell.displayData.refreshGraphics();
                }


                cell.drawImageOnly();
            }

        }
    }
}
