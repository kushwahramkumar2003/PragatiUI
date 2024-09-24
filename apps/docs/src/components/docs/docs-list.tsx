"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "components", title: "Components" },
  { id: "theming", title: "Theming" },
  { id: "api", title: "API Reference" },
  { id: "examples", title: "Examples" },
  { id: "cli", title: "CLI Usage" },
];

export function DocsList() {
  const pathname = usePathname();

  return (
    <nav className="p-4">
      <h2 className="text-lg font-semibold mb-4">Documentation</h2>
      <ul className="space-y-2">
        {sections.map((section, index) => {
          const href = `/docs/${section.id}`;
          const isActive = pathname === href;

          return (
            <motion.li
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={href} passHref>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {section.title}
                </Button>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
