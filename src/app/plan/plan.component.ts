import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  sportList = [
    { name: "今日步数", value: "15530 步" },
    { name: "今日路程", value: "7.5 公里" },
    { name: "持续天数", value: "42 天" },
    { name: "运动状态", value: "良 好" },
  ]
  dalaoList = [
    { name: '宇宙最帅四锅头', logo: "楼下的是真会装牛宝宝...", img: "siguotou.jpg" },
    { name: '齐天大圣雷布斯', logo: "Are you OK?", img: "leijun.jpg" },
    { name: '我不爱钱杰克马', logo: "当初不该办阿里.", img: "mayun.jpg" },
    { name: '不识妻美刘强东', logo: "我分不清谁漂亮不漂亮...", img: "liuqiangdong.jpg" },
    { name: '一无所有王健林', logo: "先定个小目标...", img: "wangjianlin.jpg" },
    { name: '普通家庭麻花腾', logo: "顶多是房子大了一点！", img: "mahuateng.jpg" },
    { name: '北大还行撒贝宁', logo: "考的大学还口以..", img: "sabeining.jpg" },
  ]
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      let options = {
        chart: {
          type: 'column',
          spacing: 40
        },
        title: {
          text: '朋友圈步数排名'
        },
        subtitle: {
          text: '数据来源: xiajbxie.com'
        },
        xAxis: {
          categories: [
            '我不爱钱杰克马',
            '普通家庭麻花腾',
            '一无所有王健林',
            '不识妻美刘强东',
            '齐天大圣雷布斯',
            '北大还行撒贝宁',
            '宇宙最帅四锅头'
          ],
          labels: {
            "font-size": "12px"
          },
        },
        yAxis: {
          min: 0,
          max: 18000,

          title: {
            text: '步 数',
          },
          labels: {
            format: '{value:.,0f}',
            "font-size": "12px"
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          column: {
            borderWidth: 0
          }
        },
        series: [{
          name: " ",
          data: [10500, 4680, 6033, 7550, 11200, 3500, 15530]
        }],
        credits: {
          enabled: false
        }
      }
      let sqlineOptions = {
        chart: {
          type: 'spline',
          spacing: [20, 40, 20, 40]
        },
        title: {
          text: '近十五天您的运动曲线'
        },
        subtitle: {
          text: '数据来源: xiajbxie.com'
        },
        xAxis: {
          categories: this.getRangeDate(-15, "more")
        },
        yAxis: {
          title: {
            text: '运 动 强 度'
          },
          min: 0,
          max: 3
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          spline: {
            marker: {
              enabled: false
            }
          }
        },
        series: [{
          name: " ",
          marker: {
            symbol: 'square'
          },
          data: [1.1, 1.3, 1.5, 2.2, 2, 1.7, 1.4, 1.3, 1.2, 2.5, 0.8, 1.4, 1.7, 2.2, 2.3]
        }],
        credits: {
          enabled: false
        }
      }
      // 图表初始化函数
      let chart = Highcharts.chart('walkChart', options);
      let sqchart = Highcharts.chart('sqline', sqlineOptions);

    });
  }

  /**
   * @param {number} range
   * @param {string} [type]
   * @memberOf VehicleOverviewComponent
   * @description 获取今天及前后天
   */
  getRangeDate(range: number, type?: string): string | string[] {

    const formatDate = (time: any) => {
      // 格式化日期，获取今天的日期
      const Dates = new Date(time);
      const year: number = Dates.getFullYear();
      const month: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
      const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
      return month + '-' + day;
    };

    const now = formatDate(new Date().getTime()); // 当前时间
    const resultArr: Array<any> = [];
    let changeDate: string|string[];
    if (range) {
      if (type) {
        if (type === 'one') {
          changeDate = formatDate(new Date().getTime() + (1000 * 3600 * 24 * range));

        }
        if (type === 'more') {
          if (range < 0) {
            for (let i = Math.abs(range); i >= 0; i--) {
              resultArr.push(formatDate(new Date().getTime() + (-1000 * 3600 * 24 * i)));
            }
          } else {
            for (let i = 1; i <= range; i++) {
              resultArr.push(formatDate(new Date().getTime() + (1000 * 3600 * 24 * i)));
            }
          }
          changeDate = resultArr;
        }
      } else {
        changeDate = formatDate(new Date().getTime() + (1000 * 3600 * 24 * range));
      }
    }
    return changeDate;
  }

}
