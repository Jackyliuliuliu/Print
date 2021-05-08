import { Component, OnInit } from '@angular/core';
import { CommonModel } from '../sr.model';

@Component({
  selector: 'app-sr-header',
  templateUrl: './sr-header.component.html',
  styleUrls: ['./sr-header.component.css']
})
export class SRHeaderComponent implements OnInit {
  public hospitalName: string = '上海市复旦大学中山医院';
  public hospitalLogoUrl: string = 'assets/resources/hospital.png';

  public commonM: CommonModel = new CommonModel();

  constructor() { }

  ngOnInit() {
  }

}
