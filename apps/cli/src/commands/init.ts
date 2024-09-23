import fs from "fs";
import path from "path";
import { prompt } from "inquirer";
import { Config } from "../types";

export async function init() {
  const answers = await prompt([
    {
      type: "input",
      name: "componentPath",
      message: "Where do you want to add the components?",
      default: "src/components/ui",
    },
    {
      type: "input",
      name: "cssPath",
      message: "Where is your global CSS file?",
      default: "src/app/globals.css",
    },
    {
      type: "input",
      name: "pragatiUIPath",
      message:
        "Enter the path to PragatiUI package (relative to your project root):",
      default: "node_modules/@pragatiui/ui/src",
    },
  ]);

  const config: Config = {
    componentPath: answers.componentPath,
    cssPath: answers.cssPath,
    pragatiUIPath: answers.pragatiUIPath,
  };

  fs.writeFileSync(
    path.join(process.cwd(), "pragatiui.config.json"),
    JSON.stringify(config, null, 2)
  );

  console.log("Configuration file created successfully!");
}
