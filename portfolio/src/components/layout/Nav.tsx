import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '@/hooks/useScrollProgress'
import { useTheme } from '@/hooks/useTheme'
import { site } from '@/content/site'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const scrolled = useScrolled(40)
  const { theme, toggle } = useTheme()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-md border-b'
            : 'bg-transparent'
        }`}
        style={scrolled ? {
          background: 'color-mix(in srgb, var(--bg) 85%, transparent)',
          borderColor: 'var(--border)',
        } : {}}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-display text-lg font-medium tracking-tight hover:opacity-70 transition-opacity"
            style={{ color: 'var(--fg)' }} aria-label="Home">
            {site.initials}
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} to={l.href}
                className={`text-sm tracking-wide transition-colors duration-200 relative group`}
                style={{ color: location.pathname.startsWith(l.href) ? 'var(--fg)' : 'var(--muted)' }}>
                {l.label}
                <span className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${
                  location.pathname.startsWith(l.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} style={{ background: 'var(--accent)' }} />
              </Link>
            ))}

            {/* Resume CTA */}
            <a href={site.links.resume} download="Shreya_Mijith_Andezhath_Resume.pdf"
              className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full transition-all duration-200"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--muted)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--muted)'
              }}>
              Resume
            </a>

            {/* Theme toggle */}
            <button onClick={toggle}
              className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}>
              {theme === 'light' ? (
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggle} className="w-8 h-8 flex items-center justify-center" style={{ color: 'var(--muted)' }} aria-label="Toggle theme">
              {theme === 'light' ? '◑' : '○'}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-1.5" aria-label="Toggle menu">
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} style={{ background: 'var(--fg)' }} />
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} style={{ background: 'var(--fg)' }} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ background: 'var(--bg)' }}>
            {links.map(l => (
              <Link key={l.href} to={l.href} onClick={() => setMenuOpen(false)}
                className="font-display text-3xl hover:opacity-70 transition-opacity"
                style={{ color: 'var(--fg)' }}>
                {l.label}
              </Link>
            ))}
            <a href={site.links.resume} download="Shreya_Mijith_Andezhath_Resume.pdf"
              className="text-sm font-mono uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
              Resume ↓
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
