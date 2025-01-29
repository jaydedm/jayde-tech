import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jayde Tech',
  description: 'Your technology partner with years of experience.',
  openGraph: {
    title: "Jayde Tech",
    description: "Your technology partner with years of experience.",
    url: "https://jaydetech.com",
    siteName: "Jayde Tech",
    // images: [
    //   {
    //     url: "https://jaydetech.com/your-thumbnail.jpg", // Ensure this is a valid image
    //     width: 1200,
    //     height: 630,
    //     alt: "Jayde Tech Logo",
    //   },
    // ],
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
