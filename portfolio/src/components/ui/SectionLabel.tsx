interface SectionLabelProps {
  children: string
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
      <span className="text-label">{children}</span>
    </div>
  )
}
