System.register(['@angular/core', '@angular/router-deprecated', './courses.service', './course.component', './mycourses.component', '../share/truncate'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, courses_service_1, course_component_1, mycourses_component_1, truncate_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (mycourses_component_1_1) {
                mycourses_component_1 = mycourses_component_1_1;
            },
            function (truncate_1_1) {
                truncate_1 = truncate_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(coursesService, elementRef, router) {
                    this.coursesService = coursesService;
                    this.elementRef = elementRef;
                    this.router = router;
                    this.courses = [];
                    this.fullCorses = [];
                    this.isLoading = false;
                }
                CoursesComponent.prototype.isCurrentRoute = function (route) {
                    var instruction = this.router.generate(route);
                    return this.router.isRouteActive(instruction);
                };
                CoursesComponent.prototype.ngOnInit = function () {
                    this.getCourses();
                };
                CoursesComponent.prototype.ngAfterViewInit = function () {
                };
                CoursesComponent.prototype.reloadCourses = function (filter) {
                    if (filter) {
                        this.courses = [];
                        for (var x in this.fullCorses) {
                            if ((this.fullCorses[x].id).indexOf(filter.courseID) > -1 || (this.fullCorses[x].name.en).toLowerCase().indexOf(filter.courseID.toLowerCase()) > -1) {
                                this.courses.push(this.fullCorses[x]);
                            }
                        }
                    }
                };
                CoursesComponent.prototype.getCourses = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.coursesService.getCourses()
                        .then(function (courses) {
                        for (var course in courses) {
                            _this.fullCorses.push(courses[course]);
                        }
                        _this.courses = _this.fullCorses.slice();
                        _this.isLoading = false;
                    });
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: "courses-page",
                        templateUrl: "/app/course/template/courses.component.html",
                        directives: [course_component_1.CourseDetailComponent, mycourses_component_1.MyCourses, router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [courses_service_1.CoursesService],
                        pipes: [truncate_1.TruncatePipe]
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CoursesService, core_1.ElementRef, router_deprecated_1.Router])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map