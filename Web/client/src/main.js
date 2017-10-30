"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// app module
var app_module_1 = require("./app/app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//login module
var login_module_1 = require("./app/login/login.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(login_module_1.LoginModule);
//# sourceMappingURL=main.js.map