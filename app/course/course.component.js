System.register(['@angular/core', '@angular/router-deprecated', '../login/user', './courses.service', '../login/user.service', './register.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_1, courses_service_1, user_service_1, register_service_1;
    var CourseDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (register_service_1_1) {
                register_service_1 = register_service_1_1;
            }],
        execute: function() {
            CourseDetailComponent = (function () {
                function CourseDetailComponent(param, coursesService, userService, register) {
                    this.param = param;
                    this.coursesService = coursesService;
                    this.userService = userService;
                    this.register = register;
                    this.sectionIsLoading = false;
                    this.courseID = this.param.get('id');
                    this.user = new user_1.User();
                }
                CourseDetailComponent.prototype.ngOnInit = function () {
                    this.user = new user_1.User();
                    this.getCourse();
                    this.getSections();
                    this.checkEnroll();
                };
                CourseDetailComponent.prototype.checkEnroll = function () {
                    var _this = this;
                    this.sectionIsLoading = true;
                    this.getUser().then(function (user) {
                        _this.user = user;
                        _this.sectionIsLoading = false;
                        if (_this.user.courses.find(function (res) { return res.id == _this.courseID; })) {
                            _this.enrollSection = _this.user.courses.find(function (res) { return res.id == _this.courseID; }).section;
                        }
                        else {
                        }
                    });
                };
                CourseDetailComponent.prototype.getUser = function () {
                    return this.userService.getUser();
                };
                CourseDetailComponent.prototype.getCourse = function () {
                    var _this = this;
                    this.coursesService.getCourse(this.courseID).then(function (course) {
                        _this.course = course;
                    });
                };
                CourseDetailComponent.prototype.getSections = function () {
                    var _this = this;
                    this.coursesService.getSections(this.courseID).then(function (sections) {
                        _this.sections = sections;
                    });
                };
                CourseDetailComponent.prototype.enroll = function (sec) {
                    var _this = this;
                    this.sectionIsLoading = true;
                    this.register.regisCourse(this.course, sec).then(function (res) {
                        _this.checkEnroll();
                    });
                };
                CourseDetailComponent.prototype.isEnroll = function () {
                    var _this = this;
                    if (this.user.courses)
                        return this.user.courses.filter(function (c) { return c.id == _this.course.id; }).length > 0;
                    return false;
                };
                CourseDetailComponent.prototype.isSecIdEnroll = function (sec) {
                    if (this.enrollSection)
                        return this.enrollSection.filter(function (s) { return s.id == sec.id; }).length > 0;
                    return false;
                };
                CourseDetailComponent.prototype.isSectypeEnroll = function (sec) {
                    if (this.enrollSection)
                        return this.enrollSection.filter(function (s) { return s.id == sec.id && s.type == sec.type; }).length > 0;
                    return false;
                };
                CourseDetailComponent.prototype.withdraw = function (sec) {
                    var _this = this;
                    this.sectionIsLoading = true;
                    this.register.withdrawCourse(this.course, sec).then(function (res) {
                        _this.checkEnroll();
                    });
                };
                CourseDetailComponent = __decorate([
                    core_1.Component({
                        selector: "course-detail",
                        templateUrl: "app/course/template/course.component.html",
                        providers: [register_service_1.RegisterService]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, courses_service_1.CoursesService, user_service_1.UserService, register_service_1.RegisterService])
                ], CourseDetailComponent);
                return CourseDetailComponent;
            }());
            exports_1("CourseDetailComponent", CourseDetailComponent);
        }
    }
});
//# sourceMappingURL=course.component.js.map