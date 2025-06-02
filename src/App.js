import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectOverview from './components/ProjectOverview';
import projectList from './components/projectList';
import ProjectDeepDives from './components/ProjectDeepDives';
import Resume from './pages/Resume';

const SiteContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  margin: 2rem auto;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
const ContentContainer = styled.section`
  width: 90%;
  margin: 0 2rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
const NavContainer = styled.section`
  display: block;
  width: 10%;
  margin-right: 1rem;

  @media (max-width: 500px) {
    align-self: flex-end;
  }
`;

export default function App() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [skillsDev, setskillsDev] = useState([
    'Javascript',
    'Typescript',
    'HTML',
    'CSS',
    'Node', 
    'Express',
    'React.js',
    'RESTful APIs',
    'JQuery',
    'D3.js',
    'Jest',
    'React Testing Library',
    'Playwright',
    'Postgres',
    'SQL',
  ]);
  const [skillsDevOther, setskillsDevOther] = useState([
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
    'Data Visualization'
  ]);

  /* ==================================
   Only display projects from projectList.js if
   1) includeingallery === true, return it...meaning keep it
   2) apply the above function as a filter to the states
   ================================== */
  function filterIncludeInGallery() {
    let newList = projectList.filter((project) => project.includeInGallery === true);
    setFilteredProjects(newList);
  }

  // run on first render
  useEffect(() => {
    // Only runs once per app load
    let didInit = false;
    if (!didInit) {
      didInit = true;

      filterIncludeInGallery();
    }
  }, []);

  return (
    <SiteContainer className='site-container'>
      <ContentContainer className='content-container'>
        <Header />
        <ProjectOverview filteredProjects={filteredProjects} />
        <About />
        <Skills skillsDev={skillsDev} skillsDevOther={skillsDevOther} />
        <Contact />
        <ProjectDeepDives filteredProjects={filteredProjects} />
        <Resume />
      </ContentContainer>

      <NavContainer className='navigation-container'>
        <Navigation />
      </NavContainer>
    </SiteContainer>
  );
}
