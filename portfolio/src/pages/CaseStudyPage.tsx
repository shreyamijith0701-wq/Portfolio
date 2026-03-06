import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { pageTransition } from '../lib/animations'
import Layout from '../components/layout/Layout'
import { getProject, allProjects } from '../content'
import { useScrollProgress } from '../hooks/useScroll'
import TableOfContents from '../components/case-study/TableOfContents'
import Reveal from '../components/ui/Reveal'

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const progress = useScrollProgress()

  const project = slug ? getProject(slug) : undefined

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) {
    return (
      <div className="py-40 text-center">
        <p className="font-display text-3xl font-light italic mb-4" style={{ color: 'var(--fg)' }}>
          Project not found.
        </p>
        <Link to="/work" style={{ color: 'var(--muted)', textDecoration: 'none' }}>← Back to work</Link>
      </div>
    )
  }

  if (project.status === 'coming-soon') {
    return (
      <Layout>
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: project.accentColor }}>Coming Soon</p>
          <h1 className="font-display text-4xl font-light mb-4" style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}>{project.title}</h1>
          <p className="text-lg max-w-md mb-10" style={{ color: 'var(--muted)', fontWeight: 300 }}>{project.subtitle}</p>
          <Link to="/work" className="btn-secondary" style={{ textDecoration: 'none' }}>← Back to work</Link>
        </div>
      </Layout>
    )
  }

  const currentIndex = allProjects.findIndex(p => p.slug === slug)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]

  return (
    <Layout>
    <motion.div {...pageTransition}>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 transition-all duration-100"
        style={{ width: `${progress}%`, background: project.accentColor }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="container-wide">
          <div className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--muted)' }}>
            <Link to="/work" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Work</Link>
            <span>/</span>
            <span style={{ color: 'var(--fg)' }}>{project.title}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs px-2.5 py-0.5 rounded border font-mono uppercase tracking-wide"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
                {tag}
              </span>
            ))}
            {project.status === 'in-progress' && (
              <span className="text-xs px-2.5 py-0.5 rounded font-mono"
                style={{ background: `${project.accentColor}20`, color: project.accentColor }}>
                In Progress
              </span>
            )}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', color: 'var(--fg)', lineHeight: 1.0 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-xl mb-10 max-w-2xl leading-relaxed"
            style={{ color: 'var(--muted)', fontWeight: 300 }}
          >
            {project.subtitle}
          </motion.p>

          {/* Impact stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {project.impact.map((stat) => (
              <div key={stat.label} className="px-5 py-3 rounded-lg"
                style={{ background: `${project.accentColor}12`, border: `1px solid ${project.accentColor}30` }}>
                <p className="text-xs font-mono uppercase tracking-wide mb-1" style={{ color: 'var(--muted)' }}>{stat.label}</p>
                <p className="font-display text-2xl font-medium" style={{ color: project.accentColor }}>{stat.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Meta grid */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: 'var(--border)' }}
          >
            {[
              { label: 'Role', value: project.role },
              { label: 'Timeline', value: project.timeline },
              { label: 'Team', value: project.team },
              { label: 'Tools', value: project.tools.slice(0, 3).join(', ') },
            ].map(({ label, value }) => (
              <div key={label} className="p-4" style={{ background: 'var(--bg)' }}>
                <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--muted)' }}>{label}</p>
                <p className="text-sm" style={{ color: 'var(--fg)' }}>{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      {project.heroImage && (
        <div className="container-wide py-10">
          <div className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/7', background: `${project.accentColor}10` }}>
            <img src={project.heroImage} alt={`${project.title}`} className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.minHeight = '200px' }} />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="container-wide py-16">
        <div className="flex gap-16 xl:gap-24">
          <aside className="hidden xl:block w-44 shrink-0">
            <TableOfContents />
          </aside>

          <article className="flex-1 min-w-0 max-w-3xl space-y-24">

            {/* Problem */}
            <section id="problem">
              <Reveal>
                <CsLabel accentColor={project.accentColor}>The Problem</CsLabel>
                <h2 className="font-display text-2xl font-medium mb-5" style={{ color: 'var(--fg)' }}>What needed solving</h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>{project.problem}</p>

                {project.constraints.length > 0 && (
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider mb-4" style={{ color: 'var(--muted)' }}>Constraints</p>
                    {project.constraints.map((c, i) => (
                      <div key={i} className="flex gap-3 py-2">
                        <span style={{ color: project.accentColor }}>—</span>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{c}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            </section>

            {/* Users */}
            <section id="users">
              <Reveal>
                <CsLabel accentColor={project.accentColor}>Users & Goals</CsLabel>
                <h2 className="font-display text-2xl font-medium mb-8" style={{ color: 'var(--fg)' }}>Who I designed for</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.users.map((u) => (
                    <div key={u.name} className="p-5 rounded-lg h-full" style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
                      <p className="font-medium mb-2" style={{ color: 'var(--fg)' }}>{u.name}</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{u.need}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* Process */}
            <section id="process">
              <Reveal>
                <CsLabel accentColor={project.accentColor}>Process</CsLabel>
                <h2 className="font-display text-2xl font-medium mb-10" style={{ color: 'var(--fg)' }}>How I got there</h2>
              </Reveal>
              <div className="space-y-16">
                {project.processSections.map((ps) => (
                  <Reveal key={ps.phase}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: project.accentColor }}>{ps.phase}</p>
                        <h3 className="font-display text-xl font-medium mb-4" style={{ color: 'var(--fg)' }}>{ps.title}</h3>
                        <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{ps.body}</p>
                      </div>
                      <div className="rounded-lg overflow-hidden aspect-[4/3]" style={{ background: `${project.accentColor}10`, border: '1px solid var(--border)' }}>
                        {ps.image ? (
                          <img src={ps.image} alt={ps.title} className="w-full h-full object-cover" loading="lazy"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>[ Add image ]</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section id="outcomes">
              <Reveal>
                <CsLabel accentColor={project.accentColor}>Outcomes</CsLabel>
                <h2 className="font-display text-2xl font-medium mb-8" style={{ color: 'var(--fg)' }}>What it achieved</h2>
                <div className="space-y-3">
                  {project.outcomes.map((o, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-lg" style={{ border: '1px solid var(--border)' }}>
                      <span className="font-mono text-sm flex-shrink-0 mt-0.5" style={{ color: project.accentColor }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{o}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* Reflection */}
            <section id="reflection">
              <Reveal>
                <CsLabel accentColor={project.accentColor}>Reflection</CsLabel>
                <h2 className="font-display text-2xl font-medium mb-6" style={{ color: 'var(--fg)' }}>What I learned</h2>
                <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--muted)' }}>{project.reflection}</p>
                {project.nextSteps.length > 0 && (
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider mb-4" style={{ color: 'var(--muted)' }}>What I'd do next</p>
                    {project.nextSteps.map((s, i) => (
                      <div key={i} className="flex gap-3 py-1.5">
                        <span style={{ color: project.accentColor }}>→</span>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{s}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            </section>

          </article>
        </div>
      </div>

      {/* Project nav */}
      <div className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-wide py-12">
          <div className="flex items-center justify-between">
            <Link to={`/work/${prevProject.slug}`} className="group" style={{ textDecoration: 'none' }}>
              <p className="text-xs font-mono uppercase tracking-wide mb-1" style={{ color: 'var(--muted)' }}>← Previous</p>
              <p className="font-display text-xl font-light group-hover:opacity-70 transition-opacity" style={{ color: 'var(--fg)' }}>{prevProject.title}</p>
            </Link>
            <Link to={`/work/${nextProject.slug}`} className="group text-right" style={{ textDecoration: 'none' }}>
              <p className="text-xs font-mono uppercase tracking-wide mb-1" style={{ color: 'var(--muted)' }}>Next →</p>
              <p className="font-display text-xl font-light group-hover:opacity-70 transition-opacity" style={{ color: 'var(--fg)' }}>{nextProject.title}</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
    </Layout>
  )
}

function CsLabel({ children, accentColor }: { children: React.ReactNode; accentColor: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-6 h-px" style={{ background: accentColor }} />
      <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{children}</span>
    </div>
  )
}
