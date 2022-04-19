import Link from 'next/link'
import { useTheme } from 'next-themes'
import { CgMoon, CgSun } from 'react-icons/cg'

const links = [
  { href: '/', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' }
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="text-xl sm:text-2xl pt-6 pb-10 flex justify-between items-center">
      <div className="space-x-3">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <a className="link font-bold">{link.label}</a>
          </Link>
        ))}
      </div>
      <button
        className="w-9 h-9 flex items-center justify-center button"
        aria-label="Toggle Dark Mode"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <CgSun size={20} /> : <CgMoon size={20} />}
      </button>
    </nav>
  )
}
