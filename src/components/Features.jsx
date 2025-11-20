import { motion } from 'framer-motion'
import { Cpu, ShieldCheck, Zap, Rocket, Atom, Layers } from 'lucide-react'

const features = [
  {
    icon: <Cpu className="text-cyan-400" size={22} />,
    title: 'High‑Performance',
    desc: 'Optimized animations and smooth scroll interactions tuned for 60fps.'
  },
  {
    icon: <ShieldCheck className="text-fuchsia-400" size={22} />,
    title: 'Production‑Ready',
    desc: 'Robust architecture with best practices and accessible UI patterns.'
  },
  {
    icon: <Zap className="text-amber-300" size={22} />,
    title: 'Framer Motion',
    desc: 'Micro‑interactions, parallax, and tasteful transitions everywhere.'
  },
  {
    icon: <Rocket className="text-cyan-400" size={22} />,
    title: '3D with Spline',
    desc: 'Interactive 3D scenes that feel alive and on‑brand.'
  },
  {
    icon: <Atom className="text-violet-400" size={22} />,
    title: 'Futuristic Aesthetic',
    desc: 'Dark, clean, and professional with neon accents and glass surfaces.'
  },
  {
    icon: <Layers className="text-emerald-300" size={22} />,
    title: 'Modular Components',
    desc: 'Composable sections that scale with your product.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_10%_10%,rgba(6,182,212,0.08),transparent),radial-gradient(60%_40%_at_90%_10%,rgba(217,70,239,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Designed for performance and polish
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900/60 border border-white/10">
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
