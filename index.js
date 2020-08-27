const prompts = require("./utils/prompts.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// function to write README file
function writeToFile(fileName, data,) {
    fs.writeFile(fileName + ".md", data, function(err){
        console.log("Complete.")}
    )}

// function to initialize program
async function init() {
    let data = await prompts();
    let md = generateMarkdown(data);
    writeToFile(data.title, md)
};

// function call to initialize program
init();
