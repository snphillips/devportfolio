import ProjectObject from '../interfaces.js';
import Card from '../components/Card.js';
import Masonry from 'react-masonry-css';

type Props = {
  filteredProjects: ProjectObject[];
};

export default function ProjectsOverview({ filteredProjects }: Props) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="content-section" id="projects">
      <h2>Projects Overview</h2>
      <Masonry
        className="my-masonry-grid"
        breakpointCols={breakpointColumnsObj}
        columnClassName="my-masonry-grid_column"
      >
        {filteredProjects.map((project, index) => (
          <div key={project.id}>
            <Card
              key={project.id}
              // className="grid-item"
              project={project}
              projectIndex={index}
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
}
