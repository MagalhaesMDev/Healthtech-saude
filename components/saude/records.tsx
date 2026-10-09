import {
  ArrowRight,
  CirclePlus,
  ClipboardCheck,
  Download,
  FolderHeart,
  Lock,
  QrCode,
  ReceiptText,
  Syringe,
  type LucideIcon,
} from 'lucide-react'
import { Badge, Card, IconTile } from '@/components/kit'

type RecordItem = {
  title: string
  meta: React.ReactNode
  text: string
  icon: LucideIcon
  tone: 'primary' | 'accent' | 'success'
  action?: { label: string; icon: LucideIcon }
}

const records: RecordItem[] = [
  {
    title: 'Atestado Médico (2 dias)',
    meta: <span className="text-xs text-muted-foreground">Ontem</span>,
    text: 'Emitido em teleconsulta pelo Dr. Marcelo Ramos. CID M54.5 (Lombalgia).',
    icon: ClipboardCheck,
    tone: 'primary',
    action: { label: 'Baixar PDF', icon: Download },
  },
  {
    title: 'Receita Digital Válida',
    meta: <span className="text-xs font-bold text-success">Válida até 28/Nov</span>,
    text: 'Ibuprofeno 600mg + Paracetamol. Aceita em qualquer farmácia via QR Code oficial.',
    icon: ReceiptText,
    tone: 'accent',
    action: { label: 'Abrir QR Code', icon: QrCode },
  },
  {
    title: 'Vacina Antitetânica (Dupla)',
    meta: <span className="text-xs text-muted-foreground">14/Set/2024</span>,
    text: '3ª Dose de reforço confirmada. Proteção ativa até 2034.',
    icon: Syringe,
    tone: 'success',
  },
]

export function MedicalRecords() {
  return (
    <section aria-labelledby="prontuario" className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 id="prontuario" className="flex items-center gap-2 text-lg font-bold">
          <FolderHeart className="size-5 text-primary" aria-hidden="true" />
          Prontuário Pessoal
        </h2>
        <button type="button" className="flex items-center gap-1 text-sm font-semibold text-primary">
          Ver histórico
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="flex gap-3 rounded-2xl bg-ink p-4 text-white shadow-raised">
        <IconTile icon={Lock} tone="dark" />
        <div>
          <p className="flex flex-wrap items-center gap-2 font-heading text-lg font-bold">
            Só Você Controla
            <Badge tone="success">
              LGPD BLINDADO
            </Badge>
          </p>
          <p className="text-sm text-white/80">
            Seus laudos e receitas ficam guardados exclusivamente para você. Nem seguradoras nem apps de
            entrega/corridas parceiros têm acesso.
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {records.map((r) => (
          <li key={r.title}>
            <Card className="flex gap-3 p-4">
              <IconTile
                icon={r.icon}
                tone={r.tone === 'primary' ? 'primary' : r.tone === 'accent' ? 'accent' : 'success'}
                className={r.tone === 'primary' ? 'bg-primary text-white' : undefined}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold leading-tight">{r.title}</p>
                  <span className="shrink-0">{r.meta}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{r.text}</p>
                {r.action && (
                  <button
                    type="button"
                    className="mt-2 inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-primary-50 px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-100"
                  >
                    <r.action.icon className="size-4" aria-hidden="true" />
                    {r.action.label}
                  </button>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary-100 text-lg font-bold text-primary-dark transition-colors hover:bg-primary-50"
      >
        <CirclePlus className="size-5" aria-hidden="true" />
        Adicionar exame ou laudo
      </button>
    </section>
  )
}
