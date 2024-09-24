"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$15",
    description: "All the basics for starting a new project",
    features: [
      "5 components",
      "Basic support",
      "Community access",
      "Monthly updates",
    ],
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    priceMonthly: "$30",
    description:
      "Everything in Hobby, plus more components and premium support",
    features: [
      "25 components",
      "Priority support",
      "Community access",
      "Weekly updates",
      "Advanced customization",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Custom",
    description: "Dedicated support and infrastructure for your company",
    features: [
      "Unlimited components",
      "24/7 support",
      "Community access",
      "Daily updates",
      "Advanced customization",
      "Custom integrations",
    ],
    featured: false,
  },
];

export function PricingTiers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that&apos;s packed with the best features
          for engaging your audience, creating customer loyalty, and driving
          sales.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tierIdx * 0.1 }}
              className={`${
                tier.featured ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8"
              } flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={`text-gray-900 ${
                      tier.featured
                        ? "text-2xl font-bold"
                        : "text-lg font-semibold leading-8"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.featured ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={tier.featured ? "default" : "outline"}
                className={`mt-8 ${
                  tier.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : ""
                }`}
              >
                Get started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
