import fs from "fs";
import path from "path";
import { Config } from "../types";

// TODO: Add support for installing dependencies
export function list() {
  const configPath = path.join(process.cwd(), "pragatiui.config.json");
  if (!fs.existsSync(configPath)) {
    console.error(
      "pragatiui.config.json not found. Run `pragatiui-cli init` first."
    );
    process.exit(1);
  }

  const config: Config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const componentDir = path.join(process.cwd(), config.pragatiUIPath);

  if (!fs.existsSync(componentDir)) {
    console.log("PragatiUI components directory not found.");
    return;
  }

  const components = fs
    .readdirSync(componentDir)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => path.basename(file, ".tsx"));

  console.log("Available components:");
  components.forEach((component) => console.log(`- ${component}`));
}
