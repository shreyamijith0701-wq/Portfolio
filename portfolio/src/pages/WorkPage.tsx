import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pageTransition } from '../lib/animations'
import { projects } from '../content'
import Layout from '../components/layout/Layout'
import ProjectCard from '../components/ui/ProjectCard'
import Reveal from '../components/ui/Reveal'

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))]

export default function WorkPage() {
  const [activeTag, setActiveTag] = useState('All')
  const filtered = activeTag === 'All' ? projects : projects.filter(p => p.tags.includes(activeTag))

  return (
    <Layout>
      <motion.div {...pageTransition} className="py-28">
        <div className="container-wide">
          <Reveal className="mb-16">
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'var(--muted)', letterSpacing: '0.15em' }}>Work</p>
            <h1 className="font-display font-light mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', color: 'var(--fg)', lineHeight: 1.05 }}>
              The work that got<br />me to where I am.
            </h1>
            <p className="max-w-lg text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              UX and product design projects — from enterprise software to startup product, from field research to shipped UI.
            </p>
          </Reveal>

          <Reveal className="mb-12">
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button key={tag} onClick={() => setActiveTag(tag)}
                  className="text-xs px-3 py-1.5 rounded-full font-mono uppercase tracking-wide transition-all duration-200"
                  style={{
                    background: activeTag === tag ? 'var(--fg)' : 'transparent',
                    color: activeTag === tag ? 'var(--bg)' : 'var(--muted)',
                    border: '1px solid var(--border)',
                  }}>
                  {tag}
                </button>
              ))}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div key={activeTag} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} variant="featured" />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-20 text-center" style={{ color: 'var(--muted)' }}>
              <p className="font-display text-2xl font-light italic mb-2">Nothing here yet.</p>
            </div>
          )}
        </div>
      </motion.div>
    </Layout>
  )
}
