const projectList = [
{
  title: `NYCHA Outage Scraper`,
  imageUrl: [
    "https://i.imgur.com/3CmQKwE.png",
     "https://i.imgur.com/1y4g93S.png"
  ],
  mobileImageUrl: [
  ],
  briefStatement: "<p>The New York City Housing Authority (NYCHA) maintains a page on their site that lists services outages in their developments for heat, hot water, water, elevators, electricity & gas.</p> <p>This scraper extracts the data from the NYCHA website and saves the results in csv tables.</p>",
  statement: "<p>The New York City Housing Authority (NYCHA) maintains a <a class=\"content-link\" href=\"https://my.nycha.info/Outages/Outages.aspx\">page on their website</a> that lists services outages in their developments for heat, hot water, water, elevators, electricity & gas. The outage site is updated daily, however there is no easy way for stakeholders to download the data.</p><p>This scraper extracts the data from the NYCHA website and saves the results in csv tables, within a folder named with the date and time of the scrape.</p>",
  techUsed: [
    "Python",
    "Beautiful Soup",
    "Pandas"
  ],
  features: [
    "scrapes data into csv tables",
  ],
  url: "https://github.com/snphillips/nycha-outage-scraper",
  githuburl: "https://github.com/snphillips/nycha-outage-scraper",
  year: "2019",
  includeInGallery: true,
},
{
  title: "Artist Portfolio",
  imageUrl: [
    "https://i.imgur.com/pP8Ne6d.png",
    "https://i.imgur.com/jUiKQQy.png",
   ],
  mobileImageUrl: [
    "https://i.imgur.com/6fvEgOl.png",
    "https://i.imgur.com/fsyAACQ.png"
  ],
  briefStatement: "<p>A portfolio website for my visual art. The site includes a gallery and image modals.</p>",
  statement: "<p>I used to use Wordpress for my artist portfolio site but I became disenchanted with the constant malware attacks and hosting fees.</p><p>This react site includes a gallery and image modals, which I painstakingly created without the use of a library.</p>",
  techUsed: [
    "React.js"
  ],
  features: [
    "image gallery",
    "image modal",
    "responsive design",
  ],
  url: "https://sarahnicolephillipsart.surge.sh/",
  githuburl: "https://github.com/snphillips/artportfolio",
  year: "2020",
  includeInGallery: true,
},
{
  title: `No Frillz Tweets`,
  imageUrl: [
    "https://i.imgur.com/dofkpVD.png"
  ],
  mobileImageUrl: [
    "https://i.imgur.com/ZQAZZob.png"
  ],
  briefStatement: "<p>No frillz twitter is a simple twitter client that returns recent tweets based on the user's search query.</p>",
  statement: "<p><strong>No frillz twitter</strong> is a simple twitter client that returns recent tweets based on the user\'s search query.</p><p>You may be asking yourself, \"But why? Isn't this just a worse Twitter client that does less than real twitter?\" The answer is yes.</p><p>I created this app as a challenge to work with the Twitter API. In the end, I chose to work with the Twit API.</p>",
  techUsed: [
    "Node.js",
    "Express.js",
    "Javascript",
    "Twit API"
  ],
  features: [
    "search form",
    "loading spinner",
    "responsive design",
  ],
  url: "https://nofrillztweets.surge.sh/",
  githuburl: "https://github.com/snphillips/nofrillztwitter",
  year: `2020`,
  includeInGallery: true,
},
{
  title: `So Trashy`,
  imageUrl: [
    "https://i.imgur.com/PMqmkdE.png",
    "https://i.imgur.com/WSJMO84.png"
  ],
  mobileImageUrl: [
   "https://i.imgur.com/Z767urK.png",
   "https://i.imgur.com/uzOaJum.png"
  ],
  briefStatement: "So Trashy uses data visualization to represent New York City's Department of Sanitation\'s yearly collection of refuse & recycling.</p>",
  statement: "<p><strong>So Trashy</strong> uses data visualization to represent New York City\'s Department of Sanitation\'s (DSNY) yearly collection of refuse & recycling.</p></p>DSNY collects residential and public school refuse and recycling, empties street litter baskets, cleans up abandoned property such as cars, tires and bicycles and collects other types of refuse, such as the detritus left in public spaces after Superstorm Sandy. DSNY does not pick up commercial refuse from offices, shops, business, institutions or construction sites.</p><p>The agency publishes monthly reports detailing how many tons of refuse, paper/cardboard and metal/glass/plastic/drink carton has been collected, categorized by borough and further categorized into Community District (CD).</p><p>I cross-reference two data sets to match the CD with the population of each distict.  Additionaly I match the CD with neighborhood names which aren\'t official city designations (as neighborhood boundaries evolve over time)</p>",
  techUsed: [
    "D3.js",
    "React.js",
    "nyc.gov API"
  ],
  features: [
    "sorting radio buttons",
    "hover interaction",
    "responsive design",
  ],
  url: "https://so-trashy-react.surge.sh/",
  githuburl: "https://github.com/snphillips/So-Trashy-React",
  year: `2018`,
  includeInGallery: true,
},
{
  title: `Art Thief`,
  imageUrl: [
    "https://i.imgur.com/CKtB3Sl.png",
    "https://i.imgur.com/O3KKdaX.png"
  ],
  mobileImageUrl: [
   "https://i.imgur.com/bj13WpG.png",
   "https://i.imgur.com/qBkmOSD.png"
  ],
  briefStatement: "<p>Art Thief allows users to view random images from the Cooper Hewitt Museum's collection, based on selected keywords such as angular, art deco, modernism etc.</p>",
  statement: "<p><strong>Art Thief</strong> allows users to view random images from the Cooper Hewitt Museum's collection, based on selected keywords such as angular, art deco, modernism etc.</p>",
  techUsed: [
    "Node.js",
    "Express.js",
    "React.js",
    "Cooper Hewitt Museum API"
  ],
  features: [
    "search form",
    "responsive design",
  ],
  url: "https://art-thief.surge.sh/",
  githuburl: "https://github.com/snphillips/art-thief",
  year: `2018`,
  includeInGallery: true,
},
{
  title: `TwoHue`,
  imageUrl: [
    "https://i.imgur.com/7XNK4lO.png",
    "https://i.imgur.com/I3VWwAE.png",
    "https://i.imgur.com/zIltcWs.png"
  ],
  mobileImageUrl: [
    "https://i.imgur.com/aAVsvgk.png",
    "https://i.imgur.com/5OUjYp4.png"
  ],
  briefStatement: "<p>Twohue is a one-player color mixing game. Players are presented with a color sample that they must recreate using two transparent color swatches. I use a state-machine to manage user flow.</p>",
  statement: "<p><strong>Twohue</strong> is a one-player color mixing game. Players are presented with a color sample that they must recreate using two transparent color swatches. I use an X state-machine (React-Automata) to manage user flow. I use the color library chroma.js to dynamically create unlimited game rounds.</p>",
  techUsed: [
    "React.js",
    "React-Automata (for state machine)",
    "Chroma.js (a color library)"
  ],
  features: [
    "sound on/off toggle",
    "game intro css animation",
    "randomly generated game rounds",
    "rounds become more challenging",
    "confetti animation",
    "leaderboard",
    "responsive design"
  ],
  url: "https://twohue-state-machine.surge.sh/",
  githuburl: "https://github.com/snphillips/twohue-state-chart",
  year: `2020`,
  includeInGallery: true,
},
{
  title: `Weather GIF`,
  imageUrl: [
    "https://i.imgur.com/ruPKEqn.png",
    "https://i.imgur.com/G6PItKP.png",
    "https://i.imgur.com/Nyh8XL6.png"
  ],
  mobileImageUrl: [

  ],
  briefStatement: "<p>WeatherGIF is a silly little weather app that displays current weather conditions based on ZIP, accompanied by an animated GIF that illustrates the weather.</p>",
  statement: "<p><strong>WeatherGIF</strong> is a silly little weather app that displays current weather conditions based on ZIP, accompanied by an animated GIF that illustrates the weather.</p>",
  techUsed: [
    "Javascript",
    "Open Weather API"
  ],
  features: [
    "search form",
    "responsive design",
  ],
  url: "https://weathergif.surge.sh/",
  githuburl: "https://github.com/snphillips/weatherGIF",
  year: `2018`,
  includeInGallery: true,
},
{
  title: `Five Years of Food Spending`,
  imageUrl: [
    "https://i.imgur.com/pXdIzAO.png",
  ],
  mobileImageUrl: [

  ],
  briefStatement: `<p><strong>Five Years of Food Spending</strong> uses data visualization to represent my spending on groceries and eating out.</p>`,
  statement: `<p>Five Years of Food Spending uses data visualization to represent my spending on groceries and eating out.</p>`,
  techUsed: [
    "D3.js",
    "React.js"
  ],
  features: [
    "hover facts",
    "responsive design",
  ],
  url: "https://5yearsfood.surge.sh/",
  githuburl: "https://github.com/snphillips/food-spending",
  year: `2018`,
  includeInGallery: true,
},
{
  title: `Todoodles`,
  imageUrl: [
    "https://i.imgur.com/DNmSSeE.png",
  ],
  mobileImageUrl: [

  ],
  briefStatement: "<p>Todoodles is a CRUD TODO app that allows users to create & delete todo items, as well as cross out completed tasks.</p>",
  statement: "<p><strong>Todoodles</strong> is a CRUD TODO app that allows users to create & delete todo items, as well as cross out completed tasks.</p>",
  techUsed: [
    "Node.js",
    "Express.js",
    "Postgres",
    "React.js"
  ],
  features: [
    "responsive design",
  ],
  url: "https://todoodles.surge.sh/",
  githuburl: "https://github.com/snphillips/todoodles",
  year: `2018`,
  includeInGallery: false,
},
{
  title: `About a Blue Bike`,
  imageUrl: [
    "https://i.imgur.com/A1J5MxP.jpg",
  ],
  mobileImageUrl: [

  ],
  briefStatement: "<p>About a Blue Bike is a tool to look up trip statistics about individual bicycles in New York City's Citi Bike bike share system.</p>",
  statement: "<p><strong>About a Blue Bike</strong> is a tool to look up trip statistics about individual bicycles in New York City's Citi Bike bike share system.</p>",
  techUsed: [
    "Node.js",
    "Express.js",
    "Postgres",
    "React.js"
  ],
  features: [
   "search form",
   "randomizer button",
    "responsive design",
  ],
  url: "https://aboutabluebike.surge.sh/",
  githuburl: "https://github.com/snphillips/About-a-Blue-Bike",
  year: `2018`,
  includeInGallery: false,
}
]

export default projectList
