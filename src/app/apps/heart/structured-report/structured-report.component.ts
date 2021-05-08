import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModelContainer } from 'uih-appcommon';
import { HeartService } from '../service/heart.service';
import { HeartComponent } from '../heart.component';
import { CoronaryCenterLineDto } from 'uih-app-serverapi';
import { ValueConverter } from '../heart.component.enumConverter';

@Component({
    selector: 'app-structured-report',
    templateUrl: './structured-report.component.html',
    styleUrls: ['./structured-report.component.css']
})
export class StructuredReportComponent implements OnInit {
    public dialogWidth: number = 0;
    public dialogHeight: number = 0;
    public coronarySegment: string[] = ['LAD', 'LM', 'D1', 'D2', 'LCX', 'OM1', 'OM2', 'RCA', 'R-PDA', 'R-PLB', 'L-PDA', 'L-PLB', 'RAMUS', '其他'];
    public isShowStructuredReport: boolean = false;
    public valCvt: ValueConverter = new ValueConverter();
    batchViewContainer: ViewContainerRef;

    constructor(protected service: HeartService,
        protected modelContainer: ModelContainer) { }

    ngOnInit() {
        this.setDialogSize();
        this.setTotalPage();
        this.setLesion();
    }

    private setTotalPage(): void {
        this.service.srM.commonM.currentPage = 1;
        if (this.service.srM.lesionM.findings && this.service.srM.lesionM.findings.length > 0) {
            this.service.srM.commonM.totalPage = 2;
        } else {
            this.service.srM.commonM.totalPage = 1;
        }
    }

    private setLesion(): void {
        const component = this.modelContainer.getModel('MainComponent') as HeartComponent;
        if (!component) return;
        component.advAppAPIService.aiDBSvcClient.getCenterlineList(component.LoadSeriesInsatnceUID).then(centerlines => {
            this.service.srM.lesionM.lesions = [];
            this.service.srM.lesionM.findings.forEach(finding => {
                const centerlineIndex = this.coronarySegment.indexOf(this.valCvt.coronaryIndexCvt(finding.coronaryIndex));
                const centerline = centerlines[centerlineIndex] as CoronaryCenterLineDto;
                for (let i = 0; i < centerline.pointList.length; i++) {
                    const point = centerline.pointList[i];
                    if ((Math.abs(finding.centerPointX - point.world_coordinate.x) < 1e-6) &&
                        (Math.abs(finding.centerPointY - point.world_coordinate.y) < 1e-6) &&
                        (Math.abs(finding.centerPointZ - point.world_coordinate.z) < 1e-6)) {
                        this.service.srM.lesionM.lesions.push([finding,
                            Math.round(((point.x_axis_in_millimeters + point.y_axis_in_millimeters) / 2) * 10) / 10,
                            Math.round(point.area_in_millimeter_squared)]);
                        break;
                    }
                }
            });
        });
    }

    public closeStructuredReport(): void {
        this.isShowStructuredReport = false;
    }

    private setDialogSize(): void {
        // 获取窗口宽度
        if (window.innerWidth)
            this.dialogWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            this.dialogWidth = document.body.clientWidth;
        // 获取窗口高度
        if (window.innerHeight)
            this.dialogHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            this.dialogHeight = document.body.clientHeight;
        // 通过深入 Document 内部对 body 进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            this.dialogWidth = document.documentElement.clientWidth;
            this.dialogHeight = document.documentElement.clientHeight;
        }
    }
}
