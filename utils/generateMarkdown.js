// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license) {
    return 'No license'
  }
  return `![License:](https://img.shields.io/badge/License--blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
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
  let licenseSection = ''
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
      'License: ${license}'
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents:
  ### * [Liccense](#license)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributors](#contributors)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Installation:
  ### You must install the following for this app to function:
  ### ${data.installation}

  ## Usage:
  ### ${data.usage}

  ## Contributors:
  ### ${data.contributions}

  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ### ${data.tests}

  ## Questions:
  ### For questions, please contact me on
  ### Github: https://github.com/${data.askMe}
  ### or
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
