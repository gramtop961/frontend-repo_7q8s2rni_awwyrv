import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Palette, Smartphone } from 'lucide-react'
import { useRef } from 'react'

export default function Showcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section id="showcase" ref={ref} className="relative overflow-hidden py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Smooth scroll storytelling
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div style={{ y: y1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Code2 className="text-cyan-400" />
            <h3 className="mt-4 text-white font-semibold">Developer‑friendly</h3>
            <p className="text-slate-300 text-sm">Built with clean, composable components and delightful animations.</p>
          </motion.div>
          <motion.div style={{ y: y2 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Palette className="text-fuchsia-400" />
            <h3 className="mt-4 text-white font-semibold">Design‑first</h3>
            <p className="text-slate-300 text-sm">Glassmorphism, gradients, and neon accents for a cyber‑modern vibe.</p>
          </motion.div>
          <motion.div style={{ y: y1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Smartphone className="text-emerald-300" />
            <h3 className="mt-4 text-white font-semibold">Responsive</h3>
            <p className="text-slate-300 text-sm">Adaptive layouts and motion that feel great on any device.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
