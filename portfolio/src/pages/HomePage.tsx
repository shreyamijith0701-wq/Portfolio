import { motion } from 'framer-motion'
import { pageTransition } from '../lib/animations'
import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import FeaturedWork from '../components/sections/FeaturedWork'
import AboutStrip from '../components/sections/AboutStrip'
import Process from '../components/sections/Process'
import CTA from '../components/sections/CTA'

export default function HomePage() {
  return (
    <Layout>
      <motion.div {...pageTransition}>
        <Hero />
        <FeaturedWork />
        <AboutStrip />
        <Process />
        <CTA />
      </motion.div>
    </Layout>
  )
}
