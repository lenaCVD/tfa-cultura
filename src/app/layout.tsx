import './globals.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'TFA Cultura Digital',
  description: 'Slop, bots i bombolles: viure a Internet en l\'era de la IA',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ca">
      <body>{children}</body>
    </html>
  )
}