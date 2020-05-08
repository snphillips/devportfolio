import React, { Component } from 'react';



export default class SkillsNew extends Component {
    render() {
      return(

        <section className="contentblock" id="skills">
            <hr />

            <h2 className="section-header">Skills</h2>

            <div className="row">
              <div className="col-sm">

               <ul>

                {this.props.skillsDev.map( skill => {
                  console.log("skill is:", skill)

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
