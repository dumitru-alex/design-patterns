import { ISubscriptionState } from "./isubscriptionState";
import { TrialState } from "./trial-state";

export class Subscription {
    state: ISubscriptionState = new TrialState(this);

    pay(amount: number) {
     this.state.pay(amount);   
    }

    dayPassed() {
        this.state.checkExpiration();
    }

    checkSubscriptionStatus() {
        console.log(this.state.report());
    }
}