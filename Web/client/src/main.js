"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//login module
var login_module_1 = require("./app/login/login.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(login_module_1.LoginModule);
//home module
var home_module_1 = require("./app/home/home.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(home_module_1.HomeModule);
//measurement module
var measurement_module_1 = require("./app/measurement/measurement.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(measurement_module_1.MeasurementModule);
//project module
var project_module_1 = require("./app/project/project.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(project_module_1.ProjectModule);
//# sourceMappingURL=main.js.map