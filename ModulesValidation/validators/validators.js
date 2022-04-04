"use strict";
exports.__esModule = true;
exports.ValidatorCLS = void 0;
var ValidatorCLS = /** @class */ (function () {
    function ValidatorCLS() {
    }
    // isValidEmailStr(s: string): boolean {
    //     return Constants.emailRegex.test(s);
    // }
    // isValidZipCode(s: string): boolean {
    //     return s.length === 6 && Constants.numberRegex.test(s);
    // }
    ValidatorCLS.prototype.isValidStr = function (s, regex) {
        var myRegex = regex;
        return myRegex.test(s);
    };
    return ValidatorCLS;
}());
exports.ValidatorCLS = ValidatorCLS;
