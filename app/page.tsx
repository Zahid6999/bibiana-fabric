import { Collection } from '@/components/sections/collection'
import { Hero } from '@/components/sections/hero'
import { Ordering } from '@/components/sections/ordering'
import { Recognition } from '@/components/sections/recognition'
import { Services } from '@/components/sections/services'
import { Story } from '@/components/sections/story'
import { Visit } from '@/components/sections/visit'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Collection />
        <Services />
        <Ordering />
        <Story />
        <Recognition />
        <Visit />
      </main>
      <SiteFooter />
    </>
  )
}
