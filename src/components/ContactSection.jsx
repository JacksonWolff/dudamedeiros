import { contact, profile } from '../data/portfolio'
import Reveal from './Reveal'

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink text-bone section-pad py-28 sm:py-36">
      <div className="mx-auto max-w-editorial">
        <Reveal>
          <p className="eyebrow text-bone/50">Contact & Bookings</p>
          <h2 className="mt-4 font-serif text-5xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            Let&rsquo;s work
            <br />
            together.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-white/15 pt-12 md:grid-cols-[1fr_auto]">
          <Reveal>
            <div className="space-y-2">
              <p className="font-serif text-2xl">{profile.name}</p>
              <p className="text-sm text-bone/70">{profile.location}</p>
              <p className="text-sm text-bone/70">{profile.availability}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-bone px-10 py-4 text-[12px] uppercase tracking-[0.25em] text-ink transition-opacity hover:opacity-80"
              >
                WhatsApp Direct
              </a>
              <a
                href={contact.email.startsWith('http') ? contact.email : `mailto:${contact.email}`}
                className="inline-flex items-center justify-center border border-bone/40 px-10 py-4 text-[12px] uppercase tracking-[0.25em] text-bone transition-colors hover:bg-bone hover:text-ink"
              >
                Email
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-bone/40 px-10 py-4 text-[12px] uppercase tracking-[0.25em] text-bone transition-colors hover:bg-bone hover:text-ink"
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
