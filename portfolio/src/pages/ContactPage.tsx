import { motion } from 'framer-motion'
import Layout from '../components/layout/Layout'
import { pageTransition } from '../lib/animations'
import { site } from '../content/site'
import Reveal from '../components/ui/Reveal'
import SectionLabel from '../components/ui/SectionLabel'

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    description: 'Best for project inquiries, collaboration, or just saying hello.',
  },
  {
    label: 'LinkedIn',
    value: 'Shreya Mijith Andezhath',
    href: site.links.linkedin,
    description: 'Professional updates, DMs, and network.',
  },
  {
    label: 'Behance',
    value: 'behance.net/amshreya',
    href: site.links.behance,
    description: 'Extended visual portfolio and design work.',
  },
]

export default function ContactPage() {
  return (
    <Layout>
      <motion.div {...pageTransition} className="py-28">
        <div className="container-narrow">

          <Reveal className="mb-16">
            <SectionLabel className="mb-5">Contact</SectionLabel>
            <h1 className="font-display font-light mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', color: 'var(--fg)', lineHeight: 1.05 }}>
              Let's make something<br />worth making.
            </h1>
            <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'var(--muted)', fontWeight: 300 }}>
              I'm open to full-time roles, research collaborations, and conversations about design, systems, and problems worth solving. Don't overthink it — reach out.
            </p>
          </Reveal>

          <div className="space-y-px mb-12" style={{ background: 'var(--border)' }}>
            {channels.map((channel, i) => (
              <motion.a key={channel.label} href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center justify-between p-6 group transition-colors duration-200"
                style={{ background: 'var(--bg)', textDecoration: 'none' }}>
                <div>
                  <p className="text-label mb-1">{channel.label}</p>
                  <p className="font-medium mb-1" style={{ color: 'var(--fg)' }}>{channel.value}</p>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{channel.description}</p>
                </div>
                <span className="text-xl transition-transform duration-200 group-hover:translate-x-2" style={{ color: 'var(--muted)' }}>→</span>
              </motion.a>
            ))}
          </div>

          {/* Resume download */}
          <Reveal className="mb-8">
            <a href={site.links.resume} download="Shreya_Mijith_Andezhath_Resume.pdf"
              className="flex items-center justify-between p-6 rounded-xl group transition-all duration-200"
              style={{
                background: 'color-mix(in srgb, var(--surface) 70%, transparent)',
                border: '1px solid color-mix(in srgb, var(--accent) 25%, var(--border))',
                backdropFilter: 'blur(8px)',
                textDecoration: 'none',
              }}>
              <div>
                <p className="text-label mb-1">Resume</p>
                <p className="font-medium" style={{ color: 'var(--fg)' }}>Download CV</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Full experience, education, and projects</p>
              </div>
              <span className="text-xl transition-transform duration-200 group-hover:translate-y-1" style={{ color: 'var(--accent)' }}>↓</span>
            </a>
          </Reveal>

          <Reveal>
            <div className="p-6 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <p className="text-label mb-2">Availability</p>
              <p className="font-medium mb-1" style={{ color: 'var(--fg)' }}>{site.availability}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full" style={{ background: '#6BAF6B' }} />
                <span className="text-xs" style={{ color: 'var(--muted)' }}>Open to roles in design, product, and research</span>
              </div>
            </div>
          </Reveal>

        </div>
      </motion.div>
    </Layout>
  )
}
