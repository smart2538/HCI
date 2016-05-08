import { Injectable, Output, EventEmitter } from '@angular/core'
import { User } from './user';
@Injectable()
export class UserService{
  user = new User();
  @Output() logIn = new EventEmitter();
  public isLogin() {
      return this.user.isLogin;
  }

  public login(user: User){
    this.user = user;
    this.user.isLogin = true;
    this.logIn.next({
          user: this.user
        });
  }

  public logout(){
    this.user = new User();
    this.logIn.next({isLogin: this.user.isLogin });
  }

  public getUser(){
    return this.user;
  }
}
