System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', '../login/user.service'], function(exports_1, context_1) {
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
    var core_1, http_1, user_service_1;
    var RegisterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            RegisterService = (function () {
                function RegisterService(_http, userService) {
                    this.url = "http://52.37.98.127:3000/v1/5610546290?pin=1234";
                    this.http = _http;
                    this.userService = userService;
                }
                RegisterService.prototype.withdrawCourse = function (course, sec) {
                    var _this = this;
                    var user;
                    return this.userService.getUser().then(function (userr) {
                        user = userr;
                        var userCourse = user.courses.find(function (_course) { return _course.id == course.id; });
                        console.log(userCourse);
                        var newSec = [];
                        if (userCourse.section.length > 1) {
                            userCourse.section = userCourse.section.filter(function (_section) { return !(sec.id == _section.id && sec.type == _section.type); });
                        }
                        else if (userCourse.section.length == 1) {
                            user.courses = user.courses.filter(function (_course) { return _course.id != course.id; });
                        }
                        var userJson = (_a = {},
                            _a[user.id] = {
                                "id": user.id,
                                "isLogin": user.isLogin,
                                "courses": user.courses
                            },
                            _a
                        );
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        return _this.http.post(_this.url, JSON.stringify(userJson), options).map(function (res) { return res.json(); }).toPromise();
                        var _a;
                    });
                };
                RegisterService.prototype.regisCourse = function (course, sec) {
                    var _this = this;
                    var user;
                    return this.userService.getUser().then(function (userr) {
                        user = userr;
                        if (user.courses.find(function (_course) { return _course.id == course.id; })) {
                            user.courses.find(function (_course) { return _course.id == course.id; }).section.push(sec);
                        }
                        else {
                            course.section = [];
                            course.section.push(sec);
                            user.courses.push(course);
                        }
                        var userJson = (_a = {},
                            _a[user.id] = {
                                "id": user.id,
                                "isLogin": user.isLogin,
                                "courses": user.courses
                            },
                            _a
                        );
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        return _this.http.post(_this.url, JSON.stringify(userJson), options).map(function (res) { return res.json(); }).toPromise();
                        var _a;
                    });
                };
                RegisterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, user_service_1.UserService])
                ], RegisterService);
                return RegisterService;
            }());
            exports_1("RegisterService", RegisterService);
        }
    }
});
//# sourceMappingURL=register.service.js.map