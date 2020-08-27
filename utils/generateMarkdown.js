// function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contributing, tests, questions}) {
  return `

![license badge](https://img.shields.io/badge/license-${license}-blue)

# ${title}

## Table of Contents

*[Description](#description)\n
*[Installation](#installation)\n
*[Usage](#usage)\n
*[License](#license)\n
*[Contributing](#contributing)\n
*[Tests](#tests)\n
*[Questions](#questions)\n

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
