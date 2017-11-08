"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenerateRandom = /** @class */ (function () {
    function GenerateRandom() {
    }
    GenerateRandom.prototype.getRandomString = function (str) {
        var s1 = (Math.floor(Math.random() * 9)).toString();
        var s2 = (Math.floor((Math.random() * 25) + 65));
        var s3 = (Math.floor((Math.random() * 25) + 97));
        var preString = s1 + String.fromCharCode(s2) + String.fromCharCode(s3);
        s1 = (Math.floor(Math.random() * 9)).toString();
        s2 = (Math.floor((Math.random() * 25) + 65));
        s3 = (Math.floor((Math.random() * 25) + 97));
        var postString = String.fromCharCode(s3) + String.fromCharCode(s2) + s1;
        return preString + str + postString;
    };
    return GenerateRandom;
}());
exports.GenerateRandom = GenerateRandom;
//# sourceMappingURL=GenerateRandom.js.map