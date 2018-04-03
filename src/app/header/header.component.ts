import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HeaderLoginService } from "../service/header-login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLoginCheck: boolean;
  username: string;
  isVisible: boolean = false;
  constructor(private headerLoginService: HeaderLoginService, private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem("username") && localStorage.getItem("autoLogin")) {
      this.username = localStorage.getItem("username");
      this.userLoginCheck = false;
    } else {
      this.userLoginCheck = true;
      this.username = "";
    }
    this.headerLoginService.eventBus.subscribe((value) => {
      if (value) {
        this.username = value;
        this.userLoginCheck = false;
        this.router.navigate(["/home"]);
      }
    });
  }

  logout() {
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.userLoginCheck = true;
    this.username = "";
    localStorage.removeItem("username");
    this.router.navigate(["/home"]);
    this.isVisible = false;
  }

  handleCancel = (e) => {

    this.isVisible = false;
  }

}
