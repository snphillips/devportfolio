import React, { Component } from 'react';

export default class FiveYearsFood extends Component {
  render() {
    return (

      <div className="card">

        <img className="card-img-top" src="https://i.imgur.com/pXdIzAO.png" alt="website screen grab" />

        <div className="card-body">

          <h3 className="card-title"><a className="title-link" href="https://5yearsfood.surge.sh/">Five Years of Food Spending</a></h3>
          <p className="card-text">Five Years of Food Spending uses data visualization to represent my spending on groceries and eating out.</p>
          <p className="project-tech">D3.js/React.js</p>
          <div className="button visit-site"><a href="https://5yearsfood.surge.sh/">visit site</a></div>
          <span className="github-logo"><a href="https://github.com/snphillips/food-spending"><i  className="fab fa-github"></i></a></span>

        </div>

      </div>
    );
  }
}
