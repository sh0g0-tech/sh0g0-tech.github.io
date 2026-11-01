import type { ContactLink } from '../types'

type ContactLinkProps = {
    id: string
    heading: string
    ContactLinks: ContactLink[]

}

function ContactList({ id, heading, ContactLinks }: ContactLinkProps) {
  return (
    <section id={id}>
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