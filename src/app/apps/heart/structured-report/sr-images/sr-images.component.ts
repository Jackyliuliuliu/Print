import { Component, OnInit } from '@angular/core';
import { HeartService } from '../../service/heart.service';
import { ValueConverter } from '../../heart.component.enumConverter';

@Component({
    selector: 'app-sr-images',
    templateUrl: './sr-images.component.html',
    styleUrls: ['./sr-images.component.css']
})
export class SRImagesComponent implements OnInit {
    public valCvt: ValueConverter = new ValueConverter();

    constructor(public service: HeartService) { }

    ngOnInit() {
    }

}
