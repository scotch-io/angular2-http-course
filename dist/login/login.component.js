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
var auth_service_1 = require('../shared/services/auth.service');
var LoginComponent = (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.credentials = { username: '', password: '' };
        this.successMessage = '';
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    /**
     * Login a user
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.errorMessage = '';
        this.service.login(this.credentials.username, this.credentials.password)
            .subscribe(function (data) {
            _this.router.navigate(['']);
            console.log(data);
        }, function (err) {
            _this.errorMessage = err;
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: './app/login/login.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map