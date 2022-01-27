import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function MobileNavbar({ menuIsOpen, handleStateChange }) {
  return (
    <Menu
      isOpen={menuIsOpen}
      onStateChange={(state) => handleStateChange(state)}
      right
      width={200}
    >
      <ul className="list-none space-y-4 text-center text-lg">
        {links.map(({ href, label }) => (
          <li>
            <Link href={href}>
              <a className="text-white font-bold">{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Menu>
  );
}
