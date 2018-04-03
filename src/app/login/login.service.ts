import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../pojo/user';
import { url } from '../pojo/const';

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user:User){
    return  this.http.post(`${url}/api/loginCheck`, user);
  }
}
