import { Component, OnInit } from '@angular/core';
import * as $PBRoot from 'uih-app-protocol';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import { ModelContainer } from 'uih-appcommon';
import * as ViewerKit from 'uih-viewerkit';
import { CellTypeName, HRTCellNames } from '../heart.component.definition';
import { HeartComponent } from '../heart.component';

@Component({
    templateUrl: './mpr-cpr-switch.component.html',
    styleUrls: [
        './mpr-cpr-switch.component.css'
    ]
})
export class MPRCPRSwitchComponent implements OnInit {

    currentLayout: string = '';

    constructor(protected modelContainer: ModelContainer) { }

    ngOnInit() {
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        if (workflow) {
            if (workflow.LayoutSwitcher.CurrentLayout == "resultLayoutCPR") {
                this.currentLayout = "CPR";
            } else {
                this.currentLayout = "MPR";
            }
        }
    }

    switchLayout(): void {
        const workflow = this.modelContainer.getSingleModel(ViewerKit.AppWorkflow);
        if (workflow) {
            let currentLayout = workflow.LayoutSwitcher.CurrentLayout === 'resultLayoutCPR' ? 'resultLayoutMPR' : 'resultLayoutCPR';
            
            let visible = true;
            for (let cell of workflow.cells) {
                if(cell.cellName === HRTCellNames.VR)
                {
                    visible = cell.displayData.imageText.isVisible;
                    continue;
                }
                if(visible != cell.displayData.imageText.isVisible){
                    cell.displayData.imageText.isVisible = visible;
                }

                if (cell.cellType == CellTypeName.MPR) {
                    for (let g of cell.displayData.graphics) {
                        if (g instanceof ViewerKit.GraphicCrossHair) {
                            g.canRotate = currentLayout == 'resultLayoutMPR';
                            break;
                        }
                    }
                }
            }

            if (currentLayout == 'resultLayoutCPR') {
                let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
                ViewerKit.CommandHelper.sendCellOperation(component.commandSender, null, 'ResetMPROrientation', 'Axial');
            }
            workflow.LayoutSwitcher.CurrentLayout = currentLayout;
        }
    }
}
