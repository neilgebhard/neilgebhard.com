import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import Spotify from './Spotify'
import Link from 'next/link'
import ActiveLink from './ActiveLink'

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 mt-40 py-20 px-6">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-5 text-xl max-w-screen-xl mx-auto">
        <div className="space-y-5 text-center sm:text-left">
          <Link href="/">
            <a className="md:text-left font-semibold text-2xl">Neil Gebhard</a>
          </Link>
          <div className="p-0 m-0 list-none flex items-center justify-center sm:justify-start gap-x-4">
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
          <p>Built with Next.js & Tailwind</p>
          <div className="max-w-xs">
            <Spotify />
          </div>
        </div>
        <nav className="flex flex-col space-y-4 text-center sm:text-right">
          <ActiveLink activeClassName="font-bold" href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName="font-bold" href="/projects">
            <a>Projects</a>
          </ActiveLink>
          <ActiveLink activeClassName="font-bold" href="/blog">
            <a>Blog</a>
          </ActiveLink>
          <ActiveLink activeClassName="font-bold" href="/about">
            <a>About</a>
          </ActiveLink>
          <ActiveLink activeClassName="font-bold" href="/contact">
            <a>Contact</a>
          </ActiveLink>
        </nav>
      </div>
    </footer>
  )
}
