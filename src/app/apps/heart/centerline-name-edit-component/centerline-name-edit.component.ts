import { Component, OnInit, TemplateRef, Input, ChangeDetectorRef, NgZone } from '@angular/core';
import { NzDropdownContextComponent, NzDropdownService, NzTreeComponent } from 'ng-zorro-antd';
import * as  Viewer from 'uih-medviewercontrol';
import * as AppCommon from 'uih-appcommon';
import * as NotifyBEHelper from '../heart.component.notifybehelper';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import { HeartComponent } from '../heart.component';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import { HeartService } from '../service/heart.service';
import { GraphicCenterLine } from '../heart.component.graphics';
import { ResultTableComponent } from '../result-table/result-table.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';


@Component({
    templateUrl: './centerline-name-edit.component.html',
    styleUrls: [
        './centerline-name-edit.component.css'
    ],
    host: {
        '[style.display]': "'flex'",
        '[style.flex-direction]': "'column'"
    }
})
export class CenterLineNameEditComponent implements OnInit {
    numberOfDisplayCenterLines = 9;
    firstDisplayIdx = 0;
    lastDisplayIdx = 0;
    selectedIndex: number = -1;
    selectedCenterline: object;
    allCenterLines: Array<object> = [];
    keyCenterLines: Array<object> = [];  //算法分割的关键血管及非关键血管
    noKeyCenterLines: Array<object> = [];
    displayCenterLines: Array<object> = [];
    inEditState: boolean = false;
    isShowArrow: boolean = false; //是否需要显示上下的箭头 区分两种模式
    _cell: Viewer.MedViewerControlCell;
    dropdown: NzDropdownContextComponent;
    showDownIcon: boolean = true;
    coronarySegment: string[] = ['LAD', 'LM', 'D1', 'D2', 'LCX', 'OM1', 'OM2', 'RCA', 'R-PDA', 'R-PLB', 'L-PDA', 'L-PLB', 'RAMUS', '其他'];

    @Input()
    set cell(_cell: Viewer.MedViewerControlCell) {
        this._cell = _cell;
    }
    get cell(): Viewer.MedViewerControlCell { return this._cell; }

    constructor(private dropdownService: NzDropdownService, protected modelContainer: AppCommon.ModelContainer,
        protected heartService: HeartService,
        protected cd: ChangeDetectorRef,
        protected zone: NgZone) {
        this.firstDisplayIdx = 0;
        this.lastDisplayIdx = this.firstDisplayIdx + this.numberOfDisplayCenterLines - 1;
    }

    ngOnInit() {
        //load centerline from database
        AppCommon.Messenger.off('Resized', () => {
            this.Resize();
        });
        AppCommon.Messenger.on('Resized', () => {
            this.Resize();
        });
        AppCommon.Messenger.off('curCenterLineId', (curCenterLineId) => {
            this.selectedIndex = curCenterLineId;
            this.heartService.selectedIndex = this.selectedIndex;
            this.updateDisplayCenterLines();
        });
        AppCommon.Messenger.on('curCenterLineId', (curCenterLineId) => {
            this.selectedIndex = curCenterLineId;
            this.heartService.selectedIndex = this.selectedIndex;
            this.updateDisplayCenterLines();
        });

        AppCommon.Messenger.off('resetSelectedindex', () => {
            this.heartService.centerlineList = [];
            this.heartService.selectedIndex = 0;
            this.selectedIndex = 0;
        });
        AppCommon.Messenger.on('resetSelectedindex', () => {
            this.heartService.centerlineList = [];
            this.heartService.selectedIndex = 0;
            this.selectedIndex = 0;
        });

        AppCommon.Messenger.off('nameListLoad', (namelist) => {
            this.heartService.centerlineListBE = namelist;
            this.initCenterLines(this.heartService.centerlineListBE);

        });
        AppCommon.Messenger.on('nameListLoad', (namelist) => {
            this.heartService.centerlineListBE = namelist;
            this.initCenterLines(this.heartService.centerlineListBE);
        });


        AppCommon.Messenger.off('nextCenterline', () => {
            this.nextCenterline();
        });
        AppCommon.Messenger.on('nextCenterline', () => {
            this.nextCenterline();
        });

        AppCommon.Messenger.off('selectCenterline', (itemName) => {
            this.selectCenterline(itemName);
        });
        AppCommon.Messenger.on('selectCenterline', (itemName) => {
            this.selectCenterline(itemName);
        });
        AppCommon.Messenger.on('notifyEditState', (editState) => {
            this.inEditState = editState;
            if (!this.inEditState) {
                // 退出编辑状态
                // let disCenterlineLen = this.keyCenterLines.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1).length;
                // if (disCenterlineLen < this.numberOfDisplayCenterLines && this.isShowArrow) {
                //     this.firstDisplayIdx -= (this.numberOfDisplayCenterLines - disCenterlineLen);
                //     this.lastDisplayIdx = this.firstDisplayIdx + this.numberOfDisplayCenterLines - 1;
                // }
                if (this.keyCenterLines.map(item => item['name']).indexOf(this.selectedCenterline['name']) < 0) {
                    // select first key centerline
                    this.selectCenterline(this.keyCenterLines[0]);
                    this.adjustDisplayPos(true);
                } else {
                    this.adjustDisplayPos(false);
                }
            } else {
                // 在编辑状态
                this.adjustDisplayPos(false);
            }
        })
        AppCommon.Messenger.on('addCenterline', (selectCenterlineName, isAddTokey) => {
            this.addKeyCenterLine(selectCenterlineName, isAddTokey);
        });
        AppCommon.Messenger.off('renameCenterline', (selectedCenterLine, newName) => {
            this.renameCenterLine(selectedCenterLine, newName);
        })
        AppCommon.Messenger.on('renameCenterline', (selectedCenterLine, newName) => {
            this.renameCenterLine(selectedCenterLine, newName);
        })

        const viewerControl = this.cell.viewerControl as Viewer.MedViewerControl;

        viewerControl.controlElement.addEventListener('mousewheel', (e: any) => this.switchSelectedCenterline(e), false);

        window.addEventListener('keydown', (e: any) => this.zone.run(() => this.setVRCenterlineCanSelected(e, true)), false);
        window.addEventListener('keyup', (e: any) => this.zone.run(() => this.setVRCenterlineCanSelected(e, false)), false);
    }


    protected adjustDisplayPos(initial: boolean) : void {
        this.firstDisplayIdx = 0;
        let currentItems = null;
        if(this.inEditState) {
            currentItems = this.allCenterLines;
        } else {
            currentItems = this.keyCenterLines;
        }

        this.selectedIndex = this.heartService.selectedIndex;
        if(!initial && currentItems.length > this.numberOfDisplayCenterLines) {
            let currentSelectName = '';
            if(this.selectedIndex >= 0) {
                currentSelectName = this.allCenterLines[this.selectedIndex]['name'];
            }

            let currentDisplayIndex = 0;
            if(currentSelectName != "") {
                for(let i = 0; i < currentItems.length; i++) {
                    if(currentItems[i]['name'] == currentSelectName) {
                        currentDisplayIndex = i;
                        break;
                    }
                }
            }
            if(currentDisplayIndex >= this.numberOfDisplayCenterLines) {
                this.firstDisplayIdx = currentDisplayIndex - this.numberOfDisplayCenterLines + 1;
            }
        }

        this.lastDisplayIdx = this.firstDisplayIdx + this.numberOfDisplayCenterLines - 1;

        if(currentItems.length > this.numberOfDisplayCenterLines) {
            this.isShowArrow = true;
        } else {
            this.isShowArrow = false;
        }
        if (this.lastDisplayIdx < currentItems.length) {
            this.showDownIcon = true;
        } else {
            this.showDownIcon = false;
        }

        this.displayCenterLines = currentItems.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1);
    }

    protected switchSelectedCenterline(e: any): void {
        if (this._cell.viewerControl.layoutManager.getSelectedCells()[0].cellType === 'VR') {
            this.zone.run(() => {
                const event = e.event || window.event;
                const indexChange = event.wheelDeltaY > 0 ? 1 : -1;
                this.switchCenterline(indexChange);
                e.stopPropagation();
            });
        }
    }

    protected setVRCenterlineCanSelected(event, canSelect): void {
        if (event.keyCode === 17) {
            const viewerControl = this.cell.viewerControl as Viewer.MedViewerControl;
            const cell = viewerControl.getCell('A_VR');
            for (const graphic of cell.displayData.graphics) {
                if (graphic instanceof GraphicCenterLine) {
                    graphic.canSelect = canSelect;
                }
            }
        }
    }

    contextMenu($event: MouseEvent, template: TemplateRef<void>) {
        this.zone.run(() => {
            const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
            if ((($event.target as any).innerText === this.selectedCenterline) && component.editor.isRenameCenterLineEnable) {
                this.dropdown = this.dropdownService.create($event, template);
            }
        });
    }

    close() {
        this.dropdown.close();
    }

    up(): void {
        this.firstDisplayIdx -= 1;
        this.lastDisplayIdx -= 1;
        if ((this.lastDisplayIdx < this.keyCenterLines.length - 1 && !this.inEditState) || (this.lastDisplayIdx < this.allCenterLines.length - 1 && this.inEditState)) {
            this.showDownIcon = true;
        }
        this.displayCenterLines = this.inEditState ? this.allCenterLines.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1)
            : this.keyCenterLines.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1);
    }

    down(): void {
        this.firstDisplayIdx += 1;
        this.lastDisplayIdx += 1;
        if ((this.lastDisplayIdx >= this.keyCenterLines.length - 1 && !this.inEditState) || (this.lastDisplayIdx >= this.allCenterLines.length - 1 && this.inEditState)) {
            this.showDownIcon = false;
        }
        this.displayCenterLines = this.inEditState ? this.allCenterLines.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1)
            : this.keyCenterLines.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1);
    }

    nextCenterline(): void {
        if (this.selectedIndex === this.allCenterLines.length - 1) {
            this.selectedIndex = 0;
            this.selectCenterline(this.allCenterLines[this.selectedIndex]);
            this.firstDisplayIdx = 0;
            this.lastDisplayIdx = this.firstDisplayIdx + this.numberOfDisplayCenterLines - 1;
            this.displayCenterLines = this.allCenterLines.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1);
        } else {
            this.selectedIndex += 1;
            this.selectCenterline(this.allCenterLines[this.selectedIndex]);
            if (this.selectedIndex > this.lastDisplayIdx) {
                this.down();
            }
        }
        this.heartService.selectedIndex = this.selectedIndex;
    }

    switchCenterline(indexChange: number): void {
        if (indexChange === -1) {
            if (this.selectedIndex === this.allCenterLines.length - 1) {
                this.selectedIndex = this.allCenterLines.length - 1;
                this.selectCenterline(this.allCenterLines[this.selectedIndex]);
            } else {
                this.selectedIndex -= indexChange;
                this.selectCenterline(this.allCenterLines[this.selectedIndex]);
                if (this.selectedIndex > this.lastDisplayIdx) {
                    this.down();
                }
            }
        } else {
            if (this.selectedIndex === 0) {
                this.selectedIndex = 0;
                this.selectCenterline(this.allCenterLines[this.selectedIndex]);
            } else {
                this.selectedIndex -= indexChange;
                this.selectCenterline(this.allCenterLines[this.selectedIndex]);
                if (this.selectedIndex < this.firstDisplayIdx) {
                    this.up();
                }
            }
        }
        this.heartService.selectedIndex = this.selectedIndex;
    }

    private setDisplayIndex() {
        if (this.allCenterLines.length < this.numberOfDisplayCenterLines) {
            this.firstDisplayIdx = 0;
            this.lastDisplayIdx = this.allCenterLines.length - 1;
        } else if (this.firstDisplayIdx < 0) {
            this.firstDisplayIdx = 0;
            this.lastDisplayIdx = this.firstDisplayIdx + this.numberOfDisplayCenterLines - 1;
        } else if (this.lastDisplayIdx > this.allCenterLines.length - 1) {
            this.lastDisplayIdx = this.allCenterLines.length - 1;
            this.firstDisplayIdx = this.lastDisplayIdx - this.numberOfDisplayCenterLines + 1;
        }
    }

    private initCenterLines(centerlines) {
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        if (!component) return;
        this.heartService.centerlineList = [];
        centerlines.forEach(element => {
            this.heartService.centerlineList.push({ 'name': element.Name, 'label': element.FindIndex });
        });
        this.initCenterlineList();
        if (this.selectedIndex === -1) {
            this.selectedIndex = this.heartService.selectedIndex;
        } else {
            this.heartService.selectedIndex = this.selectedIndex;
        }
        this.updateDisplayCenterLines();
        AppCommon.Messenger.trigger('curSelectedCenterLine', this.selectedCenterline, this.selectedCenterline['isKey'] == 0);
        if (this.heartService.isFirstLoad){
            AppCommon.Messenger.trigger('onCenterlineChange', this.keyCenterLines);
            this.heartService.isFirstLoad = false;
        } else {
            AppCommon.Messenger.trigger('updateFindings', this.keyCenterLines);
        }
        this.cd.detectChanges();
    }

    private replaceUnderLine(centerLineNameList: Array<object>): Array<object> {
        let centerLineNameListNew = [];
        centerLineNameList.forEach(element => {
            let ele2 = element;
            if (element['name'].indexOf('_') === 1) {
                ele2 = element['name'].replace(/_/, '-');
            }
            centerLineNameListNew.push(ele2);
        });
        return centerLineNameListNew;
    }

    renameCenterLine(selectedCenterline, newName): void {
        this.selectedCenterline = selectedCenterline;
        this.selectedIndex = this.allCenterLines.map(item => item['name']).indexOf(this.selectedCenterline['name']);
        this.heartService.selectedIndex = this.selectedIndex;
        if (this.selectedCenterline['name'] == newName) {
            return;
        }
        if (this.allCenterLines.map(item => item['name']).indexOf(newName) !== -1) {
            let index = 0;
            this.allCenterLines.forEach(element => {
                if (element['name'].indexOf(newName.split('_')[0]) >= 0) {
                    index++;
                }
            });
            newName = newName + '_' + index.toString();
        }

        this.notifyBE2RenameCenterLine(this.selectedIndex, this.selectedCenterline['name'], newName, this.selectedCenterline['isKey']);
        this.heartService.centerlineList.forEach(ele => {
            if (ele['name'] == this.selectedCenterline['name']) {
                ele['name'] = newName;
                ele['label'] = 0;
            }
        });
        // renamed vessel should be automatically added into key vessels
        newName = { name: newName, isKey: 0 };
        this.allCenterLines[this.selectedIndex] = newName;
        this.updateKeyCenterLines();
        AppCommon.Messenger.trigger('hasModified', true);
    }

    private notifyBE2RenameCenterLine(id, oldName, newName, findingIndex) {
        const commandSender = this._cell.viewerControl.commandSender;
        if (!commandSender) {
            return;
        }

        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        // rename the centerline in db
        component.advAppAPIService.aiDBSvcClient.updateCenterlineName(component.LoadSeriesInsatnceUID, id, newName, findingIndex).then(rst => {
            // messeager to rename the findings in the result-table with the data from db
            // AppCommon.Messenger.trigger('onCenterlineChange', this.keyCenterLines);
            AppCommon.Messenger.trigger('renameCenterLineName', oldName, newName);

            NotifyBEHelper.CenterLineBEHelper.UpdateCenterLine(commandSender,
                CardiacProto.ListOperationType.ListOperationType_Rename, id, newName, findingIndex);
        });
    }


    selectCenterline(item) {
        let operationCenterLine = this.inEditState ? this.allCenterLines : this.keyCenterLines;
        // 发送对应的血管已经对应的状态
        let isKeyCenterLine = false;
        let selectedKeyCenterLine = this.keyCenterLines.filter(function (ele) {
            return ele['name'] == item['name'];
        })
        if (selectedKeyCenterLine && selectedKeyCenterLine.length != 0) {
            isKeyCenterLine = true;
        }
        AppCommon.Messenger.trigger('curSelectedCenterLine', item, isKeyCenterLine);
        this.selectedCenterline = item;

        let idx = -1;
        this.allCenterLines.forEach((value, index) => {
            if (value['name'] === this.selectedCenterline['name']) {
                idx = index;
                return;
            }
        });
        this.selectedIndex = idx;
        const commandSender = this._cell.viewerControl.commandSender;
        if (!commandSender) {
            return;
        }
        NotifyBEHelper.CenterLineBEHelper.UpdateCenterLine(commandSender,
            CardiacProto.ListOperationType.ListOperationType_Select, idx, item.name, item.isKey);
        this.heartService.selectedIndex = this.selectedIndex;



        // if (this.selectedIndex > this.lastDisplayIdx) {
        //     this.firstDisplayIdx += this.selectedIndex - this.lastDisplayIdx;
        //     this.lastDisplayIdx += this.selectedIndex - this.lastDisplayIdx;
        //     // this.setDisplayIndex();
        //     this.displayCenterLines = operationCenterLine.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1);
        // } else if (this.selectedIndex < this.firstDisplayIdx) {
        //     this.lastDisplayIdx -= this.firstDisplayIdx - this.selectedIndex;
        //     this.firstDisplayIdx -= this.firstDisplayIdx - this.selectedIndex;
        //     // this.setDisplayIndex();
        //     this.displayCenterLines = operationCenterLine.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1);
        // }

        const result = this.modelContainer.getModel('ResultTable') as ResultTableComponent;
        result.cancelSelectItem();


    }

    public Resize(): void {
        if (this.cell != null && this.cell.canvas != null) {
            if (this.cell.canvas.height > 400) {
                this.numberOfDisplayCenterLines = 9;
            } else if (this.cell.canvas.height > 250) {
                this.numberOfDisplayCenterLines = 5;
            } else {
                this.numberOfDisplayCenterLines = 3;
            }
            console.info('Resize cell height is ' + this.cell.canvas.height);
            this.firstDisplayIdx = 0;
            this.lastDisplayIdx = this.firstDisplayIdx + this.numberOfDisplayCenterLines - 1;
        }
    }

    // 添加或移除关键血管
    public addKeyCenterLine(selectedCenterLine, isAddTokey): void {
        this.initCenterlineList();
        this.heartService.selectedIndex = this.allCenterLines.map(item => item['name']).indexOf(selectedCenterLine);
        // 保存findingIndex到数据库

        this.notifyBE2ChangeKeyCenterLine(selectedCenterLine, isAddTokey);

        this.selectedCenterline = this.allCenterLines[this.heartService.selectedIndex];
        if (isAddTokey) {
            this.allCenterLines.forEach(ele => {
                if (ele['name'] == this.selectedCenterline['name']) {
                    ele['isKey'] = 0;
                    this.heartService.centerlineList.forEach(centerline => {
                        if (ele['name'] == centerline['name']) {
                            centerline['label'] = 0;
                        }
                    });
                }
            })
            this.updateKeyCenterLines();
        } else {
            // 移除重要血管
            this.allCenterLines.forEach(ele => {
                if (ele['name'] == this.selectedCenterline['name']) {
                    ele['isKey'] = 1;
                    this.heartService.centerlineList.forEach(centerline => {
                        if (ele['name'] == centerline['name']) {
                            centerline['label'] = 1;
                        }
                    });
                }
            })
            this.updateKeyCenterLines();
            // this.nextCenterline();
        }
        // 在添加移除血管的同时 更新列表与报告
        AppCommon.Messenger.trigger('hasModified', true);
        AppCommon.Messenger.trigger('updateFindings', this.keyCenterLines);
    }

    private notifyBE2ChangeKeyCenterLine(selectedCenterLine: any, isAddTokey: boolean) {
        const commandSender = this._cell.viewerControl.commandSender;
        if (!commandSender) {
            return;
        }
        let component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        component.advAppAPIService.aiDBSvcClient
            .updateCenterlineName(component.LoadSeriesInsatnceUID, this.heartService.selectedIndex, selectedCenterLine, isAddTokey ? 0 : 1)
            .then(rst => {
                NotifyBEHelper.CenterLineBEHelper.UpdateCenterLine(commandSender,
                    CardiacProto.ListOperationType.ListOperationType_Change, this.heartService.selectedIndex, selectedCenterLine, isAddTokey ? 0 : 1);
            });
    }

    public updateKeyCenterLines() {
        this.keyCenterLines = this.allCenterLines.filter(function (ele) {
            return ele['isKey'] == 0
        });
        this.noKeyCenterLines = this.allCenterLines.filter(function (ele) {
            return ele['isKey'] == 1
        });
        let operationCenterLine = this.inEditState ? this.allCenterLines : this.keyCenterLines;
        this.displayCenterLines = operationCenterLine.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1);
    }

    public initCenterlineList() {
        this.keyCenterLines = [];
        this.allCenterLines = [];
        this.noKeyCenterLines = [];
        this.displayCenterLines = [];
        for (let idx in this.heartService.centerlineList) {
            this.allCenterLines.push({ name: this.heartService.centerlineList[idx]['name'], isKey: this.heartService.centerlineList[idx]['label'] });
            if (this.heartService.centerlineList[idx]['label'] == 0)
                this.keyCenterLines.push({ name: this.heartService.centerlineList[idx]['name'], isKey: this.heartService.centerlineList[idx]['label'] });
            else {
                this.noKeyCenterLines.push({ name: this.heartService.centerlineList[idx]['name'], isKey: this.heartService.centerlineList[idx]['label'] });
            }
        }
        this.allCenterLines = this.replaceUnderLine(this.allCenterLines);
    }

    /**
     * update when selected index changed
     */
    public updateDisplayCenterLines() {
        if (this.selectedIndex < this.firstDisplayIdx || this.selectedIndex > this.lastDisplayIdx) {
            this.setDisplayIndex();
        }
        if (this.inEditState) {
            this.displayCenterLines = this.allCenterLines.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1);
            this.isShowArrow = this.allCenterLines.length > this.numberOfDisplayCenterLines;
            this.selectedCenterline = this.allCenterLines[this.selectedIndex];
        }
        else {
            this.displayCenterLines = this.keyCenterLines.slice(this.firstDisplayIdx, this.lastDisplayIdx + 1);
            this.isShowArrow = this.keyCenterLines.length > this.numberOfDisplayCenterLines;
            let this_ = this;
            this.selectedCenterline = this.keyCenterLines.filter(function (ele) {
                return ele['name'] == this_.allCenterLines[this_.selectedIndex]['name'];
            })[0];
            if (!this.selectedCenterline) {
                this.selectedCenterline = this.keyCenterLines[0];
                this.selectedIndex = this.allCenterLines.map(item => item['name']).indexOf(this.selectedCenterline['name']);
                this.heartService.selectedIndex = this.selectedIndex;
            }
        }
    }
}
