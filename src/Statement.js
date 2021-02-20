import React, { Component } from 'react';
import styled from 'styled-components';


const StatementStyled = styled.p`
  font-family: 'Crimson Text', serif;
  font-size: 1.5em;
  line-height: 1.2;
  font-weight: 400;
  font-style: italic;
  margin-left: 3.5rem;
  color: rgba(245, 208, 200, 0.8); /* dusty pink */
  z-index: -1;

    @media (max-width: 768px) {
      padding-top: 1em;
      margin-bottom: 0em;
      font-size: 1.3em;
      margin-left: .2em;
      line-height: 1.1em;
    }

    @media (max-width: 500px) {
      font-size: 1.2em;
    }




  `


export default function Statement() {
    return (

    <StatementStyled>
      <p id="statement">Software Developer: I create solutions that are <span id="highlight">welcoming, intuitive & delightful</span> to interact with.</p>
    </StatementStyled>

    );

}
