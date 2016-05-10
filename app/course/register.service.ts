import { Injectable } from '@angular/core'
import { HTTP_PROVIDERS, Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../login/user';
import { UserService } from '../login/user.service';
@Injectable()
export class RegisterService {
  url = "http://52.37.98.127:3000/v1/5610546290?pin=1234"
  http : Http
  userService : UserService;
  constructor(_http: Http, userService: UserService){
    this.http = _http;
    this.userService = userService;
}
  public withdrawCourse(course, sec){
    let user : User;
    return this.userService.getUser().then(userr => {
      user = userr;
      let userCourse = user.courses.find(_course => _course.id == course.id);
      console.log(userCourse);
      let newSec = []
      if(userCourse.section.length > 1 ){
        userCourse.section = userCourse.section.filter(_section => !(sec.id == _section.id && sec.type ==_section.type))

      }else if(userCourse.section.length == 1 ){
        user.courses = user.courses.filter(_course => _course.id != course.id);
      }

      let userJson = {
        [user.id] : {
          "id" : user.id,
          "isLogin": user.isLogin,
          "courses": user.courses
        }
      }

      let headers = new Headers({ 'Content-Type': 'application/json' });
  		let options = new RequestOptions({ headers: headers });

      return this.http.post(this.url, JSON.stringify(userJson), options).map(res => res.json()).toPromise();
    });
  }


  public regisCourse(course, sec){
    let user : User;
    return this.userService.getUser().then(userr => {
      user = userr;
      if(user.courses.find(_course => _course.id == course.id)){
        user.courses.find(_course => _course.id == course.id).section.push(sec);
      }else{
        course.section = [];
        course.section.push(sec);
        user.courses.push(course);
      }
      let userJson = {
        [user.id] : {
          "id" : user.id,
          "isLogin": user.isLogin,
          "courses": user.courses
        }
      }

      let headers = new Headers({ 'Content-Type': 'application/json' });
  		let options = new RequestOptions({ headers: headers });

      return this.http.post(this.url, JSON.stringify(userJson), options).map(res => res.json()).toPromise();
    });

  }
}
