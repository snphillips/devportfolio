import React, { Component } from 'react';
import { NavItem } from "./user-interface-styles/navigation.js"

export default class Navigation extends Component {
  render() {
    return (

        <nav className="nav navbar navbar-expand-md navbar-dark mb-3">

          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="ml-auto">
              <li><NavItem href="#projects">all projects</NavItem></li>
              <li><NavItem href="#about">about</NavItem></li>
              <li><NavItem href="#skills">skills</NavItem></li>
              <li><NavItem href="#contact">contact</NavItem></li>
              <li><NavItem href="https://www.linkedin.com/in/sarah-n-phillips/"><i className="fab fa-linkedin"></i></NavItem></li>
              <li><NavItem href="https://github.com/snphillips"><i className="fab fa-github"></i></NavItem></li>
            </ul>
          </div>

        </nav>

    );
  }
}


