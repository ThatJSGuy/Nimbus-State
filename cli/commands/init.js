const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Function to create directory if it doesn't exist
function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(chalk.green(`Created directory at: ${dirPath}`));
  }
}

// Function to create file if it doesn't exist
function createFileSync(filePath, content = "") {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(chalk.green(`Created file at: ${filePath}`));
  }
}

// Initialization function for Nimbus
module.exports = function init() {
  console.log(chalk.blue("Initializing Nimbus project..."));

  const currentDir = process.cwd();

  // Example directories and files
  const dirsToCreate = [
    path.join(currentDir, "store"),
    path.join(currentDir, "store", "modules"),
  ];

  const filesToCreate = [
    {
      path: path.join(currentDir, "store", "index.js"),
      content:
        "import Nimbus from 'nimbus-state';\n\nexport const store = new Nimbus({});\n",
    },
  ];

  // Create directories
  dirsToCreate.forEach((dir) => ensureDirSync(dir));

  // Create files
  filesToCreate.forEach((file) => createFileSync(file.path, file.content));

  console.log(chalk.blue("Nimbus project initialized successfully."));
};
