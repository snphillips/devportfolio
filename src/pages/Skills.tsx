export default function Skills() {
  const skillsDev = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'Node',
    'Express',
    'React.js',
    'RESTful APIs',
    'JQuery',
    'D3.js',
    'Jest',
    'React Testing Library',
    'Playwright',
    'Cypress',
    'Postgres',
    'SQL',
    'Heroku',
    'AWS',
    'VS Code',
    'Jira',
    'Agile',
    'Scrum',
    'Salesforce',
    'Git',
    'Agile Methodologies',
    'Civic Tech',
    'Data Visualization',
  ];

  return (
    <section id="skills">
      <hr />
      <h2>Skills</h2>

      <div className="list-columns">
        <ul className="skills-list">
          {skillsDev.map((skillItem) => {
            // to help generate a unique key to each child
            const index = skillsDev.indexOf(skillItem);
            return (
              <li className="skill-item" key={'skill-' + index}>
                {skillItem}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
