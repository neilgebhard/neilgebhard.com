import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import { BiCog } from 'react-icons/bi'
import {
  SiAndroid,
  SiCplusplus,
  SiCss3,
  SiCypress,
  SiExpress,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiIos,
  SiJava,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode
} from 'react-icons/si'
import Container from '../components/Container'

const current = [
  ['React', <SiReact size="2rem" />],
  ['JavaScript', <SiJavascript size="2rem" />],
  ['TypeScript', <SiTypescript size="2rem" />],
  ['HTML', <SiHtml5 size="2rem" />],
  ['CSS', <SiCss3 size="2rem" />],
  ['Node.js', <SiNodedotjs size="2rem" />],
  ['Express', <SiExpress size="2rem" />],
  ['Next.js', <SiNextdotjs size="2rem" />],
  ['Git', <SiGithub size="2rem" />],
  ['Tailwind', <SiTailwindcss size="2rem" />],
  ['VSCode', <SiVisualstudiocode size="2rem" />],
  ['Rest', <BiCog size="2rem" />],
  ['GraphQL', <SiGraphql size="2rem" />],
  ['MongoDB', <SiMongodb size="2rem" />],
  ['SQL', <SiPostgresql size="2rem" />],
  ['Cypress', <SiCypress size="2rem" />],
  ['React Testing Library', <SiJest size="2rem" />],
  ['JSON Web token', <SiJsonwebtokens size="2rem" />]
]

const past = [
  ['Java', <SiJava size="2rem" />],
  ['Python', <SiPython size="2rem" />],
  ['C++', <SiCplusplus size="2rem" />],
  ['Swift', <SiSwift size="2rem" />],
  ['iOS', <SiIos size="2rem" />],
  ['Android', <SiAndroid size="2rem" />]
]

const IconGrid = ({ icons }) => {
  return (
    <motion.section
      initial={{ scale: 0.99, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-0 max-w-xl"
    >
      <ul className="pl-0 gap-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
        {icons.map(([label, icon], index) => (
          <li key={index} className="flex flex-col items-center flex-1">
            <div>{icon}</div>
            <div className="text-center">{label}</div>
          </li>
        ))}
      </ul>
    </motion.section>
  )
}

export default function About() {
  return (
    <Container>
      <Head>
        <title>About | Neil Gebhard</title>
        <meta name="description" content="An about of Neil Gebhard"></meta>
      </Head>
      <section>
        <h1>About</h1>
        <motion.section
          initial={{ scale: 0.99, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl">
            I&apos;m a software engineer currently residing in a small island in
            the Pacific called Saipan, a U.S. territory with only about 50,000
            people. I&apos;ve been writing code for about 8 years
            (professionally for 4 of those). I write code guided by pragmatic
            software engineering practices and principles. My current favorite
            stack is Next.js, TypeScript, Tailwind, and Prisma. During my free
            time, I like to play soccer and listen to podcasts.
          </p>
        </motion.section>
        <motion.section
          initial={{ scale: 0.99, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-0 mb-16"
        >
          <div className="text-xl font-semibold">
            Bachelor of Science: Computer Science
          </div>
          <div className="text-xl">Portland State University • 2014</div>
        </motion.section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">Current</h2>
        <IconGrid icons={current} />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">Before</h2>
        <IconGrid icons={past} />
      </section>
    </Container>
  )
}
