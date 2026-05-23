import Layout from './components/Layout'
import Hero from './components/Hero'
import Measurements from './components/Measurements'
import GallerySection from './components/GallerySection'
import Reel from './components/Reel'
import ContactSection from './components/ContactSection'
import { galleries } from './data/portfolio'
import { useLanguage } from './context/LanguageContext'

function localizeItems(items, t) {
  return items.map((item) => ({
    src: item.src,
    caption: t.captions[item.key],
    alt: t.alts[item.key],
  }))
}

export default function App() {
  const { t } = useLanguage()
  return (
    <Layout>
      <Hero />

      {/* Portfolio anchor begins at the digitals block */}
      <div id="portfolio" className="scroll-mt-0" />

      <GallerySection
        id="digitals"
        eyebrow={t.sections.digitals.eyebrow}
        title={t.sections.digitals.title}
        items={localizeItems(galleries.digitals.items, t)}
        columns={3}
      />

      <GallerySection
        id="editorial"
        eyebrow={t.sections.editorial.eyebrow}
        title={t.sections.editorial.title}
        items={localizeItems(galleries.editorial.items, t)}
        columns={2}
        dark
      />

      <GallerySection
        id="commercial"
        eyebrow={t.sections.commercial.eyebrow}
        title={t.sections.commercial.title}
        items={localizeItems(galleries.commercial.items, t)}
        columns={2}
      />

      <Reel />

      <Measurements />

      <ContactSection />
    </Layout>
  )
}
