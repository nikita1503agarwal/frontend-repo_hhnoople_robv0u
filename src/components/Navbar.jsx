import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-emerald-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-emerald-700 grid place-items-center shadow-inner ring-1 ring-emerald-900/20">
            <span className="text-white text-lg">ﷺ</span>
          </div>
          <div className="leading-tight">
            <p className="text-emerald-900 font-semibold">Saudi AI Deal</p>
            <p className="text-emerald-900/70 text-xs">Vision • Innovation • Heritage</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-emerald-900/80">
          <a href="#deal" className="hover:text-emerald-900 transition-colors">The Deal</a>
          <a href="#highlights" className="hover:text-emerald-900 transition-colors">Highlights</a>
          <a href="#timeline" className="hover:text-emerald-900 transition-colors">Timeline</a>
          <a href="#partners" className="hover:text-emerald-900 transition-colors">Partners</a>
          <a href="#contact" className="hover:text-emerald-900 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-md text-emerald-900 hover:bg-emerald-900/5" aria-label="menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
