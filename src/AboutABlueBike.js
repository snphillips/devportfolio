import React, { Component } from 'react';

export default class AboutABlueBike extends Component {
  render() {
    return (

      <div className="card">

        <img className="card-img-top" src="https://i.imgur.com/A1J5MxP.jpg" alt="" />

        <div className="card-body">

          <h3 className="card-title">About A Blue Bike</h3>
          <p className="card-text"><i>About a Blue Bike</i> is a tool to look up trip statistics about individual bicycles in New York City's Citi Bike bike share system.</p>
          <p className="project-tech">Node/Express/Postgres/React</p>
          <button className="visit-site"><a href="https://aboutabluebike.surge.sh/">visit site</a></button>
          <span className="github-logo"><a href="https://github.com/snphillips/About-a-Blue-Bike"><i  className="fab fa-github"></i></a></span>


        </div>

      </div>
    );
  }
}
