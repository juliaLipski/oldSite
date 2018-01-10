import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { myWorksdataService } from '../factory/myWorksdataService';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
  animations: [
  ]
})
export class CaruselComponent implements OnInit {
  myWorksdata: any;
  current: number;
 
  constructor(private myWorksdataService: myWorksdataService) {
    this.myWorksdataService.getData().subscribe((myWorksdata) => {
      this.myWorksdata = myWorksdata
    });
    this.current = 0;
  }

  moveToNext(ev): any {
    ev.preventDefault();
   this.current += 60
    this.setStyle();
  }
  moveToPrev(ev): any {
    ev.preventDefault();
    this.current -= 60
    this.setStyle();
  }

  private setStyle() {
    var currdeg = this.current;
    console.log(this.current)
    $('.carousel').css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      "transform": "rotateY(" + currdeg + "deg)"
    });
}
  ngOnInit() {
  }

}
