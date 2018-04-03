import { Component, OnInit } from '@angular/core';
import { NameService } from '../service/home.service';
import { Observable } from 'rxjs/Observable';
import { SportEvent } from '../pojo/SportEvent';
import { Router } from '@angular/router';
@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  array: number[] = [1];
  rates: number[];
  goodsList: SportEvent[];
  constructor(private NameService: NameService,private router:Router) { }

  ngOnInit() {
    setTimeout(_ => {
      this.array = [1, 2, 3, 4];
    }, 500);
    this.NameService.getHomeInfoList().subscribe((data: SportEvent[]) => { this.goodsList = data; console.log("我是远程http回掉",data); });
   setTimeout(() => {
    console.log("我是timeout");
   });
  }

  toHealthy(goods: SportEvent) {
    //这是在html中绑定的click跳转事件
    this.router.navigate(['/healthy'], {
      queryParams: {
        id: goods.id,
        name: goods.name
      }
    });
  }

}


