import { MailIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { motion } from "framer-motion";

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

// const links = [
//   ["Blog", "/blog", "pencil"],
//   ["Portfolio", "/portfolio", "book"],
//   ["Github", "https://github.com/neilgebhard", "wizard_hat"],
//   ["E-mail", "mailto:neilgebhard@gmail.com", "letter"],
// ];

export default function Header() {
  return (
    <motion.section
      className="text-xl font-mono py-20"
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true }}
    >
      <h1 className="text-8xl text-center text-animate mt-0 font-sans tracking-tight">
        Hi, I'm{" "}
        <div className="inline-flex flex-col items-center justify-center">
          <span> Neil</span>
          <small className="text-4xl tracking-normal">Gebhard</small>
        </div>
      </h1>
      <div className="text-center mb-20">
        <span className="sm:bg-bleu sm:text-white p-2 rounded-md lg:text-3xl">
          <strong>Frontend Engineer</strong>{" "}
          <span className="block sm:inline">with fullstack chops</span>
        </span>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg p-5 rounded-md">
        <div className="flex items-center justify-center gap-8 ">
          <div className="hidden lg:block">
            <Image
              src="/svg/icons/avatar.svg"
              height={220}
              width={220}
              alt="Avatar"
            />
          </div>
          <div className="text-center md:text-left">
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
        <p className="text-center my-10">
          <em>Looking for a full-time remote position!</em> 😊
        </p>
        <div className="text-center">
          <a
            className="bg-bleu text-white text-xl font-bold px-4 py-2 rounded-lg inline-flex items-center justify-center gap-x-3"
            href="mailto:neilgebhard@gmail.com"
          >
            <MailIcon className="h-12" /> Hire me!
          </a>
        </div>
      </div>
      {/* <ul className="grid grid-cols-2 sm:flex items-center justify-center gap-10 list-none pl-0">
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
      </ul> */}
    </motion.section>
  );
}
