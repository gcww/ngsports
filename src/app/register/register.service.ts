import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../pojo/user';
import { url } from '../pojo/const';

@Injectable()
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(user:User){

   return  this.http.post(`${url}/api/insertUser`, user);
      
  }

}
