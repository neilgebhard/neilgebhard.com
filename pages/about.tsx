import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import {
  SiAndroid,
  SiCplusplus,
  SiCss3,
  SiCypress,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiIos,
  SiJava,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
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
  ['JavaScript', <SiHtml5 size="2rem" />],
  ['HTML', <SiHtml5 size="2rem" />],
  ['CSS', <SiCss3 size="2rem" />],
  ['Next.js', <SiNextdotjs size="2rem" />],
  ['TypeScript', <SiTypescript size="2rem" />],
  ['Prisma', <SiPrisma size="2rem" />],
  ['Tailwind', <SiTailwindcss size="2rem" />],
  ['PostreSQL', <SiPostgresql size="2rem" />],
  ['MongoDB', <SiMongodb size="2rem" />],
  ['Node', <SiNodedotjs size="2rem" />],
  ['Express', <SiExpress size="2rem" />],
  ['Cypress', <SiCypress size="2rem" />],
  ['React Testing Library', <SiJest size="2rem" />],
  ['Git', <SiGithub size="2rem" />],
  ['VSCode', <SiVisualstudiocode size="2rem" />]
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
    <ul className="pl-0 gap-6 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-5 xl:grid-cols-8 space-y-0">
      {icons.map(([label, icon], index) => (
        <li key={index} className="flex flex-col items-center flex-1">
          <div>{icon}</div>
          <div className="text-center">{label}</div>
        </li>
      ))}
    </ul>
  )
}

export default function About() {
  return (
    <Container>
      <Head>
        <title>About | Neil Gebhard</title>
        <meta name="description" content="An about of Neil Gebhard"></meta>
      </Head>
      <h1 className="text-3xl md:text-4xl mb-14 font-bold h1-underline">
        About
      </h1>
      <div className="flex flex-col lg:flex-row gap-x-10">
        <div className="flex-1">
          <header className="relative">
            <div className="flex items-center gap-5 mb-10">
              <Image
                className="rounded-full"
                src="/images/portrait.webp"
                alt="Portrait of Neil Gebhard"
                width={100}
                height={100}
                priority
              />
              <div className="text-3xl sm:text-5xl font-extralight tracking-tight">
                Hi, I&apos;m{' '}
                <span className="my-0 font-bold">Neil Gebhard</span>
              </div>
            </div>
          </header>
          <section className="text-xl space-y-8">
            <p>
              I&apos;m a software engineer in Saipan, USA. I&apos;ve been
              writing code for about 8 years (professionally for 4). My ambition
              is to create something used by millions. My current focus is the
              web with Next.js, TypeScript, Tailwind, Prisma, and PostgreSQL /
              MongoDB.
            </p>
          </section>
          <section className="space-y-0 mt-16 mb-8">
            <h2 className="text-2xl md:text-3xl font-medium">Degree</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-4">
              <FaGraduationCap size={40} />
              <div>
                <div className="text-xl font-semibold">
                  Bachelor of Science: Computer Science
                </div>
                <div className="text-xl">Portland State University • 2014</div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex-1">
          <section>
            <h2 className="text-xl sm:text-xl md:text-2xl font-medium">
              Current Stack
            </h2>
            <IconGrid icons={current} />
          </section>
          <section>
            <h2 className="text-xl sm:text-xl md:text-2xl font-medium">
              Previously
            </h2>
            <IconGrid icons={past} />
          </section>
        </div>
      </div>
    </Container>
  )
}
