import ProjectObject from '../interfaces.js';

type Props = {
  project: ProjectObject;
  projectIndex: number;
};

// Load all images from assets folder in one call
// Sarah - describe a glob
const images: Record<string, string> = import.meta.glob(
  '../assets/images-webp/*.webp',
  {
    eager: true,
    import: 'default',
  },
);
// remove after debugging
console.log(images);

export default function Card({ project, projectIndex }: Props) {
  const imagePath = `../assets/images-webp/${project.imageName[0]}`;
  const imageSrc = images[imagePath];
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
