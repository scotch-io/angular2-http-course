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
var user_service_1 = require('../../shared/services/user.service');
var UserSingleComponent = (function () {
    function UserSingleComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    UserSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // grab the id from the url
        var id = this.route.snapshot.params['id'];
        // use the userservice to getUser()
        this.service.getUser(id)
            .subscribe(function (user) { return _this.user = user; });
    };
    UserSingleComponent = __decorate([
        core_1.Component({
            templateUrl: './app/users/user-single/user-single.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, user_service_1.UserService])
    ], UserSingleComponent);
    return UserSingleComponent;
}());
exports.UserSingleComponent = UserSingleComponent;
//# sourceMappingURL=user-single.component.js.map