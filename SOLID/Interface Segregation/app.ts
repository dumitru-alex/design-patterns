// How to recognize the issue?
// - you don't know how to implement an interface method
// - the interface method does not belong to the class
// - you are forced to throw a generic exception

export interface ISmartDevice {
    call(contact: string): void;
    sendSms(contact: string, content: string): void;
    openApp(path: string): void;
    connectToWifi(ssid: string, password: string): void;
}

export class SmartPhone implements ISmartDevice{
    call(contact: string): void {
        console.log(`Calling ${contact}`);
    }
    sendSms(contact: string, content: string): void {
        console.log(`Sending ${content} to ${contact}`);
    }
    openApp(path: string): void {
        console.log(`Opening app ${path}`);
    }
    connectToWifi(ssid: string, password: string): void {
        console.log(`Connecting to wifi ${ssid} with password ${password}`);
    }
}

// BAD WAY
// The interface used is to generic, and does not apply to this class
export class Tablet implements ISmartDevice {
    // BAD WAY
    call(contact: string): void {
        console.log("This device cannot place a call");
    }
    // BAD WAY
    sendSms(contact: string, content: string): void {
        throw new Error("This device cannot connect to a cell phone network");
    }
    openApp(path: string): void {
        console.log(`Opening app ${path}`);
    }
    connectToWifi(ssid: string, password: string): void {
        console.log(`Connecting to wifi ${ssid} with password ${password}`);
    }

}


let smartPhone = new SmartPhone();

smartPhone.call("John");
smartPhone.sendSms("John", "Hello!");
smartPhone.openApp("Facebook");
smartPhone.connectToWifi("MyWorkWifi", "password123");

// BAD WAY
let tablet = new Tablet();

tablet.call("John");
tablet.sendSms("John", "Hello!");
tablet.openApp("Facebook");
tablet.connectToWifi("MyWorkWifi", "password123");