import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { UsernameCheckService } from './username-check.service';
import { RegisterRoutes } from './register-routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    RouterModule.forChild(RegisterRoutes),
  ],
  providers:[RegisterService,UsernameCheckService],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
