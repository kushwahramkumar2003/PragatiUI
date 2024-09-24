"use client";

import { DocsList } from "./docs-list";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col pt-14">
      <div className="flex-grow flex">
        <aside className="w-64 bg-gray-100 border-r border-gray-200 overflow-y-auto">
          <DocsList />
        </aside>
        <main className="flex-grow p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
