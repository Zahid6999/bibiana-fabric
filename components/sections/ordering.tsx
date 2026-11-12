import { orderingContent } from '@/lib/content/ordering'
import { siteContent } from '@/lib/content/site'
import { buildWhatsappHref } from '@/lib/whatsapp-href'

import { SlideArrowLink } from '@/components/slide-arrow-link'

export function Ordering() {
  return (
    <section aria-labelledby="ordering-title" className="py-20">
      <div className="main-container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="ordering-title" className="font-display text-h2">
              {orderingContent.title}
            </h2>
            <p className="mt-2 text-text-weak">
              Order from anywhere in Bangladesh, straight from your phone.
            </p>
            <SlideArrowLink
              href={buildWhatsappHref(
                siteContent.contact.whatsapp,
                siteContent.contact.whatsappGreeting,
              )}
              className="mt-8"
            >
              Message us on WhatsApp
            </SlideArrowLink>
          </div>

          <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {orderingContent.steps.map((step, index) => (
              <li key={step.id} className="reveal border-t-2 border-accent pt-6">
                <p className="font-display text-h2 text-accent">
                  <span className="sr-only">Step </span>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-h4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-small text-text-weak">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
