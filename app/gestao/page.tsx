import type { Metadata } from 'next'
import { PageShell } from '@/components/app-shell/page-shell'
import { AlgorithmicAudit, ClaimsOverview, ExportReport, PreventiveIntelligence } from '@/components/gestao/audit'
import { KeyIndicators, ManagementHero, UnitEconomics } from '@/components/gestao/indicators'

export const metadata: Metadata = { title: 'Gestão — Saúde Primeiro' }

export default function GestaoPage() {
  return (
    <PageShell title="Gestão">
      <ManagementHero />
      <KeyIndicators />
      <UnitEconomics />
      <AlgorithmicAudit />
      <ClaimsOverview />
      <PreventiveIntelligence />
      <ExportReport />
    </PageShell>
  )
}
