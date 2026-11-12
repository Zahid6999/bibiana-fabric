import Link from 'next/link'

import { cn } from '@/lib/cn'
import { buildExternalLinkProps } from '@/lib/external-link'

import type { ComponentProps } from 'react'

type SlideArrowLinkProps = Omit<ComponentProps<typeof Link>, 'children'> & {
  readonly children: string
  readonly variant?: keyof typeof VARIANTS
}

const VARIANTS = {
  primary: {
    button: 'bg-accent text-white shadow-raised hover:bg-accent-deep',
    badge: 'bg-white text-accent',
  },
  secondary: {
    button: 'border-2 border-text-strong text-text-strong hover:bg-fill',
    badge: 'bg-text-strong text-white',
  },
  light: {
    button: 'bg-white text-accent shadow-raised hover:bg-fill',
    badge: 'bg-accent text-white',
  },
  'outline-light': {
    button: 'border-2 border-white text-white hover:bg-white/10',
    badge: 'bg-white text-accent',
  },
} as const

const LABEL =
  'block text-small leading-6 font-semibold whitespace-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-focus-visible:translate-y-0'

const CHEVRON =
  'col-start-1 row-start-1 size-3.5 transition-transform duration-400 ease-in-out motion-reduce:transition-none'

export function SlideArrowLink({
  children,
  variant = 'primary',
  className,
  ...props
}: SlideArrowLinkProps) {
  const styles = VARIANTS[variant]
  const externalProps = typeof props.href === 'string' ? buildExternalLinkProps(props.href) : {}

  return (
    <Link
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-4 rounded-full py-2 pr-2 pl-6 transition-colors duration-300',
        styles.button,
        className,
      )}
      {...externalProps}
      {...props}
    >
      <span className="block h-6 overflow-hidden">
        <span className={LABEL}>{children}</span>
        <span className={LABEL} aria-hidden="true">
          {children}
        </span>
      </span>

      <span
        aria-hidden="true"
        className={cn('grid size-8 place-items-center overflow-hidden rounded-full', styles.badge)}
      >
        <Chevron
          className={cn(
            CHEVRON,
            'group-hover:translate-x-8 group-focus-visible:translate-x-8 motion-reduce:group-hover:translate-x-0',
          )}
        />
        <Chevron
          className={cn(
            CHEVRON,
            '-translate-x-8 group-hover:translate-x-0 group-focus-visible:translate-x-0 motion-reduce:hidden',
          )}
        />
      </span>
    </Link>
  )
}

function Chevron({ className }: { readonly className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}
