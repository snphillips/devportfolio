import { Heading } from '../UI-styles/headings';


// We're mapping over two skills lists: web dev &
// web dev other-- ancillary dev skills like
// git & vs code.
// Find the skills arrays as "state" in App.js

type Props = {
  skillsDev: String[],
  skillsDevOther: String[],
}

export default function Skills({ skillsDev, skillsDevOther }: Props) {
  return (
    <section id='skills'>
      <hr />
      <Heading>Skills</Heading>

      <div className='list-columns'>
        <ul className='skills-list'>
          {skillsDev.map((skillItem) => {
            // to help generate a unique key to each child
            let index = skillsDev.indexOf(skillItem);

            return <li className="skill-item" key={'skill-' + index}>{skillItem}</li>;
          })}

          {skillsDevOther.map((skillDevItem) => {
            // to help generate a unique key to each child
            let index = skillsDevOther.indexOf(skillDevItem);

            return <li className="skill-item" key={'skill-dev-' + index}>{skillDevItem}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}
