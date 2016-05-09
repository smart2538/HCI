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


  public regisCourse(course){
    let user : User;
    this.userService.getUser().then(userr => {
      user = userr;
      user.courses.push(course);
      console.log(course);
      console.log(user.courses);
      let userJson = {
        [user.id] : {
          "id" : user.id,
          "isLogin": user.isLogin,
          "courses": user.courses
        }
      }

      let headers = new Headers({ 'Content-Type': 'application/json' });
  		let options = new RequestOptions({ headers: headers });

      console.log(JSON.stringify(userJson));
      return this.http.post(this.url, JSON.stringify(userJson), options).toPromise().then(res => {
        res.json();
        console.log(res.status);
      });
    });

  }
}
