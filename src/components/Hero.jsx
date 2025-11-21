export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white pt-28 pb-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-5 mix-blend-multiply bg-cover bg-center" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 tracking-tight">
              Shaping AI with Saudi Vision
            </h1>
            <p className="mt-5 text-lg text-emerald-900/80 leading-relaxed">
              Announcing our latest strategic agreement in Artificial Intelligence —
              blending cutting‑edge innovation with timeless heritage. Together, we
              accelerate Vision 2030 with solutions rooted in culture, trust, and
              impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#deal" className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 shadow">
                Explore the Deal
              </a>
              <a href="#highlights" className="inline-flex items-center px-5 py-3 rounded-lg border border-emerald-900/15 text-emerald-900 hover:bg-emerald-900/5">
                Key Highlights
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-emerald-900/70">
              <div className="flex -space-x-3">
                <img className="w-9 h-9 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=14" alt="" />
                <img className="w-9 h-9 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=31" alt="" />
                <img className="w-9 h-9 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=22" alt="" />
              </div>
              <p className="text-sm">Trusted by leaders across public and private sectors</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-emerald-900/10">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1530382875149-5d0ec1a6df1b?q=80&w=2940&auto=format&fit=crop"
                alt="Riyadh skyline with traditional motifs"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur rounded-xl px-4 py-3 ring-1 ring-emerald-900/10 shadow">
              <p className="text-sm text-emerald-900/80">Aligned with Vision 2030</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
