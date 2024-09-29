"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Wrench } from "lucide-react";

export default function Maintenance() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <motion.div
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Wrench className="w-16 h-16 mx-auto text-primary" />
          </motion.div>
          <CardTitle className="text-2xl text-center mt-4">
            Under Maintenance
          </CardTitle>
          <CardDescription className="text-center">
            We&apos;re currently performing some updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.p
            className="text-center text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We apologize for the inconvenience. Our site is undergoing scheduled
            maintenance to improve your experience. Please check back soon!
          </motion.p>
        </CardContent>
      </Card>
    </div>
  );
}
