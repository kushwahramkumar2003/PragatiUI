import { AboutHero } from "@/components/about/about-hero";
import { Mission } from "@/components/about/mission";
import { Team } from "@/components/about/team";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <AboutHero />
      <Team />
      <Mission />
    </div>
  );
}
