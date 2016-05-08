import { Component, OnInit } from '@angular/core'
import { Course  } from './course';
import {Router, RouteParams} from'@angular/router-deprecated';
import { CoursesService } from './courses.service';
@Component({
  selector: "course-detail",
  templateUrl: "app/course/template/course.component.html",
  providers:[CoursesService]
})


export class CourseDetailComponent implements OnInit{
  course;
  param : RouteParams;
  courseService : CoursesService;
  courseID;

  constructor(param :RouteParams, _coursesService: CoursesService){
    this.param = param;
    this.courseID = this.param.get('id');
    this.courseService = _coursesService;
  }
  ngOnInit(){
    this.getCourse();
    this.getSections();
  }

  private getCourse(){
    this.courseService.getCourse(this.courseID).subscribe(course =>{
      this.course = course;
    });
  }
  private getSections(){
    this.courseService.getSections(this.courseID).subscribe(sections =>{
      console.log(sections);
      this.course.sections = sections;
    });
  }
}
