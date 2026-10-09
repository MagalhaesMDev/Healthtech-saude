'use client'

import { Banknote, CirclePause, CirclePlay, History, LogIn, ShieldCheck, Zap } from 'lucide-react'
import { useState } from 'react'
import { Badge, Card } from '@/components/kit'
import { cn } from '@/lib/utils'

const steps = [
  { title: 'Envie foto do Atestado e Documento', text: 'Foto nítida com CRM legível + RG ou CNH direto da câmera.' },
  { title: 'Análise ultra-rápida', text: 'Aprovação automática para até R$ 500 ou auditoria humana em até 48h.' },
  { title: 'Pix direto na sua conta', text: 'Depósito imediato em até 24 horas após aprovação final.' },
]

export function ClaimSteps() {
  return (
    <section aria-labelledby="acionar" className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
      <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary uppercase">
        <Zap className="size-4" aria-hidden="true" />
        Sem fila e sem estresse
      </p>
      <h2 id="acionar" className="mt-1 text-xl font-bold">
        Como Acionar a Sua Diária
      </h2>
      <ol className="mt-4 flex flex-col gap-4">
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-3">
            <span
              className={cn(
                'flex size-8 shrink-0 items-center justify-center rounded-full font-bold text-white',
                i === steps.length - 1 ? 'bg-success' : 'bg-primary-dark',
              )}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div>
              <p className="font-bold">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-accent text-lg font-bold text-foreground shadow-raised transition-opacity hover:opacity-90"
      >
        <LogIn className="size-5" aria-hidden="true" />
        Pedir Acionamento de Diária
      </button>
    </section>
  )
}

export function ClaimHistory() {
  return (
    <section aria-labelledby="historico">
      <div className="mb-3 flex items-center justify-between">
        <h2 id="historico" className="flex items-center gap-2 text-lg font-bold">
          <History className="size-5 text-primary" aria-hidden="true" />
          Histórico de Acionamentos
        </h2>
        <span className="text-sm text-muted-foreground">1 registro</span>
      </div>
      <Card className="p-4">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success">
            <Banknote className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-bold">Acionamento #4892</p>
            <p className="text-sm text-muted-foreground">Motivo: Queda leve de moto (5 diárias)</p>
          </div>
          <Badge tone="success">Pago via Pix</Badge>
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Há 2 meses • Chave CPF</span>
          <span className="font-heading text-lg font-bold">R$ 350,00</span>
        </div>
      </Card>
    </section>
  )
}

export function PauseProtection() {
  const [paused, setPaused] = useState(false)

  return (
    <section aria-labelledby="pausa" className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
      <h2 id="pausa" className="flex items-center gap-2 text-lg font-bold">
        <CirclePause className="size-5 text-primary" aria-hidden="true" />
        Vai viajar ou tirar férias da pista?
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Você pode <strong className="text-foreground">pausar sua proteção por até 60 dias</strong> sem cancelar sua
        assinatura. Sua carência acumulada é congelada (não zera) e as mensalidades não são cobradas durante a pausa.
        As coberturas ficam temporariamente suspensas até o retorno.
      </p>
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className={cn(
            'flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl px-4 font-bold shadow-card transition-colors',
            paused ? 'bg-success text-white' : 'bg-card text-primary hover:bg-primary-100',
          )}
        >
          {paused ? <CirclePlay className="size-5" aria-hidden="true" /> : <CirclePause className="size-5" aria-hidden="true" />}
          {paused ? 'Retomar Proteção' : 'Pausar Proteção Temporariamente'}
        </button>
        <p className="w-20 text-xs text-muted-foreground" aria-live="polite">
          {paused ? '1' : '0'} de 60 dias usados
        </p>
      </div>
    </section>
  )
}

export function InsurerFooter() {
  return (
    <footer className="text-center text-xs text-muted-foreground">
      <p className="flex items-center justify-center gap-1.5 text-sm font-semibold text-foreground">
        <ShieldCheck className="size-4" aria-hidden="true" />
        SeguraMais Seguradora S.A. • Registro SUSEP 04921
      </p>
      <p className="mt-1">
        Módulo demonstrativo acadêmico desenvolvido para inclusão securitária de profissionais autônomos e
        entregadores de aplicativo.
      </p>
    </footer>
  )
}
