// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What is the title of your readme?",
      name: "projectTitle",
      default () {
        return `README Generator`
      }
    },
    {
      type: "input",
      message: `Provide a short description explaining the what, why, and how of your project.`,
      name: "description",
      default () {
        return `This CLI app was created to help you make README files with ease!`
      }
    },
    {
      type: "input",
      message: "What steps are required to install your project?",
      name: "installation",
      default () {
        return `1. Clone the repo
  \`\`\`sh
  git clone https://github.com/your_username_/Project-Name.git
  \`\`\`
  2. Install NPM packages
  \`\`\`sh
  npm install
  \`\`\`
  3. Run index.js via Node
  \`\`\`sh
  node ./index.js
  \`\`\``;
      }
    },
    {
      type: "input",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.",
      name: "usage",
      default () {
        return `View the code and try for yourself!`
      }
    },
    {
      type: "input",
      message: "Placeholder for contributing, no input necessary!",
      name: "contributing",
    },
    {
      type: "input",
      message: "Provide information about testing performed for your project.",
      name: "tests",
      default () {
        return `No testing is provided with this suite.`
      }
    },
    {
      type: "input",
      message: "Provide email address",
      name: "email",
      default () {
        return `garciastephen5280@gmail.com`
      }
    },
    {
      type: "input",
      message: "Provide your github username",
      name: "github",
      default () {
        return `Stephen-Garcia`
      }
    },
    {
      type: "input",
      message: `List your collaborators, if any, with links to their GitHub profiles.
          If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
          If you followed tutorials, include links to those here as well.`,
      name: "credits",
      default () {
        return ``
      }
    },
    {
      type: "list",
      message: "Select a license:",
      name: "license",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla",
        "MIT",
        "Apache",
        "Open",
      ],
    },
  ];
  
  //  Create a function to write README file
  function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  //  Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      writeToFile(
        "README.md",
        generateMarkdown({
          ...answers,
        })
      );
    });
  }
  
  // Function call to initialize app
  init();