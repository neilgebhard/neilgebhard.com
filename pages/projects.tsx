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
  SiGithub,
  SiNextdotjs,
  SiSupabase,
  SiPrisma,
  SiVercel
} from 'react-icons/si'
import { BiLink } from 'react-icons/bi'
import Head from 'next/head'
import Container from '../components/Container'

const projects = [
  {
    title: 'Open Market app',
    description:
      'A place where you can post items to buy and sell. This is a full stack app with Google OAuth, passwordless authentication, image uploading, and favoriting.',
    siteUrl: 'https://open-market.vercel.app/',
    githubUrl: 'https://github.com/neilgebhard/open-market',
    imgSrc: '/images/openmarket-laptop-frame.webp',
    icons: [
      <SiNextdotjs size="2rem" title="Next.js" className="mute" />,
      <SiTypescript size="2rem" title="TypeScript" className="mute" />,
      <SiSupabase size="2rem" title="Supabase" className="mute" />,
      <SiPrisma size="2rem" title="Prisma" className="mute" />,
      <SiVercel size="2rem" title="Vercel" className="mute" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" className="mute" />,
      <SiNodedotjs size="2rem" title="Node.js" className="mute" />
    ]
  },
  {
    title: 'Reddit clone',
    description:
      'A clone of Reddit with features like user authentication, posts, comments, replies, and upvoting/downvoting.',
    siteUrl: 'https://neilsreddit.herokuapp.com/',
    githubUrl: 'https://github.com/neilgebhard/mern-reddit',
    imgSrc: '/images/reddit-laptop-frame.webp',
    icons: [
      <SiReact size="2rem" title="React" className="mute" />,
      <SiTypescript size="2rem" title="TypeScript" className="mute" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" className="mute" />,
      <SiNodedotjs size="2rem" title="Node.js" className="mute" />,
      <SiExpress size="2rem" title="Express.js" className="mute" />,
      <SiMongodb size="2rem" title="MongoDB" className="mute" />,
      <SiCypress size="2rem" title="Cypress" className="mute" />
    ]
  },
  {
    title: 'Twitter clone',
    used: 'React, Express, MongoDB, Node.js, JSON Web Tokens, Tailwind CSS',
    description:
      'A clone of Twitter with user authentication, tweets, follows, and likes.',
    siteUrl: 'https://neilstwitter.herokuapp.com/',
    githubUrl: 'https://github.com/neilgebhard/mern-twitter',
    imgSrc: '/images/twitter-laptop-frame.webp',
    icons: [
      <SiReact size="2rem" title="React" className="mute" />,
      <SiTypescript size="2rem" title="TypeScript" className="mute" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" className="mute" />,
      <SiNodedotjs size="2rem" title="Node.js" className="mute" />,
      <SiExpress size="2rem" title="Express.js" className="mute" />,
      <SiMongodb size="2rem" title="MongoDB" className="mute" />,
      <SiJest size="2rem" title="Jest" className="mute" />
    ]
  },
  {
    title: 'Movie app',
    description: 'A web app for discovering and exploring movies.',
    siteUrl: 'https://neilsmovieapp.netlify.app/',
    githubUrl: 'https://github.com/neilgebhard/movie-app-react',
    imgSrc: '/images/movie-laptop-frame.webp',
    icons: [
      <SiReact size="2rem" title="React" className="mute" />,
      <SiTypescript size="2rem" title="TypeScript" className="mute" />,
      <SiCss3 size="2rem" title="CSS Modules" className="mute" />,
      <SiJest size="2rem" title="Jest" className="mute" />
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
        <h1 className="h1-underline mb-14 text-3xl font-bold md:text-4xl">
          Projects
        </h1>
        {projects.map(
          ({ siteUrl, imgSrc, title, githubUrl, description, icons }, i) => (
            <article
              className={`flex flex-col sm:flex-row ${
                i % 2 === 1 && 'sm:flex-row-reverse'
              } mb-20 items-center gap-x-4`}
              key={i}
            >
              <motion.a
                href={siteUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  priority
                  src={imgSrc}
                  width="650"
                  height="383"
                  alt="Screenshot of a project"
                />
              </motion.a>
              <div className="space-y-4 sm:w-5/6 md:w-4/6">
                <motion.h2
                  className="mb-0 text-2xl font-semibold sm:text-3xl md:text-4xl"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0 }}
                  viewport={{ once: true }}
                >
                  {title}
                </motion.h2>
                <motion.p
                  className="text-xl font-light leading-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {icons?.map((icon, i) => (
                    <span className="ml-2 inline-block" key={i}>
                      <div className="inline-block" data-tip={icon.props.title}>
                        {icon}
                      </div>
                      <ReactTooltip place="top" type="dark" effect="solid" />
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    className="mute button inline-flex items-center gap-1 p-3 text-xl no-underline"
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiGithub size="1.4rem" className="mute" /> Github
                  </motion.a>
                  <a
                    className="mute button ml-4 inline-flex items-center gap-1 p-3 text-xl no-underline"
                    href={siteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLink size="1.4rem" className="mute" /> Demo
                  </a>
                </motion.div>
              </div>
            </article>
          )
        )}
      </section>
    </Container>
  )
}
