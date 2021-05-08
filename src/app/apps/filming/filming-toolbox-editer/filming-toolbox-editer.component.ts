import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef, ChangeDetectorRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filming-toolbox-editer',
  templateUrl: './filming-toolbox-editer.component.html',
  styleUrls: ['./filming-toolbox-editer.component.css']
})
export class FilmingToolboxEditerComponent implements OnInit {

  isCustomLayoutVisible = false;
  customLayoutForm: FormGroup;
  @Input() isButtonDisable: boolean;
  @Output() layoutClicked = new EventEmitter<any>();
  @ViewChild('rowInput', { static: false }) rowInput: ElementRef;
  @ViewChild('lineInput', { static: false }) lineInput: ElementRef;
  

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private zone: NgZone) { }

  ngAfterViewInit(){
    var rowEle = this.rowInput.nativeElement;
    var lineEle = this.lineInput.nativeElement;
    rowEle.addEventListener("keydown", (e: any) => this.onRowKeyDown(e), false);
    lineEle.addEventListener("keydown",(e:any)=>this.onLineKeyDown(e),false)
  }

  ngOnInit() {
    this.initFromGroup();
  }

  onRowKeyDown(event: any) {
    if (event.key == '-' || event.key == '.' || event.key == 'e') {
      event.preventDefault();
      var message = this.ValidationMessages['rowControl'];
      this.FormErrors['rowControl'] = message['onlyNumber'];
    }
  }

  onLineKeyDown(event: any) {
    if (event.key == '-' || event.key == '.' || event.key == 'e') {
      event.preventDefault()
      var message = this.ValidationMessages['lineControl'];
      this.FormErrors['lineControl'] = message['onlyNumber'];
    }
  }

  initFromGroup() {
    this.customLayoutForm = this.fb.group({
      rowControl: ['', [Validators.required, Validators.max(6), Validators.min(1)]],
      lineControl: ['', [Validators.required, Validators.max(6), Validators.min(1)]],
    });
    this.customLayoutForm.controls.rowControl.valueChanges.subscribe((data)=>{this.onValueChanged(data)});
    this.customLayoutForm.controls.lineControl.valueChanges.subscribe((data)=>{this.onValueChanged(data)});
  }

  resetForm(): void {
    this.customLayoutForm.reset();
    for (const key in this.customLayoutForm.controls) {
      this.customLayoutForm.controls[key].markAsPristine();
      this.customLayoutForm.controls[key].updateValueAndValidity();
    }
  }
  
  onValueChanged(data?: any) {
    if (!this.customLayoutForm || !this.customLayoutForm.dirty) {
      return;
    }
    for (const field in this.FormErrors) {
      this.FormErrors[field] = '';
      const control = this.customLayoutForm.get(field);
      if (control && control.dirty && control.invalid) {
        const message = this.ValidationMessages[field];
        for (const key in control.errors) {
          this.FormErrors[field] += message[key] + '';
          break;//取第一个错误
        }
      }
    }
  }

  public ValidationMessages = {
    rowControl: {
      required: "此项为必填项",
      max: "最大值为6",
      min: "最小值为1",
      onlyNumber:"请输入整数"
    },
    lineControl: {
      required: "此项为必填项",
      max: "最大值为6",
      min: "最小值为1",
      onlyNumber:"请输入整数"
    },
  }

  public FormErrors = {
    rowControl: "",
    lineControl: "",
  }

  AdjustLayout(layoutValue: any): void {//调整布局
    if (layoutValue === null || layoutValue === undefined) {
      console.error("[AdjustLayout]:layoutValue is null");
      return;
    }
    console.log('AdjustLayout click:' + layoutValue);
    this.layoutClicked.emit(layoutValue);
  }

  AdjustLayoutCustomize(): void {
    console.log('AdjustLayoutCustomize click');
  }

  AdjustLayoutRestore(): void {
    console.log('AdjustLayoutRestore click');
  }

  customLayout(): void {
    this.isCustomLayoutVisible = true;

  }
  
  handleOk() {
    this.layoutClicked.emit({
      'row': this.customLayoutForm.controls.rowControl.value,
      'line': this.customLayoutForm.controls.lineControl.value
    });
    this.resetForm();
    this.isCustomLayoutVisible = false;
  }

  handleCancel() {
    this.isCustomLayoutVisible = false;
    this.resetForm();
  }

}

