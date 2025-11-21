export default function Deal() {
  return (
    <section id="deal" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-emerald-900">About the Agreement</h2>
            <p className="mt-4 text-emerald-900/80 leading-relaxed">
              This collaboration brings advanced AI capabilities to the Kingdom, enabling
              secure, scalable solutions across key sectors. The initiative focuses on
              talent development, sovereign infrastructure, and responsible innovation
              that honors Saudi culture and values.
            </p>
            <ul className="mt-6 space-y-3 text-emerald-900/80">
              <li>• Establishing a Center of Excellence for AI</li>
              <li>• Co-developing Arabic-first foundation models</li>
              <li>• Building secure, sovereign cloud and data layers</li>
              <li>• Accelerator programs for startups and public sector</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-emerald-900/10 shadow">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1581270551059-4c5b3fef0d5b?q=80&w=2940&auto=format&fit=crop"
              alt="Traditional Saudi patterns"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
