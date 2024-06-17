// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'MIT') {
      return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'Apache License 2.0') {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'GPL v3') {
      return `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === 'BSD 3-Clause') {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    } else {
      return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT' || license === 'Apache License 2.0' || license === 'BSD 3-Clause') {
    return `https://opensource.org/licenses/${license}`;
  } else if (license === 'GPL v3') {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `This project is covered under ${license} license.`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage Guidelines](#usage)
- [Contributing](#contribution)
- [License](#license)
- [Tests](#test)

## Installation
${data.installation}

## Usage Guidelines
${data.usage}

## Contributing
${data.contribution}

## License
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

---
## Tests
${data.test}

`;
}

module.exports = generateMarkdown;
