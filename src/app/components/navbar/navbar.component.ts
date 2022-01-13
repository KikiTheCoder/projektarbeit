import { Component, OnInit } from '@angular/core';
import { LangService } from "../../services/lang.service"

interface lang { name: string; code: string; }

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  langs: lang[];

  selectedLang: lang;

  constructor(public lang: LangService) {
    this.langs = lang.langs
  }

  ngOnInit(): void {
    this.selectedLang = this.lang.selectedLang
    console.log(this.selectedLang);

  }

  updateLang() {
    this.lang.updateLang(this.selectedLang)
  }

}
