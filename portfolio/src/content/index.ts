import { vikasa } from './projects/vikasa'
import { yoga } from './projects/yoga'
import { shuttle } from './projects/shuttle-tracker'
import { aeria } from './projects/aeria'
import type { Project } from './projects/types'

export const allProjects: Project[] = [vikasa, yoga, shuttle, aeria].sort((a, b) => a.order - b.order)

export const featuredProjects = allProjects.filter(p => p.featured)

export function getProject(slug: string): Project | undefined {
  return allProjects.find(p => p.slug === slug)
}

export const projects = allProjects

export { vikasa, yoga, shuttle, aeria }
export type { Project }
