import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { Config } from "../types";

export async function add(components: string[]) {
  const configPath = path.join(process.cwd(), "pragatiui.config.json");
  if (!fs.existsSync(configPath)) {
    console.error(
      "pragatiui.config.json not found. Run `pragatiui-cli init` first."
    );
    process.exit(1);
  }

  const config: Config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

  for (const component of components) {
    const sourceComponentPath = path.join(
      process.cwd(),
      config.pragatiUIPath,
      `${component}.tsx`
    );
    const targetComponentPath = path.join(
      process.cwd(),
      config.componentPath,
      `${component}.tsx`
    );

    if (!fs.existsSync(sourceComponentPath)) {
      console.error(`Component ${component} not found in PragatiUI.`);
      continue;
    }

    fs.mkdirSync(path.dirname(targetComponentPath), { recursive: true });
    fs.copyFileSync(sourceComponentPath, targetComponentPath);

    console.log(`Added ${component} component to ${config.componentPath}`);

    // Check for dependencies
    const dependenciesPath = path.join(
      process.cwd(),
      config.pragatiUIPath,
      `${component}.dependencies.json`
    );
    if (fs.existsSync(dependenciesPath)) {
      const dependencies = JSON.parse(
        fs.readFileSync(dependenciesPath, "utf-8")
      ).dependencies;
      if (dependencies && dependencies.length > 0) {
        console.log(`Installing dependencies for ${component}...`);
        execSync(`npm install ${dependencies.join(" ")}`, { stdio: "inherit" });
      }
    }
  }

  // Update global CSS file
  const globalCSSPath = path.join(process.cwd(), config.cssPath);
  if (fs.existsSync(globalCSSPath)) {
    const cssContent = fs.readFileSync(globalCSSPath, "utf-8");
    const pragatiUIImport = `@import '@pragatiui/ui/src/globals.css';`;
    if (!cssContent.includes(pragatiUIImport)) {
      fs.writeFileSync(globalCSSPath, `${pragatiUIImport}\n${cssContent}`);
      console.log(`Updated ${config.cssPath} with PragatiUI styles.`);
    }
  } else {
    console.warn(
      `Global CSS file not found at ${config.cssPath}. Please manually import PragatiUI styles.`
    );
  }
}
