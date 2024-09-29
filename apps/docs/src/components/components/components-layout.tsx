"use client";

import React, { useState } from "react";
import { ComponentList } from "./component-list";

export function ComponentsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col pt-14">
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar toggle button for mobile */}
        <button
          className="md:hidden bg-gray-200 p-2 m-2 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>

        {/* Sidebar */}
        <aside
          className={`
            ${sidebarOpen ? "block" : "hidden"}
            md:block
            w-full md:w-64 bg-gray-100 border-r border-gray-200 overflow-y-auto
            fixed md:static inset-0 z-50
          `}
        >
          {/* Close button for mobile */}
          <button
            className="md:hidden absolute top-2 right-2 bg-gray-200 p-2 rounded"
            onClick={() => setSidebarOpen(false)}
          >
            Close
          </button>
          <ComponentList />
        </aside>

        {/* Main content */}
        <main className="flex-grow p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
