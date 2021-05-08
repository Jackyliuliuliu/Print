import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, Renderer2, AfterViewInit, ComponentFactoryResolver  } from '@angular/core';
import { ModelContainer } from 'uih-appcommon';
import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';
import * as Viewer2D from 'uih-medviewer2d'
import * as DicomDB from 'uih-dicomdb';
import { AdvAppBaseComponent } from '../../adv-app-base/adv-app-base.component';
import { SeriesDto } from 'uih-app-serverapi';
@Component({
    selector: 'filming-review',
    templateUrl: './filming-review.component.html',
    styleUrls: ['./filming-review.component.css']
})
export class FilmingReviewComponent implements OnInit , AfterViewInit {

    seiriesDto: SeriesDto;
    MedViewerSeries: Viewer2D.MedViewerSeries;
    CellCollecton1: Viewer.MedViewerControlCell[];
    CellCollecton2: Viewer.MedViewerControlCell[];
    batchViewContainer: ViewContainerRef;
    showFilmingReview: boolean = false;
    needDeleteImagecount: number = 0;//因为打开filming后要把保存的预览的图片删除
    seriesInstanceUID: string = null;
    private medviewer2DController: Viewer2D.MedViewer2DController;
    protected viewerControl: Viewer.MedViewerControl = undefined;
    protected commandSender: Viewer.IMedViewerControlCommandSender = undefined;

    @ViewChild('viewerControl', { static: false }) viewerControlElement?: ElementRef;

    constructor(protected render: Renderer2,
        protected modelContainer: ModelContainer) {

         }

    ngOnInit() {
        
    }

    ngAfterViewInit(): void {
        this.initialize();
    }

    public closeFilmingReview(): void {
        this.batchViewContainer.clear();
    }

    private initialize(): void {
        if(!this.showFilmingReview){
            return;
        }
        this.commandSender = this.modelContainer.getModel('CommandSenderFE') as Viewer.IMedViewerControlCommandSender;
        this.viewerControl = new Viewer.MedViewerControl(this.render, this.viewerControlElement, this.commandSender);
        this.viewerControl.initialize();
        this.viewerControl.isSupportMultipleSelection = true;
        this.CellCollecton1 = [];
        this.CellCollecton2 = [];
        this.medviewer2DController = new Viewer2D.MedViewer2DController(null,
            this.commandSender);

        const cell0 = new ViewerKit.AppCell();
        cell0.cellName = '0';
        cell0.displayData.imageText.isVisible = true;
        cell0.initialize(this.modelContainer);
        this.CellCollecton1.push(cell0);

        const cell1 = new ViewerKit.AppCell();
        cell1.cellName = '1';
        cell1.displayData.imageText.isVisible = true;
        cell1.initialize(this.modelContainer);
        this.CellCollecton1.push(cell1);

        const cell2 = new ViewerKit.AppCell();
        cell2.cellName = '2';
        cell2.displayData.imageText.isVisible = true;
        cell2.initialize(this.modelContainer);
        this.CellCollecton1.push(cell2);

        const cell3 = new ViewerKit.AppCell();
        cell3.cellName = '3';
        cell3.displayData.imageText.isVisible = true;
        cell3.initialize(this.modelContainer);
        this.CellCollecton1.push(cell3);
        
        this.viewerControl.addCell(cell0);
        this.viewerControl.addCell(cell1);
        this.viewerControl.addCell(cell2);
        this.viewerControl.addCell(cell3);


        const layoutInfo = new Viewer.LayoutCellInfo();
        layoutInfo.colums = 2;
        layoutInfo.rows = 2;
  
        this.viewerControl.layoutManager.setLayout(layoutInfo, this.CellCollecton1);
        

        this.viewerControl.layoutManager.setCanvasSize();
        this.LoadSeriesInDB();
        //ViewerKit.CommandHelper.sizeChanged(this.commandSender, this.viewerControl);
       // cell0.actionManager.setAction(Viewer.MouseButtonType.Right, Viewer.ActionTypes.Zoom);
        //cell0.actionManager.setAction(Viewer.MouseButtonType.Left, Viewer.ActionTypes.Pan);
    }

    private LoadSeriesInDB(): void {
        let component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.advAppAPIService.aiDBSvcClient.getStudyAll(component.studyDTO.studyInstanceUID).then(studyDto => {
            let maxSeriesInstanceNumber = 0;
            let maxSeriesUID = '';
            studyDto.list.forEach(series => {
                const tmpInstanceNumber = series.seriesNumber;
                const tmpSeriesUID = series.seriesInstanceUID;
                if (tmpInstanceNumber > maxSeriesInstanceNumber && tmpInstanceNumber >= 8000) {
                    let seriestatus = series.seriesStatus;
                    if(seriestatus == 'uAIM' ){
                        maxSeriesInstanceNumber = tmpInstanceNumber;
                        maxSeriesUID = tmpSeriesUID;
                        this.seriesInstanceUID = tmpSeriesUID;
                    } 
                    
                }
            });
            if(this.seriesInstanceUID != null){
                component.advAppAPIService.dicomClient.getSeriesByUID(this.seriesInstanceUID).then(rst => {
                    this.seiriesDto = rst;
                    this.MedViewerSeries = new Viewer2D.MedViewerSeries(this.seriesInstanceUID);
                    if(this.seiriesDto != null){
                        let index = 0;
                        this.seiriesDto.images.forEach(item => {
                            this.MedViewerSeries.addNewImage(item.sopInstanceUID);
                            let image = this.MedViewerSeries.getImageByIndex(index);
                            let array = ViewerKit.CommandHelper.decode(item.imageContent);
                    
                            const fileLoader = new DicomDB.DicomFileLoader();
                            const wrappedImageData = fileLoader.getDicomFileInfo(array);
                    
                            image.isLoaded = true;
                            image.fileBuffer = array;
                            image.dicomFile = wrappedImageData.file;
                            image.imageInfo = wrappedImageData.image;
                            
        
                            image.imageInfo.ischanged = true;
                            image.imageInfo.isSizeChanged = true;
        
                            //默认的转image是把灰度图转成rgb的方式，实际的冠脉保存的图像是RGB的，所以，需要用原始的pixeldata，重新转
                            let array1 = image.dicomFile.GetOriginalImage();
                            let bb = new Uint8ClampedArray(wrappedImageData.data.width*wrappedImageData.data.height * 4);
        
                            for(let i = 0; i < wrappedImageData.data.height; i++){
                                for(let j = 0; j < wrappedImageData.data.width; j++){
                                    let k = wrappedImageData.data.width * i + j;
                                    bb[4 * k] = array1[3 * k];
                                    bb[4 * k + 1] = array1[3 * k + 1];
                                    bb[4 * k + 2] = array1[3 * k + 2];
                                    bb[4 * k + 3] = 255;
                                }
                            }
        
                            image.imageData = new ImageData(bb,wrappedImageData.data.width,wrappedImageData.data.height);
                            if(index < this.viewerControl.getCells().length)
                            {
                                let cell = this.viewerControl.getCell(index.toString());
                                
                                cell.drawOnCanvas(image.imageData);
                                
                            }
                            
                            index = index + 1;
                            
                          });
                    }
                });
            }
        });
    }

    public LoadSeries() : void{
        let id = '123';
        let component = this.modelContainer.getModel('MainComponent') as AdvAppBaseComponent;
        component.advAppAPIService.dicomClient.getSeriesByUID(id).then(rst => {
            this.seiriesDto = rst;
            this.MedViewerSeries = new Viewer2D.MedViewerSeries(id);
            if(this.seiriesDto != null){
                let index = 0;
                this.seiriesDto.images.forEach(item => {
                    this.MedViewerSeries.addNewImage(item.sopInstanceUID);
                    let image = this.MedViewerSeries.getImageByIndex(index);
                    let array = ViewerKit.CommandHelper.decode(item.imageContent);
            
                    const fileLoader = new DicomDB.DicomFileLoader();
                    const wrappedImageData = fileLoader.getDicomFileInfo(array);
            
                    image.isLoaded = true;
                    image.fileBuffer = array;
                    image.dicomFile = wrappedImageData.file;
                    image.imageInfo = wrappedImageData.image;
                    

                    image.imageInfo.ischanged = true;
                    image.imageInfo.isSizeChanged = true;

                    //默认的转image是把灰度图转成rgb的方式，实际的冠脉保存的图像是RGB的，所以，需要用原始的pixeldata，重新转
                    let array1 = image.dicomFile.GetOriginalImage();
                    let bb = new Uint8ClampedArray(wrappedImageData.data.width*wrappedImageData.data.height * 4);

                    for(let i = 0; i < wrappedImageData.data.height; i++){
                        for(let j = 0; j < wrappedImageData.data.width; j++){
                            let k = wrappedImageData.data.width * i + j;
                            bb[4 * k] = array1[3 * k];
                            bb[4 * k + 1] = array1[3 * k + 1];
                            bb[4 * k + 2] = array1[3 * k + 2];
                            bb[4 * k + 3] = 255;
                        }
                    }

                    image.imageData = new ImageData(bb,wrappedImageData.data.width,wrappedImageData.data.height);
                    if(index < this.viewerControl.getCells().length)
                    {
                        let cell = this.viewerControl.getCell(index.toString());
                        
                        cell.drawOnCanvas(image.imageData);
                        
                    }
                    
                    index = index + 1;
                    
                  });
            }
        });
    }
}
