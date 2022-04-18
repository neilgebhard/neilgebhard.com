import React from 'react';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiCypress,
  SiTypescript,
  SiCss3,
  SiJest,
  SiGithub
} from 'react-icons/si';
import { BiLink } from 'react-icons/bi';
import Head from 'next/head';

const portfolio = [
  {
    title: 'Reddit Clone',
    description:
      'A full-stack clone of Reddit. The features include user authentication, posts, comments, replies, and upvoting/downvoting.',
    siteUrl: 'https://neilsreddit.herokuapp.com/',
    githubUrl: 'https://github.com/neilgebhard/mern-reddit',
    img: '/images/reddit-laptop-frame.png',
    icons: [
      <SiReact size="2rem" title="React" color="dimgrey" />,
      <SiTypescript size="2rem" title="TypeScript" color="dimgrey" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" color="dimgrey" />,
      <SiNodedotjs size="2rem" title="Node.js" color="dimgrey" />,
      <SiExpress size="2rem" title="Express.js" color="dimgrey" />,
      <SiMongodb size="2rem" title="MongoDB" color="dimgrey" />,
      <SiCypress size="2rem" title="Cypress" color="dimgrey" />
    ]
  },
  {
    title: 'Twitter Clone',
    used: 'React, Express, MongoDB, Node.js, JSON Web Tokens, Tailwind CSS',
    description:
      'A full-stack clone of Twitter. The features include user authentication, tweets, follows, and likes.',
    siteUrl: 'https://neilstwitter.herokuapp.com/',
    githubUrl: 'https://github.com/neilgebhard/mern-twitter',
    img: '/images/twitter-laptop-frame.png',
    icons: [
      <SiReact size="2rem" title="React" color="dimgrey" />,
      <SiTypescript size="2rem" title="TypeScript" color="dimgrey" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" color="dimgrey" />,
      <SiNodedotjs size="2rem" title="Node.js" color="dimgrey" />,
      <SiExpress size="2rem" title="Express.js" color="dimgrey" />,
      <SiMongodb size="2rem" title="MongoDB" color="dimgrey" />,
      <SiJest size="2rem" title="Jest" color="dimgrey" />
    ]
  },
  {
    title: 'Movie App',
    description:
      'A responsive web app for discovering and exploring movies utilizing The Movie Database API.',
    siteUrl: 'https://neilsmovieapp.netlify.app/',
    githubUrl: 'https://github.com/neilgebhard/movie-app-react',
    img: '/images/movie-laptop-frame.png',
    icons: [
      <SiReact size="2rem" title="React" color="dimgrey" />,
      <SiTypescript size="2rem" title="TypeScript" color="dimgrey" />,
      <SiCss3 size="2rem" title="CSS Modules" color="dimgrey" />,
      <SiJest size="2rem" title="Jest" color="dimgrey" />
    ]
  }
];

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Neil Gebhard</title>
        <meta name="description" content="The portfolio of Neil Gebhard"></meta>
      </Head>
      <section>
        <h1>Portfolio</h1>
        {portfolio.map((item, i) => (
          <motion.article
            className="flex flex-col sm:flex-row items-center gap-x-4 mb-20"
            initial={{ scale: 0.99, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={i}
          >
            <a href={item.siteUrl} target="_blank" rel="noreferrer">
              <Image
                priority
                src={item.img}
                width="650"
                height="383"
                alt="Screenshot of portfolio site"
              ></Image>
            </a>
            <div className="sm:w-5/6 md:w-4/6">
              <h2>{item.title}</h2>
              <a
                className="button bg-jungle"
                href={item.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub size="1.4rem" /> Github
              </a>
              <a
                className="button ml-4"
                href={item.siteUrl}
                target="_blank"
                rel="noreferrer"
              >
                <BiLink size="1.4rem" /> Demo
              </a>
              <p className="mb-4">{item.description}</p>
              {item.icons?.map((icon, i) => {
                return (
                  <span key={i} className="ml-2 inline-block">
                    <div className="inline-block" data-tip={icon.props.title}>
                      {icon}
                    </div>
                    <ReactTooltip place="top" type="dark" effect="solid" />
                  </span>
                );
              })}
            </div>
          </motion.article>
        ))}
      </section>
    </>
  );
}
