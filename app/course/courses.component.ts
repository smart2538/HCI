import { Component, Provider, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { CourseDetailComponent } from './course.component';
import { Observable } from 'rxjs/Observable'
import { TruncatePipe } from '../share/truncate';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

declare var jQuery:any;
@Component({
  selector: "courses-page",
  templateUrl: "/app/course/template/courses.component.html",
  directives: [CourseDetailComponent, ROUTER_DIRECTIVES],
  providers:[CoursesService ],
  pipes: [TruncatePipe]
})


export class CoursesComponent implements OnInit , AfterViewInit {
  courses = [];
  fullCorses = [];
  elementRef: ElementRef;
  router : Router;


  constructor(private coursesService: CoursesService, elementRef: ElementRef, private _router: Router){
    this.elementRef = elementRef;
    this.router = _router;
  }
  isCurrentRoute(route){
      var instruction = this.router.generate(route);
      return this._router.isRouteActive(instruction);
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
    this.coursesService.getCourses()
      .then(courses => {
        for(var course in courses){
            this.fullCorses.push(courses[course])
        }
        this.courses = this.fullCorses.slice();
    });

  }
}
