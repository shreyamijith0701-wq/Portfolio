# Shreya Mijith Andezhath — Portfolio

**Vite + React + TypeScript + Tailwind CSS + Framer Motion**  
Deploys to GitHub Pages via GitHub Actions.

---

## Quick Start

```bash
npm install
npm run dev      # localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the build locally
```

---

## GitHub Pages Deployment

### First-time setup

1. **Create the repo** on GitHub — name it `your-username.github.io` for a user site (serves at `https://your-username.github.io/`), or any other name for a project site (serves at `https://your-username.github.io/repo-name/`).

2. **If using a project site** (not `username.github.io`), update `vite.config.ts`:
   ```ts
   base: '/your-repo-name/',
   ```

3. **Push your code** to the `main` branch.

4. **Enable GitHub Pages**: Go to repo → Settings → Pages → Source: **GitHub Actions**.

5. The workflow in `.github/workflows/deploy.yml` automatically builds and deploys on every push to `main`.

### SPA routing fix
The `404.html = index.html` copy in the workflow handles GitHub Pages' lack of SPA routing support. All routes will work correctly.

### Custom domain
Add a `CNAME` file to `/public/` with your domain:
```
shreya-ma.com
```
Then configure your DNS to point to GitHub Pages.

---

## Editing Content

### Site metadata
```ts
// src/content/site.ts
export const site = {
  name: 'Shreya Mijith Andezhath',
  email: 'your@email.com',   // ← update
  linkedin: 'https://...',   // ← update
  resume: '/Resume.pdf',     // ← add PDF to /public
  ...
}
```

### Adding / editing projects

Each project is a file in `src/content/projects/`:

```ts
// src/content/projects/my-project.ts
import type { Project } from './types'

export const myProject: Project = {
  slug: 'my-project',       // URL: /work/my-project
  title: 'Project Title',
  year: '2025',
  // ... see types.ts for all fields
}
```

Then register it in `src/content/projects/index.ts`:
```ts
import { myProject } from './my-project'
export const allProjects = [vikasa, shuttle, aeria, myProject].sort(...)
```

### Project images

Place images in `/public/images/projects/your-slug/`:
```
public/
  images/
    projects/
      vikasa/
        hero.jpg       ← 1600×900 recommended
        thumb.jpg      ← 800×600 recommended
        research.jpg
      shuttle/
        hero.jpg
        ...
```

Reference them in the project file:
```ts
heroImage: '/images/projects/vikasa/hero.jpg',
thumbImage: '/images/projects/vikasa/thumb.jpg',
```

---

## Customizing the Theme

All design tokens live in `tailwind.config.js` and `src/index.css`:

```css
/* src/index.css */
:root {
  --accent: #c8a96e;     /* ← change your accent color */
  --bg: #faf9f7;
  --fg: #1a1814;
}
```

Fonts are loaded via Google Fonts in `index.html`:
- Display: **Playfair Display** (serif, elegant)
- Body: **DM Sans** (clean, geometric)
- Mono: **DM Mono** (code labels)

To swap fonts, update `index.html` Google Fonts URL and `tailwind.config.js` `fontFamily`.

---

## Adding a New Page

1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add link in `src/components/layout/Nav.tsx` links array

---

## File Structure

```
src/
  content/
    site.ts              ← global site info + links
    about.ts             ← about page content
    projects/
      types.ts           ← Project type definition
      index.ts           ← all projects export
      vikasa.ts          ← Vikasa case study
      shuttle-tracker.ts ← Shuttle tracker case study
      aeria.ts           ← AERIA startup
  components/
    layout/
      Nav.tsx            ← sticky nav + dark mode toggle
      Footer.tsx
      PageLayout.tsx     ← wraps all pages
    sections/
      Hero.tsx           ← homepage hero
      FeaturedProjects.tsx
      CredibilityBar.tsx
      QuickAbout.tsx
    case-study/
      CaseStudyHero.tsx  ← case study top section
      CaseStudyBody.tsx  ← full case study content
      TableOfContents.tsx← sticky ToC with active tracking
    ui/
      Button.tsx
      Tag.tsx
      RevealBlock.tsx    ← scroll reveal animation
      ProjectCard.tsx    ← grid + featured variants
  pages/
    Home.tsx
    Work.tsx
    CaseStudy.tsx        ← dynamic [slug] page
    About.tsx
    Contact.tsx
    NotFound.tsx
  hooks/
    useTheme.ts          ← dark/light mode
    useScrollProgress.ts ← scroll % + scrolled boolean
  lib/
    motion.ts            ← shared Framer Motion variants
  App.tsx
  main.tsx
  index.css
public/
  favicon.svg
  images/
    projects/            ← add your project images here
      vikasa/
      shuttle/
      aeria/
    og-card.png          ← 1200×630 social share image
.github/
  workflows/
    deploy.yml           ← auto-deploy to GitHub Pages
```

---

## Accessibility

- All interactive elements have visible focus states
- Dark/light mode respects system preference on first load
- `prefers-reduced-motion` respected — animations disabled for users who need it
- Scroll progress bar has proper ARIA attributes
- Images have alt text (add meaningful alt text to your project images)
- Heading hierarchy is semantically correct throughout

---

## Performance Notes

- Fonts are preconnected + loaded async
- Images use `loading="lazy"` throughout
- JS is code-split: vendor, motion, and app chunks
- No heavy dependencies — total bundle is lean

---

*Built with craft. Replace all `// ← REPLACE` comments and placeholder images to make it yours.*
