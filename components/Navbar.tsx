import Link from "next/link";
import Image from "next/image";

export default function Navbar({ home }) {
  return (
    <header className="bg-white border-b shadow-md">
      <nav className="flex items-center justify-between px-6 max-w-screen-2xl mx-auto">
        <a href="/" className="flex items-center text-black hover:no-underline">
          <Image
            priority
            src="/favicon.svg"
            className="rounded"
            height={50}
            width={50}
          />
        </a>
        {home ? (
          <ul className="flex gap-x-4 list-none font-bold">
            <li>Portfolio</li>
            <li>Blog</li>
          </ul>
        ) : (
          <Link href="/">
            <a className="font-bold text-black">← Back to home</a>
          </Link>
        )}
      </nav>
    </header>
  );
}
