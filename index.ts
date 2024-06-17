#! /usr/bin/env node

import inquirer from "inquirer";
import  chalk from "chalk";
console.log(chalk.bgMagentaBright.bold("\t\t Welcome to my Calculator\t\t"));


const answer = await inquirer.prompt([
  { message: chalk.yellowBright.underline("Enter your first number:"), type: "number", name: "firstNumber" },
  { message: chalk.greenBright.underline("Enter your second number:"), type: "number", name: "secondNumber" },
  {
    message: chalk.bgRedBright("Select one of the operator to perfoam operation"),
    type: "list",
    name: "operator",
    choices: ["Addition","Subraction","Multiplication","Division"],
  },
]);

// conditional statements
if (answer.operator === "Addition") {
    console.log( answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subraction") {
    console.log( answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log( answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Division") {
    console.log( answer.firstNumber * answer.secondNumber);
} else {
    console.log("please select valid operator");
}
console.log("The End");