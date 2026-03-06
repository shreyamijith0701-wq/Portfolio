import type { Project } from '../types'

export const dau: Project = {
  slug: 'dau-ai-case-generator',
  title: 'DAU AI Case Generator',
  subtitle: 'Enterprise UX for defense acquisition education',
  description: 'Designed the end-to-end UX for an AI-assisted case study authoring tool used by the US Defense Acquisition University — serving curriculum authors, reviewers, and program managers.',
  tags: ['Enterprise UX', 'UX Research', 'Information Architecture', 'B2G'],
  year: '2024–2025',
  role: 'UI/UX Designer & Researcher',
  timeline: '8 months (ongoing)',
  tools: ['Figma', 'FigJam', 'Miro', 'Notion', 'Maze'],
  team: 'Design lead + 2 developers + 1 PM + stakeholders at DAU',
  status: 'featured',
  coverImage: '/portfolio/images/projects/dau/cover.jpg',
  accentColor: '#4A9EBF',
  caseStudy: {
    hero: {
      impact: 'Reduced case authoring time from ~3 weeks to ~4 days through AI-assisted generation and structured review workflows',
      context: 'The Defense Acquisition University produces hundreds of acquisition case studies annually for professional training. The existing process was manual, fragmented, and required deep expertise to even begin. We were brought in to design an AI-assisted authoring tool that would make the process faster without sacrificing curriculum rigor.',
    },
    problem: {
      statement: 'DAU\'s case authoring process required experts to write, review, and publish case studies across a fragmented set of tools — Word docs, email threads, SharePoint. The process averaged 3 weeks per case, created version control nightmares, and made it nearly impossible for non-experts to contribute.',
      users: [
        'Marcus Reyes — Case author (primary). Acquisition expert, not a writer. Needs AI assistance to structure narratives.',
        'Dr. Dana Nkosi — Curriculum reviewer. Subject matter expert who reviews for accuracy and learning objectives.',
        'Linda Torres — Program manager. Oversees portfolio governance and publication pipeline.',
      ],
      constraints: [
        'Must integrate with existing DAU authentication and infrastructure',
        'AI output must be human-reviewable at every stage — no black-box generation',
        'Must support accessibility standards (Section 508)',
        'Government procurement timeline: tight sprint structure, no waterfall',
      ],
    },
    process: [
      {
        phase: '01',
        label: 'Discovery & Stakeholder Alignment',
        description: 'Conducted contextual inquiry sessions with all three user personas. Mapped the as-is authoring journey and identified 11 friction points. Built a stakeholder alignment matrix.',
        artifacts: ['Stakeholder map', 'As-is journey map', 'Friction inventory', 'Jobs-to-be-done'],
      },
      {
        phase: '02',
        label: 'Information Architecture',
        description: 'Built a complete object model for the Case entity — its states, relationships, and lifecycle. Designed the navigation model across 3 distinct user contexts.',
        artifacts: ['Object model', 'Entity lifecycle map', 'Navigation model', 'Content hierarchy'],
      },
      {
        phase: '03',
        label: 'Feature Definition',
        description: 'Wrote Sprint 1 Feature Definition Briefs covering AI generation parameters, review workflow, and approval gates. Each brief included success criteria and edge case handling.',
        artifacts: ['Feature briefs (Sprint 1)', 'Interaction specs', 'State diagrams'],
      },
      {
        phase: '04',
        label: 'Design & Validation',
        description: 'Iterated on the core authoring flow across 3 rounds of stakeholder review. Conducted moderated usability testing with 4 users representing each persona.',
        artifacts: ['High-fidelity mockups', 'Prototype', 'Usability test report', 'Persona templates'],
      },
    ],
    research: {
      methods: ['Contextual inquiry', 'Stakeholder interviews', 'Task analysis', 'Competitive audit', 'Moderated usability testing'],
      insights: [
        {
          quote: 'I know what a good case study looks like. I just can\'t write the first version from scratch — that\'s where I get stuck.',
          finding: 'The blank-page problem is the #1 barrier for case authors',
          implication: 'AI-assist should function as a scaffold, not a replacement. Start with structure, not content.',
        },
        {
          finding: 'Reviewers lacked a structured way to annotate AI-generated content vs. human-authored content',
          implication: 'Need visual differentiation between AI output and human edits in the review interface.',
        },
        {
          finding: 'Program managers couldn\'t see status across the portfolio at a glance — each case was a separate artifact',
          implication: 'Portfolio governance view is a distinct use case requiring its own information architecture.',
        },
      ],
    },
    iterations: [
      {
        version: 'v0 — Linear wizard',
        description: 'Step-by-step form to generate a case study',
        change: 'Authors wanted to move non-linearly — they knew some sections better than others. Abandoned the forced sequence.',
      },
      {
        version: 'v1 — Modular editor',
        description: 'Each case section as an independent module, collapsible and reorderable',
        change: 'Better. But reviewers couldn\'t distinguish AI-generated vs. human-written text. Added provenance indicators.',
      },
      {
        version: 'v2 — Provenance-aware editor',
        description: 'AI-generated sections visually marked; inline review comments; approval gates per section',
        change: 'Validated by all three personas. Program managers requested a separate portfolio dashboard — scope for Sprint 2.',
      },
    ],
    solution: {
      overview: 'A structured, AI-assisted case authoring environment with role-specific interfaces for authors (creation), reviewers (annotation), and managers (governance). The AI acts as a first-draft generator — humans review, refine, and approve at every stage.',
      screens: [
        {
          title: 'Author Dashboard',
          description: 'Overview of all active cases with status indicators and AI-generation quick-start.',
          image: '/portfolio/images/projects/dau/screen-dashboard.jpg',
          alt: 'DAU Case Generator author dashboard',
        },
        {
          title: 'Case Editor',
          description: 'Modular editor with provenance-aware content blocks, AI regeneration controls, and inline commenting.',
          image: '/portfolio/images/projects/dau/screen-editor.jpg',
          alt: 'DAU Case Generator modular editor with AI content blocks',
        },
        {
          title: 'Review Interface',
          description: 'Reviewer view with annotation tools, AI vs. human content differentiation, and approval workflow.',
          image: '/portfolio/images/projects/dau/screen-review.jpg',
          alt: 'DAU Case Generator review interface',
        },
      ],
    },
    outcomes: [
      {
        metric: 'Authoring cycle time',
        value: '~80% reduction',
        context: 'From ~3 weeks to ~4 days per case (projected based on prototype testing)',
        isProxy: true,
      },
      {
        metric: 'Stakeholder approval',
        value: '3/3 personas',
        context: 'All primary user types validated the design in moderated testing',
        isProxy: true,
      },
      {
        metric: 'Sprint 1 feature coverage',
        value: '100%',
        context: 'All Sprint 1 features shipped with complete interaction specs and QA documentation',
      },
    ],
    reflection: {
      learnings: [
        'Government enterprise UX requires designing for institutional trust, not just usability — every AI action needs a human checkpoint',
        'Information architecture work (object models, lifecycle maps) paid dividends throughout — developers referenced them continuously',
        'Persona templates became a shared language across design and development for edge case handling',
      ],
      nextSteps: [
        'Sprint 2: Portfolio governance dashboard for program managers',
        'Accessibility audit (Section 508 compliance validation)',
        'Longitudinal study with early adopters post-launch',
      ],
    },
  },
}
