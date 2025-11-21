export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-emerald-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="mt-3 text-white/80">
              Let's shape the future of AI together in the Kingdom. Share your goals and
              we’ll tailor a path aligned with national priorities and your vision.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>Riyadh • المملكة العربية السعودية</p>
              <p>contact@saudi-aideal.com</p>
            </div>
          </div>
          <form className="bg-white/10 backdrop-blur rounded-2xl p-6 ring-1 ring-white/15">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg px-4 py-3 bg-white/90 text-emerald-900 placeholder-emerald-900/60" placeholder="Full name" />
              <input className="w-full rounded-lg px-4 py-3 bg-white/90 text-emerald-900 placeholder-emerald-900/60" placeholder="Email" />
            </div>
            <input className="mt-4 w-full rounded-lg px-4 py-3 bg-white/90 text-emerald-900 placeholder-emerald-900/60" placeholder="Organization" />
            <textarea rows="4" className="mt-4 w-full rounded-lg px-4 py-3 bg-white/90 text-emerald-900 placeholder-emerald-900/60" placeholder="Your message" />
            <button type="button" className="mt-4 inline-flex items-center px-5 py-3 rounded-lg bg-amber-400 text-emerald-900 font-semibold hover:bg-amber-300">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
