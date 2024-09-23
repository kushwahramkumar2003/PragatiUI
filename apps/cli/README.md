# PragatiUI CLI

## 🚀 Introduction

PragatiUI CLI is a powerful command-line interface tool designed to streamline the process of adding and managing UI components in your React projects. It allows you to easily integrate components from the PragatiUI library into your project, manage dependencies, and keep your UI consistent and up-to-date.

## 📋 Table of Contents

- [PragatiUI CLI](#pragatiui-cli)
  - [🚀 Introduction](#-introduction)
  - [📋 Table of Contents](#-table-of-contents)
  - [💻 Installation](#-installation)
  - [🛠 Usage](#-usage)
    - [Initialization](#initialization)
    - [Adding Components](#adding-components)
    - [Listing Available Components](#listing-available-components)
  - [⚙️ Configuration](#️-configuration)
  - [🔧 Troubleshooting](#-troubleshooting)
  - [👥 Contributing](#-contributing)
  - [📄 License](#-license)

## 💻 Installation

To install PragatiUI CLI globally on your system, run the following command:

```bash
npm install -g pragatiui-cli
```

This will make the `pragatiui-cli` command available in your terminal.

## 🛠 Usage

### Initialization

Before using PragatiUI CLI in your project, you need to initialize it. Run the following command in your project root:

```shellscript
npx pragatiui-cli init
```

This command will prompt you for some configuration options:

- Component path: Where you want to add the components (default: `src/components/ui`)
- CSS path: Location of your global CSS file (default: `src/app/globals.css`)
- PragatiUI path: Path to the PragatiUI package (default: `node_modules/@pragatiui/ui/src`)

The CLI will create a `pragatiui.config.json` file in your project root with these settings.

### Adding Components

To add a component to your project, use the `add` command followed by the component name(s):

```shellscript
npx pragatiui-cli add button card
```

This command will:

1. Fetch the component(s) from the PragatiUI repository
2. Add the component file(s) to your specified component path
3. Install any necessary dependencies
4. Update your global CSS file with PragatiUI styles (if applicable)

You can add multiple components at once by listing them after the `add` command.

### Listing Available Components

To see a list of all available components in the PragatiUI library, use the `list` command:

```shellscript
npx pragatiui-cli list
```

This will display a list of components that you can add to your project.

## ⚙️ Configuration

The `pragatiui.config.json` file in your project root contains your CLI configuration. You can manually edit this file if needed. The configuration options are:

- `componentPath`: Where components will be added in your project
- `cssPath`: Location of your global CSS file
- `pragatiUIPath`: Path to the PragatiUI package

## 🔧 Troubleshooting

If you encounter any issues while using PragatiUI CLI, try the following:

1. Ensure you have the latest version of the CLI installed:

```shellscript
npm install -g pragatiui-cli@latest
```

2. Check your internet connection, as the CLI needs to fetch components from the GitHub repository.
3. Verify that your `pragatiui.config.json` file exists and contains the correct paths.
4. If you're having issues with a specific component, try running the `list` command to ensure it's available in the PragatiUI library.
5. For permission-related errors, try running the CLI with elevated privileges (e.g., using `sudo` on Unix-based systems).

If problems persist, please open an issue on our GitHub repository with details about the error and your environment.

## 👥 Contributing

We welcome contributions to PragatiUI CLI! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with a clear commit message
4. Push your changes to your fork
5. Submit a pull request to the main repository

Please ensure your code adheres to our coding standards and includes appropriate tests.

## 📄 License

PragatiUI CLI is released under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

For more information, visit our [official documentation](https://pragatiui.dev/docs/cli) or join our [community forum](https://pragatiui.dev/community) for support and discussions.

Happy coding with PragatiUI! 🎨✨

```plaintext
This README provides a comprehensive guide for users of the pragatiui-cli. It covers installation, usage instructions for all commands, configuration details, troubleshooting tips, contribution guidelines, and licensing information. The use of emojis and clear section headers makes it visually appealing and easy to navigate.
```
