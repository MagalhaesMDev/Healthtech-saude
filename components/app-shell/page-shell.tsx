import { Siren } from 'lucide-react'
import type { ReactNode } from 'react'
import { AppHeader } from './app-header'
import { BottomNav } from './bottom-nav'

export function PageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-dvh pb-32">
      <AppHeader title={title} />
      <main className="mx-auto flex max-w-md flex-col gap-6 px-4 pt-4">{children}</main>
      <div className="fixed inset-x-0 bottom-16 z-20 border-t border-border/60 bg-background/95 py-1.5 backdrop-blur">
        <p className="mx-auto flex max-w-md items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Siren className="size-3.5 text-error" aria-hidden="true" />
          Protótipo acadêmico TCC • Em emergência ligue{' '}
          <a href="tel:192" className="font-bold text-error">
            192
          </a>
        </p>
      </div>
      <BottomNav />
    </div>
  )
}
