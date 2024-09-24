"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        customStyle={{
          padding: "1rem",
          borderRadius: "0.375rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md text-white hover:bg-gray-700 transition-colors"
        aria-label={copied ? "Copied" : "Copy to clipboard"}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
};

interface DocsContentProps {
  selectedSection: string;
}

export const DocsContent: React.FC<DocsContentProps> = ({
  selectedSection,
}) => {
  const renderContent = () => {
    switch (selectedSection) {
      case "introduction":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">
              Introduction to PragatiUI
            </h2>
            <p className="mb-4">
              PragatiUI is a modern, customizable, and accessible UI component
              library for React and Next.js applications. It provides a set of
              high-quality components that you can easily integrate into your
              projects, along with a powerful CLI tool for streamlined
              development.
            </p>
            <Card className="p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside">
                <li>Fully customizable components</li>
                <li>Built with accessibility in mind</li>
                <li>Seamless integration with Next.js</li>
                <li>TypeScript support</li>
                <li>Dark mode support</li>
                <li>Powerful CLI for rapid development</li>
              </ul>
            </Card>
          </>
        );
      case "installation":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">Installation</h2>
            <p className="mb-4">
              To install PragatiUI and its CLI in your project, run one of the
              following commands:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Using npm:</h3>
            <CodeBlock
              code="npm install pragatiui pragatiui-cli"
              language="bash"
            />
            <h3 className="text-xl font-semibold mt-6 mb-2">Using Yarn:</h3>
            <CodeBlock
              code="yarn add pragatiui pragatiui-cli"
              language="bash"
            />
            <p className="mt-4 mb-4">
              After installation, you can use the PragatiUI CLI by running:
            </p>
            <CodeBlock code="npx pragatiui-cli" language="bash" />
          </>
        );
      case "usage":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">Usage</h2>
            <h3 className="text-xl font-semibold mt-6 mb-2">
              Using Components
            </h3>
            <p className="mb-4">
              To use PragatiUI components in your React application, simply
              import them as follows:
            </p>
            <CodeBlock
              code={`import React from 'react';
import { Button, Card } from 'pragatiui';

const MyComponent: React.FC = () => {
  return (
    <Card>
      <h2>Welcome to PragatiUI</h2>
      <Button>Click me</Button>
    </Card>
  );
};

export default MyComponent;`}
              language="typescript"
            />
            <h3 className="text-xl font-semibold mt-6 mb-2">Using the CLI</h3>
            <p className="mb-4">
              The PragatiUI CLI provides several commands to help you develop
              faster:
            </p>
            <CodeBlock
              code={`# Create a new NextJS project with tailwindcss
npx create-next-app@latest <project-name>

# Add a new component to your project
npx pragatiui-cli add button

# Generate a theme file
npx pragatiui-cli theme

# List all available components
npx pragatiui-cli list`}
              language="bash"
            />
          </>
        );
      case "components":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">Components</h2>
            <p className="mb-4">
              PragatiUI offers a wide range of components. Here are some of the
              most commonly used ones:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Button</li>
              <li>Card</li>
              <li>Input</li>
              <li>Checkbox</li>
              <li>Select</li>
              <li>Modal</li>
              <li>Tabs</li>
            </ul>
            <p className="mb-4">
              You can add these components to your project using the CLI:
            </p>
            <CodeBlock
              code="npx pragatiui-cli add button card input checkbox select modal tabs"
              language="bash"
            />
            <p className="mt-4">For a complete list of components, run:</p>
            <CodeBlock code="npx pragatiui-cli list" language="bash" />
          </>
        );
      case "theming":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">Theming</h2>
            <p className="mb-4">
              PragatiUI supports custom theming to match your brand&apos;s look
              and feel. You can customize colors, typography, spacing, and more.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Using the CLI</h3>
            <p className="mb-4">Generate a theme file using the CLI:</p>
            <CodeBlock code="npx pragatiui-cli theme" language="bash" />
            <h3 className="text-xl font-semibold mt-6 mb-2">
              Example Theme Configuration
            </h3>
            <Card className="p-4 mb-4">
              <CodeBlock
                code={`import { createTheme } from 'pragatiui';

const theme = createTheme({
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ffffff',
    text: '#333333',
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
    },
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
});

export default theme;`}
                language="typescript"
              />
            </Card>
          </>
        );
      case "api":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">API Reference</h2>
            <p className="mb-4">
              For detailed information about each component&apos;s props and
              usage, please refer to our API documentation.
            </p>
            <Button>View Full API Reference</Button>
            <h3 className="text-xl font-semibold mt-6 mb-2">CLI Commands</h3>
            <CodeBlock
              code={`# Create a new NextJS project with tailwindcss
npx create-next-app@latest <project-name>

# Add a component
npx pragatiui-cli add <component-name>

# Generate a theme file
npx pragatiui-cli theme

# List available components
npx pragatiui-cli list

# Get help
npx pragatiui-cli --help`}
              language="bash"
            />
          </>
        );
      case "examples":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">Examples</h2>
            <p className="mb-4">
              Here are some example use cases for PragatiUI components:
            </p>
            <Card className="p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">Login Form</h3>
              <CodeBlock
                code={`import React, { useState } from 'react';
import { Card, Input, Button } from 'pragatiui';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { username, password });
  };

  return (
    <Card className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;`}
                language="typescript"
              />
            </Card>
            <p className="mt-4 mb-4">
              You can quickly set up this example using the CLI:
            </p>
            <CodeBlock
              code={`# Add required components
npx pragatiui-cli add card input button

# Create a new file for the login form
touch LoginForm.tsx

# Now you can copy the code above into LoginForm.tsx`}
              language="bash"
            />
          </>
        );
      case "cli":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">CLI Usage</h2>
            <p className="mb-4">
              The PragatiUI CLI is a powerful tool to streamline your
              development process. Here are the main commands:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-2">
              Create a new project with tailwindcss
            </h3>
            <CodeBlock code="npx create-next-app@latest" language="bash" />
            <h3 className="text-xl font-semibold mt-6 mb-2">
              Install PragatiUI
            </h3>
            <CodeBlock code="npx pragatiui-cli init" language="bash" />
            <h3 className="text-xl font-semibold mt-6 mb-2">Add a component</h3>
            <CodeBlock code="npx pragatiui-cli add button" language="bash" />
            {/* <h3 className="text-xl font-semibold mt-6 mb-2">
              Generate a theme file
            </h3>
            <CodeBlock code="npx pragatiui-cli theme" language="bash" /> */}
            <h3 className="text-xl font-semibold mt-6 mb-2">
              List available components
            </h3>
            <CodeBlock code="npx pragatiui-cli list" language="bash" />
            {/* <h3 className="text-xl font-semibold mt-6 mb-2">Get help</h3>
            <CodeBlock code="npx pragatiui-cli --help" language="bash" /> */}
            <p className="mt-4 mb-4">
              The CLI integrates seamlessly with your development workflow,
              allowing you to quickly scaffold projects, add components, and
              customize your PragatiUI setup.
            </p>
          </>
        );
      default:
        return <p>Select a section from the sidebar to view its content.</p>;
    }
  };

  return (
    <motion.div
      key={selectedSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto"
    >
      {renderContent()}
    </motion.div>
  );
};
