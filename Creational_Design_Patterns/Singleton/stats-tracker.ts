export class StatsTracker {
    buttonClicks: number = 0;
    facebookShares: number = 0;
    twitterShares: number = 0;
    widgetViews: number = 0;

    constructor() {
        // (make it a singleton) by checking if it's already initialized
        if(StatsTracker._instance) {
            throw new Error("Cannot initialize singleton class using new");
        }
        // (make it a singleton) by assigning the instance to the variable in the 1st pass
        StatsTracker._instance = this;
    }

    // (make it a singleton) by initializing it into a private static variable
    private static _instance: StatsTracker = new StatsTracker();
    
    // (make it a singleton) by creating a public static getter
    public static get instance(): StatsTracker {
        return StatsTracker._instance;
    }
}