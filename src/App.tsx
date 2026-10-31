import ItemList from './components/ItemList'
import { hobbies, places, recentlyWatched } from './data/profile'
import HeroSection from './components/HeroSection'
import { hero } from './data/profile'
import ContactList from './components/ContactList'
import { contactLinks } from './data/profile'

function App() {
  return (
    <div>
      <HeroSection hero={hero} />
      <ItemList heading="趣味" items={hobbies} />
      <ItemList heading="好きな場所" items={places} />
      <ItemList heading="最近見たドラマ" items={recentlyWatched} />
      <ContactList heading="連絡先" ContactLinks={contactLinks} />
    </div>
  )
}

export default App 

