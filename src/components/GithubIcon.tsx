import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type Props = {
  url?: string;
};

export default function GithubIcon({
  url = 'https://github.com/snphillips',
}: Props) {
  return (
    <span className="social-icon">
      <a
        href={url}
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </span>
  );
}
