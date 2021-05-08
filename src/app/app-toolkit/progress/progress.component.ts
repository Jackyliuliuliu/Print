import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ProgressControl',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

    public Progress: string;
    public ProgressContext: string;
    public IsVisible: boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
