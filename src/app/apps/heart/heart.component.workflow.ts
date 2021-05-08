import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';

export class HeartWorkflow extends ViewerKit.AppWorkflow {
    public Initialize(): void {
        super.Initialize();
        this.LayoutSwitcher = new ViewerKit.AppLayoutSwitcher();
        this.WorkflowConfigInfo = new ViewerKit.WorkflowConfigInfo();

        const defaultLayout = new Viewer.LayoutCellInfo();
        defaultLayout.rows = 2;
        defaultLayout.colums = 2;

        const wholeLayoutInfo = new Viewer.LayoutInfo();
        wholeLayoutInfo.layoutName = 'defaultLayout';
        wholeLayoutInfo.displayName = 'FirstLayout';
        wholeLayoutInfo.description = '完整的Layout功能测试';
        wholeLayoutInfo.layout = defaultLayout;
        wholeLayoutInfo.cellItems = [];

        const cellItem0 = new Viewer.LayoutCellItemInfo();
        cellItem0.cellName = 'Axial';
        cellItem0.cellType = 'MPR';

        const cellItem1 = new Viewer.LayoutCellItemInfo();
        cellItem1.cellName = 'A_VR';
        cellItem1.cellType = 'VR';

        const cellItem2 = new Viewer.LayoutCellItemInfo();
        cellItem2.cellName = 'Sagittal';
        cellItem2.cellType = 'MPR';

        const cellItem3 = new Viewer.LayoutCellItemInfo();
        cellItem3.cellName = 'Coronal';
        cellItem3.cellType = 'MPR';

        wholeLayoutInfo.cellItems.push(cellItem1);
        wholeLayoutInfo.cellItems.push(cellItem0);
        wholeLayoutInfo.cellItems.push(cellItem2);
        wholeLayoutInfo.cellItems.push(cellItem3);

        this.WorkflowConfigInfo.LayoutCollection.push(wholeLayoutInfo);
        this.WorkflowConfigInfo.LayoutCollection.push(this.buildLayoutResultCPR());
        this.WorkflowConfigInfo.LayoutCollection.push(this.buildLayoutResultMPR());
    }

    buildLayoutResultCPR(): Viewer.LayoutInfo {
        const defaultLayout = new Viewer.LayoutCellInfo();
        defaultLayout.rows = 1;
        defaultLayout.colums = 2;
        defaultLayout.widths = [0.72, 0.28];

        const childLayout1 = new Viewer.LayoutCellInfo();
        childLayout1.rows = 2;
        childLayout1.colums = 2;
        defaultLayout.cells.push(childLayout1);

        const childLayout2 = new Viewer.LayoutCellInfo();
        childLayout2.rows = 1;
        childLayout2.colums = 2;
        childLayout2.widths = [0.4, 0.6];
        defaultLayout.cells.push(childLayout2);

        const grandSon1 = new Viewer.LayoutCellInfo();
        grandSon1.rows = 7;
        grandSon1.colums = 1;
        childLayout2.cells.push(grandSon1);

        const grandSon2 = new Viewer.LayoutCellInfo();
        grandSon2.rows = 1;
        grandSon2.colums = 1;
        childLayout2.cells.push(grandSon2);

        const wholeLayoutInfo = new Viewer.LayoutInfo();
        wholeLayoutInfo.layoutName = 'resultLayoutCPR';
        wholeLayoutInfo.displayName = '结果布局';
        wholeLayoutInfo.description = '完整的Layout功能测试';
        wholeLayoutInfo.layout = defaultLayout;
        wholeLayoutInfo.cellItems = [];

        const cellItem0 = new Viewer.LayoutCellItemInfo();
        cellItem0.cellName = 'A_VR';
        cellItem0.cellType = 'VR';

        const cellItem1 = new Viewer.LayoutCellItemInfo();
        cellItem1.cellName = 'Default_Layout_Stretched_CPR_2';
        cellItem1.cellType = 'CPR';

        const cellItem2 = new Viewer.LayoutCellItemInfo();
        cellItem2.cellName = 'Axial';
        cellItem2.cellType = 'MPR';

        const cellItem4 = new Viewer.LayoutCellItemInfo();
        cellItem4.cellName = 'Default_Layout_Stretched_CPR_3';
        cellItem4.cellType = 'CPR';

        // const cellItem5 = new Viewer.LayoutCellItemInfo();
        // cellItem5.cellName = 'Default_Layout_Section_1';
        // cellItem5.cellType = 'MPR';

        const cellItem6 = new Viewer.LayoutCellItemInfo();
        cellItem6.cellName = 'Default_Layout_Section_2';
        cellItem6.cellType = 'MPR';

        const cellItem7 = new Viewer.LayoutCellItemInfo();
        cellItem7.cellName = 'Default_Layout_Section_3';
        cellItem7.cellType = 'MPR';

        const cellItem8 = new Viewer.LayoutCellItemInfo();
        cellItem8.cellName = 'Default_Layout_Section_4';
        cellItem8.cellType = 'MPR';

        const cellItem9 = new Viewer.LayoutCellItemInfo();
        cellItem9.cellName = 'Default_Layout_Section_5';
        cellItem9.cellType = 'MPR';

        const cellItem10 = new Viewer.LayoutCellItemInfo();
        cellItem10.cellName = 'Default_Layout_Section_6';
        cellItem10.cellType = 'MPR';

        const cellItem11 = new Viewer.LayoutCellItemInfo();
        cellItem11.cellName = 'Default_Layout_Section_7';
        cellItem11.cellType = 'MPR';

        const cellItem12 = new Viewer.LayoutCellItemInfo();
        cellItem12.cellName = 'Default_Layout_Section_8';
        cellItem12.cellType = 'MPR';

        // const cellItem13 = new Viewer.LayoutCellItemInfo();
        // cellItem13.cellName = 'Default_Layout_Section_9';
        // cellItem13.cellType = 'MPR';

        const cellItem14 = new Viewer.LayoutCellItemInfo();
        cellItem14.cellName = 'Straightened_CPR_Coronary';
        cellItem14.cellType = 'CPR';

        wholeLayoutInfo.cellItems.push(cellItem0);
        wholeLayoutInfo.cellItems.push(cellItem1);
        wholeLayoutInfo.cellItems.push(cellItem2);
        wholeLayoutInfo.cellItems.push(cellItem4);
        //wholeLayoutInfo.cellItems.push(cellItem5);
        wholeLayoutInfo.cellItems.push(cellItem6);
        wholeLayoutInfo.cellItems.push(cellItem7);
        wholeLayoutInfo.cellItems.push(cellItem8);
        wholeLayoutInfo.cellItems.push(cellItem9);
        wholeLayoutInfo.cellItems.push(cellItem10);
        wholeLayoutInfo.cellItems.push(cellItem11);
        wholeLayoutInfo.cellItems.push(cellItem12);
        //wholeLayoutInfo.cellItems.push(cellItem13);
        wholeLayoutInfo.cellItems.push(cellItem14);

        return wholeLayoutInfo;
    }

    buildLayoutResultMPR(): Viewer.LayoutInfo {
        const defaultLayout = new Viewer.LayoutCellInfo();
        defaultLayout.rows = 1;
        defaultLayout.colums = 2;
        defaultLayout.widths = [0.72, 0.28];

        const childLayout1 = new Viewer.LayoutCellInfo();
        childLayout1.rows = 2;
        childLayout1.colums = 2;
        defaultLayout.cells.push(childLayout1);

        const childLayout2 = new Viewer.LayoutCellInfo();
        childLayout2.rows = 1;
        childLayout2.colums = 2;
        childLayout2.widths = [0.4, 0.6];
        defaultLayout.cells.push(childLayout2);

        const grandSon1 = new Viewer.LayoutCellInfo();
        grandSon1.rows = 7;
        grandSon1.colums = 1;
        childLayout2.cells.push(grandSon1);

        const grandSon2 = new Viewer.LayoutCellInfo();
        grandSon2.rows = 1;
        grandSon2.colums = 1;
        childLayout2.cells.push(grandSon2);

        const wholeLayoutInfo = new Viewer.LayoutInfo();
        wholeLayoutInfo.layoutName = 'resultLayoutMPR';
        wholeLayoutInfo.displayName = '结果MPR布局';
        wholeLayoutInfo.description = '完整的Layout功能测试';
        wholeLayoutInfo.layout = defaultLayout;
        wholeLayoutInfo.cellItems = [];

        const cellItem0 = new Viewer.LayoutCellItemInfo();
        cellItem0.cellName = 'A_VR';
        cellItem0.cellType = 'VR';

        const cellItem1 = new Viewer.LayoutCellItemInfo();
        cellItem1.cellName = 'Sagittal';
        cellItem1.cellType = 'MPR';

        const cellItem2 = new Viewer.LayoutCellItemInfo();
        cellItem2.cellName = 'Axial';
        cellItem2.cellType = 'MPR';

        const cellItem3 = new Viewer.LayoutCellItemInfo();
        cellItem3.cellName = 'Coronal';
        cellItem3.cellType = 'MPR';

        const cellItem4 = new Viewer.LayoutCellItemInfo();
        cellItem4.cellName = 'Default_Layout_Section_2';
        cellItem4.cellType = 'MPR';

        const cellItem5 = new Viewer.LayoutCellItemInfo();
        cellItem5.cellName = 'Default_Layout_Section_3';
        cellItem5.cellType = 'MPR';

        const cellItem6 = new Viewer.LayoutCellItemInfo();
        cellItem6.cellName = 'Default_Layout_Section_4';
        cellItem6.cellType = 'MPR';

        const cellItem7 = new Viewer.LayoutCellItemInfo();
        cellItem7.cellName = 'Default_Layout_Section_5';
        cellItem7.cellType = 'MPR';

        const cellItem8 = new Viewer.LayoutCellItemInfo();
        cellItem8.cellName = 'Default_Layout_Section_6';
        cellItem8.cellType = 'MPR';

        const cellItem9 = new Viewer.LayoutCellItemInfo();
        cellItem9.cellName = 'Default_Layout_Section_7';
        cellItem9.cellType = 'MPR';

        const cellItem10 = new Viewer.LayoutCellItemInfo();
        cellItem10.cellName = 'Default_Layout_Section_8';
        cellItem10.cellType = 'MPR';

        const cellItem11 = new Viewer.LayoutCellItemInfo();
        cellItem11.cellName = 'Straightened_CPR_Coronary';
        cellItem11.cellType = 'CPR';

        wholeLayoutInfo.cellItems.push(cellItem0);
        wholeLayoutInfo.cellItems.push(cellItem1);
        wholeLayoutInfo.cellItems.push(cellItem2);
        wholeLayoutInfo.cellItems.push(cellItem3);
        wholeLayoutInfo.cellItems.push(cellItem4);
        wholeLayoutInfo.cellItems.push(cellItem5);
        wholeLayoutInfo.cellItems.push(cellItem6);
        wholeLayoutInfo.cellItems.push(cellItem7);
        wholeLayoutInfo.cellItems.push(cellItem8);
        wholeLayoutInfo.cellItems.push(cellItem9);
        wholeLayoutInfo.cellItems.push(cellItem10);
        wholeLayoutInfo.cellItems.push(cellItem11);

        return wholeLayoutInfo;
    }
}