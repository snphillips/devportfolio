import React from 'react';
import styled from 'styled-components';
import { Heading }  from "./user-interface-styles/headings.js"
import { ContentContainer }  from "./user-interface-styles/layout.js"


const ContactUList = styled.ul`
  list-style: none;
  padding-left: 0;
`

const ContactListItemLink = styled.a`
  color: rgba(255,255,255, 0.7); /* white */
`





export default function Contact(props) {

    return (

    <ContentContainer id="contact">
      <hr />
      <Heading>Contact</Heading>
      <ContactUList>
        <li>snphillips [at] gmail [dot] com</li>
        <li>
          <ContactListItemLink
            href="https://www.linkedin.com/in/sarah-n-phillips/"
            target="_blank"
            rel="noopener noreferrer">
              LinkedIn
          </ContactListItemLink>
        </li>
        <li>
          <ContactListItemLink
            href="https://github.com/snphillips"
            target="_blank"
            rel="noopener noreferrer">
              Github
          </ContactListItemLink>
        </li>
        <li>
          <ContactListItemLink
            href="https://resume.creddle.io/resume/41xrld5p268"
            target="_blank"
            rel="noopener noreferrer">
              View my resume here.
          </ContactListItemLink>
        </li>
      </ContactUList>

    </ContentContainer>

    );

}
