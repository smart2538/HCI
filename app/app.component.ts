import { Component } from '@angular/core';
import { NavbarComponent } from './share/navbar.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './course/courses.component';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import {TruncatePipe} from './share/truncate';

@RouteConfig([
  {path: '/login', name: 'Login', component: LoginComponent, },
  {path: '/courses', name: "Courses", component: CoursesComponent, useAsDefault: true }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    providers: [Http, HTTP_PROVIDERS],
    pipes: [TruncatePipe]
})

export class AppComponent { }
