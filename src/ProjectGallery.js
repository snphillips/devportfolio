import React, { Component } from 'react';



export default class ProjectGallery extends Component {
  render() {
    return (

      <div id="projects" className="contentblock">
        <hr />
        <h2>Projects</h2>

        <section className="card-columns">


            {this.props.filteredProjects.map( item => {

                    let itemIndex = this.props.filteredProjects.indexOf(item)
                    // console.log("itemIndex as we build the gallery:", itemIndex)

                      return(

                        <div className="card">
                          <img className="card-img-top"
                               src={item.imageurl}
                               alt={item.title}
                               />
                          <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-text">{item.statement}</p>
                            <p className="card-text">{item.techused}</p>
                            <div className="button visit-site"><a href={item.url}>visit site</a></div>
                            <span className="github-logo"><a href={item.githuburl}><i class="fab fa-github"></i></a></span>
                          </div>
                        </div>

                      )

            })}



        </section>

      </div>

    );
  }
}

