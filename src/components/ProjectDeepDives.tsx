import ProjectObject from '../interfaces';

type Props = {
  filteredProjects: ProjectObject[];
};

export default function ProjectDeepDive({ filteredProjects }: Props) {
  return (
    <section className="content-section">
      {filteredProjects.map((item, key) => {
        const itemIndex = filteredProjects.indexOf(item);

        const imageUrlList = item.imageUrl.map((linkItem, idx) => (
          <img
            src={linkItem}
            alt={item.title}
            key={idx}
            className="deep-dives-image"
            width="auto"
            height="auto"
          />
        ));

        const mobileImageUrlList = item.mobileImageUrl.map((linkItem, idx) => (
          <img
            src={linkItem}
            alt={item.title}
            key={idx}
            className="deep-dives-image-mobile"
            width="auto"
            height="auto"
          />
        ));

        const featuresList = item.features.map((featuresItem, idx) => (
          <li key={idx}>+ {featuresItem}</li>
        ));

        const techUsedList = item.techUsed.map((techItem, idx) => (
          <li key={idx}>+ {techItem}</li>
        ));

        return (
          <article className="deep-dives-section" key={key}>
            <h2 id={`project-${itemIndex}`}>{item.title}</h2>

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
                  dangerouslySetInnerHTML={{ __html: item.statement }}
                />

                <br />

                <h3>features</h3>
                <ul className="list-features">{featuresList}</ul>

                <h3>Tech</h3>
                <ul className="list-tech-used-deep-dive">{techUsedList}</ul>

                <footer className="deep-dives-links-footer">
                  <a href={item.url}>
                    <div className="button-dark button-light">visit site</div>
                  </a>
                  <br />
                  <a href={item.githuburl}>
                    <div className="button-light">github repo</div>
                    <i className="fab fa-github"></i>
                  </a>
                </footer>
              </section>
            </div>
          </article>
        );
      })}
    </section>
  );
}
