#!/usr/bin/env node
const { program } = require("commander");
const init = require("./commands/init");
const generate = require("./commands/generate");
const config = require("./commands/config");
const info = require("./commands/info");

program.version("1.0.0", "-v, --version", "Output the current version");

// Initialize Nimbus Command
program
  .command("init")
  .description("Initialize Nimbus in the project")
  .action(init);

// Generate Code Command
program
  .command("generate <type>")
  .description("Generate actions, mutations, or states")
  .action(generate);

// Configuration Command
program
  .command("config <key> [value]")
  .description("Set or get a configuration for Nimbus")
  .action(config);

// Info Command
program
  .command("info")
  .description("Display information about Nimbus configuration")
  .action(info);

program.parse(process.argv);
