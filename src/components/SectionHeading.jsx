import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, id }) {
  return (
    <Reveal>
      <div id={id} className="scroll-mt-24">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 font-serif text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <div className="mt-8 rule" />
      </div>
    </Reveal>
  )
}
