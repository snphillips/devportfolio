import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type Props = {
  url?: string;
  projectTitle?: string;
};

export default function GithubIcon({
  url = 'https://github.com/snphillips',
  projectTitle,
}: Props) {
  const label = projectTitle
    ? `GitHub repository for ${projectTitle}`
    : `Sarah N. Phillips' GitHub profile`;

  return (
    <a
      href={url}
      aria-label={label}
      className="social-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={faGithub}
        fixedWidth
        style={{
          fontSize: '24px', // immediate text metric
          width: '24px', // locks SVG width
          height: '24px', // locks SVG height
          verticalAlign: 'middle', // prevents baseline bounce
        }}
      />
    </a>
  );
}
