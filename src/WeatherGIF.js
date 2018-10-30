import React, { Component } from 'react';

export default class WeatherGIF extends Component {
  render() {
    return (

      <div className="card">

        <img className="card-img-top" src="https://i.imgur.com/ruPKEqn.png" alt="screen capture of weather gif app" />

        <div className="card-body">

          <h3 className="card-title">WeatherGIF</h3>
          <p className="card-text">WeatherGIF is a silly little weather app that displays current weather conditions based on ZIP, accompanied by an animated GIF that illustrates the weather.</p>
          <p className="project-tech">Javascript/Jquery/Open Weather API</p>
          <div className="button visit-site"><a href="https://weathergif.surge.sh/">visit site</a></div>
          <span className="github-logo"><a href="https://github.com/snphillips/weatherGIF"><i  className="fab fa-github"></i></a></span>

        </div>

      </div>
    );
  }
}

