import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  return (
    <div>
      <a
        href="https://linkedin.com/in/sarah-n-phillips/"
        aria-label="LinkedIn"
        className="social-icon"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          fixedWidth
          style={{
            fontSize: '24px', // immediate text metric
            width: '24px', // locks SVG width
            height: '24px', // locks SVG height
            verticalAlign: 'middle', // prevents baseline bounce
          }}
        />
      </a>
    </div>
  );
}
