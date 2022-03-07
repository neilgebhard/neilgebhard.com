import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function MobileNavbar({
  menuIsOpen,
  setIsMenuOpen,
  handleStateChange,
}) {
  return (
    <Menu
      isOpen={menuIsOpen}
      onStateChange={(state) => handleStateChange(state)}
      right
      width={200}
    >
      <ul className="list-none space-y-4 text-center text-lg">
        {links.map(({ href, label }, index) => (
          <li key={index}>
            <Link href={href}>
              <a
                className="text-white font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            </Link>
          </li>
        ))}
        <li>
          <a
            className="text-white font-bold"
            href="https://drive.google.com/file/d/1259m3muZFfw88eZTFTTYuNY1O8-S2ERk/view?usp=sharing"
          >
            Resume
          </a>
        </li>
      </ul>
    </Menu>
  );
}
