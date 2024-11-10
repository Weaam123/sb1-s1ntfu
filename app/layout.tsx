import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Providers } from '@/components/providers'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Althahab™ - Tokenized Gold Trading Platform',
  description: 'Premium gold bullion trading platform on HoloceneChain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}