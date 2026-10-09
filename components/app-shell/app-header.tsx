'use client'

import { HeartPulse, Sun, User } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function AppHeader({ title }: { title: string }) {
  const [sunMode, setSunMode] = useState(false)

  function toggleSunMode() {
    const next = !sunMode
    setSunMode(next)
    document.documentElement.classList.toggle('sun-mode', next)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-3">
        <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-white" aria-hidden="true">
          <HeartPulse className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-primary">Saúde Primeiro</p>
          <h1 className="truncate text-lg font-bold leading-tight">{title}</h1>
        </div>
        <button
          type="button"
          onClick={toggleSunMode}
          aria-pressed={sunMode}
          aria-label="Modo Sol: aumentar contraste para uso sob luz solar"
          className={cn(
            'flex size-12 items-center justify-center rounded-full bg-accent text-foreground shadow-raised transition-transform active:scale-95',
            sunMode && 'ring-4 ring-accent/40',
          )}
        >
          <Sun className="size-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Meu perfil"
          className="flex size-11 items-center justify-center rounded-full bg-primary-dark text-white"
        >
          <User className="size-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
