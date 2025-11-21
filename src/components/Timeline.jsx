export default function Timeline() {
  const items = [
    { date: "Q1 2025", title: "Framework Signed", desc: "MoU signed and governance established." },
    { date: "Q2 2025", title: "Pilot Programs", desc: "Launch pilots in health, energy, and education." },
    { date: "Q3 2025", title: "Model Release", desc: "Arabic-first models deployed with oversight." },
    { date: "Q4 2025", title: "Nationwide Rollout", desc: "Scaled adoption with training and certification." },
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-emerald-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-emerald-900">Timeline</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-900/10" />
          <ul className="space-y-8">
            {items.map((it, i) => (
              <li key={i} className="relative pl-12">
                <span className="absolute left-0 mt-1 w-8 h-8 rounded-full bg-emerald-600/90 text-white grid place-items-center text-xs shadow">
                  {i + 1}
                </span>
                <p className="text-sm text-emerald-900/60">{it.date}</p>
                <p className="font-semibold text-emerald-900">{it.title}</p>
                <p className="text-emerald-900/80">{it.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
