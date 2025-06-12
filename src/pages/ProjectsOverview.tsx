import ProjectObject from '../interfaces.js';
import Card from '../components/Card.js';

type Props = {
  filteredProjects: ProjectObject[];
};

export default function ProjectsOverview({ filteredProjects }: Props) {
  return (
    <section className="content-section" id="projects">
      <h2>Projects Overview</h2>

      <section className="card-columns">
        {filteredProjects.map((project, index) => {
          return <Card key={index} project={project} projectIndex={index} />;
        })}
      </section>
    </section>
  );
}
