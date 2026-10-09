'use client'

import { Calculator } from 'lucide-react'
import { useState } from 'react'
import { Badge, Card } from '@/components/kit'

const DAILY_VALUE = 70
const DEDUCTIBLE_DAYS = 3
const MIN_DAYS = 4
const MAX_DAYS = 15

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function RestSimulator() {
  const [days, setDays] = useState(10)
  const paidDays = Math.max(0, days - DEDUCTIBLE_DAYS)
  const total = paidDays * DAILY_VALUE

  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Calculator className="size-5 text-warning" aria-hidden="true" />
          Simulador de Repouso
        </h2>
        <Badge tone="accent" className="bg-accent-50">
          Transparência Total
        </Badge>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Veja quanto receberá via Pix de acordo com os dias internados prescritos em atestado.
      </p>

      <div className="mt-4 rounded-xl bg-primary-50 p-4">
        <div className="flex items-center justify-between">
          <label htmlFor="dias" className="text-sm font-semibold">
            Dias totais de repouso:
          </label>
          <output htmlFor="dias" className="font-heading text-2xl font-extrabold text-primary-dark">
            {days} dias
          </output>
        </div>
        <input
          id="dias"
          type="range"
          min={MIN_DAYS}
          max={MAX_DAYS}
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="mt-3 h-2 w-full cursor-pointer accent-primary-dark"
        />
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          <span>{MIN_DAYS} dias (mín.)</span>
          <span>{MAX_DAYS} dias (máx.)</span>
        </div>
      </div>

      <dl className="mt-3 rounded-xl bg-primary-100/60 p-4 text-sm">
        <div className="flex justify-between gap-3">
          <dt className="text-muted-foreground">
            {days} dias - {DEDUCTIBLE_DAYS} dias de franquia contratual
          </dt>
          <dd className="font-semibold">= {paidDays} dias a pagar</dd>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <dt className="font-semibold">Total estimado via Pix:</dt>
          <dd className="font-heading text-2xl font-extrabold text-warning" aria-live="polite">
            {brl.format(total)}
          </dd>
        </div>
      </dl>
      <p className="mt-2 text-xs text-muted-foreground italic">
        *A franquia padrão de 3 dias é aplicada a cada novo evento clínico.
      </p>
    </Card>
  )
}
