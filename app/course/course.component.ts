import { Component, OnInit, Input } from '@angular/core'
import { Router, RouteParams } from'@angular/router-deprecated';

import { Course  } from './course';
import { User } from '../login/user';

import { CoursesService } from './courses.service';
import { UserService } from '../login/user.service';
import { RegisterService } from './register.service';

@Component({
  selector: "course-detail",
  templateUrl: "app/course/template/course.component.html",
  providers:[CoursesService, RegisterService]
})

export class CourseDetailComponent implements OnInit{
  course;
  courseID;
  sections;
  @Input() isEnroll;
  user : User;
  userService: UserService;
  register: RegisterService;
  param : RouteParams;
  courseService : CoursesService;
  constructor(param :RouteParams, coursesService: CoursesService, userService: UserService, register: RegisterService){
    this.param = param;
    this.courseID = this.param.get('id');
    this.courseService = coursesService;
    this.userService = userService;
    this.register = register;
    this.isEnroll = false;
  }
  ngOnInit(){
    this.getCourse();
    this.getSections();
    this.checkEnroll();
  }
  checkEnroll(){
    console.log(this.isEnroll);
    this.userService.getUser().then(user =>{
      this.user = user;
      if(this.user.courses.find(res => res.id == this.courseID ) ){

        this.isEnroll = true;
      }else{
        this.isEnroll = false;
      }
    });

  }

  private getCourse(){
    this.courseService.getCourse(this.courseID).subscribe(course =>{
      this.course = course;
    });
  }
  private getSections(){
    this.courseService.getSections(this.courseID).subscribe(sections =>{
      this.sections = sections;
    });
  }
  private enroll(secID){
    if(!this.isEnroll){
      this.course.section = this.sections.find(res=> res.id == secID);
      this.register.regisCourse(this.course);
      this.isEnroll = true;
    }
  }
}
