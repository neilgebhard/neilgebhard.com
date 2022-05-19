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
    <nav className="text-xl sm:text-2xl pt-6 pb-32 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <a className="font-bold mr-8 text-2xl">Neil Gebhard</a>
        </Link>
        <div className="hidden md:inline-flex items-center">
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
              className="ml-4 w-11 h-11 inline-flex items-center justify-center button transition"
              aria-label="Toggle Dark Mode"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <CgSun size={25} /> : <CgMoon size={25} />}
            </button>
          )}
        </div>
      </div>
      <Link href="/contact">
        <a className="hidden md:inline text-xl bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-600 px-4 py-2 rounded font-semibold transition">
          Contact me <span>→</span>
        </a>
      </Link>
      {/* Mobile Nav */}
      <button
        className="inline md:hidden transition"
        type="button"
        onClick={() => setShowMobileNav((show) => !show)}
      >
        <FiMenu size={30} />
      </button>
      {showMobileNav && (
        <ul className="md:hidden absolute top-20 left-0 w-full px-6 space-y-4 py-4 bg-gray-200 dark:bg-gray-800 z-10">
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
          <li
            className="cursor-pointer flex items-center gap-x-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <CgSun size={25} /> : <CgMoon size={25} />} Dark
            mode
          </li>
        </ul>
      )}
    </nav>
  )
}
