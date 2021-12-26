import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";

export default function Navbar({ home, refs }) {
  const [menuIsOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (element) => {
    setIsMenuOpen(false);
    refs[element].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return isMobile ? (
    <Menu
      isOpen={menuIsOpen}
      onStateChange={(state) => handleStateChange(state)}
      right
      width={200}
    >
      <ul className="list-none space-y-2">
        <li>
          <a
            onClick={() => scrollTo("portfolio")}
            className="menu-item text-white cursor-pointer font-bold"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollTo("about")}
            className="menu-item text-white cursor-pointer font-bold"
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollTo("blog")}
            className="menu-item text-white cursor-pointer font-bold"
          >
            Blog
          </a>
        </li>
      </ul>
    </Menu>
  ) : (
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
            <li
              className="cursor-pointer"
              onClick={() => scrollTo("portfolio")}
            >
              <a className="text-black">Portfolio</a>
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("about")}>
              <a className="text-black">About</a>
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("blog")}>
              <a className="text-black">Blog</a>
            </li>
          </ul>
        ) : (
          <Link href="/">
            <a className="font-bold">← Back to home</a>
          </Link>
        )}
      </nav>
    </header>
  );
}
