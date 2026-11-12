import Link from 'next/link'

import { siteContent } from '@/lib/content/site'
import { buildWhatsappHref } from '@/lib/whatsapp-href'

export function FloatingWhatsapp() {
  return (
    <Link
      href={buildWhatsappHref(siteContent.contact.whatsapp, siteContent.contact.whatsappGreeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-overlay transition-transform duration-300 hover:-translate-y-0.5 sm:right-6 sm:bottom-6 lg:hidden"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.79 14.06c-.24.68-1.41 1.3-1.95 1.35-.5.05-.97.23-3.26-.68-2.76-1.09-4.5-3.91-4.64-4.09-.13-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.99.95-2.26.24-.27.53-.34.71-.34h.51c.16 0 .38-.06.6.46.23.54.77 1.87.84 2.01.07.13.11.29.02.47-.09.18-.13.29-.27.45-.13.16-.28.35-.4.47-.13.13-.27.28-.12.55.16.27.69 1.14 1.48 1.84 1.02.91 1.88 1.19 2.15 1.33.27.13.42.11.58-.07.16-.18.67-.78.85-1.05.18-.27.36-.22.6-.13.25.09 1.57.74 1.84.88.27.13.45.2.51.31.07.11.07.64-.17 1.32Z" />
      </svg>
    </Link>
  )
}
