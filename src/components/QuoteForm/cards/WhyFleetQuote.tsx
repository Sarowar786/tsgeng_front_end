import { Sparkles, Clock, ShieldCheck, Briefcase } from "lucide-react";

export default function WhyFleetQuote() {
  const features = [
    {
      icon: Sparkles,
      color: "bg-blue-50 text-blue-600",
      title: "AI-Powered Accuracy",
      desc: "Quotes built from live pricing data, not guesswork.",
    },
    {
      icon: Clock,
      color: "bg-green-50 text-green-600",
      title: "1-Day Turnaround",
      desc: "Receive your custom quote within one business day.",
    },
    {
      icon: ShieldCheck,
      color: "bg-orange-50 text-orange-600",
      title: "No Obligation",
      desc: "Explore options with zero pressure to commit.",
    },
    {
      icon: Briefcase,
      color: "bg-purple-50 text-purple-600",
      title: "Expert Specialists",
      desc: "Dedicated fleet experts guide you through every quote.",
    },
  ];

  return (
    <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/30 space-y-8">
      <h3 className="text-xs font-bold text-brand-primary flex items-center gap-2">
        Why FleetQuoteAI?
      </h3>
      <div className="space-y-8">
        {features.map((feature, i) => (
          <div key={i} className="flex gap-5">
            <div
              className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center shrink-0 shadow-sm shadow-inherit/20`}
            >
              <feature.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                {feature.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
