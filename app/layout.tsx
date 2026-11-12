import { Antonio, Hind_Siliguri, Plus_Jakarta_Sans } from 'next/font/google'

import { siteContent } from '@/lib/content/site'
import { resolveSiteUrl } from '@/lib/site-url'
import { buildStoreStructuredData } from '@/lib/structured-data'

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
  weight: '500',
})

const hindSiliguri = Hind_Siliguri({
  variable: '--font-hind-siliguri',
  subsets: ['bengali'],
  weight: ['400', '600'],
  preload: false,
})

const siteUrl = resolveSiteUrl()
const pageTitle = `${siteContent.name} — Hand embroidery and traditional craft since ${siteContent.founded}`

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: pageTitle,
  description: siteContent.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: pageTitle,
    description: siteContent.description,
    siteName: siteContent.name,
    url: '/',
    locale: 'en_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: siteContent.description,
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  const structuredData = JSON.stringify(buildStoreStructuredData(siteUrl)).replace(/</g, '\\u003c')

  return (
    <html lang="en" className={`${jakarta.variable} ${antonio.variable} ${hindSiliguri.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
