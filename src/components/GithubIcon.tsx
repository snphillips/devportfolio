import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type Props = {
  url?: string;
  projectTitle?: string;
};

export default function GithubIcon({
  url = 'https://github.com/snphillips',
  projectTitle = `Sarah's GitHub profile`,
}: Props) {
  return (
    <span className="social-icon">
      <a
        href={url}
        aria-label={`GitHub repository for ${projectTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </span>
  );
}
