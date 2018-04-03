import { Component, OnInit } from '@angular/core';
import { NameService } from '../../service/home.service';
import { SportEvent } from '../../pojo/SportEvent';

@Component({
  selector: 'app-healthy-list',
  templateUrl: './healthy-list.component.html',
  styleUrls: ['./healthy-list.component.scss']
})
export class HealthyListComponent implements OnInit {
  goodsList: SportEvent[];
  showSearch: boolean = false;
  inputValue: string;



  /** init data */
  _options: any[];

  _value: any[];

  _console(value) {
    console.log(value);
  }
  constructor(private NameService: NameService) { }

  ngOnInit() {
    this.NameService.getHomeInfoList().subscribe((data: SportEvent[]) => { this.goodsList = data; console.log(data); });

    const options = [{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
          isLeaf: true
        }],
      }, {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
          isLeaf: true
        }],
      }],
    }];
    this._options = options
  }
  search() {
    this.showSearch = !this.showSearch;
  }

}
