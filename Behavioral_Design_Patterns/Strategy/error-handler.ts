import { IErrorDisplayStrategy } from "./ierror-display-strategy";
import { IErrorLoggingStrategy } from "./ierror-logging-strategy";

export class ErrorHandler {
    constructor(private _displayStrategy: IErrorDisplayStrategy, private _loggingStrategy: IErrorLoggingStrategy) {

    }

    handle(err: Error, title: string, body: string) {
        this._displayStrategy.display(title, body);
        return this._loggingStrategy.log(err);
    }
}