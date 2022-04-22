import Link from 'next/link'
import { useTheme } from 'next-themes'
import { CgMoon, CgSun } from 'react-icons/cg'
import useMount from '../hooks/useMount'
import { useRouter } from 'next/router'
import ActiveLink from './ActiveLink'

const links = [
  ['/', 'Home'],
  ['/projects', 'Projects'],
  ['/about', 'About']
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { isMounted } = useMount()
  const { asPath, isReady } = useRouter()

  return (
    <nav className="text-xl sm:text-2xl pt-6 pb-10 flex justify-between items-center">
      <div className="space-x-0">
        {links.map(([href, label], index) => (
          <ActiveLink
            activeClassName="underline decoration decoration-yellow-600 dark:decoration-yellow-300 decoration-4"
            href={href}
            key={index}
          >
            <a className="nav-link font-bold">{label}</a>
          </ActiveLink>
        ))}
      </div>
      {isMounted && (
        <button
          className="w-9 h-9 flex items-center justify-center button"
          aria-label="Toggle Dark Mode"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <CgSun size={20} /> : <CgMoon size={20} />}
        </button>
      )}
    </nav>
  )
}
