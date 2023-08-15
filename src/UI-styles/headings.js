import styled from 'styled-components';

/* Note: SubHeading & SubheadingBlue are supposed to be h3
We use the "as" polymorphic prop to dynamically swap out
the element that receives the styles where we implement them
I.e. <Subheading as="h3">Features</Subheading>

To make a new component that inherits the styling of another,
wrap it in the styled() constructor to "extend it". */

const Heading = styled.h2`
  display: block;
  position: relative;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  color: rgba(245, 208, 200, 0.8);
  text-transform: uppercase;
  font-size: 3em;
  letter-spacing: -.3vw;
  -webkit-font-smoothing: auto;
  border-top: 2px solid rgba(245, 208, 200, 0.5); /*dusty pink*/

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 500px) {
    font-size: 1.25em;
  }
`;

/* take Heading and "extend it" by
applying further customizations */
const SubHeading = styled(Heading)`
  font-size: 1.25em;
  letter-spacing: unset;
  font-weight: 500;
  line-height: 1;
  border-top: none;

  @media (max-width: 768px) {
    /* font-size: 1em; */
  }

  @media (max-width: 500px) {

  }
`;

/* take Heading and "extend it" by
applying further customizations */
const SubHeadingBlue = styled(SubHeading)`
  color: rgba(5, 11, 56, .9);  /*navy blue*/
  display: inline-block;
  position: relative;
  text-decoration: none; /* This removes the default underline */
  margin-bottom: .5em;

  &:hover {
    text-decoration: none; /* This removes the default underline */
    color: rgba(5, 11, 56, .8);  /*navy blue*/
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


export {
  Heading,
  SubHeading,
  SubHeadingBlue
};

