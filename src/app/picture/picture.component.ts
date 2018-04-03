import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NameService } from '../service/home.service';
import { SportEvent } from '../pojo/SportEvent';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  @Input()
  goods: SportEvent;
  @Input()
  index:number;
  constructor(private NameService: NameService,private router:Router) { }

  ngOnInit() {
  }

  toHealthy(goods: SportEvent) {
    //这是在html中绑定的click跳转事件
    this.router.navigate(['/healthy/introduce'], {
      queryParams: {
        id: goods.id,
        name: goods.name
      }
    });
  }
}
