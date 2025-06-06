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
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto flex-column">
          {MAIN_LINKS.map(({ href, label }) => (
            <li className="nav-item" key={href}>
              <a href={href} className="nav-item-link">
                {label}
              </a>
            </li>
          ))}

          {SOCIAL_LINKS.map(({ href, iconClass, label }) => (
            <li className="nav-item" key={href}>
              <a href={href} className="nav-item-link" aria-label={label}>
                <i className={iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
