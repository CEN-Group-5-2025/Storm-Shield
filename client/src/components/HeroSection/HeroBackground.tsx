import stormBackground from '../../assets/storm-background.jpeg'
import './hero-background.css'

export const HeroBackground = () => {
  return (
    <>
      <img
        src={stormBackground}
        className="hero-background-image"
        alt="Storm background"
      />
      <div className="hero-overlay"></div>
    </>
  )
}
