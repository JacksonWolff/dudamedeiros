import Layout from './components/Layout'
import Hero from './components/Hero'
import Measurements from './components/Measurements'
import GallerySection from './components/GallerySection'
import Reel from './components/Reel'
import ContactSection from './components/ContactSection'
import { digitals, editorial, commercial } from './data/portfolio'

export default function App() {
  return (
    <Layout>
      <Hero />

      {/* Portfolio anchor begins at the digitals block */}
      <div id="portfolio" className="scroll-mt-0" />

      <GallerySection
        id="digitals"
        eyebrow={`${digitals.title} / ${digitals.subtitle}`}
        title="The Digitals"
        items={digitals.items}
        columns={3}
      />

      <GallerySection
        id="editorial"
        eyebrow={editorial.subtitle}
        title={editorial.title}
        items={editorial.items}
        columns={2}
        dark
      />

      <GallerySection
        id="commercial"
        eyebrow={commercial.subtitle}
        title={commercial.title}
        items={commercial.items}
        columns={2}
      />

      <Reel />

      <Measurements />

      <ContactSection />
    </Layout>
  )
}
