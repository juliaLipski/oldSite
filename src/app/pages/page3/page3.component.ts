import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  moduleId: module.id,
  selector: 'app-page3',
  templateUrl: 'page3.component.html',
  styleUrls: ['page3.component.css'],
  animations: [
    trigger('card', [
    transition('void => *', [
        style({ transform: 'rotate3d(0, 1, 0, 90deg)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({ transform: 'rotate3d(0, 1, 0, 180deg)' }))
      ])
    ])
  ]
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
