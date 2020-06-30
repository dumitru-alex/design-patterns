"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatsTracker = /** @class */ (function () {
    function StatsTracker() {
        this.buttonClicks = 0;
        this.facebookShares = 0;
        this.twitterShares = 0;
        this.widgetViews = 0;
        // (make it a singleton) by checking if it's already initialized
        if (StatsTracker._instance) {
            throw new Error("Cannot initialize singleton class using new");
        }
        // (make it a singleton) by assigning the instance to the variable in the 1st pass
        StatsTracker._instance = this;
    }
    Object.defineProperty(StatsTracker, "instance", {
        // (make it a singleton) by creating a public static getter
        get: function () {
            return StatsTracker._instance;
        },
        enumerable: true,
        configurable: true
    });
    // (make it a singleton) by initializing it into a private static variable
    StatsTracker._instance = new StatsTracker();
    return StatsTracker;
}());
exports.StatsTracker = StatsTracker;
