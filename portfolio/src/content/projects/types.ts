export interface Project {
  slug: string
  title: string
  subtitle: string
  shortDesc: string
  year: string
  role: string
  team: string
  timeline: string
  tools: string[]
  tags: string[]
  status: 'shipped' | 'in-progress' | 'coming-soon'
  featured: boolean
  order: number
  heroImage: string
  thumbImage: string
  accentColor: string
  impact: ImpactStat[]
  problem: string
  users: ProjectUser[]
  constraints: string[]
  processSections: ProcessSection[]
  outcomes: string[]
  reflection: string
  nextSteps: string[]
  links: ProjectLink[]
}

export interface ImpactStat {
  label: string
  value: string
}

export interface ProjectUser {
  name: string
  need: string
}

export interface ProcessSection {
  phase: string
  title: string
  body: string
  image?: string
}

export interface ProjectLink {
  label: string
  url: string
}
