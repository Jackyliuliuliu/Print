import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-rapid-result-combox',
  templateUrl: './rapid-result-combox.component.html',
  styleUrls: ['./rapid-result-combox.component.css']
})
export class RapidResultComboxComponent implements OnInit {
  @Input() type: string
  @Output() outputInfo = new EventEmitter;
  @ViewChild('inputElementLr', { static: false }) inputElementLr?: ElementRef;
  @ViewChild('inputElementAu', { static: false }) inputElementAu?: ElementRef;
  lrMode = 'LAO';
  auMode = 'CAU';
  lrValue = null;
  auValue = null;
  showTooltip = false;
  lrError = false;
  auError = false;
  constructor() { }

  ngOnInit() {
    //this.addItem();
  }

  addItem() {
    if (this.auValue == null || this.lrValue == null || this.auValue == '' || this.lrValue == '')
      return;
    this.outputInfo.emit(JSON.stringify({
      'lrMode': this.lrMode,
      'lrValue': this.lrValue,
      'auMode': this.auMode,
      'auValue': this.auValue
    }));
  }

  /**
   * 输入框数值的变化
   */
  onNumberChange(value: string, type: string): void {
    this.updateValue(value, type);
  }

  updateValue(value: string, type): void {
    const reg = /^(?:[1-9]\d?|[1-2][0-9]\d|3[0-5]\d|360)$/; //isPositiveInteger beteween 0-360
    if ((!isNaN(+value) && reg.test(value)) || value === '') {
      if (type == 'lr')
        this.lrValue = value;
      else
        this.auValue = value;
      this.inputElementLr!.nativeElement.value = this.lrValue;
      this.inputElementAu!.nativeElement.value = this.auValue;
    } else {
      this.showOverTooltip();
      let that = this;
      if (type == 'lr') {
        this.lrError = true;
        this.lrValue = '';
        this.inputElementLr!.nativeElement.value = '';
        setTimeout(function () { that.lrError = false; }, 3000);
      } else {
        this.auError = true;
        this.auValue = '';
        this.inputElementAu!.nativeElement.value = '';
        setTimeout(function () { that.auError = false; }, 3000);
      }
    }
  }

  showOverTooltip() {
    this.showTooltip = true;
    let tooltipDom = document.getElementById("tooltipFrame");
    tooltipDom.className = "tag-solid";
    setTimeout(function () { tooltipDom.className = "tag-solid fadeout"; }, 3000);
  }
}
