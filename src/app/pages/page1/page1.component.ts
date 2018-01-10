import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  animations: [
    trigger('card', [
     transition('void => *', [
        style({ transform: 'rotate3d(0, 1, 0, 90deg)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({ transform: 'rotate3d(0, 1, 0, 180deg)' }))
      ])
    ]),
    trigger('works', [
      transition('scroll => *', [
        style({ transform: 'translateY(100%)' }),
        animate(200)
      ]),
      transition('* => scroll', [
        animate(200, style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class Page1Component implements OnInit {
  scrolled : string
  constructor() { }

  ngOnInit() {
  }
  scroll(el) {
    el.scrollIntoView();
    this.scrolled = 'scroll';
}

}
