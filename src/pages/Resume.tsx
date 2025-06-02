import { Heading } from '../UI-styles/headings.js';
import { ContentContainer } from '../UI-styles/layout.js';

export default function Resume() {
  return (
    <>
      <Heading>Resume</Heading>
      <ContentContainer id='resume'>
        <embed
          src='https://sarahphillipsdev.surge.sh/Sarah-Phillips-resume.pdf'
          width='800'
          height='1080'
          type='application/pdf'
        />
      </ContentContainer>
    </>
  );
}
