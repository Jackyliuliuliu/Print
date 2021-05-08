import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModelContainer } from 'uih-appcommon';
import { HeartComponent } from '../heart.component';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit  {

    public isShowUsage: boolean = false;
    batchViewContainer: ViewContainerRef;

    constructor(protected modelContainer: ModelContainer) { }

    ngOnInit() { }

    // 关闭使用信息
    closeUsage(): void {
        this.isShowUsage = false;
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        component.toolbar.isShowUsage = false;
    }
}
