import {Component} from '@angular/core';
import {NavbarComponent} from './share/navbar.component';
import {LoginComponent} from './login/login.component';

import { RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@RouteConfig([
  {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})

export class AppComponent { }
