import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMovableModalDirective]'
})
export class MovableModalDirective {

  private canMove: boolean = false;
  private modalX: number = 0;
  private modalY: number = 0;
  private mouseDownX: number = 0;
  private mouseDownY: number = 0;
  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }
  ngAfterViewInit() {
    let modalElement = this.getModalElement();
    let modalTitleElement = this.getModalTitleElment();
    if (modalTitleElement) {
      this.render.listen(modalTitleElement, 'mousedown', function (event) {
        this.mouseDownX = event.clientX;
        this.mouseDownY = event.clientY;
        this.modalX = modalElement.offsetLeft;
        this.modalY = modalElement.offsetTop;
        this.render.setStyle(modalElement, "top", `${this.modalY}px`);
        this.render.setStyle(modalElement, "left", `${this.modalX}px`);
        this.canMove = true;
      }.bind(this));
    }
    this.render.listen(this.elementRef.nativeElement, 'mouseup', function (event) {
      this.canMove = false;
    }.bind(this));
    this.render.listen(this.elementRef.nativeElement, 'mousemove', function (event) {
      if (this.canMove) {
        let moveX = event.clientX - this.mouseDownX;
        let moveY = event.clientY - this.mouseDownY;
        let newModalX = this.modalX + moveX;
        let newModalY = this.modalY + moveY;
        this.render.setStyle(modalElement, "top", `${newModalY}px`);
        this.render.setStyle(modalElement, "left", `${newModalX}px`);
        console.log(newModalX, newModalY);
      }
    }.bind(this));
  }
  getModalElement() {
    return this.elementRef.nativeElement.querySelector('.ant-modal-content');
  }
  getModalTitleElment() {
    return this.elementRef.nativeElement.querySelector('.ant-modal-header');
  }
}
