"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  MapPin,
  Truck,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Check,

} from "lucide-react";
import { quoteSchema } from "../validation/validation";
import WhyFleetQuote from "./cards/WhyFleetQuote";
import PreferToTalk from "./cards/PreferToTalk";
import HowItWorks from "./cards/HowItWorks";

type QuoteFormValues = z.infer<typeof quoteSchema>;

const steps = [
  { id: 1, title: "Contact Info", icon: User },
  { id: 2, title: "Fleet Needs", icon: MapPin },
  { id: 3, title: "Vehicles", icon: Truck },
  { id: 4, title: "Review", icon: CheckCircle2 },
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      fleetSize: "",
      budget: "",
      timeline: "",
      usage: "",
      vehicleTypes: [],
      makes: [],
      upfitNeeds: [],
      specialRequirements: "",
    },
    mode: "onChange",
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormValues)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["firstName", "lastName", "email", "company"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["fleetSize", "budget", "timeline", "usage"];
    } else if (currentStep === 3) {
      fieldsToValidate = ["vehicleTypes"];
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Quote request submitted successfully!");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column: The Form */}
      <div className="col-span-2">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
        <header>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {currentStep === 1 && "Your Contact Info"}
              {currentStep === 2 && "Your Fleet Needs"}
              {currentStep === 3 && "Vehicle Types Needed"}
              {currentStep === 4 && "Review Your Info"}
            </h2>
            <span className="text-primary font-bold text-xs bg-pink-50 px-3 py-1 rounded-full">
              Step {currentStep} of 4
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            {currentStep === 1 && "Tell us who you are."}
            {currentStep === 2 && "What are your specific fleet requirements?"}
            {currentStep === 3 && "What kind of vehicles are you looking for?"}
            {currentStep === 4 && "Almost done! Please review your details."}
          </p>
        </header>

        {/* Stepper Content */}
        <div className="relative mb-12 px-4">
          <div className="absolute top-5 left-8 right-8 h-[2px] bg-gray-100 -z-0" />
          <div
            className="absolute top-5 left-8 h-[2px] bg-primary transition-all duration-500 -z-0"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
          <div className="relative flex justify-between items-center z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep >= step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-pink-200"
                        : "bg-white border-2 border-gray-200 text-gray-400"
                    } ${isCurrent ? "scale-110 ring-4 ring-pink-50" : ""}`}
                  >
                    {isActive && currentStep > step.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-gray-900" : "text-gray-400"}`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                      First Name <span className="text-primary text-xs">*</span>
                    </label>
                    <input
                      {...form.register("firstName")}
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-xs text-red-500 mt-1">
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                      Last Name <span className="text-primary text-xs">*</span>
                    </label>
                    <input
                      {...form.register("lastName")}
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-xs text-red-500 mt-1">
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                      Work Email <span className="text-primary text-xs">*</span>
                    </label>
                    <input
                      {...form.register("email")}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                    />
                    {form.formState.errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      {...form.register("phone")}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                      Company / Organization{" "}
                      <span className="text-primary text-xs">*</span>
                    </label>
                    <input
                      {...form.register("company")}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Job Title
                    </label>
                    <input
                      {...form.register("jobTitle")}
                      placeholder="Fleet Manager"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        How large is your fleet?{" "}
                        <span className="text-primary text-xs">*</span>
                      </label>
                      <select
                        {...form.register("fleetSize")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      >
                        <option value="">Select fleet size</option>
                        <option value="1-10">1-10 Vehicles</option>
                        <option value="11-50">11-50 Vehicles</option>
                        <option value="51-200">51-200 Vehicles</option>
                        <option value="200+">200+ Vehicles</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Estimated annual fleet budget?{" "}
                        <span className="text-primary text-xs">*</span>
                      </label>
                      <select
                        {...form.register("budget")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-100k">Under $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1m">$500k - $1M</option>
                        <option value="over-1m">Over $1M</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="text-sm font-semibold text-gray-700">
                      When do you need vehicles?{" "}
                      <span className="text-primary text-xs">*</span>
                    </label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { label: "ASAP", sub: "< 30 days" },
                        { label: "1-3 Months", sub: "Near term" },
                        { label: "3-6 Months", sub: "Planning" },
                        { label: "6+ Months", sub: "Future" },
                      ].map((option) => (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() =>
                            form.setValue("timeline", option.label)
                          }
                          className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 text-center shadow-sm ${
                            form.watch("timeline") === option.label
                              ? "border-primary bg-pink-50 text-primary shadow-pink-100"
                              : "border-gray-50 bg-gray-50/30 hover:border-pink-200 hover:bg-white"
                          }`}
                        >
                          <span className="text-sm font-bold">
                            {option.label}
                          </span>
                          <span className="text-[10px] opacity-60 uppercase tracking-tighter">
                            {option.sub}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="text-sm font-semibold text-gray-700">
                      Primary Fleet Usage{" "}
                      <span className="text-primary text-xs">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Construction",
                        "Delivery / Logistics",
                        "Utility / Municipal",
                        "Field Service",
                        "Government",
                        "Passenger Transport",
                        "Other",
                      ].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => form.setValue("usage", option)}
                          className={`px-4 py-2.5 rounded-xl border transition-all text-sm font-medium ${
                            form.watch("usage") === option
                              ? "bg-primary text-white border-transparent shadow-lg shadow-pink-200"
                              : "border-gray-100 bg-gray-50/50 text-gray-600 hover:bg-white hover:border-pink-200"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-sm font-semibold text-gray-700">
                      Vehicle Types Needed
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Pickup Trucks",
                        "Cargo Vans",
                        "SUVs",
                        "Box Trucks",
                        "Cutaway Vans",
                        "Medium Duty",
                        "Heavy Duty",
                        "Electric Vehicles",
                      ].map((type) => {
                        const isSelected = form
                          .watch("vehicleTypes")
                          .includes(type);
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              const current = form.getValues("vehicleTypes");
                              if (isSelected) {
                                form.setValue(
                                  "vehicleTypes",
                                  current.filter((t) => t !== type),
                                );
                              } else {
                                form.setValue("vehicleTypes", [
                                  ...current,
                                  type,
                                ]);
                              }
                            }}
                            className={`p-3.5 rounded-xl border text-sm font-medium transition-all text-left flex items-center gap-3 ${
                              isSelected
                                ? "border-primary bg-pink-50 text-primary shadow-sm shadow-pink-100"
                                : "border-gray-100 bg-gray-50/30 text-gray-700 hover:bg-white hover:border-pink-100"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${isSelected ? "bg-primary border-primary" : "border-gray-200 bg-white"}`}
                            >
                              {isSelected && (
                                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                              )}
                            </div>
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-semibold text-gray-700">
                      Preferred Makes (optional)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Ford",
                        "Chevrolet",
                        "RAM",
                        "GMC",
                        "Toyota",
                        "Nissan",
                        "Mercedes-Benz",
                        "Sprinter",
                        "Rivian",
                      ].map((make) => {
                        const isSelected = form.watch("makes")?.includes(make);
                        return (
                          <button
                            key={make}
                            type="button"
                            onClick={() => {
                              const current = form.getValues("makes") || [];
                              if (current.includes(make)) {
                                form.setValue(
                                  "makes",
                                  current.filter((m) => m !== make),
                                );
                              } else {
                                form.setValue("makes", [...current, make]);
                              }
                            }}
                            className={`px-4 py-1.5 rounded-full border text-xs font-bold transition-all ${
                              isSelected
                                ? "bg-gray-900 text-white border-transparent"
                                : "border-gray-200 bg-white text-gray-500 hover:border-gray-900"
                            }`}
                          >
                            {make}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Special Requirements or Notes
                    </label>
                    <textarea
                      {...form.register("specialRequirements")}
                      placeholder="Specific trim levels, color preferences, warranty needs, upfit requirements, etc."
                      className="w-full px-4 py-3 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none h-32 resize-none transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-gray-50/50 border border-gray-100 p-6 rounded-3xl space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200/50 pb-3">
                      <h3 className="font-bold text-gray-900">
                        Contact Information
                      </h3>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-[10px] text-primary font-black uppercase tracking-widest hover:underline px-2 py-1 bg-white rounded-lg border border-gray-100"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 text-sm">
                      <span className="text-gray-400">Full Name</span>
                      <span className="text-gray-900 text-right font-bold">
                        {form.watch("firstName")} {form.watch("lastName")}
                      </span>
                      <span className="text-gray-400">Email Address</span>
                      <span className="text-gray-900 text-right font-bold break-all">
                        {form.watch("email")}
                      </span>
                      <span className="text-gray-400">Company</span>
                      <span className="text-gray-900 text-right font-bold">
                        {form.watch("company")}
                      </span>
                      <span className="text-gray-400">Phone</span>
                      <span className="text-gray-900 text-right font-bold">
                        {form.watch("phone") || "—"}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50/50 border border-gray-100 p-6 rounded-3xl space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200/50 pb-3">
                      <h3 className="font-bold text-gray-900">
                        Fleet Requirements
                      </h3>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="text-[10px] text-primary font-black uppercase tracking-widest hover:underline px-2 py-1 bg-white rounded-lg border border-gray-100"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 text-sm">
                      <span className="text-gray-400">Fleet Size</span>
                      <span className="text-gray-900 text-right font-bold">
                        {form.watch("fleetSize")}
                      </span>
                      <span className="text-gray-400">Estimated Budget</span>
                      <span className="text-gray-900 text-right font-bold">
                        {form.watch("budget")}
                      </span>
                      <span className="text-gray-400">Timeline</span>
                      <span className="text-gray-900 text-right font-bold">
                        {form.watch("timeline")}
                      </span>
                      <span className="text-gray-400">Usage Case</span>
                      <span className="text-gray-900 text-right font-bold">
                        {form.watch("usage")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-blue-50/50 border border-blue-100 rounded-2xl">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-xs text-blue-900/70 leading-relaxed">
                      By submitting this form, I agree to be contacted by a
                      fleet specialist. I understand this is a{" "}
                      <span className="font-bold text-blue-900">
                        no-obligation inquiry
                      </span>
                      . Your data is protected under our{" "}
                      <span className="font-bold cursor-pointer underline hover:text-blue-700">
                        Privacy Policy
                      </span>
                      .
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-100">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-gray-200 text-xs font-black uppercase tracking-widest text-gray-500 hover:bg-gray-50 transition-all active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-pink-200 hover:brightness-105 active:scale-95 transition-all flex items-center gap-3"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-pink-200 hover:brightness-105 active:scale-95 transition-all disabled:opacity-50 flex items-center gap-3"
              >
                {isSubmitting ? "Processing..." : "Submit Quote Request"}
                {!isSubmitting && <Sparkles className="w-4 h-4" />}
              </button>
            )}
          </div>
        </form>
      </div>
      </div>

      {/* Right Column: Information Cards */}
      <div className="space-y-6">
        {/* Why FleetQuoteAI? */}
        <WhyFleetQuote />

        {/* Contact Info */}
        <PreferToTalk />

        {/* Process */}
        <HowItWorks />
      </div>
    </div>
  );
}
