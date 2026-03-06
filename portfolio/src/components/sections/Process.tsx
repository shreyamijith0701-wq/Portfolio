import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

const principles = [
  {
    number: '01',
    title: 'Research first, always.',
    description: 'Every product problem is really a people problem. I start with immersion — contextual inquiry, mental models, behavioral patterns — before touching Figma.',
  },
  {
    number: '02',
    title: 'Architecture before aesthetics.',
    description: 'I map object models and lifecycle states before any UI. Good structure makes good design almost inevitable; bad structure makes it impossible.',
  },
  {
    number: '03',
    title: 'Simplicity is earned.',
    description: 'The clearest interfaces are the hardest to design. I\'m drawn to the constraint-driven work of removing things that don\'t need to exist.',
  },
  {
    number: '04',
    title: 'Ship and learn.',
    description: 'Prototypes reveal what documents can\'t. I bias toward getting something in front of real people early — and I build on what I find.',
  },
]

export default function Process() {
  return (
    <section className="py-28">
      <div className="container-wide">
        <Reveal className="mb-16">
          <SectionLabel className="mb-4">Design philosophy</SectionLabel>
          <h2
            className="font-display font-light max-w-xl"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', color: 'var(--fg)' }}
          >
            How I approach every problem.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="flex items-start gap-5">
                <span
                  className="font-mono text-xs mt-1 shrink-0"
                  style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}
                >
                  {p.number}
                </span>
                <div>
                  <h3
                    className="font-display text-xl font-light mb-2"
                    style={{ color: 'var(--fg)', letterSpacing: '-0.01em' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
