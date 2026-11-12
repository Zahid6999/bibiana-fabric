import Image from 'next/image'
import Link from 'next/link'

import { siteContent } from '@/lib/content/site'
import { buildWhatsappHref } from '@/lib/whatsapp-href'

import { MobileMenu } from '@/components/mobile-menu'
import { SlideArrowLink } from '@/components/slide-arrow-link'

import logo from '@/public/images/bibiana-logo.jpg'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stroke-weak bg-background/90 backdrop-blur-md">
      <div className="main-container">
        <div className="flex h-20 items-center justify-between gap-8">
          <Link
            href="#top"
            scroll={false}
            className="flex min-h-12 shrink-0 items-center gap-2"
            aria-label="Bibiana, back to top"
          >
            <Image src={logo} alt="" priority className="size-10 rounded-full" />
            <span className="font-display text-h3">Bibiana</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-small">
              {siteContent.navigation.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    scroll={false}
                    className="group inline-flex min-h-12 items-center text-text-weak transition-colors hover:text-text-strong"
                  >
                    <span className="underline-grow">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <SlideArrowLink
              href={buildWhatsappHref(
                siteContent.contact.whatsapp,
                siteContent.contact.whatsappGreeting,
              )}
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              Order on WhatsApp
            </SlideArrowLink>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
