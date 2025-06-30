import ProjectObject from '../interfaces';
import GithubIcon from './GithubIcon';

type Props = {
  project: ProjectObject;
  index: number;
};

export default function ProjectDeepDive({ project, index }: Props) {
  // Resolve main desktop image list
  const imageUrlList = project.imageName.map((imageFileName, idx) => {
    const imageSrc = `/assets/images-webp/${imageFileName}`;
    const fallbackSrc = project.imageUrl[idx];

    return (
      <img
        src={imageSrc}
        alt={project.title}
        key={idx}
        className="deep-dives-image"
        width="auto"
        height="auto"
        onError={(e) => {
          e.currentTarget.src = fallbackSrc;
        }}
      />
    );
  });

  // Load mobile images
  const mobileImageUrlList = (project.mobileImageName || []).map(
    (fileName, idx) => {
      const imageSrc = `/assets/images-webp/${fileName}`;
      const fallbackSrc = project.mobileImageUrl[idx];

      return (
        <img
          src={imageSrc}
          alt={project.title}
          key={`mobile-${idx}`}
          className="deep-dives-image-mobile"
          width="auto"
          height="auto"
          onError={(e) => {
            e.currentTarget.src = fallbackSrc;
          }}
        />
      );
    },
  );

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
            <div className="button-light">
              <GithubIcon
                url={project.githubUrl}
                projectTitle={project.title}
              />{' '}
              github repo
            </div>
          </footer>
        </section>
      </div>
    </article>
  );
}
