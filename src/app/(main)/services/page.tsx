import ServiceSection from "@/components/home/ServiceSection";
import IndustriesSection from "@/components/services/IndustriesSection";
import React from "react";

export default function Services() {
  return (
    <div>
      <div className="w-full h-82.5 bg-herobg text-center">
        <div className="mb-6 pt-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-1 text-sm text-pink-400">
            Our Services
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-[40px] font-bold text-white">Every Tool Your Fleet</h1>
            <p className="text-[16px] font-normal text-white/65 w-131">From AI-powered quote generation and vehicle upfitting to fleet consulting and finance — FleetQuoteAI is the all-in-one platform built for commercial fleet professionals.</p>
        </div>
      </div>
        <ServiceSection />
        <IndustriesSection/>
    </div>
  );
}
