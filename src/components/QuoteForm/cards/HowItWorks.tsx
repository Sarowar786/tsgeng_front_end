export default function HowItWorks() {
  const steps = [
    "Submit your fleet requirements",
    "Specialist reviews & builds your quote",
    "Receive a professional PDF quote",
    "Review, ask questions, and decide",
  ];

  return (
    <div className=" rounded-[2rem] p-8 text-white space-y-8 shadow-xl shadow-gray-200/30 relative overflow-hidden border ">
      <h3 className="text-sm font-bold tracking-wide text-brand-primary">
        How the process works
      </h3>
      <ul className="space-y-6">
        {steps.map((text, idx) => (
          <li key={idx} className="flex gap-4 items-center group">
            <span className="w-8 h-8 rounded-xl bg-white/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 border border-white/5 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
              {idx + 1}
            </span>
            <span className="text-xs text-brand-primary font-medium group-hover:text-primary transition-colors">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
