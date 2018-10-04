import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Statement from './Statement';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';




export default class App extends Component {
  render() {
    return (

      <div>
        <div className="row align-items-center" id="header-statement">
          <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5"><Header /></div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6"><Statement /></div>
          <div className="col-sm-0 col-md-1 col-lg-1 col-xl-1"><Navigation /></div>
        </div>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
    );
  }
}

