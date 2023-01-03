// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project:',

},
{
    type: 'list',
    name: 'license',
    message: 'What type of license does your project use:',
    choices: ['Home', 'Apache 2.0', 'MIT', 'GPL v3.0', 'No license']

},
{
    type: 'input',
    name: 'description',
    message: 'Provide a project description:',

},
{
    type: 'input',
    name: 'installation',
    message: 'What steps are needed to install your project:',

},
{
    type: 'input',
    name: 'usage',
    message: 'What is the use of your project:',

},
{
    type: 'input',
    name: 'contributing',
    message: 'What guidelines must others follow to contribute:',

},
{
    type: 'input',
    name: 'tests',
    message: 'How do you test this project:',

},
{
    type: 'input',
    name: 'username',
    message: 'What is your Github username:',

},
{
    type: 'input',
    name: 'email',
    message: 'What is an email to reach out to you for questions:',

},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {

            writeToFile('README.md', generateMarkdown(data))
        });
}

// Function call to initialize app
init();



