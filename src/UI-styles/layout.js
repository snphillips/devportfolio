import styled from 'styled-components';

const ContentContainer = styled.section`
  width: 100%;
  margin-right: 1rem;
`;

const NavContainer = styled.section`
  display: block;
  width: 5%;
`;
const HeaderAndStatementContainer = styled.section`
  margin-top: 2em;
  margin-bottom: 1em;
  display: flex;

  @media (max-width: 768px) {
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const HeaderContainer = styled.div`
  display: block;
  margin-right: 2rem;

  @media (max-width: 768px) {
  }

  @media (max-width: 500px) {
  }
`;
const StatementContainer = styled.div`
  display: block;
  margin-top: 0;
`;

export {
  ContentContainer,
  NavContainer,
  HeaderAndStatementContainer,
  HeaderContainer,
  StatementContainer,
};
