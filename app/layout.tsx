import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './ThemeProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jayde Mitchell Tech',
  description: 'A portfolio of Jayde Mitchells work in Software Architecture and Engineering'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
