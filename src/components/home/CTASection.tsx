"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-[#233455] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Fleet Quoting?
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Join 150+ dealerships using FleetQuoteAI to deliver professional
          quotes faster, close more fleet deals, and grow their business.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className=" hover:bg-primary/90 h-14.5 text-white"
            asChild
          >
            <Link href="#">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-gray-400 bg-transparent h-14.5 text-white hover:bg-white hover:text-black"
            asChild
          >
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
