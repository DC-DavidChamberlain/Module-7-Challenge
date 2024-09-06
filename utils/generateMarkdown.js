// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GNU GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'ISC':
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    default:
      return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'GNU GPLv3':
      return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'ISC':
      return '[ISC](https://opensource.org/licenses/ISC)';
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
This project is licensed under the ${renderLicenseLink(license)} license.`;
}

function renderTestBadge(testFramework) {
  switch (testFramework) {
    case 'Jest':
      return '![Test: Jest](https://img.shields.io/badge/Test-Jest-green.svg)';
    case 'Mocha':
      return '![Test: Mocha](https://img.shields.io/badge/Test-Mocha-orange.svg)';
    case 'Chai':
      return '![Test: Chai](https://img.shields.io/badge/Test-Chai-red.svg)';
    default:
      return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test Badges](#badges)
  - [Visuals](#visuals)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
   ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Test Badges
  ${renderTestBadge(data.testFramework)}
  ${data.tests}
   ## Visuals
  ![Visuals](${data.visuals})
   ## Questions
  If you have any questions, please feel free to contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
`;
}


//export default generateMarkdown;
module.exports = generateMarkdown;
