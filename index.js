const prompts = require("./utils/prompts.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// function to write README file
async function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".md", data);
}

// function to initialize program
function init() {
    let data = prompts();
    let md = generateMarkdown(data);
    writeToFile("Test Title", md, function(err){
        console.log("Complete.")
    });

}

// function call to initialize program
init();
