import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rapid-result-tooltip',
  templateUrl: './rapid-result-tooltip.component.html',
  styleUrls: ['./rapid-result-tooltip.component.css']
})
export class RapidResultTooltipComponent implements OnInit {
  showTooltip: boolean = false;
  inputError: boolean = false;
  inputValue = null;
  @Output() inputVal = new EventEmitter;
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;
  constructor() {

  }

  ngOnInit() {
  }

  showOverTooltip() {
    this.updateToolTipPos();
    let tooltip = document.getElementById("tooltipFrame");
    tooltip.className = "tag-solid";
    setTimeout(function () { tooltip.className = "tag-solid fadeout"; }, 3000);
  }

  updateToolTipPos() {
    let infoImage = document.getElementById("infoImage");
    let x = infoImage.offsetLeft;
    let y = infoImage.offsetTop;
    let tooltip = document.getElementById("tooltipFrame");
    tooltip.style.left = x - 55 + "px";
    tooltip.style.top = y - 20 + "px";
  }

  onNumberChange(value: string): void {
    this.updateValue(value);
  }

  updateValue(value: string): void {
    const reg = /^(?:[1-9]\d?|[1-2][0-9]\d|3[0-5]\d|360)$/; //isPositiveInteger beteween 0-360
    if ((!isNaN(+value) && reg.test(value)) || value === '') {
      this.inputValue = value;
      this.inputElement!.nativeElement.value = this.inputValue;
    } else {
      this.showOverTooltip();
      let that = this;
      this.showTooltip = true;
      this.inputError = true;
      this.inputValue = '';
      this.inputElement!.nativeElement.value = '';
      setTimeout(function () { that.inputError = false }, 3000);
    }
  }

  addRotateNum(): void {
    if (this.inputValue && !isNaN(this.inputValue)) {
      this.inputVal.emit(this.inputValue);
      this.inputValue = '';
      this.inputElement!.nativeElement.value = '';
    }
  }
}
