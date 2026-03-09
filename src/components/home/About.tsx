"use client";

import Image from "next/image";
import { BarChart3 } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <span className="inline-block text-sm bg-pink-100 text-primary px-4 py-1 rounded-full mb-6">
              About FleetQuoteAI
            </span>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight mb-6">
              Built for Fleet Sales Teams Who Demand More
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              FleetQuoteAI was built from the ground up by fleet industry
              veterans who understood the pain of manual quoting. We combined
              deep domain expertise with modern AI to create a system that
              handles the complexity — so your team can focus on closing deals.
            </p>

            <p className="text-gray-600 mb-8">
              From MSRP to final pricing with upfits, taxes, and fees —
              FleetQuoteAI calculates everything automatically and outputs a
              professional, branded quote your customers will love.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-5 w-5 flex items-center justify-center rounded-full bg-pink-100 text-primary text-xs">
                  ✓
                </span>
                <p className="text-gray-700 text-sm">
                  Instant pricing with live calculations
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-5 w-5 flex items-center justify-center rounded-full bg-pink-100 text-primary text-xs">
                  ✓
                </span>
                <p className="text-gray-700 text-sm">
                  AI-assisted spec and configuration suggestions
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-5 w-5 flex items-center justify-center rounded-full bg-pink-100 text-primary text-xs">
                  ✓
                </span>
                <p className="text-gray-700 text-sm">
                  One-click PDF export with your branding
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-5 w-5 flex items-center justify-center rounded-full bg-pink-100 text-primary text-xs">
                  ✓
                </span>
                <p className="text-gray-700 text-sm">
                  Built-in upfit and equipment catalog
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative ">
            <Image
              src="/images/aboutImage.jpg"
              alt="Fleet team"
              width={600}
              height={420}
              className="rounded-xl object-cover shadow-lg w-155 h-[450px]"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-8 bg-white shadow-xl rounded-xl px-6 py-4 flex items-center gap-4">
              <div className="h-10 w-10 flex items-center justify-center bg-pink-100 text-primary rounded-lg">
                <BarChart3 size={18} />
              </div>

              <div>
                <p className="font-semibold text-slate-800">40% Faster</p>
                <p className="text-sm text-gray-500">
                  Average quote close rate improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
