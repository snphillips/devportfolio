import { Heading } from '../UI-styles/headings';


// We're mapping over a skills list.
// Find the skills arrays as "state" in App.js

type Props = {
  skillsDev: String[],
}

export default function Skills({ skillsDev }: Props) {
  return (
    <section id='skills'>
      <hr />
      <Heading>Skills</Heading>

      <div className='list-columns'>
        <ul className='skills-list'>
          {skillsDev.map((skillItem) => {

            // to help generate a unique key to each child
            let index = skillsDev.indexOf(skillItem);
            return(
              <li className="skill-item"
                  key={'skill-' + index}
                  >
                {skillItem}
              </li>
            ) ;
          
          })}
        </ul>
      </div>
    </section>
  );
}
