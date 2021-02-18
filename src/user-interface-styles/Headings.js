import styled from 'styled-components';

// Note: SubHeading & SubheadingBlue are supposed to be h3
// We use the "as" polymorphic prop to dynamically swap out
// the element that receives the styles where we implement them
// I.e. <Subheading as="h3">Features</Subheading>

// To make a new component that inherits the styling of another,
// wrap it in the styled() constructor to "extend it".


const Heading = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  color: rgba(245, 208, 200, 0.8);
  text-transform: uppercase;
  font-size: 3em;
  letter-spacing: -.3vw;
  -webkit-font-smoothing: auto;
`;

// take Heading and "extend it" by
// applying further customizations
const SubHeading = styled(Heading)`
  font-size: 1.25em;
  letter-spacing: unset;
  font-weight: 500;
  line-height: 1;
`;

// take Heading and "extend it" by
// applying further customizations
const SubHeadingBlue = styled(SubHeading)`
  color: rgba(5, 11, 56, .8);  /*navy blue*/
`;


export {
  Heading,
  SubHeading,
  SubHeadingBlue
};

