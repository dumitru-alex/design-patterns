"use strict";
exports.__esModule = true;
var fs = require("fs");
var FileErrorLoggingStrategy = /** @class */ (function () {
    function FileErrorLoggingStrategy() {
    }
    FileErrorLoggingStrategy.prototype.log = function (err) {
        return new Promise(function (resolve, reject) {
            fs.appendFile("logs/error.log", err.message + "\n", "utf8", function (error) {
                if (error) {
                    console.error("Error logging failed");
                    reject(error);
                }
                else {
                    resolve();
                }
            });
        });
    };
    return FileErrorLoggingStrategy;
}());
exports.FileErrorLoggingStrategy = FileErrorLoggingStrategy;
