import {
  BadgeCheck,
  Bike,
  CalendarClock,
  CircleAlert,
  CircleCheck,
  Info,
  Lock,
  ReceiptText,
  ShieldCheck,
  TrendingUp,
  Video,
  Wallet,
  ArrowRightLeft,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge, Card } from '@/components/kit'

export function EcosystemNotice() {
  return (
    <aside className="flex gap-3 rounded-2xl border border-error/20 bg-error-50 p-4" role="note">
      <CircleAlert className="mt-0.5 size-5 shrink-0 text-error" aria-hidden="true" />
      <div className="text-sm">
        <p className="font-bold text-foreground">Aviso Importante do Ecossistema</p>
        <p className="text-error">
          Não é plano de saúde convencional. Em emergências graves no trânsito ou acidentes, ligue imediatamente para o{' '}
          <a href="tel:192" className="font-bold underline">
            SAMU 192
          </a>
          .
        </p>
      </div>
    </aside>
  )
}

export function Greeting() {
  return (
    <section className="flex items-center gap-4" aria-label="Saudação">
      <div className="relative shrink-0">
        <Image
          src="/images/carlos.png"
          alt="Foto de Carlos Eduardo"
          width={72}
          height={72}
          className="size-18 rounded-full object-cover"
        />
        <span className="absolute -right-0.5 -bottom-0.5 flex size-6 items-center justify-center rounded-full border-2 border-background bg-success text-white">
          <CircleCheck className="size-3.5" aria-hidden="true" />
          <span className="sr-only">Conta verificada</span>
        </span>
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <p className="text-sm text-muted-foreground">Boa tarde</p>
        <p className="font-heading text-2xl font-bold leading-tight">Carlos Eduardo</p>
        <div className="flex flex-wrap gap-1.5">
          <Badge tone="primary">
            <BadgeCheck className="size-3.5" aria-hidden="true" />
            Plano Ativo (R$ 24,90/mês)
          </Badge>
          <Badge tone="accent" className="bg-accent-50">
            <Bike className="size-3.5" aria-hidden="true" />
            6º mês constante
          </Badge>
        </div>
      </div>
    </section>
  )
}

export function NextCare() {
  return (
    <Card className="border-primary-100 bg-primary-50">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="flex items-center gap-1.5 text-sm font-bold text-primary">
          <CalendarClock className="size-4" aria-hidden="true" />
          Próximo Cuidado • Hoje
        </p>
        <Badge tone="neutral" className="bg-primary-100 text-primary-dark">
          15:30 (em 45 min)
        </Badge>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/images/dra-camila.png"
          alt="Dra. Camila Santos"
          width={56}
          height={56}
          className="size-14 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="font-heading text-lg font-bold">Dra. Camila Santos</p>
          <p className="truncate text-sm text-muted-foreground">Clínica Geral • Acompanhamento Postural</p>
          <p className="flex items-center gap-1.5 text-xs font-semibold text-success">
            <span className="size-2 rounded-full bg-success" aria-hidden="true" />
            Sala virtual liberada
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-primary-dark font-bold text-white transition-colors hover:bg-primary"
        >
          <Video className="size-5" aria-hidden="true" />
          Entrar na Sala
        </button>
        <button
          type="button"
          className="flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-border bg-card font-bold text-foreground transition-colors hover:bg-primary-50"
        >
          <Info className="size-5" aria-hidden="true" />
          Detalhes
        </button>
      </div>
    </Card>
  )
}

export function ProtectionIndex() {
  const score = 498
  const max = 1000
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const progress = (score / max) * circumference

  return (
    <Card>
      <div className="mb-1 flex items-start justify-between gap-2">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
          Índice de Proteção (IPI)
        </h2>
        <Badge tone="success">
          <TrendingUp className="size-3.5" aria-hidden="true" />
          +83 pts
        </Badge>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">Construção contínua da sua segurança</p>

      <div className="flex items-center gap-4">
        <div className="relative size-32 shrink-0">
          <svg viewBox="0 0 120 120" className="size-full -rotate-90" role="img" aria-label={`${score} de ${max} pontos`}>
            <circle cx="60" cy="60" r={radius} fill="none" stroke="var(--primary-50)" strokeWidth="10" />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${progress} ${circumference}`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center" aria-hidden="true">
            <span className="font-heading text-3xl font-extrabold">{score}</span>
            <span className="text-xs text-muted-foreground">de 1.000</span>
          </div>
        </div>
        <div>
          <p className="flex items-center gap-1.5 text-sm font-bold text-success">
            <CircleCheck className="size-4" aria-hidden="true" />
            Nível Confiável (Prata)
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Mensalidade quitada em dia! Mais 2 meses pontuais liberam diária estendida de descanso.
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-2.5 rounded-xl bg-primary-50 p-3 text-xs text-muted-foreground">
        <Lock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        <p>
          <strong className="text-foreground">Fórmula ética:</strong> O IPI calcula apenas pontualidade e tempo com a
          gente. <em>Nunca</em> analisa histórico médico ou consultas.
        </p>
      </div>
    </Card>
  )
}

export function WalletSummary() {
  return (
    <Card className="border-primary-100 bg-primary-50">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full bg-accent text-foreground">
            <Wallet className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">Carteira do Corre</p>
            <p className="font-heading text-3xl font-extrabold">R$ 42,50</p>
          </div>
        </div>
        <Badge tone="error" className="bg-card">
          Cashback Ativo
        </Badge>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        R$ 17,50 economizados na Farmácia Vida Mais + R$ 25,00 por renovação antecipada do plano.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Link
          href="/carteira"
          className="flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-accent font-bold text-foreground transition-opacity hover:opacity-90"
        >
          <ReceiptText className="size-5" aria-hidden="true" />
          Abater Plano
        </Link>
        <Link
          href="/carteira"
          className="flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-border bg-card font-bold text-foreground transition-colors hover:bg-primary-50"
        >
          <ArrowRightLeft className="size-5" aria-hidden="true" />
          Resgatar Pix
        </Link>
      </div>
    </Card>
  )
}
