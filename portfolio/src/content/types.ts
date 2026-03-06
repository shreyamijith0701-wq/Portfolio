export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  year: string
  role: string
  timeline: string
  tools: string[]
  team: string
  status: 'featured' | 'standard' | 'play'
  coverImage: string
  accentColor: string
  links?: {
    live?: string
    figma?: string
    research?: string
  }
  caseStudy?: CaseStudy
}

export interface CaseStudy {
  hero: {
    impact: string  // 1-liner outcome
    context: string
  }
  problem: {
    statement: string
    users: string[]
    constraints: string[]
  }
  process: ProcessSection[]
  research: {
    methods: string[]
    insights: Insight[]
  }
  iterations: Iteration[]
  solution: {
    overview: string
    screens: Screen[]
  }
  outcomes: Outcome[]
  reflection: {
    learnings: string[]
    nextSteps: string[]
  }
}

export interface ProcessSection {
  phase: string
  label: string
  description: string
  artifacts?: string[]
}

export interface Insight {
  quote?: string
  finding: string
  implication: string
}

export interface Iteration {
  version: string
  description: string
  change: string
  imageBefore?: string
  imageAfter?: string
}

export interface Screen {
  title: string
  description: string
  image: string
  alt: string
}

export interface Outcome {
  metric: string
  value: string
  context: string
  isProxy?: boolean
}
