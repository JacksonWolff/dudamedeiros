// ─────────────────────────────────────────────────────────────────────────────
//  PORTFOLIO CONFIG — single source of truth.
//  Edit measurements, contact links and image paths here. Nothing else needs
//  to change to update the site's content.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Duda Medeiros',
  role: 'Model Portfolio',
  location: 'Balneário Camboriú — SC, Brazil',
  availability: 'Available Globally',
}

export const contact = {
  // Replace with the real links when ready. The site works with these placeholders.
  whatsapp: '[INSERT_WHATSAPP_LINK]', // e.g. 'https://wa.me/5547999999999'
  email: '[INSERT_EMAIL]', // e.g. 'booking@dudamedeiros.com.br'
  instagram: 'https://instagram.com/dudabmedeiros',
}

// Bilingual measurement card. Values come straight from the briefing — do not invent.
export const measurements = [
  { label: 'Height / Altura', value: '1.76 m' },
  { label: 'Bust / Busto', value: '83 cm' },
  { label: 'Waist / Cintura', value: '60 cm' },
  { label: 'Hips / Quadril', value: '89 cm' },
  { label: 'Size / Manequim', value: '36' },
  { label: 'Shoes / Sapatos', value: '38' },
  { label: 'Eyes / Olhos', value: 'Brown / Castanhos' },
  { label: 'Hair / Cabelo', value: 'Dark Brown / Castanho Escuro' },
]

// ── Imagery ──────────────────────────────────────────────────────────────────
// Paths are relative (no leading slash) so the site works at the custom domain
// root AND at the GitHub Pages subpath. Files live in /public/images.
export const hero = {
  src: 'images/hero.jpg',
  alt: 'Duda Medeiros in black tailoring and dark sunglasses, seated — cover editorial',
}

export const digitals = {
  title: 'Polaroids',
  subtitle: 'The Digitals',
  items: [
    { src: 'images/digital-front.jpg', alt: 'Full body, front — digital', caption: 'Full Body — Front / Corpo Inteiro de Frente' },
    { src: 'images/digital-profile.jpg', alt: 'Full body, profile — digital', caption: 'Full Body — Profile / Perfil de Corpo Inteiro' },
    { src: 'images/digital-relaxed.jpg', alt: 'Full body, relaxed — digital', caption: 'Full Body — Relaxed / Corpo Inteiro Relaxada' },
  ],
}

export const editorial = {
  title: 'Editorial & Runway',
  subtitle: 'Alta Costura & Passarela',
  items: [
    { src: 'images/runway.jpg', alt: 'Bridal gown on the runway, full body', caption: 'Bridal — Runway / Vestido de Noiva, Passarela' },
    { src: 'images/editorial-detail.jpg', alt: 'Close detail of veil, backstage', caption: 'Veil Detail / Close no Véu' },
  ],
}

export const commercial = {
  title: 'Commercial & High Fashion',
  subtitle: 'Highlights',
  items: [
    { src: 'images/commercial-fashion.jpg', alt: 'Beauty close-up with jacket and tie', caption: 'Beauty — Jacket & Tie / Jaqueta e Gravata' },
    { src: 'images/ecommerce.jpg', alt: 'E-commerce pose with bag and white boots', caption: 'E-commerce — Bag & White Boots / Bolsa e Bota Branca' },
  ],
}

// ── Video reel ───────────────────────────────────────────────────────────────
// These are Google Drive file IDs. For the embeds to display publicly, the files
// must be shared as "Anyone with the link → Viewer".
// To use self-hosted MP4s instead, set `type: 'file'` and `src: '/videos/your.mp4'`.
export const reel = {
  title: 'In Motion',
  subtitle: 'Reel',
  items: [
    { type: 'drive', id: '1ugP1ifPfj9qt5Ge9VGfvj8KNb8XdDz5R', title: 'Reel 01' },
    { type: 'drive', id: '1QEOuVZ8Pz9ePfLRyVc8i1bMdVXisVgfl', title: 'Reel 02' },
  ],
}

export const about = {
  // Kept intentionally minimal — only briefing-supported facts, no invented biography.
  heading: 'About',
  lines: [
    `${profile.name} is a model based in ${profile.location}.`,
    `${profile.availability} for editorial, runway and commercial bookings.`,
  ],
}
