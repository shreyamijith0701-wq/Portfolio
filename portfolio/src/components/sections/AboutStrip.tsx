import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import { about } from '../../content/about'
import { site } from '../../content/site'

const credItems = [
  { label: 'Current', value: 'Blue Horse Digital' },
  { label: 'Education', value: 'MS UX @ ASU' },
  { label: 'Background', value: 'B.Des Product Design, Woxsen' },
  { label: 'Specialty', value: 'Systems thinking + research' },
]

export default function AboutStrip() {
  return (
    <section className="py-24 border-t border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <Reveal>
            <SectionLabel className="mb-5">About</SectionLabel>
            <h2
              className="font-display font-light mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.02em', color: 'var(--fg)', lineHeight: 1.15 }}
            >
              {about.headline}
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--muted)' }}>
              {about.story[0]}
            </p>
            <Link to="/about" className="btn-ghost" style={{ textDecoration: 'none' }}>
              Full story →
            </Link>
          </Reveal>

          {/* Right: credential grid */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-px" style={{ background: 'var(--border)' }}>
              {credItems.map(({ label, value }) => (
                <div
                  key={label}
                  className="p-6"
                  style={{ background: 'var(--bg)' }}
                >
                  <p className="text-label mb-2">{label}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
