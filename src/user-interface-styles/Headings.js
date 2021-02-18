import styled from 'styled-components';



const Heading = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  color: rgba(245, 208, 200, 0.8);
  text-transform: uppercase;
  font-size: 3em;
  letter-spacing: -.3vw;
  -webkit-font-smoothing: auto;
`;

// take Heading and apply further customizations
const SubHeading = styled(Heading)`
  font-size: 1.25em;
  letter-spacing: unset;
  font-weight: 500;
  line-height: 1;
`;

// take SubHeading and apply further customizations
const SubHeadingBlue = styled(SubHeading)`
  color: rgba(5, 11, 56, .8);  /*navy blue*/
`;



export {
  Heading,
  SubHeading,
  SubHeadingBlue
};

