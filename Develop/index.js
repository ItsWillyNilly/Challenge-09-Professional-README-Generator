// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        messsage: 'What is the title of your project?',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please enter a valid title.';
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project.',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please enter a valid description.';
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project.',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please enter valid installation instructions.';
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage guidelines for your project.',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please enter valid usage guidelines.';
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution guidelines for your project.',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please enter valid contribution guidelines.';
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select the license for your project.',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None']
    },

    {
        type: 'input',
        name: 'test',
        message: 'Please enter the test instructions for your project.',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please enter valid test instructions.';
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('File created successfully.');
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();
