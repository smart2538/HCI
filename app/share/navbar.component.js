System.register(['@angular/core', '@angular/router-deprecated', '../login/user.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent(_router, userService, elementRef) {
                    this._router = _router;
                    this.router = _router;
                    this.userService = userService;
                    this.elementRef = elementRef;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.logIn.subscribe(function (user) {
                        _this.user = user.user;
                    });
                };
                NavbarComponent.prototype.ngAfterViewInit = function () {
                };
                NavbarComponent.prototype.isCurrentRoute = function (route) {
                    var instruction = this.router.generate(route);
                    return this._router.isRouteActive(instruction);
                };
                NavbarComponent.prototype.checkStatus = function () {
                    var _this = this;
                    this.userService.getUser().then(function (user) {
                        _this.user = user;
                        _this.user.isLogin = true;
                    });
                };
                NavbarComponent.prototype.isLogin = function () {
                    if (this.user)
                        return this.user.id != "";
                    return false;
                };
                NavbarComponent.prototype.logout = function () {
                    this.userService.logout();
                };
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: "navbar",
                        templateUrl: "app/share/template/navbar.component.html",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, user_service_1.UserService, core_1.ElementRef])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map