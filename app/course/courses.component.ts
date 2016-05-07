import { Component, Provider, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { CourseDetailComponent } from './course.component';
import { Observable } from 'rxjs/Observable'
import { TruncatePipe } from '../share/truncate';
@Component({
  selector: "courses-page",
  templateUrl: "/app/course/template/courses.component.html",
  directives: [CourseDetailComponent],
  providers:[CoursesService ],
  pipes: [TruncatePipe]
})


export class CoursesComponent implements OnInit {
  courses = [];
  _courses = [];
  constructor(private coursesService: CoursesService){}
  ngOnInit()	{
    this.getCourses();
  }
  private reloadCourses(filter?){
    if(filter){
      this.courses = []
      for(var x in this._courses){
        if((this._courses[x].id).indexOf(filter.courseID) > -1 || (this._courses[x].name.en).toLowerCase().indexOf(filter.courseID.toLowerCase()) > -1){
          this.courses.push(this._courses[x]);
        }
      }
    }
  }
  private  getCourses(){
    this.coursesService.getCourses()
      .then(courses => {
        for(var course in courses){
            this._courses.push(courses[course])
        }
        this.courses = this._courses.slice();
    });

  }
}
