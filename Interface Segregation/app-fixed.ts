// How to recognize the issue?
// - you don't know how to implement an interface method
// - the interface method does not belong to the class
// - you are forced to throw a generic exception

// SOLUTION: split the interface in 2, because it's too generic
export interface IPhoneDevice {
    call(contact: string): void;
    sendSms(contact: string, content: string): void;
}

export interface ISmartDevice {
    openApp(path: string): void;
    connectToWifi(ssid: string, password: string): void;
}

export class SmartPhone implements ISmartDevice, IPhoneDevice{
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

export class Tablet implements ISmartDevice {
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

let tablet = new Tablet();

tablet.openApp("Facebook");
tablet.connectToWifi("MyWorkWifi", "password123");