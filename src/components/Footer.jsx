import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-ink text-bone/50 section-pad pb-12">
      <div className="mx-auto flex max-w-editorial flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.2em] sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  )
}
