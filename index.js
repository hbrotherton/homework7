const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); 

// array of questions for user
const questions = [
   {type: "input", message: "What is the title of your project?", name: "Title"},
   {type: "input", message: "Please provide a description of your project:", name: "Description"},
   {type: "input", message: "Please provide any installations needed for your project:", name: "Installations"},
   {type: "input", message: "Please provide the usage for your project:", name: "Usage"},
   {type: "input", message: "Please provide any licenses needed for your project:", name: "License"},
   {type: "input", message: "Please provide any collaborators:", name: "Credits"},
   {type: "input", message: "Please provide commands for tests:", name: "Test"},
   {type: "input", message: "Please provide ways for contribution:", name: "Contributing"}
];

// function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, err => {
      if (err) {
         return console.log(err);
      }
      console.log("README file created")
   })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
