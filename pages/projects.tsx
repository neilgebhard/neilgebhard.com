import React from 'react'
import Image from 'next/image'
import ReactTooltip from 'react-tooltip'
import { motion } from 'framer-motion'
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
} from 'react-icons/si'
import { BiLink } from 'react-icons/bi'
import Head from 'next/head'
import Container from '../components/Container'

const projects = [
  {
    title: 'Reddit Clone',
    description:
      'A full-stack clone of Reddit. The features include user authentication, posts, comments, replies, and upvoting/downvoting.',
    siteUrl: 'https://neilsreddit.herokuapp.com/',
    githubUrl: 'https://github.com/neilgebhard/mern-reddit',
    img: '/images/reddit-laptop-frame.png',
    icons: [
      <SiReact size="2rem" title="React" color="mute" />,
      <SiTypescript size="2rem" title="TypeScript" color="mute" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" color="mute" />,
      <SiNodedotjs size="2rem" title="Node.js" color="mute" />,
      <SiExpress size="2rem" title="Express.js" color="mute" />,
      <SiMongodb size="2rem" title="MongoDB" color="mute" />,
      <SiCypress size="2rem" title="Cypress" color="mute" />
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
      <SiReact size="2rem" title="React" color="mute" />,
      <SiTypescript size="2rem" title="TypeScript" color="mute" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" color="mute" />,
      <SiNodedotjs size="2rem" title="Node.js" color="mute" />,
      <SiExpress size="2rem" title="Express.js" color="mute" />,
      <SiMongodb size="2rem" title="MongoDB" color="mute" />,
      <SiJest size="2rem" title="Jest" color="mute" />
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
      <SiReact size="2rem" title="React" color="mute" />,
      <SiTypescript size="2rem" title="TypeScript" color="mute" />,
      <SiCss3 size="2rem" title="CSS Modules" color="mute" />,
      <SiJest size="2rem" title="Jest" color="mute" />
    ]
  }
]

export default function Projects() {
  return (
    <Container>
      <Head>
        <title>Projects | Neil Gebhard</title>
        <meta name="description" content="Neil Gebhard's projects"></meta>
      </Head>
      <section>
        <h1>Projects</h1>
        {projects.map((item, i) => (
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
                alt="Screenshot of a project"
              ></Image>
            </a>
            <div className="sm:w-5/6 md:w-4/6">
              <h2>{item.title}</h2>
              <a
                className="mute button inline-flex items-center gap-1 text-lg p-2"
                href={item.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub size="1.4rem" className="mute" /> Github
              </a>
              <a
                className="mute button inline-flex items-center gap-1 text-lg p-2 ml-4 "
                href={item.siteUrl}
                target="_blank"
                rel="noreferrer"
              >
                <BiLink size="1.4rem" className="mute" /> Demo
              </a>
              <p>{item.description}</p>
              {item.icons?.map((icon, i) => {
                return (
                  <span key={i} className="ml-2 inline-block">
                    <div className="inline-block" data-tip={icon.props.title}>
                      {icon}
                    </div>
                    <ReactTooltip place="top" type="dark" effect="solid" />
                  </span>
                )
              })}
            </div>
          </motion.article>
        ))}
      </section>
    </Container>
  )
}
