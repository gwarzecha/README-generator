
const fs = require('fs');
const inquirer = require('inquirer');
const generateText = require('./utils/generateText');



inquirer
  .prompt([
    {
      type: 'input', 
      name: 'title',
      message: 'Please provide project title',
    },
    {
      type: 'input', 
      name: 'description',
      message: 'Please provide a description of the project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide instructions for user-installation',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please explain how the user utilizes this application',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide guidelines for users to contribute',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test commands',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Please provide your GitHub username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please provide the license you plan to use',
      choices: ['MIT', 'GPLv2', 'Apache'],
    }
  ])
  .then((responses) => {
    disp(responses);
  })
  .catch((error) => {
    console.log(error);
  });

async function disp(responses) {
  try {

    let rArray = [];
     const r1 = await generateText.projectTitle(responses.title);


    rArray.push(r1);

    rArray.forEach((item) => {
      fs.appendFileSync('README.md',item, (err) => {
        if (err) throw err;
      });
    });
  } catch (error) {
    console.log(error);
  }
}
