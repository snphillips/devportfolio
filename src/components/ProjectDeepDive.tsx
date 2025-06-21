// ProjectDeepDive.tsx
import ProjectObject from '../interfaces';

type Props = {
  project: ProjectObject;
  index: number;
};

export default function ProjectDeepDive({ project, index }: Props) {
  const imageUrlList = project.imageUrl.map((linkItem, idx) => (
    <img
      src={linkItem}
      alt={project.title}
      key={idx}
      className="deep-dives-image"
      width="auto"
      height="auto"
    />
  ));

  const mobileImageUrlList = project.mobileImageUrl.map((linkItem, idx) => (
    <img
      src={linkItem}
      alt={project.title}
      key={idx}
      className="deep-dives-image-mobile"
      width="auto"
      height="auto"
    />
  ));

  const featuresList = project.features.map((featuresItem, idx) => (
    <li key={idx}>+ {featuresItem}</li>
  ));

  const techUsedList = project.techUsed.map((techItem, idx) => (
    <li key={idx}>+ {techItem}</li>
  ));

  return (
    <article className="deep-dives-section">
      <h2 id={`project-${index}`}>{project.title}</h2>

      <div className="deep-dives-content">
        <div className="deep-dives-image-container">
          <div>{imageUrlList}</div>

          <div className="deep-dives-mobile-image-list">
            {mobileImageUrlList}
          </div>
        </div>

        <section className="deep-dives-text-container">
          <article
            className="deep-dives-text"
            dangerouslySetInnerHTML={{ __html: project.statement }}
          />

          <br />

          <h3>features</h3>
          <ul className="list-features">{featuresList}</ul>

          <h3>Tech</h3>
          <ul className="list-tech-used-deep-dive">{techUsedList}</ul>

          <footer className="deep-dives-links-footer">
            <a href={project.url}>
              <div className="button-dark button-light">visit site</div>
            </a>
            <br />
            <a href={project.githuburl}>
              <div className="button-light">github repo</div>
              <i className="fab fa-github"></i>
            </a>
          </footer>
        </section>
      </div>
    </article>
  );
}
