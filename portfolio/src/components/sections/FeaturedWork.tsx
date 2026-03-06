import { Link } from 'react-router-dom'
import { featuredProjects } from '../../content'
import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'

export default function FeaturedWork() {
  return (
    <section className="py-28">
      <div className="container-wide">
        <Reveal className="flex items-end justify-between mb-14">
          <div>
            <p className="text-label mb-4">Selected Work</p>
            <h2 className="font-display font-light"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', color: 'var(--fg)' }}>
              Four projects.<br />Four different problems.
            </h2>
          </div>
          <Link to="/work" className="hidden md:flex items-center gap-2 text-sm transition-colors group"
            style={{ color: 'var(--muted)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            All work <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} variant="featured" />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link to="/work" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>
            All work →
          </Link>
        </div>
      </div>
    </section>
  )
}
