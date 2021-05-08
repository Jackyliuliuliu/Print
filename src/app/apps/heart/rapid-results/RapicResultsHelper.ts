import * as Viewer from 'uih-medviewercontrol';
import * as ViewerKit from 'uih-viewerkit';
import * as HeartDefinitions from '../heart.component.definition';
import * as CardiacProtoCommon from '../CTCaridacCommonProto';
import * as AppCommon from 'uih-appcommon';
import CardiacProto = CardiacProtoCommon.Mcsf.CTCardiacCommonProtocol;
import { ImagePreviewInfo } from './rapid-results.component';
import * as Dicom from 'uih-dataheader';
import { HeartComponent } from '../heart.component';

export class RapidResultsHelper {

    public static sendPreviewCommandToBE(
        imagePreviewInfoList: ImagePreviewInfo[], previewIndex: number, commandSender: Viewer.IMedViewerControlCommandSender): void {

        try {
            const previewInfo = CardiacProto.MessageRapidResultsPreview.create();
            previewInfo.Index = previewIndex + 1;
            const imagePreviewInfo = imagePreviewInfoList[previewIndex];
            previewInfo.CenterLineID = imagePreviewInfo.centerLineID;
            previewInfo.IndexInGroup = imagePreviewInfo.imageIndex;
            previewInfo.DisplayMode = imagePreviewInfo.tissueDisplayMode;
            previewInfo.IsCoronaryOrientationMode = imagePreviewInfo.isCoronaryOrientationMode;
            previewInfo.angle1 = imagePreviewInfo.lrAngle;
            previewInfo.angle2 = imagePreviewInfo.auAngle;
            previewInfo.changeUpDirection = imagePreviewInfo.changeUpDirection;//default
            previewInfo.upX = imagePreviewInfo.upX;
            previewInfo.upY = imagePreviewInfo.upY;
            previewInfo.upZ = imagePreviewInfo.upZ;
            const imageType = CardiacProto.RapidResultsImageType['RapidResultsImageType_' + imagePreviewInfo.imageType];
            previewInfo.ImageType = imageType;

            const buffer = CardiacProto.MessageRapidResultsPreview.encode(previewInfo).finish();
            ViewerKit.CommandHelper.sendPanelOperation(commandSender, buffer, 'RapidResultsPreview');
            console.info('sendPreviewCommandToBE ' + previewIndex.toString());
        } catch (error) {
            console.error(`sendPreviewCommandToBE failed: ${error}`);
        }

    }

    public static sendSaveCommandToBE(imagePreviewInfoList: ImagePreviewInfo[], commandSender: Viewer.IMedViewerControlCommandSender): void {
        var saveBuilder = CardiacProto.MessageRapidResultsSave.create();
        let index = 1;
        imagePreviewInfoList.forEach(imagePreviewInfo => {
            let msgPreviewItem = CardiacProto.MessageRapidResultsPreview.create();

            msgPreviewItem.Index = index++;
            msgPreviewItem.CenterLineID = imagePreviewInfo.centerLineID;
            msgPreviewItem.ImageType = CardiacProto.RapidResultsImageType['RapidResultsImageType_' + imagePreviewInfo.imageType];;
            msgPreviewItem.IsCoronaryOrientationMode = imagePreviewInfo.isCoronaryOrientationMode;
            msgPreviewItem.IndexInGroup = imagePreviewInfo.imageIndex;
            msgPreviewItem.DisplayMode = imagePreviewInfo.tissueDisplayMode;
            saveBuilder.SaveItem.push(msgPreviewItem);
        });

        const buffer = CardiacProto.MessageRapidResultsSave.encode(saveBuilder).finish();
        ViewerKit.CommandHelper.sendPanelOperation(commandSender, buffer, 'RapidResultsSaveSetting');
    }

    public static RapidResultsSaveCommand(imagePreviewInfoList: ImagePreviewInfo[], container: AppCommon.ModelContainer, seriesName: string, pacsName: string): void {
        const workflow = container.getSingleModel(ViewerKit.AppWorkflow);
        if (!workflow) {
            return;
        }

        let cell = workflow.getCell('Rapid_Results_Preview_Cell');

        let context = new ViewerKit.SaveFilmingCommandContext();
        context.Reserved = pacsName;
        context.CellIndex = cell.cellIndex;
        context.CommandID = -1;// todo.
        let commandSender = container.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
        context.CommandSender = commandSender;

        const component = container.getModel('MainComponent') as HeartComponent;
        component.advAppAPIService.aiDBSvcClient.getStudyAll(component.studyDTO.studyInstanceUID).then(studyDto => {
            let maxSeriesInstanceNumber = 0;
            let maxSeriesUID = '';
            studyDto.list.forEach(series => {
                const tmpInstanceNumber = series.seriesNumber;
                const tmpSeriesUID = series.seriesInstanceUID;
                if (tmpInstanceNumber > maxSeriesInstanceNumber && tmpInstanceNumber >= 8000) {
                    maxSeriesInstanceNumber = tmpInstanceNumber;
                    maxSeriesUID = tmpSeriesUID;
                }
            });
            if (maxSeriesUID && maxSeriesInstanceNumber >= 8000) {
                context.KeepSameSeries = true;
                context.SeriesUID = maxSeriesUID;
            } else {
                context.KeepSameSeries = false;
                context.SeriesUID = cell.displayData.imageHeader.DicomHeader.getValue(Dicom.Tag.SeriesInstanceUid);

            }

            context.ImageAuxiliaries = [];


            context.Mode = ViewerKit.SaveFilmingMode.Save;
            context.SaveFormatType = ViewerKit.SaveFormatType.DicomRGB;
            context.SaveType = ViewerKit.SavingType.SecondaryCapture;
            context.Strategy = ViewerKit.SaveFilmingStrategy.SaveImages;

            let operateType = 'RapidResultsSave'; //todo
            let cellName = cell.cellName;
            let workflowName = commandSender.workflowName;
            let sopClassUID = "1.2.840.10008.5.1.4.1.1.7";

            imagePreviewInfoList.forEach(imagePreviewInfo => {
                let imageAuxiliary = new ViewerKit.ImageAuxiliary();
                context.ImageAuxiliaries.push(imageAuxiliary);
                imageAuxiliary.CellIndex = cell.cellIndex;
                imageAuxiliary.IsSaveAsDisplay = false;
                imageAuxiliary.DataHeader = cell.displayData.DataHeader;

            // sop instance uid
                let element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.SOPClassUID);
                if (!element.SetString(0, sopClassUID)) {
                    throw new Error('Failed to Insert SOPClassUID to Data header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.SOPClassUID);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);

            // series name
                let seriesDescription = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.SeriesDescription);
                if (!seriesDescription.SetString(0, seriesName)) {
                    throw new Error('Failed to Insert SeriesDescription to Data header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.SeriesDescription);
                imageAuxiliary.DataHeader.AddDicomAttribute(seriesDescription);

                let iSamplesPerPixel = 3;
                let sPhotometric = 'RGB';
                let bitsAllocated = 8;
                let sSlope = '1';
                let sIntercepter = '0';
                let pixelRepresentation = 0;

                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.PlanarConfiguration);
                if (!element.SetUInt16(0, 0)) {
                    throw new Error('Failed to insert PlanarConfiguration to Data Header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.PlanarConfiguration);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);

                 //SamplesPerPixel
                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.SamplesPerPixel);
                if (!element.SetUInt16(0, iSamplesPerPixel)) {
                    throw new Error('Failed to insert columns to Data Header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.SamplesPerPixel);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);


                //insert Conversion type
                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.ConversionType);
                if (!element.SetString(0, 'WSD')) {
                    throw new Error('Failed to insert Conversion type to Data header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.ConversionType);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);

                //insert Photometric Interpretation
                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.PhotometricInterpretation);
                if (!element.SetString(0, sPhotometric)) {
                    throw new Error('Failed to Insert PhotometricInterpretation to Data header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.PhotometricInterpretation);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);

                
                //insert bitsAllocated
                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.BitsAllocated);
                if (!element.SetUInt16(0, bitsAllocated)) {
                    throw new Error('Failed to Insert BitsAllocated to Data header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.BitsAllocated);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);

                //insert Bits Stored
                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.BitsStored);
                if (!element.SetUInt16(0, bitsAllocated)) {
                    throw new Error('Failed to Insert BitsStored to Data header');
                 }
                 imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.BitsStored)
                 imageAuxiliary.DataHeader.AddDicomAttribute(element);

                //insert High Bit
                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.HighBit);
                if (!element.SetUInt16(0, (bitsAllocated - 1))) {
                    throw new Error('Failed to Insert HighBit to Data header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.HighBit);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);

                //insert pixel representation
                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.PixelRepresentation);
                if (!element.SetUInt16(0, pixelRepresentation)) {
                    throw new Error('Failed to Insert PixelRepresentation to Data header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.PixelRepresentation);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);

                //RescaleSlope
                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.RescaleSlope);
                if (!element.SetString(0, sSlope)) {
                    throw new Error('Failed to Insert RescaleSlope to Data header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.RescaleSlope);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);

                //RescaleIntercept
                element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.RescaleIntercept);
                if (!element.SetString(0, sIntercepter)) {
                    throw new Error('Failed to Insert RescaleIntercept to Data header');
                }
                imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.RescaleIntercept);
                imageAuxiliary.DataHeader.AddDicomAttribute(element);

            });
            ViewerKit.SaveFilmingHelper.sendSaveFilmingCommand(context, operateType, cellName, workflowName);

        });   
        
    }

    public static RapidSaveCommand(
        imagePreviewInfoList: ImagePreviewInfo[],index:number,cell: ViewerKit.AppCell,
        container: AppCommon.ModelContainer, 
        seriesInstanceUID:string,
        seriesNumber:number,
        seriesName: string, 
        pacsName: string, 
        isEnd: boolean): void {
        
        const workflow = container.getSingleModel(ViewerKit.AppWorkflow);
        if (!workflow) {
            return;
        }


        let commandSender = container.getModel('CommandSender') as Viewer.IMedViewerControlCommandSender;
        const component = container.getModel('MainComponent') as HeartComponent;

        let context = new ViewerKit.SaveFilmingCommandContext();
        //
        context.CommandID = -1;// todo.
        context.CommandSender = commandSender;
         context.ImageAuxiliaries = [];
        context.Mode = ViewerKit.SaveFilmingMode.Save;
        context.SaveFormatType = ViewerKit.SaveFormatType.DicomRGB;
        context.SaveType = ViewerKit.SavingType.SecondaryCapture;
        context.Strategy = ViewerKit.SaveFilmingStrategy.SaveImages;

        //let operateType = 'RapidResultsSave'; //todo
        let operateType = 'SaveDisplay'; //todo
        
        let workflowName = commandSender.workflowName;

        if(cell && cell.canvas){
            context.CellIndex = cell.cellIndex;
            context.ImageAuxiliaries = [];
            let imageAuxiliary = new ViewerKit.ImageAuxiliary();
            context.ImageAuxiliaries.push(imageAuxiliary);
            const vr = workflow.getCell('A_VR');
            imageAuxiliary.DataHeader = vr.displayData.DataHeader;
            imageAuxiliary.CellIndex = cell.cellIndex;
            let bitMapBuffer = ViewerKit.SaveFilmingHelper.getBitMap(cell);
            ViewerKit.SaveFilmingHelper.FillWriteableBitMap(imageAuxiliary.DataHeader, bitMapBuffer, cell.canvas.width, cell.canvas.height);

            // series name
            let seriesDescription = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.SeriesDescription);
            if (!seriesDescription.SetString(0, seriesName)) {
                throw new Error('Failed to Insert SeriesDescription to Data header');
            }
            imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.SeriesDescription);
            imageAuxiliary.DataHeader.AddDicomAttribute(seriesDescription);

            index = index + 1;
            let element = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.InstanceNumber);
            if (!element.SetString(0, index.toString())) {
                throw new Error('Failed to Insert SOPClassUID to Data header');
            }
            imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.InstanceNumber);
            imageAuxiliary.DataHeader.AddDicomAttribute(element);

            let snumber = Dicom.DicomAttributeCreater.CreateAttribute(Dicom.Tag.SeriesNumber);
            if (!snumber.SetString(0, seriesNumber.toString())) {
                throw new Error('Failed to Insert seriesNumber to Data header');
            }
            imageAuxiliary.DataHeader.RemoveDicomAttributeByTag(Dicom.Tag.SeriesNumber);
            imageAuxiliary.DataHeader.AddDicomAttribute(snumber);

            context.KeepSameSeries = true;
            context.SeriesUID = seriesInstanceUID;

            let cellName = cell.cellName;
            ViewerKit.SaveFilmingHelper.sendSaveFilmingCommand(context, operateType, cellName, workflowName);
            console.info('RapidSaveCommand ' + index.toString());
        }

        if(!isEnd){
            this.sendPreviewCommandToBE(imagePreviewInfoList,index,commandSender);
        }

        if(isEnd){
            component.advAppAPIService.aiDBSvcClient.getStudyAll(component.studyDTO.studyInstanceUID).then(studyDto => {
                let folder = '';
                studyDto.list.forEach(series => {
                    if (series.seriesInstanceUID == seriesInstanceUID) {
                        folder = series.seriesThumbnail;
                        let i = folder.lastIndexOf('/');
                        if(i >= 0)
                        {
                            folder = folder.substring(0,i);
                        }
                    }
                });
                if(folder.length > 0){
                    let context1 = new ViewerKit.SaveFilmingCommandContext();
                    context1.Reserved = pacsName;
                    context1.CellIndex = 0;
                    context1.CommandID = -1;// todo.
                    context1.CommandSender = commandSender;
                    operateType = 'RapidResultsSave'; //todo
                    context1.FilePath = folder;
                    context1.ImageAuxiliaries = [];
                    context1.Mode = ViewerKit.SaveFilmingMode.Save;
                    context1.SaveFormatType = ViewerKit.SaveFormatType.DicomRGB;
                    context1.SaveType = ViewerKit.SavingType.SecondaryCapture;
                    context1.Strategy = ViewerKit.SaveFilmingStrategy.SaveImages;

                    component.advAppAPIService.aiDBSvcClient.updateSeriesStatus(seriesInstanceUID,'SavePacs');
            
                    ViewerKit.SaveFilmingHelper.sendSaveFilmingCommand(context1, operateType, 'Rapid_Results_Preview_Cell', workflowName);
                }
            });
        }

        
    }
}