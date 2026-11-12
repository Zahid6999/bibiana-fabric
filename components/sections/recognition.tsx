import Image from 'next/image'

import { recognitionContent } from '@/lib/content/recognition'

import patchworkStreet from '@/public/images/patchwork-jacket-street.jpg'

export function Recognition() {
  return (
    <section aria-labelledby="recognition-title" className="py-20">
      <div className="main-container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h2 id="recognition-title" className="font-display text-h2">
              {recognitionContent.title}
            </h2>

            <ol className="mt-8 border-t border-stroke-weak">
              {recognitionContent.shows.map((show) => (
                <li
                  key={show.id}
                  className="grid grid-cols-[4rem_1fr] gap-4 border-b border-stroke-weak py-4"
                >
                  <span className="font-semibold text-text-weak">
                    {show.year === null ? '—' : <time dateTime={show.year}>{show.year}</time>}
                  </span>
                  <span>{show.title}</span>
                </li>
              ))}
            </ol>

            <h3 className="mt-12 text-small font-semibold text-text-weak">
              {recognitionContent.pressTitle}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-display text-h3">
              {recognitionContent.press.map((outlet) => (
                <li key={outlet}>{outlet}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="aspect-[4/5] reveal overflow-hidden rounded-2xl bg-fill">
              <Image
                src={patchworkStreet}
                alt="A woman in sunglasses wearing a Bibiana patchwork check jacket with a white top and jeans"
                placeholder="blur"
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
