"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
/* let/const**/
var period = 50;
var baseUrl = 'http://example.com';
/* object **/
var firstName = 'Igor';
var account = {
    firstName: firstName,
    getName: function () {
        return this.firstName;
    }
};
/* spread **/
var person = __assign({}, account);
var dates = [11, 12, 13];
/* destructuring **/
var myName = person.firstName;
var firstDate = dates[0];
/* template string **/
function userMessage(_a, _b) {
    var start = _a[0], end = _a[1];
    var name = _b.firstName;
    return "" + start + name + end;
}
console.log(userMessage(__makeTemplateObject(["Good Day, ", " !!"], ["Good Day, ", " !!"]), person));
/* for of **/
for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
    var date = dates_1[_i];
    console.log(date);
}
/* arrow **/
var sum = function (a, b) { return a + b; };
/*Class**/
var Point = /** @class */ (function () {
    function Point() {
        this.x = 10;
    }
    Point.prototype.sum = function () {
        return this.x;
    };
    return Point;
}());
/* Optional chaining**/
var user = {};
var x = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.baz();
/* ?? **/
var admin;
var p = admin !== null && admin !== void 0 ? admin : user;
