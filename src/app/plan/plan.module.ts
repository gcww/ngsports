import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRoutes } from './plan-routing';
import { PlanComponent } from './plan.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(PlanRoutes)
  ],
  declarations: [PlanComponent]
})
export class PlanModule { }
