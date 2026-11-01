import type { NavItem } from '../types'

type NavProps = {
  items: NavItem[]
}

function Nav({ items }: NavProps) {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav