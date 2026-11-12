import { outletsContent } from '@/lib/content/outlets'
import { siteContent } from '@/lib/content/site'

export function buildStoreStructuredData(siteUrl: URL): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: siteContent.name,
    description: siteContent.description,
    url: siteUrl.toString(),
    logo: new URL('/icon.png', siteUrl).toString(),
    foundingDate: String(siteContent.founded),
    slogan: siteContent.tagline,
    telephone: `+88${siteContent.contact.phone}`,
    email: siteContent.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House 16, Road 13, Block G, Niketon',
      addressLocality: 'Gulshan 1, Dhaka',
      postalCode: '1212',
      addressCountry: 'BD',
    },
    areaServed: outletsContent.cities.map((city) => city.city),
    sameAs: siteContent.social.map((link) => link.href),
  }
}
