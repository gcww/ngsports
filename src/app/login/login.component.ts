import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { slideInLeft } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import { NzModalService, NzNotificationService, NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { User } from '../pojo/user';
import { HeaderLoginService } from '../service/header-login.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft, {
      params: {
        timing: .2,
      }
    }))])
  ],
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  slideInLeft: number;
  abccd: string;
  _submitForm($event) {
    $event.preventDefault();
    if (this.validateForm.valid) {
      let user = new User(
        this.validateForm.controls["userName"].value,
        this.validateForm.controls["password"].value,
        "", new Date(), "");
      this.loginService.login(user).subscribe((result: any) => {
        if (result.result === "success") {
          localStorage.setItem("username", this.validateForm.controls["userName"].value);
          this.headerLoginService.eventBus.next(this.validateForm.controls["userName"].value);
        } else {
          this.validateForm.reset();
          this._message.create("error", `账号或密码不正确！`);
        }
      })
    }
  };


  constructor(private fb: FormBuilder, private confirmServ: NzModalService, private loginService: LoginService,private headerLoginService:HeaderLoginService,private _message: NzMessageService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
    
    localStorage.setItem("autoLogin",this.validateForm.controls['remember'].value);
    this.validateForm.controls['remember'].valueChanges.subscribe( (remember) => {
        if(remember){
          localStorage.setItem("autoLogin",remember);
        }else{
          localStorage.removeItem("autoLogin");
        }
    });
    
  }



  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  info(contentTpl) {
    this.confirmServ.info({
      title: '密码找回方案',
      content: contentTpl,
      okText: "现在就吃!"
    });
  }

}
