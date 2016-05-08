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

  public getCourse(param){
    var url = "https://whsatku.github.io/skecourses/"+ param +".json";
    return this.http.get(url).map(res => res.json());
  }

  public getSections(param){
    var url = "https://whsatku.github.io/skecourses/sections/"+ param +".json";
    return this.http.get(url).map(res => res.json());
  }
}
