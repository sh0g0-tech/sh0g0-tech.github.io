import type { Hero } from '../types'

type HeroSectionProps = {
  hero: Hero
}

function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="top">
      <h1>{hero.name}</h1>
      <p>{hero.introduction}</p>
      <div className="hero-actions">
        <a className="button primary" href="#hobbies">もっと見る</a>
        <a className="button" href="#contact">連絡先</a>
      </div>
    </section>
  )
}

export default HeroSection