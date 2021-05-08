import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';

export class FilmingWorkflow extends ViewerKit.AppWorkflow {
    public Initialize(): void {
        super.Initialize();
        this.LayoutSwitcher = new ViewerKit.AppLayoutSwitcher();
        this.WorkflowConfigInfo = new ViewerKit.WorkflowConfigInfo();       

        //加入 36 个layout
        for(let i=1;i<=6;i++)
        {
           for(let j=1;j<=6;j++)
           {
              this.WorkflowConfigInfo.LayoutCollection.push(this.buildLayoutResultMPR(j,i));
           }
        }      
    }

    buildLayoutResultMPR(row:number,colums:number): Viewer.LayoutInfo {
        const defaultLayout = new Viewer.LayoutCellInfo();
        defaultLayout.rows = row;
        defaultLayout.colums = colums;

        const wholeLayoutInfo = new Viewer.LayoutInfo();
        wholeLayoutInfo.layoutName = 'defaultLayout'+row+"_"+colums;//1,2,3..., 36
        wholeLayoutInfo.displayName = '';
        wholeLayoutInfo.description = '';
        wholeLayoutInfo.layout = defaultLayout;
        wholeLayoutInfo.cellItems = [];
        //console.log('layoutName: ' + wholeLayoutInfo.layoutName);
       
        for (let i = 0; i < colums*row; i++) {//cell数量为colums * row
            const cellitem = new Viewer.LayoutCellItemInfo();
            cellitem.cellName = 'Cell_' + i;
            cellitem.cellType = 'Slice';
            wholeLayoutInfo.cellItems.push(cellitem);
            //console.log('cellName: ' +  cellitem.cellName);
        }         

        return wholeLayoutInfo;
    }
}