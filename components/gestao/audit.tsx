import {
  Bell,
  Bike,
  Car,
  ClipboardList,
  Download,
  Gauge,
  Megaphone,
  Scale,
  ShieldCheck,
  TriangleAlert,
  Zap,
  ArrowLeftRight,
  Bus,
} from 'lucide-react'
import { Badge, Card } from '@/components/kit'

const modals = [
  { icon: Bike, label: 'Motocicleta (61% da base)', score: 842 },
  { icon: Bus, label: 'Bicicleta & Ciclofaixa (27% da base)', score: 838 },
  { icon: Car, label: 'Carro & Utilitários (12% da base)', score: 846 },
]

export function AlgorithmicAudit() {
  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Scale className="size-5 text-warning" aria-hidden="true" />
            Auditoria Algorítmica IPI
          </h2>
          <p className="text-sm text-muted-foreground">Conformidade e paridade de acesso ético</p>
        </div>
        <Badge tone="success">0,00% Viés</Badge>
      </div>

      <div className="mt-4 flex gap-2.5 rounded-xl bg-primary-50 p-3 text-sm text-muted-foreground">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        <p>
          O modelo preditivo de solvência e acesso avalia <strong className="text-foreground">unicamente</strong> meses
          ativos em rota e assiduidade. Fatores como gênero, faixa etária e CEP residencial são estritamente isolados da
          precificação.
        </p>
      </div>

      <p className="mt-4 text-sm font-bold">Distribuição de Score Médio por Modal:</p>
      <ul className="mt-2 flex flex-col gap-3">
        {modals.map((m) => (
          <li key={m.label}>
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="flex items-center gap-1.5">
                <m.icon className="size-4 text-primary" aria-hidden="true" />
                {m.label}
              </span>
              <span className="shrink-0 text-xs text-muted-foreground">Score {m.score} / 1000</span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-primary-50">
              <div className="h-full rounded-full bg-primary-dark" style={{ width: `${m.score / 10}%` }} />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-primary-100/60 p-3 text-sm">
        <span className="flex items-center gap-1.5 font-semibold">
          <ArrowLeftRight className="size-4 text-primary" aria-hidden="true" />
          Desvio Padrão Intergrupos
        </span>
        <span className="font-bold text-success">± 0,38% (Insignificante)</span>
      </div>
    </Card>
  )
}

export function ClaimsOverview() {
  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold">Acionamento de Sinistros</h2>
          <p className="text-sm text-muted-foreground">Fluxo ágil de diárias por afastamento temporário</p>
        </div>
        <Gauge className="size-5 text-primary" aria-hidden="true" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-success-50 p-3">
          <div className="flex items-center justify-between">
            <p className="font-heading text-3xl font-extrabold text-success">74%</p>
            <Zap className="size-5 text-success" aria-hidden="true" />
          </div>
          <p className="font-bold">Aprovação em até 4h</p>
          <p className="text-xs text-muted-foreground">Valores até R$ 500 com atestado digital validado via OCR</p>
          <p className="mt-3 text-xs text-muted-foreground">Depósito via PIX</p>
        </div>
        <div className="rounded-xl bg-accent-50 p-3">
          <div className="flex items-center justify-between">
            <p className="font-heading text-3xl font-extrabold text-warning">26%</p>
            <ClipboardList className="size-5 text-warning" aria-hidden="true" />
          </div>
          <p className="font-bold">Mesa Pericial Humana</p>
          <p className="text-xs text-muted-foreground">Acidentes complexos ou períodos superiores a 7 dias</p>
          <p className="mt-3 text-xs text-muted-foreground">Prazo médio: 28h</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-primary-50 p-3 text-sm">
        <span className="font-semibold">Total de sinistros processados no ciclo:</span>
        <span className="font-bold">1.412 solicitações</span>
      </div>
    </Card>
  )
}

export function PreventiveIntelligence() {
  return (
    <Card>
      <h2 className="flex items-center gap-2 text-lg font-bold">
        <Bell className="size-5 text-warning" aria-hidden="true" />
        Inteligência Preventiva Coletiva
      </h2>
      <p className="text-sm text-muted-foreground">
        Detecção precoce de padrões de saúde ocupacional para intervenção antecipada.
      </p>
      <div className="mt-4 rounded-xl border border-accent/40 bg-accent-50 p-4">
        <div className="flex items-center justify-between gap-2">
          <Badge tone="neutral" className="text-warning">
            <TriangleAlert className="size-3.5" aria-hidden="true" />
            Alerta Ativo • Zona Leste / SP
          </Badge>
          <span className="text-xs text-muted-foreground">Há 2 dias</span>
        </div>
        <p className="mt-2 font-heading text-xl font-bold">Aumento de 18% em queixas de lombalgia mecânica</p>
        <p className="mt-1 text-sm text-warning">
          Pico identificado entre entregadores motociclistas após trechos de pavimento irregular. Ação disparada: envio
          de pílulas de ergonomia, exercícios de descompressão lombar e triagem fisioterápica preventiva sem
          coparticipação.
        </p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <Megaphone className="size-4 text-warning" aria-hidden="true" />
            Campanha em curso: 14.200 impactados
          </p>
          <button
            type="button"
            className="min-h-11 shrink-0 rounded-xl bg-accent px-4 text-sm font-bold text-foreground transition-opacity hover:opacity-90"
          >
            Ver Eficácia
          </button>
        </div>
      </div>
    </Card>
  )
}

export function ExportReport() {
  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary-dark px-4 font-bold text-white shadow-raised transition-colors hover:bg-primary"
      >
        <Download className="size-5" aria-hidden="true" />
        Exportar Relatório LGPD &amp; Dados Agregados
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Garantia de Anonimização K-Anonymity (k ≥ 50) • Art. 13 da Lei 13.709/2018. Dados processados sob sigilo
        epidemiológico para aprimoramento de políticas públicas e sustentabilidade do microtrabalho.
      </p>
    </div>
  )
}
