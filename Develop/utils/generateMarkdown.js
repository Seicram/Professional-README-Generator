// Function that returns a license badge based on the license passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  if (license === 'Apache-2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  if (license === 'GPL-3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  return '';
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache-2.0') {
    return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'GPL-3.0') {
    return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
  }
  return '';
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license. Click the badge above to view the license details.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${licenseSection}

## Questions

For any questions, please contact me:

GitHub: [${data.username}](https://github.com/${data.username})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;

