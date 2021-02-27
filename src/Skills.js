import React, { Component } from 'react';
import { Heading }  from "./user-interface-styles/headings.js"
import { ContentContainer }  from "./user-interface-styles/layout.js"

// We're mapping over two skills lists: web dev & web dev other-- ancillary dev skills like
// git & sublime.
// Find the skills arrays as "state" in App.js


export default class Skills extends Component {
    render() {
      return(

        <ContentContainer id="skills">
          <hr />
          <Heading>Skills</Heading>

          <div className="skills-list">

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

        </ContentContainer>
      )
    }
}
