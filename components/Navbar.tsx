import { useTheme } from 'next-themes'
import Link from 'next/link'
import { CgMoon, CgSun } from 'react-icons/cg'
import useMount from '../hooks/useMount'
import ActiveLink from './ActiveLink'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'

const links = [
  ['/', 'Home'],
  ['/projects', 'Projects'],
  ['/blog', 'Blog'],
  ['/about', 'About']
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { isMounted } = useMount()
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <nav className="flex items-center justify-between pt-6 pb-32 text-xl sm:text-2xl">
      <div className="flex items-center">
        <Link href="/">
          <a className="mr-8 text-2xl font-bold">Neil Gebhard</a>
        </Link>
        <div className="hidden items-center md:inline-flex">
          {links.map(([href, label], index) => (
            <ActiveLink
              activeClassName="underline decoration decoration-yellow-500 decoration-4"
              href={href}
              key={index}
            >
              <a className="nav-link font-normal">{label}</a>
            </ActiveLink>
          ))}
          {isMounted && (
            <button
              className="button ml-4 inline-flex h-11 w-11 items-center justify-center transition"
              aria-label="Toggle Dark Mode"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <CgSun size={25} /> : <CgMoon size={25} />}
            </button>
          )}
        </div>
      </div>
      <Link href="/contact">
        <a className="hidden rounded bg-yellow-400 px-4 py-2 text-xl font-semibold transition hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-600 md:inline">
          Contact me <span>→</span>
        </a>
      </Link>
      {/* Mobile Nav */}
      <button
        className="inline transition md:hidden"
        type="button"
        onClick={() => setShowMobileNav((show) => !show)}
      >
        <FiMenu size={30} />
      </button>
      {showMobileNav && (
        <ul className="absolute top-20 left-0 z-10 w-full space-y-4 bg-gray-200 px-6 py-4 dark:bg-gray-800 md:hidden">
          {links.map(([href, label], index) => (
            <li key={index}>
              <ActiveLink activeClassName="font-semibold" href={href}>
                <a>{label}</a>
              </ActiveLink>
            </li>
          ))}
          <li>
            <ActiveLink activeClassName="font-semibold" href="/contact">
              <a>Contact</a>
            </ActiveLink>
          </li>
          <li>
            <button
              className="flex cursor-pointer items-center gap-x-2"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <CgSun size={25} /> : <CgMoon size={25} />}{' '}
              Dark mode
            </button>
          </li>
        </ul>
      )}
    </nav>
  )
}
