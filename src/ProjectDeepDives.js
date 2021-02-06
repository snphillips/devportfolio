import React, { Component } from 'react';

// ===============================
// The project section are dynamically created
// by mapping over the filteredProjects array.
// ===============================



export default class ProjectDeepDive extends Component {
  render() {
    return (

        <section className="contentblock">

          {this.props.filteredProjects.map( item => {

            let itemIndex = this.props.filteredProjects.indexOf(item)

              return(

                <div className="deep-dives-section" key={itemIndex}>
                <hr />
                <h2>{item.title}</h2>


                <div className="deep-dives-container">

                <section className="deep-dives-image-container">
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
                </section>

                  <section className="deep-dives-text-container">


                    <h3 className="card-title">
                      <a className="title-link" href={item.url}>{item.title}</a>
                    </h3>

                    <p className="card-text">{item.statement}</p>
                    <p className="card-text">{item.techused}</p>
                    <div className="button visit-site"><a href={item.url}>visit site</a></div>

                    <span className="github-logo"><a href={item.githuburl}><i className="fab fa-github"></i></a></span>

                  </section>

                </div>
                </div>

              )

            })}



        </section>


    );
  }
}

