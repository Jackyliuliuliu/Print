import { Component, OnInit } from '@angular/core';
import { AdvAppServerAPIService, StudyListDto, StudyDto } from '../../root/adv-app.server.api.service';
import { AppsRoutingModule } from 'src/app/apps/apps-routing.module';
import { RootConsts } from '../root-consts';
import { AppsConsts } from '../../app/apps/apps-consts';
import { AppItem, AppConfigService } from '../../app/apps/app-config.service';

@Component({
    selector: 'app-app-list',
    templateUrl: './app-list.component.html',
    styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

    studies: StudyDto[] = [];
    appList: AppItem[] = [];

    constructor(private advAppAPIService: AdvAppServerAPIService,
        private appConfigService: AppConfigService) {

    }

    ngOnInit() {
        this.getAppList();
        this.getStudyList();
    }

    private getAppList() {
        this.appList = this.appConfigService.getAppItems();
    }

    private getStudyList() {
        console.log('get studylist start');
        this.advAppAPIService.dicomClient.getStudyList().then((result: StudyListDto) => {
            console.log('get studylist end');
            this.studies = result.list;
        });
    }

    initialize_s(): void {
        this.getStudyList();
    }

    startadvapp(studyUid: string, appName: string, appRoutePath: string) {
        console.log(studyUid + ',' + appName);
        this.startadvappImpl(studyUid, appName, appRoutePath);
    }

    private async startadvappImpl(studyUid: string, appName: string, appRoutePath: string) {
        const proxyName = await this.advAppAPIService.dispatcherClient.createClientProxyName(appName, studyUid);
        const childRoute = AppsConsts.generateChildRoute(
            appRoutePath, AppsConsts.RoutePara_HostType_WebHost, studyUid, proxyName);
        const curUrl = window.location.origin + '/' + RootConsts.RoutePara_APP + '/' + childRoute;
        window.open(curUrl, '_blank');
    }
}