"use client";

import { ComponentsLayout } from "@/components/components/components-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ComponentsPage() {
  return (
    <ComponentsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Components</h1>
        <p className="text-lg">
          Welcome to the Components page. Here you&apos;ll find an overview of
          the reusable UI components available in our design system.
        </p>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-4">
            Our component library is designed to help you build consistent and
            beautiful user interfaces quickly and efficiently.
          </p>
          <Button
            variant="default"
            onClick={() => {
              window.location.href = "/docs/components/installation";
            }}
          >
            View Installation Guide
          </Button>
        </Card>
        <p className="text-lg">
          Explore the sidebar to see individual component documentation and
          usage examples.
        </p>
      </div>
    </ComponentsLayout>
  );
}
