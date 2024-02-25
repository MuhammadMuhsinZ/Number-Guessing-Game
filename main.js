"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let SystemGeneratedNo = Math.floor(Math.random() * 10);
let answer = await inquirer_1.default.prompt([
    {
        type: `number`,
        name: `UserGuess`,
        message: `write Your Guess Number B/W 01 To 10:`
    }
]);
let { UserGuess } = answer;
console.log(UserGuess, "UserGuess", SystemGeneratedNo, `Sys`);
if (UserGuess === SystemGeneratedNo) {
    console.log("Yaaah Your Answer Is Correct  \n You Win: ");
}
else {
    console.log("Please Try Again Better Luck Next Time:");
}
;
