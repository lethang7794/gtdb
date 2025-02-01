import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/components/block/footer'
import Header from '@/components/block/header'
import { Toaster } from '@/components/ui/toaster'
import { getMetadataBase } from '@/lib/get-metadata-base'
import { cn } from '@/lib/utils'
import { PreloadResources } from '@/app/preload-resources'
import { env, shouldEnableVercelAnalytics } from '@/env.mjs'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const rootPageTitle: string = [
  `${env.NEXT_PUBLIC_BRAND_SHORT}`,
  `${env.NEXT_PUBLIC_BRAND_SLOGAN}`,
].join(' - ')
const metadataBase: URL = getMetadataBase()

export const metadata: Metadata = {
  title: {
    template: `%s | ${rootPageTitle}`,
    default: rootPageTitle,
  },
  description:
    'Tra cứu VBPL về giao thông đường bộ (GTĐB): Nghị định 168/2024, Luật Trật tự, an toàn GTĐB 2024...; biển báo giao thông, vạch kẻ đường (theo QCVN 41:2019/BGTVT), thuật ngữ GTĐB...',
  metadataBase: metadataBase,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          // To prevent the flicking when scrolling too fast in vbpl, use body-bg-markdown for body, then bg-white for it's children
          'body-bg-markdown bg-background flex min-h-screen flex-col font-sans antialiased',
          fontSans.variable
        )}
      >
        <PreloadResources />
        {shouldEnableVercelAnalytics ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
        <div
          style={{
            height: '72px', // Use css variable will cause a delay because the css need time to load
            minHeight: '72px',
          }}
        >
          <Header />
        </div>
        <div className="grow bg-white">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
