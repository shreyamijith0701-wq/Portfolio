import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '../../lib/animations'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export default function Reveal({ children, delay = 0, className, once = true }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
