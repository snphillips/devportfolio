export const projectList = [
  {
    id: `tolls_lol`,
    title: `TOLLS-LOL`,
    imageUrl: ['https://i.imgur.com/hQ9N9bI.png'],
    imageName: ['tolls_lol-01.webp'],
    mobileImageUrl: [],
    briefStatement: `<p>This web app uses Mapbox to visualize 2024's 311 complaints about
    obscured license plates in New York City.</p>
    <p>It fetches data from the City of New York's Open Data API and displays the complaints
    on an interactive map.</p>`,
    statement: `<p>This web app uses Mapbox to visualize 2024's 311 complaints about
    obscured license plates in New York City. It fetches data from the City of New York's Open Data API and displays the complaints
    on an interactive map.</p>
    <p>The application caches the data to optimize performance,
    fetching new data only if the cached data is older than 12 hours.</p>
    <p>Obscuring motor vehicle licenses plate is illegal in New York City. Those with obscured
    plates cost New York state money in lost toll revenue and removes the incentive not to
    speed where red light cameras are in operation. Obscured plates also hinder the ability of
    law enforcement to investigate crimes. Citizens may make 311 complaints online or by phone
    to report an obscured plate.</p>`,
    techUsed: ['React', 'Mapbox', `NYC Open Data API`],
    features: [
      'map fetches and displays 311 complaint data',
      'interactive filter buttons',
      'interactive slider',
    ],
    url: 'https://tolls-lol.surge.sh/',
    githuburl:
      'https://github.com/snphillips/obscured-license-plate-visualizer',
    year: '2024',
    includeInGallery: true,
  },
  {
    id: `meeting_background_maker`,
    title: `Meeting Background Maker`,
    imageUrl: [
      'https://i.imgur.com/4mN13AS.png',
      'https://i.imgur.com/zePmX1v.png',
      'https://i.imgur.com/S78VCSY.png',
    ],
    imageName: [
      'meeting_background_maker-01.webp',
      'meeting_background_maker-02.webp',
      'meeting_background_maker-03.webp',
    ],
    mobileImageUrl: [],
    briefStatement: `<p>This web app allows users to select images of \n
    items from the Cooper Hewitt Design Museum's collection to be used as backgrounds for online \n
    meetings. The user may browse through the museum's collection using keywords such as \n
    "bauhaus" or "modernism", or they may download existing sets curated by me.</p>`,
    statement: `<p>This web app allows users to select images of \n
    items from the Cooper Hewitt Design Museum's collection to be used as backgrounds for online \n
    meetings. The user may browse through the museum's collection using keywords such as \n
    "bauhaus" or "modernism", or they may download existing sets curated by me.</p> \n
    <p>The background images are pre-processed, server-side using the image library Jimp. \n
    </p>`,
    techUsed: [
      'React',
      'Node/Express',
      'Cooper-Hewitt API',
      'Axios',
      'React-Spinners',
      'react-masonry-css',
      'AWS S3 bucket',
      'Jimp',
      's3-zip',
    ],
    features: [
      'user adds images to their collection',
      'user removes images from their collection',
      'user downloads collection as zip file',
      'selected images are resized, text overlay added',
      'user downloads pre-curated sets of images',
    ],
    url: 'https://meeting-background-maker.surge.sh/',
    githuburl: 'https://github.com/snphillips/meeting-background-maker-client',
    year: '2022',
    includeInGallery: true,
  },
  {
    id: `so_trashy`,
    title: `So Trashy`,
    imageUrl: [
      'https://i.imgur.com/PMqmkdE.png',
      'https://i.imgur.com/WSJMO84.png',
    ],
    imageName: ['so_trashy-01.webp', 'so_trashy-02.webp', 'so_trashy-03.webp'],
    mobileImageUrl: [
      'https://i.imgur.com/Z767urK.png',
      'https://i.imgur.com/uzOaJum.png',
    ],
    briefStatement:
      "<p>So Trashy uses the data visualization library d3 to represent New York City's Department of Sanitation's yearly collection of refuse & recycling, per person.</p>",
    statement:
      "<p><strong>So Trashy</strong> uses the data visualization library d3 to represent New York City's Department of Sanitation's (DSNY) yearly collection of refuse & recycling, per person.</p></p>DSNY collects residential and public school refuse and recycling, empties street litter baskets, cleans up abandoned property such as cars, tires and bicycles and collects other types of refuse, such as the detritus left in public spaces after Superstorm Sandy.</p> <p>DSNY does not pick up commercial refuse from offices, shops, business, institutions or construction sites.</p><p>The agency publishes monthly reports detailing how many tons of refuse, paper/cardboard and metal/glass/plastic/drink carton has been collected, categorized by borough and further categorized into Community District (CD).</p><p>I cross-reference two data sets to match the community district with the population of each district.  Additionally I match the community district with neighborhood names which aren't official city designations as neighborhood boundaries evolve over time.</p>",
    techUsed: ['D3.js', 'React.js', 'NYC Open Data API'],
    features: [
      'sorting radio buttons',
      'hover interaction',
      'responsive design',
    ],
    url: 'https://so-trashy-react.surge.sh/',
    githuburl: 'https://github.com/snphillips/So-Trashy-React',
    year: `2018`,
    includeInGallery: true,
  },
  {
    id: `artist_portfolio`,
    title: 'Artist Portfolio',
    imageUrl: [
      'https://i.imgur.com/UH3TJtJ.png',
      'https://i.imgur.com/VCJfInw.png',
      'https://i.imgur.com/yjSyUc2.png',
    ],
    imageName: [
      'artist_portfolio-01.webp',
      'artist_portfolio-02.webp',
      'artist_portfolio-03.webp',
    ],
    mobileImageUrl: [
      'https://i.imgur.com/6fvEgOl.png',
      'https://i.imgur.com/fsyAACQ.png',
    ],
    briefStatement:
      '<p>A portfolio website for my visual art. The site includes a gallery and image modals.</p>',
    statement:
      '<p>I used to use Wordpress for my artist portfolio site but I became disenchanted with the constant malware attacks and hosting fees.</p><p>This React.js site includes a gallery and image modals, which I created without the use of a library.</p>',
    techUsed: ['React.js', 'Styled Components'],
    features: [
      'image gallery',
      'image modal',
      'responsive design',
      'dark mode that responds to user setting preference',
    ],
    url: 'https://sarahnicolephillipsart.surge.sh/',
    githuburl: 'https://github.com/snphillips/artportfolio',
    year: '2020',
    includeInGallery: true,
  },
  {
    id: `nycha-outage-scraper`,
    title: `NYCHA Outage Scraper`,
    imageUrl: [
      'https://i.imgur.com/3CmQKwE.png',
      'https://i.imgur.com/1y4g93S.png',
    ],
    imageName: ['nycha_outage_scraper-01.webp', 'nycha_outage_scraper-02.webp'],
    mobileImageUrl: [],
    briefStatement:
      '<p>The New York City Housing Authority (NYCHA) maintains a page on their site that lists services outages in their developments for heat, hot water, water, elevators, electricity & gas.</p> <p>This scraper extracts the data from the NYCHA website and saves the results in csv tables.</p>',
    statement:
      '<p>The New York City Housing Authority (NYCHA) maintains a <a class="content-link" href="https://my.nycha.info/Outages/Outages.aspx">page on their website</a> that lists services outages in their developments for heat, hot water, water, elevators, electricity & gas. The outage site is updated daily, however there is no easy way for stakeholders to download the data.</p><p>This scraper extracts the data from the NYCHA website and saves the results in csv tables, within a folder named with the date and time of the scrape.</p>',
    techUsed: ['Python', 'Beautiful Soup', 'Pandas'],
    features: ['scrapes data into csv tables'],
    url: 'https://github.com/snphillips/nycha-outage-scraper',
    githuburl: 'https://github.com/snphillips/nycha-outage-scraper',
    year: '2019',
    includeInGallery: true,
  },
  {
    id: `twohue`,
    title: `TwoHue`,
    imageName: [
      'twohue-01.webp',
      'twohue-02.webp',
      'twohue-03.webp',
      'twohue-04.webp',
      'twohue-05.webp',
    ],
    imageUrl: [
      'https://i.imgur.com/7XNK4lO.png',
      'https://i.imgur.com/I3VWwAE.png',
      'https://i.imgur.com/zIltcWs.png',
    ],
    mobileImageUrl: [
      'https://i.imgur.com/aAVsvgk.png',
      'https://i.imgur.com/5OUjYp4.png',
    ],
    briefStatement:
      '<p>Twohue is a one-player color mixing game. Players are presented with a color sample that they must recreate using two transparent color swatches.</p>',
    statement:
      '<p><strong>Twohue</strong> is a one-player color mixing game. Players are presented with a color sample that they must recreate using two transparent color swatches. I use the color library chroma.js to dynamically create unlimited game rounds.</p>',
    techUsed: [
      'React.js',
      'Chroma.js (a color library)',
      'Node/Express',
      'Postgres',
    ],
    features: [
      'sound on/off toggle',
      'game intro css animation',
      'randomly generated game rounds',
      'rounds become more challenging',
      'confetti animation',
      'leaderboard',
      'responsive design',
    ],
    url: 'https://twohue.surge.sh/',
    githuburl: 'https://github.com/snphillips/twohue',
    year: `2020`,
    includeInGallery: true,
  },
  {
    id: `weather-gif`,
    title: `Weather GIF`,
    imageName: [
      'weather-gif-01.webp',
      'weather-gif-02.webp',
      'weather-gif-03.webp',
    ],
    imageUrl: [
      'https://i.imgur.com/CWDkO5g.png',
      'https://i.imgur.com/xbwBUyb.png',
      'https://i.imgur.com/0BLPU3Z.png',
    ],
    mobileImageUrl: [],
    briefStatement:
      '<p>WeatherGIF is a silly little weather app that displays current weather conditions based on ZIP, accompanied by an animated GIF that illustrates the weather.</p>',
    statement:
      '<p><strong>WeatherGIF</strong> is a silly little weather app that displays current weather conditions based on ZIP, accompanied by an animated GIF that illustrates the weather.</p>',
    techUsed: ['Javascript', 'Open Weather API'],
    features: ['search form', 'responsive design'],
    url: 'https://weathergif.surge.sh/',
    githuburl: 'https://github.com/snphillips/weatherGIF',
    year: `2018`,
    includeInGallery: false,
  },
  {
    id: `todoodles`,
    title: `Todoodles`,
    imageUrl: ['https://i.imgur.com/DNmSSeE.png'],
    imageName: ['todoodles-01.webp'],
    mobileImageUrl: ['https://i.imgur.com/Ka2NyaX.png'],
    briefStatement:
      '<p>Todoodles is a CRUD TODO app that allows users to create & delete todo items, as well as cross out completed tasks.</p>',
    statement:
      '<p><strong>Todoodles</strong> is a CRUD TODO app that allows users to create & delete todo items, as well as cross out completed tasks.</p>',
    techUsed: ['Node.js', 'Express.js', 'Postgres', 'React.js'],
    features: ['responsive design'],
    url: 'https://todoodles.surge.sh/',
    githuburl: 'https://github.com/snphillips/todoodles',
    year: `2018`,
    includeInGallery: false,
  },
];

export default projectList;
