import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthyComponent } from './healthy.component';
import { HealthyRoutes } from './healthy-routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommentService } from './add-comment/comment.service';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { HealthyListComponent } from './healthy-list/healthy-list.component';
import { PictureComponent } from '../picture/picture.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(HealthyRoutes),
  ],
  providers: [CommentService],
  exports: [PictureComponent],
  declarations: [HealthyComponent, AddCommentComponent, HealthyListComponent, PictureComponent]
})
export class HealthyModule { }
