import { CircleCheck, Clock, ShieldCheck, Video } from 'lucide-react'
import Image from 'next/image'

export function SaudeHero() {
  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary uppercase">
        <ShieldCheck className="size-4" aria-hidden="true" />
        Cuidado Integrado
      </p>
      <h2 className="mt-1 font-heading text-3xl font-extrabold tracking-tight">Saúde &amp; Cuidados 24h</h2>
      <p className="mt-1 text-base text-muted-foreground">
        Telemedicina sem fila e descontos de até 30% em parceiros.
      </p>
    </section>
  )
}

export function TelemedicineCard() {
  return (
    <section
      aria-labelledby="plantao"
      className="overflow-hidden rounded-2xl border border-primary-100 bg-primary-50 shadow-card"
    >
      <div className="flex items-center justify-between gap-2 bg-primary px-4 py-2.5 text-white">
        <p id="plantao" className="flex items-center gap-2 text-sm font-bold">
          <span className="size-2.5 rounded-full bg-success-50" aria-hidden="true" />
          Plantão Clínico Geral Ativo
        </p>
        <span className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-bold">
          <Clock className="size-3.5" aria-hidden="true" />8 min de espera
        </span>
      </div>
      <div className="p-4">
        <div className="flex gap-3">
          <Image
            src="/images/doctor-tele.png"
            alt="Médica de plantão em teleconsulta"
            width={64}
            height={64}
            className="size-16 shrink-0 rounded-xl object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-primary">Sem agendamento prévio</p>
            <p className="font-heading text-xl font-bold leading-tight">Falar com Médico Agora</p>
            <p className="text-sm text-muted-foreground">
              Atendimento por vídeo no celular para você não parar o seu dia.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="mt-4 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-accent text-lg font-bold text-foreground shadow-raised transition-opacity hover:opacity-90"
        >
          <Video className="size-5" aria-hidden="true" />
          Iniciar Teleconsulta Imediata
        </button>
        <ul className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          {['Receita Digital', 'Atestado Válido', '100% Coberto'].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CircleCheck className="size-4 shrink-0 text-success" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
