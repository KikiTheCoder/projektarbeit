import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


import { gsap } from 'gsap';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.sass']
})
export class PageHomeComponent implements OnInit {

  langs: { name: string; code: string; }[];

  selectedLang: string = "en";

    constructor(public translate: TranslateService) {
        this.langs = [{name: "English", code: "en"}, {name: "Deutsch", code: "de"}];
    }

  ngOnInit(): void {

  }

}
