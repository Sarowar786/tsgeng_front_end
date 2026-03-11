import { Phone, Mail } from "lucide-react";

export default function PreferToTalk() {
  return (
    <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/30 space-y-6">
      <h3 className="text-xs font-black text-brand-primary tracking-wide border-b border-gray-50 pb-4">
        Prefer to talk first?
      </h3>
      <div className="space-y-5">
        <div className="flex items-center gap-4 group cursor-pointer p-1">
          <div className="w-12 h-12 rounded-full bg-pink-50 text-primary flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white shadow-sm shadow-pink-100">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1">
              Call Us
            </p>
            <p className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors">
              (800) 555-1234
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 group cursor-pointer p-1">
          <div className="w-12 h-12 rounded-full bg-pink-50 text-primary flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white shadow-sm shadow-pink-100">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1">
              Email Us
            </p>
            <p className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors underline decoration-pink-100 underline-offset-4">
              fleet@fleetquoteai.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
