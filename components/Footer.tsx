import Image from "next/image";
import { MailIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-10 items-center justify-center py-32">
      <a
        className="bg-bleu text-white text-xl font-bold px-4 py-2 rounded-lg flex items-center justify-center gap-x-3 shadow-lg active:shadow-md hover:shadow-xl hover:no-underline"
        href="mailto:neilgebhard@gmail.com"
      >
        <MailIcon className="h-12" /> Let's work together
      </a>
      <ul className="list-none flex items-center justify-center gap-x-4">
        <li>
          <a href="https://github.com/neilgebhard" target="_blank">
            <Image
              src="/svg/tech/github-icon.svg"
              height={40}
              width={40}
              alt="Github"
              className="shadow-2xl"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/neil_gebhard" target="_blank">
            <Image
              src="/svg/tech/twitter.svg"
              height={40}
              width={40}
              alt="Twitter"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/neilgebhard/" target="_blank">
            <Image
              src="/svg/tech/linkedin-icon.svg"
              height={40}
              width={40}
              alt="Linked In"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
