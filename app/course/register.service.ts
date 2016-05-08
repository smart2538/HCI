import { Injectable } from '@angular/core'
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {
  url = "htttps://52.37.98.127:3000/v1/5610546290?pin=1234"
  http : Http
  constructor(_http: Http){
    this.http = _http;
  }

  public getYourCourses(){
    return this.http.get(this.url).map(res => res.json());
  }

  public regisCourse(){
    // if(localStorage.getItem('user')){
    //   let body = JSON.stringify({localStorage.get('userID')});
    //   this.http.post(url, )
    // }
  }
}
