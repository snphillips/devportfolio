import React, { Component } from 'react';

export default class SoTrashy extends Component {
  render() {
    return (

      <div className="card">

        <img className="card-img-top" src="https://i.imgur.com/Zf8LOkR.png" alt="website screen grab" />

        <div className="card-body">

          <h3 className="card-title"><a className="title-link" href="https://so-trashy-react.surge.sh/">So Trashy</a></h3>
          <p className="card-text">So Trashy uses data visualization to represent New York City's Department of Sanitation's yearly collection of refuse & recycling.</p>
          <p className="project-tech">D3.js/React.js/nyc.gov APIs</p>
          <div className="button visit-site"><a href="https://so-trashy-react.surge.sh/">visit site</a></div>
          <span className="github-logo"><a href="https://github.com/snphillips/So-Trashy-React"><i  className="fab fa-github"></i></a></span>

        </div>

      </div>
    );
  }
}

