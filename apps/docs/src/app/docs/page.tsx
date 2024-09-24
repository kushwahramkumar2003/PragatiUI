"use client";

import { DocsContent } from "@/components/docs/docs-content";
import { DocsLayout } from "@/components/docs/docs-layout";

export default function DocsPage() {
  return (
    <DocsLayout>
      <DocsContent selectedSection="introduction" />
    </DocsLayout>
  );
}
