import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn('rounded-2xl border border-border bg-card p-5 shadow-card', className)}>{children}</div>
  )
}

export function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  action,
}: {
  icon?: LucideIcon
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="mb-3 flex items-start justify-between gap-3">
      <div className="min-w-0">
        <h2 className="flex items-center gap-2 text-lg font-bold leading-tight text-foreground">
          {Icon && <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />}
          {title}
        </h2>
        {subtitle && <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

type Tone = 'primary' | 'accent' | 'success' | 'error' | 'neutral' | 'solid-success'

const toneClasses: Record<Tone, string> = {
  primary: 'bg-primary-50 text-primary',
  accent: 'bg-accent text-foreground',
  success: 'bg-success-50 text-success',
  error: 'bg-error-50 text-error',
  neutral: 'bg-card text-muted-foreground border border-border',
  'solid-success': 'bg-success text-white',
}

export function Badge({
  tone = 'primary',
  className,
  children,
}: {
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold leading-none',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function IconTile({
  icon: Icon,
  tone = 'primary',
  className,
}: {
  icon: LucideIcon
  tone?: 'primary' | 'accent' | 'success' | 'error' | 'dark'
  className?: string
}) {
  const tones = {
    primary: 'bg-primary-50 text-primary',
    accent: 'bg-accent text-foreground',
    success: 'bg-success text-white',
    error: 'bg-error-50 text-error',
    dark: 'bg-white/10 text-white',
  }
  return (
    <span className={cn('flex size-11 shrink-0 items-center justify-center rounded-xl', tones[tone], className)}>
      <Icon className="size-5" aria-hidden="true" />
    </span>
  )
}
