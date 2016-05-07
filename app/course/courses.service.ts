import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable'
@Injectable()
export class CoursesService {
  constructor(private	http:	Http)	{

  }
  public getCourses() {
    var url = "https://whsatku.github.io/skecourses/combined.json";
    return this.http.get(url).map(res => res.json()).toPromise();
  }

  public getCourse(){
    var url = "https://whsatku.github.io/skecourses/01219111.json"
    return this.http.get(url).map(res => res.json);
  }
}
