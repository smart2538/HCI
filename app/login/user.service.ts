import { Injectable, Output, EventEmitter } from '@angular/core'
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { User } from './user';

@Injectable()
export class UserService{
  user = new User();
  url = "http://52.37.98.127:3000/v1/5610546290/";
  pin = "?pin=1234";
  http :Http;

  @Output() logIn = new EventEmitter();

  constructor(http: Http, private router : Router){
    this.http = http;
  }
  public isLogin() {
      this.getUser().then(data => {
        return data.isLogin;
      }
      );
  }

  public login(user: User){
    this.user.id = user.id;
    // localStorage.setItem('user', this.user.id);
    let _url = this.url + this.user.id + this.pin;
    this.getUser().then(user => {
      this.user = user;
      this.user.isLogin = true;
      let _user = {
        [user.id] : {
          'id' : user.id,
          'isLogin': user.isLogin,
          'courses': user.courses
        }
      }
      this.http.post(_url, JSON.stringify(_user));
      this.logIn.next({
            user: this.user
          });
      this.router.navigate(['Courses']);
    });

  }

  public logout(){
    this.getUser().then(user =>{
      this.user =user
      let _url = this.url + this.user.id +this.pin;
      this.user.isLogin = false;
      let _user = {
        [this.user.id] : {
          'name' : this.user.id,
          'isLogin': this.user.isLogin,
          'courses': this.user.courses
        }
      }
      this.http.post(_url, JSON.stringify(_user));
      this.logIn.next({isLogin: this.user.isLogin });
    });

  }

  public getUser(){
    let _url = this.url + this.user.id +this.pin;

    return this.http.get(_url).map(res => res.json()).toPromise();

  }
}
