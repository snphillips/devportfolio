import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectOverview from './pages/ProjectOverview';
import projectList from './components/projectList';
import ProjectDeepDives from './components/ProjectDeepDives';
import Resume from './pages/Resume';

export default function App() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [skillsDev, setSkillsDev] = useState([
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'Node',
    'Express',
    'React.js',
    'RESTful APIs',
    'JQuery',
    'D3.js',
    'Jest',
    'React Testing Library',
    'Playwright',
    'Cypress',
    'Postgres',
    'SQL',
    'Heroku',
    'AWS',
    'VS Code',
    'Jira',
    'Agile',
    'Scrum',
    'Salesforce',
    'Git',
    'Agile Methodologies',
    'Civic Tech',
    'Data Visualization',
  ]);

  function filterIncludeInGallery() {
    const newList = projectList.filter((project) => project.includeInGallery === true);
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
      <section className="navigation-container">
        <nav id="nav-container" className=" navbar-expand-md">
          <Navigation />
        </nav>
      </section>
      <section className="content-container">
        <Header />
        <ProjectOverview filteredProjects={filteredProjects} />
        <About />
        <Skills skillsDev={skillsDev} />
        <Contact />
        <ProjectDeepDives filteredProjects={filteredProjects} />
        <Resume />
      </section>

    </div>
  );
}
