import { Component, OnInit} from '@angular/core';
import { Router, NavigationStart,NavigationEnd} from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { PageScrollConfig } from 'ng2-page-scroll';
import { $ } from 'protractor';
import { ModalFunctions } from './common/modal-functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RUC';

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private router: Router, private location: Location, public modal: ModalFunctions){}
  ngOnInit(){
    PageScrollConfig.defaultScrollOffset = 80;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
          // easeInOutExpo easing
          if (t === 0) return b;
          if (t === d) return b + c;
          if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
  };
    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
  });
  this.router.events.subscribe((ev:any) => {
      if (ev instanceof NavigationStart) {
          if (ev.url != this.lastPoppedUrl)
              this.yScrollStack.push(window.scrollY);
      } else if (ev instanceof NavigationEnd) {
          if (ev.url == this.lastPoppedUrl) {
              this.lastPoppedUrl = undefined;
              window.scrollTo(0, this.yScrollStack.pop());
          } else
              window.scrollTo(0, 0);
      }
  });

  }
}
