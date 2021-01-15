import React, { Component } from 'react';

// We're mapping over two skills lists: web dev & web dev other-- ancillary dev skills like
// git & sublime.
// Find the skills arrays as "state" in App.js


export default class SkillsNew extends Component {
    render() {
      return(

        <section className="contentblock" id="skills">
          <hr />
          <h2 className="section-header">Skills</h2>

          <div className="skills-list">

            <div>
              <ul>
                {this.props.skillsDev.map( skill => {
                  return(
                    <li>{skill}</li>
                  )
              })}

                {this.props.skillsDevOther.map( skill => {
                  return(
                    <li>{skill}</li>
                  )
              })}
              </ul>
            </div>
          </div>

        </section>
      )
    }
}
