import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jayde Tech',
  description: 'Jayde Tech - High-impact, cost-effective solutions from startup foundations to engineering software that scales for millions of users.',
  openGraph: {
    title: "Jayde Tech",
    description: "Jayde Tech - High-impact, cost-effective solutions from startup foundations to engineering software that scales for millions of users.",
    url: "https://jaydetech.com",
    siteName: "Jayde Tech",
    images: [
      {
        url: "https://s3.us-west-2.amazonaws.com/jaydemitchell.com/Jayde-Tech-Logo.png",
        width: 1200,
        height: 630,
        alt: "Jayde Tech Logo",
      },
    ],
    type: "website",
  },
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
