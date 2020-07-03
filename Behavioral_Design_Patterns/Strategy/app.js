"use strict";
exports.__esModule = true;
var error_handler_1 = require("./error-handler");
var console_error_display_strategy_1 = require("./console-error-display-strategy");
var file_error_logging_strategy_1 = require("./file-error-logging-strategy");
var errorHandler = new error_handler_1.ErrorHandler(new console_error_display_strategy_1.ConsoleErrorDisplayStrategy(), new file_error_logging_strategy_1.FileErrorLoggingStrategy());
try {
    var b = 2;
    b();
}
catch (err) {
    errorHandler.handle(err, "Something went wrong", "Try again later!");
}
