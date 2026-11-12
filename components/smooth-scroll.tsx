'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export function SmoothScroll(): null {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -80 } })
    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
