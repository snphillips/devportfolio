import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Statement from './Statement';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import SoTrashy from './SoTrashy';

export default class App extends Component {
  render() {
    return (
      <div>

        <Navigation />

        <div className="row align-items-center" id="header-statement">
          <div className="col"><Header /></div>
          <div className="col"><Statement /></div>
        </div>

        <div className="row"></div>

        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
    );
  }
}


        // <Header />
        // <Statement />
