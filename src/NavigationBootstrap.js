import React, { Component } from 'react';



export default class NavigationBootstrap extends Component {
  render() {
        // <nav className="navbar navbar-expand-sm mb-3">

    return (

      <div id="navigation">
        <nav className="navbar navbar-expand-sm mb-3">

                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/sarah-n-phillips/"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/snphillips"><i className="fab fa-github"></i></a>
                        </li>
                    </ul>
                </div>
         </nav>
      </div>

    );
  }
}

