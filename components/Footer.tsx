import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-32 bg-gray-100 space-y-5">
      <ul className="list-none flex items-center justify-center gap-x-4">
        <li>
          <a href="https://github.com/neilgebhard" target="_blank">
            <SiGithub size="1.5rem" title="GitHub" color="black" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/neil_gebhard" target="_blank">
            <SiTwitter size="1.5rem" title="Twitter" color="black" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/neilgebhard/" target="_blank">
            <SiLinkedin size="1.5rem" title="LinkedIn" color="black" />
          </a>
        </li>
        <li>
          <a href="mailto:neilgebhard@gmail.com">
            <MdEmail size="1.75rem" title="E-mail" color="black" />
          </a>
        </li>
      </ul>
      <p>© Neil Gebhard 2022</p>
      <p>Built with Next.js & Tailwind</p>
    </footer>
  );
}
