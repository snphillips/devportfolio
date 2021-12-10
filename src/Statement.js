import React, { Component } from 'react';
import styled from 'styled-components';


const StatementStyled = styled.div`
  font-family: 'Crimson Text', serif;
  font-size: 2em;
  line-height: 1.2;
  font-weight: 400;
  font-style: italic;
  margin-left: 2.5rem;
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
`;


export default function Statement() {
    return (

    <StatementStyled id="statement">Software Engineer</StatementStyled>

    );

}
