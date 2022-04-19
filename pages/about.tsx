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

const skills = [
  {
    label: 'React',
    icon: <SiReact size="2rem" />
  },
  {
    label: 'JavaScript',
    icon: <SiJavascript size="2rem" />
  },
  {
    label: 'TypeScript',
    icon: <SiTypescript size="2rem" />
  },
  {
    label: 'HTML',
    icon: <SiHtml5 size="2rem" />
  },
  {
    label: 'CSS',
    icon: <SiCss3 size="2rem" />
  },
  {
    label: 'Node.js',
    icon: <SiNodedotjs size="2rem" />
  },
  {
    label: 'Express',
    icon: <SiExpress size="2rem" />
  },
  {
    label: 'Next.js',
    icon: <SiNextdotjs size="2rem" />
  },
  {
    label: 'Git',
    icon: <SiGithub size="2rem" />
  },
  {
    label: 'Tailwind',
    icon: <SiTailwindcss size="2rem" />
  },
  {
    label: 'VSCode',
    icon: <SiVisualstudiocode size="2rem" />
  },
  {
    label: 'Rest',
    icon: <BiCog size="2rem" />
  },
  {
    label: 'GraphQL',
    icon: <SiGraphql size="2rem" />
  },
  {
    label: 'MongoDB',
    icon: <SiMongodb size="2rem" />
  },
  {
    label: 'SQL',
    icon: <SiPostgresql size="2rem" />
  },
  {
    label: 'Cypress',
    icon: <SiCypress size="2rem" />
  },
  {
    label: 'React Testing Library',
    icon: <SiJest size="2rem" />
  },
  {
    label: 'JSON Web token',
    icon: <SiJsonwebtokens size="2rem" />
  }
]

const other = [
  {
    label: 'Java',
    icon: <SiJava size="2rem" />
  },
  {
    label: 'Python',
    icon: <SiPython size="2rem" />
  },
  {
    label: 'C++',
    icon: <SiCplusplus size="2rem" />
  },
  {
    label: 'Swift',
    icon: <SiSwift size="2rem" />
  },
  {
    label: 'iOS',
    icon: <SiIos size="2rem" />
  },
  {
    label: 'Android',
    icon: <SiAndroid size="2rem" />
  }
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
        {icons.map(({ label, icon }, index) => (
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
            Hello! I'm a software engineer based in Saipan, USA. I've been
            writing code for about 8 years (professionally for 4 of those). I
            aim to write code that is simple, straightforward, and easy to
            change. During my free time, I play soccer and listen to podcasts.
          </p>
        </motion.section>
        <h2>Education</h2>
        <motion.section
          initial={{ scale: 0.99, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-0"
        >
          <div className="text-xl font-semibold">
            Bachelor of Science: Computer Science
          </div>
          <div className="text-xl">Portland State University • 2014</div>
        </motion.section>
        <h2>Current Skills</h2>
        <IconGrid icons={skills} />
        <h2>Past Experience</h2>
        <IconGrid icons={other} />
      </section>
    </Container>
  )
}
