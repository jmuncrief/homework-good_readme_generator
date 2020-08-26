// function to generate markdown for README
async function generateMarkdown({title, description, installation, usage, license, contributing, tests, questions}) {
  return `

![license badge](https://img.shields.io/badge/license-${license}-blue)

# ${title}

## Table of Contents

*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributing](#contributing)
*[Tests](#tests)
*[Questions](#questions)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

##License

${license}

## Contributing

${contributing}

## Testing

${tests}

## Questions

Send questions to ${questions}.

`;
}

module.exports = generateMarkdown;
