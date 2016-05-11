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
  providers: [RegisterService]
})

export class CourseDetailComponent implements OnInit{
  course;
  courseID;
  sections;
  enrollSection;
  user : User;
  sectionIsLoading = false;
  constructor(
              private param :RouteParams,
              private coursesService: CoursesService,
              private userService: UserService,
              private register: RegisterService
            ){
    this.courseID = this.param.get('id');
    this.user = new User();

  }
  ngOnInit(){
    this.user = new User();
    this.getCourse();
    this.getSections();
    this.checkEnroll();
  }
  checkEnroll(){
    this.sectionIsLoading = true;
    this.getUser().then(user =>{
      this.user = user;
      this.sectionIsLoading = false;
      if(this.user.courses.find(res => res.id == this.courseID ) ){
        this.enrollSection = this.user.courses.find(res => res.id == this.courseID).section;
      }else{
      }
    });


  }
  getUser(){
    return this.userService.getUser();
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
  private enroll(sec){
      this.sectionIsLoading = true;
      this.register.regisCourse(this.course, sec).then(res => {
        this.checkEnroll();
      });
  }
  private isEnroll(){
    if(this.user.courses)
      return this.user.courses.filter(c => c.id == this.course.id).length > 0;
    return false;
  }
  private isSecIdEnroll(sec){
    if(this.enrollSection)
      return this.enrollSection.filter(s => s.id == sec.id ).length > 0;
    return false;
  }
  private isSectypeEnroll(sec){
    if(this.enrollSection)
      return this.enrollSection.filter(s => s.id == sec.id && s.type == sec.type ).length > 0;
    return false;
  }
  private withdraw(sec){
    this.sectionIsLoading = true;
    this.register.withdrawCourse(this.course, sec).then(res =>{
      this.checkEnroll();
    });
  }
}
