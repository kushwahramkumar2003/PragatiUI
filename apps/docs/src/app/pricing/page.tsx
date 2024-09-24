import { FAQ } from "@/components/pricing/faq";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingTiers } from "@/components/pricing/pricing-tiers";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <PricingHero />
      <PricingTiers />
      <FAQ />
    </div>
  );
}
