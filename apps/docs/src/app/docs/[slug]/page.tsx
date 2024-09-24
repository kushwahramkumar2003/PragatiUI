"use client";

import { DocsContent } from "@/components/docs/docs-content";
import { DocsLayout } from "@/components/docs/docs-layout";
import { useParams } from "next/navigation";

export default function DocsPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <DocsLayout>
      <DocsContent selectedSection={slug.replace("-", " ")} />
    </DocsLayout>
  );
}
