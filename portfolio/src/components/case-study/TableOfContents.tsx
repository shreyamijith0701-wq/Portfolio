import { useState, useEffect } from 'react'

const sections = [
  { id: 'problem', label: 'Problem' },
  { id: 'users', label: 'Users' },
  { id: 'process', label: 'Process' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'reflection', label: 'Reflection' },
]

export default function TableOfContents() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-20% 0% -70% 0%' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className="sticky top-28 hidden xl:block" aria-label="Table of contents">
      <p className="text-xs font-mono text-subtle uppercase tracking-wider mb-4">Contents</p>
      <ul className="flex flex-col gap-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`flex items-center gap-2.5 text-sm py-1 transition-colors duration-200 group ${
                active === s.id ? 'text-fg' : 'text-muted hover:text-fg'
              }`}
            >
              <span
                className={`w-4 h-px transition-all duration-300 ${
                  active === s.id
                    ? 'bg-[var(--accent)] w-6'
                    : 'bg-[var(--border)] group-hover:bg-[var(--fg-subtle)]'
                }`}
              />
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
