import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import './globals.css'
import Header from '@/components/block/header'
import { env } from '@/env.mjs'
import { Footer } from '@/components/block/footer'
import Head from 'next/head'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: `${env.NEXT_PUBLIC_BRAND_SHORT} - ${env.NEXT_PUBLIC_BRAND_SLOGAN}`,
  description:
    'Tra cứu VBPL về giao thông đường bộ (GTĐB): Nghị định 168/2024, Luật Trật tự, an toàn GTĐB 2024...; biển báo giao thông, vạch kẻ đường (theo QCVN 41:2019/BGTVT), thuật ngữ GTĐB...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <link rel="preload" as="image" href="logo-landscape.svg" />
      </Head>
      <body
        className={cn(
          'flex flex-col min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Analytics />
        <SpeedInsights />
        <div
          style={{
            height: '72px', // Use css variable will cause a delay because the css need time to load
            minHeight: '72px',
          }}
        >
          {/* <Header /> */}
        </div>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
