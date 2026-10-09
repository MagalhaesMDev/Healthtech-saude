'use client'

import { ChartColumn, House, ShieldCheck, Stethoscope, Wallet } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const items = [
  { href: '/', label: 'Início', icon: House },
  { href: '/saude', label: 'Saúde', icon: Stethoscope },
  { href: '/protecao', label: 'Proteção', icon: ShieldCheck },
  { href: '/carteira', label: 'Carteira', icon: Wallet },
  { href: '/gestao', label: 'Gestão', icon: ChartColumn },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Navegação principal" className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2 pb-[env(safe-area-inset-bottom)]">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold transition-colors',
                  active ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <span
                  className={cn(
                    'flex h-8 w-14 items-center justify-center rounded-full transition-colors',
                    active && 'bg-primary-50',
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
