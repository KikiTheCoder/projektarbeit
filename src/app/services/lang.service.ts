import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface lang { name: string; code: string; }


@Injectable({
  providedIn: 'root'
})
export class LangService {

  langs: lang[];

  selectedLang: lang;

  constructor(public translate: TranslateService) {
    this.langs = [{ name: "English", code: "en" }, { name: "Deutsch", code: "de" }, { name: "Română", code: "ro" }];
    this.selectedLang = { name: "Deutsch", code: "de" }
  }

  updateLang(lang: lang) {
    this.selectedLang = lang;

    this.translate.use(lang.code)
  }
}
