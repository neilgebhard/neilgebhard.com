import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between pt-4 px-4 max-w-screen-xl mx-auto font-extrabold">
      <Link href={`/`}>
        <a href="/" className="flex items-center hover:no-underline text-2xl">
          Neil Gebhard
        </a>
      </Link>
      <ul className="flex gap-x-4 list-none text-xl">
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
