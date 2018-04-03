import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { url } from '../pojo/const';
@Injectable()
export class NameService {
    constructor(private http: HttpClient) {
      
    }
    /**
     * getHomeInfoList
     */
    public getHomeInfoList() {
        return this.http.get(`${url}/api/sporteventList`);
    }
}