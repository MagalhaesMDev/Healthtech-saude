import type { Metadata } from 'next'
import { PageShell } from '@/components/app-shell/page-shell'
import { WalletPanel } from '@/components/carteira/wallet'

export const metadata: Metadata = { title: 'Carteira — Saúde Primeiro' }

export default function CarteiraPage() {
  return (
    <PageShell title="Carteira">
      <WalletPanel />
    </PageShell>
  )
}
