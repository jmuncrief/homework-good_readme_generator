const inquirer = require("inquirer");

async function prompts() {
    return (
        inquirer.prompt([
            {
                type: "input",
                message: "What is your project title?",
                name: "title"
            },
            {
                type: "input",
                message: "Enter a brief description of your project.",
                name: "description"
            },
            {
                type: "input",
                message: "Enter installation instructions.",
                name: "installation"
            },
            {
                type: "input",
                message: "Enter usage example(s).",
                name: "usage"
            },
            {
                type: "list",
                message: "Select a license for this project.",
                choices: ["Apache", "MIT", "Creative Commons",],
                name: "license"
            },
            {
                type: "input",
                message: "Where can Users contribute to this project?",
                name: "contributing"
            },
            {
                type: "input",
                message: "How should Users test this project?",
                name: "tests"
            },
            {
                type: "input",
                message: "Enter email address where questions should be sent.",
                name: "questions"
            },

        ])
    )
}

module.exports = prompts;