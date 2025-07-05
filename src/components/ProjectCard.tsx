import ProjectObject from '../interfaces.js';
import GithubIcon from './GithubIcon';

type Props = {
  project: ProjectObject;
  projectIndex: number;
};

export default function ProjectCard({ project, projectIndex }: Props) {
  const imageSrc = `/assets/images-webp/${project.imageName[0]}`;

  const techUsedList = project.techUsed.map((techItem, idx) => (
    <li key={idx}>+ {techItem}</li>
  ));

  return (
    <div className="card">
      <a
        href={`#project-${projectIndex}`}
        style={{ backgroundColor: 'transparent' }}
      >
        <img
          className="card-image"
          src={imageSrc}
          alt={project.imageName[0]}
          width="auto"
          height="auto"
        />
      </a>

      <div className="card-body">
        <a href={`#project-${projectIndex}`}>
          <h3 className="card-heading">{project.title}</h3>
        </a>

        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: project.briefStatement }}
        />

        <ul className="list-tech-used">{techUsedList}</ul>

        <a href={`#project-${projectIndex}`}>
          <div className="button-dark">learn more</div>
        </a>
        <a href={project.url}>
          <div className="button-dark">visit site</div>
        </a>

        <div className="github-logo-icon">
          <GithubIcon url={project.githubUrl} projectTitle={project.title} />
        </div>
      </div>
    </div>
  );
}
