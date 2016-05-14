System.register(['@angular/core', '@angular/http', '@angular/router-deprecated', './user'], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1, user_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http, router) {
                    this.router = router;
                    this.user = new user_1.User();
                    this.url = "http://52.37.98.127:3000/v1/5610546290";
                    this.pin = "?pin=1234";
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                    this.logIn = new core_1.EventEmitter();
                    this.http = http;
                }
                UserService.prototype.isLogin = function () {
                    return this.user.id != "";
                };
                UserService.prototype.login = function (user) {
                    var _this = this;
                    this.user.id = user.id;
                    // localStorage.setItem('user', this.user.id);
                    var _url = this.url + "/" + this.user.id + this.pin;
                    this.getUser().then(function (user) {
                        _this.user = user;
                        _this.user.isLogin = true;
                        var _user = (_a = {},
                            _a[user.id] = {
                                'id': user.id,
                                'isLogin': user.isLogin,
                                'courses': user.courses
                            },
                            _a
                        );
                        _this.http.post(_url, JSON.stringify(_user), _this.options);
                        _this.logIn.next({
                            user: _this.user
                        });
                        _this.router.navigate(['Courses']);
                        var _a;
                    }).catch(function (res) {
                        _this.regisUser(user);
                    });
                };
                UserService.prototype.logout = function () {
                    var _this = this;
                    this.getUser().then(function (user) {
                        _this.user = user;
                        var _url = _this.url + _this.pin;
                        _this.user.isLogin = false;
                        var _user = (_a = {},
                            _a[_this.user.id] = {
                                'name': _this.user.id,
                                'isLogin': _this.user.isLogin,
                                'courses': _this.user.courses
                            },
                            _a
                        );
                        _this.http.post(_url, JSON.stringify(_user), _this.options).toPromise().then(function (res) {
                            _this.user = new user_1.User();
                            _this.logIn.next({
                                user: _this.user
                            });
                            _this.router.navigate(['Login']);
                        });
                        var _a;
                    });
                };
                UserService.prototype.regisUser = function (user) {
                    var _this = this;
                    var _url = this.url + this.pin;
                    user.id = user.id;
                    user.isLogin = true;
                    var _user = (_a = {},
                        _a[this.user.id] = {
                            'id': user.id,
                            'isLogin': user.isLogin,
                            'courses': user.courses
                        },
                        _a
                    );
                    this.http.post(_url, JSON.stringify(_user), this.options).toPromise().then(function (res) {
                        _this.logIn.next({
                            user: _this.user
                        });
                        _this.router.navigate(['Courses']);
                    });
                    var _a;
                };
                UserService.prototype.getUser = function () {
                    var _url = this.url + "/" + this.user.id + this.pin;
                    return this.http.get(_url).map(function (res) { return res.json(); }).toPromise();
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UserService.prototype, "logIn", void 0);
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_deprecated_1.Router])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map