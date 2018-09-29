import React, { Component } from 'react';



export default function Skills(props) {

    return (

    <div className="contentblock" className="container" className="skills">

      <hr className="header-hr"/>

        <div className="row">
          <h3 className="section-header">Skills</h3>
        </div>

        <div className="row">

            <div className="col-sm">
              <ul>
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Node</li>
                <li>Express</li>
                <li>React</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>


          <div className="col-sm">
            <ul>
                <li>Git</li>
                <li>JQuery</li>
                <li>D3</li>
                <li>Photoshop</li>
                <li>Indesign</li>
                <li>Illustrator</li>
                <li>Acrobat</li>
            </ul>
          </div>

            <div className="col-sm">
            <ul>
                <li>Microsoft Office Suite</li>
                <li>ACT! & Filemaker Pro</li>
                <li>Wordpress</li>
                <li>Teamsite (nyc.gov website)</li>
                <li>Constant Contact</li>
                <li>Mailchimp</li>
              </ul>
            </div>

        </div>


    </div>

    );

}
