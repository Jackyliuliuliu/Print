import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';

export class StencilWorkflow extends ViewerKit.AppWorkflow {

    public Initialize(): void {
        super.Initialize();
        this.LayoutSwitcher = new ViewerKit.AppLayoutSwitcher();
        this.WorkflowConfigInfo = new ViewerKit.WorkflowConfigInfo();

        const cellItem0 = new Viewer.LayoutCellItemInfo();
        cellItem0.cellName = "Axial";
        cellItem0.cellType = "MPR";

        const cellItem1 = new Viewer.LayoutCellItemInfo();
        cellItem1.cellName = "VR";
        cellItem1.cellType = "VR";

        const cellItem2 = new Viewer.LayoutCellItemInfo();
        cellItem2.cellName = "Sagittal";
        cellItem2.cellType = "MPR";

        const cellItem3 = new Viewer.LayoutCellItemInfo();
        cellItem3.cellName = "Coronal";
        cellItem3.cellType = "MPR";

        {
            const defaultLayoutCellInfo = new Viewer.LayoutCellInfo();
            defaultLayoutCellInfo.rows = 2;
            defaultLayoutCellInfo.colums = 2;

            const defaultLayoutInfo = new Viewer.LayoutInfo();
            defaultLayoutInfo.layoutName = "defaultLayout";
            defaultLayoutInfo.displayName = "FirstLayout";
            defaultLayoutInfo.description = "完整的Layout功能测试";
            defaultLayoutInfo.layout = defaultLayoutCellInfo;
            defaultLayoutInfo.cellItems = [];

            defaultLayoutInfo.cellItems.push(cellItem0);
            defaultLayoutInfo.cellItems.push(cellItem1);
            defaultLayoutInfo.cellItems.push(cellItem2);
            defaultLayoutInfo.cellItems.push(cellItem3);

            this.WorkflowConfigInfo.LayoutCollection.push(defaultLayoutInfo);
        }

        {
            const layout2CellInfo = new Viewer.LayoutCellInfo();
            layout2CellInfo.rows = 1;
            layout2CellInfo.colums = 3;

            const layout2Info = new Viewer.LayoutInfo();
            layout2Info.layoutName = "layout2";
            layout2Info.displayName = "SecondLayout";
            layout2Info.description = "***";
            layout2Info.layout = layout2CellInfo;

            layout2Info.cellItems = [];
            layout2Info.cellItems.push(cellItem0);
            layout2Info.cellItems.push(cellItem2);
            layout2Info.cellItems.push(cellItem3);

            this.WorkflowConfigInfo.LayoutCollection.push(layout2Info);
        }
    }

}