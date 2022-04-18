import Link from 'next/link'
import Container from './Container'

const links = [
  { href: '/', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' }
]

export default function Navbar() {
  return (
    <nav className="flex items-center pt-6 pb-10 font-extrabold">
      <div className="pl-0 flex gap-x-4 list-none text-xl">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <a className="text-inherit font-extrabold">{link.label}</a>
          </Link>
        ))}
      </div>
    </nav>
  )
}
