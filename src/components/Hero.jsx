import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(91,33,182,0.35),transparent)]"></div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 shadow-inner backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse" />
              Live 3D • Interactive • Cyber Aesthetic
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Futuristic 3D experiences for modern brands
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Create immersive websites with smooth motion, responsive design, and world‑class polish. Built with React, Spline, and Framer Motion.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20 transition-all">
                Explore Features
              </a>
              <a href="#showcase" className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10 transition-colors">
                View Showcase
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
