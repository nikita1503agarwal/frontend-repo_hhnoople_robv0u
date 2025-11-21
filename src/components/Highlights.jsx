import { Shield, Sparkles, Workflow } from "lucide-react";

export default function Highlights() {
  const features = [
    {
      icon: <Shield className="text-emerald-700" size={20} />,
      title: "Sovereign-Grade Security",
      desc: "Privacy-first AI infrastructure meeting national data standards.",
    },
    {
      icon: <Workflow className="text-emerald-700" size={20} />,
      title: "Industry Acceleration",
      desc: "From energy to healthcare, tailored AI workflows at scale.",
    },
    {
      icon: <Sparkles className="text-emerald-700" size={20} />,
      title: "Arabic-first Innovation",
      desc: "Models optimized for Arabic language, dialects, and context.",
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-emerald-900">Highlights</h2>
          <p className="mt-3 text-emerald-900/80">
            A partnership grounded in cultural respect, technical excellence, and
            measurable impact.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 ring-1 ring-emerald-900/10 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-emerald-900">{f.title}</h3>
              <p className="mt-2 text-sm text-emerald-900/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
