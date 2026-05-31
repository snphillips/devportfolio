'use client';

import { useMemo } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectOverviewCards from '../components/ProjectOverviewCards';
import projectList from '../projectList';
import ProjectDeepDivesSection from '../components/ProjectDeepDivesSection';
import Resume from '../components/Resume';

export default function App() {
  const filteredProjects = useMemo(
    () => projectList.filter((p) => p.includeInGallery),
    []
  );

  return (
    <div className="site-container">
      <section className="content-container">
        <Header />
        <ProjectOverviewCards filteredProjects={filteredProjects} />
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
