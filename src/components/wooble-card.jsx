"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Who We Are
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Reap Cash was created by short-term rental hosts for short-term
            rental hosts. Our team understands the unique challenges you face in
            managing your rental income and aims to provide solutions that fit
            your needs.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Our Mission
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Empowering short-term rental hosts with fast, flexible financing
          solutions.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            What We Do
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            We offer cash advances on confirmed bookings, enabling you to access
            up to 100% of your future earnings quickly. Our service is designed
            to help you manage cash flow, invest in property improvements, and
            capitalize on growth opportunities.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
