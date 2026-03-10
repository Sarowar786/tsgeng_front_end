"use client";

import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { schema } from "@/components/validation/validation";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <section className="">
      <div className="text-center mb-14 bg-herobg w-full h-82.5 flex flex-col items-center justify-center">
        <span className="inline-block text-sm bg-primary/10 border border-primary/40 text-primary px-4 py-1 rounded-full mb-3">
          Contact Us
        </span>
        <h2 className="text-2xl md:text-[40px] font-bold text-white">
          Get in Touch
        </h2>
        <p className="text-white/65 mb-6 md:w-xl px-2 md:px-0">
          Whether you need a fleet quote, want to schedule a demo, or have
          questions about our platform — we're here to help.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white border rounded-xl p-8">
            <h1 className="font-bold text-2xl">Request a Fleet Quote</h1>
            <p className="text-sm text-[#6B7280] font-normal pb-4">
              Fill out the form below and we'll respond within 1 business day.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Full Name */}
                <Field className="gap-1">
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                  <Input
                    id="fullName"
                    placeholder="John Smith"
                    autoComplete="off"
                    {...register("fullName")}
                    className="mt-1 placeholder:text-xs"
                  />
                  <FieldError errors={[errors?.fullName]} />
                </Field>

                {/* Email Address */}
                <Field className="gap-1">
                  <FieldLabel htmlFor="email">Email Address</FieldLabel>
                  <Input
                    id="email"
                    placeholder="john@company.com"
                    autoComplete="off"
                    {...register("email")}
                    className="mt-1 placeholder:text-xs"
                  />
                  <FieldError errors={[errors?.email]} />
                </Field>

                {/* Company Name */}
                <Field className="gap-1">
                  <FieldLabel htmlFor="companyName">Company Name</FieldLabel>
                  <Input
                    id="companyName"
                    placeholder="Acme Corporation"
                    autoComplete="off"
                    {...register("companyName")}
                    className="mt-1 placeholder:text-xs"
                  />
                  <FieldError errors={[errors?.companyName]} />
                </Field>

                {/* Phone Number */}
                <Field className="gap-1">
                  <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
                  <Input
                    id="phoneNumber"
                    placeholder="(555) 000-0000"
                    autoComplete="off"
                    {...register("phoneNumber")}
                    className="mt-1 placeholder:text-xs"
                  />
                  <FieldError errors={[errors?.phoneNumber]} />
                </Field>

                {/* Fleet Size */}
                <Field className="col-span-full gap-1">
                  <FieldLabel htmlFor="fleetSize">Fleet Size</FieldLabel>
                  <Input
                    id="fleetSize"
                    placeholder="100"
                    autoComplete="off"
                    {...register("fleetSize")}
                    className="mt-1 placeholder:text-xs"
                  />
                  <FieldError errors={[errors?.fleetSize]} />
                </Field>

                {/* Message */}
                <Field className="col-span-full gap-1">
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your fleet needs..."
                    {...register("message")}
                    className="mt-1 placeholder:text-xs"
                  />
                  <FieldError errors={[errors?.message]} />
                </Field>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="mt-6  w-full h-10 rounded-2xl">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white">
            <div className="border border-gray-200  rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Contact Information
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <Phone
                  size={20}
                  className="text-primary bg-primary/10 size-8 p-2 rounded-xl"
                />
                <div>
                  <p className="text-gray-400 font-semibold text-[12px]">
                    Phone
                  </p>
                  <p className="text-[14px] font-normal">(800) 555-1234</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Mail
                  size={20}
                  className="text-primary bg-primary/10 size-8 p-2 rounded-xl"
                />
                <div>
                  <p className="text-gray-400 font-semibold text-[12px]">
                    Email
                  </p>
                  <p className="text-[14px] font-normal">
                    fleet@fleetquoteai.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin
                  size={20}
                  className="text-primary bg-primary/10 size-8 p-2 rounded-xl"
                />
                <div>
                  <p className="text-gray-400 font-semibold text-[12px]">
                    Address
                  </p>
                  <p className="text-[14px] font-normal">
                    1200 Fleet Drive, Suite <br /> 400 Dallas, TX 75201
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200  rounded-2xl p-6 mt-5">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Business Hours
              </h4>
              <div className="flex flex-col gap-3">
                <div className="text-sm text-gray-500 flex items-center justify-between">
                  <p className="text-brand-primary"> Monday - Friday:</p>
                  <p>8:00 AM - 6:00 PM CST</p>
                </div>
                <div className="text-sm text-gray-500 flex items-center justify-between">
                  <p className="text-brand-primary">Saturday:</p>
                  <p>9:00 AM - 3:00 PM CST</p>
                </div>
                <div className="text-sm text-gray-500 flex items-center justify-between">
                  <p className="text-brand-primary">Sunday:</p>{" "}
                  <p className="text-red-400">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
