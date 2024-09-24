"use client";

import { useState } from "react";
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

export function ComponentDetails({
  selectedComponent,
}: {
  selectedComponent: string;
}) {
  const [showCode, setShowCode] = useState(false);
  const { toast } = useToast();

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
      button: `<Button>Click me</Button>`,
      card: `<Card className="p-4">
  <h3 className="text-lg font-semibold">Card Title</h3>
  <p>This is a card component.</p>
</Card>`,
      checkbox: `<Checkbox />`,
      dialog: `<Dialog>
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
      input: `<Input placeholder="Type something..." />`,
      "radio group": `<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <label htmlFor="option1">Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <label htmlFor="option2">Option 2</label>
  </div>
</RadioGroup>`,
      select: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`,
      slider: `<Slider defaultValue={[50]} max={100} step={1} />`,
      switch: `<Switch />`,
      tabs: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for Tab 1</TabsContent>
  <TabsContent value="tab2">Content for Tab 2</TabsContent>
</Tabs>`,
      textarea: `<Textarea placeholder="Type your message here." />`,
      toast: `const { toast } = useToast()

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
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {codeExamples[selectedComponent] || "Component code not found."}
        </code>
      </pre>
    );
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
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Example</h3>
          {renderComponent()}
        </div>
        <div>
          <Button onClick={() => setShowCode(!showCode)}>
            {showCode ? "Hide Code" : "Show Code"}
          </Button>
          <AnimatePresence>
            {showCode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                {renderCode()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
