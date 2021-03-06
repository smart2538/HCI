import {bootstrap}    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http'

import { UserService } from './login/user.service';
import { CoursesService } from './course/courses.service';
import { RegisterService } from './course/register.service';

import {AppComponent} from './app.component';


bootstrap(AppComponent, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS, UserService, CoursesService,
]);
