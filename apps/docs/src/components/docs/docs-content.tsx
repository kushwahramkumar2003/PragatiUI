"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DocsContent({ selectedSection }: { selectedSection: string }) {
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
              projects.
            </p>
            <Card className="p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside">
                <li>Fully customizable components</li>
                <li>Built with accessibility in mind</li>
                <li>Seamless integration with Next.js</li>
                <li>TypeScript support</li>
                <li>Dark mode support</li>
              </ul>
            </Card>
          </>
        );
      case "installation":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">Installation</h2>
            <p className="mb-4">
              To install PragatiUI in your project, run the following command:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md mb-4">
              <code>npm install pragatiui</code>
            </pre>
            <p className="mb-4">Or if you&apos;re using Yarn:</p>
            <pre className="bg-gray-100 p-4 rounded-md mb-4">
              <code>yarn add pragatiui</code>
            </pre>
          </>
        );
      case "usage":
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">Usage</h2>
            <p className="mb-4">
              To use PragatiUI components in your React application, simply
              import them as follows:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md mb-4">
              <code>{`import { Button, Card } from 'pragatiui'

function MyComponent() {
  return (
    <Card>
      <h2>Welcome to PragatiUI</h2>
      <Button>Click me</Button>
    </Card>
  )
}`}</code>
            </pre>
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
            <p>
              For a complete list of components and their usage, please refer to
              our Components section.
            </p>
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
            <Card className="p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">
                Example Theme Configuration
              </h3>
              <pre className="bg-gray-100 p-4 rounded-md">
                <code>{`const theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    // ...
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    // ...
  },
  // ...
}`}</code>
              </pre>
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
              <pre className="bg-gray-100 p-4 rounded-md">
                <code>{`import { Card, Input, Button } from 'pragatiui'

function LoginForm() {
  return (
    <Card>
      <h2>Login</h2>
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button>Submit</Button>
    </Card>
  )
}`}</code>
              </pre>
            </Card>
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
}
