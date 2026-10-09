import {
  ArrowRight,
  Bot,
  CircleCheck,
  CircleHelp,
  Droplet,
  Lightbulb,
  PersonStanding,
  Pill,
  ShieldPlus,
  Stethoscope,
  StretchHorizontal,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Badge, Card, IconTile, SectionHeader } from '@/components/kit'

type Service = {
  title: string
  subtitle: string
  icon: LucideIcon
  href: string
  tone: 'primary' | 'accent'
  tag: ReactNode
}

const services: Service[] = [
  {
    title: 'Teleconsulta 24h',
    subtitle: 'Fila média: 4 min',
    icon: Stethoscope,
    href: '/saude',
    tone: 'primary',
    tag: (
      <span className="size-2.5 rounded-full bg-success" aria-label="Online" role="img" />
    ),
  },
  {
    title: 'Seguro SeguraMais',
    subtitle: 'Afastamento & diárias',
    icon: ShieldPlus,
    href: '/protecao',
    tone: 'accent',
    tag: <Badge tone="accent" className="bg-accent-50">Diária Moto</Badge>,
  },
  {
    title: 'Farmácia Parceira',
    subtitle: 'Vida Mais & Drogarias',
    icon: Pill,
    href: '/saude',
    tone: 'primary',
    tag: <Badge tone="success">Até 65% OFF</Badge>,
  },
  {
    title: 'Assistente IA',
    subtitle: 'Dúvidas de sintomas',
    icon: Bot,
    href: '/saude#sintomas',
    tone: 'primary',
    tag: <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />,
  },
]

export function QuickServices() {
  return (
    <section aria-labelledby="servicos">
      <div className="mb-3 flex items-center justify-between">
        <h2 id="servicos" className="text-lg font-bold">
          Serviços e Apoio Rápido
        </h2>
        <span className="text-sm font-semibold text-primary">Toque rápido</span>
      </div>
      <ul className="grid grid-cols-2 gap-3">
        {services.map((s) => (
          <li key={s.title}>
            <Link
              href={s.href}
              className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-raised"
            >
              <div className="flex items-start justify-between">
                <IconTile icon={s.icon} tone={s.tone === 'accent' ? 'error' : 'primary'} />
                {s.tag}
              </div>
              <div>
                <p className="font-bold leading-tight">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

const tips = [
  {
    title: 'Postura na pilotagem',
    text: 'Mantenha os cotovelos levemente flexionados para absorver os impactos das valetas e reduzir a tensão na lombar.',
    icon: PersonStanding,
    done: true,
  },
  {
    title: 'Hidratação em dias quentes',
    text: 'Tome ao menos 200ml de água a cada parada de entrega para evitar tontura e fadiga nos reflexos.',
    icon: Droplet,
    done: false,
  },
  {
    title: 'Alongamento rápido (1 min)',
    text: 'Ao abastecer, apoie no banco da moto e projete o quadril para frente por 20 segundos para aliviar o ciático.',
    icon: StretchHorizontal,
    done: true,
  },
]

export function PreventionTips() {
  return (
    <Card>
      <SectionHeader
        icon={Lightbulb}
        title="Dicas do Corre & Prevenção"
        action={<span className="text-xs text-muted-foreground">3 min de leitura</span>}
      />
      <ul className="flex flex-col gap-3">
        {tips.map((t) => (
          <li key={t.title} className="flex gap-3 rounded-xl bg-primary-50 p-3">
            <t.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="font-bold">{t.title}</p>
                {t.done ? (
                  <CircleCheck className="size-4 shrink-0 text-success" aria-label="Lida" />
                ) : (
                  <span className="text-xs text-muted-foreground">Novo</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{t.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export function WhatsappHelp() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-full bg-primary-100 px-5 py-4 font-bold text-primary-dark transition-colors hover:bg-primary-50"
    >
      <CircleHelp className="size-5 shrink-0" aria-hidden="true" />
      Precisa de ajuda com o seguro? Fale no WhatsApp
    </a>
  )
}
