import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../pojo/const';

@Injectable()
export class UsernameCheckService {

  constructor(private http:HttpClient) { }

  checkUsername(username:string){
    return this.http.get(`${url}/api/checkUsername/${username}`);
  }
}
