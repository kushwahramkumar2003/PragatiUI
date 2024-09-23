import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-14">
      <Hero />
      <Features />
      <Pricing />
      <About />
    </div>
  );
}
