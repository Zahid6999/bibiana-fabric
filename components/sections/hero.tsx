import { Sparkle } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/cn'
import { heroContent } from '@/lib/content/hero'
import { siteContent } from '@/lib/content/site'
import { buildWhatsappHref } from '@/lib/whatsapp-href'

import { NumberCounter } from '@/components/number-counter'
import { SlideArrowLink } from '@/components/slide-arrow-link'

const CARD_POSITIONS = [
  'top-12 right-6 lg:right-10',
  'bottom-10 left-6 [animation-delay:-3s] lg:left-10',
] as const

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-linear-to-b from-fill to-background pt-12 lg:pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[48rem] -translate-x-1/2 rounded-full bg-accent-glow/20 blur-3xl"
      />

      <div className="main-container">
        <div className="flex flex-col items-center text-center">
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-stroke-weak bg-white/70 px-4 py-2 text-tiny font-semibold text-accent backdrop-blur">
            <Sparkle aria-hidden="true" className="size-4 fill-current" />
            {heroContent.badge}
          </p>
          <p
            lang="bn"
            className="mt-4 animate-fade-up text-lead text-text-weak [animation-delay:60ms]"
          >
            {siteContent.taglineBangla}
          </p>
          <h1 id="hero-title" className="mt-4 font-display text-h1">
            <span className="block animate-fade-up [animation-delay:120ms]">
              {heroContent.titleLines[0]}
            </span>
            <span className="block animate-fade-up text-accent [animation-delay:220ms]">
              {heroContent.titleLines[1]}
            </span>
          </h1>
        </div>
      </div>

      <div className="relative z-10 mt-8 -rotate-1 bg-text-strong py-4 text-white">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {heroContent.marquee.map((word) => (
                <li
                  key={`${copy}-${word}`}
                  className="flex items-center gap-6 pr-6 font-display text-h3 whitespace-nowrap"
                >
                  {word}
                  <Sparkle
                    aria-hidden="true"
                    className="size-6 fill-accent-glow text-accent-glow"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="main-container">
        <div className="relative -mt-4 overflow-hidden rounded-b-[2rem] bg-linear-to-br from-accent-deep/85 via-accent/80 to-accent-glow/70 text-white">
          <div className="grid lg:min-h-[46rem] lg:grid-cols-12">
            <div className="relative z-10 flex flex-col justify-end p-6 pt-16 pb-20 sm:p-12 sm:pb-24 lg:col-span-5">
              <h2 className="font-display text-h2">{heroContent.panelTitle}</h2>
              <p className="mt-4 max-w-md text-white/90">{heroContent.panelBody}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <SlideArrowLink
                  href={buildWhatsappHref(
                    siteContent.contact.whatsapp,
                    siteContent.contact.whatsappGreeting,
                  )}
                  variant="light"
                >
                  Order on WhatsApp
                </SlideArrowLink>
                <SlideArrowLink href="#collection" scroll={false} variant="outline-light">
                  See the collection
                </SlideArrowLink>
              </div>
            </div>

            <div className="relative min-h-[36rem] lg:col-span-7">
              <Image
                src={heroContent.image}
                alt={heroContent.imageAlt}
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 55vw, 92vw"
                className="absolute inset-0 size-full mask-t-from-75% object-cover object-top lg:mask-t-from-100% lg:mask-l-from-70%"
              />
              {heroContent.floatingCards.map((card, index) => (
                <figure
                  key={card.id}
                  className={cn(
                    'absolute hidden w-36 animate-float rounded-xl border-2 border-white bg-white/15 p-1 shadow-overlay backdrop-blur-md motion-reduce:animate-none sm:block lg:w-40',
                    CARD_POSITIONS[index],
                  )}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    placeholder="blur"
                    sizes="10rem"
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                  />
                  <figcaption className="px-1 py-2 text-center text-tiny">
                    {card.label} <span className="font-semibold">{card.name}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <ul className="relative z-10 -mt-12 grid gap-4 px-4 pb-20 sm:px-8 md:grid-cols-3">
          {heroContent.features.map((feature) => (
            <li
              key={feature.id}
              className="grid grid-cols-[6.5rem_1fr] items-center gap-x-4 rounded-2xl border border-stroke-weak bg-white p-4 shadow-raised sm:p-6 md:block md:text-center"
            >
              <FeatureValue value={feature.value} suffix={feature.suffix} />
              <div>
                <h3 className="text-small font-semibold md:mt-2 md:text-h4">{feature.title}</h3>
                <p className="mt-1 text-tiny text-text-weak md:mt-2 md:text-small">
                  {feature.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function FeatureValue({ value, suffix }: { readonly value: number; readonly suffix: string }) {
  return (
    <p className="font-display text-h3 text-accent md:text-h2">
      <NumberCounter
        value={value}
        format={value >= 100_000 ? { notation: 'compact' } : undefined}
      />
      {suffix}
    </p>
  )
}
