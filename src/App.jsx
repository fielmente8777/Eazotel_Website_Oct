import { Header, Sprites } from './components/Header.jsx'
import { Hero, Trust, Flow } from './components/Hero.jsx'
import { Journey, Modules } from './components/Platform.jsx'
import { ServicesSection, Results, Who, Pricing, Partners, ReviewsSection, Faq, Cta, Footer } from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <Sprites />
      <Header />
      <main id="top">
        <Hero />
        <Trust />
        <Flow />
        <Journey />
        <Modules />
        <ServicesSection />
        <Results />
        <Who />
        <Pricing />
        <Partners />
        <ReviewsSection />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
