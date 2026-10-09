import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Nunito_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'Saúde Primeiro — Cuidado acessível para quem vive no corre',
  description:
    'Telemedicina sem fila, seguro de diárias, cashback em farmácias e prontuário protegido para entregadores e trabalhadores autônomos.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#f5f9fc',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
