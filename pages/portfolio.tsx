import Head from "next/head";

const portfolio = [
  {
    title: "Movie App",
    used: "React, The Movie DB API, CSS Modules, Jest & React Testing Library",
    description:
      "This is a movie app for discovering and exploring movies. You can browse, search for, and see details of all kinds of movies. The app is fully responsive.",
    siteUrl: "https://neilsmovieapp.netlify.app/",
    githubUrl: "https://github.com/neilgebhard/movie-app-react",
  },
  {
    title: "Reddit Clone",
    used: "React, Express, MongoDB, Node.js, JSON Web Tokens, Tailwind CSS, Cypress",
    description:
      "This is a clone of Reddit. The frontend and backend are built from scratch (i.e. I didn't use the Reddit API). The app is fully responsive.",
    features:
      "The features include user authentication, posts, comments, replies, and upvoting/downvoting posts (so far).",
    siteUrl: "https://neilsreddit.herokuapp.com/",
    githubUrl: "https://github.com/neilgebhard/mern-reddit",
  },
  {
    title: "Twitter Clone",
    used: "React, Express, MongoDB, Node.js, JSON Web Tokens, Tailwind CSS",
    description:
      "This app is a clone of Twitter. Again, the frontend and backend are built from scratch. Yes, the app is fully responsive.",
    features: "The features include user authentication, tweets, likes",
    notes:
      "Feel free to sign up for an account and play with the app! You can't use the app if you're not logged in -- this design was taken from the real Twitter. Thank you.",
    siteUrl: "https://neilstwitter.herokuapp.com/",
    githubUrl: "https://github.com/neilgebhard/mern-twitter",
  },
];

const projects = [
  {
    title: "Paint App",
    description: "React, Canvas",
    siteUrl: "https://neilspaint.netlify.app/",
    githubUrl: "https://github.com/neilgebhard/paint-react",
  },
  {
    title: "Scratchpad App",
    description: "React, React Markdown, localStorage",
    siteUrl: "https://neilsscratchpad.netlify.app/",
    githubUrl: "https://github.com/neilgebhard/scratchpad-react",
  },

  {
    title: "Auth App",
    description:
      "Firebase Authentication, React, React Router, Reactstrap, localStorage",
    siteUrl: "https://neilsauthapp.netlify.app/",
    githubUrl: "https://github.com/neilgebhard/auth-react",
  },
  {
    title: "Aim Game",
    description: "React",
    siteUrl: "https://neilsaim.netlify.app/",
    githubUrl: "https://github.com/neilgebhard/aim-react",
  },
  {
    title: "Todo App",
    description: "AWS Amplify (auth & storage), React, Framer Motion, GraphQL",
    siteUrl: "https://main.dwuhwwtuh84l8.amplifyapp.com/",
    githubUrl: "https://github.com/neilgebhard/todo-app-react",
  },
  {
    title: "Hover Squares App",
    description: "React",
    siteUrl: "https://hoversquares.netlify.app/",
    githubUrl: "https://github.com/neilgebhard/squares-react",
  },
  {
    title: "Shopping Cart",
    description:
      "The Fake Store API, React, Redux Toolkit, React Router, and Material UI",
    siteUrl: "https://neilscartapp.netlify.app/",
    githubUrl: "http://github.com/neilgebhard/cart-react",
  },
];

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Neil Gebhard's Porfolio</title>
        <meta name="description" content="The portfolio of Neil Gebhard"></meta>
      </Head>
      <section className="max-w-3xl mx-auto">
        <h1 className="text-5xl tracking-tight font-extrabold my-4">
          Portfolio
        </h1>
        {portfolio.map((item) => (
          <article>
            <h2 className="text-2xl my-4">{item.title}</h2>
            <a href={item.githubUrl}>Github</a>
            <a href={item.siteUrl} className="ml-3">
              Demo
            </a>
            <p>{item.description}</p>
            <p>{item.used}</p>
            {item.features && <p>{item.features}</p>}
            {item.notes && <p>{item.notes}</p>}
          </article>
        ))}
      </section>
      <section className="max-w-3xl mx-auto">
        <h1>Small side projects</h1>
        {projects.map((item) => (
          <article>
            <h2>
              <a href={item.siteUrl}>{item.title}</a>
            </h2>
            <a href={item.githubUrl}>
              <i className="icon brands fa-github"></i> Github
            </a>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
