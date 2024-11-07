"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/beams";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ButtonMoving } from "@/components/ui/moving-border";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start antialiased pt-6">
      <Navbar />
      <div className="max-w-2xl mx-auto p-4 mt-16">
        <h1 className="relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-4 mt-2">
          Contact Us - We&apos;re Here to Help!
        </h1>
        <p className="relative z-10 text-lg md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans mb-8">
          At Reap Cash, we value open communication and are dedicated to
          providing you with the support you need. Whether you have questions
          about our services, need assistance with your application, or want to
          explore partnership opportunities, our team is ready to assist you.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto p-4 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
          <div className="space-y-4 text-neutral-300">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>support@reapcash.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-1" />
              <address className="not-italic">
                Reap Cash
                <br />
                1234 Financial Ave, Suite 100
                <br />
                New York, NY 10001
              </address>
            </div>
            <div>
              <p className="font-semibold">Business Hours:</p>
              <p>Monday to Friday, 9 AM - 6 PM EST</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <LabelInputContainer>
              <Label htmlFor="name" className="text-neutral-300">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-neutral-800 text-white border-neutral-700"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email" className="text-neutral-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="bg-neutral-800 text-white border-neutral-700"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="phone" className="text-neutral-300">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="bg-neutral-800 text-white border-neutral-700"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="message" className="text-neutral-300">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="bg-neutral-800 text-white border-neutral-700"
              />
            </LabelInputContainer>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-4 mt-12">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-300 text-center mb-4">
          Before reaching out, you might find the answer to your question in our
          FAQ Section.
        </p>
        <div className="text-center">
          <Link
            href="/faq"
            className="text-blue-500 hover:text-blue-400 underline"
          >
            Visit our FAQ
          </Link>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-4 mt-12">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Follow Us
        </h2>
        <p className="text-neutral-300 text-center mb-4">
          Stay connected and follow us on our social media channels for updates,
          tips, and more:
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="#" className="text-neutral-300 hover:text-blue-500">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-neutral-300 hover:text-blue-500">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-neutral-300 hover:text-blue-500">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-neutral-300 hover:text-blue-500">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-4 mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
          We Look Forward to Hearing from You!
        </h2>
        <p className="text-neutral-300 mb-6">
          At Reap Cash, we&apos;re committed to helping short-term rental hosts
          access their earnings efficiently. Your inquiries are important to us,
          and we strive to respond promptly.
        </p>
        <ButtonMoving
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xs"
        >
          Apply for Cash Advance
          <ArrowRight className="ml-2 h-4 w-4" />
        </ButtonMoving>
      </div>

      <BackgroundBeams />
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
