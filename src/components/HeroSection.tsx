import type { Hero } from '../types'

type HeroSectionProps = {
  hero: Hero
}

function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section>
      <h1>{hero.name}</h1>
      <p>{hero.introduction}</p>
    </section>
  )
}

export default HeroSection