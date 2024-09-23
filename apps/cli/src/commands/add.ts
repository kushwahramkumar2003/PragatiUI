// import fs from "fs";
// import path from "path";
// import { execSync } from "child_process";
// import { Config } from "../types";

// // TODO: Add support for installing dependencies
// export async function add(components: string[]) {
//   const configPath = path.join(process.cwd(), "pragatiui.config.json");
//   if (!fs.existsSync(configPath)) {
//     console.error(
//       "pragatiui.config.json not found. Run `pragatiui-cli init` first."
//     );
//     process.exit(1);
//   }

//   //parse data from pragatiui.config.json
//   const config: Config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

//   for (const component of components) {
//     const sourceComponentPath = path.join(
//       process.cwd(),
//       config.pragatiUIPath,
//       `${component}.tsx`
//     );
//     const targetComponentPath = path.join(
//       process.cwd(),
//       config.componentPath,
//       `${component}.tsx`
//     );

//     if (!fs.existsSync(sourceComponentPath)) {
//       console.error(`Component ${component} not found in PragatiUI.`);
//       continue;
//     }

//     fs.mkdirSync(path.dirname(targetComponentPath), { recursive: true });
//     fs.copyFileSync(sourceComponentPath, targetComponentPath);

//     console.log(`Added ${component} component to ${config.componentPath}`);

//     // Check for dependencies
//     const dependenciesPath = path.join(
//       process.cwd(),
//       config.pragatiUIPath,
//       `${component}.dependencies.json`
//     );
//     if (fs.existsSync(dependenciesPath)) {
//       const dependencies = JSON.parse(
//         fs.readFileSync(dependenciesPath, "utf-8")
//       ).dependencies;
//       if (dependencies && dependencies.length > 0) {
//         console.log(`Installing dependencies for ${component}...`);
//         execSync(`npm install ${dependencies.join(" ")}`, { stdio: "inherit" });
//       }
//     }
//   }

//   // Update global CSS file if it exists
//   const globalCSSPath = path.join(process.cwd(), config.cssPath);
//   if (fs.existsSync(globalCSSPath)) {
//     const cssContent = fs.readFileSync(globalCSSPath, "utf-8");
//     const pragatiUIImport = `@import '@pragatiui/ui/src/globals.css';`;
//     if (!cssContent.includes(pragatiUIImport)) {
//       fs.writeFileSync(globalCSSPath, `${pragatiUIImport}\n${cssContent}`);
//       console.log(`Updated ${config.cssPath} with PragatiUI styles.`);
//     }
//   } else {
//     console.warn(
//       `Global CSS file not found at ${config.cssPath}. Please manually import PragatiUI styles.`
//     );
//   }
// }

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import axios from "axios";
import { Config } from "../types";

const GITHUB_RAW_CONTENT_URL =
  "https://raw.githubusercontent.com/kushwahramkumar2003/PragatiUI/main/packages/ui/src";

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
    try {
      // Fetch component file from GitHub
      const componentUrl = `${GITHUB_RAW_CONTENT_URL}/${component}.tsx`;
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

      console.log(`Added ${component} component to ${config.componentPath}`);

      // Check for dependencies
      try {
        const dependenciesUrl = `${GITHUB_RAW_CONTENT_URL}/${component}.dependencies.json`;
        const dependenciesResponse = await axios.get(dependenciesUrl);
        const dependencies = dependenciesResponse.data.dependencies;

        if (dependencies && dependencies.length > 0) {
          console.log(`Installing dependencies for ${component}...`);
          execSync(`npm install ${dependencies.join(" ")}`, {
            stdio: "inherit",
          });
        }
      } catch (error) {
        console.log(`No additional dependencies found for ${component}.`);
      }
    } catch (error) {
      //@ts-ignore
      console.error(`Error adding component ${component}:`, error.message);
    }
  }

  // Update global CSS file if it exists
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
