import React, { Component } from 'react';

// ===============================
// The project "cards" are dynamically created
// by mapping over the filteredProjects array.
// ===============================



export default class ProjectGallery extends Component {
  render() {
    return (

      <div id="projects" className="contentblock">
        <hr />
        <h2>Projects</h2>

        <section className="card-columns">


            {this.props.filteredProjects.map( item => {

                    // let itemIndex = this.props.filteredProjects.indexOf(item)

                      return(

                        <div className="card">

                        <a href={item.url}
                           style={{
                            backgroundColor: "none",
                            width: 0
                          }}
                           >
                          <img className="card-img-top"
                               src={item.imageurl}
                               alt={item.title}
                               />
                        </a>

                          <div className="card-body">

                            <h3 className="card-title">
                              <a className="title-link" href={item.url}>{item.title}</a>
                            </h3>

                            <p className="card-text">{item.statement}</p>
                            <p className="card-text">{item.techused}</p>
                            <div className="button visit-site"><a href={item.url}>visit site</a></div>

                            <span className="github-logo"><a href={item.githuburl}><i className="fab fa-github"></i></a></span>

                          </div>

                        </div>

                      )

            })}



        </section>

      </div>

    );
  }
}

