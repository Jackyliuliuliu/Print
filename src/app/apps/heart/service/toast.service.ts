import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()

export class ToastService {

    constructor(private _svc: NzNotificationService) {
        this._svc.config({
            nzPlacement: 'bottomRight',
            nzDuration: 3000
          });
    }

    info(msg: any) {
        this._svc.create('success', '', msg);
    }

    success(msg: any) {
        this._svc.create('success', 'Success Message', msg);

    }

    warning(msg: any) {
        this._svc.create('warning', 'Warning Message', msg);

    }

    error(msg: any) {
        this._svc.create('error', 'Error Message', msg);

    }
    show(msg:any){
        this._svc.create('blank', '', msg,{nzDuration:0});
    }
    close(){
        this._svc.remove();
    }
}
