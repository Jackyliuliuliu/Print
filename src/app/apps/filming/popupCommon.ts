import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
 
@Component ({
    selector: 'popup-common',
    template: `<div class="popup-mask">
                    <div class="popup-maskBox">
                        <div class="popup-maskContentBox" [ngStyle]="getStyle()">
                            <ng-content select=".popup-title"></ng-content>
                            <ng-content select=".popup-content"></ng-content>
                            <ng-content select=".popup-footer"></ng-content>
                            <span class="fa fa-close close-icon" *ngIf="closebtn" (click)="closePopupFn()"></span>
                        </div>
                    </div>
                </div>
                `,
    styles: [`
        .popup-maskContentBox {
            position: relative;
        }
        .close-icon {
            position: absolute;
            right: -15px;
            top: -15px;
            color: #fff;
            background: rgba(0,0,0,.5);
            border-radius: 50%;
            font-size: 12px;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
        }
        .close-icon:hover {
            cursor: pointer;
        }
    `]
})
 
export class PopupCommonComponent implements OnInit {
    @Input() width: number;
    @Input() height: number;
    @Input() showPopup: boolean;
    @Input() closebtn: boolean = true;
    @Output() popupData = new EventEmitter();
 
    ngOnInit(){
        this.width = this.width != undefined ? this.width : 500;
    }
 
    getStyle(){
        return { width: this.width + 'px', height: this.height + 'px' }
    }
 
    closePopupFn(){
        this.showPopup = false;
        this.popupData.emit(this.showPopup);
    }
 
     
 
 
 
}