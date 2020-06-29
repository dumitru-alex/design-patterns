import { StatsTracker } from './stats-tracker';
import { test } from './test';
let tracker = StatsTracker.instance;

tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 10;
tracker.twitterShares = 30;

console.log(`Widget views: ${tracker.widgetViews}`);
console.log(`Button clicks: ${tracker.buttonClicks}`);
console.log(`Facebook shares: ${tracker.facebookShares}`);
console.log(`Twitter shares: ${tracker.twitterShares}`);

tracker.widgetViews++;
tracker.twitterShares += 2;

console.log('****TEST*****');
test();