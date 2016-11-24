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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = 'http://reqres.in/api';
        this.loggedIn = false;
        // look at localStorage to check if the user is logged in
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    /**
     * Check if the user is logged in
     */
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    /**
     * Log the user in
     */
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.authUrl + "/login", { username: username, password: password })
            .map(function (res) { return res.json(); })
            .do(function (res) {
            if (res.token) {
                localStorage.setItem('auth_token', res.token);
                _this.loggedIn = true;
            }
        })
            .catch(this.handleError);
    };
    /**
     * Log the user out
     */
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    /**
     * Handle any errors from the API
     */
    AuthService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errMessage);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map