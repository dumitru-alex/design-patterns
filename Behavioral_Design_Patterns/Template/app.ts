import * as readLine from 'readline';

export class ProfileConfiguration {
    protected _rl: readLine.ReadLine;

    constructor() {
        this._rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async start(): Promise<any> {
        await this.configureAccountSecurity();
        await this.configureEmailIntegration();
        await this.configureSupportMethod();
        await this.configurePaymentMethod();
        this._rl.close();
    }

    async configureAccountSecurity(): Promise<any> {
        throw new Error("Method not implemented");
    }

    async configureEmailIntegration(): Promise<any> {
        throw new Error("Method not implemented");
    }

    async configureSupportMethod(): Promise<any> {
        throw new Error("Method not implemented");
    }

    async configurePaymentMethod(): Promise<any> {
        throw new Error("Method not implemented");
    }
}

export class BasicPlanProfileConfiguration extends ProfileConfiguration {
    async configureAccountSecurity(): Promise<any> {
        console.log("Click here to enter a security question");
    }

    async configureEmailIntegration(): Promise<any> {
        console.log("Click here to setup your own email server");
    }

    async configureSupportMethod(): Promise<any> {
        console.log("Click here to create a 'Contact Us' page")
    }

    async configurePaymentMethod(): Promise<any> {
        console.log("Click here to setup PayPal");
    }
}

export class PremiumPlanProfileConfiguration extends ProfileConfiguration {
    async configureAccountSecurity(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._rl.question("What security method would you like?\n1. Security Question\n2. 2FA", asnwer => {
                if (parseInt(asnwer) == 1) {
                    console.log("Click here to enter a security question");
                }
                else if (parseInt(asnwer) == 2) {
                    console.log("Click here to setup 2FA");
                }
                resolve();
            });
        });
    }

    async configureEmailIntegration(): Promise<any> {
        console.log("Click here to setup MailChimp");
        return Promise.resolve();
    }
    
    async configureSupportMethod(): Promise<any> {
        console.log("Click here to setup Intercom");
        return Promise.resolve();
    }

    async configurePaymentMethod(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._rl.question("Would you like to use\n1. PayPal\n2. Stripe\n as your payment method?", answer => {
                if (parseInt(answer) == 1) {
                    console.log("Click here to setup PayPal");
                }
                else if (parseInt(answer) == 2) {
                    console.log("Click here to setup Stripe");
                }
                resolve();
            });
        });
    }
}

let basicPlanConfig = new BasicPlanProfileConfiguration();
let premiumPlanConfig = new PremiumPlanProfileConfiguration();

// basicPlanConfig.start();
premiumPlanConfig.start();