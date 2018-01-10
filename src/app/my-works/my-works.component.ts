import { Component, OnInit,trigger, state, style, transition, animate  } from '@angular/core';
import { myWorksdataService } from '../factory/myWorksdataService';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery/dist/jquery.min.js';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])  
  ]
})
export class MyWorksComponent implements OnInit {
  myWorksdata: any;
  current: number;
  state: string ; 
  // md : any;
  constructor(private myWorksdataService: myWorksdataService) {
    //     this.myWorksdata = [];
    // this.md ={
    //  "title" : "Airnbnb with React",
    //   "image" : "/assets/img/memoryGame.png",
    //    "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, culpa praesentium maiores deleniti eum architecto quae obcaecati, sed autem expedita modi perferendis "
    // }
    // this.myWorksdataService.setData(this.md)
    this.current = 0;
    this.state = 'inactive';
  }
  toggleFlip(item) {
    if(item.state == undefined){
        item.state = 'active';
        return
    }
    console.log(item.state)
    event.preventDefault();
    event.stopPropagation();
    item.state = (item.state == 'inactive') ? 'active' : 'inactive';
  }
  goToHref(item){
    event.preventDefault();
    event.stopPropagation();
    item.href= item.link;
    window.open(item.link, '_blank');
  }
  ngOnInit() {
    this.myWorksdataService.getData().subscribe((myWorksdata) => {
      this.myWorksdata = myWorksdata;
    });
  }
}
