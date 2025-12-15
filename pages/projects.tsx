import React from 'react'
import Image from 'next/image'
import ReactTooltip from 'react-tooltip'
import {
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiGithub,
  SiNextdotjs,
  SiSupabase,
  SiPrisma,
  SiVercel,
  SiPlanetscale,
  SiStripe,
  SiOpenai,
  SiVitest,
  SiPostgresql
} from 'react-icons/si'
import { BiLink, BiLogoMeta } from 'react-icons/bi'
import Head from 'next/head'
import Container from '../components/Container'
import { FaAws } from 'react-icons/fa'

const projects = [
  {
    title: 'Instagram Clone',
    description:
      'A full-stack social media application replicating Instagram\'s core features, built with modern web technologies.',
    siteUrl: 'https://instagram-clone-neil.vercel.app',
    githubUrl: 'https://github.com/neilgebhard/instagram-clone',
    imgSrc: '/images/insta-clone-screenshot.png',
    icons: [
      <SiNextdotjs size="2rem" title="Next.js" className="mute" />,
      <SiTypescript size="2rem" title="TypeScript" className="mute" />,
      <SiPrisma size="2rem" title="Prisma" className="mute" />,
      <SiPostgresql size="2rem" title="PostgreSQL" className="mute" />,
      <FaAws size="2rem" title="AWS S3" className="mute" />,
      <SiVercel size="2rem" title="Vercel" className="mute" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" className="mute" />,
      <SiNodedotjs size="2rem" title="Node.js" className="mute" />,
      <SiVitest size="2rem" title="Vitest" className="mute" />,
    ]
  },
  {
    title: 'Reddit Clone',
    description:
      'A full-stack replica of Reddit’s core features like posts, votes, discussions, and auth flow. Built to showcase scalable UI and real-time interaction.',
    siteUrl: 'https://reddit-clone-next-supabase.vercel.app/',
    githubUrl: 'https://github.com/neilgebhard/reddit-next-supabase',
    imgSrc: '/images/reddit-laptop-frame.webp',
    icons: [
      <SiNextdotjs size="2rem" title="Next.js" className="mute" />,
      <SiTypescript size="2rem" title="TypeScript" className="mute" />,
      <SiSupabase size="2rem" title="Supabase" className="mute" />,
      <SiVercel size="2rem" title="Vercel" className="mute" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" className="mute" />,
      <SiNodedotjs size="2rem" title="Node.js" className="mute" />
    ]
  },
  
  {
    title: 'AI Therapist',
    description:
      'An AI-powered mental wellness chatbot offering confidential, conversational support. Built with user-centric design and responsive dialogue to simulate empathetic interaction.',
    siteUrl: 'https://ai-thera.vercel.app/',
    githubUrl: 'https://github.com/neilgebhard/ai-therapist',
    imgSrc: '/images/ai-therapist-laptop-frame.webp',
    icons: [
      <SiNextdotjs size="2rem" title="Next.js" className="mute" />,
      <SiTypescript size="2rem" title="TypeScript" className="mute" />,
      <SiPrisma size="2rem" title="Prisma" className="mute" />,
      <SiPlanetscale size="2rem" title="PlanetScale" className="mute" />,
      <SiVercel size="2rem" title="Vercel" className="mute" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" className="mute" />,
      <SiNodedotjs size="2rem" title="Node.js" className="mute" />,
      <BiLogoMeta
        size="2rem"
        title="Meta's Llama 2 13b Chat - GPTQ"
        className="mute"
      />
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
              <a href={siteUrl} target="_blank" rel="noreferrer">
                <Image
                  priority
                  src={imgSrc}
                  width="650"
                  height="383"
                  alt="Screenshot of a project"
                />
              </a>
              <div className="space-y-4 sm:w-5/6 md:w-4/6">
                <h2 className="mb-0 text-2xl font-semibold sm:text-3xl md:text-4xl">
                  {title}
                </h2>
                <p className="text-xl font-light leading-8">{description}</p>
                <div>
                  {icons?.map((icon, i) => (
                    <span className="ml-2 inline-block" key={i}>
                      <div className="inline-block" data-tip={icon.props.title}>
                        {icon}
                      </div>
                      <ReactTooltip place="top" type="dark" effect="solid" />
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    className="mute button inline-flex items-center gap-1 p-3 text-xl no-underline"
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiGithub size="1.4rem" className="mute" /> Github
                  </a>
                  <a
                    className="mute button ml-4 inline-flex items-center gap-1 p-3 text-xl no-underline"
                    href={siteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLink size="1.4rem" className="mute" /> Demo
                  </a>
                </div>
              </div>
            </article>
          )
        )}
      </section>
    </Container>
  )
}
