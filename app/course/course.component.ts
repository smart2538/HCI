import { Component, Input } from '@angular/core'
import { Course } from './course';
@Component({
  selector: "course-detail",
  templateUrl: "app/course/template/course.component.html",
})


export class CourseDetailComponent{
  @Input()
  course : Course;
}
