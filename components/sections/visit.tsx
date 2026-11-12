import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'

import { outletsContent } from '@/lib/content/outlets'
import { siteContent } from '@/lib/content/site'
import { buildPhoneHref } from '@/lib/phone-href'
import { buildWhatsappHref } from '@/lib/whatsapp-href'

import { SlideArrowLink } from '@/components/slide-arrow-link'

export function Visit() {
  const { contact, headOffice } = siteContent

  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-fill py-20">
      <div className="main-container">
        <h2 id="visit-title" className="font-display text-h2">
          {outletsContent.title}
        </h2>
        <p className="mt-2 max-w-prose text-text-weak">{outletsContent.intro}</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <ul className="grid content-start gap-4 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1">
            {outletsContent.cities.map((city) => (
              <li
                key={city.id}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl bg-white px-6 py-6 shadow-raised sm:flex-col sm:items-start lg:flex-row lg:items-center"
              >
                <h3 className="text-h3 font-semibold">{city.city}</h3>
                <span lang="bn" className="text-text-weak">
                  {city.bangla}
                </span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-white p-6 shadow-raised sm:p-8 lg:col-span-5">
            <h3 className="text-h4 font-semibold">Contact us</h3>

            <address className="mt-6 flex gap-4 not-italic">
              <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-text-weak" />
              <span>
                <span className="block font-semibold">{headOffice.label}</span>
                {headOffice.lines.map((line) => (
                  <span key={line} className="block text-text-weak">
                    {line}
                  </span>
                ))}
              </span>
            </address>

            <ul className="mt-4 border-t border-stroke-weak pt-2">
              <li className="flex items-center gap-4">
                <Phone aria-hidden="true" className="size-5 shrink-0 text-text-weak" />
                <Link
                  href={buildPhoneHref(contact.phone)}
                  className="group link-tertiary font-normal"
                >
                  <span className="underline-slide">{contact.phoneDisplay}</span>
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle aria-hidden="true" className="size-5 shrink-0 text-text-weak" />
                <Link
                  href={buildWhatsappHref(contact.whatsapp, contact.whatsappGreeting)}
                  className="group link-tertiary font-normal"
                >
                  <span className="underline-slide">WhatsApp {contact.whatsappDisplay}</span>
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <Mail aria-hidden="true" className="size-5 shrink-0 text-text-weak" />
                <Link
                  href={`mailto:${contact.email}`}
                  className="group link-tertiary font-normal break-all"
                >
                  <span className="underline-slide">{contact.email}</span>
                </Link>
              </li>
            </ul>

            <SlideArrowLink
              href={buildWhatsappHref(contact.whatsapp, contact.whatsappGreeting)}
              className="mt-6 w-full justify-between"
            >
              Order on WhatsApp
            </SlideArrowLink>
          </div>
        </div>
      </div>
    </section>
  )
}
