"use client";

import { ComponentDetails } from "@/components/components/component-details";
import { ComponentsLayout } from "@/components/components/components-layout";
import { useParams } from "next/navigation";

export default function ComponentPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <ComponentsLayout>
      <ComponentDetails selectedComponent={slug.replace("-", " ")} />
    </ComponentsLayout>
  );
}
