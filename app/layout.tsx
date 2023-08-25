import { Header } from '@/src/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedro Lucas',
  description: 'Olá, este é meu portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={font.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
