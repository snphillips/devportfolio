import React from 'react';
import { Heading }  from "./user-interface-styles/headings.js"
import { ContentContainer }  from "./user-interface-styles/layout.js"



export default function Contact(props) {

    return (

    <ContentContainer id="contact">
      <hr />
      <Heading>Contact</Heading>
      <ul>
        <li>snphillips [at] gmail [dot] com</li>
        <li>
          <a href="https://www.linkedin.com/in/sarah-n-phillips/"
               target="_blank"
               rel="noopener noreferrer">
                 LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/snphillips"
               target="_blank"
               rel="noopener noreferrer">
                 Github
          </a>
        </li>
        <li>
          <a href="https://resume.creddle.io/resume/41xrld5p268"
             target="_blank"
             rel="noopener noreferrer">
               View my resume here.
          </a>
        </li>
      </ul>

    </ContentContainer>

    );

}
