import { Component, Provider, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { UserService } from './user.service';

@Component({
  selector: "login-page",
  templateUrl: "/app/login/template/login.component.html",
  providers: [UserService]
})

export class LoginComponent implements OnInit{
  userService : UserService;
  router : Router
  constructor( userService: UserService, router: Router){
    this.userService = userService;
    this.router = router;
  }
  ngOnInit(){
    if(this.userService.isLogin()){
      this.router.navigate(['Courses']);
    }
  }
  onSubmit(form){
    this.userService.login(form.value);
    if(this.userService.isLogin()){
      this.router.navigate(['Courses']);
    }
  }
}
