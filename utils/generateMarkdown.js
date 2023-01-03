// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'No license') {
    license = `![License:](https://img.shields.io/badge/License--blue.svg)`
  } else if (license === 'MIT') {
    license = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
    license = '![License:](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
    license = '![License: GPL v3](https://img.shields.io/badge/GPLv3-blue.svg)'
  }
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === 'No license') {
    licenseSection = license
  } else {
    licenseSection = 'License: '
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
 
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents:
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:
  You must install all the necessary dependencies for this app to function optimally:  
  \`\`\`${data.installation}\`\`\`

  ## Usage:  
  ${data.usage}

  ## Contributing:  
  ${data.contributing}

  ## Tests:
  Run the following commands in your terminal to test this app:  
  \`\`\`${data.tests}\`\`\`

  ## Questions:
  For questions, please contact me on [Github](https://github.com/${data.username})  
  or  
  Email: 
  ${data.email}
`;
}

module.exports = generateMarkdown;
