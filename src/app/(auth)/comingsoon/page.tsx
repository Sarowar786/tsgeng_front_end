import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#e9e9e9] text-center px-6">
      
      {/* subtitle */}
      <p className="text-xl font-semibold tracking-widest text-black mb-6">
        OUR NEW DASHBOARD
      </p>

      {/* title */}
      <h1 className="text-[120px] md:text-[160px] leading-[0.9] font-extrabold 
      bg-linear-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
        COMING <br /> SOON
      </h1>

      {/* button */}
      <Button className="mt-10 px-6 py-3 rounded-lg bg-black text-white text-sm shadow-md hover:opacity-90 transition">
        Notify Me!
      </Button>

      {/* arrow */}
      <div className="absolute bottom-8 animate-bounce text-gray-500 text-xl">
        ↓
      </div>

    </section>
  );
}