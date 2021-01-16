import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (

      <div className="contentblock" id="about">
        <hr />
        <h2 className="section-header">About</h2>
        <p className="about-columns">I am a software engineer and designer formally trained in art
        with a background in municipal service delivery (My former position working for the City of New York could
        have taken place on the set of the show Parks & Recreation).  In my current position as an Interaction Engineer at Triplelift, I create bespoke,
        consumer-centric ad templates and develop the in-house React application we used to create
        those templates.</p>

        <p className="about-columns">I strive to create visually interesting solutions that are broadly appealing. I believe tech should be intuitive, welcoming and delightful
        to interact with.</p>
      </div>
    );
  }
}
