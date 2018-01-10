import { googleChartsBaseService } from './googleChartsBaseService';
import { Injectable } from '@angular/core';
import { pieChartConfig } from '../models/pieChartConfig';

declare var google: any;

@Injectable()
export class googlePieChartService extends googleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: string, data: any[], config: pieChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.ColumnChart(document.getElementById(elementId)); };
    var options = {
            title: config.title,
            pieHole: config.pieHole,
            is3D: config.is3D
      };

    this.buildChart(data, chartFunc, options);
  }
}