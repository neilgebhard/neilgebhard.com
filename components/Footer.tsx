import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import Spotify from './Spotify'
import Link from 'next/link'
import ActiveLink from './ActiveLink'

export default function Footer() {
  return (
    <footer className="mt-40 bg-gray-200 py-20 px-6 dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center space-y-5 text-xl sm:flex-row sm:justify-between">
        <div className="space-y-5 text-center sm:text-left">
          <Link href="/">
            <a className="mute text-2xl font-semibold md:text-left">
              Neil Gebhard
            </a>
          </Link>
          <div className="m-0 flex list-none items-center justify-center gap-x-4 p-0 sm:justify-start">
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
              <a
                href="mailto:neilgebhard@gmail.com"
                aria-label="Link to My Email"
              >
                <MdEmail
                  size="1.75rem"
                  title="E-mail"
                  className="mute hover:text-google"
                />
              </a>
            </div>
          </div>
          <p>
            <Link href="https://github.com/neilgebhard/neilgebhard.com">
              <a className="mute hover:underline" target="_blank">
                Built with Next.js & Tailwind
              </a>
            </Link>
          </p>
          <div className="max-w-xs">
            <Spotify />
          </div>
        </div>
        <nav className="flex flex-col space-y-4 text-center sm:text-right">
          <ActiveLink activeClassName="font-bold" href="/">
            <a className="mute">Home</a>
          </ActiveLink>
          <ActiveLink activeClassName="font-bold" href="/projects">
            <a className="mute">Projects</a>
          </ActiveLink>
          <ActiveLink activeClassName="font-bold" href="/blog">
            <a className="mute">Blog</a>
          </ActiveLink>
          <ActiveLink activeClassName="font-bold" href="/about">
            <a className="mute">About</a>
          </ActiveLink>
          <ActiveLink activeClassName="font-bold" href="/contact">
            <a className="mute">Contact</a>
          </ActiveLink>
        </nav>
      </div>
    </footer>
  )
}
