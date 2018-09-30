import React, { Component } from 'react';

export default class SoTrashy extends Component {
  render() {
    return (

      <div className="card">

        <img className="card-img-top" src="https://i.imgur.com/s14l5ob.png" alt="" />

        <div className="card-body">

          <h3 className="card-title">So Trashy</h3>
          <p className="card-text">So Trashy uses data visualization to represent New York City's Department of Sanitation's (DSNY) yearly collection of refuse and recycling from 2014 to 2018. Created with the D3.js library.</p>
          <p className="project-tech">D3.js</p>
          <button className="visit-site"><a href="http://sotrashy.surge.sh/">visit site</a></button>
          <span className="github-logo"><a href="https://github.com/snphillips/sotrashy"><i  className="fab fa-github"></i></a></span>

        </div>

      </div>
    );
  }
}
