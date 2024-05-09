// cli/commands/generate.js
import fs from "fs";
import path from "path";
import inquirer from "inquirer";

const templateDirectory = path.join(__dirname, "..", "templates");

function createTemplate(name, content) {
  const filePath = path.join(templateDirectory, `${name}.js`);
  fs.writeFileSync(filePath, content);
  console.log(`Template ${name} created successfully.`);
}

function applyTemplate(templateName, destination) {
  const templatePath = path.join(templateDirectory, `${templateName}.js`);
  const templateContent = fs.readFileSync(templatePath, "utf-8");
  fs.writeFileSync(destination, templateContent);
  console.log(`Template ${templateName} applied successfully.`);
}

export function generate(type, name) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "content",
        message: "Enter the template content:",
      },
    ])
    .then((answers) => {
      createTemplate(name, answers.content);
    });
}

export function apply(templateName, destination) {
  applyTemplate(templateName, destination);
}
