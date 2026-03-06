import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '@/content/projects/types'
import Tag from './Tag'

interface ProjectCardProps {
  project: Project
  index?: number
  variant?: 'grid' | 'featured'
}

export default function ProjectCard({ project, index = 0, variant = 'grid' }: ProjectCardProps) {
  const isComingSoon = project.status === 'coming-soon'

  const cardContent = (
    <div className="group block h-full">
      {/* Image / placeholder */}
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5"
        style={{
          background: isComingSoon
            ? `linear-gradient(135deg, ${project.accentColor}18, ${project.accentColor}08)`
            : `${project.accentColor}12`,
          border: isComingSoon ? `1px solid ${project.accentColor}30` : '1px solid var(--border)',
          backdropFilter: isComingSoon ? 'blur(8px)' : 'none',
        }}>
        {project.thumbImage && !isComingSoon ? (
          <img src={project.thumbImage} alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span className="font-display text-6xl font-light" style={{ color: project.accentColor, opacity: isComingSoon ? 0.5 : 0.4 }}>
              {project.title[0]}
            </span>
            {isComingSoon && (
              <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: `${project.accentColor}20`, color: project.accentColor, border: `1px solid ${project.accentColor}30` }}>
                Coming Soon
              </span>
            )}
          </div>
        )}

        {/* Hover arrow — only on real projects */}
        {!isComingSoon && (
          <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>

      {/* Meta */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--muted)' }}>{project.year}</span>
          {isComingSoon && (
            <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: `${project.accentColor}15`, color: project.accentColor }}>
              Coming Soon
            </span>
          )}
        </div>
        <h3 className="font-display text-xl font-medium mb-1 transition-colors duration-200"
          style={{ color: isComingSoon ? 'var(--fg-muted)' : 'var(--fg)' }}
          onMouseEnter={e => { if (!isComingSoon) (e.currentTarget as HTMLElement).style.color = project.accentColor }}
          onMouseLeave={e => { if (!isComingSoon) (e.currentTarget as HTMLElement).style.color = 'var(--fg)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{project.shortDesc}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.slice(0, 3).map(tag => <Tag key={tag} label={tag} />)}
        </div>
      </div>
    </div>
  )

  const wrapper = (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {isComingSoon ? (
        <div className="cursor-default h-full" style={{ opacity: 0.75 }}>{cardContent}</div>
      ) : (
        <Link to={`/work/${project.slug}`} className="block h-full" aria-label={`View case study: ${project.title}`}>
          {cardContent}
        </Link>
      )}
    </motion.div>
  )

  return wrapper
}
