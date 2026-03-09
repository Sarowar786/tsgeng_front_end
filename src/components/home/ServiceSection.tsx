"use client";

import { FileText, ShieldCheck, Users, Zap, BarChart3, Truck } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "AI Quote Generation",
    desc: "Generate accurate, professional fleet quotes in seconds with our AI-powered engine — not hours.",
    color: "text-indigo-500 bg-indigo-100",
  },
  {
    icon: FileText,
    title: "PDF & Document Export",
    desc: "Export branded quotes as professional PDFs with window sticker, spec sheet, or custom templates.",
    color: "text-emerald-500 bg-emerald-100",
  },
  {
    icon: Truck,
    title: "Vehicle Upfitting",
    desc: "Seamlessly add upfit options — utility bodies, lighting, towing packages — with auto-pricing.",
    color: "text-orange-500 bg-orange-100",
  },
  {
    icon: BarChart3,
    title: "Pricing Analytics",
    desc: "Track quote history, conversion rates, and fleet pricing trends across your entire dealership.",
    color: "text-red-500 bg-red-100",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    desc: "Enterprise-grade security keeps your customer and pricing data protected at all times.",
    color: "text-purple-500 bg-purple-100",
  },
  {
    icon: Users,
    title: "Multi-User Access",
    desc: "Manage your entire fleet sales team with role-based permissions and activity logging.",
    color: "text-sky-500 bg-sky-100",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-24 bg-[#F4F6FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="inline-block text-sm bg-pink-100 text-primary px-4 py-1 rounded-full mb-4">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Everything Your Fleet Sales Team Needs
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A complete suite of tools designed to streamline fleet quoting,
            reduce errors, and help you close more deals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border p-8 shadow-sm hover:shadow-md transition"
              >

                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 ${service.color}`}
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}