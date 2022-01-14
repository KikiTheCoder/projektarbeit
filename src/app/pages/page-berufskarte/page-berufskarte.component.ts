import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-berufskarte',
  templateUrl: './page-berufskarte.component.html',
  styleUrls: ['./page-berufskarte.component.sass']
})
export class PageBerufskarteComponent implements OnInit {

  constructor() { }

  options: any;

  overlays: any[];

  ngOnInit() {
      this.options = {
          center: {lat: 36.890257, lng: 30.707417},
          zoom: 12
      };
  }
  
}
