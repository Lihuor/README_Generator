const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

inquirer
    .prompt([
        // Pass your questions in here
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What is your project table of contents?',
            name: 'contents'
        },
        {
            type: 'input',
            message: 'What is your project installation?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What is your project usage?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'What is your project License?',
            name: 'license',
            choices: ["MIT", "Mozilla Public License 2.0", "ISC", "Open Software License 3.0", "zLib License", "Academic Free License v3.0"]
        },
        {
            type: 'input',
            message: 'Who is/are contributing in your project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'What is your project tests?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'What is your project questions?',
            name: 'questions'
        }
    ])
    .then(response =>{
        // Us user feedback for... whatever!!
        console.log(response);
        fs.writeFile("genREADME.md", generateMarkdown(response), function (error) {
            if (error) {
                return console.log(error);
            } 
            console.log('genREADME is successful generated');
        });
        
    });
