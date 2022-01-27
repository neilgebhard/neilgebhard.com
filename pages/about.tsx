import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { BiCog } from "react-icons/bi";
import {
  SiCss3,
  SiExpress,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";

const skills = [
  {
    label: "React",
    icon: <SiReact size="2rem" />,
  },
  {
    label: "JavaScript",
    icon: <SiJavascript size="2rem" />,
  },
  {
    label: "HTML",
    icon: <SiHtml5 size="2rem" />,
  },
  {
    label: "CSS",
    icon: <SiCss3 size="2rem" />,
  },
  {
    label: "Node.js",
    icon: <SiNodedotjs size="2rem" />,
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs size="2rem" />,
  },
  {
    label: "Git",
    icon: <SiGithub size="2rem" />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size="2rem" />,
  },
  {
    label: "VSCode",
    icon: <SiVisualstudiocode size="2rem" />,
  },
  {
    label: "Rest",
    icon: <BiCog size="2rem" />,
  },
  {
    label: "GraphQL",
    icon: <SiGraphql size="2rem" />,
  },
  {
    label: "MongoDB",
    icon: <SiMongodb size="2rem" />,
  },
  {
    label: "SQL",
    icon: <SiPostgresql size="2rem" />,
  },
  {
    label: "JSON Web token",
    icon: <SiJsonwebtokens size="2rem" />,
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | Neil Gebhard</title>
        <meta name="description" content="An about of Neil Gebhard"></meta>
      </Head>
      <h1>About</h1>
      <motion.section
        initial={{ scale: 0.99, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <p>
          I'm a <strong>frontend engineer</strong> specializing in React. I've
          been writing code for about 8 years (professionally for 4 of those). I
          aim to write code that is simple, straightforward, and elegant. I can
          leverage cloud services in my web applications to create a full user
          experience. I'm currently living in Saipan, USA.
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
        <div className="text-2xl font-bold">
          Bachelor of Science: Computer Science
        </div>
        <div className="text-2xl">Portland State University</div>
        <div className="text-neutral-600">2011 - 2014</div>
        <div className="text-neutral-600">Cum laude</div>
      </motion.section>
      <h2>Skills</h2>
      <motion.section
        initial={{ scale: 0.99, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-0"
      >
        <ul className="flex flex-wrap gap-x-6">
          {skills.map(({ label, icon }) => (
            <li className="flex flex-col items-center flex-1">
              <div className="text-center">{icon}</div>
              <div className="text-center">{label}</div>
            </li>
          ))}
        </ul>
      </motion.section>
    </>
  );
}
