// includes the fs module for writing files
// includes the inquirer package to capture user input
const fs = require("fs");
const inquirer = require("inquirer");
// Opening Statement/Introduction
console.log("Let's generate a webpage that displays your team's basic info!");


// An array of questions for user input
const teamArray = []; 

// This function initializes app to prompt user to add an employee
const addEmployee = () => {
  inquirer.prompt([{
    type: "list",
    message: "What type of employee would you like to add to your team?",
    name: "addEmployeeOption",
    choices: ["Manager", "Engineer", "Intern", "finish building my team"]
  }]).then(function (userInput) {
    switch(userInput.addEmployeeOption) {
      case "Manager":
        addManager();
        break;
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;

        default:
          writeToFile();
}
})

}

function addManager(){
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
      }
      
    ]).then(function (userInput) {

      //testing user input
      console.log(userInput);
      addEmployee();
    });

}
function addEngineer(){
  
  inquirer.prompt ([
      
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?"
    },

    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's ID number?"
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email address?"
    },

    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?"
    }
    
  ]).then(function (userInput) {

    //testing user input
    console.log(userInput);
    addEmployee();
  });

}
function addIntern(){
  inquirer.prompt ([
      
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?"
    },

    {
      type: "input",
      name: "internId",
      message: "What is the intern's ID number?"
    },

    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?"
    },

    {
      type: "input",
      name: "internSchool",
      message: "What school did the intern go to?"
    }
    
  ]).then(function (userInput) {

    //testing user input
    console.log(userInput);
    addEmployee();
  });
};

// This function writes a HTML file
function writeToFile() {}

// Function call to initialize app
addEmployee();


