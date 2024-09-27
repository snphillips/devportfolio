import styled from 'styled-components';


//
const ButtonDark = styled.div`
  display: inline-block;
  background-color: rgba(5, 11, 56, 0.9); /*navy blue*/
  border-radius: 6px;
  color: white;
  margin-right: 10px;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  font-size: .9rem;

  &:hover {
    color: white;
    text-decoration: none;
    background-color: rgba(213, 11, 84, 0.9); /*bright pink*/
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
`;


// take the dark button and apply further customizations
const ButtonLight = styled(ButtonDark)`
  color: rgba(5, 11, 56, 0.8) !important; /*navy blue*/
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;

const HorizontalRule = styled.hr`

&:hover {
  margin-bottom: 5px;
}


`






export {
  ButtonDark,
  ButtonLight,
  HorizontalRule
};

