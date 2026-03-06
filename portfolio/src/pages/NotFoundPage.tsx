import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/layout/Layout'
import { pageTransition } from '../lib/animations'

export default function NotFoundPage() {
  return (
    <Layout>
    <motion.div {...pageTransition} className="py-40 text-center">
      <div className="container-narrow">
        <p
          className="font-display font-light mb-2"
          style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', color: 'var(--border)', lineHeight: 1 }}
        >
          404
        </p>
        <h1
          className="font-display font-light mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--fg)', letterSpacing: '-0.02em' }}
        >
          This page doesn't exist.
        </h1>
        <p className="mb-10" style={{ color: 'var(--muted)' }}>
          Maybe the URL changed, or maybe you took a wrong turn.
        </p>
        <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
          ← Back home
        </Link>
      </div>
    </motion.div>
    </Layout>
  )
}
