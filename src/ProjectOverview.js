import React, { Component } from 'react';
import { ButtonDark }  from "./user-interface-styles/Buttons.js"
import { Heading, SubHeadingBlue }  from "./user-interface-styles/Headings.js"

// ===============================
// The project "cards" are dynamically created
// by mapping over the filteredProjects array.
// ===============================

export default class ProjectOverview extends Component {
  render() {

    return (

      <div id="projects" className="contentblock">
        <hr />
        <Heading>Projects Overview</Heading>

        <section className="card-columns">


            {this.props.filteredProjects.map( (item, key) => {

              let itemIndex = this.props.filteredProjects.indexOf(item)

              // map over the array of tech and display them all as span items
              // we insert this variable within a paragraph below.
              // The result is a nice little comma-separated list.
             let techUsedList = item.techUsed.map( (techItem, key) => {

              return(
                <li key={key}>- {techItem}</li>
              )
            })


            return(

              <div className="card" key={key}>

                <a href={"#project-" + itemIndex}
                   style={{
                    // gets rid of the hover effect on links
                    backgroundColor: "none",
                    // width: 0
                  }}
                   >
                  <img className="card-img-top"
                       src={item.imageUrl[0]}
                       alt={item.title}
                       />
                </a>

                  <div className="card-body">

                    <SubHeadingBlue as="a"href={`#project-`+ itemIndex}>
                      {item.title}
                    </SubHeadingBlue>

                    <summary className="card-text" dangerouslySetInnerHTML={{__html: item.briefStatement }} />;
                    <ul className="card-tech-used">{techUsedList}</ul>
                    <ButtonDark as="a" href={item.url}>visit site</ButtonDark>

                    <span className="github-logo">
                      <a href={item.githuburl}>
                        <i className="fab fa-github"></i>
                      </a>
                    </span>

                  </div>

              </div>
            )

            })}



        </section>

      </div>

    );
  }
}

