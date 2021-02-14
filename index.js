
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
     const r2 = await generateText.projectDescription(responses.description);
     const r3 = await generateText.tableOfContents();
     const r4 = await generateText.projectInstall(responses.installation);
     const r5 = await generateText.projectUsage(responses.usage);
     const r6 = await generateText.projectContributing(responses.contributing);
     const r7 = await generateText.projectTests(responses.tests);
     const r8 = await generateText.projectQuestions(responses.username, responses.email);
     const r9 = await generateText.projectLicense(responses.license);
     const licenseBadge = await generateText.projectBadge(responses.license)


    rArray.push(r1, r2, licenseBadge, r3, r4, r5, r6, r7, r8, r9);

    rArray.forEach((item) => {
      fs.appendFileSync('./output/RmOutput.md',item, (err) => {
        if (err) throw err;
      });
    });
  } catch (error) {
    console.log(error);
  }
}
