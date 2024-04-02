#!  /usr/bin/env node

import inquirer from "inquirer";

// 1. Computer will generate a random number - Done

//2. user input for guessing number  - Done

//3. Computer user input with computer generated number and show results  - Done

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-10:",
    },
]);
if(answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
} else { 
    console.log("You guessed a wrong number");
}

