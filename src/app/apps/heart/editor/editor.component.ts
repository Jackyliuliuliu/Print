import { Component, OnInit } from '@angular/core';
import { ModelContainer } from 'uih-appcommon';
import { HeartComponent } from '../heart.component';
import { MedViewerControl, ActionTypes } from 'uih-medviewercontrol';
import { HRTActionType } from '../heart.component.definition';
import * as ViewerKit from 'uih-viewerkit';
import { GraphicCenterLine } from '../heart.component.graphics';
import * as AppCommon from 'uih-appcommon';
import { CommandHelper } from 'uih-viewerkit';
import { ResultTableComponent } from '../result-table/result-table.component';
import { AllVesselEnum } from '../heart.component.enumConverter';

enum EditType {
    EditNone = 0,
    EditUndo = 1,
    EditRedo = 2,
    EditCrop = 3,
    EditGrow = 4,
    EditRename = 5,
    EditModify = 6
}

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
    host: {
        '[style.width]': "'100%'",
        '[style.height]': "'100%'"
    }
})

export class EditorComponent implements OnInit {
    public editType: EditType = EditType.EditNone;
    public canEdit: boolean = false;

    saveTitle: string;
    cancelTitle: string;
    returnTitle: string;

    isShowConfirm: boolean = false;
    exitPromptContent: string;

    isShowExitEditor: boolean = false;
    selectedCenterLine: string = '';
    curCenterline: object = {};
    allCenterLineList: Array<object> = [];
    iskeyCenterLine: boolean = false;  //当前选中的血管是否为关键血管
    constructor(protected modelContainer: ModelContainer) { }

    ngOnInit() {
        //init centerlineList
        for (let key in AllVesselEnum) {
            if (isNaN(parseInt(key)))
                this.allCenterLineList.push({ label: key.replace('_', '-'), index: AllVesselEnum[key] });
        }
        AppCommon.Messenger.on('curSelectedCenterLine', (item, isKey) => {
            let centerlineName = item['name'];
            if (this.allCenterLineList.map(item => item['label']).indexOf(centerlineName) < 0) {
                this.allCenterLineList.push({ label: centerlineName, index: 100 })
            }
            this.selectedCenterLine = centerlineName;
            this.curCenterline = item;
            this.iskeyCenterLine = isKey;
        });
    }

    public get isEditCenterLineEnable(): boolean {
        return this.canEdit && (this.editType === EditType.EditModify);
    }

    public get isRenameCenterLineEnable(): boolean {
        return this.canEdit && (this.editType === EditType.EditRename);
    }

    // TODO
    public undo(): void {
        this.editType = EditType.EditUndo;
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        CommandHelper.sendPanelOperation(component.commandSender, null, 'Undo');
    }

    public redo(): void {
        this.editType = EditType.EditRedo;
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        CommandHelper.sendPanelOperation(component.commandSender, null, 'Redo');
    }

    /** crop  3
     *
     */
    public crop(): void {
        if (this.editType === EditType.EditCrop) {
            this.confirm();
        } else {
            this.startEditType(EditType.EditCrop);
            // this.exitPromptContent = '是否确认结束裁剪操作？';
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            CommandHelper.sendPanelOperation(component.commandSender, null, 'SaveTempMask');
            const viewerControl = this.modelContainer.getModel('MedViewerControl') as MedViewerControl;
            viewerControl.setActionType(HRTActionType.Eraser_Remove);
        }
    }

    /** 生长 4
     *
     */
    public grow(): void {
        if (this.editType === EditType.EditGrow) {
            this.confirm();
        } else {
            this.startEditType(EditType.EditGrow);
            // this.exitPromptContent = '是否确认结束生长操作？';
            const viewerControl = this.modelContainer.getModel('MedViewerControl') as MedViewerControl;
            viewerControl.setActionType(HRTActionType.ActionMPRCoronaryGrow);

        }
    }


    /** 重命名中心线 5
     *
     */
    public renameCenterline(): void {
        if (this.editType === EditType.EditRename) {
            // this.confirm();
            this.editType = EditType.EditNone;
            this.canEdit = false;
        } else {
            this.startEditType(EditType.EditRename);
            this.exitPromptContent = '是否确认结束重命名操作？';
        }
    }

    /** 修改中心线 6
     *
     */
    public modifyCenterline(): void {
        if (this.editType === EditType.EditModify) {
            //this.confirm();
            this.startEditType(EditType.EditNone);
            this.setCenterlineGraphicCanModify(false);
        } else {
            this.startEditType(EditType.EditModify);
            this.exitPromptContent = '是否确认结束编辑操作？';
            this.setCenterlineGraphicCanModify(true);
        }
    }

    private setCenterlineGraphicCanModify(canModify): void {
        const workflow = this.modelContainer.getModel('WorkflowModel') as ViewerKit.AppWorkflow;
        workflow.cells.forEach(
            cell => {
                if (!cell.displayData || !cell.displayData.graphics) {
                    return;
                }

                const centerline = cell.displayData.graphics.find(g => {
                    if (!(g instanceof GraphicCenterLine)) {
                        return false;
                    } else {
                        if (cell.cellType === 'CPR') {
                            return true;
                        } else {
                            return g.isSelected || g.id === g.SelectedCenterLineID;
                        }
                    }
                }) as GraphicCenterLine;
                if (!centerline) {
                    return;
                }

                centerline.canSelect = canModify;
                centerline.canModify = canModify;
            }
        );
    }

    /** 进入某个编辑方式
     *
     */
    private startEditType(editType): void {
        this.editType = editType;
        this.canEdit = true;
    }

    /** 确认
     *
     */
    confirm(): void {
        switch (this.editType) {
            case EditType.EditRedo:
            case EditType.EditUndo:
                this.exitPromptContent = '是否保存当前操作？';
                this.saveTitle = '完成当前子操作';
                this.cancelTitle = '返回当前子操作';
                this.returnTitle = '返回当前子操作之前状态';
                this.isShowConfirm = true;
                break;
            case EditType.EditCrop:
                this.exitPromptContent = '是否保存编辑？';
                this.saveTitle = '完成编辑并退出编辑状态，更新病灶检出算法';
                this.cancelTitle = '返回编辑状态';
                this.returnTitle = '退出后不保存所有编辑，回到初始状态';
                this.isShowConfirm = true;
                break;
            case EditType.EditGrow:
                this.exitPromptContent = '是否保存编辑？';
                this.saveTitle = '完成编辑并退出编辑状态，更新病灶检出算法';
                this.cancelTitle = '返回编辑状态';
                this.returnTitle = '退出后不保存所有编辑，回到初始状态';
                this.isShowConfirm = true;
                break;
            case EditType.EditModify:
                this.exitPromptContent = '是否保存编辑？';
                this.saveTitle = '完成编辑并退出编辑状态，更新病灶检出算法';
                this.cancelTitle = '返回编辑状态';
                this.returnTitle = '退出后不保存所有编辑，回到初始状态';
                this.isShowConfirm = true;
                break;
            case EditType.EditRename:
                break;
            case EditType.EditNone:
            default:
                this.showExitEditor();
                break;
        }
    }

    /** 保存编辑内容，清空UndoRedo列表
     *
     */
    public doConfirm(): void {
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        if (this.editType === EditType.EditCrop) {
            CommandHelper.sendPanelOperation(component.commandSender, null, 'VRSculptFinish');
        }

        this.isShowConfirm = false;
        this.editType = EditType.EditNone;
        this.canEdit = false;
        this.setCenterlineGraphicCanModify(false);
        const viewerControl = this.modelContainer.getModel('MedViewerControl') as MedViewerControl;
        viewerControl.setActionType(ActionTypes.Pointer);
        CommandHelper.sendPanelOperation(component.commandSender, null, 'ClearResult');
    }

    public cancelConfirm(): void {
        this.isShowConfirm = false;
    }

    /** 退出，取消编辑内容，恢复编辑前状态
     *
     */
    public returnConfirm(): void {
        if (this.editType === EditType.EditCrop) {
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            CommandHelper.sendPanelOperation(component.commandSender, null, 'CancelSculpt');
        }

        this.isShowConfirm = false;
        this.editType = EditType.EditNone;
        this.setCenterlineGraphicCanModify(false);
    }

    /** 退出编辑模式
     *
     */
    public showExitEditor(): void {
        //临时注释其他逻辑
        this.cancelExitEditor();
        //this.isShowExitEditor = true;
    }

    // 保存并退出
    public doExitEditor(): void {
        this.doConfirm();
        this.isShowExitEditor = false;
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        component.isEditorMode = false;
        component.toolbar.isEditorMode = false;
        const result = this.modelContainer.getModel('ResultTable') as ResultTableComponent;
        result.setDisable(false);

        component.advAppAPIService.dispatcherClient.setEditStatus(component.proxyName, false, component.studyDTO.studyInstanceUID);

        const viewerControl = this.modelContainer.getModel('MedViewerControl') as MedViewerControl;
        viewerControl.setActionType(ActionTypes.Pointer);

        // notify be end edit
        const buffer = new TextEncoder().encode('0');
        CommandHelper.sendPanelOperation(component.commandSender, buffer, 'EditState');
        // notify centerline state
        AppCommon.Messenger.trigger('notifyEditState', false);
    }

    // 取消并退出
    public cancelExitEditor(): void {
        this.returnConfirm();
        this.isShowExitEditor = false;

        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        component.isEditorMode = false;
        component.toolbar.isEditorMode = false;

        component.advAppAPIService.dispatcherClient.setEditStatus(component.proxyName, false, component.studyDTO.studyInstanceUID);

        const viewerControl = this.modelContainer.getModel('MedViewerControl') as MedViewerControl;
        viewerControl.setActionType(ActionTypes.Pointer);

        const buffer = new TextEncoder().encode('0');
        CommandHelper.sendPanelOperation(component.commandSender, buffer, 'EditState');
        AppCommon.Messenger.trigger('notifyEditState', false);
    }

    // 返回
    public returnExitEditor(): void {
        this.isShowExitEditor = false;
    }

    public addCenterline(): void {
        if(this.iskeyCenterLine) return;
        this.iskeyCenterLine = !this.iskeyCenterLine;
        AppCommon.Messenger.trigger('addCenterline', this.selectedCenterLine, true);
    }

    public removeCenterline(): void {
        if(!this.iskeyCenterLine) return;
        this.iskeyCenterLine = !this.iskeyCenterLine;
        AppCommon.Messenger.trigger('addCenterline', this.selectedCenterLine, false);
    }

    public changeCenterline(event): void {
        this.selectedCenterLine = event;
        AppCommon.Messenger.trigger('renameCenterline', this.curCenterline, this.selectedCenterLine);
    }
}
