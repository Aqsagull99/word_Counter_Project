#! /usr/bin/env node

//this line is called a shebang, it tells the OS to run it with node.js
import inquirer from "inquirer";

// // Declare a constant 'answer' and assign it to the result of inquirer.prompt function..

 const answers: {
  Sentence:string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Enter your Sentence to count the word:"
  }
]);

  const words = answers.Sentence.trim().split(" ")

 //print the array of words to the console

 console.log("\x1b[45m",words)

 //print the word count of the sentence to the console

console.log(`\x1b[33mYour sentence word count is ${words.length}`);







