const MAIN_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
  { href: '#resume', label: 'Resume' },
];

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/sarah-n-phillips/',
    iconClass: 'fab fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/snphillips',
    iconClass: 'fab fa-github',
    label: 'GitHub',
  },
];

export default function Navigation() {
  return (
    <ul className="navbar-list">
      {MAIN_LINKS.map(({ href, label }) => (
        <li className="nav-list-item" key={href}>
          <a href={href} className="nav-list-item-link">
            {label}
          </a>
        </li>
      ))}

      {SOCIAL_LINKS.map(({ href, iconClass, label }) => (
        <li className="nav-list-item" key={href}>
          <a href={href} className="nav-list-item-link" aria-label={label}>
            <i className={iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
}
