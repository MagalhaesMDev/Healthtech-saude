import { PageShell } from '@/components/app-shell/page-shell'
import {
  EcosystemNotice,
  Greeting,
  NextCare,
  ProtectionIndex,
  WalletSummary,
} from '@/components/inicio/overview'
import { PreventionTips, QuickServices, WhatsappHelp } from '@/components/inicio/services'

export default function HomePage() {
  return (
    <PageShell title="Início">
      <EcosystemNotice />
      <Greeting />
      <NextCare />
      <ProtectionIndex />
      <WalletSummary />
      <QuickServices />
      <PreventionTips />
      <WhatsappHelp />
    </PageShell>
  )
}
