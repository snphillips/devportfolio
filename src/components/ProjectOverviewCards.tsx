// import ProjectObject from '../interfaces.js';
// import ProjectCard from './ProjectCard.tsx';
// import Masonry from 'react-masonry-css';

// type Props = {
//   filteredProjects: ProjectObject[];
// };

// export default function ProjectOverviewCards({ filteredProjects }: Props) {
//   const breakpointColumnsObj = {
//     default: 3,
//     1100: 3,
//     700: 2,
//     500: 1,
//   };

//   return (
//     <section className="content-section" id="projects">
//       <h2>Projects Overview</h2>
//       <Masonry
//         className="my-masonry-grid"
//         breakpointCols={breakpointColumnsObj}
//         columnClassName="my-masonry-grid-column"
//       >
//         {filteredProjects.map((project, index) => (
//           <div key={project.id}>
//             <ProjectCard
//               key={project.id}
//               project={project}
//               projectIndex={index}
//             />
//           </div>
//         ))}
//       </Masonry>
//     </section>
//   );
// }

// 'use client';
// import dynamic from 'next/dynamic';
import ProjectCard from './ProjectCard';
import type ProjectObject from '../interfaces';

// const Masonry = dynamic(() => import('react-masonry-css'), { ssr: false });

export default function ProjectsOverview({
  filteredProjects,
}: {
  filteredProjects: ProjectObject[];
}) {
  // const cols = { 500: 1, 700: 2, 1100: 3, default: 4 };

  return (
    <section id="projects" className="content-section">
      <h2>Projects</h2>

      {/* pure-CSS grid wrapper */}
      <div className="my-masonry-grid">
        {filteredProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} projectIndex={i} />
        ))}
      </div>
    </section>
  );
}
