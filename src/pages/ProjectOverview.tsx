import ProjectObject from '../interfaces.js';

type Props = {
  filteredProjects: ProjectObject[];
};

export default function ProjectOverview({ filteredProjects }: Props) {
  return (
    <section className="content-section" id="projects">
      <h2>Projects Overview</h2>

      <section className="card-columns">
        {filteredProjects.map((item, key) => {
          const itemIndex = filteredProjects.indexOf(item);

          const techUsedList = item.techUsed.map((techItem: string, index) => (
            <li key={index}>+ {techItem}</li>
          ));

          return (
            <div className="card" key={key}>
              <a
                href={`#project-${itemIndex}`}
                style={{
                  backgroundColor: 'none',
                }}
              >
                <img
                  className="card-img-top"
                  src={item.imageUrl[0]}
                  alt={item.title}
                  width="auto"
                  height="auto"
                />
              </a>

              <div className="card-body">
                <a
                  className="project-overview-heading"
                  href={`#project-${itemIndex}`}
                >
                  <h3 className="project-overview-heading">{item.title}</h3>
                </a>

                <summary
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: item.briefStatement }}
                />

                <ul className="list-tech-used">{techUsedList}</ul>

                <a href={`#project-${itemIndex}`}>
                  <div className="button-dark">learn more</div>
                </a>
                <a href={item.url}>
                  <div className="button-dark">visit site</div>
                </a>

                <span className="github-logo">
                  <a href={item.githuburl} className="github-logo-link">
                    <i className="fab fa-github"></i>
                  </a>
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
