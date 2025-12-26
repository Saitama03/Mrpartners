import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'MR Partners - Expertise Comptable',
  description: 'Cabinet d\'expertise comptable certifié ITAA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
    </html>
  )
}
