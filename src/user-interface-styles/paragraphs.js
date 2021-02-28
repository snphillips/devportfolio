import styled from 'styled-components';


const AboutColumns = styled.div`
  -webkit-column-gap: 20px;
  -moz-column-gap: 20px;
  column-gap: 20px;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;

  @media (max-width: 768px) {

  }

  @media (max-width: 500px) {
    -webkit-column-gap: 0px;
    -moz-column-gap: 0px;
    column-gap: 0px;
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
  }
`


export {
  AboutColumns
};
