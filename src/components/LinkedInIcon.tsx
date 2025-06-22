import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  return (
    <div className="social-icon">
      <a href="https://linkedin.com/in/sarah-n-phillips/" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}
