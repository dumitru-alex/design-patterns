// new requirement - add a logger 
    //TODO: inject an HttpClient and log error to our server
export class ErrorHandler {
    private messageBox: any;
    // private httpClient;

    constructor(messageBox: any) {
        this.messageBox = messageBox;
    }
    // BAD SOLUTION
    // - inject it directly in the constructor
    // constructor(messageBox: any, httpClient) {
    //     this.messageBox = messageBox;
    //     this.httpClient = httpClient;
    // }

    wrapError(err: any, publicResponse: any, severity: number) {
        let error = {
            originalError: err,
            publicResponse,
            severity
        }
        // BAD SOLUTION
        // - also add here the logging
        // this.httpClient.post("api/log", error);
        if (severity < 5) {
            this.handleWarning("Warning", publicResponse);
        }
        else {
            this.handleError("Critical Error", publicResponse);
        }
    }

    private handleWarning(header: string, content: any) {
        this.messageBox.show(header, content);
    }

    private handleError(header: string, content: any) {
        this.messageBox.show(header, content);
    }
}

// GOOD SOLUTION
// - add another class to define the Logger

export class ErrorLogger {
    private _endpoint = "api/log";
    constructor(private _httpClient){

    }

    logError(errorObject: any): Promise<any> {
        return this._httpClient.port(this._endpoint, errorObject);
    }
}

// Now we extend the ErrorHandler class with logging, without opening it up to modifications

export class ErrorHandlerWithLogging extends ErrorHandler {
    private _logger: ErrorLogger;

    constructor(messageBox: any, logger: ErrorLogger) {
        super(messageBox);
        this._logger = logger;
    }

    wrapError(err: any, publicResponse: any, severity: number): Promise<any> {
        return this._logger.logError(err).then(() => {
            super.wrapError(err, publicResponse, severity);
        });

    }
}