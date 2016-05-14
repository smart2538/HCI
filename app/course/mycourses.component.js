System.register(['@angular/core', '@angular/router-deprecated', '../login/user', '../login/user.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_1, user_service_1;
    var MyCourses;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            MyCourses = (function () {
                function MyCourses(userService, router, elementRef) {
                    this.userService = userService;
                    this.router = router;
                    this.elementRef = elementRef;
                    this.user = new user_1.User();
                    this.isLoading = false;
                }
                MyCourses.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.userService.getUser().then(function (user) {
                        _this.user = user;
                        _this.isLoading = false;
                    });
                    this.modal = jQuery(this.elementRef.nativeElement).find('.mymodal');
                };
                MyCourses.prototype.showModal = function () {
                    this.modal.modal('show');
                    this.json = JSON.stringify(this.user.courses);
                };
                MyCourses = __decorate([
                    core_1.Component({
                        selector: "my-courses",
                        templateUrl: "app/course/template/mycourses.component.html",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.Router, core_1.ElementRef])
                ], MyCourses);
                return MyCourses;
            }());
            exports_1("MyCourses", MyCourses);
        }
    }
});
//# sourceMappingURL=mycourses.component.js.map