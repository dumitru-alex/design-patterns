import { IDepC } from "./idepc";
import { IDepB } from "./idepb";
import { IDepA } from "./idepa";
import { injectable, inject } from 'inversify';
import { TYPES } from "./types";

@injectable()
export class ConcreteC implements IDepC {
    // use decorator that injects the concrete implementation to the field associated with specific interface
    constructor(@inject(TYPES.IDepA)
                private _depA: IDepA,
                @inject(TYPES.IDepB) 
                private _depB: IDepB) {}
    doC(): void {
        this._depA.doA();
        this._depB.doB();
        console.log("Doing C");
    }
}