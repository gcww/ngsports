import { url } from './../../pojo/const';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentJava } from '../../pojo/CommentJava';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  selectCommentListBySporteventid(seId: string) {
    return this.http.get(`${url}/api/selectCommentListBySporteventid/${seId}`);
  }

  insertComment(comment: CommentJava) {
    return this.http.post(`${url}/api/insertComment`, comment);
  }

}
