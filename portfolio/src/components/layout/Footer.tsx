import { Link } from 'react-router-dom'
import { site } from '@/content/site'

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: 'var(--border)' }}>
      <div className="container-wide py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-base" style={{ color: 'var(--fg)' }}>{site.name}</p>
          <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{site.role} · {site.location}</p>
        </div>
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>LinkedIn</a>
          <a href={site.behance} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>Behance</a>
          <a href={`mailto:${site.email}`}
            style={{ color: 'var(--muted)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>Email</a>
          <a href={site.links.resume} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>Resume ↓</a>
        </div>
        <p className="text-xs" style={{ color: 'var(--fg-subtle)' }}>{site.availability}</p>
      </div>
    </footer>
  )
}
