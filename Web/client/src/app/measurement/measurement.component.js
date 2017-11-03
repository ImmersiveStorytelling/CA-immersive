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
var measurementData_service_1 = require("../Service/measurementData.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("../interfaces/IParameter.interface");
require("../interfaces/IUnit.interface");
var MeasurementComponent = (function () {
    function MeasurementComponent(router, _measurementDataService) {
        this.router = router;
        this._measurementDataService = _measurementDataService;
        this.goBackClick = function () {
            this.router.navigateByUrl('/project');
        };
    }
    MeasurementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._measurementDataService.getUnits().subscribe(function (res) { return _this.listOfUnits = Observable_1.Observable.of(res); });
        this.listOfParameters = this._measurementDataService.getParameters("mID10").do(function (response) { return _this.listOfParameters = Observable_1.Observable.of(response); });
    };
    MeasurementComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/measurement/measurement.component.html',
            providers: [measurementData_service_1.MeasurementDataService]
        }),
        __metadata("design:paramtypes", [router_1.Router, measurementData_service_1.MeasurementDataService])
    ], MeasurementComponent);
    return MeasurementComponent;
}());
exports.MeasurementComponent = MeasurementComponent;
//# sourceMappingURL=measurement.component.js.map