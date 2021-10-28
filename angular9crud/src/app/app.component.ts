import { Component } from '@angular/core';
import { SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
}
from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9crud';
  constructor(
    private LoadingBar : SlimLoadingBarService,
    private router : Router
  )
  {
    this.router.events.subscribe((event: Event )=>{
     this.navigationInterceptor(event);
    });   
  }
  private navigationInterceptor(event: Event):void
  {
    if(event instanceof NavigationStart)
    {
      this.LoadingBar.start();

    }
    if(event instanceof NavigationCancel)
    {
      this.LoadingBar.stop();

    }
    if(event instanceof NavigationEnd)
    {
      this.LoadingBar.complete();

    }
    if(event instanceof NavigationError)
    {
      this.LoadingBar.stop();

    }
  }

}
