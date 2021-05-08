import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { isNullOrUndefined } from 'util';
import { HeartService } from '../../service/heart.service';
import * as jsPDF from 'jspdf';
import html2Canvas from 'html2canvas';
import { ModelContainer } from 'uih-appcommon';
import * as ViewerKit from 'uih-viewerkit';
import * as Dicom from 'uih-dataheader';
import * as HeartDefinitions from '../../heart.component.definition';


@Component({
    selector: 'app-sr-footer',
    templateUrl: './sr-footer.component.html',
    styleUrls: ['./sr-footer.component.css']
})
export class SRFooterComponent implements OnInit {
    public radioValue: number = 0;
    public doctorName: string = '';
    public date: string = '';
    public report;

    constructor(protected modelContainer: ModelContainer,
        public service: HeartService) { }

    ngOnInit() {
    }

    public getFooterInfo(): void {
        this.doctorName = '';
        this.date = moment(new Date()).format('YYYY/MM/DD');
    }

    public turnPage(): void {
        if (this.service.srM.commonM.totalPage === 2) {
            if (this.service.srM.commonM.currentPage === 2) {
                this.service.srM.commonM.currentPage = 1;
            } else {
                this.service.srM.commonM.currentPage = 2;
            }
        }
    }

    public changeHiddenState(pdfDom, tagName, isHidden): void {
        const tag = pdfDom.getElementsByTagName(tagName)[0];
        tag.hidden = isHidden;
    }

    public changeFooterButton(pdfDom, isHidden): void {
        const tag1 = pdfDom.getElementsByTagName('span')[('btn-group')];
        tag1.hidden = isHidden;
        const tag3 = pdfDom.getElementsByTagName('label')[('page')];
        tag3.hidden = !isHidden;
    }

    public changeCurrentPage(pageNo): void {

    }

    public generateOnePage(pdf, generateType): void {
        // 获取需要打印的Dom节点
        const pdfDom = document.getElementById('page2pdf');
        this.changeFooterButton(pdfDom, true);
        html2Canvas(pdfDom, {
            windowWidth: pdfDom.scrollWidth,
            windowHeight: pdfDom.scrollHeight + 200,
            height: pdfDom.scrollHeight + 200,
            // 截屏起止位置 scrollX、scrollY
            scrollY: 0,
            // 放大两倍，防止模糊
            scale: 2
        }).then(canvas1 => {
            // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            const imgWidth = 595.28;
            const imgHeight = (595.28 / canvas1.width) * canvas1.height;
            const pageData = canvas1.toDataURL('image/jpeg', 1.0);
            pdf.addImage(pageData, 'JPEG', 15, 15, imgWidth, imgHeight);

            //let pName = this.GetDicomTag(Dicom.Tag.PatientsName);
            let accessionnumber = this.GetDicomTag(Dicom.Tag.AccessionNumber);
            let name = '结构化报告' + accessionnumber + '.pdf';

            if (generateType === 'save') {
                pdf.output('save', { filename: name });
            } else if (generateType === 'print') {
                pdf.autoPrint({ variant: 'non-conform' });
                pdf.output('dataurlnewwindow');
            }
            this.changeFooterButton(pdfDom, false);
        });
    }

    public generateTwoPages(pdf, generateType): void {
        // 获取需要打印的Dom节点
        const pdfDom = document.getElementById('page2pdf');
        // 第一页
        this.changeHiddenState(pdfDom, 'app-sr-images', false);
        this.changeHiddenState(pdfDom, 'app-sr-findings', true);
        this.changeHiddenState(pdfDom, 'app-sr-comments', true);
        this.changeFooterButton(pdfDom, true);
        // this.service.srM.commonM.currentPage = 1;

        html2Canvas(pdfDom, {
            windowWidth: pdfDom.scrollWidth,
            windowHeight: pdfDom.scrollHeight + 200,
            height: pdfDom.scrollHeight + 200,
            // 截屏起止位置 scrollX、scrollY
            scrollY: 0,
            // 放大两倍，防止模糊
            scale: 2
        }).then(canvas1 => {
            // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            let imgWidth = 595.28;
            let imgHeight = (595.28 / canvas1.width) * canvas1.height;
            let pageData = canvas1.toDataURL('image/jpeg', 1.0);
            pdf.addImage(pageData, 'JPEG', 15, 15, imgWidth, imgHeight);

            // 第二页
            this.changeHiddenState(pdfDom, 'app-sr-images', true);
            this.changeHiddenState(pdfDom, 'app-sr-findings', false);
            this.changeHiddenState(pdfDom, 'app-sr-comments', false);
            this.changeFooterButton(pdfDom, true);
            // this.service.srM.commonM.currentPage = 2;

            html2Canvas(pdfDom, {
                windowWidth: pdfDom.scrollWidth,
                windowHeight: pdfDom.scrollHeight + 200,
                height: pdfDom.scrollHeight + 200,
                // 截屏起止位置 scrollX、scrollY
                scrollY: 0,
                // 放大两倍，防止模糊
                scale: 2
            }).then(canvas2 => {
                // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                imgWidth = 595.28;
                imgHeight = (595.28 / canvas2.width) * canvas2.height;
                pageData = canvas2.toDataURL('image/jpeg', 1.0);
                pdf.addPage();
                pdf.addImage(pageData, 'JPEG', 20, 40, imgWidth, imgHeight);

                //let pName = this.GetDicomTag(Dicom.Tag.PatientsName);
                let accessionnumber = this.GetDicomTag(Dicom.Tag.AccessionNumber);
                let name = '结构化报告' +  accessionnumber + '.pdf';
                if (generateType === 'save') {
                    pdf.output('save', { filename: name });
                } else if (generateType === 'print') {
                    pdf.autoPrint({ variant: 'non-conform' });
                    pdf.output('dataurlnewwindow');
                }

                this.changeFooterButton(pdfDom, false);
            });
        });
    }

    public saveReport(): void {
        const pdf = new jsPDF('', 'pt', 'a4');
        if (this.service.srM.commonM.totalPage === 1) {
            this.generateOnePage(pdf, 'save');
        } else {
            this.generateTwoPages(pdf, 'save');
        }
    }

    public printReport(): void {
        const pdf = new jsPDF('', 'pt', 'a4');
        if (this.service.srM.commonM.totalPage === 1) {
            this.generateOnePage(pdf, 'print');
        } else {
            this.generateTwoPages(pdf, 'print');
        }
    }

    public GetDicomTag(tag: number) {
        let content = '';
        const workflow = this.modelContainer.getModel('WorkflowModel') as ViewerKit.AppWorkflow;
        if (!workflow) return content;
        const cell = workflow.getCell(HeartDefinitions.HRTCellNames.VR);
        if (cell != null) {
          const imageHeader = cell.displayData.imageHeader;
          if (imageHeader != null) {
            let dataheader = imageHeader.DicomHeader;
            if (dataheader != null) {
              content = dataheader.getValue(tag);
            }
          }
        }
        if (isNullOrUndefined(content)) content = '';
        return content;
      }
}
