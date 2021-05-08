import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input, NgZone, ChangeDetectorRef } from '@angular/core';
import { AdvAppServerAPIService, Config } from '../../../../../src/root/adv-app.server.api.service';

@Component({
  selector: 'app-filming-toolbox-printer',
  templateUrl: './filming-toolbox-printer.component.html',
  styleUrls: ['./filming-toolbox-printer.component.css']
})
export class FilmingToolboxPrinterComponent implements OnInit {
  printerConfig: Config;
  printNum: number;//打印数量  
  printers: string[] = [];// 打印机
  selectedPrinter: string;//当前打印机
  filmSizeItems: string[] = [];//打印尺寸类型
  selectedSize: string; //当前尺寸
  mediumType: string;//胶片类型
  localAE: string = 'UAI';
  selectedConfig: PrinterConfig = new PrinterConfig();
  printModel: string[] = [];//打印模式
  selectePrintdModel: string;
  titleFontSize: string;
  titleModel: string;

  @Output() filmSizeChange = new EventEmitter<string>();
  @Output() titleModelChange = new EventEmitter<string>();
  @Output() printPage = new EventEmitter<PrinterConfig>();
  @Output() printAllPage = new EventEmitter<PrinterConfig>();
  @Input() isButtonDisable: boolean;

  constructor(private advAppAPIService: AdvAppServerAPIService,
    private zone: NgZone,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getPrinterConfig();
  }
  
  printCurrentPage() {
    this.getSelectedPrinterConfig();
    this.checkPrinter().then((result) => {
      result ? this.printPage.emit(this.selectedConfig) : this.printPage.emit(null);
    })
  }

  printAll() {
    this.getSelectedPrinterConfig();
    this.checkPrinter().then((result) => {
      result ? this.printAllPage.emit(this.selectedConfig) : this.printAllPage.emit(null);
    });
  }


  checkPrinter(): Promise<boolean> {
    let { selectPrinter: peerAE, ip: peerIP, port: peerPort } = this.selectedConfig;
    return this.advAppAPIService.printerConfigClient.checkPrinter(this.selectedConfig.localAE, peerAE, peerIP, peerPort).then((result: boolean) => {
      return result;
    }).catch((error => { return false }));

  }

  getSelectedPrinterConfig(): void {
    this.selectedConfig.selectPrinter = this.selectedPrinter;
    this.selectedConfig.selectNum = this.printNum;
    this.selectedConfig.selectSize = this.selectedSize;
    this.selectedConfig.selectedPrintModel = this.selectePrintdModel;
    this.selectedConfig.titleFontSize = this.titleFontSize;


    this.printerConfig.item.forEach(ele => {
      if (ele.peerAE === this.selectedPrinter) {
        this.selectedConfig.ip = ele.peerIP;
        this.selectedConfig.port = ele.peerPort;
        this.selectedConfig.DPI = ele.printDPI;
        this.selectedConfig.mediumType = ele.mediumType;
        this.selectedConfig.localAE = ele.localAE;
      }
    });
  }

  filmSizeModelChange(event: string) {
    this.filmSizeChange.emit(event);
  }

  // printNumModelChange(event: number) {
  //   this.printNumChange.emit(event);
  // }


  private getPrinterConfig() {
    this.advAppAPIService.printerConfigClient.getPrinterConfig().then((result: Config) => {
      this.printerConfig = result;
      this.printers = this.printerConfig.item.map(item => item.peerAE);

      if (this.printerConfig.item.length > 0) {
        this.selectedPrinter = this.printerConfig.item[0].peerAE;
        this.printNum = (this.printerConfig.item[0].printCopies);
        this.filmSizeItems = (this.printerConfig.item[0].filmSizeID.split('\\'));  //"8INX10IN\11INX14IN\14INX17IN"
        this.selectedSize = this.printerConfig.item[0].defaultFilmSize;
        this.mediumType = this.printerConfig.item[0].mediumType;
        this.printModel = (this.printerConfig.item[0].printModel.split('\\'));
        this.selectePrintdModel = this.printerConfig.item[0].defaultPrintModel;
        this.titleFontSize = this.printerConfig.item[0].titleFontSize;
        this.titleModel = this.printerConfig.item[0].titleModel;
        this.localAE = this.printerConfig.item[0].localAE;
        this.filmSizeChange.emit(this.selectedSize);
        this.titleModelChange.emit(this.titleModel);
      }
    });
  }

  printerChange(value: string): void {
    this.selectedPrinter = value;
    this.printerConfig.item.forEach(ele => {
      if (ele.peerAE === this.selectedPrinter) {
        this.printNum = ele.printCopies;
        this.selectedSize = ele.defaultFilmSize;
        this.filmSizeItems = ele.filmSizeID.split('\\');
        this.mediumType = ele.mediumType;
        this.printModel = ele.printModel.split('\\');
        this.selectePrintdModel = ele.defaultPrintModel;
        this.titleFontSize = ele.titleFontSize;
      }
    });
  }

  increase(): void {
    this.printNum < 9 && this.printNum++;
  }

  decrease(): void {
    this.printNum > 0 && this.printNum--;
  }


}

export class PrinterConfig {
  selectNum: number;
  selectPrinter: string;
  selectSize: string;
  ip: string;
  port: string;
  DPI: string;
  mediumType: string;
  selectedPrintModel: string;
  titleFontSize: string;
  titleModel: string;
  localAE: string;
} 