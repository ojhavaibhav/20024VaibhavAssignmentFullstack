"use strict";
exports.__esModule = true;
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // Constants.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Constants.numberRegex = /^[0-9]{6}$/;
    Constants.$FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
    Constants.$FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
    Constants.$BankAccountNameRegEx = /^([a-zA-Z ]{2,60})$/;
    Constants.$PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;
    Constants.$EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
    Constants.$ConNoRegEx = /^([0-9]{10})$/;
    Constants.$AgeRegEx = /^([0-9]{1,2})$/;
    Constants.$AadhaarNoRegEx = /^([0-9]{12})$/;
    return Constants;
}());
exports.Constants = Constants;
