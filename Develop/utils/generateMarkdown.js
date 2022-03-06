// This function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0') {return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"}
  if (license == 'BSD 3-Clause') {return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"}
  if (license == 'BSD 2-Clause') {return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)"} 
  if (license == 'GNU GPLv3') {return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"}
  if (license == 'GNU LGPLv3') {return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)"}
  if (license == 'MIT') {return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"}
  if (license == 'Mozilla Public Licesne 2.0') {return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"}
  else {return ""}
}

// This function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache 2.0') {return "https://opensource.org/licenses/Apache-2.0"}
  if (license == 'BSD 3-Clause') {return "https://opensource.org/licenses/BSD-3-Clause"}
  if (license == 'BSD 2-Clause') {return "https://opensource.org/licenses/BSD-2-Clause"} 
  if (license == 'GNU GPLv3') {return "https://www.gnu.org/licenses/gpl-3.0"}
  if (license == 'GNU LGPLv3') {return "https://www.gnu.org/licenses/lgpl-3.0"}
  if (license == 'MIT') {return "https://opensource.org/licenses/MIT"}
  if (license == 'Mozilla Public Licesne 2.0') {return "https://opensource.org/licenses/MPL-2.0"}
  else {return "";}
}

// This function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
  return `
  ## License
  This application is covered under the ${license} license. For more information, see: ${renderLicenseLink(license)}
  `}
  else {return ""};
}

// This function generates the markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Test Instructions](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testInstructions}

  ## Questions
  For questions, refer to my Github: [${data.github}](https://github.com/StarDotJPG/${data.github}) or e-mail me at: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
