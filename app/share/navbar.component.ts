import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: "navbar",
  templateUrl: "app/share/template/navbar.component.html",
  directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent{
  isLogin = true;
  constructor(private _router: Router){

    }

    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
}
