'use client'

import { CircleAlert, ScanHeart, SendHorizontal } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Badge } from '@/components/kit'

type Triage = { level: 'Urgente' | 'Moderado' | 'Leve'; specialty: string; advice: string }

const rules: { keywords: string[]; result: Triage }[] = [
  {
    keywords: ['falta de ar', 'peito', 'desmaio', 'acidente', 'sangra', 'súbita', 'subita'],
    result: { level: 'Urgente', specialty: 'Pronto-socorro / SAMU 192', advice: 'Procure atendimento presencial imediato.' },
  },
  {
    keywords: ['costas', 'lombar', 'coluna', 'ombro', 'joelho', 'punho'],
    result: {
      level: 'Moderado',
      specialty: 'Medicina da Família & Ergonomia',
      advice: 'Agende com a Dra. Beatriz Lima. Evite pilotar longos trechos até a consulta.',
    },
  },
  {
    keywords: ['febre', 'gripe', 'tosse', 'garganta', 'cabeça', 'cabeca', 'diarreia'],
    result: {
      level: 'Moderado',
      specialty: 'Clínica Geral (Teleconsulta 24h)',
      advice: 'Inicie uma teleconsulta imediata, sem agendamento.',
    },
  },
]

function triage(text: string): Triage {
  const normalized = text.toLowerCase()
  const match = rules.find((r) => r.keywords.some((k) => normalized.includes(k)))
  return (
    match?.result ?? {
      level: 'Leve',
      specialty: 'Clínica Geral & Saúde Preventiva',
      advice: 'Uma teleconsulta pode esclarecer suas dúvidas com segurança.',
    }
  )
}

export function SymptomGuide() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<Triage | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!text.trim()) return
    setResult(triage(text))
  }

  return (
    <section
      id="sintomas"
      aria-labelledby="guia"
      className="scroll-mt-24 rounded-2xl border border-primary-100 bg-primary-50 p-4 shadow-card"
    >
      <div className="flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
          <ScanHeart className="size-5" aria-hidden="true" />
        </span>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 id="guia" className="text-lg font-bold leading-tight">
              Guia de Sintomas Inteligente
            </h2>
            <Badge tone="neutral" className="text-primary">
              Apoio
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Descreva o que sente para entender a urgência e ir ao especialista certo.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2 rounded-2xl bg-card p-2 shadow-card">
        <label htmlFor="sintoma" className="sr-only">
          Descreva seus sintomas
        </label>
        <input
          id="sintoma"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ex: dor nas costas após pilotar 8h"
          className="min-h-12 min-w-0 flex-1 rounded-xl border border-border bg-primary-50/50 px-3 text-sm outline-none focus:border-primary focus:ring-3 focus:ring-primary-100"
        />
        <button
          type="submit"
          aria-label="Analisar sintomas"
          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-dark text-white transition-colors hover:bg-primary"
        >
          <SendHorizontal className="size-5" aria-hidden="true" />
        </button>
      </form>

      {result && (
        <div className="mt-3 rounded-xl bg-card p-3 text-sm" aria-live="polite">
          <div className="flex items-center gap-2">
            <Badge tone={result.level === 'Urgente' ? 'error' : result.level === 'Moderado' ? 'accent' : 'success'}>
              {result.level}
            </Badge>
            <p className="font-bold">{result.specialty}</p>
          </div>
          <p className="mt-1 text-muted-foreground">{result.advice}</p>
        </div>
      )}

      <div className="mt-3 flex gap-2 rounded-xl bg-primary-100/60 p-3 text-xs">
        <CircleAlert className="mt-0.5 size-4 shrink-0 text-error" aria-hidden="true" />
        <div>
          <p className="font-bold text-primary-dark">Importante: Esta ferramenta não fornece diagnósticos</p>
          <p className="text-muted-foreground">
            Apenas orienta triagem para atendimento médico. Em caso de dor no peito súbita, falta de ar grave ou
            acidentes, ligue imediatamente para o{' '}
            <a href="tel:192" className="font-bold text-error">
              SAMU 192
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
