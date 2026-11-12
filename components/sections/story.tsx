import Image from 'next/image'

import { storyContent } from '@/lib/content/story'

export function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="bg-linear-to-br from-accent-deep to-text-strong py-20 text-white"
    >
      <div className="main-container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] reveal overflow-hidden rounded-2xl bg-white/10">
              <Image
                src={storyContent.image}
                alt={storyContent.imageAlt}
                placeholder="blur"
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="story-title" className="font-display text-h2">
              {storyContent.title}
            </h2>
            <div className="mt-6 max-w-prose space-y-4 text-white/80">
              {storyContent.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <figure className="mt-12 max-w-prose border-l-2 border-white/30 pl-6">
              <blockquote>
                <p lang="bn" className="text-h3 font-semibold">
                  {storyContent.quote.text}
                </p>
                <p className="mt-2 text-small text-white/80">{storyContent.quote.translation}</p>
              </blockquote>
              <figcaption className="mt-4 text-small">
                <span className="font-semibold">{storyContent.quote.name}</span>
                <span className="text-white/80">, {storyContent.quote.role}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
