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
   {type: "input", message: "What is the title of your project?", name: "title"},
   {type: "input", message: "Please provide a description of your project:", name: "description"},
   {type: "input", message: "Please provide any installations needed for your project:", name: "installations"},
   {type: "input", message: "Please provide the usage for your project:", name: "usage"},
   {type: "list", message: "Please provide any licenses needed for your project:", name: "license", choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC","None"]},
   {type: "input", message: "Please provide any collaborators:", name: "credits"},
   {type: "input", message: "Please provide commands for tests:", name: "test"},
   {type: "input", message: "Please provide ways for contribution:", name: "contributors"}
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
async function init() {
   try {
       // asks user questions
       await inquirer.prompt(questions).then(function(response){
           return responses = response;
       });

       // check for which license
       if(responses.license === "Apache License 2.0"){
           responses.license = apache;
       } else if(responses.license === "GNU GPLv3"){
           responses.license = gnu;
       } else if(responses.license === "MIT"){
           responses.license = mit;
       } else if(responses.license === "ISC"){
           responses.license = isc;
       } else {
           responses.license = "This project is currently not licensed."
       }

       // check to see if user wants contributors
       if(responses.contributors === "Yes"){
           responses.contributors = yesContributors;
       } else {
           responses.contributors = noContributors;
       }

       // write data to readme using generateMarkdown
       writeToFile(`generatedREADME.md`, generateMarkdown(responses));

   } catch (err){
       console.log(err);
   }
}

// function call to initialize program
init();
