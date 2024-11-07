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

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start antialiased pt-6">
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
        <section className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8 mt-4">
          <h2 className="text-white">Our Values</h2>
          <LayoutGridDemo />
        </section>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why Choose Reap Cash?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
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
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-blue-500 mb-2" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Community
              </h3>
              <p className="text-neutral-300">
                Join a network of hosts who are unlocking their earnings with
                Reap Cash.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-neutral-300 mb-6">
            Discover how Reap Cash can elevate your rental business.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
            Get Started with Reap Cash
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </div>
    </div>
  );
}
