import { MailIcon } from "@heroicons/react/solid";
import Image from "next/image";

const techStack = [
  {
    position: "Front-end",
    skills: "React, TypeScript",
  },
  {
    position: "Back-end",
    skills: "Node.js, Express, MongoDB",
  },
  {
    position: "Testing",
    skills: "React Testing Library, Cypress",
  },
];

export default function Header() {
  return (
    <section className="text-xl font-mono pt-28 pb-20">
      <h1 className="hidden">Neil Gebhard</h1>
      <div className="text-8xl text-center text-animate mt-0 font-sans tracking-tight">
        Hi, I'm{" "}
        <div className="inline-flex flex-col items-center justify-center">
          <span> Neil</span>
          <small className="text-4xl tracking-normal">Gebhard</small>
        </div>
      </div>
    </section>
  );
}
