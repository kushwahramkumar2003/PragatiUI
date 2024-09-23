"use client";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@pragatiui/ui";
import Card from "../../../../packages/ui/src/components/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="p-4">
        <Card
          gradient={true}
          shadow="lg"
          rounded="xl"
          hover={true}
          className="p-6 max-w-sm mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Example Card</h2>
          <p className="text-gray-600 dark:text-gray-300">
            This is an example of using the Card component with custom props.
          </p>
        </Card>
      </div>
      <h1 className="text-3xl font-bold mb-4">Button Component Examples</h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button>Default Button</Button>
        <Button variant="destructive">Destructive Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="sm">Small Button</Button>
        <Button size="default">Default Size</Button>
        <Button size="lg">Large Button</Button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button isLoading>Loading Button</Button>
        <Button isLoading loadingText="Submitting...">
          Submit
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button leftIcon={<Mail className="h-4 w-4" />}>Email</Button>
        <Button rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="icon" aria-label="Send email">
          <Mail className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
