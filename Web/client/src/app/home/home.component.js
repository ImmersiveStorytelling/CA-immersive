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
require("../interfaces/Project.interface");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, _homeDataService) {
        this.router = router;
        this._homeDataService = _homeDataService;
        this.projectClick = function () {
            // stuur dit project door voor specifieke data op te vragen?
            this.navigateToProjectComponent();
        };
        this.submitProjectClick = function () {
            // als veld ingevuld en button klik
            // dan data pushen naar database
            // als dan data in database
            // dan =>
            this.navigateToProjectComponent();
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        // laden van alle projecten van deze persoon
        this.listProjects = this._homeDataService.getProjectsFrom();
        console.log('Vanuit component:' + this.listProjects);
    };
    // inline methods
    HomeComponent.prototype.navigateToProjectComponent = function () {
        this.router.navigateByUrl('/project');
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/home/home.component.html',
            providers: [homeData_service_1.HomeDataService]
        }),
        __metadata("design:paramtypes", [router_1.Router, homeData_service_1.HomeDataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map