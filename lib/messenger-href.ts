import { siteContent } from '@/lib/content/site'

export function buildMessengerHref(message: string): string {
  return `https://m.me/${siteContent.contact.messengerPage}?text=${encodeURIComponent(message)}`
}
