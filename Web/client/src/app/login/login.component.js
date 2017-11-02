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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var loginData_service_1 = require("../Service/loginData.service");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("../interfaces/IUser.interface");
var GenerateRandom_1 = require("../Model/GenerateRandom");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _loginServiceData) {
        this.router = router;
        this._loginServiceData = _loginServiceData;
        this.g = new GenerateRandom_1.GenerateRandom();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginServiceData.getUsers().subscribe(function (response) { return _this.listOfUsers = response; });
        console.log(this.g.getRandomString("hallo"));
    };
    LoginComponent.prototype.loginClick = function (usr, pass) {
        for (var _i = 0, _a = this.listOfUsers; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.userID == usr && u.password == pass) {
                this.loginStatus = 0;
                break;
            }
            else if (u.userID == usr) {
                this.loginStatus = 1;
                break;
            }
            else
                this.loginStatus = 2;
        }
        switch (this.loginStatus) {
            case 0:
                this.navigateToHomeComponent();
                break;
            case 1:
                alert("Password not correct for this username");
                break;
            case 2:
                alert("Username does not exist");
                break;
        }
    };
    ;
    LoginComponent.prototype.signupClick = function (usr, pass) {
        for (var _i = 0, _a = this.listOfUsers; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.userID == usr) {
                this.signupStatus = 0;
                break;
            }
            else
                this.signupStatus = 1;
        }
        if (pass == "")
            this.signupStatus = 2;
        var id = 0;
        for (var _b = 0, _c = this.listOfUsers; _b < _c.length; _b++) {
            var u = _c[_b];
            if (u.id > id)
                id = u.id;
        }
        id++;
        switch (this.signupStatus) {
            case 0:
                alert("This username is already taken");
                break;
            case 1:
                this._loginServiceData.createUser(usr, pass, id);
                this.navigateToHomeComponent();
                break;
            case 2: alert("You can't use an empty password.");
        }
    };
    ;
    // inline methods
    LoginComponent.prototype.navigateToHomeComponent = function () {
        this.router.navigateByUrl('/home');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/login/login.component.html',
            providers: [loginData_service_1.LoginDataService]
        }),
        __metadata("design:paramtypes", [router_1.Router, loginData_service_1.LoginDataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map