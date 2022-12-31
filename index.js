// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    messgae: 'What is the title of your project',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter a project title');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'What type of license does your project use',
    choices: ['Home', 'Apache 2.0', 'MIT', 'GPL v3.0',],
    validate: licenceInput = () => {
        if (licenceInput) {
            return true;
        } else {
            console.log('Please select one of the four options');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'description',
    message: 'Provide a project description',
    validate: descriptionInput = () => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please provide a project description');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'What steps are needed to install your project?',
    validate: installationInput = () => {
        if (installationInput) {
            return true;
        } else {
            console.log('Please provide a installation steps');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the use of your project?',
    validate: usageInput = () => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please provide use for your project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contributions',
    message: 'What guidelines must others follow to contribute?',
    validate: contributionsInput = () => {
        if (contributionsInput) {
            return true;
        } else {
            console.log('Please provide contribution guidelines for your project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'test',
    message: 'How do you test this project?',
    validate: testInput = () => {
        if (testInput) {
            return true;
        } else {
            console.log('Please explain how to test this project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'askMe',
    message: 'What is your Github username?',
    validate: askMeInput = () => {
        if (askMeInput) {
            return true;
        } else {
            console.log('Please provide your username so that others can reach out to you with questions');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is an email to reach out to you for questions?',
    validate: emailInput = () => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please provide an email');
            return false;
        }
    }
},
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            console.log(data);
            let fileContent = generateMarkdown(data);
            writeToFile(fileContent)
        });
}

// Function call to initialize app
init();

//exports
module.exports = questions;

