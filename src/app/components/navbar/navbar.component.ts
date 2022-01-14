import { Component, OnInit } from '@angular/core';
import { LangService, lang } from "../../services/lang.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(public langservice: LangService) {
  }

  ngOnInit(): void { }
}
