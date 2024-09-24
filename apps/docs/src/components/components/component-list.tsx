"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const components = [
  "Button",
  "Card",
  "Checkbox",
  "Dialog",
  "Input",
  "Radio Group",
  "Select",
  "Slider",
  "Switch",
  "Tabs",
  "Textarea",
  "Toast",
];

export function ComponentList() {
  const pathname = usePathname();

  return (
    <nav className="p-4">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <ul className="space-y-2">
        {components.map((component, index) => {
          const href = `/components/${component
            .toLowerCase()
            .replace(" ", "-")}`;
          const isActive = pathname === href;

          return (
            <motion.li
              key={component}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={href} passHref>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {component}
                </Button>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
