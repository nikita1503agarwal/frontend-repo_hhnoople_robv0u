import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Deal from './components/Deal'
import Highlights from './components/Highlights'
import Timeline from './components/Timeline'
import Partners from './components/Partners'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Deal />
        <Highlights />
        <Timeline />
        <Partners />
        <Contact />
      </main>
      <footer className="py-10 border-t border-emerald-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-900/70">© {new Date().getFullYear()} Saudi AI Deal. All rights reserved.</p>
          <div className="text-sm text-emerald-900/70">Made with respect for Saudi heritage and future.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
