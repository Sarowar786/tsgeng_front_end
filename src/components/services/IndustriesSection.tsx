"use client";

import {
  Briefcase,
  Truck,
  Users,
  Shield,
  MoveRight,
  FileText,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { name: "Construction", icon: Briefcase },
  { name: "Delivery & Logistics", icon: Truck },
  { name: "Municipal / Government", icon: Users },
  { name: "Field Services", icon: Briefcase },
  { name: "Transportation", icon: Truck },
  { name: "Utilities", icon: Shield },
  { name: "Manufacturing", icon: Briefcase },
  { name: "Public Safety", icon: Users },
];

const stats = [
  {
    value: "50+",
    label: "Vehicle Makes & Models",
    icon: <Truck size={24} className="bg-[#5A6ACF]/10 text-[#5A6ACF] w-8 h-8 rounded-lg p-2  border-[#5A6ACF] " />,
  },
  {
    value: "5,000+",
    label: "Quotes Delivered",
    icon: <FileText size={24} className="bg-[#FF8A65]/10 text-[#FF8A65] w-8 h-8 rounded-lg p-2  border-[#FF8A65]" />,
  },
  {
    value: "150+",
    label: "Fleet Dealerships",
    icon: <Users size={24} className="bg-[#00B5B8]/10 text-[#00B5B8] w-8 h-8 rounded-lg p-2  border-[#00B5B8]" />,
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
    icon: <Cloud size={24} className="bg-[#FFD700]/15 text-[#FFD700] w-8 h-8 rounded-lg p-2  border-[#FFD700]" />,
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-start mb-16">
          <span className="inline-block text-sm bg-[#5A6ACF]/10 text-[#5A6ACF] px-4 py-1 rounded-full mb-4">
            Industries We Serve
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Built for the Industries That Keep America Moving
              </h2>

              <p className="text-brand-primary max-w-2xl mt-4 text-[14px]">
                Whether you're building a construction fleet, managing municipal
                vehicles, or equipping a field service operation, FleetQuoteAI
                has the tools and expertise to deliver quotes tailored to your
                industry's needs.
              </p>
              <div className="flex flex-wrap gap-3 mb-10 mt-5">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-[#F9FAFB] text-sm font-semibold text-gray-700 rounded-full px-4 py-2 border border-[#E5E7EB]"
                  >
                    <industry.icon size={16} className="text-[#5A6ACF]" />
                    {industry.name}
                  </span>
                ))}
              </div>
              {/* Request Button */}
              <div className="text-start">
                <Button
                  size="lg"
                  className=" hover:bg-primary/80 text-white duration-300"
                  asChild
                >
                  <a href="#">
                    Request Your Industry Quote{" "}
                    <span>
                      <MoveRight />
                    </span>
                  </a>
                </Button>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 border rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className=" mb-4">{stat.icon}</div>
                  <h3 className="text-4xl font-semibold text-slate-800">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
