import LinkedinIcon from './LinkedInIcon';
import GithubIcon from './GithubIcon';

const MAIN_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
  { href: '#resume', label: 'Resume' },
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

      <li
        className="nav-list-item"
        key={'https://www.linkedin.com/in/sarah-n-phillips/'}
      >
        <LinkedinIcon />
      </li>

      <li className="nav-list-item" key={'https://github.com/snphillips'}>
        <GithubIcon />
      </li>
    </ul>
  );
}
