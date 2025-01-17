"use strict";
// How to recognize the issue?
// - you don't know how to implement an interface method
// - the interface method does not belong to the class
// - you are forced to throw a generic exception
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.call = function (contact) {
        console.log("Calling " + contact);
    };
    SmartPhone.prototype.sendSms = function (contact, content) {
        console.log("Sending " + content + " to " + contact);
    };
    SmartPhone.prototype.openApp = function (path) {
        console.log("Opening app " + path);
    };
    SmartPhone.prototype.connectToWifi = function (ssid, password) {
        console.log("Connecting to wifi " + ssid + " with password " + password);
    };
    return SmartPhone;
}());
exports.SmartPhone = SmartPhone;
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.call = function (contact) {
        console.log("This device cannot place a call");
    };
    Tablet.prototype.sendSms = function (contact, content) {
        throw new Error("This device cannot connect to a cell phone network");
    };
    Tablet.prototype.openApp = function (path) {
        console.log("Opening app " + path);
    };
    Tablet.prototype.connectToWifi = function (ssid, password) {
        console.log("Connecting to wifi " + ssid + " with password " + password);
    };
    return Tablet;
}());
exports.Tablet = Tablet;
var smartPhone = new SmartPhone();
smartPhone.call("John");
smartPhone.sendSms("John", "Hello!");
smartPhone.openApp("Facebook");
smartPhone.connectToWifi("MyWorkWifi", "password123");
var tablet = new Tablet();
tablet.call("John");
tablet.sendSms("John", "Hello!");
tablet.openApp("Facebook");
tablet.connectToWifi("MyWorkWifi", "password123");
