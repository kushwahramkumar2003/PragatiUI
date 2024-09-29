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
import { XCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <XCircle className="w-16 h-16 mx-auto text-destructive" />
          </motion.div>
          <CardTitle className="text-2xl text-center mt-4">
            Oops! Something went wrong
          </CardTitle>
          <CardDescription className="text-center">
            We apologize for the inconvenience. An error has occurred.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-center text-muted-foreground mb-4">
              Don&apos;t worry, our team has been notified and we&apos;re
              working on fixing the issue.
            </p>
            {error.message && (
              <p className="text-sm text-destructive text-center border border-destructive/50 rounded-md p-2 bg-destructive/10">
                Error: {error.message}
              </p>
            )}
          </motion.div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={() => reset()} variant="outline">
              Try Again
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </div>
  );
}
