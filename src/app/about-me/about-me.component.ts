import { Component, OnInit, Input } from '@angular/core'
import { aboutMeService } from '../factory/aboutMeService';
import { googlePieChartService } from './../factory/googlePieChartService';
import { pieChartConfig } from './../models/pieChartConfig';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare var google: any;
import { Knowledge } from '../models/knowledge';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('content', [
      transition('void => *', [
        style({ transform: 'translateX(200%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('content1', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(600)
      ]),
      transition('* => void', [
        animate(600, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class AboutMeComponent implements OnInit {
  backendAndDb: any;
  anotherSkills: any;
  content1: any;
  content2: any;
  constructor(private aboutMeService: aboutMeService, private _pieChartService: googlePieChartService) {
       
    //       this.kn = {
    //         title: "Memory Game with React",
    //         content1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, culpa praesentium maiores deleniti eum architecto quae obcaecati, sed autem expedita modi perferendis ",
    //         content2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, culpa praesentium maiores deleniti eum architecto quae obcaecati, sed autem expedita modi perferendis ",
    //         frontend: [['Task', '% '],
    //                 ["Angular js(1.3)", 30],
    //                 ["Angular js(1.58)", 78],
    //                 ["React js", 71],
    //                 ["JQery", 76],
    //                 ["Angular 4", 69]],
    //         backendAndDb: ['Node JS', 'Mongo Db', 'MySQL'],
    //         anotherSkills: ['Git', 'Webpack', 'LESS', 'Bootstrap']
    // }
    //     this.aboutMeService.setData(this.kn)
  }

  ngOnInit(): void {
    this.aboutMeService.getData()
      .subscribe(res => {
        this.content1 = res[0].content1;
        this.content2 = res[0].content2;
        this.backendAndDb = res[0].backendAndDb;
        this.anotherSkills = res[0].anotherSkills;
      })
  }

}
