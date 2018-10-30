import React, { Component } from 'react';

export default class Twohue extends Component {
  render() {
    return (

      <div className="card">

        <img className="card-img-top" src="https://i.imgur.com/6TvUx8j.png" alt="" />

        <div className="card-body">

          <h3 className="card-title">twohue</h3>
          <p className="card-text">Twohue is a one-player color mixing game. Players are presented with a color sample that they must recreate using two transparent color swatches.</p>
          <p className="project-tech">React</p>
          <div className="button visit-site"><a href="https://twohue.surge.sh/">visit site</a></div>
          <span className="github-logo"><a href="https://github.com/snphillips/twohue-react"><i  className="fab fa-github"></i></a></span>

        </div>

      </div>

    );
  }
}
