import ItemList from './components/ItemList'
import { hobbies, places, recentlyWatched } from './data/profile'
import HeroSection from './components/HeroSection'
import { hero } from './data/profile'
import ContactList from './components/ContactList'
import { contactLinks } from './data/profile'
import Nav from './components/Nav'
import { navItems } from './data/profile'

function App() {
  return (
    <>
      <header>
        <Nav items={navItems} />
      </header>
      <main>
        <HeroSection hero={hero} />
        <ItemList id="hobbies" heading="趣味" items={hobbies} />
        <ItemList id="recently-watched" heading="ハマっている物" items={recentlyWatched} />
        <ItemList id="places" heading="好きな場所" items={places} />
        <ContactList id="contact" heading="連絡先" ContactLinks={contactLinks} />
      </main>
    </>
  )
}

export default App 

