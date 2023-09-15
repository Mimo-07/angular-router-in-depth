import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from './loading.service';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input()
  routing: boolean = false;

  @Input()
  detectRoutingOngoing: boolean = false;

  constructor(public loadingService: LoadingService,
    private router: Router) {

  }

  ngOnInit() {

    if(this.detectRoutingOngoing){
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationStart || e instanceof RouteConfigLoadStart)
        this.loadingService.loadingOn();
      else if( e instanceof NavigationEnd || e instanceof NavigationError || e instanceof NavigationCancel || e instanceof RouteConfigLoadEnd)
        this.loadingService.loadingOff();
    });

    }
  }


}
