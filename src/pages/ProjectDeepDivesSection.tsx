import ProjectObject from '../interfaces';
import ProjectDeepDive from '../components/ProjectDeepDive';

type Props = {
  filteredProjects: ProjectObject[];
};

export default function ProjectDeepDivesSection({ filteredProjects }: Props) {
  return (
    <section className="content-section">
      {filteredProjects.map((project, index) => (
        <ProjectDeepDive project={project} index={index} key={index} />
      ))}
    </section>
  );
}
