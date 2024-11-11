import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export function CardHoverEffectDemo2() {
  return (
    <div className="max-w-5xl mx-auto px-8 bg-[#f4f2e2]">
      <HoverEffect items={projects1} />
    </div>
  );
}
export const projects = [
  {
    title: "1. Application Submission",
    description:
      "Hosts apply for a cash advance by providing basic property details and booking information through our user-friendly online portal.",
  },
  {
    title: "2. Instant Approval & Offer",
    description:
      "Once the application is submitted, our algorithm evaluates the booking details and provides an instant offer based on up to 100% of the booking value.",
  },
  {
    title: "3. Receive Funds",
    description:
      "Upon accepting the offer, funds are transferred directly to the host's account, allowing them to access their cash within days.",
    // link: "https://google.com",
  },
];

export const projects1 = [
  {
    title: "1. Speed",
    description: "Access cash within days to make timely business decisions.",
  },
  {
    title: "2. Flexibility",
    description:
      "Our repayment plans align with your booking schedule, reducing stress.",
  },
  {
    title: "3. Community",
    description:
      "Join a network of hosts who are unlocking their earnings with Reap Cash.",
    // link: "https://google.com",
  },
];
