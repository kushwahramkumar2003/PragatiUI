#!/usr/bin/env node

import { Command } from "commander";
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
  .action(init);

program
  .command("add <component...>")
  .description("Add a new component")
  .action(add);

program.command("list").description("List available components").action(list);

program.parse();
