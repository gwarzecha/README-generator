

const { async } = require("rxjs");


async function projectTitle(title) {
  const text = `
  # ${title}
  \n
  `;
  return text
}

async function projectDescription(description) {
  const text = `
  ## Description: \n
  ${description}
  \n
  `;
  return text
}

async function projectBadge(license) {
  if (license == 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) \n`;
  }
  if (license == 'GPLv2') {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg) \n`;
  }
  if (license == 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg) \n`;
  }
}


async function tableOfContents() {
  const text = `
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions?](#questions)
  `
  return text
}


async function projectInstall(installation) {
  const text = `
  ## Installation: \n 
  ${installation}
  \n
  `;
  return text
}

async function projectUsage(usage) {
  const text = `
  ## Usage: \n
  ${usage}
  \n
  `;
  return text
}

async function projectContributing(contributing) {
  const text = `
  ## Contributing: \n
  ${contributing}
  \n
  `;
  return text
}

async function projectTests(tests) {
  const text = `
  ## Tests: \n
  ${tests}
  \n
  `;
  return text
}

async function projectQuestions(username, email) {
  const text = `
  ## Questions?:
  * <a href=https://github.com/${username} target="_blank">GitHub</a>
  * <a href="mailto: ${email}" target="_blank">Email</a>
  `;
  return text
}


async function projectLicense(license) {
  const text = `
  ## License: This project is covered under the ${license} license.
  `
  return text
}


module.exports = {
  projectTitle,
  projectDescription,
  projectBadge,
  tableOfContents,
  projectInstall,
  projectUsage,
  projectContributing,
  projectTests,
  projectQuestions,
  projectLicense
}