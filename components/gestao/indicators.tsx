import { Activity, ChartLine, Gauge, ShieldCheck, Timer, TrendingUp, Users, Wallet, CircleCheck, Lock } from 'lucide-react'
import { Badge, Card } from '@/components/kit'

export function ManagementHero() {
  return (
    <section className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
      <div className="flex flex-col items-start gap-1.5">
        <Badge tone="solid-success">
          <CircleCheck className="size-3.5" aria-hidden="true" />
          Visão Macrossocial &amp; Acadêmica
        </Badge>
        <Badge tone="neutral">
          <Lock className="size-3.5" aria-hidden="true" />
          LGPD Compliant
        </Badge>
      </div>
      <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight">Painel de Gestão e Sustentabilidade</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Monitoramento de impacto assistencial, equilíbrio atuarial e transparência estatística para
        microempreendedores e entregadores parceiros.
      </p>
    </section>
  )
}

export function KeyIndicators() {
  return (
    <section aria-labelledby="kpis">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h2 id="kpis" className="flex items-center gap-2 text-lg font-bold">
          <Activity className="size-5 text-primary" aria-hidden="true" />
          Indicadores Chave da Operação
        </h2>
        <span className="shrink-0 text-xs text-muted-foreground">Ciclo Atual • D-0</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            Assinantes Ativos
            <Users className="size-4 text-primary" aria-hidden="true" />
          </div>
          <p className="mt-1 font-heading text-2xl font-extrabold">52.480</p>
          <p className="flex items-center gap-1 text-xs font-semibold text-success">
            <TrendingUp className="size-3.5" aria-hidden="true" />
            +14% neste mês
          </p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            MRR Recorrente
            <Wallet className="size-4 text-primary" aria-hidden="true" />
          </div>
          <p className="mt-1 font-heading text-xl font-extrabold">R$ 1.306.752</p>
          <p className="text-xs text-muted-foreground">Previsão estável (Q3)</p>
        </Card>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          { icon: Timer, value: '7,4 min', label: 'Espera Telemed', color: 'text-primary' },
          { icon: ShieldCheck, value: '41,2%', label: 'Sinistralidade', color: 'text-success' },
          { icon: ChartLine, value: '2,8%', label: 'Churn Mensal', color: 'text-error' },
        ].map((k) => (
          <Card key={k.label} className="flex flex-col items-center p-3 text-center">
            <k.icon className={`size-5 ${k.color}`} aria-hidden="true" />
            <p className="mt-1 font-heading text-lg font-bold">{k.value}</p>
            <p className="text-xs text-muted-foreground">{k.label}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

const allocation = [
  { label: 'Seguro Acidentes & Diárias (SeguraMais)', pct: 35, value: 'R$ 8,72', color: 'bg-primary-dark' },
  { label: 'Corpo Clínico & Plantão Telemedicina', pct: 30, value: 'R$ 7,47', color: 'bg-primary' },
  { label: 'Tecnologia, Nuvem e Suporte 24h', pct: 15, value: 'R$ 3,74', color: 'bg-accent' },
  { label: 'Integração Plataforma Entregajá', pct: 8, value: 'R$ 1,99', color: 'bg-ink' },
  { label: 'Tributação Municipal & Federal', pct: 7, value: 'R$ 1,74', color: 'bg-muted-foreground' },
  { label: 'Fundo Solidário Cashback & Margem', pct: 5, value: 'R$ 1,24', color: 'bg-success' },
]

export function UnitEconomics() {
  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Gauge className="size-5 text-warning" aria-hidden="true" />
          Unit Economics &amp; Equilíbrio
        </h2>
        <Badge tone="primary">100% Auditável</Badge>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Destinação integral de cada mensalidade de <strong className="text-foreground">R$ 24,90</strong>
      </p>

      <div className="mt-4 flex h-3 overflow-hidden rounded-full" role="img" aria-label="Distribuição da mensalidade">
        {allocation.map((a) => (
          <span key={a.label} className={a.color} style={{ width: `${a.pct}%` }} />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
        <span>Custos Assistenciais: 65%</span>
        <span>Operação &amp; Parcerias: 35%</span>
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {allocation.map((a) => (
          <li key={a.label} className="flex items-center gap-3 rounded-xl bg-primary-50 px-3 py-2.5 text-sm">
            <span className={`size-2.5 shrink-0 rounded-full ${a.color}`} aria-hidden="true" />
            <span className="flex-1">{a.label}</span>
            <span className="shrink-0 text-right">
              <span className="font-bold">{a.pct}%</span>{' '}
              <span className="text-muted-foreground">({a.value})</span>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
