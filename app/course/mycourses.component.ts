import { Component, OnInit } from '@angular/core'
import { ROUTER_DIRECTIVES, Router, RouteParams } from'@angular/router-deprecated';

import { User } from '../login/user';
import { UserService } from '../login/user.service';

@Component({
  selector: "my-courses",
  templateUrl:"app/course/template/mycourses.component.html",
  directives: [ROUTER_DIRECTIVES]
})

export class MyCourses implements OnInit{
  user: User = new User();

  constructor(private userService: UserService, private router: Router){
      this.userService.getUser().then(user => {
        this.user = user;
      });
  }

  ngOnInit(){
    this.userService.getUser().then(user => this.user = user);
  }


}
