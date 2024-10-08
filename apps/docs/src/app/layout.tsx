import { Footer } from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PragatiUI Documentation",
  description:
    "Official documentation for PragatiUI - A modern React component library",
  manifest: "./manifest.ts",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// export const metadata = {
//   icon: "/favicon.ico",
//   title: "PragatiUI - Beautiful UI components for your Next.js projects",
//   description:
//     "PragatiUI provides a set of accessible, reusable, and composable React components that make it super easy to create websites and apps.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />;
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
