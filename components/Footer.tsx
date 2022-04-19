import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-20 space-y-5">
      <ul className="p-0 m-0 list-none flex items-center justify-center gap-x-4">
        <li>
          <a
            href="https://github.com/neilgebhard"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to My GitHub"
          >
            <SiGithub
              size="1.5rem"
              title="GitHub"
              className="mute hover:text-gray-500"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/neil_gebhard"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to My Twitter"
          >
            <SiTwitter
              size="1.5rem"
              title="Twitter"
              className="mute hover:text-twitter"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/neilgebhard/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to My LinkedIn"
          >
            <SiLinkedin
              size="1.5rem"
              title="LinkedIn"
              className="mute hover:text-linked-in"
            />
          </a>
        </li>
        <li>
          <a href="mailto:neilgebhard@gmail.com" aria-label="Link to My Email">
            <MdEmail
              size="1.75rem"
              title="E-mail"
              className="mute hover:text-google"
            />
          </a>
        </li>
      </ul>
      <p>© Neil Gebhard 2022</p>
      <p>Built with Next.js & Tailwind</p>
    </footer>
  )
}
