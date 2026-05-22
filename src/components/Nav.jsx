import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#measurements', label: 'Profile' },
  { href: '#reel', label: 'Reel' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-bone/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-editorial items-center justify-between section-pad py-5">
        <a
          href="#top"
          className={`font-serif text-xl tracking-wide transition-colors ${
            scrolled ? 'text-ink' : 'text-bone mix-blend-difference'
          }`}
        >
          {profile.name}
        </a>

        <ul
          className={`hidden items-center gap-10 md:flex text-[12px] uppercase tracking-[0.2em] transition-colors ${
            scrolled ? 'text-ink' : 'text-bone mix-blend-difference'
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="opacity-80 hover:opacity-100 transition-opacity">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden text-[12px] uppercase tracking-[0.2em] ${
            scrolled ? 'text-ink' : 'text-bone mix-blend-difference'
          }`}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bone border-b border-line">
          <ul className="flex flex-col section-pad py-4 text-sm uppercase tracking-[0.2em]">
            {links.map((l) => (
              <li key={l.href} className="py-3 border-b border-line/60 last:border-0">
                <a href={l.href} onClick={() => setOpen(false)} className="block">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
