import { prefersReducedMotion } from '@/lib/prefers-reduced-motion'

type FooterMotionTargets = {
  readonly root: HTMLElement
  readonly box: HTMLElement
  readonly mark: HTMLElement
  readonly word: HTMLElement
}

export function fitWordmark({ box, mark, word }: FooterMotionTargets): () => void {
  let fittedFor = 0
  const fit = () => {
    const width = box.clientWidth
    if (!width || width === fittedFor) return
    fittedFor = width
    mark.style.fontSize = ''
    const size = Number.parseFloat(getComputedStyle(mark).fontSize)
    const ink = word.offsetWidth
    if (ink > 0) mark.style.fontSize = `${(size * width) / ink}px`
  }
  const observer = new ResizeObserver(() => {
    fittedFor = 0
    fit()
  })
  observer.observe(box)
  fit()
  void document.fonts.ready.then(() => {
    fittedFor = 0
    fit()
  })
  return () => {
    observer.disconnect()
    mark.style.fontSize = ''
  }
}

export async function startFooterMotion(targets: FooterMotionTargets): Promise<() => void> {
  if (prefersReducedMotion()) return () => {}

  const [{ default: gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/SplitText'),
  ])
  gsap.registerPlugin(ScrollTrigger, SplitText)

  const { root, box, word } = targets

  const entrance = gsap.fromTo(
    root.querySelectorAll('[data-footer-rise]'),
    { autoAlpha: 0, y: 48 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.18,
      scrollTrigger: { trigger: root, start: 'top 85%', toggleActions: 'play none none reverse' },
    },
  )

  const split = SplitText.create(word, { type: 'chars', mask: 'chars', aria: 'none' })
  const reveal = gsap.fromTo(
    split.chars,
    { yPercent: 105 },
    {
      yPercent: 0,
      duration: 1.6,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: box, start: 'top 95%', toggleActions: 'play none none reverse' },
    },
  )
  ScrollTrigger.refresh()

  return () => {
    entrance.scrollTrigger?.kill()
    entrance.kill()
    reveal.scrollTrigger?.kill()
    reveal.kill()
    split.revert()
  }
}
