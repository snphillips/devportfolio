import { Heading } from '../UI-styles/headings';
import { ContentContainer } from '../UI-styles/layout';

export default function Contact() {
  return (
    <ContentContainer id="contact">
      <hr />
      <Heading>Contact</Heading>
      <ul>
        <li>snphillips [at] gmail [dot] com</li>
        <li>
          <a
            className="content-link"
            href="https://www.linkedin.com/in/sarah-n-phillips/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="content-link"
            href="https://github.com/snphillips"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a className="content-link" href="#resume">
            View resume
          </a>
        </li>
      </ul>
    </ContentContainer>
  );
}
