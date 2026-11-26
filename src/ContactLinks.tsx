type Contact = {
  label: string;
  detail: string;
  href: string;
  arrow: string;
};

const contacts: readonly Contact[] = [
  { label: "GitHub", detail: "@K4hn3r", href: "https://github.com/K4hn3r", arrow: "↗" },
  { label: "Email", detail: "kahner@kahner.dev", href: "mailto:kahner@kahner.dev", arrow: "→" },
];

function ContactLink({ label, detail, href, arrow }: Contact) {
  return (
    <a className="contact" href={href}>
      <span className="contact-label">{label}</span>
      <span className="contact-detail">{detail}</span>
      <span className="contact-arrow" aria-hidden="true">{arrow}</span>
    </a>
  );
}

export function ContactLinks() {
  return (
    <nav className="contacts" aria-label="Connect with Kahner">
      {contacts.map((contact) => <ContactLink key={contact.href} {...contact} />)}
    </nav>
  );
}
