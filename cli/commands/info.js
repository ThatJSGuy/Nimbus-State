const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Directly embed version and other metadata to avoid dynamic path resolution
const packageMetadata = {
  version: "1.0.2",
  description: "A lightweight state management library for Vue",
  author: "Matt Williams",
};

function loadConfig() {
  try {
    const configPath = path.join(process.cwd(), "nimbus-config.json");
    const configData = fs.readFileSync(configPath);
    return JSON.parse(configData);
  } catch (error) {
    console.error(chalk.red("Failed to load configuration:", error));
    return {};
  }
}

module.exports = function info() {
  console.log(chalk.bold("Nimbus State Management CLI"));
  console.log(chalk.green(`Version: ${packageMetadata.version}`));
  console.log(chalk.blue(`Description: ${packageMetadata.description}`));
  console.log(chalk.yellow(`Author: ${packageMetadata.author}`));

  const config = loadConfig();
  if (Object.keys(config).length > 0) {
    console.log(chalk.blue("Current Configuration:"));
    for (const key in config) {
      console.log(chalk.blue(`${key}: ${config[key]}`));
    }
  } else {
    console.log(chalk.blue("No custom configuration set."));
  }

  console.log(chalk.magenta("Available Commands:"));
  console.log(chalk.magenta("  init - Initialize Nimbus in the project"));
  console.log(
    chalk.magenta(
      "  config <key> [value] - Set or get a configuration for Nimbus",
    ),
  );
  console.log(
    chalk.magenta("  generate <type> - Generate actions, mutations, or states"),
  );
  console.log(chalk.magenta("  info - Display this information"));
};
