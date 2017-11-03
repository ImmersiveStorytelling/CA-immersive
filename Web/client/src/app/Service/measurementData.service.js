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
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("../interfaces/IParameter.interface");
require("../interfaces/IUnit.interface");
var MeasurementDataService = (function () {
    function MeasurementDataService(http) {
        this.http = http;
        this.urlParameters = 'http://localhost:4000/parameters?measurementID=';
        this.urlUnits = 'http://localhost:4000/units';
    }
    MeasurementDataService.prototype.getParameters = function (mID) {
        return this.http.get(this.urlParameters + mID).map(function (response) { console.log(response); return response; });
    };
    MeasurementDataService.prototype.getUnits = function () {
        return this.http.get(this.urlUnits).map(function (res) { console.log(res); return res; });
    };
    MeasurementDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MeasurementDataService);
    return MeasurementDataService;
}());
exports.MeasurementDataService = MeasurementDataService;
//# sourceMappingURL=measurementData.service.js.map