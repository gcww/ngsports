import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-author-introduce',
    templateUrl: './author-introduce.component.html',
    styleUrls: ['./author-introduce.component.scss']
})
export class AuthorIntroduceComponent implements OnInit {
    markdown:number = 1;
    rgs:string;
    rgsFlag:boolean = false;
    constructor() { }

    gridStyle = {
        width: '33.33%'
    };

    skills: string[] = [
        "1. 2年以上Web前端开发经验;",
        "2. 掌握HTML5、CSS3、ES6等前端技术;",
        "3. 熟悉angular2+ , angularjs1.x等前端js框架;",
        "4. 掌握sass等CSS扩展语言基础知识;",
        "5. 了解前端自动化工具gulp等基础知识;",
        "4. 熟练使用SVN git 等版本管理工具;",
        "5. 熟悉div+css布局",
        "6. 熟悉前后端通信技术 Ajax JSONP CORS 等;",
        "7. 有服务端基础,熟悉Java Web;",
        "8. 掌握springboot spring mybatis等后端框架技术;"
    ];

    ngOnInit() {
        setTimeout(() => {
            var options = {
                chart: {
                    polar: true,
                    type: 'line',
                },
                title: {
                    text: '综合实力评价',
                    
                },
                pane: {
                    size: '80%'
                },
                xAxis: {
                    categories: ['JavaScript', 'CSS', 'HTML', 'HTTP',
                        'JAVA', 'Angular'],
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },
                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0,
                    max: 5
                },
                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
                },
                legend: {
                    // align: 'right',
                    // verticalAlign: 'top',
                    // y: 70,
                    // layout: 'vertical'
                    enabled:false
                },
                series: [{
                    name: '战斗力',
                    data: [4.3, 2.9, 4, 3.5, 5, 5],
                    pointPlacement: 'on'
                }]
            };
            // 图表初始化函数
            var chart = Highcharts.chart('container', options);
        });
    }

    changeMD(result:number){
        this.markdown = result;
    }

    rgsClick(){
        if(this.rgs.toLowerCase() == "rgs"){
            this.rgsFlag = true;
        }
    }

}
