import Link from 'next/link'

import { siteContent } from '@/lib/content/site'
import { buildMessengerHref } from '@/lib/messenger-href'

export function FloatingMessenger() {
  return (
    <Link
      href={buildMessengerHref(siteContent.contact.messageGreeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Bibiana on Messenger"
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-messenger text-white shadow-overlay transition-transform duration-300 hover:-translate-y-0.5 sm:right-6 sm:bottom-6 lg:hidden"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="currentColor">
        <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.15.26.35.27.57l.05 1.78a.8.8 0 0 0 1.12.71l1.98-.87a.8.8 0 0 1 .53-.04c.91.25 1.88.38 2.91.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2Zm6 7.46-2.94 4.67a1.5 1.5 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.67a1.5 1.5 0 0 1 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63Z" />
      </svg>
    </Link>
  )
}
