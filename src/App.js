import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Statement from './Statement';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import ProjectOverview from './ProjectOverview';
import projectList from './projectList';
import ProjectDeepDives from './ProjectDeepDives';


const SiteContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  margin: 2rem auto;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }

`
const ContentContainer = styled.section`
  width: 90%;
  margin: 0 2rem;

  @media (max-width: 500px) {
    width: 100%;
  }

`
const NavContainer = styled.section`
  display: block;
  width: 10%;
  margin-right: 1rem;

  @media (max-width: 500px) {
    align-self: flex-end;
  }


`
const HeaderAndStatementContainer = styled.section`
  margin-bottom: 1em;
  display: flex;

  @media (max-width: 768px) {

  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`
const HeaderContainer = styled.div`
  display: block;
  margin-right: 2rem;

  @media (max-width: 768px) {

  }

  @media (max-width: 500px) {

  }
`
const StatementContainer = styled.div`
  margin-top: 0;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    margin-top: .5rem;
  }
`



export default class App extends Component {

  constructor(props) {
    super(props);

    // This binding
    this.includeInGalleryTrue = this.includeInGalleryTrue.bind(this);
    this.filterIncludeInGallery = this.filterIncludeInGallery.bind(this);



    this.state = {
      filteredProjects: [],
      skillsDev: ['Javascript', 'HTML5/CSS3', 'Node/Express', 'React.js', 'RESTful APIs', 'JQuery', 'D3.js'],
      skillsDevOther: ['Heroku', 'Sublime', 'VS Code', 'Jira', "Agile/Scrum", 'Salesforce', 'Git', 'Postgres', 'SQL'],
      skillsOther: [],
      skillsDesign: ['Photoshop', 'Indesign', 'Illustrator', 'Acrobat'],
      skillsNotUsing: ['ACT!', 'Filemaker Pro', 'Wordpress', 'Teamsite (nyc.gov)', 'Constant Contact', 'Mailchimp', 'Microsoft Office Suite', 'Slack']
    };
  }





/* ==================================
 Only display projects from projectList.js if
 1) includeingallery === true, return it...meaning keep it
 2) apply the above function as a filter to the states
 ================================== */
  includeInGalleryTrue(item){
    return item.includeInGallery === true;
  };

  filterIncludeInGallery(){
/*   1) To start filteredProjects is an empty array.
  2) Then we take projectList which is an array that contains all the projects, some of which
  I don't want on my portfolio right now.
  3) Use filter() method to create a new array with all elements
  that pass the test implemented by the provided function.
  In this case, the test is, only return items that have the key includeingallery set to true */
    this.setState({filteredProjects: projectList.filter(this.includeInGalleryTrue)})
  };

  componentDidMount(){
/*     This determines which images from the art json are shown
    There's a key in the projectList.js array called include in gallery that can be true or false */
    this.filterIncludeInGallery()
  };


  render() {
    return (

      <SiteContainer className="site-container">

        <ContentContainer className="content-container">

            <HeaderAndStatementContainer className="header-statement-container">

              <HeaderContainer className="header-container">
                <Header />
              </HeaderContainer>

              <StatementContainer className="statement-container">
                <Statement />
              </StatementContainer>

            </HeaderAndStatementContainer>

            <ProjectOverview
              parentState={this.state}
              filteredProjects={this.state.filteredProjects} />

            <About />

            <Skills
              parentState={this.state}
              skillsDev={this.state.skillsDev}
              skillsDevOther={this.state.skillsDevOther} />

            <Contact />

            <ProjectDeepDives
              filteredProjects={this.state.filteredProjects} />

        </ContentContainer>


        <NavContainer className="navigation-container">
          <Navigation />
        </NavContainer>

      </SiteContainer>
    );
  }
};

