"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { ThreeDCardDemo } from "@/components/card";
import { TypewriterEffectSmooth } from "@/components/ui/typeWriter";
import {
  ArrowRight,
  DollarSign,
  Clock,
  TrendingUp,
  BarChart,
  Zap,
  Moon,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import Navbar from "@/components/navbar";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { LampDemo } from "@/components/ui/lamp";

import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-moving";

import { StickyScrollRevealDemo } from "@/components/stickyscroll";
import FAQPage from "@/components/Faq";
export default function Homepage() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  const icons = [
    <Clock key="home" className="text-blue-800 inline" />, // Assigning a unique key for each icon
    <TrendingUp key="bar" className="text-blue-800" />,
    <BarChart key="trending" className="text-blue-800" />,
  ];
  const words = [
    {
      text: "Your",
    },

    { text: "Short-Term" },

    { text: "Rental" },

    { text: "Deserves" },

    { text: "Fast" },

    { text: "Cash" },

    { text: "Flow." },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {theme === "dark" && (
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="dark"
        />
      )}
      {theme === "light" && (
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="yellow"
        />
      )}
      <header className=" top-0 z-50 w-full border-b bg-white bg-opacity-100 dark:bg-black">
        <div className="container flex h-16 items-center justify-between  bg-white bg-opacity-100">
          <Link className="flex items-center space-x-2" href="/">
            <DollarSign className="h-6 w-6 text-black dark:text-white" />
            <span className="font-bold text-xl text-black dark:text-white">
              Reap Cash
            </span>
          </Link>

          <div className="flex gap-2 bg-none">
            <Button className="bg-[#ffd462] hover:bg-[rgba(255,194,32,0.7)] dark:hover:bg-blue-600 text-[#120f07] rounded-full dark:bg-black dark:text-white dark:border dark:border-white text-bold text-sm">
              Apply Now
            </Button>
            <Button className="bg-[#ffd462] hover:bg-[rgba(255,194,32,0.7)] dark:hover:bg-blue-600 text-[#120f07] rounded-full dark:bg-black dark:text-white dark:border dark:border-white text-bold text-sm">
              Log In
            </Button>
            <Link href="/signup">
              <Button className="bg-[#ffd462] hover:bg-[rgba(255,194,32,0.7)] dark:hover:bg-blue-600 text-[#120f07] rounded-full dark:bg-black dark:text-white dark:border dark:border-white text-bold text-sm">
                Sign up
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button
                onClick={toggleTheme}
                className="flex items-center gap-1 p-2 rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5 text-gray-800" />
                ) : (
                  <Sun className="h-5 w-5 text-yellow-400" />
                )}
                <span className="sr-only">
                  {theme === "light"
                    ? "Switch to Dark Mode"
                    : "Switch to Light Mode"}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#f4f2e2] dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none dark:text-white">
                  <TypewriterEffectSmooth words={words} />
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Reap Cash empowers short-term rental hosts to get instant
                  advances on confirmed bookings, helping you grow and manage
                  your business with ease.
                </p>
              </div>
              <div className="space-x-4">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#ffd462,45%,#fff,55%,#ffd462)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-[#120f07] rounded-full border-dotted">
                  Reap Cash Now
                </button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#ffd462,45%,#fff,55%,#ffd462)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-[#120f07] rounded-full border-dotted">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-1">
          <GridBackgroundDemo>
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-1 text-[#052041]">
                Your Rental Income Should Work on Your Schedule, Not Theirs
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4 ">
              <ThreeDCardDemo
                Icon={icons[0]}
                Text1={"You're Waiting Too Long for Payouts"}
                Text2={
                  "Earnings from your confirmed bookings are locked up for weeks, limiting your ability to cover expenses or invest back into your property."
                }
              />
              <ThreeDCardDemo
                Icon={icons[1]}
                Text1={"You're Missing Opportunities to Upgrade"}
                Text2={
                  "You want to enhance your rental's appeal, but delayed payouts hold you back from making timely improvements that attract more guests."
                }
              />
              <ThreeDCardDemo
                Icon={icons[2]}
                Text1={"You're Dealing with Unpredictable Cash Flow"}
                Text2={
                  "Unreliable payment schedules make it difficult to plan ahead for your business, manage your budget, or seize opportunities when they arise."
                }
              />
            </div>
          </GridBackgroundDemo>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 bg-opacity-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#120f07] sm:text-4xl md:text-5xl">
                Join a Growing Community of Rental Hosts Who Are Unlocking Their
                Earnings with Reap Cash
              </h2>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#ffd462,45%,#fff,55%,#ffd462)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-[#120f07] rounded-full border-dotted">
                  Reap Cash Now
                </button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#ffd462,45%,#fff,55%,#ffd462)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-[#120f07] rounded-full border-dotted">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <GridBackgroundDemo>
          <section className="w-full py-12 md:py-24 lg:py-10 dark:bg-gray-50 bg-gray-50 text-black bg-opacity-100">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12 bg-gray-50 bg-opacity-100">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                  Unlock Your Rental Income, Simplified.
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Reap Cash gives rental hosts fast access to their future
                  earnings with ease and flexibility.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Get Started Today
                </Button>
              </div>
            </div>
            <StickyScrollRevealDemo />
          </section>
        </GridBackgroundDemo>

        <section className="w-full py-12 md:py-24 lg:pt-15 lg:pb-15 bg-blue-50 bg-opacity-100 dark:bg-gray-400 ">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-[#fff] p-2 border rounded-full">
                <p className="text-sm font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#002E25] text-bold">
                  Join Hosts Who Are Growing with Reap Cash
                </p>
              </div>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Discover how Reap is helping hosts unlock their rental income
                faster.
              </p>
              <Button className="bg-[#041f41] hover:bg-blue-700 text-white rounded-full">
                Get Your Cash Advance
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <FAQPage />

        <InfiniteMovingCardsDemo />
      </main>

      <footer className="w-full py-6 bg-gray-100 bg-opacity-100 dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-2 dark:text-gray-200">
                Our Solutions
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline  dark:text-gray-600"
                  >
                    Cash Advances
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Flexible Repayment Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Risk-Free Financing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Automated Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Business Growth Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 dark:text-gray-200">
                Resources
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Customer Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 dark:text-gray-200">
                Connect with Us
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 dark:text-gray-200">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline dark:text-gray-600"
                  >
                    Trust Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <p className="text-xs text-gray-500 text-center dark:text-gray-200">
              © 2024 Reap Cash. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
