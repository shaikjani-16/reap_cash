"use client";

import React from "react";
import { BackgroundBeams } from "@/components/ui/beams";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  BarChart3,
  Headphones,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardHoverEffectDemo } from "@/components/card-hoverEffect";

export default function OurSolution() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start antialiased pt-6">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 mt-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
          Our Solution
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-300 mb-6">
            Reap Cash simplifies the cash advance process for short-term rental
            hosts in three easy steps:
          </p>
          <CardHoverEffectDemo />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Benefits
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Immediate Access to Cash
                </h3>
                <p className="text-neutral-300">
                  Eliminate long waits for payouts and access your earnings when
                  you need them most.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Flexible Repayment Options
                </h3>
                <p className="text-neutral-300">
                  Our repayment structure aligns with your booking schedule,
                  ensuring you only pay when you receive guest payments.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Risk-Free Financing
                </h3>
                <p className="text-neutral-300">
                  Enjoy the peace of mind that comes with knowing you only repay
                  when your guests do, minimizing financial stress.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Business Growth
                </h3>
                <p className="text-neutral-300">
                  Use your cash advance to invest in property upgrades,
                  marketing, or operational improvements that drive more
                  bookings.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <DollarSign className="w-6 h-6 text-blue-500 mr-2" />
                  Up to 100% Advance on Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  Access the full value of your confirmed bookings to improve
                  cash flow.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="w-6 h-6 text-blue-500 mr-2" />
                  Automated Collections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  Our system automatically collects repayments when guests pay,
                  streamlining your financial management.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mr-2" />
                  User-Friendly Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  Our intuitive platform makes it easy to apply, manage, and
                  track your cash advances.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Headphones className="w-6 h-6 text-blue-500 mr-2" />
                  Dedicated Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  Our team is here to assist you at every stage of the process,
                  ensuring a smooth experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-neutral-300 mb-6">
            Unlock your rental income with Reap Cash.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </div>

      <BackgroundBeams />
    </div>
  );
}
