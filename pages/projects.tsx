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
  SiOpenai
} from 'react-icons/si'
import { BiLink, BiLogoMeta } from 'react-icons/bi'
import Head from 'next/head'
import Container from '../components/Container'

const projects = [
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
    title: 'E-commerce Store and Admin',
    description:
      'A full-stack e-commerce platform with dual interfaces: a customer-facing store and an admin dashboard for managing products, orders, and users. Built for modularity and real-world scale.',
    siteUrl: 'https://ecommerce-store-nine-eosin.vercel.app/',
    githubUrl: 'https://github.com/neilgebhard/ecommerce-admin',
    imgSrc: '/images/ecomm-laptop-frame.webp',
    icons: [
      <SiNextdotjs size="2rem" title="Next.js" className="mute" />,
      <SiTypescript size="2rem" title="TypeScript" className="mute" />,
      <SiPrisma size="2rem" title="Prisma" className="mute" />,
      <SiPlanetscale size="2rem" title="PlanetScale" className="mute" />,
      <SiVercel size="2rem" title="Vercel" className="mute" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" className="mute" />,
      <SiNodedotjs size="2rem" title="Node.js" className="mute" />,
      <SiStripe size="2rem" title="Stripe" className="mute" />
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
  // {
  //   title: 'Real-time Chat App',
  //   description:
  //     'A real-time chat application that allows users to create and join chat rooms and send messages to each other.',
  //   siteUrl: 'https://chat-app-neil.vercel.app/',
  //   githubUrl: 'https://github.com/neilgebhard/chat-app',
  //   imgSrc: '/images/chat-laptop-frame.webp',
  //   icons: [
  //     <SiNextdotjs size="2rem" title="Next.js" className="mute" />,
  //     <SiTypescript size="2rem" title="TypeScript" className="mute" />,
  //     <SiPrisma size="2rem" title="Prisma" className="mute" />,
  //     <SiSupabase size="2rem" title="Supabase" className="mute" />,
  //     <SiVercel size="2rem" title="Vercel" className="mute" />,
  //     <SiTailwindcss size="2rem" title="Tailwind CSS" className="mute" />,
  //     <SiNodedotjs size="2rem" title="Node.js" className="mute" />
  //   ]
  // }
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
