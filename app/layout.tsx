import { Antonio, Hind_Siliguri, Plus_Jakarta_Sans } from 'next/font/google'

import { siteContent } from '@/lib/content/site'

import { SmoothScroll } from '@/components/smooth-scroll'

import type { Metadata } from 'next'

import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '600'],
})

const antonio = Antonio({
  variable: '--font-antonio',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const hindSiliguri = Hind_Siliguri({
  variable: '--font-hind-siliguri',
  subsets: ['bengali'],
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.liveUrl),
  title: `${siteContent.name} — Hand embroidery and traditional craft since ${siteContent.founded}`,
  description: siteContent.description,
  openGraph: {
    title: siteContent.name,
    description: siteContent.description,
    siteName: siteContent.name,
    locale: 'en_BD',
    type: 'website',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${antonio.variable} ${hindSiliguri.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
