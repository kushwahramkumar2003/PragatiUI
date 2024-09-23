import axios from "axios";
import { Config } from "../types";

const GITHUB_API_URL =
  "https://api.github.com/repos/kushwahramkumar2003/PragatiUI/contents/packages/ui/src/components";

export async function list() {
  try {
    const response = await axios.get(GITHUB_API_URL);
    const files = response.data;

    const components = files
      .filter((file: { name: string }) => file.name.endsWith(".tsx"))
      .map((file: { name: string }) => file.name.replace(".tsx", ""));

    if (components.length === 0) {
      console.log("No components found in the PragatiUI repository.");
      return;
    }

    console.log("Available components:");
    components.forEach((component: string) => console.log(`- ${component}`));
  } catch (error) {
    //@ts-ignore
    console.error("Error fetching components from GitHub:", error.message);
    console.error("Please check your internet connection or try again later.");
  }
}
