"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AlertOctagon } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Card className="w-full max-w-md">
            <CardHeader>
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <AlertOctagon className="w-16 h-16 mx-auto text-destructive" />
              </motion.div>
              <CardTitle className="text-2xl text-center mt-4">
                Critical Error
              </CardTitle>
              <CardDescription className="text-center">
                We&apos;ve encountered a serious problem. Our team has been
                notified.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-center text-muted-foreground mb-4">
                  We apologize for the inconvenience. Please try refreshing the
                  page or come back later.
                </p>
                {error.message && (
                  <p className="text-sm text-destructive text-center border border-destructive/50 rounded-md p-2 bg-destructive/10">
                    Error: {error.message}
                  </p>
                )}
              </motion.div>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => reset()} variant="outline">
                  Refresh Page
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </div>
      </body>
    </html>
  );
}
