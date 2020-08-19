const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); 

// Choose a license for my application
const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";

// contributors
const yesContributors = "If you would like to contribute to this project, please follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) guidelines."
const noContributors  = "This project is currently not accepting any contributions."

// array of questions for user
const questions = [
   {type: "input", message: "What is the title of your project?", name: "Title"},
   {type: "input", message: "Please provide a description of your project:", name: "Description"},
   {type: "input", message: "Please provide any installations needed for your project:", name: "Installations"},
   {type: "input", message: "Please provide the usage for your project:", name: "Usage"},
   {type: "list", message: "Please provide any licenses needed for your project:", name: "License", choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC","None"]},
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
