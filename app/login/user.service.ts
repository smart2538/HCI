import { Injectable } from '@angular/core'
import { User } from './user';
export class UserService{

  constructor(){
  }

  public isLogin() {
      return localStorage.getItem('user') != null;
  }

  public login(user){
    localStorage.setItem('user', user.id);
  }

  public logout(){
    localStorage.removeItem('user');
  }
}
