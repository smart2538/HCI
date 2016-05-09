import { Component, Provider, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { LoginComponent } from '../login/login.component';
import { UserService } from '../login/user.service';
import { User } from '../login/user';

declare var jQuery:any;
@Component({
  selector: "navbar",
  templateUrl: "app/share/template/navbar.component.html",
  directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent implements OnInit, AfterViewInit{
  isLogin: boolean;
  router: Router;
  userService: UserService;
  user: User;
  elementRef: ElementRef;
  constructor(private _router: Router, userService: UserService, elementRef: ElementRef){
    this.router = _router;
    this.userService = userService;
    this.elementRef = elementRef;
  }

  ngOnInit(){
    this.userService.logIn.subscribe(user => {
      this.user = user.user;
      this.isLogin = this.user.isLogin;
    });
  }
  ngAfterViewInit(){
  }
  isCurrentRoute(route){
    var instruction = this.router.generate(route);
    return this._router.isRouteActive(instruction);
  }
  checkStatus(){
    this.isLogin = this.userService.isLogin();
  }
}
