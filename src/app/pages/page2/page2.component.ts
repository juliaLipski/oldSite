import { Component, OnInit } from '@angular/core';
import { DoughnutChartComponent, BarChartComponent } from 'angular-d3-charts';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare let d3: any;
declare let $: any;
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  
})
export class Page2Component implements OnInit {
public colors = ['red', 'green', 'blue']
  constructor() { }

  ngOnInit() {
  }

}
