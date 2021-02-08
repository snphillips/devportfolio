import React, { Component } from 'react';
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



export default class App extends Component {

  constructor(props) {
    super(props);

    // This binding
    this.includeInGalleryTrue = this.includeInGalleryTrue.bind(this);
    this.filterIncludeInGallery = this.filterIncludeInGallery.bind(this);



    this.state = {
      filteredProjects: [],
      skillsDev: ['Javascript', 'HTML5/CSS3', 'Node/Express', 'React.js', 'RESTful APIs', 'JQuery', 'D3.js'],
      skillsDevOther: ['Heroku', 'Sublime', 'Jira', "Agile/Scrum", 'Salesforce', 'Git', 'Postgres', 'SQL',],
      skillsOther: [],
      skillsDesign: ['Photoshop', 'Indesign', 'Illustrator', 'Acrobat'],
      skillsNotUsing: ['ACT!', 'Filemaker Pro', 'Wordpress', 'Teamsite (nyc.gov)', 'Constant Contact', 'Mailchimp', 'Microsoft Office Suite', 'Slack']
    };
  }





// ==================================
//  Only display projects from projectList.js if
//  1) includeingallery === true, return it...meaning keep it
//  2) apply the above function as a filter to the states
//
//  ==================================
  includeInGalleryTrue(item){
    return item.includeInGallery === true;
  };

  filterIncludeInGallery(){
  // 1) To start filteredProjects is an empty array.
  // 2) Then we take projectList which is an array that contains all the projects, some of which
  // I don't want on my portfolio right now.
  // 3) Use filter() method to create a new array with all elements
  // that pass the test implemented by the provided function.
  // In this case, the test is, only return items that have the key includeingallery set to true
    this.setState({filteredProjects: projectList.filter(this.includeInGalleryTrue)})
  };

  componentDidMount(){
    // This determines which images from the art json are shown
    // There's a key in the projectList.js array called includeingallery that can be true or false
    this.filterIncludeInGallery()
  };


  render() {
    return (

      <div id="dev-portfolio">

        <main id="content-container">
          <div
            id="header-statement"
            className="row align-items-center"
            >

            <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6">
              <Header />
            </div>

            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
              <Statement />
            </div>


          </div>
          <ProjectOverview
            parentState={this.state}
            filteredProjects={this.state.filteredProjects}
          />
          <About />
          <Skills
            parentState={this.state}
            skillsDev={this.state.skillsDev}
            skillsDevOther={this.state.skillsDevOther}
          />
          <Contact />
          <ProjectDeepDives
            filteredProjects={this.state.filteredProjects}
          />
        </main>

        <div id="nav-container">
          <Navigation />
        </div>

      </div>
    );
  }
}


//        <nav className="col-sm-0 col-md-2 col-lg-1 col-xl-1">
//          <Navigation />
//        </nav>
