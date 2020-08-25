const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function prompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your Github username?"
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description for this application."
    },
    {
      type: "input",
      name: "deployed",
      message: "Enter the deployed aplication's url."
    },
    {
      type: "input",
      name: "repo",
      message: "Enter your GitHub repo URL"
    },
    {
      type: "input",
      name: "instalation",
      message: "Please enter Instalation Instructions."
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter how the user should interface with this application."
    },
    {
      type: "input",
      name: "contributers",
      message: "Who contributed to this project?"
    }

  ]);
}

function writeToFile(fileName, data) {
    fs.writeFile("README.md",  )
}