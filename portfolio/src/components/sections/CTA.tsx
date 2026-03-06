import { motion } from 'framer-motion'
import { site } from '../../content/site'

export default function CTA() {
  return (
    <section className="py-28 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <div className="p-10 md:p-16 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{
              background: 'color-mix(in srgb, var(--surface) 60%, transparent)',
              border: '1px solid var(--border)',
              backdropFilter: 'blur(16px)',
            }}>
            <div className="max-w-lg">
              <p className="text-label mb-4">Available for opportunities · Graduating Dec 2026</p>
              <h2 className="font-display font-light mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', color: 'var(--fg)', lineHeight: 1.1 }}>
                Ready to build something that matters.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--muted)', fontWeight: 300 }}>
                I'm open to full-time UX roles, research collaborations, and conversations about problems worth solving.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a href={`mailto:${site.email}`} className="btn-primary" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Get in touch →
              </a>
              <a href={site.links.resume} download="Shreya_Mijith_Andezhath_Resume.pdf"
                className="btn-secondary" style={{ textDecoration: 'none', whiteSpace: 'nowrap', textAlign: 'center' }}>
                Download resume ↓
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
