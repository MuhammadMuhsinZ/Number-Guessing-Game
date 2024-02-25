import inquirer from "inquirer"
// Guessing Number Game with System 
type anstype = {
    Guessnumber:number
};
let SystemGeneratedNo = Math.floor(Math.random()* 10);
let  answer: anstype =  await  inquirer.prompt([
    {
        type:`number`,
        name:`UserGuess`,
        message:`write Your Guess Number B/W 01 To 10:`
    }

]);
 let {UserGuess} = answer;

 console.log(UserGuess,"UserGuess", SystemGeneratedNo, `Sys`);

if (UserGuess === SystemGeneratedNo){
console.log("Yaaah Your Answer Is Correct  \n You Win: ")
}else {
    console.log("Please Try Again Better Luck Next Time:")
};
