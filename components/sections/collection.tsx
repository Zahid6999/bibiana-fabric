import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { collectionContent } from '@/lib/content/collection'
import { siteContent } from '@/lib/content/site'
import { buildMessengerHref } from '@/lib/messenger-href'

import { SlideArrowLink } from '@/components/slide-arrow-link'

export function Collection() {
  return (
    <section id="collection" aria-labelledby="collection-title" className="py-20">
      <div className="main-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 id="collection-title" className="font-display text-h2">
              {collectionContent.title}
            </h2>
            <p className="mt-2 max-w-prose text-text-weak">{collectionContent.intro}</p>
          </div>
          <SlideArrowLink
            href={siteContent.social[0].href}
            variant="secondary"
            className="shrink-0"
          >
            See more on Facebook
          </SlideArrowLink>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collectionContent.pieces.map((piece, index) => (
            <li key={piece.id} className="reveal">
              <Link
                href={buildMessengerHref(
                  `Hello Bibiana, is the ${piece.name.toLowerCase()} available?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-fill">
                  <Image
                    src={piece.image}
                    alt={piece.alt}
                    placeholder="blur"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                    className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-2 py-1 text-tiny font-semibold backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute right-4 bottom-4 grid size-12 translate-y-2 place-items-center rounded-full bg-background text-text-strong opacity-0 shadow-raised transition-[opacity,translate] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                  >
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
                <h3 className="mt-4 text-h4 font-semibold">{piece.name}</h3>
                <p className="mt-1 text-small text-text-weak">{piece.detail}</p>
                <p className="mt-2 text-small font-semibold">
                  <span className="underline-slide">Ask about this piece</span>
                  <span className="sr-only"> on Messenger</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
