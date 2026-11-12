import { servicesContent } from '@/lib/content/services'

export function Services() {
  return (
    <section id="what-we-make" aria-labelledby="services-title" className="bg-fill py-20">
      <div className="main-container">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 id="services-title" className="font-display text-h2 lg:col-span-5">
            {servicesContent.title}
          </h2>
          <p className="max-w-prose text-lead text-text-weak lg:col-span-6 lg:col-start-7">
            {servicesContent.intro}
          </p>
        </div>

        <ol className="mt-12 border-t border-stroke-strong/40">
          {servicesContent.items.map((service, index) => (
            <li
              key={service.id}
              className="group grid reveal gap-4 border-b border-stroke-strong/40 py-8 transition-colors duration-300 hover:bg-background/60 lg:grid-cols-12 lg:gap-8 lg:px-4"
            >
              <span aria-hidden="true" className="font-display text-h3 text-accent lg:col-span-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-h2 leading-tight lg:col-span-4">{service.title}</h3>
              <p className="max-w-prose text-text-weak lg:col-span-4">{service.body}</p>
              <ul className="flex flex-wrap content-start gap-2 lg:col-span-3">
                {service.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-full border border-stroke-strong/50 px-4 py-1 text-tiny"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
