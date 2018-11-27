import React, { Component } from 'react';

export default class Todoodles extends Component {
  render() {
    return (

      <div className="card">

        <img className="card-img-top" src="https://i.imgur.com/DNmSSeE.png" alt="" />

        <div className="card-body">

          <h3 className="card-title">Todoodles</h3>
          <p className="card-text">Todoodles is a CRUD TODO app that allows users to create & delete todo items, as well as cross out completed tasks.</p>
          <p className="project-tech">Node/Express/React/Postgres</p>
          <div className="button visit-site"><a href="https://todoodles.surge.sh/">visit site</a></div>
          <span className="github-logo"><a href="https://github.com/snphillips/todoodles"><i  className="fab fa-github"></i></a></span>

        </div>

      </div>
    );
  }
}
