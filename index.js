// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter the name of the project!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this project?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter the description of the project!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter the installation instructions!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter the usage information!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter the contribution guidelines!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions for this project?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter the test instructions!')
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license type for this application?',
        choices: ['Apache 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GNU GPLv3', 'GNU LGPLv3', 'MIT', 'Mozilla Public Licesne 2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub udername?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter your Github username!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your E-mail address?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter your E-mail address!')
                return false
            }
        }
    },
];

// This function writes to README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created: ' + fileName
            });
        });
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            return generateMarkdown(data)
        })
        .then(markdown => {
            return writeToFile("./dist/readme.md", markdown)
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse)
        })
}

// Function call to initialize app
init();
