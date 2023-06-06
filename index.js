const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for contributing to the project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide testing instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log(`README.md file generated successfully at ${fileName}`);
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.log(`Error occurred: ${error}`);
    });
}

// Function call to initialize app
init();
