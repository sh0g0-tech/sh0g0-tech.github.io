import type { ContactLink } from '../types'

type ContactLinkProps = {
    id: string
    number: string
    label: string
    heading: string
    ContactLinks: ContactLink[]

}

function ContactList({ id, number, label, heading, ContactLinks }: ContactLinkProps) {
  return (
    <section id={id}>
      <p className="section-number">{number} — {label}</p>
      <h2>{heading}</h2>
      <ul>
        {ContactLinks.map((ContactLink) => (
          <li key={ContactLink.label}>
            <h3>{ContactLink.label}</h3>
            <p>{ContactLink.url}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactList