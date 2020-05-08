import React, { Component } from 'react';



export default class SkillsNew extends Component {
    render() {
      return(

        <div className="contentblock" id="skills">
            <hr />

            <h2 className="section-header">Skills</h2>

                {this.props.skillsDev.map( skill => {
                  console.log("skill is:", skill)

                  return(
                    <p>{skill}</p>
                  )

                })}

        </div>

      )

    }

}
