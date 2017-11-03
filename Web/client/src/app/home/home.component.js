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
var homeData_service_1 = require("../Service/homeData.service");
require("../interfaces/IProject.interface");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
var ShareData_service_1 = require("../Service/ShareData.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, _homeDataService, _shareDataService) {
        this.router = router;
        this._homeDataService = _homeDataService;
        this._shareDataService = _shareDataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    HomeComponent.prototype.projectClick = function (name) {
        this._shareDataService.setString(name);
        this.navigateToProjectComponent();
    };
    ;
    HomeComponent.prototype.createProjectClick = function (projectName) {
        var _this = this;
        this._homeDataService.postProject(projectName).subscribe(function (res) {
            return _this.getProjects();
        });
    };
    HomeComponent.prototype.deleteProjectClick = function (project) {
        var _this = this;
        this._homeDataService.deleteProject(project).subscribe(function (res) {
            return _this.getProjects();
        });
    };
    // inline methods
    HomeComponent.prototype.getProjects = function () {
        var _this = this;
        this.listProjects = this._homeDataService.getProjects().do(function (response) { return _this.listProjects = Observable_1.Observable.of(response); });
    };
    HomeComponent.prototype.navigateToProjectComponent = function () {
        this.router.navigateByUrl('/project');
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/home/home.component.html',
            providers: [homeData_service_1.HomeDataService]
        }),
        __metadata("design:paramtypes", [router_1.Router, homeData_service_1.HomeDataService, ShareData_service_1.ShareDataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map