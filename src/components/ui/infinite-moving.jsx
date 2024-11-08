"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden bg-[#f4f2e2]">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        cardBackground="background-color: #ff5733"
      />
    </div>
  );
}
// {
//     name: "John Doe",
//     text: "I grew my Airbnb business using Reap. The cash advance allowed me to upgrade my property!",
//   },
//   {
//     name: "Jane Smith",
//     text: "Reap's flexible financing helped me manage my cash flow during slow seasons. Highly recommended!",
//   },
//   {
//     name: "Mike Johnson",
//     text: "The process was so simple and fast. I got the funds I needed to expand my rental portfolio.",
//   },

const testimonials = [
  {
    quote:
      "I grew my Airbnb business using Reap. The cash advance allowed me to upgrade my property!",
    name: "John Doe",
  },
  {
    quote:
      "Reap's flexible financing helped me manage my cash flow during slow seasons. Highly recommended!",
    name: "Jane Smith",
  },
  {
    quote:
      "The process was so simple and fast. I got the funds I needed to expand my rental portfolio.",
    name: "Mike Johnson",
  },
];
