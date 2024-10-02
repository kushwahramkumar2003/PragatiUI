"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy, Info } from "lucide-react";

interface ComponentDetailsProps {
  selectedComponent: string;
}

export function ComponentDetails({ selectedComponent }: ComponentDetailsProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "button":
        return <Button>Click me</Button>;
      case "card":
        return (
          <Card className="p-4">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p>This is a card component.</p>
          </Card>
        );
      case "checkbox":
        return <Checkbox />;
      case "dialog":
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a dialog description.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        );
      case "input":
        return <Input placeholder="Type something..." />;
      case "radio group":
        return (
          <RadioGroup defaultValue="option1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="option1" />
              <label htmlFor="option1">Option 1</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="option2" />
              <label htmlFor="option2">Option 2</label>
            </div>
          </RadioGroup>
        );
      case "select":
        return (
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        );
      case "slider":
        return <Slider defaultValue={[50]} max={100} step={1} />;
      case "switch":
        return <Switch />;
      case "tabs":
        return (
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Content for Tab 1</TabsContent>
            <TabsContent value="tab2">Content for Tab 2</TabsContent>
          </Tabs>
        );
      case "textarea":
        return <Textarea placeholder="Type your message here." />;
      case "toast":
        return (
          <Button
            onClick={() =>
              toast({
                title: "Toast Title",
                description: "This is a toast message.",
              })
            }
          >
            Show Toast
          </Button>
        );
      default:
        return <p>Component not found.</p>;
    }
  };

  const renderCode = () => {
    const codeExamples: { [key: string]: string } = {
      button: `import { Button } from "@/components/ui/button"

<Button>Click me</Button>`,
      card: `import { Card } from "@/components/ui/card"

<Card className="p-4">
  <h3 className="text-lg font-semibold">Card Title</h3>
  <p>This is a card component.</p>
</Card>`,
      checkbox: `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />`,
      dialog: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a dialog description.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
      input: `import { Input } from "@/components/ui/input"

<Input placeholder="Type something..." />`,
      "radio group": `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <label htmlFor="option1">Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <label htmlFor="option2">Option 2</label>
  </div>
</RadioGroup>`,
      select: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`,
      slider: `import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[50]} max={100} step={1} />`,
      switch: `import { Switch } from "@/components/ui/switch"

<Switch />`,
      tabs: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for Tab 1</TabsContent>
  <TabsContent value="tab2">Content for Tab 2</TabsContent>
</Tabs>`,
      textarea: `import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Type your message here." />`,
      toast: `import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

const { toast } = useToast()

<Button
  onClick={() =>
    toast({
      title: "Toast Title",
      description: "This is a toast message.",
    })
  }
>
  Show Toast
</Button>`,
    };

    return (
      <div className="relative">
        <SyntaxHighlighter
          language="tsx"
          style={nightOwl}
          customStyle={{
            padding: "1rem",
            borderRadius: "0.375rem",
          }}
        >
          {codeExamples[selectedComponent] || "Component code not found."}
        </SyntaxHighlighter>
        <button
          onClick={() => copyToClipboard(codeExamples[selectedComponent])}
          className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md text-white hover:bg-gray-700 transition-colors"
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
    );
  };

  const renderComponentDetails = () => {
    const componentDetails: { [key: string]: string } = {
      button: "A clickable button component with various styles and states.",
      card: "A container component for grouping related content.",
      checkbox: "An input component for selecting multiple options.",
      dialog:
        "A modal component for displaying content that requires user interaction.",
      input: "A text input component for collecting user input.",
      "radio group":
        "A group of radio buttons for selecting a single option from multiple choices.",
      select: "A dropdown component for selecting an option from a list.",
      slider: "An input component for selecting a value from a range.",
      switch: "A toggle component for switching between two states.",
      tabs: "A component for organizing content into multiple sections.",
      textarea: "A multi-line text input component.",
      toast: "A component for displaying brief, non-intrusive notifications.",
    };

    return componentDetails[selectedComponent] || "No details available.";
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedComponent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold">
          {selectedComponent.charAt(0).toUpperCase() +
            selectedComponent.slice(1)}
        </h2>
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Info size={20} />
            <p className="text-sm text-muted-foreground">
              {renderComponentDetails()}
            </p>
          </div>
          <h3 className="text-xl font-semibold mb-4">Example</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-4">
            {renderComponent()}
          </div>
          <Tabs defaultValue="usage" className="mt-6">
            <TabsList>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="props">Props</TabsTrigger>
            </TabsList>
            <TabsContent value="usage">
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Installation</h4>
                <SyntaxHighlighter
                  language="bash"
                  style={nightOwl}
                  customStyle={{
                    padding: "1rem",
                    borderRadius: "0.375rem",
                  }}
                >
                  {`npx pragatiui-cli add ${selectedComponent}`}
                </SyntaxHighlighter>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Code Example</h4>
                {renderCode()}
              </div>
            </TabsContent>
            <TabsContent value="props">
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Component Props</h4>
                <p className="text-sm text-muted-foreground">
                  For detailed prop information, please refer to the component's
                  TypeScript definition or the official documentation.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
