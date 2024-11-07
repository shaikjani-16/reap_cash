"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon, DollarSign } from "lucide-react"; // Replace with your preferred icons
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
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

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <DollarSign className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl text-blue-600 dark:text-white">
              Reap Cash
            </span>
          </Link>
          <Navbar />
          <div className="flex items-center gap-2">
            {/* Toggle Button */}
            <Button
              variant="outline"
              onClick={toggleTheme}
              className="flex items-center gap-1 p-2"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
              <span className="sr-only">
                {theme === "light"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"}
              </span>
            </Button>
            {/* Other buttons */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              SIGN-UP
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">{/* Main content */}</main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
        <p>shaik</p>
      </footer>
    </div>
  );
}
