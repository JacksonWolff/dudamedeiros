// ─────────────────────────────────────────────────────────────────────────────
//  PORTFOLIO CONFIG — single source of truth.
//  Top of the file: language-independent facts (images, file IDs, links).
//  Bottom of the file: per-language strings under `strings.en` / `strings.pt`.
//  Components read translations through the `useLanguage()` hook.
// ─────────────────────────────────────────────────────────────────────────────

// Image imports — Vite hashes the filename on every build, so updates always
// bust the browser cache without any manual versioning.
import heroImg from '../assets/images/hero.jpg'
import digitalFrontImg from '../assets/images/digital-front.jpg'
import digitalProfileImg from '../assets/images/digital-profile.jpg'
import digitalRelaxedImg from '../assets/images/digital-relaxed.jpg'
import runwayImg from '../assets/images/runway.jpg'
import editorialDetailImg from '../assets/images/editorial-detail.jpg'
import commercialFashionImg from '../assets/images/commercial-fashion.jpg'
import ecommerceImg from '../assets/images/ecommerce.jpg'

export const profile = {
  // Name is rendered the same in both languages
  name: 'Duda Medeiros',
}

export const contact = {
  // Replace with real links when ready. The site works with these placeholders.
  whatsapp: 'https://wa.me/5547997932865',
  email: 'dudynhabmedeiros@gmail.com',
  instagram: 'https://instagram.com/dudabmedeiros',
}

// Hero image — alt text comes from the active language strings.
export const hero = {
  src: heroImg,
}

// Measurement rows. Values that are numeric/universal stay here; values that
// translate (eye colour, hair colour) are looked up by key from strings.
export const measurements = [
  { key: 'height', value: '1.76 m' },
  { key: 'bust', value: '83 cm' },
  { key: 'waist', value: '60 cm' },
  { key: 'hips', value: '89 cm' },
  { key: 'size', value: '36' },
  { key: 'shoes', value: '38' },
  { key: 'eyes' },
  { key: 'hair' },
]

// Galleries: each item carries its image src and a stable key used to look up
// `caption` and `alt` text in the active language.
export const galleries = {
  digitals: {
    items: [
      { key: 'digitalFront', src: digitalFrontImg },
      { key: 'digitalProfile', src: digitalProfileImg },
      { key: 'digitalRelaxed', src: digitalRelaxedImg },
    ],
  },
  editorial: {
    items: [
      { key: 'runway', src: runwayImg },
      { key: 'editorialDetail', src: editorialDetailImg },
    ],
  },
  commercial: {
    items: [
      { key: 'commercialFashion', src: commercialFashionImg },
      { key: 'ecommerce', src: ecommerceImg },
    ],
  },
}

// Video reel.
// Drive embeds require "Anyone with the link → Viewer" on the file.
// For self-hosted MP4s, use `{ type: 'file', src: 'videos/reel-01.mp4', key: 'reel1' }`.
export const reel = {
  items: [
    { type: 'drive', id: '1ugP1ifPfj9qt5Ge9VGfvj8KNb8XdDz5R', key: 'reel1' },
    { type: 'drive', id: '1QEOuVZ8Pz9ePfLRyVc8i1bMdVXisVgfl', key: 'reel2' },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
//  Per-language strings.
// ─────────────────────────────────────────────────────────────────────────────

export const strings = {
  en: {
    code: 'en',
    label: 'EN',
    htmlLang: 'en',
    role: 'Model Portfolio',
    location: 'Balneário Camboriú — SC, Brazil',
    availability: 'Available Globally',

    nav: {
      portfolio: 'Portfolio',
      profile: 'Profile',
      reel: 'Reel',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
    },

    hero: {
      alt: 'Duda Medeiros in black tailoring and dark sunglasses, seated — cover editorial',
      ctaPortfolio: 'View Portfolio',
      ctaBook: 'Book via WhatsApp',
    },

    waMessage: "Hi Duda — I'd like to discuss a booking.",

    sections: {
      digitals: { eyebrow: 'Polaroids', title: 'The Digitals' },
      editorial: { eyebrow: 'Editorial & Runway', title: 'Editorial & Runway' },
      commercial: { eyebrow: 'Highlights', title: 'Commercial & High Fashion' },
      reel: { eyebrow: 'Reel', title: 'In Motion' },
      measurements: {
        eyebrow: 'Profile & Measurements',
        title: 'The Card',
        locationLabel: 'Location',
        statusLabel: 'Status',
      },
      contact: {
        eyebrow: 'Contact & Bookings',
        titleA: "Let's work",
        titleB: 'together.',
        whatsapp: 'WhatsApp Direct',
        email: 'Email',
        instagram: 'Instagram',
      },
    },

    measurementLabels: {
      height: 'Height',
      bust: 'Bust',
      waist: 'Waist',
      hips: 'Hips',
      size: 'Size',
      shoes: 'Shoes',
      eyes: 'Eyes',
      hair: 'Hair',
    },

    measurementValues: {
      eyes: 'Brown',
      hair: 'Dark Brown',
    },

    captions: {
      digitalFront: 'Full Body — Front',
      digitalProfile: 'Full Body — Profile',
      digitalRelaxed: 'Full Body — Relaxed',
      runway: 'Bridal — Runway',
      editorialDetail: 'Veil Detail',
      commercialFashion: 'Beauty — Jacket & Tie',
      ecommerce: 'E-commerce — Bag & White Boots',
    },

    alts: {
      digitalFront: 'Full body, front — digital',
      digitalProfile: 'Full body, profile — digital',
      digitalRelaxed: 'Full body, relaxed — digital',
      runway: 'Bridal gown on the runway, full body',
      editorialDetail: 'Close detail of veil, backstage',
      commercialFashion: 'Beauty close-up with jacket and tie',
      ecommerce: 'E-commerce pose with bag and white boots',
    },

    reelTitles: { reel1: 'Reel 01', reel2: 'Reel 02' },

    about: [
      'Duda Medeiros is a model based in Balneário Camboriú — SC, Brazil.',
      'Available globally for editorial, runway and commercial bookings.',
    ],
  },

  pt: {
    code: 'pt',
    label: 'PT',
    htmlLang: 'pt-BR',
    role: 'Portfólio de Modelo',
    location: 'Balneário Camboriú — SC, Brasil',
    availability: 'Disponível Globalmente',

    nav: {
      portfolio: 'Portfólio',
      profile: 'Perfil',
      reel: 'Reel',
      contact: 'Contato',
      menu: 'Menu',
      close: 'Fechar',
    },

    hero: {
      alt: 'Duda Medeiros com alfaiataria preta e óculos escuros, sentada — capa editorial',
      ctaPortfolio: 'Ver Portfólio',
      ctaBook: 'Agendar pelo WhatsApp',
    },

    waMessage: 'Olá Duda! Gostaria de conversar sobre um trabalho.',

    sections: {
      digitals: { eyebrow: 'Polaroids', title: 'Polaroids' },
      editorial: { eyebrow: 'Alta-Costura & Passarela', title: 'Editorial & Passarela' },
      commercial: { eyebrow: 'Destaques', title: 'Comercial & Alta-Moda' },
      reel: { eyebrow: 'Reel', title: 'Em Movimento' },
      measurements: {
        eyebrow: 'Perfil & Medidas',
        title: 'O Card',
        locationLabel: 'Localização',
        statusLabel: 'Disponibilidade',
      },
      contact: {
        eyebrow: 'Contato & Agendamentos',
        titleA: 'Vamos trabalhar',
        titleB: 'juntos.',
        whatsapp: 'WhatsApp Direto',
        email: 'E-mail',
        instagram: 'Instagram',
      },
    },

    measurementLabels: {
      height: 'Altura',
      bust: 'Busto',
      waist: 'Cintura',
      hips: 'Quadril',
      size: 'Manequim',
      shoes: 'Sapatos',
      eyes: 'Olhos',
      hair: 'Cabelo',
    },

    measurementValues: {
      eyes: 'Castanhos',
      hair: 'Castanho Escuro',
    },

    captions: {
      digitalFront: 'Corpo Inteiro — Frente',
      digitalProfile: 'Corpo Inteiro — Perfil',
      digitalRelaxed: 'Corpo Inteiro — Relaxada',
      runway: 'Noiva — Passarela',
      editorialDetail: 'Detalhe do Véu',
      commercialFashion: 'Beleza — Jaqueta e Gravata',
      ecommerce: 'E-commerce — Bolsa e Bota Branca',
    },

    alts: {
      digitalFront: 'Corpo inteiro, de frente — digital',
      digitalProfile: 'Corpo inteiro, perfil — digital',
      digitalRelaxed: 'Corpo inteiro, relaxada — digital',
      runway: 'Vestido de noiva na passarela, corpo inteiro',
      editorialDetail: 'Detalhe em close do véu, nos bastidores',
      commercialFashion: 'Close de beleza com jaqueta e gravata',
      ecommerce: 'Pose de e-commerce com bolsa e bota branca',
    },

    reelTitles: { reel1: 'Reel 01', reel2: 'Reel 02' },

    about: [
      'Duda Medeiros é modelo baseada em Balneário Camboriú — SC, Brasil.',
      'Disponível globalmente para trabalhos editoriais, de passarela e comerciais.',
    ],
  },
}
