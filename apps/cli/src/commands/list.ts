import axios from "axios";
import chalk from "chalk";
import ora from "ora";

const GITHUB_API_URL =
  "https://api.github.com/repos/kushwahramkumar2003/PragatiUI/contents/packages/ui/src/components";

export async function list() {
  const spinner = ora("Fetching available components").start();

  try {
    const response = await axios.get(GITHUB_API_URL);
    const files = response.data;

    const components = files
      .filter((file: { name: string }) => file.name.endsWith(".tsx"))
      .map((file: { name: string }) => file.name.replace(".tsx", ""));

    if (components.length === 0) {
      spinner.info(
        chalk.blue("ℹ️ No components found in the PragatiUI repository.")
      );
      return;
    }

    spinner.succeed(chalk.green("✅ Components fetched successfully!"));
    console.log(chalk.cyan("\n🎨 Available components:"));
    components.forEach((component: string) =>
      console.log(chalk.gray(`  • ${component}`))
    );
    console.log(
      chalk.gray(
        "\nUse `pragatiui-cli add <component-name>` to add a component to your project."
      )
    );
  } catch (error) {
    spinner.fail(
      //@ts-ignore
      chalk.red(`❌ Error fetching components from GitHub: ${error.message}`)
    );
    console.log(
      chalk.yellow("Please check your internet connection and try again.")
    );
    console.log(
      chalk.gray(
        "If the problem persists, the repository might be unavailable or you may have reached the API rate limit."
      )
    );
  }
}
