import { Component, OnInit, Input } from '@angular/core';
import { googlePieChartService } from './../factory/googlePieChartService';
import { pieChartConfig } from './../models/pieChartConfig';
import { aboutMeService } from '../factory/aboutMeService';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare var google: any;
@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css'],
  animations: [
    trigger('chart', [
      transition('void => *', [
        style({ transform: 'translateX(300%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ColumnChartComponent implements OnInit {
  data: any[];
  config: pieChartConfig;
  elementId: string;

  constructor(private _pieChartService: googlePieChartService, private aboutMeService: aboutMeService) {

  }

  ngOnInit(): void {
    this.aboutMeService.getData()
      .subscribe(res => {
        this.data = res[0].frontend;
        this.config = new pieChartConfig('frontend ', 0.5, false);
        this.elementId = 'myPieChart1';
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
      })
  }

}
