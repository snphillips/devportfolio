import React, { Component } from 'react';
import AboutABlueBike from './AboutABlueBike';
import SoTrashy from './SoTrashy';
import TwoHue from './TwoHue';
import WeatherGIF from './WeatherGIF';
import ArtThief from './ArtThief';
import Todoodles from './Todoodles';

export default class Projects extends Component {
  render() {
    return (

      <div id="projects" className="contentblock">
        <hr />
        <h2>Projects</h2>

        <div className="card-columns">

          <AboutABlueBike />
          <TwoHue />
          <SoTrashy />
          <WeatherGIF />
          <ArtThief />
          <Todoodles />

        </div>

      </div>
    );
  }
}
