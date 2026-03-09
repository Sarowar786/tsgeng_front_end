"use client";

import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  message: string;
  initial: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "GM, Lone Star Fleet Center",
    initial: "S",
    message:
      "Our close rate on fleet deals jumped 40% after we started using FleetQuoteAI. The professional presentation really makes a difference.",
  },
  {
    name: "Sarah K.",
    role: "GM, Lone Star Fleet Center",
    initial: "S",
    message:
      "Our close rate on fleet deals jumped 40% after we started using FleetQuoteAI. The professional presentation really makes a difference.",
  },
  {
    name: "Sarah K.",
    role: "GM, Lone Star Fleet Center",
    initial: "S",
    message:
      "Our close rate on fleet deals jumped 40% after we started using FleetQuoteAI. The professional presentation really makes a difference.",
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm bg-pink-100 text-primary px-4 py-1 rounded-full mb-4">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Trusted by Fleet Professionals
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex mb-4 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{item.message}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold">
                  {item.initial}
                </div>

                <div>
                  <p className="font-medium text-slate-800 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
