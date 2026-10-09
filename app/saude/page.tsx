import type { Metadata } from 'next'
import { PageShell } from '@/components/app-shell/page-shell'
import { PartnerNetwork } from '@/components/saude/partners'
import { MedicalRecords } from '@/components/saude/records'
import { Specialists } from '@/components/saude/specialists'
import { SymptomGuide } from '@/components/saude/symptom-guide'
import { SaudeHero, TelemedicineCard } from '@/components/saude/telemedicine'

export const metadata: Metadata = { title: 'Saúde & Consultas — Saúde Primeiro' }

export default function SaudePage() {
  return (
    <PageShell title="Saúde & Consultas">
      <SaudeHero />
      <TelemedicineCard />
      <Specialists />
      <SymptomGuide />
      <PartnerNetwork />
      <MedicalRecords />
    </PageShell>
  )
}
