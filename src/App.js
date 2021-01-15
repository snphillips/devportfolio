import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Statement from './Statement';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import ProjectGallery from './ProjectGallery';
import projectList from './projectList';



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
//  only display projects from .json if
//  1) includeingallery === true, return it...meaning keep it
//  2) apply the above function as a filter to the states
//  ==================================
  includeInGalleryTrue(item){
    return item.includeingallery === true;
  };

  filterIncludeInGallery(){
    this.setState({filteredProjects: projectList.filter(this.includeInGalleryTrue)})
  };

  componentDidMount(){
    // This determines which images from the art json are shown
    this.filterIncludeInGallery()
  };


  render() {
    return (

      <div>
        <div className="row align-items-center" id="header-statement">
          <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6">
            <Header />
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <Statement />
          </div>
          <div className="col-sm-0 col-md-2 col-lg-1 col-xl-1">
            <Navigation />
          </div>
        </div>
        <ProjectGallery parentState={this.state}
                        filteredProjects={this.state.filteredProjects}
                        />
        <About />
        <Skills parentState={this.state}
                skillsDev={this.state.skillsDev}
                skillsDevOther={this.state.skillsDevOther}
                />
        <Contact />
      </div>
    );
  }
}

