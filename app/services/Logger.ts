import { Config } from "../core/Config";

const chalk = require("chalk");

//todo: write to db
export class Logger {
    static Error(message: string): void;
    //static Error(ftpError: FtpError): void;

    static Error(error: any): void {
        if (typeof error == "string") {
            console.log(chalk.red.bold(`ERROR: ${error}`));
            process.abort();  
        }
        else if (typeof error == "object") {
            if (!!error.message) {
                console.log(chalk.red.bold(`ERROR: ${error.message}`));


                process.abort();  
            } 
        }           
    }

    static Message(message: string): void {
        console.log(chalk.cyan.bold(message));
    }

    static Info(message: string): void {
        console.log(message);
    }
}

