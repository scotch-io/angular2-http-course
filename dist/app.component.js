"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./shared/services/user.service');
var auth_service_1 = require('./shared/services/auth.service');
var AppComponent = (function () {
    function AppComponent(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    Object.defineProperty(AppComponent.prototype, "isLoggedIn", {
        /**
         * Is the user logged in?
         */
        get: function () {
            return this.authService.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Log the user out
     */
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n\n      <div class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <a routerLink=\"/\" class=\"navbar-brand\">My HTTP App</a>\n          </div>\n\n          <ul class=\"nav navbar-nav\"> \n            <li><a routerLink=\"/users\">Users</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/login\">Login</a></li>\n            <li *ngIf=\"isLoggedIn\"><a (click)=\"logout()\">Logout</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <router-outlet></router-outlet>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, auth_service_1.AuthService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map