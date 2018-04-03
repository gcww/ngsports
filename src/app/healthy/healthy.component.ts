import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-healthy',
  templateUrl: './healthy.component.html',
  styleUrls: ['./healthy.component.scss']
})
export class HealthyComponent implements OnInit {


  kindId: string = "";
  name: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.kindId = queryParams.id;
      this.name = queryParams.name;
      console.log(this.kindId);
    });
  }

}
