"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var ConsoleErrorDisplayStrategy = /** @class */ (function () {
    function ConsoleErrorDisplayStrategy() {
    }
    ConsoleErrorDisplayStrategy.prototype.display = function (title, body) {
        console.log(chalk.red("" + title) + " : " + chalk.blue(body));
    };
    return ConsoleErrorDisplayStrategy;
}());
exports.ConsoleErrorDisplayStrategy = ConsoleErrorDisplayStrategy;
