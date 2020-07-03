import { CommandWorker } from "./command-worker";
import { LogCommandParams, LogCommand } from "./log-command";

async function sleep(duration: number): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}


async function testCommandPattern(): Promise<any> {
    // the command worker runs every 5 secs since its initialization, not since we register a command
    let commandWorker = new CommandWorker(5000);

    while(true) {
        try {
            await sleep(1000);
            let b: any = 3;
            b();
        }
        catch (err) {
            let params: LogCommandParams = {
                title: "Oops something went wrong",
                body: "Please try again later",
                filename: "./logs/error.log",
                error: err
            }

            commandWorker.registerCommand(new LogCommand(params));
        }
    }
}

testCommandPattern();