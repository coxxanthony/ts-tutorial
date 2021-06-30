"use strict";
exports.__esModule = true;
exports.getName = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return str1 + " " + str2;
};
exports.addStrings = addStrings;
var format = function (title, params) {
    return title + " " + params;
};
exports.format = format;
//function that doesnt return anything
var printFormat = function (title, params) {
    console.log(exports.format(title, params));
};
exports.printFormat = printFormat;
// //function that returns a promise
// export const fetchData = (url: string): Promise<string> =>
//   Promise.resolve(`Data from ${url}`);
//Rest params
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return salutation + " " + names.join(" ");
}
//Misconceptions #1: checking on compilation
function getName(user) {
    var _a, _b;
    return ((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first") + " " + ((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
}
exports.getName = getName;
