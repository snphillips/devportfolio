import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (

      // <div id="nav">
        <nav className="nav navbar navbar-expand-md navbar-dark mb-3">

          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="ml-auto">
              <li><a className="nav-item" href="#projects">projects</a></li>
              <li><a className="nav-item" href="#about">about</a></li>
              <li><a className="nav-item" href="#skills">skills</a></li>
              <li><a className="nav-item" href="#contact">contact</a></li>
              <li><a className="nav-item" href="https://www.linkedin.com/in/sarah-n-phillips/"><i className="fab fa-linkedin"></i></a></li>
              <li><a className="nav-item" href="https://github.com/snphillips"><i className="fab fa-github"></i></a></li>
            </ul>
          </div>

        </nav>
      // </div>

    );
  }
}


