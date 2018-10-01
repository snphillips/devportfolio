import React, { Component } from 'react';



export default class Navigation extends Component {
  render() {




    return (

      <div id="nav">
        <ul>
          <li><a className="nav-item" href="#projects">projects</a></li>
          <li><a className="nav-item" href="#about">about</a></li>
          <li><a className="nav-item" href="#skills">skills</a></li>
          <li><a className="nav-item" href="#contact">contact</a></li>
          <li><a className="nav-item" href="https://www.linkedin.com/in/sarah-n-phillips/"><i class="fab fa-linkedin"></i></a></li>
          <li><a className="nav-item" href="https://github.com/snphillips"><i class="fab fa-github"></i></a></li>
          <a><i className="fa fa-bars" id="hamburger-icon"></i></a>

        </ul>
      </div>

    );
  }
}


