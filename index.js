#! /usr/bin/env node
import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("welcome to cli number guessing");
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a number between 1-10",
    }
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("congratulation you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
