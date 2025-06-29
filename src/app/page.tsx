'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectsOverview from '../components/ProjectsOverview';
import projectList from '../projectList';
import ProjectDeepDivesSection from '../components/ProjectDeepDivesSection';
import Resume from '../components/Resume';

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
        <ProjectsOverview filteredProjects={filteredProjects} />
        <About />
        <Skills />
        <Contact />
        <ProjectDeepDivesSection filteredProjects={filteredProjects} />
        <Resume />
      </section>
      <nav className="navigation-container">
        <Navigation />
      </nav>
    </div>
  );
}
