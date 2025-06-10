import { ContentContainer } from '../UI-styles/layout.js';

export default function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <ContentContainer id="resume">
        <embed
          src="https://sarahphillipsdev.surge.sh/Sarah-Phillips-resume.pdf"
          width="800"
          height="1080"
          type="application/pdf"
        />
      </ContentContainer>
    </>
  );
}
