import React from 'react';
import { Heading } from '../user-interface-styles/Headings';
import { ContentContainer } from '../user-interface-styles/layout.js';

import styled from 'styled-components';

const SkillsListContainer = styled.div`
  column-count: 4;

  @media (max-width: 768px) {
    column-count: 3;
  }

  @media (max-width: 500px) {
    column-count: 1;
  }
`;

const SkillsUnorderedList = styled.ul`
  padding-left: 0; /* removes space where bullet points used to be */
`;

const SkillListItem = styled.li`
  list-style: none; /* removes bullet points */
`;

// We're mapping over two skills lists: web dev &
// web dev other-- ancillary dev skills like
// git & sublime.
// Find the skills arrays as "state" in App.js

type Props = {
  skillsDev: String[],
  skillsDevOther: String[],
}


export default function Skills({ skillsDev, skillsDevOther }: Props) {
  return (
    <ContentContainer id='skills'>
      <hr />
      <Heading>Skills</Heading>

      <SkillsListContainer>
        <SkillsUnorderedList>
          {skillsDev.map((skillItem) => {
            // to help generate a unique key to each child
            let index = skillsDev.indexOf(skillItem);

            return <SkillListItem key={'skill-' + index}>{skillItem}</SkillListItem>;
          })}

          {skillsDevOther.map((skillDevItem) => {
            // to help generate a unique key to each child
            let index = skillsDevOther.indexOf(skillDevItem);

            return <SkillListItem key={'skill-dev-' + index}>{skillDevItem}</SkillListItem>;
          })}
        </SkillsUnorderedList>
      </SkillsListContainer>
    </ContentContainer>
  );
}
