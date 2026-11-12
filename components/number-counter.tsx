'use client'

import { useGSAP } from '@gsap/react'
import NumberFlow, { type Format } from '@number-flow/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState } from 'react'

import { prefersReducedMotion } from '@/lib/prefers-reduced-motion'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root || prefersReducedMotion()) return
      setDisplayValue(0)
      let startCall: gsap.core.Tween | null = null
      const trigger = ScrollTrigger.create({
        trigger: root,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          setIsAnimated(true)
          startCall = gsap.delayedCall(Math.max(delay, 0.05), () => setDisplayValue(value))
        },
      })
      return () => {
        startCall?.kill()
        trigger.kill()
      }
    },
    { scope: rootRef, dependencies: [value, delay] },
  )

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
