import React, { Component } from 'react';
import AboutABlueBike from './AboutABlueBike';
import SoTrashy from './SoTrashy';
import TwoHue from './TwoHue';
import WeatherGIF from './WeatherGIF';
import ArtThief from './ArtThief'

export default class Projects extends Component {
  render() {
    return (

      <div id="projects" className="contentblock">
        <hr />
        <h2>Projects</h2>

        <div className="card-columns">

          <AboutABlueBike />
          <SoTrashy />
          <TwoHue />
          <WeatherGIF />
          <ArtThief />

        </div>

      </div>
    );
  }
}
