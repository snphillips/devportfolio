import { ButtonLight } from '../UI-styles/buttonsAndHr.js';
import { ContentContainer } from '../UI-styles/layout';
import ProjectObject from '../interfaces';

type Props = {
  filteredProjects: ProjectObject[];
};

export default function ProjectDeepDive({ filteredProjects }: Props) {
  return (
    <ContentContainer>
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
            <hr />

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
                  <ButtonLight as="a" href={item.url}>
                    visit site
                  </ButtonLight>
                  <br />
                  <ButtonLight as="a" href={item.githuburl}>
                    github repo <i className="fab fa-github"></i>
                  </ButtonLight>
                </footer>
              </section>
            </div>
          </article>
        );
      })}
    </ContentContainer>
  );
}
