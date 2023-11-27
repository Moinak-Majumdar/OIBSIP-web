import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moinak Majumdar | Oasis Infobyte',
  description: 'Oasis Infobyte web development internship level 2 task',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
