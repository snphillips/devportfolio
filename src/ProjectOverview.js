import React, { Component } from 'react';

// ===============================
// The project "cards" are dynamically created
// by mapping over the filteredProjects array.
// ===============================



export default class ProjectOverview extends Component {
  render() {
    return (

      <div id="projects" className="contentblock">
        <hr />
        <h2>Projects Overview</h2>

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

                <a href={"project-" + itemIndex}
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

                    <h3 className="card-title">
                      <a className="title-link" href={`#project-`+ itemIndex}>{item.title}</a>
                    </h3>

                    <p className="card-text">{item.briefStatement}</p>
                    <ul className="card-tech-used">{techUsedList}</ul>
                    <div className="button visit-site"><a href={item.url}>visit site</a></div>

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

