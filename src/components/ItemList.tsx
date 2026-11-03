import type { Item } from '../types'

type ItemListProps = {
  id: string
  number: string
  label: string
  heading: string
  items: Item[]
}

function ItemList({ id, number, label, heading, items }: ItemListProps) {
  return (
    <section id={id}>
      <p className="section-number">{number} — {label}</p>
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