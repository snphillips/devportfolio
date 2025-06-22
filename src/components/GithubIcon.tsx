import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  return (
    <div className="social-icon">
      <a href="https://github.com/snphillips" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
