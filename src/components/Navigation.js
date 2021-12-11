import React, { Component } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: block;
  position: fixed;
`

const NavItem = styled.a`
  position: relative;
  text-decoration: none; /* This removes the default underline */
  color: rgba(255,255,255, 0.7);  /*This changes the default color*/

  &:hover {
    text-decoration: none; /* This removes the default underline */
    color: rgba(255,255,255, 0.7); /* This changes the default color */
  }

  &:before {
    content: ""; /* If you put a string here, it will show up */
    position: absolute;
    left: 0; /* the position of the line */
    width: 100%; /* width of the line */
    height: 2px;  /* thickness of the line */
    bottom: -2px;   /*the space between the text and the line*/
    background-color: rgba(213, 11, 84, 0.9); /*color:pink underline*/
    visibility: hidden; /* by default the underline is hidden*/

    /*   The scaleX() CSS function defines a transformation that resizes an element along the x-axis (horizontally).
    Its result is a <transform-function> data type. */
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s; /*how fast the animation is*/
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1); /* width of the line. 1 = 100% */
    transform: scaleX(1); /* width of the line. 1 = 100% */
  }


`;


export default function Navigation(props) {

  return(
        <NavContainer className="navbar navbar-expand-md navbar-dark mb-3">
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="ml-auto">
              <li><NavItem href="#about">about</NavItem></li>
              <li><NavItem href="#skills">skills</NavItem></li>
              <li><NavItem href="#contact">contact</NavItem></li>
              <li><NavItem href="https://www.linkedin.com/in/sarah-n-phillips/"><i className="fab fa-linkedin"></i></NavItem></li>
              <li><NavItem href="https://github.com/snphillips"><i className="fab fa-github"></i></NavItem></li>
            </ul>
          </div>

        </NavContainer>
  )
};


