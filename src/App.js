import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Statement from './Statement';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import SoTrashy from './SoTrashy';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Statement />
        <Projects />
        <Skills />
        <About />
      </div>
    );
  }
}
