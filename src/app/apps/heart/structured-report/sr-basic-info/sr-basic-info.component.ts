import { Component, OnInit } from '@angular/core';
import { ModelContainer } from 'uih-appcommon';
import { HeartService } from '../../service/heart.service';
import * as Dicom from 'uih-dataheader';
import * as ViewerKit from 'uih-viewerkit';
import * as HeartDefinitions from '../../heart.component.definition';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-sr-basic-info',
  templateUrl: './sr-basic-info.component.html',
  styleUrls: ['./sr-basic-info.component.css']
})
export class SRBasicInfoComponent implements OnInit {

  public PatientID: string = '';
  public StudyDate: string = '';
  public AccessionNumber: string = '';
  public StudyPart: string = '';
  public BirthDay: string = '';
  public Age: string = '年龄：';
  public Sex: string = '';
  public PatientName: string = '';

  constructor(protected modelContainer: ModelContainer,
    protected service: HeartService) {
    // 在这个类里面可以直接用this.service.srM.basicInfoM
  }

  ngOnInit() {
    this.Init();
  }

  Init(): void {
    this.PatientID = this.GetDicomTag(Dicom.Tag.PatientsBirthDate);
    this.StudyDate = this.GetDicomTag(Dicom.Tag.StudyDate);
    this.AccessionNumber = this.GetDicomTag(Dicom.Tag.AccessionNumber);
    this.BirthDay = this.GetDicomTag(Dicom.Tag.PatientsBirthDate);
    this.Age = this.GetDicomTag(Dicom.Tag.PatientsAge);
    this.Sex = this.GetDicomTag(Dicom.Tag.PatientsSex);
    this.PatientName = this.GetDicomTag(Dicom.Tag.PatientsName);
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
