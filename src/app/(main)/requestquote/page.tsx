import QuoteForm from "@/components/QuoteForm/page";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import quoteImage from '../../../../public/images/quoteImage.jpg'

export default function RequestQuote() {
  return (
    <main className=" bg-[#FDFDFF]">
      {/* Hero Section */}
      <section className="relative h-[620px]" style={{
          backgroundImage:
            "url('/images/bannerImage.jpg')",
        }}>
            <div className="absolute inset-0 bg-black/80" />
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full  " />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className=" max-w-2xl py-30">
              <div className="inline-block text-sm bg-primary/10 border border-primary/40 text-primary px-4 py-1 rounded-full mb-3">
                Fleet Quote Request
              </div>

              <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight">
                Get Your Custom Fleet Quote — Fast
              </h1>

              <p className="text-[16px] text-white/80 leading-relaxed">
                Generate accurate, branded fleet vehicle quotes in minutes — not
                hours. Trusted by dealerships and commercial fleet buyers across
                the country.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-4">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-white/80 font-medium">
                    Fleets Quoted
                  </div>
                </div>
                <div className="space-y-1 border-x border-white/5 px-8">
                  <div className="text-2xl font-bold text-primary">1 Day</div>
                  <div className="text-xs text-white/80 font-medium">
                    Avg. Response
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">$0</div>
                  <div className="text-xs text-white/80 font-medium">
                    No Obligation
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image/Graphic Area */}
            <div className="relative group hidden lg:inline-block">
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl blur opacity-20 transition duration-1000 group-hover:opacity-40" /> */}
              <div className=" rounded-3xl overflow-hidden border border-white/10 aspect-video shadow-2xl">
                <Image
                  src={quoteImage}
                  alt="Fleet Vehicles"
                  width={1000}
                  height={600}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* AI Badge Overlay */}
                <div className="absolute -bottom-10 -left-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl flex items-center gap-4 animate-bounce-slow z-100">
                  <div className="w-10 h-10 rounded-xl bg-[#FF44CC] text-white flex items-center justify-center shadow-lg shadow-pink-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#FF44CC] uppercase italic tracking-tighter">
                      AI-Powered
                    </p>
                    <p className="text-xs font-bold text-gray-900">
                      Quotes in Minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Overlapping with Hero */}
      <section className="relative z-20 mt-15 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-5">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
