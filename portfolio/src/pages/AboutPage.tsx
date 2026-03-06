import { motion } from 'framer-motion'
import { pageTransition } from '../lib/animations'
import { about } from '../content/about'
import { site } from '../content/site'
import Reveal from '../components/ui/Reveal'
import Layout from '../components/layout/Layout'
import SectionLabel from '../components/ui/SectionLabel'

export default function AboutPage() {
  return (
    <Layout>
      <motion.div {...pageTransition} className="py-28">
        <div className="container-wide">

          {/* Header */}
          <Reveal className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="max-w-xl">
                <SectionLabel className="mb-5">About</SectionLabel>
                <h1 className="font-display font-light mb-8"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', color: 'var(--fg)', lineHeight: 1.05 }}>
                  {about.headline}
                </h1>
                <div className="space-y-5">
                  {about.story.map((para, i) => (
                    <p key={i} className="text-lg leading-relaxed" style={{ color: 'var(--muted)', fontWeight: 300 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              {/* Second photo */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'color-mix(in srgb, var(--surface) 60%, transparent)',
                    backdropFilter: 'blur(12px)',
                    padding: '8px',
                  }}>
                  <img
                    src="/images/shreya-2.jpg"
                    alt="Shreya Mijith Andezhath"
                    className="w-full rounded-xl object-cover"
                    style={{ aspectRatio: '4/5', objectPosition: 'top' }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 text-xs font-mono px-3 py-1.5 rounded-full"
                  style={{
                    background: 'var(--accent)',
                    color: 'var(--bg)',
                  }}>
                  Tempe, AZ · 2025
                </div>
              </div>
            </div>
          </Reveal>

          {/* Values */}
          <section className="mb-24">
            <Reveal>
              <SectionLabel className="mb-8">What I stand for</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {about.values.map((v, i) => (
                  <motion.div key={v.title}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="p-6 rounded-xl"
                    style={{
                      border: '1px solid var(--border)',
                      background: 'color-mix(in srgb, var(--surface) 70%, transparent)',
                      backdropFilter: 'blur(8px)',
                    }}>
                    <p className="font-medium mb-2" style={{ color: 'var(--fg)' }}>{v.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{v.description}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Process */}
          <section className="mb-24 border-t pt-16" style={{ borderColor: 'var(--border)' }}>
            <Reveal>
              <SectionLabel className="mb-8">My process</SectionLabel>
              <div className="space-y-0">
                {about.process.map((step, i) => (
                  <motion.div key={step.step}
                    initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-8 py-6 border-b"
                    style={{ borderColor: 'var(--border)' }}>
                    <span className="font-mono text-xs w-8 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }}>{step.step}</span>
                    <div>
                      <p className="font-medium mb-1" style={{ color: 'var(--fg)' }}>{step.label}</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Education + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 border-t pt-16" style={{ borderColor: 'var(--border)' }}>
            <Reveal>
              <SectionLabel className="mb-6">Education</SectionLabel>
              <div className="space-y-8">
                {about.education.map(edu => (
                  <div key={edu.degree}>
                    <p className="font-medium mb-0.5" style={{ color: 'var(--fg)' }}>{edu.degree}</p>
                    <p className="text-sm mb-0.5" style={{ color: 'var(--muted)' }}>{edu.school} · {edu.years}</p>
                    <p className="text-xs" style={{ color: 'var(--fg-subtle)' }}>{edu.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <SectionLabel className="mb-6">Experience</SectionLabel>
              <div className="space-y-8">
                {about.experience.map(exp => (
                  <div key={exp.title}>
                    <p className="font-medium mb-0.5" style={{ color: 'var(--fg)' }}>{exp.title}</p>
                    <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>{exp.company} · {exp.years}</p>
                    <p className="text-sm" style={{ color: 'var(--fg-subtle)' }}>{exp.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Tools */}
          <section className="mb-24 border-t pt-16" style={{ borderColor: 'var(--border)' }}>
            <Reveal>
              <SectionLabel className="mb-6">Toolkit</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {about.tools.map(tool => (
                  <span key={tool} className="text-sm px-4 py-2 rounded-full"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'var(--muted)',
                      background: 'color-mix(in srgb, var(--surface) 60%, transparent)',
                      backdropFilter: 'blur(4px)',
                    }}>
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Resume CTA */}
          <Reveal>
            <div className="p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              style={{
                background: 'color-mix(in srgb, var(--surface) 60%, transparent)',
                border: '1px solid var(--border)',
                backdropFilter: 'blur(12px)',
              }}>
              <div>
                <p className="font-display text-2xl font-light mb-2" style={{ color: 'var(--fg)' }}>
                  Want the full picture?
                </p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Download my resume for a complete view of experience, education, and projects.
                </p>
              </div>
              <a href={site.links.resume} download="Shreya_Mijith_Andezhath_Resume.pdf"
                className="btn-primary shrink-0" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Download resume ↓
              </a>
            </div>
          </Reveal>

        </div>
      </motion.div>
    </Layout>
  )
}
