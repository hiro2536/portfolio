import type { Metadata, Viewport } from 'next'
import { Zen_Maru_Gothic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const zenMaruGothic = Zen_Maru_Gothic({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-maru"
});

export const metadata: Metadata = {
  title: 'ひろのポートフォリオ',
  description: 'ひろのポートフォリオサイト',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#B2DFFC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <body className={`${zenMaruGothic.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
