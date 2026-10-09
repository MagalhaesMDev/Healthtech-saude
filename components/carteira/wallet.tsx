'use client'

import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight, CircleCheck, ReceiptText, Wallet } from 'lucide-react'
import { useState } from 'react'
import { Badge, Card, SectionHeader } from '@/components/kit'

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

const transactions = [
  { id: 1, title: 'Cashback Farmácia Vida Mais', date: '05/Out', amount: 17.5 },
  { id: 2, title: 'Bônus renovação antecipada', date: '01/Out', amount: 25 },
  { id: 3, title: 'Abatimento mensalidade de Setembro', date: '01/Set', amount: -12.4 },
  { id: 4, title: 'Cashback Lab Saúde Já', date: '22/Ago', amount: 12.4 },
]

const PLAN_PRICE = 24.9

export function WalletPanel() {
  const [balance, setBalance] = useState(42.5)
  const [message, setMessage] = useState<string | null>(null)

  function applyToPlan() {
    const used = Math.min(balance, PLAN_PRICE)
    if (used <= 0) return
    setBalance((b) => Math.round((b - used) * 100) / 100)
    setMessage(`${brl.format(used)} abatidos da próxima mensalidade.`)
  }

  function redeemPix() {
    if (balance <= 0) return
    setMessage(`${brl.format(balance)} enviados via Pix para sua chave CPF.`)
    setBalance(0)
  }

  return (
    <>
      <Card className="border-primary-100 bg-primary-50">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent text-foreground">
              <Wallet className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Saldo da Carteira do Corre</p>
              <p className="font-heading text-4xl font-extrabold" aria-live="polite">
                {brl.format(balance)}
              </p>
            </div>
          </div>
          <Badge tone="error" className="bg-card">
            Cashback Ativo
          </Badge>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={applyToPlan}
            disabled={balance <= 0}
            className="flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-accent font-bold text-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            <ReceiptText className="size-5" aria-hidden="true" />
            Abater Plano
          </button>
          <button
            type="button"
            onClick={redeemPix}
            disabled={balance <= 0}
            className="flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-border bg-card font-bold text-foreground transition-colors hover:bg-primary-100 disabled:opacity-50"
          >
            <ArrowRightLeft className="size-5" aria-hidden="true" />
            Resgatar Pix
          </button>
        </div>
        {message && (
          <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-success" role="status">
            <CircleCheck className="size-4" aria-hidden="true" />
            {message}
          </p>
        )}
      </Card>

      <Card>
        <SectionHeader title="Extrato" subtitle="Últimas movimentações de cashback" />
        <ul className="divide-y divide-border">
          {transactions.map((t) => {
            const credit = t.amount > 0
            return (
              <li key={t.id} className="flex min-h-14 items-center gap-3 py-2">
                <span
                  className={
                    credit
                      ? 'flex size-9 items-center justify-center rounded-full bg-success-50 text-success'
                      : 'flex size-9 items-center justify-center rounded-full bg-primary-50 text-primary'
                  }
                >
                  {credit ? (
                    <ArrowDownLeft className="size-4" aria-hidden="true" />
                  ) : (
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
                <span className={credit ? 'font-bold text-success' : 'font-bold text-foreground'}>
                  {credit ? '+' : '-'} {brl.format(Math.abs(t.amount))}
                </span>
              </li>
            )
          })}
        </ul>
      </Card>
    </>
  )
}
