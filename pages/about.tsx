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
  SiSupabase,
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
  ['Supabase', <SiSupabase size="2rem" />],
  ['Tailwind', <SiTailwindcss size="2rem" />],
  ['PostreSQL', <SiPostgresql size="2rem" />],
  ['MongoDB', <SiMongodb size="2rem" />],
  ['Node', <SiNodedotjs size="2rem" />],
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
    <ul className="grid grid-cols-4 gap-6 space-y-0 pl-0 sm:grid-cols-8 lg:grid-cols-5 xl:grid-cols-8">
      {icons.map(([label, icon], index) => (
        <li key={index} className="flex flex-1 flex-col items-center">
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
      <h1 className="h1-underline mb-14 text-3xl font-bold md:text-4xl">
        About
      </h1>
      <div className="flex flex-col gap-x-10 lg:flex-row">
        <div className="flex-1">
          <header className="relative">
            <div className="mb-10 flex items-center gap-5">
              <Image
                className="rounded-full"
                src="/images/portrait.webp"
                alt="Portrait of Neil Gebhard"
                width={100}
                height={100}
                priority
              />
              <div className="text-3xl font-extralight tracking-tight sm:text-5xl">
                Hi, I&apos;m{' '}
                <span className="my-0 font-bold">Neil Gebhard</span>
              </div>
            </div>
          </header>
          <section className="space-y-8 text-xl">
            <p>
              I am a professional software engineer based in Saipan, USA, with
              over 8 years of coding experience. My ultimate goal is to develop
              a game-changing application that can positively impact millions of
              lives. Currently, my primary focus is on mastering React, Next.js,
              TypeScript, Tailwind, Supabase, and PostgreSQL to create highly
              functional and robust software solutions.
            </p>
          </section>
          <section className="mt-16 mb-8 space-y-0">
            <h2 className="text-2xl font-medium md:text-3xl">Degree</h2>
            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-center">
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
            <h2 className="text-xl font-medium sm:text-xl md:text-2xl">
              Current Stack
            </h2>
            <IconGrid icons={current} />
          </section>
          <section>
            <h2 className="text-xl font-medium sm:text-xl md:text-2xl">
              Previously
            </h2>
            <IconGrid icons={past} />
          </section>
        </div>
      </div>
    </Container>
  )
}
