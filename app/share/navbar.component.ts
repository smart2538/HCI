import { Component, Provider, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { LoginComponent } from '../login/login.component';
import { UserService } from '../login/user.service';
import { User } from '../login/user';

@Component({
  selector: "navbar",
  templateUrl: "app/share/template/navbar.component.html",
  directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent implements OnInit{
  isLogin: boolean;
  router: Router;
  userService: UserService;
  user: User;
  constructor(private _router: Router, userService: UserService){
    this.router = _router;
    this.userService = userService;
  }

  ngOnInit(){
    this.userService.logIn.subscribe(user => {
      console.log(user.user);
      this.user = user.user;
      this.isLogin = this.user.isLogin;
    });
  }

  isCurrentRoute(route){
    var instruction = this.router.generate(route);
    return this._router.isRouteActive(instruction);
  }
  checkStatus(){
    console.log("check");
    this.isLogin = this.userService.isLogin();
  }
}
