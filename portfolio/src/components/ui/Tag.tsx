interface TagProps {
  label: string
  variant?: 'default' | 'accent'
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono tracking-wide uppercase ${
        variant === 'accent'
          ? 'bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30'
          : ''
      }`}
      style={variant === 'default' ? { background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border)' } : {}}
    >
      {label}
    </span>
  )
}
