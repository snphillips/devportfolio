import ProjectCard from './ProjectCard';
import type ProjectObject from '../interfaces';

export default function ProjectsOverview({
  filteredProjects,
}: {
  filteredProjects: ProjectObject[];
}) {
  return (
    <section id="projects" className="content-section">
      <h2>Projects</h2>

      <div className="masonry-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            projectIndex={index}
          />
        ))}
      </div>
    </section>
  );
}
