import { Component, Provider, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { Observable } from 'rxjs/Observable'

import { CoursesService } from './courses.service';

import { CourseDetailComponent } from './course.component';
import { MyCourses } from './mycourses.component';

import { TruncatePipe } from '../share/truncate';

declare var jQuery:any;
@Component({
  selector: "courses-page",
  templateUrl: "/app/course/template/courses.component.html",
  directives: [CourseDetailComponent, MyCourses, ROUTER_DIRECTIVES],
  providers:[CoursesService ],
  pipes: [TruncatePipe]
})


export class CoursesComponent implements OnInit , AfterViewInit {
  courses = [];
  fullCorses = [];
  isLoading = false;

  constructor(
    private coursesService: CoursesService,
    private elementRef: ElementRef,
    private router: Router){

  }
  isCurrentRoute(route){
      var instruction = this.router.generate(route);
      return this.router.isRouteActive(instruction);
  }
  ngOnInit()	{
    this.getCourses();
  }
  ngAfterViewInit(){
  }

  private reloadCourses(filter?){
    if(filter){
      this.courses = []
      for(var x in this.fullCorses){
        if((this.fullCorses[x].id).indexOf(filter.courseID) > -1 || (this.fullCorses[x].name.en).toLowerCase().indexOf(filter.courseID.toLowerCase()) > -1){
          this.courses.push(this.fullCorses[x]);
        }
      }
    }
  }
  private  getCourses(){
    this.isLoading = true;
    this.coursesService.getCourses()
      .then(courses => {
        for(var course in courses){
            this.fullCorses.push(courses[course])
        }
        this.courses = this.fullCorses.slice();
        this.isLoading = false;
    });

  }
}
