"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What components are included in each plan?",
    answer:
      "Each plan includes a different number of components. The Hobby plan includes 5 basic components, the Pro plan includes 25 components, and the Enterprise plan includes unlimited components. You can find the full list of components for each plan on our documentation page.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated amount for the remainder of your billing cycle. If you downgrade, you'll receive a prorated credit towards your next billing cycle.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial for all our plans. You can sign up for a free trial on our website without entering any payment information.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer different levels of support depending on your plan. The Hobby plan includes community support, the Pro plan includes priority email support, and the Enterprise plan includes 24/7 phone and email support.",
  },
];

export function FAQ() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold leading-10 tracking-tight text-gray-900"
          >
            Frequently asked questions
          </motion.h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
