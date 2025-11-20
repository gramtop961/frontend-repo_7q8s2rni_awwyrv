import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    features: ['Basic animations', '1 Spline scene', 'Email support'],
    cta: 'Try for free'
  },
  {
    name: 'Pro',
    price: '$19',
    features: ['Advanced motion', '3 Spline scenes', 'Priority support'],
    cta: 'Upgrade to Pro',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited scenes', 'Custom integrations', 'Dedicated support'],
    cta: 'Contact sales'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_20%,rgba(255,255,255,0.04),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Simple, transparent pricing
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border bg-white/5 p-6 backdrop-blur ${t.highlighted ? 'border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.15)]' : 'border-white/10'}`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-1 text-xs text-white">Popular</span>
              )}
              <h3 className="text-white font-semibold">{t.name}</h3>
              <p className="mt-2 text-3xl font-bold text-white">{t.price}</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium ${t.highlighted ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white' : 'border border-white/10 text-slate-200 hover:bg-white/10'}`}>{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
