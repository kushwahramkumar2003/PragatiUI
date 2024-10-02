"use client";

import { useState } from "react";
import { DocsList } from "./docs-list";
import { Menu, X } from "lucide-react"; // Assuming you're using lucide-react for icons

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col lg:flex-row">
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>

        <aside
          className={`
            w-64 bg-gray-100 border-r border-gray-200
            fixed top-0 bottom-0 left-0 z-40
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:relative lg:translate-x-0
            overflow-y-auto
          `}
        >
          <div className="pt-16 lg:pt-0">
            <DocsList />
          </div>
        </aside>

        <main className="flex-grow p-6 pt-20 lg:pt-14  overflow-y-auto ">
          {children}
        </main>
      </div>
    </div>
  );
}
