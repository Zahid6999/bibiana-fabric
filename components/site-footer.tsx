'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { cn } from '@/lib/cn'
import { siteContent } from '@/lib/content/site'
import { buildExternalLinkProps } from '@/lib/external-link'
import { fitWordmark, startFooterMotion } from '@/lib/footer-wordmark-motion'

import logo from '@/public/images/bibiana-logo.jpg'

const UNDERLINE =
  "relative after:pointer-events-none after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-out-expo after:content-[''] hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 motion-reduce:after:transition-none"

export function SiteFooter() {
  const rootRef = useRef<HTMLElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const markRef = useRef<HTMLParagraphElement>(null)
  const wordRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const box = boxRef.current
    const mark = markRef.current
    const word = wordRef.current
    if (!root || !box || !mark || !word) return

    const targets = { root, box, mark, word }
    const stopFit = fitWordmark(targets)
    let stopMotion: (() => void) | null = null
    let isAlive = true

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        void startFooterMotion(targets).then((stop) => {
          if (isAlive) stopMotion = stop
          else stop()
        })
      },
      { rootMargin: '0px 0px 600px 0px' },
    )
    observer.observe(root)

    return () => {
      isAlive = false
      observer.disconnect()
      stopMotion?.()
      stopFit()
    }
  }, [])

  return (
    <footer
      ref={rootRef}
      className="relative isolate overflow-hidden bg-text-strong pt-20 pb-8 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-96 bg-[radial-gradient(60%_100%_at_50%_100%,rgb(148_138_125/0.35),transparent)]"
      />

      <div className="main-container">
        <div data-footer-rise className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="" className="size-10 rounded-full" />
              <span className="font-display text-h3">{siteContent.name}</span>
            </div>
            <p className="mt-4 max-w-prose text-small text-white/80">{siteContent.description}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
            <h2 className="text-small font-semibold">Explore</h2>
            <ul className="mt-2 grid">
              {siteContent.navigation.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    scroll={false}
                    className={cn(
                      'group/link inline-flex min-h-12 items-center text-white/80 hover:text-white',
                      UNDERLINE,
                    )}
                  >
                    <RollLabel label={link.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-small font-semibold">Follow</h2>
            <ul className="mt-2 grid">
              {siteContent.social.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    {...buildExternalLinkProps(link.href)}
                    className={cn(
                      'group/link inline-flex min-h-12 items-center text-white/80 hover:text-white',
                      UNDERLINE,
                    )}
                  >
                    <RollLabel label={link.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div ref={boxRef} className="mt-16 min-w-0">
          <p
            ref={markRef}
            aria-hidden="true"
            className="pointer-events-none text-center font-display text-[20vw] leading-none whitespace-nowrap text-white/90 select-none"
          >
            <span ref={wordRef} className="inline-block">
              {siteContent.name}
            </span>
          </p>
        </div>

        <div
          data-footer-rise
          className="mt-8 flex flex-col justify-between gap-2 border-t border-white/15 pt-6 text-tiny text-white/80 sm:flex-row"
        >
          <p>
            © {siteContent.founded}–{siteContent.copyrightYear} {siteContent.name}.{' '}
            {siteContent.tagline}.
          </p>
          <p>Design concept for {siteContent.name}, not the official website.</p>
        </div>
      </div>
    </footer>
  )
}

function RollLabel({ label }: { readonly label: string }) {
  return (
    <>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="block overflow-hidden leading-tight">
        {Array.from(label).map((char, index) => (
          <span
            key={`${label}-${index}`}
            className="inline-block whitespace-pre transition-transform duration-500 ease-out-expo [text-shadow:0_1.25em_currentColor] group-hover/link:-translate-y-full group-focus-visible/link:-translate-y-full motion-reduce:transition-none"
            style={{ transitionDelay: `${index * 18}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
    </>
  )
}
