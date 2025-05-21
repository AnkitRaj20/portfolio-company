"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Banner2() {
  return (
    <div className="min-h-screen w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full sm:pt-20 pt-60 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Trusted by Brands <br /> Driven by Results.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Explore our work and see how we help businesses grow through
          technology and design.
        </p>
      </div>
    </div>
  );
}
