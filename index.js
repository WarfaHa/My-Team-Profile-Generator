// includes the fs module for writing files
// includes the inquirer package to capture user input
const fs = require("fs");
const inquirer = require("inquirer");
// Opening Statement/Introduction
console.log("Let's generate a webpage that displays your team's basic info!");

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager’s name:",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager’s employee ID:",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the team manager’s email address:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager’s office number:",
  },
  {
    type: "list",
    name: "options",
    choices: [
        "add an engineer",
        "add an intern", 
        "finish building your team",
    ],
  },
];
// team manager’s name, employee ID, email address, and office number
// This function writes a HTML file
function writeToFile() {}

// This function initializes app
function init() {
  return inquirer.prompt(questions).then(function (userInput) {
    //   Making sure input is correct
    console.log(userInput);
  });
}

// Function call to initialize app
init();
