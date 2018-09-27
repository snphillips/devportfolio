import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Statement from './Statement';
import Skills from './Skills';
import SoTrashy from './SoTrashy';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Statement />
        <Skills />
      </div>
    );
  }
}
