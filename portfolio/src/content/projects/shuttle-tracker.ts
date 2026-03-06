import type { Project } from './types'

export const shuttle: Project = {
  slug: 'shuttle-tracker',
  title: 'ASU Shuttle',
  subtitle: 'Redesigning a broken transit experience for 77,000 students',
  shortDesc: 'End-to-end UX redesign of ASU\'s shuttle tracker — 3 iteration rounds, accessibility-first, +34% task success rate.',
  year: '2025',
  role: 'UX Designer & Researcher',
  team: 'Shreya Andezhath + Sreya Suresh',
  timeline: '10 weeks',
  tools: ['Figma', 'Maze', 'FigJam'],
  tags: ['Mobile UX', 'Accessibility', 'Research', 'Interaction Design'],
  status: 'shipped',
  featured: true,
  order: 3,
  heroImage: '/images/projects/shuttle/hero.jpg',
  thumbImage: '/images/projects/shuttle/thumb.jpg',
  accentColor: '#8b6fa6',
  impact: [
    { label: 'Task success', value: '+34%' },
    { label: 'Time on task', value: '−73%' },
    { label: 'Iteration rounds', value: '3' },
  ],
  problem: 'ASU\'s shuttle tracker was infamous among students — inconsistent ETAs, confusing route switching, zero accessibility consideration. Students were missing buses and arriving late because of a broken product.',
  users: [
    { name: 'Daily commuters', need: 'Reliable ETA visible in under 5 seconds from app open' },
    { name: 'Students with disabilities', need: 'Screen-reader compatible, high-contrast, motor-accessible' },
    { name: 'First-time users', need: 'Immediate clarity on which route serves their destination' },
  ],
  constraints: [
    'No back-end changes — redesign must work with existing data API',
    'Must conform to ASU brand guidelines',
    'Must pass WCAG 2.1 AA accessibility standards',
  ],
  processSections: [
    {
      phase: '01 — Competitive Audit',
      title: 'Benchmarking 6 transit apps',
      body: 'We audited Transit, Citymapper, Google Maps, and 3 university-specific apps. Key finding: the best transit apps share a single mental model — "where am I, where\'s my bus, how long." The existing ASU app violated all three. That framing became our design brief.',
      image: '/images/projects/shuttle/competitive.jpg',
    },
    {
      phase: '02 — Contextual Inquiry',
      title: 'Designing for motion, not attention',
      body: '73% of students opened the app while already moving — walking to a stop, checking over their shoulder. The design needed to work at 5 feet per second. We ran contextual inquiry at 4 bus stops, observing actual behavior rather than asking about it.',
      image: '/images/projects/shuttle/research.jpg',
    },
    {
      phase: '03 — Three Iteration Rounds',
      title: 'Each round had explicit success criteria',
      body: 'Round 1: information hierarchy — does ETA read immediately? Round 2: route switching and map interactions. Round 3: accessibility failures surfaced in screen reader testing. We didn\'t move to the next round until the current one passed its threshold.',
      image: '/images/projects/shuttle/iterations.jpg',
    },
  ],
  outcomes: [
    'Task success rate: 54% → 88% in usability testing',
    'Time-to-ETA: 42 seconds → 11 seconds average',
    'Critical path: 6 taps → 2 taps',
    'All screens pass WCAG 2.1 AA audit',
  ],
  reflection: 'The version that shipped to testing had half the features of our first wireframes — and performed twice as well. Scope discipline is a design skill. The research didn\'t just validate our ideas; it told us which ones to cut.',
  nextSteps: [
    'Prototype live-data integration with Passio GO API',
    'Run dedicated accessibility sessions with screen reader users',
    'Design notification layer for "your bus is 2 minutes away"',
  ],
  links: [],
}
