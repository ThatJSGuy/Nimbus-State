const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Path to the configuration file
const configPath = path.join(process.cwd(), "nimbus-config.json");

// Function to load the current configuration
function loadConfig() {
  try {
    const configData = fs.readFileSync(configPath);
    return JSON.parse(configData);
  } catch (error) {
    console.error(chalk.red("Failed to load configuration:", error));
    return {};
  }
}

// Function to save the configuration
function saveConfig(config) {
  try {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log(chalk.green("Configuration saved successfully."));
  } catch (error) {
    console.error(chalk.red("Failed to save configuration:", error));
  }
}

module.exports = function (key, value) {
  const config = loadConfig();

  if (typeof value !== "undefined") {
    // Setting a value
    config[key] = value;
    saveConfig(config);
    console.log(
      chalk.green(
        `Configuration for ${chalk.bold(key)} set to ${chalk.bold(value)}`,
      ),
    );
  } else {
    // Getting a value
    if (key in config) {
      console.log(
        chalk.blue(
          `Current value for ${chalk.bold(key)}: ${chalk.bold(config[key])}`,
        ),
      );
    } else {
      console.log(
        chalk.yellow(`No configuration found for ${chalk.bold(key)}`),
      );
    }
  }
};
