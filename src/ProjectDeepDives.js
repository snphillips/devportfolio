import React, { Component } from 'react';
import { ButtonLight } from "./user-interface-styles/buttons.js"
import { Heading, SubHeading }  from "./user-interface-styles/headings.js"
import { ContentContainer }  from "./user-interface-styles/layout.js"

// ===============================
// The projectDeepDives sections are dynamically created
// by mapping over the filteredProjects array.

// We're using Styled Components for some elements
// ===============================



export default class ProjectDeepDive extends Component {
  render() {
    return (

        <ContentContainer>

          {this.props.filteredProjects.map( (item, key) => {

            let itemIndex = this.props.filteredProjects.indexOf(item)


            // map over the array of images
            // and display them all as img
            let imageUrlList = item.imageUrl.map( (linkItem, key) => {

              return(
                <img
                  className="deep-dives-image"
                  src={linkItem}
                  alt={item.title}
                  key={key}
                  width="auto"
                  height="auto"
                />
              )
            })

            // map over the array of mobile images
            // and display them all as img
            let mobileImageUrlList = item.mobileImageUrl.map( (linkItem, key) => {

              return(
                <img
                  className="deep-dives-image-mobile"
                  src={linkItem}
                  alt={item.title}
                  key={key}
                  width="auto"
                  height="auto"
                />
              )
            })


            // map over the array of features
            // and display them each as list items
            let featuresList = item.features.map( (featuresItem, key) => {

              return(
                <li key={key}>- {featuresItem}</li>
              )
            })


            // map over the array of tech used
            // and display them each as list items
            let techUsedList = item.techUsed.map( (techItem, key) => {

              return(
                <li key={key}>- {techItem}</li>
              )
            })


              return(

                <article className="deep-dives-section" key={key}>
                  <hr />


                  <Heading id={"project-" + itemIndex}>
                    {item.title}
                  </Heading>

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

                    <article className="deep-dives-text" dangerouslySetInnerHTML={{__html: item.statement }} />

                      <br/>

                      <SubHeading as="h3">features</SubHeading>
                      <ul className="deep-dives-features-list">{featuresList}</ul>

                      <SubHeading as="h3">Tech Used</SubHeading>
                      <ul className="deep-dives-tech-list">{techUsedList}</ul>

                      <footer className="deep-dives-links-footer">
                        <ButtonLight as="a" href={item.url}>visit site</ButtonLight>
                        <br/>
                        <br/>
                        <ButtonLight as="a" href={item.githuburl}>github repo <i className="fab fa-github"></i></ButtonLight>
                      </footer>

                    </section>

                  </div>
                </article>

              )

            })}

        </ContentContainer>


    );
  }
}

