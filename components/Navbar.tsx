import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between pt-4 px-4 mx-auto font-extrabold max-w-screen-xl">
      <Link href={`/`}>
        <a
          href="/"
          className="text-inherit font-extrabold hover:no-underline text-2xl"
        >
          Neil Gebhard
        </a>
      </Link>
      <ul className="pl-0 flex gap-x-4 list-none text-xl">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>
              <a className="text-inherit font-extrabold">{link.label}</a>
            </Link>
          </li>
        ))}
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1259m3muZFfw88eZTFTTYuNY1O8-S2ERk/view?usp=sharing"
            className="text-inherit font-extrabold"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
