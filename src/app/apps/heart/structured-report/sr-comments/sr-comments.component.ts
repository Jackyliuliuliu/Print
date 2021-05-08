import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sr-comments',
  templateUrl: './sr-comments.component.html',
  styleUrls: ['./sr-comments.component.css']
})
export class SRCommentsComponent implements OnInit {
  public content: string = '';

  constructor() { }

  ngOnInit() {
  }

}
