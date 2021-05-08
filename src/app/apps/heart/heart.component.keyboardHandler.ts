import { KeyBoardHandler, MedViewerControl } from 'uih-medviewercontrol';
import * as Viewer from 'uih-medviewercontrol';
import { HeartComponent } from './heart.component';
import * as Appcommon from 'uih-appcommon';
import { ContextMenuComponent } from 'uih-apptoolkit';

export class ChangePerformanceCompareFlagCommand extends KeyBoardHandler {
    handle(event: any): boolean {
        // Ctrl+Alt+O
        if (event && event.ctrlKey && event.altKey && event.keyCode == 79) {
            let viewerControl = this.modelContainer.getModel('MedViewerControl') as MedViewerControl;
            viewerControl.isPerformanceOptimized = !viewerControl.isPerformanceOptimized;
            console.log('是否开启性能优化： ', viewerControl.isPerformanceOptimized);
            return true;
        }
        // Ctrl+Alt+P
        if (event && event.ctrlKey && event.altKey && event.keyCode == 80) {
            let viewerControl = this.modelContainer.getModel('MedViewerControl') as MedViewerControl;
            viewerControl.isUseDownSample = !viewerControl.isUseDownSample;
            console.log('是否开启降采样： ', viewerControl.isUseDownSample);
            return true;
        }

        return false;
    }
}

export class SwitchDisplayStatusCommand extends KeyBoardHandler {
    handle(event: any): boolean {
        // D
        
        if (event && event.keyCode === 68) {
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            if (!component.toolbar.isVisibleBatch) {
                component.toolbarbottom.checkOptionsAll = !component.toolbarbottom.checkOptionsAll;
                component.toolbarbottom.updateAllChecked();
                return true;
            }
        }

        return false;
    }
}

export class SwitchUsageStatusCommand extends KeyBoardHandler {
    handle(event: any): boolean {
        // F2
        if (event && event.keyCode === 113) {
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            component.toolbar.switchUsage();
            return true;
        }
        // s
        if (event && event.keyCode === 83) {
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            component.toolbar.saveImage();
            return true;
        }
        return false;
    }
}

export class SwitchSelectedCenterline extends KeyBoardHandler {
    handle(event: any): boolean {
        // space
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as Viewer.MedViewerControl;
        const selectedCells = viewerControl.layoutManager.getSelectedCells();

        for (const selectedCell of selectedCells) {
            if ((selectedCell.cellType === 'CPR') || (selectedCell.cellType === 'SCPR')) {
                if (event && event.keyCode === 32) {
                    Appcommon.Messenger.trigger('nextCenterline');
                    return true;
                }
            }
        }

        return false;
    }
}

export class FinishCurrentEdit extends KeyBoardHandler {
    handle(event: any): boolean {
        // Enter
        if (event && event.keyCode === 13) {
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            if (component.toolbar.isEditorMode && component.editor.canEdit) {
               //component.editor.confirm();
               component.editor.doExitEditor();
               event.preventDefault(); // 避免回车触发焦点Button的Click事件
            }
            return true;
        }

        return false;
    }
}
