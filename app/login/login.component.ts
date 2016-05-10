import { Component, Provider, OnInit, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: "login-page",
  templateUrl: "/app/login/template/login.component.html"
})

export class LoginComponent implements OnInit{
  isLoading = false;
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
    this.isLoading = true;
    let user = new User();
    user.id = form.value.userID;
    this.userService.login(user);
  }
}
