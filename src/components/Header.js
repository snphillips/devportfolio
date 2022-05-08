import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 7.5rem;
  font-weight: 500;
  color: rgba(255,255,255, 0.7);
  -webkit-text-fill-color: rgba(255,255,255, 0.7); /*so transparency works on safari*/
  font-style: italic;
  letter-spacing: -.07em;
  text-transform: uppercase;
  line-height: 70%;
  text-align: right;
  -webkit-transition: all 0.4s ease-in; /*for a smooth mouse away effect*/
  -moz-transition: all 0.4s ease-in;
  -ms-transition: all 0.4s ease-in;
  -o-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
  position: sticky;
  top: 15px;

  &:hover {
    cursor: pointer;
    color: rgba(255,255,255,0.1);
    /*line-height: 64%;*/
    opacity: .8;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
  }

  @media (max-width: 768px) {
    font-size: 5em;
    line-height: 70%;
    text-align: left;
    opacity: .7; /* to make header translucent on mobile */
  }

  @media (max-width: 500px) {
    font-size: 3em;
  }

}
`;

export default function Header() {
  return (
    <div>
      <StyledHeader>Sarah Phillips</StyledHeader>
    </div>
  );
}
