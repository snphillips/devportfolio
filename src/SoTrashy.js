import React, { Component } from 'react';



export default function SoTrashy(props) {
    return (

    <div className="project" className="row">


        <img className="project-image"  src="https://i.imgur.com/s14l5ob.png" />


      <div className="project-info">
        <h2 className="project-title"><a href="http://sotrashy.surge.sh/">So Trashy</a></h2>
        <p className="project-description">So Trashy uses data visualization to represent New York City's Department of Sanitation's (DSNY) yearly collection of refuse and recycling from 2014 to 2018. Created with the D3.js library.</p>
        <p className="project-tech">D3.js</p>
        <button className="visit-site"><a href="http://sotrashy.surge.sh/">visit site</a></button>
        <span className="github-logo"><a href="https://github.com/snphillips/sotrashy"><i  className="fab fa-github"></i></a></span>

      </div>

    </div>

    );

}
