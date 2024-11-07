"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Financing that fits your cash flow",
    description:
      "Access up to 100% of your confirmed bookings, transforming                    your future earnings into immediate capital, no matter how                    many bookings you have.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-sm">
        Financing that fits your cash flow
      </div>
    ),
  },
  {
    title: "Financing that fits your timeline",
    description:
      "Get cash in hand within days, not weeks. Reap makes it               simple to advance your booking income so you can keep                    growing your business without delay.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white text-sm">
        Financing that fits your timeline
      </div>
    ),
  },
  {
    title: "Financing that fits your needs",
    description:
      "Say goodbye to the stress of traditional financing. Reap is                    designed for short-term rental hosts, offering flexible                    repayment options that work with your booking schedule.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white text-sm">
        Financing that fits your needs
      </div>
    ),
  },
  {
    title: "Financing that fits your business",
    description:
      "Grow your rental business by reinvesting in property                    upgrades, marketing, or operations. Reap gives you the                    financial freedom to expand when you need it.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-lg">
        Financing that fits your business
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white"></div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 bg-white overflow-hidden">
      <StickyScroll className="text-xs scrollbar-hidden" content={content} />
    </div>
  );
}
