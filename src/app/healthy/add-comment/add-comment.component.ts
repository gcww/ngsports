import { CommentJava } from './../../pojo/CommentJava';
import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  inputValue: string;
  commont: CommentJava[] = [];
  isShowComment: boolean;
  @Input()
  kindId: string;
  constructor(private commentService: CommentService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("username")) {
      this.isShowComment = true;
    } else {
      this.isShowComment = false;
    }
    this.commentService.selectCommentListBySporteventid(this.kindId).subscribe((result: CommentJava[]) => this.commont = result);

  }

  addComment() {
    let commentJava = new CommentJava("", this.kindId, localStorage.getItem("username"), this.inputValue, new Date(), "");
    this.commentService.insertComment(commentJava).subscribe((result) => {
      this.inputValue = "";
      this.commentService.selectCommentListBySporteventid(this.kindId).subscribe((result: CommentJava[]) => this.commont = result);
    });
  }

}
