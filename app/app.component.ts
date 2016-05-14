import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { NavbarComponent } from './share/navbar.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './course/courses.component';
import { CourseDetailComponent } from './course/course.component';

import {TruncatePipe} from './share/truncate';

import {UserService} from './login/user.service';

@RouteConfig([
  {path: '/login', name: 'Login', component: LoginComponent, },
  {path: '/courses', name: "Courses", component: CoursesComponent, useAsDefault: true },
  {path: '/course/:id', name: 'CourseDetail', component: CourseDetailComponent, }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    providers: [Http, HTTP_PROVIDERS],
    pipes: [TruncatePipe]
})

export class AppComponent implements OnInit {
  router : Router;
  userService : UserService;
  constructor(router: Router, userService: UserService){
    this.router = router;
    this.userService = userService;
  }

  ngOnInit(){
    if(!this.userService.isLogin()){
      this.router.navigate(['Login']);
    }
  }

 }
