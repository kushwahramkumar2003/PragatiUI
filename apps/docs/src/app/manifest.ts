import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PragatiUI Documentation",
    short_name: "PragatiUI Docs",
    description:
      "Official documentation for PragatiUI - A modern React component library",
    start_url: "/docs",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3498db",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    related_applications: [
      {
        platform: "web",
        url: "https://pragatiui.com",
      },
    ],
    prefer_related_applications: false,
    categories: ["development", "productivity", "utilities"],
    lang: "en-US",
    dir: "ltr",
    orientation: "any",
  };
}
