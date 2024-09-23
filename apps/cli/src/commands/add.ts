import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import axios from "axios";
import chalk from "chalk";
import ora from "ora";
import { Config } from "../types";

const GITHUB_RAW_CONTENT_URL =
  "https://raw.githubusercontent.com/kushwahramkumar2003/PragatiUI/main/packages/ui/src";

export async function add(components: string[]) {
  const spinner = ora("Initializing").start();

  try {
    const configPath = path.join(process.cwd(), "pragatiui.config.json");
    if (!fs.existsSync(configPath)) {
      spinner.fail(chalk.red("pragatiui.config.json not found. 😕"));
      console.log(
        chalk.yellow(
          "Please run `pragatiui-cli init` first to set up your project."
        )
      );
      process.exit(1);
    }

    const config: Config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

    for (const component of components) {
      spinner.text = `Adding ${component} component`;

      try {
        // Fetch component file from GitHub
        const componentUrl = `${GITHUB_RAW_CONTENT_URL}/components/${component}.tsx`;
        const response = await axios.get(componentUrl);
        const componentContent = response.data;

        // Write component file to user's project
        const targetComponentPath = path.join(
          process.cwd(),
          config.componentPath,
          `${component}.tsx`
        );
        fs.mkdirSync(path.dirname(targetComponentPath), { recursive: true });
        fs.writeFileSync(targetComponentPath, componentContent);

        spinner.succeed(
          chalk.green(
            `✅ Added ${component} component to ${config.componentPath}`
          )
        );

        // Check for dependencies
        spinner.text = `Checking dependencies for ${component}`;
        try {
          const dependenciesUrl = `${GITHUB_RAW_CONTENT_URL}/metadata/${component}.dependencies.json`;
          const dependenciesResponse = await axios.get(dependenciesUrl);
          const dependencies = dependenciesResponse.data.dependencies;

          if (dependencies && dependencies.length > 0) {
            spinner.text = `Installing dependencies for ${component}`;
            execSync(`npm install ${dependencies.join(" ")}`, {
              stdio: "inherit",
            });
            spinner.succeed(
              chalk.green(`✅ Installed dependencies for ${component}`)
            );
          } else {
            spinner.info(
              chalk.blue(`ℹ️ No additional dependencies for ${component}`)
            );
          }
        } catch (error) {
          spinner.info(
            chalk.blue(`ℹ️ No additional dependencies found for ${component}`)
          );
        }
      } catch (error) {
        spinner.fail(
          //@ts-ignore
          chalk.red(`❌ Error adding component ${component}: ${error.message}`)
        );
        console.log(
          chalk.yellow("Skipping this component and continuing with others...")
        );
      }
    }

    // Update global CSS file if it exists
    const globalCSSPath = path.join(process.cwd(), config.cssPath);
    if (fs.existsSync(globalCSSPath)) {
      const cssContent = fs.readFileSync(globalCSSPath, "utf-8");
      const pragatiUIImport = `@import '@pragatiui/ui/src/globals.css';`;
      if (!cssContent.includes(pragatiUIImport)) {
        fs.writeFileSync(globalCSSPath, `${pragatiUIImport}\n${cssContent}`);
        spinner.succeed(
          chalk.green(`✅ Updated ${config.cssPath} with PragatiUI styles`)
        );
      } else {
        spinner.info(
          chalk.blue(
            `ℹ️ PragatiUI styles already imported in ${config.cssPath}`
          )
        );
      }
    } else {
      spinner.warn(
        chalk.yellow(
          `⚠️ Global CSS file not found at ${config.cssPath}. Please manually import PragatiUI styles.`
        )
      );
    }

    spinner.succeed(chalk.green("🎉 All operations completed successfully!"));
  } catch (error) {
    spinner.fail(
      //@ts-ignore
      chalk.red(`❌ An unexpected error occurred: ${error.message}`)
    );
    console.log(
      chalk.yellow("Please check your internet connection and try again.")
    );
    process.exit(1);
  }
}
