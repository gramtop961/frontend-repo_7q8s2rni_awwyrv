import { useState, useEffect } from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 text-sm md:text-base text-slate-200 hover:text-white/90 transition-colors"
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="relative">
              <div className="absolute inset-0 blur-md rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-400 opacity-60"></div>
              <div className="relative p-1.5 rounded-md bg-slate-900/70 border border-white/10">
                <Rocket size={18} className="text-cyan-300" />
              </div>
            </div>
            <span className="font-semibold tracking-tight">NovaFrame</span>
            <Sparkles size={16} className="text-fuchsia-400" />
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#features" label="Features" />
            <NavLink href="#showcase" label="Showcase" />
            <NavLink href="#pricing" label="Pricing" />
            <NavLink href="#contact" label="Contact" />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20 transition-all">
              Get Started
            </a>
          </div>

          <button onClick={() => setOpen(p => !p)} className="md:hidden p-2 text-slate-200">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <NavLink href="#features" label="Features" onClick={() => setOpen(false)} />
            <NavLink href="#showcase" label="Showcase" onClick={() => setOpen(false)} />
            <NavLink href="#pricing" label="Pricing" onClick={() => setOpen(false)} />
            <NavLink href="#contact" label="Contact" onClick={() => setOpen(false)} />
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 text-center text-sm font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white">Get Started</a>
          </div>
        )}
      </div>
    </header>
  )
}
