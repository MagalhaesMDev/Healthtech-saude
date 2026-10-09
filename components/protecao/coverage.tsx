import { CircleCheck, HeartHandshake, Hospital, ShieldCheck, ShieldHalf, Smile, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { Badge, Card, IconTile, SectionHeader } from '@/components/kit'

export function PolicyStatus() {
  return (
    <Card>
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex size-8 items-center justify-center rounded-full bg-success text-white">
          <ShieldCheck className="size-4" aria-hidden="true" />
        </span>
        <p className="font-semibold">Proteção Ativa • Carlos M.</p>
        <Badge tone="success">Plano Completo</Badge>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        SeguraMais Seguradora • Apólice Digital <span className="font-bold text-primary">#SM-8842-BR</span>
      </p>
    </Card>
  )
}

export function ProtectionHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-raised">
      <Image
        src="/images/courier-hero.png"
        alt="Entregador sorrindo em sua moto na cidade"
        width={800}
        height={450}
        className="h-48 w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <p className="text-sm">Sua renda garantida se imprevistos acontecerem</p>
        <p className="font-heading text-xl font-bold">Você não fica desamparado na pista</p>
      </div>
    </div>
  )
}

type Coverage = {
  title: string
  description: string
  value: string
  unit: string
  note: string
  noteTone: 'success' | 'muted'
  icon: LucideIcon
}

const coverages: Coverage[] = [
  {
    title: 'Diária por Internação Hospitalar',
    description: 'Até 15 dias seguidos por evento',
    value: 'R$ 70',
    unit: '/dia',
    note: 'Acidentes: sem carência (imediato)',
    noteTone: 'success',
    icon: Hospital,
  },
  {
    title: 'Morte Acidental',
    description: 'Segurança completa para dependentes',
    value: 'R$ 25.000',
    unit: 'indenização',
    note: 'Válido em qualquer trajeto',
    noteTone: 'success',
    icon: ShieldHalf,
  },
  {
    title: 'Auxílio Funeral Especial',
    description: 'Reembolso direto sem burocracia',
    value: 'R$ 3.500',
    unit: 'cobertura',
    note: 'Carência doenças: cumprida',
    noteTone: 'muted',
    icon: Smile,
  },
]

export function Coverages() {
  return (
    <section aria-labelledby="coberturas">
      <SectionHeader icon={HeartHandshake} title="Coberturas Inclusas" action={<Badge tone="success">Carência Cumprida</Badge>} />
      <ul className="flex flex-col gap-3">
        {coverages.map((c) => (
          <li key={c.title}>
            <Card className="flex gap-3 p-4">
              <IconTile icon={c.icon} />
              <div className="min-w-0 flex-1">
                <p className="font-bold leading-tight">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.description}</p>
                <p
                  className={
                    c.noteTone === 'success'
                      ? 'mt-1 flex items-center gap-1 text-xs font-semibold text-success'
                      : 'mt-1 text-xs text-muted-foreground'
                  }
                >
                  {c.noteTone === 'success' && <CircleCheck className="size-3.5 shrink-0" aria-hidden="true" />}
                  {c.note}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-heading text-lg font-bold text-primary-dark">{c.value}</p>
                <p className="text-xs text-muted-foreground">{c.unit}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
