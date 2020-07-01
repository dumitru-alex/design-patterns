class Computer {
    boot(): void {
        console.log("Computer is booting");
    }
    shutDown(): void {
        console.log("Computer is shutting down");
    }
    display(): void {
        console.log("Displaying content on one screen");
    }
    print(): void {
        console.log("No printer found");
    }
    renderVideo(): void {
        console.log("Cannot render video without a dedicated GPU");
    }
}

class ComputerComponentDecorator extends Computer {
    constructor(private _computer: Computer) {
        super();
    }

    boot() {
        return this._computer.boot();
    }

    shutDown() {
        return this._computer.shutDown();
    }

    display() {
        return this._computer.display();
    }

    print() {
        return this._computer.print();
    }

    renderVideo() {
        return this._computer.renderVideo();
    }    
}

class ServerComputer extends Computer {
    boot() {
        console.log("Booting server...");
    }

    shutDown() {
        console.log("server is shutting down")
    }
}

class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }   
    
    print(): void {
        console.log("Printing...");
    }
}

class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    renderVideo() {
        console.log("Rendering video with dedicated GPU");
    }
}

let server = new ServerComputer();
// wrap the instance of a server with the Printer decorator
let serverWithPrinter = new ComputerWithPrinterDecorator(server);
// result is Server + Printer
// now we can wrap this in the GPU decorator, resulting in a server with a Printer and a GPU
let serverWithPrinterAndGPU = new ComputerWithDedicatedGPU(serverWithPrinter);

// The idea behind is no never pollute our models, so we don't create a specific class for
// a server + gpu + printer 
serverWithPrinterAndGPU.print();
serverWithPrinterAndGPU.renderVideo();