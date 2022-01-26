import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

export default function MobileNavbar({ menuIsOpen, handleStateChange }) {
  return (
    <Menu
      isOpen={menuIsOpen}
      onStateChange={(state) => handleStateChange(state)}
      right
      width={200}
    >
      <ul className="list-none space-y-4 text-center text-lg">
        <li>
          <Link href="/about">
            <a className="text-white font-bold">About</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a className="text-white font-bold">Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="text-white font-bold">Blog</a>
          </Link>
        </li>
      </ul>
    </Menu>
  );
}
