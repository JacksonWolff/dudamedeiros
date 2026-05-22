import { measurements, profile, about } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Measurements() {
  return (
    <section className="bg-bone py-24 sm:py-32 section-pad">
      <div className="mx-auto max-w-editorial">
        <SectionHeading
          id="measurements"
          eyebrow="Profile & Measurements / Perfil & Medidas"
          title="The Card"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Bio / location */}
          <Reveal>
            <div className="max-w-sm">
              <p className="font-serif text-2xl font-light leading-snug">
                {about.lines[0]}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone">{about.lines[1]}</p>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="eyebrow w-28 shrink-0 pt-1">Location</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="eyebrow w-28 shrink-0 pt-1">Status</dt>
                  <dd>{profile.availability}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Measurement grid */}
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-2">
              {measurements.map((m) => (
                <div key={m.label} className="border-b border-r border-line p-5 sm:p-6">
                  <dt className="eyebrow">{m.label}</dt>
                  <dd className="mt-2 font-serif text-2xl font-light sm:text-3xl">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
