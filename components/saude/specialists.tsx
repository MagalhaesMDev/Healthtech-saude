'use client'

import { CalendarCheck, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Card } from '@/components/kit'
import { cn } from '@/lib/utils'

const doctors = [
  {
    id: 'marcelo',
    name: 'Dr. Marcelo Ramos',
    specialty: 'Clínica Geral & Saúde Preventiva',
    availability: 'Disponível hoje',
    rating: '4.9',
    photo: '/images/dr-marcelo.png',
    slots: ['14:20', '15:00', '16:40', '18:10'],
  },
  {
    id: 'beatriz',
    name: 'Dra. Beatriz Lima',
    specialty: 'Medicina da Família & Ergonomia',
    availability: 'Disponível amanhã',
    rating: '5.0',
    photo: '/images/dra-beatriz.png',
    slots: ['08:30', '10:15', '11:00', '14:00'],
  },
]

export function Specialists() {
  const [selected, setSelected] = useState<{ doctor: string; slot: string } | null>(null)

  return (
    <section aria-labelledby="especialistas">
      <div className="mb-3 flex items-center justify-between">
        <h2 id="especialistas" className="text-lg font-bold">
          Consultas com Especialistas
        </h2>
        <span className="text-sm font-semibold text-primary">Com hora marcada</span>
      </div>
      <ul className="flex flex-col gap-3">
        {doctors.map((d) => (
          <li key={d.id}>
            <Card>
              <div className="flex gap-3">
                <Image
                  src={d.photo}
                  alt={d.name}
                  width={56}
                  height={56}
                  className="size-14 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-heading text-lg font-bold leading-tight">{d.name}</p>
                    <span className="flex items-center gap-0.5 text-sm font-bold text-warning">
                      <Star className="size-4 fill-accent text-accent" aria-hidden="true" />
                      <span className="sr-only">Nota</span>
                      {d.rating}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{d.specialty}</p>
                  <p className="flex items-center gap-1 text-xs font-semibold text-success">
                    <CalendarCheck className="size-3.5" aria-hidden="true" />
                    {d.availability}
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2" role="group" aria-label={`Horários de ${d.name}`}>
                {d.slots.map((slot) => {
                  const active = selected?.doctor === d.id && selected.slot === slot
                  return (
                    <button
                      key={slot}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelected(active ? null : { doctor: d.id, slot })}
                      className={cn(
                        'min-h-11 rounded-xl text-sm font-semibold transition-colors',
                        active ? 'bg-primary text-white' : 'bg-primary-50 text-foreground hover:bg-primary-100',
                      )}
                    >
                      {slot}
                    </button>
                  )
                })}
              </div>
              {selected?.doctor === d.id && (
                <button
                  type="button"
                  className="mt-3 min-h-12 w-full rounded-2xl bg-primary font-bold text-white transition-colors hover:bg-primary-dark"
                >
                  Confirmar consulta às {selected.slot}
                </button>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
