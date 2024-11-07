import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
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
