import { Component, Directive } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {
    '(window:scroll)': 'onWindowScroll($event)'
  },
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  public hidden: boolean = true;

  constructor() { }

  @HostListener("window:scroll", [])
  public onWindowScroll(event: Event): void {
    console.log(this.hidden);
    window.pageYOffset > 800 ? this.hidden = false : this.hidden = true
  }

  scroll(el) {
    el.scrollIntoView();
    // el.preventDefault();
    // el.stopPropagation();
  }
}
