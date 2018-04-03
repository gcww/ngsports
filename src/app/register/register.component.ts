
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft } from 'ng-animate';
import { emailValidator, birthDayValidator, phoneCheck } from '../formcheck/formCheck.util';

import { User } from '../pojo/user';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

import "rxjs/Rx";
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { UsernameCheckService } from './username-check.service';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft, {
      params: {
        timing: .2,
      }
    }))])
  ],
})
export class RegisterComponent implements OnInit {
  slideInLeft: number;
  validateForm: FormGroup;
  usernameasynccheck: Subject<any> = new Subject<any>();
  constructor(private router: Router, private fb: FormBuilder, private usernameCheckService: UsernameCheckService, private registerService: RegisterService, private _message: NzMessageService, private confirmServ: NzModalService) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      phone: ['', [Validators.required, phoneCheck]],
      email: ['', [emailValidator]],
      birthDay: ['', [birthDayValidator]],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required, this.passwordConfirmationValidator]]
    })
  }



  submitForm = ($event, value) => {
    $event.preventDefault();
    if (this.validateForm.valid) {
      // for (const key in this.validateForm.controls) {
      //   this.validateForm.controls[key].markAsDirty();
      // }
      let user = new User(
        this.validateForm.controls["userName"].value,
        this.validateForm.controls["password"].value,
        this.validateForm.controls["phone"].value,
        this.validateForm.controls["birthDay"].value,
        this.validateForm.controls["email"].value);
      this.registerService.register(user).subscribe((result: any) => {
        if (result.result === "success") {
          this.confirmServ.success({
            title: '注册成功提示',
            content: '恭喜您成功入坑,点击确认跳转至登陆页面！',
            okText: "确认",
            maskClosable: false,
            onOk: this.navigateToLogin
          });

        } else {
          this.validateForm.get("userName").reset();
          this._message.error(`注册失败，您的昵称刚刚被狗起了呢~请换一个吧！`, { nzDuration: 3000 });
          document.getElementById("username").focus();
        }
      });
    }
  };

  /**跳转至登陆页面 */
  navigateToLogin() {
    document.getElementById("navigateToLogin").click();
  }


  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }

  validateConfirmPassword() {
    setTimeout(_ => {
      this.validateForm.controls['passwordConfirmation'].updateValueAndValidity();
    })
  }

  userNameAsyncValidator = (control: FormControl): Observable<any> => {

    return this.usernameCheckService.checkUsername(control.value);

  };

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
  };







  ngOnInit() {

  }

}
