import { Component, OnInit, ElementRef } from '@angular/core'
import { ROUTER_DIRECTIVES, Router, RouteParams } from'@angular/router-deprecated';

import { User } from '../login/user';
import { UserService } from '../login/user.service';
declare var jQuery:any;
@Component({
  selector: "my-courses",
  templateUrl:"app/course/template/mycourses.component.html",
  directives: [ROUTER_DIRECTIVES]
})

export class MyCourses implements OnInit{
  user: User = new User();
  modal;
  json;
  isLoading = false;
  constructor(private userService: UserService, private router: Router, private elementRef: ElementRef){

  }

  ngOnInit(){
    this.isLoading = true;
    this.userService.getUser().then(user => {
      this.user = user;
      this.isLoading = false;
    });
    this.modal = jQuery(this.elementRef.nativeElement).find('.mymodal')
  }

  showModal(){
      this.modal.modal('show');
      this.json=JSON.stringify(this.user.courses);
  }


}
