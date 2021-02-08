import React, { Component } from 'react';

// We're mapping over two skills lists: web dev & web dev other-- ancillary dev skills like
// git & sublime.
// Find the skills arrays as "state" in App.js


export default class Skills extends Component {
    render() {
      return(

        <section className="contentblock" id="skills">
          <hr />
          <h2 className="section-header">Skills</h2>

          <div className="skills-list">

            <div>
              <ul>
                {this.props.skillsDev.map( skillItem => {

                  // to help generate a unique key to each child
                  let index = this.props.skillsDev.indexOf(skillItem)

                  return(
                    <li key={"skill-" + index}>{skillItem}</li>
                  )
              })}

                {this.props.skillsDevOther.map( skillDevItem => {

                  // to help generate a unique key to each child
                  let index = this.props.skillsDevOther.indexOf(skillDevItem)

                  return(
                    <li key={"skill-dev-" + index}>{skillDevItem}</li>
                  )
              })}
              </ul>
            </div>
          </div>

        </section>
      )
    }
}
