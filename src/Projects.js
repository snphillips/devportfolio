import React, { Component } from 'react';
import AboutABlueBike from './AboutABlueBike';
import SoTrashy from './SoTrashy';
import TwoHue from './TwoHue';

export default class Projects extends Component {
  render() {
    return (

      <div id="projects">
        <h2>Projects</h2>

        <div class="card-columns">

          <AboutABlueBike />
          <SoTrashy />
          <TwoHue />

        </div>

      </div>
    );
  }
}
