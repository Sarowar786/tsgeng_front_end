import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative h-162.5 w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/bannerImage.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-1 text-sm text-pink-400">
              ⚡ AI-Powered Fleet Solutions
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Fleet Vehicle Quotes. <br />
            <span className="text-primary">
              Professional. Instant.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-gray-300 text-lg">
            Generate accurate, branded fleet vehicle quotes in minutes —
            not hours. Trusted by dealerships and commercial fleet
            buyers across the country.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            
            <Button
              size="lg"
              className=" text-white"
              asChild
              
            >
              <Link href="#">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white hover:text-black"
              asChild
            >
              <Link href="#">Admin Login</Link>
            </Button>

          </div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">

            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              No setup fees
            </div>

            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              Instant PDF export
            </div>

            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              Branded templates
            </div>

            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              Free trial
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}