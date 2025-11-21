export default function Partners() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Vision_2030_Logo.svg/512px-Vision_2030_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Emblem_of_Saudi_Arabia.svg/320px-Emblem_of_Saudi_Arabia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Neom_Logo.svg/512px-Neom_Logo.svg.png",
  ];

  return (
    <section id="partners" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-emerald-900/10 p-8 shadow-sm">
          <p className="text-center text-emerald-900/70 text-sm">In collaboration with</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
            {logos.map((src, i) => (
              <div key={i} className="h-12 flex items-center justify-center">
                <img src={src} alt="partner" className="max-h-12 object-contain opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
