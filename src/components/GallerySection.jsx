import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Reusable editorial gallery. `columns` controls the desktop grid (2 or 3).
// `dark` flips the section to the ink background for contrast between blocks.
export default function GallerySection({ id, eyebrow, title, items, columns = 3, dark = false }) {
  const gridCols = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section
      className={`section-pad py-24 sm:py-32 ${dark ? 'bg-ink text-bone' : 'bg-bone text-ink'}`}
    >
      <div className="mx-auto max-w-editorial">
        <div className={dark ? '[&_.rule]:bg-white/15 [&_.eyebrow]:text-bone/60' : ''}>
          <SectionHeading id={id} eyebrow={eyebrow} title={title} />
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-6 sm:gap-8 ${gridCols}`}>
          {items.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.08}>
              <figure className="group">
                <div className="relative overflow-hidden bg-stone/10">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                {item.caption && (
                  <figcaption
                    className={`mt-3 text-[11px] uppercase tracking-[0.18em] ${
                      dark ? 'text-bone/60' : 'text-stone'
                    }`}
                  >
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
