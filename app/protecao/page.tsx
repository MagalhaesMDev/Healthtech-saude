import type { Metadata } from 'next'
import { PageShell } from '@/components/app-shell/page-shell'
import { ClaimHistory, ClaimSteps, InsurerFooter, PauseProtection } from '@/components/protecao/claims'
import { Coverages, PolicyStatus, ProtectionHero } from '@/components/protecao/coverage'
import { RestSimulator } from '@/components/protecao/rest-simulator'

export const metadata: Metadata = { title: 'Proteção & Diária — Saúde Primeiro' }

export default function ProtecaoPage() {
  return (
    <PageShell title="Proteção & Diária">
      <PolicyStatus />
      <ProtectionHero />
      <Coverages />
      <RestSimulator />
      <ClaimSteps />
      <ClaimHistory />
      <PauseProtection />
      <InsurerFooter />
    </PageShell>
  )
}
