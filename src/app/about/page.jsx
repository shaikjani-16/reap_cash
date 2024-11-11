"use client";

import React from "react";
import { BackgroundBeams } from "@/components/ui/beams";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { Spotlight } from "@/components/ui/spotlight";
import {
  ArrowRight,
  Zap,
  Shield,
  HeadphonesIcon,
  Lightbulb,
  Clock,
  Shuffle,
  Users,
} from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { LayoutGridDemo } from "@/components/layoutDemo";
import { WobbleCardDemo } from "@/components/wooble-card";
import { CardHoverEffectDemo2 } from "@/components/card-hoverEffect";

export default function AboutUs() {
  return (
    <div className=" bg-[#f4f2e2] min-h-screen w-full  relative flex flex-col items-center justify-start antialiased pt-6">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <Navbar />

      <div className="max-w-4xl mx-auto p-4 mt-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
          About Us
        </h1>
        <WobbleCardDemo />
        <section className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-5 mt-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
            Our Values
          </h2>
          <LayoutGridDemo />
        </section>
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
            Why Choose Reap Cash?
          </h2>
          <div className="mb-12">
            <CardHoverEffectDemo2 />
            {/* <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-blue-500 mb-2" />
              <h3 className="text-xl font-semibold text-white mb-2">Speed</h3>
              <p className="text-neutral-300">
                Access cash within days to make timely business decisions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shuffle className="w-12 h-12 text-blue-500 mb-2" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Flexibility
              </h3>
              <p className="text-neutral-300">
                Our repayment plans align with your booking schedule, reducing
                stress.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-200 bg-opacity-100 p-2 rounded-lg">
              <div className="rounded-full bg-white p-2">
                <Users className="w-12 h-12 text-blue-500 mb-2" />
              </div>
              <h3 className="text-xl font-semibold text-[#120f07] mb-2">
                Community
              </h3>
              <p className="text">
                Join a network of hosts who are unlocking their earnings with
                Reap Cash.
              </p>
            </div> */}
          </div>
        </section>
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
            Get Started Today
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            Discover how Reap Cash can elevate your rental business.
          </p>
          <Button className="bg-[#041f41] hover:bg-blue-700 text-white rounded-full">
            Get started with Reap Cash
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </div>
    </div>
  );
}
