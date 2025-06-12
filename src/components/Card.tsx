import ProjectObject from '../interfaces.js';

type Props = {
  project: ProjectObject;
  projectIndex: number;
};

export default function Card({ project, projectIndex }: Props) {
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
          className="card-img-top"
          src={project.imageUrl[0]}
          alt={project.title}
          width="auto"
          height="auto"
        />
      </a>

      <div className="card-body">
        <a
          className="project-overview-heading"
          href={`#project-${projectIndex}`}
        >
          <h3>{project.title}</h3>
        </a>

        <p
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

        <span className="github-logo">
          <a href={project.githuburl} className="github-logo-link">
            <i className="fab fa-github" />
          </a>
        </span>
      </div>
    </div>
  );
}
