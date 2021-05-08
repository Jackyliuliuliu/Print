import { Injectable } from '@angular/core';
import { AppsConsts } from './apps-consts';
import { AppCommonCommandHandler } from 'uih-appcommon';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import AppConfig from '../assets/assets/appconfig.json'; 向昱：这种方法不可取，直接编译到代码里变成写死了

export class AppItem {
    appName: string;
    routePath: string;
    appIcon: any;
}

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {

    constructor(private http: Http) {
        this.addApp(AppsConsts.App_Name_Stencil, AppsConsts.App_RootPath_Stencil);
        this.addApp(AppsConsts.App_Name_Heart, AppsConsts.App_RootPath_Heart);
        this.addApp(AppsConsts.App_Name_CTReview2D, AppsConsts.App_RootPath_CTReview2D);
        this.addApp(AppsConsts.App_Name_FilmingV2, AppsConsts.App_RootPath_FilmingV2);
    }

    private appItems: AppItem[] = [];
    private _jsonURL = '../assets/assets/appconfig.json';
    private _hospitalURL = '../assets/assets/hospital.json';

    private _configResponse: Response = undefined;
    private _hospitalConfigResponse: Response = undefined;

    private addApp(name: string, routePath: string) {
        // tslint:disable-next-line: no-use-before-declare
        const app = new AppItem();
        app.appName = name;
        app.routePath = routePath;
        this.appItems.push(app);
    }

    getAppItems(): AppItem[] {
        return this.appItems;
    }

    getAppName(routePath: string): string {
        const appItem = this.appItems.find((value: AppItem, index: number, obj: AppItem[]) => {
            if (value.routePath === routePath) {
                return true;
            } else {
                return false;
            }
        });
        return appItem.appName;
    }

    getConfig(): Promise<Response> {
        if (this._configResponse) {
            return new Promise<Response>((resolve, reject) => {
                resolve(this._configResponse);
            });
        }
        const observe = this.http.get(this._jsonURL);
        observe.subscribe(re => this._configResponse = re);
        return observe.toPromise();
    }

    getHospitalConfig(): Promise<Response> {
        if (this._hospitalConfigResponse) {
            return new Promise<Response>((resolve, reject) => {
                resolve(this._hospitalConfigResponse);
            });
        }
        const observe = this.http.get(this._hospitalURL);
        observe.subscribe(re => this._hospitalConfigResponse = re);
        return observe.toPromise();
    }

}
