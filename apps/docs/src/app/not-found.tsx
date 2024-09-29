"use client";
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
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <AlertTriangle className="w-16 h-16 mx-auto text-yellow-500" />
          </motion.div>
          <CardTitle className="text-2xl text-center mt-4">
            Page Not Found
          </CardTitle>
          <CardDescription className="text-center">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.p
            className="text-center text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            It seems you&apos;ve ventured into uncharted territory. Don&apos;t
            worry, even the best explorers get lost sometimes!
          </motion.p>
        </CardContent>
        <CardFooter className="flex justify-center">
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
