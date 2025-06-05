
export default function About() {
  console.log('test');
  return (
    <section id='about'>
      <hr />
      <h2>About</h2>
      <div className='about-columns'>

        <p>
          I am a Brooklyn-based developer formally trained in art
          with a background in public service.
        </p>
        <p>
          From 2022 to 2023 I was a Software Engineer for ed-tech startup Newsela where I worked on
          two React.js internal content management systems for the content creation team. Prior to
          that, I worked as an Interaction Engineer at the ad tech startup TripleLift where I created
          bespoke, consumer-centric templates for programatic ads and developed the in-house React
          application our team used to create those templates.
        </p>
        <p>
          I strive to create visually interesting solutions that are broadly appealing. I
          believe tech should be intuitive, welcoming and delightful to interact with.
        </p>
      </div>
    </section>
  );
}
