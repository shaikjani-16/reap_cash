import React from "react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How do I qualify for a cash advance?",
    answer:
      "To qualify for a cash advance with Reap Cash, you need to be an active short-term rental host with a good booking history. We look at factors such as your average booking rate, occupancy, and overall account health. Generally, if you have consistent bookings and a good track record, you're likely to qualify.",
  },
  {
    question: "What platforms do you integrate with?",
    answer:
      "We currently integrate with major short-term rental platforms including Airbnb, VRBO, and Booking.com. We're constantly working on expanding our integrations to support more platforms. If you use a platform we don't currently support, please reach out to us.",
  },
  {
    question: "What if a guest cancels?",
    answer:
      "If a guest cancels a booking for which you've received an advance, you won't be required to repay that portion of the advance. Our model is designed to protect hosts from cancellation risks. We only collect repayment when the guest's stay is completed and you receive payment.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security very seriously. We use bank-level encryption and security measures to protect your personal and financial information. We never store your platform login credentials, and we're compliant with all relevant data protection regulations.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No, we pride ourselves on transparency. The only fee we charge is the clearly stated 2% per advance. There are no hidden fees, no origination fees, and no early repayment penalties. What you see is what you get.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main className="flex-1 dark:bg-black">
        <section className="w-full py-12 md:py-24 lg:py-20 dark:bg-black">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-blue-600">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Find answers to common questions about Reap Cash and our services.
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="dark:text-white"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-blue-600">
                  Still have questions?
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-gray-600 text-center mb-6">
                  Our team is here to help. Reach out to us for personalized
                  assistance.
                </p>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section> */}
      </main>
      {/* <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <HelpCircle className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-blue-600">Reap Cash Support</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="/contact"
              >
                Contact Us
              </Link>
            </nav>
            <p className="text-xs text-gray-500">
              © 2024 Reap Cash. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
