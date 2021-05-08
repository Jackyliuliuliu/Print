import { Component, OnInit } from '@angular/core';
import { HeartService } from '../../service/heart.service';
import { ValueConverter } from '../../heart.component.enumConverter';

@Component({
    selector: 'app-sr-findings',
    templateUrl: './sr-findings.component.html',
    styleUrls: ['./sr-findings.component.css']
})
export class SRFindingsComponent implements OnInit {
    public coronarySegment = ['LAD', 'LM', 'D1', 'D2', 'LCX', 'OM1', 'OM2', 'RCA', 'R-PDA', 'R-PLB', 'L-PDA', 'L-PLB', 'RAMUS', '其他'];
    public valCvt: ValueConverter = new ValueConverter();

    constructor(public service: HeartService) {
        // 在这个类里面可以直接用this.service.srM.findings
    }

    ngOnInit() {
    }

}
