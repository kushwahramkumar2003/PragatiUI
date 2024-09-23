import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import { Config } from "../types";

export async function init() {
  console.log(chalk.cyan("🚀 Welcome to PragatiUI CLI Initialization!"));
  console.log(chalk.gray("Let's set up your project configuration.\n"));

  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "componentPath",
        message: "Where do you want to add the components?",
        default: "src/components/ui",
        validate: (input) =>
          input.trim() !== "" || "Component path cannot be empty",
      },
      {
        type: "input",
        name: "cssPath",
        message: "Where is your global CSS file?",
        default: "src/app/globals.css",
        validate: (input) => input.trim() !== "" || "CSS path cannot be empty",
      },
      {
        type: "input",
        name: "pragatiUIPath",
        message:
          "Enter the path to PragatiUI package (relative to your project root):",
        default: "node_modules/@pragatiui/ui/src",
        validate: (input) =>
          input.trim() !== "" || "PragatiUI path cannot be empty",
      },
    ]);

    const config: Config = {
      componentPath: answers.componentPath,
      cssPath: answers.cssPath,
      pragatiUIPath: answers.pragatiUIPath,
    };

    const spinner = ora("Creating configuration file").start();

    try {
      fs.writeFileSync(
        path.join(process.cwd(), "pragatiui.config.json"),
        JSON.stringify(config, null, 2)
      );
      spinner.succeed(
        chalk.green("✅ Configuration file created successfully!")
      );
      console.log(
        chalk.cyan("\n🎉 PragatiUI CLI is now initialized and ready to use!")
      );
      console.log(
        chalk.gray(
          "You can start adding components using `pragatiui-cli add <component-name>`"
        )
      );
    } catch (error) {
      spinner.fail(
        //@ts-ignore
        chalk.red(`❌ Error creating configuration file: ${error.message}`)
      );
      console.log(
        chalk.yellow(
          "Please make sure you have write permissions in the current directory."
        )
      );
    }
  } catch (error) {
    console.error(
      //@ts-ignore
      chalk.red(`❌ An unexpected error occurred: ${error.message}`)
    );
    console.log(chalk.yellow("Please try running the init command again."));
  }
}
