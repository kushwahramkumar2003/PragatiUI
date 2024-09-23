#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import { init } from "./commands/init";
import { add } from "./commands/add";
import { list } from "./commands/list";

const program = new Command();

program
  .name("pragatiui-cli")
  .description("CLI for managing PragatiUI components")
  .version("0.1.0");

program
  .command("init")
  .description("Initialize the PragatiUI configuration")
  .action(() => {
    console.log(chalk.cyan("🚀 Initializing PragatiUI CLI..."));
    init().catch((error) => {
      console.error(
        chalk.red(
          `❌ An error occurred during initialization: ${error.message}`
        )
      );
    });
  });

program
  .command("add <component...>")
  .description("Add new component(s)")
  .action((components) => {
    console.log(chalk.cyan(`🚀 Adding component(s): ${components.join(", ")}`));
    add(components).catch((error) => {
      console.error(
        chalk.red(
          `❌ An error occurred while adding components: ${error.message}`
        )
      );
    });
  });

program
  .command("list")
  .description("List available components")
  .action(() => {
    console.log(chalk.cyan("🚀 Fetching available components..."));
    list().catch((error) => {
      console.error(
        chalk.red(
          `❌ An error occurred while listing components: ${error.message}`
        )
      );
    });
  });

program.parse();
