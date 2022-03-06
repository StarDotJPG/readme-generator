// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the description of the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions for this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the test instructions!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licesne',
        message: 'What is the license type for this application?',
        choices: ['Apache 2.0, Boost 1.0, BSD3, CC1.0, GNU GPLv3, IBM Public Licesne 1.0, MIT, Mozilla Public Licesne 2.0, Open Data Commons']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub udername?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your E-mail address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your E-mail address!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
