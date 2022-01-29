import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between pt-4 px-4 mx-auto font-extrabold max-w-screen-xl">
      <Link href={`/`}>
        <a href="/" className="hover:no-underline text-2xl">
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
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1MkH1xE0nQg61F4_Z-P4DN_Vs_8uXZ58L/view?usp=sharing"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
