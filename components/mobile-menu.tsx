'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'

import { siteContent } from '@/lib/content/site'
import { buildMessengerHref } from '@/lib/messenger-href'

import { SlideArrowLink } from '@/components/slide-arrow-link'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleToggle = () => setIsOpen((open) => !open)
  const handleClose = () => setIsOpen(false)

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="relative grid size-12 place-items-center rounded-full border-2 border-stroke-weak bg-background transition-colors hover:bg-fill"
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {isOpen
        ? createPortal(
            <div
              id={panelId}
              className="fixed inset-0 z-40 flex flex-col bg-background px-4 pt-28 pb-8 sm:px-6 lg:hidden"
            >
              <nav aria-label="Mobile" className="animate-fade-up motion-reduce:animate-none">
                <ul className="flex flex-col border-t border-stroke-weak">
                  {siteContent.navigation.map((link) => (
                    <li key={link.id} className="border-b border-stroke-weak">
                      <Link
                        href={link.href}
                        scroll={false}
                        onClick={handleClose}
                        className="flex min-h-16 items-center font-display text-h2"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <SlideArrowLink
                href={buildMessengerHref(siteContent.contact.messageGreeting)}
                onClick={handleClose}
                className="mt-auto w-full justify-between"
              >
                Order on Messenger
              </SlideArrowLink>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}
