import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectsOverview2 from './pages/ProjectsOverview2';
import projectList from './components/projectList';
import ProjectDeepDives from './components/ProjectDeepDives';
import Resume from './pages/Resume';

export default function App() {
  const [filteredProjects, setFilteredProjects] = useState([]);

  function filterIncludeInGallery() {
    const newList = projectList.filter(
      (project) => project.includeInGallery === true,
    );
    setFilteredProjects(newList);
  }

  useEffect(() => {
    let didInit = false;
    if (!didInit) {
      didInit = true;
      filterIncludeInGallery();
    }
  }, []);

  return (
    <div className="site-container">
      <section className="content-container">
        <Header />
        <ProjectsOverview2 filteredProjects={filteredProjects} />
        <About />
        <Skills />
        <Contact />
        <ProjectDeepDives filteredProjects={filteredProjects} />
        <Resume />
      </section>
      <section className="navigation-container">
        <nav className="navbar-expand-md">
          <Navigation />
        </nav>
      </section>
    </div>
  );
}
