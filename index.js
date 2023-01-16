// includes the fs module for writing files
// includes the inquirer package to capture user input
const fs = require("fs");
const inquirer = require("inquirer");
const createHTML = require("./src/createHTML.js");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
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
          writeToFile('./dist/index.html', createHTML(teamArray));
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
      
    ]).then(function (managerInput) {

      //testing user input
      //console.log(teamArray);
      const manager = new Manager (managerInput.managerName, managerInput.managerId, managerInput.managerEmail, managerInput.officeNumber);
      teamArray.push(manager);
      console.log(manager);
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
    
  ]).then(function (engineerInput) {
    const engineer = new Engineer (engineerInput.engineerName, engineerInput.engineerId, engineerInput.engineerEmail, engineerInput.engineerGithub);
    teamArray.push(engineer);
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
    
  ]).then(function (internInput) {
    const intern = new Intern (internInput.internName, internInput.internId, internInput.internEmail, internInput.internSchool);
    teamArray.push(intern);
    addEmployee();
  });
};

// This function writes a HTML file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
  console.log("Congrats you finished building the dream team!")
  });
}

// Function call to initialize app
addEmployee();


