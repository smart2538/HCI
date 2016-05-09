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
  providers: [ RegisterService]
})

export class CourseDetailComponent implements OnInit{
  course;
  courseID;
  sections;
  @Input() isEnroll;
  user : User;
  constructor(
              private param :RouteParams,
              private coursesService: CoursesService,
              private userService: UserService,
              private register: RegisterService
            ){
    this.isEnroll = false;
    this.courseID = this.param.get('id');

  }
  ngOnInit(){
    this.getCourse();
    this.getSections();
    this.checkEnroll();
  }
  checkEnroll(){
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
    this.coursesService.getCourse(this.courseID).then(course =>{
      this.course = course;
    });
  }
  private getSections(){
    this.coursesService.getSections(this.courseID).then(sections =>{
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
