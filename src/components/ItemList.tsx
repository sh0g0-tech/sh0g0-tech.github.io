import type { Item } from '../types'

type ItemListProps = {
  id: string
  heading: string
  items: Item[]
}

function ItemList({ id, heading, items }: ItemListProps) {
  return (
    <section id={id}>
      <h2>{heading}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            {item.image && <img src={item.image} alt={item.title} />}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ItemList