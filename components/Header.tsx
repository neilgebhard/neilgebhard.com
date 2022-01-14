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
      {/* <div className="text-center mb-20">
        <span className="sm:bg-bleu sm:text-white p-2 rounded-md text-3xl md:text-3xl lg:text-3xl">
          <strong>a Frontend Engineer</strong>{" "}
        </span>
      </div> */}

      {/* <div className="max-w-3xl mx-auto bg-white shadow-lg p-5 md:rounded-md">
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
            className="bg-bleu text-white text-xl font-bold px-4 py-2 rounded-lg inline-flex items-center justify-center gap-x-3  shadow-lg active:shadow-md hover:shadow-xl hover:no-underline"
            href="mailto:neilgebhard@gmail.com"
          >
            <MailIcon className="h-12" /> Let's talk
          </a>
        </div>
      </div> */}
    </section>
  );
}
