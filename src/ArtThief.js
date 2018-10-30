import React, { Component } from 'react';

export default class ArtThief extends Component {
  render() {
    return (

      <div className="card">

        <img className="card-img-top" src="https://i.imgur.com/CKtB3Sl.png" alt="" />

        <div className="card-body">

          <h3 className="card-title">Art Thief</h3>
          <p className="card-text">Art Thief allows users to view random images from the Cooper Hewitt Museum's collection, based on selected keywords such as angular, art deco, modernism etc.</p>
          <p className="project-tech">Node/Express/React/Cooper Hewitt Museum API</p>
          <div className="button visit-site"><a href="https://art-thief.surge.sh/">visit site</a></div>
          <span className="github-logo"><a href="https://github.com/snphillips/art-thief"><i  className="fab fa-github"></i></a></span>

        </div>

      </div>
    );
  }
}
