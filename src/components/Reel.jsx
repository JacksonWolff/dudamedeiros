import { reel } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function ReelItem({ item }) {
  if (item.type === 'file') {
    return (
      <video
        src={item.src}
        controls
        playsInline
        className="aspect-[9/16] w-full bg-black object-cover"
      />
    )
  }
  // Google Drive embed (requires "Anyone with the link" sharing on the file).
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
      <iframe
        title={item.title}
        src={`https://drive.google.com/file/d/${item.id}/preview`}
        allow="autoplay"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

export default function Reel() {
  return (
    <section className="section-pad py-24 sm:py-32 bg-bone">
      <div className="mx-auto max-w-editorial">
        <SectionHeading id="reel" eyebrow={reel.subtitle} title={reel.title} />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:max-w-3xl lg:mx-auto">
          {reel.items.map((item, i) => (
            <Reveal key={item.id || item.src} delay={i * 0.08}>
              <ReelItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
