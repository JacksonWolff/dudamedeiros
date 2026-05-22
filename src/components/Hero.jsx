import { motion } from 'framer-motion'
import { profile, hero, contact } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      <motion.img
        src={hero.src}
        alt={hero.alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Gradient scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

      <div className="relative z-10 flex h-full flex-col justify-end section-pad pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-editorial">
          <motion.p
            className="eyebrow text-bone/80"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {profile.role}
          </motion.p>

          <motion.h1
            className="mt-4 font-serif font-light uppercase leading-[0.92] text-bone text-[15vw] sm:text-[12vw] lg:text-[9.5rem] tracking-[0.02em]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.name}
          </motion.h1>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-bone/70 px-8 py-3 text-[12px] uppercase tracking-[0.25em] text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              View Portfolio
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-bone px-8 py-3 text-[12px] uppercase tracking-[0.25em] text-ink transition-opacity hover:opacity-80"
            >
              Book via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-bone/60">
        <span className="block h-10 w-px animate-pulse bg-bone/50" />
      </div>
    </section>
  )
}
