import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonLight } from "./user-interface-styles/buttons.js"
import { Heading, SubHeading }  from "./user-interface-styles/headings.js"
import { ContentContainer }  from "./user-interface-styles/layout.js"

// ===============================
// The projectDeepDives sections are dynamically created
// by mapping over the filteredProjects array.

// We're using Styled Components for some elements
// ===============================

const DeepDivesContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`

const DeepDivesImageContainer = styled.div`
  max-width: 450px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 90%;
    margin-right: unset;
    margin: 1rem auto;
  }

  @media (max-width: 500px) {

  }
`

const DeepDivesTextContainer = styled.section`
  display: block;
  color: rgba(255,255,255, 0.7);
  margin-left: 1rem;
`

const DeepDivesImageList = styled.div``


const DeepDivesMobileImageList = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: unset;
    width: 100%;
    max-width: 100%;
    margin: 1rem auto;
  }

  @media (max-width: 500px) {

  }
`
const DeepDivesImage = styled.img`
  width: auto;
  height: auto;
  margin-bottom: 1rem;
  margin-right: 1rem;
  max-width: 466px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`
const DeepDivesImageMobile = styled(DeepDivesImage)`
  max-width: 225px;
`

const ListTechUsedDeepDive = styled.ul`
  display: block;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
`;

const ListFeatures = styled(ListTechUsedDeepDive)``




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
                <DeepDivesImage
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
                <DeepDivesImageMobile
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

                  <DeepDivesContent>

                  <DeepDivesImageContainer>

                    <DeepDivesImageList>
                      {imageUrlList}
                    </DeepDivesImageList>

                    <DeepDivesMobileImageList>
                      {mobileImageUrlList}
                    </DeepDivesMobileImageList>

                  </DeepDivesImageContainer>


                  <DeepDivesTextContainer>

                    <article className="deep-dives-text" dangerouslySetInnerHTML={{__html: item.statement }} />

                      <br/>

                      <SubHeading as="h3">features</SubHeading>
                      <ListFeatures>{featuresList}</ListFeatures>

                      <SubHeading as="h3">Tech Used</SubHeading>
                      <ListTechUsedDeepDive>{techUsedList}</ListTechUsedDeepDive>

                      <footer className="deep-dives-links-footer">
                        <ButtonLight as="a" href={item.url}>visit site</ButtonLight>
                        <br/>
                        <br/>
                        <ButtonLight as="a" href={item.githuburl}>github repo <i className="fab fa-github"></i></ButtonLight>
                      </footer>

                    </DeepDivesTextContainer>

                  </DeepDivesContent>
                </article>

              )

            })}

        </ContentContainer>


    );
  }
}

