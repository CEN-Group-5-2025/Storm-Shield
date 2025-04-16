import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import './hero-section.css'

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <HeroBackground />
      <HeroContent />
    </section>
  )
}
