import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface lang { name: string; code: string; }

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  langs: lang[];

  selectedLang: lang;

  constructor(public translate: TranslateService) {
    this.langs = [{ name: "English", code: "en" }, { name: "Deutsch", code: "de" }, { name: "Română", code: "ro" }];
  }

  updateLang() {
    this.translate.use(this.selectedLang.code)

  }

  ngOnInit(): void {
  }

}
