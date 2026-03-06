import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { site } from '@/content/site'

export default function Hero() {
  return (
    <section className="relative min-h-[96vh] flex items-center px-6 md:px-10 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c8a96e 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7a9e7e 0%, transparent 70%)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left: Text ── */}
        <div>
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-7">
            <span className="w-6 h-px bg-[var(--accent)]" />
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
              {site.role} · {site.location}
            </span>
          </motion.div>

          {/* Name */}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="font-mono text-xs uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--accent)' }}>
            {site.name}
          </motion.p>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light leading-[1.04] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--fg)' }}>
            I design systems,<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>not just screens.</em>
          </motion.h1>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="text-base md:text-lg leading-relaxed max-w-lg mb-8"
            style={{ color: 'var(--muted)', fontWeight: 300 }}>
            {site.description}
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-8">
            <Link to="/work"
              className="group inline-flex items-center gap-2 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ background: 'var(--fg)', color: 'var(--bg)', padding: '0.75rem 1.75rem' }}>
              View my work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a href={site.links.resume} download="Shreya_Mijith_Andezhath_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium transition-colors hover:border-[var(--fg)]"
              style={{ border: '1px solid var(--border)', color: 'var(--fg)', padding: '0.75rem 1.75rem', background: 'transparent' }}>
              Resume ↓
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-5">
            {[
              { label: 'LinkedIn', href: site.links.linkedin },
              { label: 'Behance', href: site.links.behance },
              { label: 'Email', href: `mailto:${site.email}` },
            ].map(l => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-wider transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {l.label}
              </a>
            ))}
          </motion.div>

          {/* Availability */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex items-center gap-2 mt-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs" style={{ color: 'var(--muted)' }}>{site.availability}</span>
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Decorative ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full"
              style={{ border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[370px] md:h-[370px] rounded-full"
              style={{ border: '1px solid color-mix(in srgb, var(--border) 60%, transparent)' }} />
          </div>

          {/* Photo container */}
          <div className="relative w-[280px] h-[340px] md:w-[340px] md:h-[420px]">
            {/* Glow behind photo */}
            <div className="absolute inset-0 rounded-[2rem] blur-2xl opacity-20 pointer-events-none"
              style={{ background: `var(--accent)`, transform: 'scale(0.9) translateY(8%)' }} />

            {/* Glass card */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden"
              style={{
                background: 'color-mix(in srgb, var(--surface) 80%, transparent)',
                border: '1px solid color-mix(in srgb, var(--accent) 20%, var(--border))',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 24px 48px -12px rgba(0,0,0,0.18)',
              }}>
              <img
                src="images/shreya.jpg"
                alt="Shreya Mijith Andezhath"
                className="w-full h-full object-cover object-top"
                style={{ mixBlendMode: 'normal' }}
                onError={(e) => {
                  // Fallback if photo not yet added
                  const el = e.currentTarget
                  el.style.display = 'none'
                  const parent = el.parentElement!
                  parent.innerHTML = `
                    <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;">
                      <span style="font-family:'Playfair Display',serif;font-size:5rem;font-weight:400;color:var(--accent);opacity:0.4">S</span>
                      <span style="font-family:'DM Mono',monospace;font-size:0.6rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--fg-subtle)">Add photo to /public/images/shreya.jpg</span>
                    </div>`
                }}
              />
              {/* Glass overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, color-mix(in srgb, var(--bg) 60%, transparent), transparent)',
                }} />
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl"
              style={{
                background: 'color-mix(in srgb, var(--surface) 90%, transparent)',
                border: '1px solid var(--border)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              }}>
              <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>MS UX · ASU</p>
              <p className="text-sm font-medium" style={{ color: 'var(--fg)' }}>Dec 2026</p>
            </motion.div>

            {/* Floating tag 2 */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-3 -right-4 px-3 py-2 rounded-xl"
              style={{
                background: 'color-mix(in srgb, var(--surface) 90%, transparent)',
                border: '1px solid color-mix(in srgb, var(--accent) 30%, var(--border))',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              }}>
              <p className="text-xs font-mono" style={{ color: 'var(--accent)' }}>Systems thinker</p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid var(--border)' }}>
          <div className="w-0.5 h-1.5 rounded-full" style={{ background: 'var(--fg-subtle)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
