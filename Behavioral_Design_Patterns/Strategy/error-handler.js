"use strict";
exports.__esModule = true;
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(_displayStrategy, _loggingStrategy) {
        this._displayStrategy = _displayStrategy;
        this._loggingStrategy = _loggingStrategy;
    }
    ErrorHandler.prototype.handle = function (err, title, body) {
        this._displayStrategy.display(title, body);
        return this._loggingStrategy.log(err);
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
