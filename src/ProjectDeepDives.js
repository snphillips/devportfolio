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


            // map over the array of images
            // and display them all as img
            let imageUrlList = item.imageUrl.map( linkItem => {

              return(
                <img
                  className="deep-dives-image"
                  src={linkItem}
                  alt={item.title}
                  key={"imageKey-" + linkItem}
                />
              )
            })

            // map over the array of mobile images
            // and display them all as img
            let mobileImageUrlList = item.mobileImageUrl.map( linkItem => {

              return(
                <img
                  className="deep-dives-image-mobile"
                  src={linkItem}
                  alt={item.title}
                  key={"imageKey-" + linkItem}
                />
              )
            })


            // map over the array of features
            // and display them each as list items
            let featuresList = item.features.map( featuresItem => {

              return(
                <li>- {featuresItem}</li>
              )
            })


            // map over the array of tech used
            // and display them each as list items
            let techUsedList = item.techUsed.map( techItem => {

              return(
                <li>- {techItem}</li>
              )
            })


              return(

                <article className="deep-dives-section" key={itemIndex}>
                <hr />


                <h2
                  id={"project-" + itemIndex}
                  className="section-header"
                  >
                    {item.title}
                </h2>

                <div className="deep-dives-container">

                <section className="deep-dives-image-container">

                  <div className="deep-dives-image-list">
                    {imageUrlList}
                  </div>

                  <div className="deep-dives-mobile-image-list">
                    {mobileImageUrlList}
                  </div>

                </section>


                  <section className="deep-dives-text-container">

                    <p className="deep-dives-text">{item.statement}</p>

                    <br/>

                    <h4 className="deep-dives-tech-heading">features</h4>
                    <ul className="deep-dives-features-list">{featuresList}</ul>

                    <h4 className="deep-dives-tech-heading">Tech Used</h4>
                    <ul className="deep-dives-tech-list">{techUsedList}</ul>

                    <footer className="deep-dives-links-footer">
                      <div><a className="deep-dives-button" href={item.url}>visit site</a></div>
                      <div><a className="deep-dives-button" href={item.githuburl}>github repo <i className="fab fa-github"></i></a></div>
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

