import React, { Component } from 'react';

// ===============================
// The project section are dynamically created
// by mapping over the filteredProjects array.
// ===============================



export default class ProjectDeepDive extends Component {
  render() {
    return (

        <div className="contentblock">

          {this.props.filteredProjects.map( item => {

            let itemIndex = this.props.filteredProjects.indexOf(item)

            let techUsedArray = item.techused.map( item => {
              console.log(itemIndex, item)
              return(<li>{item}</li>)
            })

              return(

                <article className="deep-dives-section" key={itemIndex}>
                <hr />
                <h2 className="section-header">{item.title}</h2>


                <div className="deep-dives-container">

                <section className="deep-dives-image-container">

                  <img className="deep-dives-image"
                       src={item.imageurl01}
                       alt={item.title}
                       />

                  <img className="deep-dives-image"
                       src={item.imageurl02}
                       alt={item.title}
                       />

                  <img className="deep-dives-image"
                       src={item.imageurl03}
                       alt={item.title}
                       />

                </section>

                  <section className="deep-dives-text-container">

                    <p className="deep-dives-text">{item.statement}</p>

                    <br/>

                    <h4 className="deep-dives-tech-heading">Tech Used</h4>

                    <ul className="deep-dives-text">{techUsedArray}</ul>

                    <footer className="deep-dives-links-footer">
                      <div><a className="deep-dives-button" href={item.url}>visit site</a></div>
                      <div><a className="deep-dives-button" href={item.githuburl}>vist project on github <i className="fab fa-github"></i></a></div>
                    </footer>

                  </section>

                </div>
                </article>

              )

            })}

        </div>


    );
  }
}

