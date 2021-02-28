import React, { Component } from 'react';
import styled from 'styled-components';


const StatementStyled = styled.div`
  font-family: 'Crimson Text', serif;
  font-size: 1.5em;
  line-height: 1.2;
  font-weight: 400;
  font-style: italic;
  margin-left: 3.5rem;
  color: rgba(245, 208, 200, 0.8); /* dusty pink */
  z-index: -1;

    @media (max-width: 768px) {
      margin-bottom: 0em;
      font-size: 1.3em;
      margin-left: .2em;
      line-height: 1.1em;
    }

    @media (max-width: 527px) {
      font-size: 1.2em;
    }
  `

// take StatementStyled and apply further customizations
const StatementHighlight = styled.span`
  cursor: pointer;
  -webkit-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  -ms-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;

    &:hover {
      cursor: pointer;
      color: rgba(213, 11, 84, 0.9);
      -webkit-transition: all 0.5s ease-out;
      -moz-transition: all 0.5s ease-out;
      -ms-transition: all 0.5s ease-out;
      -o-transition: all 0.5s ease-out;
      transition: all 0.5s ease-out;
  }



`;


export default function Statement() {
    return (

    <StatementStyled id="statement">
      Software Developer: I create solutions that are <StatementHighlight>welcoming & delightful</StatementHighlight> to interact with.
    </StatementStyled>

    );

}
