'use client'

import NumberFlow, { type Format } from '@number-flow/react'
import { useEffect, useRef, useState } from 'react'

import { prefersReducedMotion } from '@/lib/prefers-reduced-motion'

type NumberCounterProps = {
  readonly value: number
  readonly format?: Format
  readonly delay?: number
  readonly className?: string
}

const DURATION_MS = 1800

export function NumberCounter({ value, format, delay = 0, className }: NumberCounterProps) {
  const rootRef = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(value)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return
    setDisplayValue(0)
    let timeout = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        setIsAnimated(true)
        timeout = window.setTimeout(() => setDisplayValue(value), Math.max(delay * 1000, 50))
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(root)
    return () => {
      observer.disconnect()
      window.clearTimeout(timeout)
    }
  }, [value, delay])

  return (
    <span ref={rootRef} className={className}>
      <NumberFlow
        value={displayValue}
        animated={isAnimated}
        format={{ useGrouping: true, ...format }}
        trend={0}
        transformTiming={{ duration: DURATION_MS, easing: 'ease-out' }}
        spinTiming={{ duration: DURATION_MS, easing: 'ease-out' }}
        opacityTiming={{ duration: 800, easing: 'ease-out' }}
      />
    </span>
  )
}
