import { Injectable } from '@angular/core';
import * as ServerAPI from 'uih-app-serverapi';
export { StudyListDto, StudyDto, SeriesDto, ImageDto, ImageText, ItemText, ItemTexts,StudyAIAlgDto, AIAlgDto,Config} from 'uih-app-serverapi';

@Injectable({
    providedIn: 'root'
})
export class AdvAppServerAPIService {
    dicomClient: ServerAPI.DicomClient;
    imageTextClient: ServerAPI.ImageTextClient;
    dispatcherClient: ServerAPI.DispatcherClient;
    aiDBSvcClient: ServerAPI.AIDBServiceClient;
    userOperationClient: ServerAPI.UserOperationClient;
    printerConfigClient:ServerAPI.PrinterClient;

    constructor() {
        this.baseUrl = 'https://localhost:44351';
    }

    private _baseUrl = '';
    get baseUrl(): string {
        return this._baseUrl;
    }
    set baseUrl(url: string) {
        if (this._baseUrl !== url) {
            this._baseUrl = url;
            this.dicomClient = new ServerAPI.DicomClient(this._baseUrl);
            this.imageTextClient = new ServerAPI.ImageTextClient(this._baseUrl);
            this.dispatcherClient = new ServerAPI.DispatcherClient(this._baseUrl);
            this.aiDBSvcClient = new ServerAPI.AIDBServiceClient(this._baseUrl);
            this.userOperationClient = new ServerAPI.UserOperationClient(this._baseUrl);
            this.printerConfigClient=new ServerAPI.PrinterClient(this.baseUrl);
        }
    }
}
