'use client'

import { Check, Copy, FileText, FlaskConical, Store } from 'lucide-react'
import { useState } from 'react'
import { Badge, Card } from '@/components/kit'

export function PartnerNetwork() {
  const [copied, setCopied] = useState(false)

  async function copyCoupon() {
    try {
      await navigator.clipboard.writeText('CUIDA30')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section aria-labelledby="rede" className="flex flex-col gap-3">
      <div>
        <h2 id="rede" className="text-lg font-bold">
          Rede Parceira &amp; Economia
        </h2>
        <p className="text-sm text-muted-foreground">Descontos diretos apresentando o código no balcão.</p>
      </div>

      <Card>
        <div className="flex items-center justify-between">
          <Badge tone="accent">30% OFF</Badge>
          <span className="flex items-center gap-1 text-xs font-semibold text-success">
            <Store className="size-4" aria-hidden="true" />
            Mais de 2.400 lojas
          </span>
        </div>
        <p className="mt-3 font-heading text-xl font-bold">Farmácia Vida Mais</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Válido em analgésicos, anti-inflamatórios, curativos e pomadas musculares.
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-primary-50 p-3">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">Cupom ativo</p>
            <p className="font-mono text-xl font-bold tracking-widest text-primary-dark">CUIDA30</p>
          </div>
          <button
            type="button"
            onClick={copyCoupon}
            className="flex min-h-11 items-center gap-1.5 rounded-xl bg-primary-100 px-4 text-sm font-bold text-primary-dark transition-colors hover:bg-card"
          >
            {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            <span aria-live="polite">{copied ? 'Copiado' : 'Copiar'}</span>
          </button>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <Badge tone="solid-success">Preço Social</Badge>
          <span className="flex items-center gap-1 text-xs font-semibold text-primary">
            <FlaskConical className="size-4" aria-hidden="true" />
            80+ Unidades
          </span>
        </div>
        <p className="mt-3 font-heading text-xl font-bold">Lab Saúde Já</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Hemograma completo (R$ 18,90), Raio-X e check-up metabólico negociados para autônomos.
        </p>
        <button
          type="button"
          className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-50 font-bold text-primary transition-colors hover:bg-primary-100"
        >
          <FileText className="size-4" aria-hidden="true" />
          Ver Tabela de Exames
        </button>
      </Card>
    </section>
  )
}
