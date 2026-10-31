import type { Item } from '../types'

type ItemListProps = {
  heading: string
  items: Item[]
}

function ItemList({ heading, items }: ItemListProps) {
  return (
    <section>
      <h2>{heading}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ItemList