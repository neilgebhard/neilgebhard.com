import Head from "next/head";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";

const techStack = [
  {
    position: "Front-end",
    skills: "React, Next.js, TypeScript, TailwindCSS",
  },
  {
    position: "Back-end",
    skills: "Node.js, Express, MongoDB",
  },
  {
    position: "Testing",
    skills: "Jest, React Testing Library, Cypress",
  },
];

const links = [
  ["Blog", "/blog", "pencil"],
  ["Portfolio", "/portfolio", "book"],
  ["Github", "https://github.com/neilgebhard", "wizard_hat"],
  ["E-mail", "mailto:neilgebhard@gmail.com", "letter"],
];

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-wallpaper">
      <Head>
        <title>Neil Gebhard</title>
        <meta
          name="description"
          content="The personal website for Neil Gebhard"
        ></meta>
      </Head>
      <section className="text-xl font-mono my-20">
        <h1 className="text-8xl text-center text-animate mt-0 font-sans">
          Hi, I'm Neil.
        </h1>
        <div className="flex justify-center gap-8">
          <div className="hidden lg:block">
            <Image
              src="/svg/avatar.svg"
              height={220}
              width={220}
              alt="Avatar"
            />
          </div>
          <div className="text-center md:text-left">
            <p>
              <strong>Frontend Engineer</strong>{" "}
              <span className="block sm:inline">with fullstack chops</span>
            </p>
            <ul className="lg:block list-none pl-0 md:list-disc md:pl-5">
              {techStack.map((item, i) => (
                <li className="mb-5 md:mb-0" key={i}>
                  <div className="font-bold md:inline">{item.position}</div>
                  <span className="hidden md:inline"> -</span> {item.skills}
                </li>
              ))}
            </ul>
            <p>
              B.S. in <strong>Computer Science</strong>
            </p>
          </div>
        </div>
        <div className="text-center my-20">
          <p>Looking for a full-time remote position!</p>
        </div>
        <ul className="grid grid-cols-2 sm:flex items-center justify-center gap-10 list-none pl-0">
          {links.map(([title, url, svg], i) => (
            <li
              key={i}
              className={
                i % 2 === 0 ? "justify-self-end sm:justify-self-auto" : ""
              }
            >
              <a
                className="inline-flex flex-col hover:-translate-y-1 transition-transform"
                href={url}
              >
                <Image
                  className="inline"
                  src={`/svg/${svg}.svg`}
                  height={50}
                  width={50}
                  alt={svg}
                />
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
