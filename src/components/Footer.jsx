export default function Footer() {
  return (
    <footer className="relative bg-slate-950 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400">
          <p className="text-sm">© {new Date().getFullYear()} NovaFrame. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white/90">Privacy</a>
            <a href="#" className="hover:text-white/90">Terms</a>
            <a href="#contact" className="hover:text-white/90">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
